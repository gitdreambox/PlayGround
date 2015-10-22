var koa = require('koa');
var app = koa();
var router = require('koa-router');
var api = router();

app.use(api.routes())
   .use(api.allowedMethods());
// middleware
var requestTime = function (headerName) {
    return function *() {
        var start = new Date();
        yield next;
        var end = new Date();
        var ms = end - start;
        this.set(headerName, ms + 'ms');
    };
};


// use middleware
app.use(requestTime('Response-time'));

// in koajs, response is attach to 'this', rather then as a parameter pass to a function
/*app.use(function *() {
    console.log(this.request);  // to see what is contained in request object
    var url = this.request.url;

    // route
    if (url === '/') {
        // this.response.body
        // alias
        this.body = 'Hello from koajs';
    } else if (url === '/date') {
        this.body = new Date();
    } else {
        this.status = 404;
        this.body = 'Sorry friend, I do\'t know what you want';
    }
});*/

api.get('/', function *() {
    this.body = "Hello from koajs using the router middleware";
});

api.get('/date', function *() {
    this.body = new Date();
});
app.listen(3000);