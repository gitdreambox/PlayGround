var object_id = {
    DigitalInput: 3200,
    DigitalOutput: 3201,
    AnalogInput: 3202,
    AnalogOutput: 3203,
    GenericSensor: 3300,
    IlluminanceSensor: 3301,
    PresenceSensor: 3302,
    TemperatureSensor: 3303,
    HumiditySensor: 3304,
    PowerMeasurement: 3305,
    Actuation: 3306,
    SetPoint: 3308,
    LoadControl: 3310,
    LightControl: 3311,
    PowerControl: 3312,
    Accelerometer: 3313,
    Magnetometer: 3314,
    Barometer: 3315
};

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
    Value: 5700,            // R, M, float
    Units: 5701,            // R, string
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
    Value: 5700,            // R, M, float
    Units: 5701,            // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 7. Presence
var resource_id = {
    DigitalInputState: 5500,        // R, M, boolean
    DigitalInputCounter: 5501,      // R, integer
    DigitalInputCounterReset: 5505, // E, opaque
    SensorType: 5751                // R, string
    BusyToClearDelay: 5903,         // RW, integer
    ClearToBusyDelay: 5904,         // RW, integer
};

// 8. Temperature
var resource_id = {
    Value: 5700,            // R, M, float
    Units: 5701,            // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 9. Humidity
var resource_id = {
    Value: 5700,            // R, M, float
    Units: 5701,            // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

// 10. Power Measurement
var resource_id = {
    InstantaneousActivePower: 5800, // R, M, float
    MinMeasuredActivePower: 5801,   // R, float
    MaxMeasuredActivePower: 5802,   // R, float
    MinRangeActivePower: 5803,      // R, float
    MaxRangeActivePower: 5804,      // R, float
    CumulativeActivePower: 5805,    // R, float
    ActivePowerCalibration: 5806,   // W, float
    InstantaneousReactivePower: 5810,   // R, float
    MinMeasuredReactivePower: 5811, // R, float
    MaxMeasuredReactivePower: 5812, // R, float
    MinRangeReactivePower: 5813,    // R, float
    MaxRangeReactivePower: 5814,    // R, float
    ResetMinMaxMeasuredValues: 5605,// E, opaque
    CumulativeReactivePower: 5815,  // R, float
    ReactivePowerCalibration: 5816, // W, float
    PowerFactor: 5820,              // R, float
    CurrentCalibration: 5821,       // R W, float
    ResetCumulativeEnergy: 5822     // E, opaque
};

// 11. Actuation
var resource_id = {
    OnOff: 5850,                    // RW, M, boolean
    Dimmer: 5851,                   // RW, integer
    OnTime: 5852,                   // RW, interger
    MultistateOutput: 5853,         // RW, integer
    ApplicationType: 5750,          // RW, string
};

// 12. Set Point
var resource_id = {
    Value: 5900,                    // RW, M, float
    Colour: 5706,                   // RW, string
    Units: 5701,                    // R, string
    ApplicationType: 5750,          // RW, string
};

// 13. Load Control
var resource_id = {
    EventIdentification: 5823,      // RW, M, string
    StartTime: 5824,                // RW, M, time
    DurationInMin: 5825,            // RW, M, integer
    CriticalLevel: 5826,            // RW, integer
    AvgLoadAdjPct: 5827,            // RW, interger
    DutyCycle: 5828,                // RW, interger
};

// 14. Light Control
var resource_id = {
    OnOff: 5850,                    // RW, M, boolean
    Dimmer: 5851,                   // RW, integer
    Colour: 5706,                   // RW, string
    Units: 5701,                    // R, string
    OnTime: 5852,                   // RW, interger
    CumulativeActivePower: 5805,    // R, float
    PowerFactor: 5820,              // R, float
};

// 15. Power Control
var resource_id = {
    OnOff: 5850,                    // RW, M, boolean
    Dimmer: 5851,                   // RW, integer
    OnTime: 5852,                   // RW, interger
    CumulativeActivePower: 5805,    // R, float
    PowerFactor: 5820,              // R, float
};

// 16. Accelerometer
var resource_id = {
    XValue: 5702,           // R, M, float
    YValue: 5703,           // R, float
    ZValue: 5704,           // R, float
    Units: 5701,            // R, string
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
};


// 17. Magnetometer
var resource_id = {
    XValue: 5702,           // R, M, float
    YValue: 5703,           // R, float
    ZValue: 5704,           // R, float
    Units: 5701,            // R, string
    CompassDirection: 5705, // R, float
};

// 18. Barometer
var resource_id = {
    Value: 5700,            // R, M, float
    Units: 5701,            // R, string
    MinMeasuredValue: 5601, // R, float
    MaxMeasuredValue: 5602, // R, float
    MinRangeValue: 5603,    // R, float
    MaxRangeValue: 5604,    // R, float
    ResetMinMaxMeasuredValues: 5605,    // E, opaque
};

