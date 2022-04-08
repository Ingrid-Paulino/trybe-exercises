class Pascoa {
  private _chocolate: string;
  private _granulado: string;
  private _amendoin: string;
  private _bombons: string;

  constructor(c: string, g: string, a: string, b: string) {
    this._chocolate = c;
    this. _granulado = g;
    this._amendoin = a;
    this._bombons = b;
  }

  public get chocolat(): string {
    return this._chocolate;
  }

  public get granulad(): string {
    return this._granulado;
  }

  public get amendoi(): string {
    return this._amendoin;
  }

  public get bombon(): string {
    return this._bombons;
  }

  set setChocolate(chocolate: string): void {
    this._chocolate = chocolate;
  }
}


export default Pascoa;