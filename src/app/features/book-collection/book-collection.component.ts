import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "@/core/models/state/books.model";
import { NgForOf } from "@angular/common";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-book-collection",
  standalone: true,
  imports: [
    NgForOf,
    ButtonModule
  ],
  templateUrl: "./book-collection.component.html",
  styleUrl: "./book-collection.component.scss"
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
