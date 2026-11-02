import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  
  deposit = (amount: number): void => {
    if(this.validateStatus()){
      const totalDeposit = amount + 10

    }
  }
}