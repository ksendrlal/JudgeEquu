import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Competition} from "../models/competition.model";

@Injectable({
  providedIn: 'root'
})
export class AddCompetitionService {
  public competitions: Competition[] = [];

  constructor(private Http: HttpClient) {
  }

  addCompetition(competition: any): Observable<Competition> {
    return this.Http.post<Competition>("http://localhost:3000/competitions", competition);
  }

  getAllDefault() {
    forkJoin([
      this.Http.get<Competition[]>(`${environment.apiUrl}/competitions`)
    ]).subscribe(results => {
      this.competitions = results[0];
    })
  }
}
