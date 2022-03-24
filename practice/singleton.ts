class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton;
  }
}

function tryToGetInctance(){
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
        console.log("Both variables are the same instance")
    } else {
        console.log("Variables are different inctances")
    }
}