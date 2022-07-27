import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';

@Injectable()

export class DataService {
  private url = 'http://localhost:3000/';
  userId!: string;

  constructor(private http: HttpClient) {}

  Get(username: string, password: string): Observable<apiReturn> {
    return this.http
      .get<apiReturn>(this.url + `${username}?password=${password}`)
      .pipe(
        mergeMap((data) => {
          this.userId = data.id;
          return this.http.get<apiReturn>(
            this.url + `${username}?password=${password}`
          );
        })
      );
  }

  Post(note: note): void {
    this.http.post(this.url + this.userId, note);
  }

  Put(noteId: string, update: Partial<note>) {
    this.http.put(this.url + `${this.userId}/?noteId=${noteId}`, update);
  }

  Delete(noteId: string) {
    this.http.delete(this.url + `${this.userId}/?noteId=${noteId}`);
  }
}
