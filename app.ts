class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log('voce depositou')
  }

  withdraw = () => {
    console.log('voce sacou')
  }
}

const myAccount = new Account('nath', 1)
console.log(myAccount)

const account: Account = new Account('joao', 28)
account.deposit()

