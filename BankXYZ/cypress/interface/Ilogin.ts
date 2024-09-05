export interface ILogin {
  navigate(url: string): void;
  addCustomer(): void;
  openAccount(): void;
  checkCustomer(): void;
  backHomeAndLoginWithCustomer(): void;
}
