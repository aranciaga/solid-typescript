interface OS
{
  name: string;
}

class Windows implements OS
{
  name : string;
  constructor()
  {
    this.name = "Microsoft Windows"
  }
}

class GNULinux implements OS
{
  name : string;
  constructor()
  {
    this.name  = "GNU/Linux"
  }
}

class Hosts
{

  constructor(private OpSys: OS) { }

  returnHostsDir()
  {
    if(this.OpSys.name == "GNU/Linux")
    {
      return "/etc/hosts"
    }
    else if (this.OpSys.name == "Microsoft Windows")
    {
      return "C:/Windows/System32/drivers/etc/hosts"
    }
    //...
  }

}
