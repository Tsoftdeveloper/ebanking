export class Trans {
  toAccount: string;
  toAccName: string;
  fromAccount: string;
  amount: number;
  status: string;
  datetime: string;

  constructor(
    toAccount: string,
    toAccName: string,
    fromAccount: string,
    amount: number,
    status: string,
    datetime: string )
  {
    this.toAccount = toAccount;
    this.toAccName = toAccName;
    this.fromAccount = fromAccount;
    this.amount = amount;
    this.status = status;
    this.datetime = datetime;
  }
}
