## Use mt7688-wiscan to scan for neighbor access points

### Aim

In this section, we are going to use `mt7688-wiscan` to scan for neighbor access points.

## Controlling LED (outputting GPIO messages)

### Steps
* Install `mt7688-wiscan` module in your project.

    ``` bash
    > npm install mt7688-wiscan
    ```

* Create an app.js to test it.
    
    ``` bash 
    > vim app.js
    ```
    
* Enter the content in `app.js` and run.
    
``` js
var wiscan = require('mt7688-wiscan');

wiscan.scan(function (err, result) {
    console.log(result);
});
```
    
* Then, we can see the results!

![demo](http://iamblue.gitbooks.io/linkit-smart-nodejs/content/images/blink.gif)

        
* To query link quality indicator (LQI) between your Linkit Smart 7688 and it router, use `.lqi(essid, callback)`. Here is an example.
    
``` js
var wiscan = require('mt7688-wiscan');

wiscan.lqi('your_ap_ssid', function (err, result) {
    if (err)
        console.log(err);       // null 
    else
        console.log(result);    // 62 
});
```
    
    