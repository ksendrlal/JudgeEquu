import {Post} from "../models/post.model";
import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {forkJoin} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public posts: Post[] = [];
  constructor(private http: HttpClient) { }
  getAllDefault() {
    forkJoin([
      this.http.get<Post[]>(`${environment.apiUrl}/posts`)
    ]).subscribe( results => {
      this.posts = results[0];
    });
  }
  searchByPost(searchQuery: string): void {
    this.http
      .get<Post[]>(`${environment.apiUrl}/posts?q=${searchQuery}`)
      .subscribe(posts => (this.posts = posts));
  }
}
