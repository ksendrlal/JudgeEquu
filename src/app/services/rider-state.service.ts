import {RiderModel} from "../models/rider.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class RiderStateService {
  rider!: RiderModel;

  constructor() {
  }

  setRider(rider: RiderModel): void {
    window.localStorage.setItem('user', JSON.stringify(rider));
    this.rider = rider;
}

  fetch(): void {
    const rider = localStorage.getItem('user');
    if (rider) {
      this.rider= new RiderModel().build(JSON.parse(rider));
    }
  }

  logout(): void {
    window.localStorage.removeItem('judge');
    let rider = null;
  }

  public isAuth(): boolean {
    return this.rider != null;
  }

}
