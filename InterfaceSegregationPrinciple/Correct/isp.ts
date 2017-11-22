interface Eatable
{
  eat(): void;
}

interface Poopable
{
  poop(): void;
}

interface Crawalable
{
  crawl(): void;
}

class Snake implements Eatable, Poopable, Crawalable
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
  crawl()
  {
    console.log("Snake crawling")
  }

}
