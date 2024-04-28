import { Component, OnInit } from "@angular/core";
import { BookCollectionComponent } from "@/features/book-collection/book-collection.component";
import { BookListComponent } from "@/features/book-list/book-list.component";
import { selectBookCollection, selectBooks } from "@/core/store/selectors/books.selectors";
import { BooksActions, BooksApiActions } from "@/core/store/actions/books.action";
import { GoogleBooksService } from "@/core/services/api/books.service";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    BookCollectionComponent,
    BookListComponent,
    AsyncPipe
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) {
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe({
        next: (books) => this.store.dispatch(BooksApiActions.retrievedBookList({books})),
        error: () => this.store.dispatch(BooksApiActions.retrieveBookFailed())
      });
  }
}
