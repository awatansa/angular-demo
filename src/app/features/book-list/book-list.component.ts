import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "@/core/models/state/books.model";
import { NgForOf } from "@angular/common";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-book-list",
  standalone: true,
  imports: [
    NgForOf,
    ButtonModule
  ],
  templateUrl: "./book-list.component.html",
  styleUrl: "./book-list.component.scss"
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
