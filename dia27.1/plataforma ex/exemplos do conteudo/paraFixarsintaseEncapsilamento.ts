class Tv2 {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string;
    private _connectedTo: string;
  
    constructor(b: string, s: number, r: string, c: string) {
      console.log('tv', b)
      this._brand = b;
      this._size = s;
      this._resolution = r;
      this._connections = c;
    }
    
    turnOn() {
        console.log("print TV:", this._brand, this._size, this._resolution, this._connections)
    }

    get connect() {
        return this._connectedTo
    }

    set connect(conn: string) {
      //como vou saber quais conecçoes estçao disponiveis?
    }
  }
  
  const tv11 = new Tv2('TV SMART', 24, 'boa', 'HDMI')
  
  tv1.turnOn();