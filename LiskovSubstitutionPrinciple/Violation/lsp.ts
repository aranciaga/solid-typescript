class SuperClass
{

  //...

  someMethod()
  {

    let i: number        = 0
    let CONDITION:number = 24 // Example

    while(i >= CONDITION)
    {
      // Do something
      i++
    }

  }

  //...

}

class SubClass extends SuperClass
{

  //...

  someMethod()
  {
    let i:number         = -1 // Precondition violation
    let CONDITION:number = 24 // Example

    while(i >= CONDITION)
    {
      // Do something
      i++
    }
  }

  //...

}
