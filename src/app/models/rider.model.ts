export class RiderModel {
  constructor(
    public name: string = "",
    public surname: string = "",
    public patronymic: string = "",
    public dob: string = "",
    public password: string = "",
    public login: string = "",
    public id: number = -1
  ) {}
  public build({
                  name,
                  surname,
                  patronymic,
                  dob,
                  password,
                  login,
                  id
                }: { name: any; surname: any; patronymic: any; dob: any; password: any; login: any; id: any }): RiderModel {
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.dob = dob;
    this.login = login;
    this.password = password;
    this.id = id;
    return this;
  }
}
