export class Admin {
  constructor(
    public password: string = "",
    public login: string = "",
    public id: number = -1
  ) {}
  public build({
                 password,
                 login,
                 id
               }: { password: any; login: any; id: any  }): Admin {
    this.login = login;
    this.password = password;
    this.id = id;
    return this;
  }
}
