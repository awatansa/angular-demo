import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideRouterStore } from "@ngrx/router-store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { booksReducer } from "@/core/store/reducers/books.reducer";
import { collectionReducer } from "@/core/store/reducers/collection.reducer";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({books: booksReducer, collection: collectionReducer}),
    provideEffects(),
    provideRouterStore(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideHttpClient(),
  ],
};
