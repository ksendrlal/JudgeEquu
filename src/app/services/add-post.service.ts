import {Post} from "../models/post.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  public posts: Post[] = [];

  constructor(private Http: HttpClient) {
  }

  addPost(post: any): Observable<Post> {
    return this.Http.post<Post>("http://localhost:3000/posts", post);
  }

  getAllDefault() {
    forkJoin([
      this.Http.get<Post[]>(`${environment.apiUrl}/posts`)
    ]).subscribe(results => {
      this.posts = results[0];
    })
  }
}
