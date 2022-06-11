import {Post} from "../models/post.model";
import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {forkJoin} from "rxjs";
import {environment} from "../../environments/environment";
import {Competition} from "../models/competition.model";


@Injectable({
  providedIn: 'root'
})
export class SeachCompService {
  public competitions: Competition[] = [];
  constructor(private http: HttpClient) { }
  getAllDefault() {
    forkJoin([
      this.http.get<Competition[]>(`${environment.apiUrl}/competitions`)
    ]).subscribe( results => {
      this.competitions = results[0];
    });
  }
  searchByCompetition(searchQuery: string): void {
    this.http
      .get<Competition[]>(`${environment.apiUrl}/competitions?q=${searchQuery}`)
      .subscribe(competitions => (this.competitions = competitions));
  }
}
