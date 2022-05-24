class Department {
  name: string

  constructor(nameStr: string) {
    this.name = nameStr
  }
}

const accounting = new Department('Accounting')

console.log(accounting)