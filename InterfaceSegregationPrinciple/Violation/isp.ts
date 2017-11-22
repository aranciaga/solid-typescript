interface IAnimal
{
  eat(): void;
  poop(): void;
  walk(): void;
}

class Snake implements IAnimal
{

  constructor()
  {
  }

  eat()
  {
    console.log("Snake eating")
  }
  poop()
  {
    console.log("Snake pooping")
  }
  walk()
  {
    console.log("Snake... uhm...")
  }

}
