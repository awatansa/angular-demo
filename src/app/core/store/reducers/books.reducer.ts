import { Book } from "@/core/models/state/books.model";
import { createReducer, on } from "@ngrx/store";
import { BooksApiActions } from "@/core/store/actions/books.action";

export const initialState: ReadonlyArray<Book> = [];
export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, {books}): ReadonlyArray<Book> => books),
  on(BooksApiActions.retrieveBookFailed, (): ReadonlyArray<Book> => [])
);
