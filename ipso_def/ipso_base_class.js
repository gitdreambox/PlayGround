var root = [ 'dev', 'gpio', 'pwr', 'load', 'sen', 'lt', 'msg', 'loc', 'cfg'];
var path = {
    dev: [],
    gpio: [],
    pwr: [],
    load: [],
    sen: [],
    lt: [],
    msg: [],
    loc: [],
    cfg: []
};

function Ipso () {
    // if no getter & !function .... read value
    // else invoke getter and setter
    this.resource = {
        dev: {},
        cfg: {},
        gpio: {
            getter: function () {},
            setter: function () {},
            btn: { getter: fn1, setter: fn2 },
            ain: { getter: fn1, setter: fn2 }
        }
    };
}

Ipso.prototype.assignResource = function (rt, getter, setter) {
    // 'gpio.btn'
    this.resource[rt]
};


Ipso.prototype.getResource = function (rt, idx) {
    var resrc = find();
    return resrc.getter(0);
};

Ipso.prototype.setResource = function (rt, idx, val) {

};

var ipsoBase = {
    dev: {
        mfg: 'sivann',      // if=rp, string
        mdl: {              // if=rp, string
            hw: 'v0.0.1',   // if=rp, string
            sw: 'v0.0.1'    // if=rp, string
        },
        ser: 'SN00000001',  // if=rp, string
        n: 'device name',   // if=p,rp, string
        pwr: {              // pwr/{#} if=rp, enum = [0: line, 1: battery, 2: harverster]
            type: 1,
            v: 3.3          // pwr/v/{#} if=s, decimal (Unit:V)
        },
        time: 12345678,     // if=p,rp, integer (Unit:Sec)
        uptime: 12345678,   // if=s, integer (Unit:Sec)
    },
    cfg: {
        services: [],       // </cfg/services>;rt="core.rd core.mp foo"
        stack: {
            phy: 'ipv4',
            mac: 'EC-12-34-56-78',
            net: '192.168.0.111',
            rtg: ''
        }
    }
};