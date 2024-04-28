import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Book } from "@/core/models/state/books.model";

@Injectable({providedIn: "root"})
export class GoogleBooksService {
  private http = inject(HttpClient);

  public getBooks(): Observable<Array<Book>> {
    return this.http.get<{
      items: Book[]
    }>("https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=oliver%20sacks")
      .pipe(map(books => books.items || []));
  }
}
