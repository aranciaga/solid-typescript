class BlackCoffee
{
  type = "Strong"
}

class CoffeePot
{

  constructor(private coffee: BlackCoffee)
  {
    // ...
  }

  getType()
  {
    return this.coffee.type;
  }

  // ...

}
