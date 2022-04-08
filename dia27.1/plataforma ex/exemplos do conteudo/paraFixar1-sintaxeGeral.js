var Tv = /** @class */ (function () {
    //   connectedTo: string;
    function Tv(b, s, r, c) {
        console.log('tv', b);
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    Tv.prototype.turnOn = function () {
        console.log("print TV:", this.brand, this.size, this.resolution, this.connections);
    };
    return Tv;
}());
var tv1 = new Tv('TV SMART', 24, 'boa', 'HDMI');
tv1.turnOn();
