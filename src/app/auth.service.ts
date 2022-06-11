import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RiderModel} from "./models/rider.model";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private Httpclient: HttpClient) {}

/*  login(rider: any): Observable<RiderModel> {
    return this.Httpclient.get<RiderModel[]>(
      `http://localhost:3000/riders?login=${rider.login}&password=${rider.password}`
    ).pipe(map(riders => (riders.length ? riders[0] : null)));
  }*/

  register(rider: any): Observable<RiderModel> {
    return this.Httpclient.post<RiderModel>("http://localhost:3000/riders", rider);
  }
}
