class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
//   connectedTo: string;

  constructor(b: string, s: number, r: string, c: string) {
    console.log('tv', b)
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }
  
  turnOn() {
      console.log("print TV:", this.brand, this.size, this.resolution, this.connections)
  }
}

const tv1 = new Tv('TV SMART', 24, 'boa', 'HDMI')

tv1.turnOn();