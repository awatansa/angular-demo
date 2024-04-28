import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Book } from "@/core/models/state/books.model";

export const BooksActions = createActionGroup({
  source: "Books",
  events: {
    "Add Book": props<{ bookId: string }>(),
    "Remove Book": props<{ bookId: string }>()
  }
});

export const BooksApiActions = createActionGroup({
  source: "Books API",
  events: {
    "Retrieved Book List": props<{ books: ReadonlyArray<Book> }>(),
    "Retrieve Book Failed": emptyProps(),
  },
});
