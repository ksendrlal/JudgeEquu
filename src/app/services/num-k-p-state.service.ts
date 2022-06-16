import {Injectable} from "@angular/core";
import {Post} from "../models/post.model";
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import {environment} from "../../environments/environment";
import {NumKP} from "../models/num-k-p.model";

@Injectable({
  providedIn: 'root'
})
export class NumKPStateService {
  public numbersKP: NumKP[] = [];
  constructor(private http: HttpClient) { }
  getAllDefault() {
    forkJoin([
      this.http.get<NumKP[]>(`${environment.apiUrl}/numbersKP`)
    ]).subscribe( results => {
      this.numbersKP = results[0];
    });
  }
  searchByNumberKP(searchQuery: string): void {
    this.http
      .get<NumKP[]>(`${environment.apiUrl}/numbersKP?q=${searchQuery}`)
      .subscribe(numbersKP => (this.numbersKP = numbersKP));
  }
}
