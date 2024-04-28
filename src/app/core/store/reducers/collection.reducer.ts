import { createReducer, on } from "@ngrx/store";
import { BooksActions } from "@/core/store/actions/books.action";

export const initialState: ReadonlyArray<string> = [];
export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.addBook, (state, {bookId}) => {
    if (state.indexOf(bookId) > -1) {
      return state;
    }
    return [...state, bookId];
  }),
  on(BooksActions.removeBook, (state, {bookId}) => {
    return state.filter((id) => id !== bookId);
  })
);
