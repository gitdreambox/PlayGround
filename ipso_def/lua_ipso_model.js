// use js syntax

// madatory
var ipso = {
    dev: {
        mfg: 'sivann',
        mdl: {
            hw: 'v0.0.1',
            sw: 'v0.0.1'
        },
        ser: 'SN00000001',
        n: 'sensor',
        // pwr: {
        //     line: { voltage: null },
        //     battery: { voltage: null },
        //     harverster: { voltage: null }
        // },
        pwr: {
            type: 1, // 0: line, 1: battery, 2: harverster
            v: 3.3
        },
        time: 12345678, // now
        uptime: 12345678,
    },
    cfg: {
        services: [],
        stack: {
            phy: 'ipv4',
            mac: 'EC-12-34-56-78',
            net: '192.168.0.111',
            rtg: ''
        }
    },
};

// Specific function set
var gpio = {
    btn:,
    din:,
    dout:,
    ain:,
    aout:,
    dimin,
};

var pwr = {
    w:,
    kwh:,
    rel:,
    dim:
};

var load = {
    id:,
    time:,
    dur:,
    crt:,
    lap:,
    dc:
};

var sen = {
    mot: {
       count:,
       status:, 
    },
    con: {
        count:,
        status:
    },
    // generic
};

var lt = {
    on:,
    dim:
};

var msg = {
    status:,
    alarms:,
    disp:
};

var loc = {
    gps:,
    xy:,
    sem:,
    fix:,
    per:
};

// IPSO high-level smart objects

// 1. Digital Input
var resource_id = {
    State: 5500,            // R, M, boolean
    Counter: 5501,          // R, integer
    Polarity: 5502,         // RW, boolean
    DebouncePeriod: 5503,   // RW, integer
    EdgeSelection: 5504,    // RW, integer
    CounterReset: 5505,     // RW, opaque
    ApplicationType: 5750,  // RW, string
    SensorType: 5751        // R, string
};

// 2. Digital Output
var resource_id = {
    State: 5550,            // R, M, boolean
    Polarity: 5551,         // RW, boolean
    ApplicationType: 5750,  // RW, string
};

// 3. Analog Input
var resource_id = {
    CurrentValue: 5600,     // R, M, float
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
    ApplicationType: 5750,  // RW, string
    SensorType: 5751        // R, string
};

// 4. Analog Output
var resource_id = {
    CurrentValue: 5650,     // RW, M, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ApplicationType: 5750,  // RW, string
};

// 5. Generic Sensor
var resource_id = {
    Value: 5700,        // R, M, float
    Units: 5701,        // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
    ApplicationType: 5750,  // RW, string
    SensorType: 5751        // R, string
};

// 6. Illiminance
var resource_id = {
    Value: 5700,        // R, M, float
    Units: 5701,        // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 7. Presence
var resource_id = {
    DigitalInputState: 5500,        // R, M, boolean
    DigitalInputCounter: 5501,        // R, integer
    DigitalInputCounterReset: 5505,        // E, opaque
    SensorType: 5751        // R, string
    BusyToClearDelay: 5903, // RW, integer
    ClearToBusyDelay: 5904, // RW, integer
};

// 8. Temperature
var resource_id = {
    Value: 5700,        // R, M, float
    Units: 5701,        // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 9. Humidity
var resource_id = {
    Value: 5700,        // R, M, float
    Units: 5701,        // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 10. Power Measurement
var resource_id = {
    InstantaneousActivePower: 5800,        // R, M, float
    MinMeasuredActivePower: 5801, // R, float
    MaxMeasuredActivePower: 5802, // R, float
    MinRangeActivePower: 5803,    // R, float
    MaxRangeActivePower: 5804,    // R, float
    CumulativeActivePower: 5805,    // R, float
    ActivePowerCalibration: 5806, // W, float
    InstantaneousReactivePower: 5810,        // R, float
    MinMeasuredReactivePower: 5811, // R, float
    MaxMeasuredReactivePower: 5812, // R, float
    MinRangeReactivePower: 5813,    // R, float
    MaxRangeReactivePower: 5814,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
    CumulativeReactivePower: 5815,    // R, float
    ReactivePowerCalibration: 5816, // W, float
    PowerFactor: 5820, // R, float
    CurrentCalibration: 5821,   // R W, float
    ResetCumulativeEnergy: 5822 // E, opaque
};

// 11. Actuation
var resource_id = {
    OnOff: 5850,        // RW, M, boolean
    Dimmer: 5851,        // RW, integer
    OnTime: 5852,       // RW, interger
    MultistateOutput: 5853, // RW, integer
    ApplicationType: 5750,  // RW, string
};

// 12. Set Point
var resource_id = {
    Value: 5900,        // RW, M, float
    Colour: 5706,        // RW, string
    Units: 5701,       // R, string
    ApplicationType: 5750,  // RW, string
};

// 13. Load Control
var resource_id = {
    EventIdentification: 5823, // RW, M, string
    StartTime: 5824,    // RW, M, time
    DurationInMin: 5825,    // RW, M, integer
    CriticalLevel: 5826,    // RW, integer
    AvgLoadAdjPct: 5827,    // RW, interger
    DutyCycle: 5828,        // RW, interger
};

// 14. Light Control
var resource_id = {
    OnOff: 5850,        // RW, M, boolean
    Dimmer: 5851,        // RW, integer
    Colour: 5706,        // RW, string
    Units: 5701,       // R, string
    OnTime: 5852,       // RW, interger
    CumulativeActivePower: 5805,    // R, float
    PowerFactor: 5820, // R, float
};

// 15. Power Control
var resource_id = {
    OnOff: 5850,        // RW, M, boolean
    Dimmer: 5851,        // RW, integer
    OnTime: 5852,       // RW, interger
    CumulativeActivePower: 5805,    // R, float
    PowerFactor: 5820, // R, float
};

// 16. Accelerometer
var resource_id = {
    XValue: 5702,        // R, M, float
    YValue: 5703,        // R, float
    ZValue: 5704,       // R, float
    Units: 5701,       // R, string
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
};


// 17. Magnetometer
var resource_id = {
    XValue: 5702,        // R, M, float
    YValue: 5703,        // R, float
    ZValue: 5704,       // R, float
    Units: 5701,       // R, string
    CompassDirection: 5705, // R, float
};

// 18. Barometer
var resource_id = {
    Value: 5700,        // R, M, float
    Units: 5701,        // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// profile-dependent
// ".well-known/profile"
// For example, the profile of the sensor "coap://www.example.org/s"
// can be acquired with a GET to: "coap://www.example.org/.well-known/profile?path=s"

// Usage of URI Queries
// form "N=V", where N is the name of the field to filter on, and V is the desired value
// AND for multiple queries

// Camera sensor example: "coap://www.example.org/cam"
//  supported options:
//      "Uri-Host" (3), "ETag" (4), "Uri-Port" (7), "Uri-Path" (11), "Content-Format" (12), "Token" (19),
//      "Block2" (23) and "Proxy-Uri" (35)
//  supported content formats
//      "text/plain" (0), "application/link-format" (40) and "application/json" (50)
//  supports the GET method (1)
//  support Block2 with Block sizes of 256 or 512 bytes
// 
// Req: GET coap://www.example.org/.well-known/profile
//  Res: 2.05 Content (application/json)
    {
        "profile":
        {
            "path":"cam",
            "m":[1],
            "op":[3,4,7,11,12,19,23,35],
            "b2s":[4,5],
            "cf":[0,40,50]
        }
    }

// If the server also supports three other resources, such as a temperature sensor (which can do observe), a humidity and a fire
// detector, the request/response pair would look as follows 
// Req: GET coap://www.example.org/.well-known/profile
//  Res: 2.05 Content (application/json)
{
    "profile":[
        {
            "path":".",
            "m":[1],
            "op":[3,4,7,11,12,19,35],
            "cf":[0]
        },
        {
            "path":"cam",
            "m":[1],
            "op":[3,4,7,11,12,19,23,35],
            "b2s":[4,5],
            "cf":[0,40,50]
        },
        {
            "path":"temperature",
            "m":[1],
            "op":[3,4,6,7,11,12,19,35],
            "cf":[0]
        }
    ]
}

// Please note that the response did not include profiles for the "fire" and "humidity" resources. Instead it included a default profile that
// applies for these two not explicitly mentioned resources.


// If the client now wants to get the resources that support contentformat "application/json" (50) it looks as follows:
// Req: GET coap://www.example.org/.well-known/profile?cf=50
//  Res: 2.05 Content (application/json)
{
    "profile":
    {
        "path":"cam",
        "m": [1],
        "op": [3, 4, 7, 11, 12, 19, 23, 35],
        "b2s": [4, 5],
        "cf": [0, 40, 50]
    }
}

/*var profile = {
    path: 'uri'
    m: [m1,m2,...]
    op: [op1,op2,...]
    b1s: [b1s1,b1s2,...],   // each 3-bit uint - size: 2^x
    b2s: [b2s1,b2s2,...],
    cf: [cf1,cf2,...],

};*/
