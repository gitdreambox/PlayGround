var koa = require('koa');
var app = koa();

// in koajs, response is attach to 'this', rather then as a parameter pass to a function
app.use(function *() {
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
});

app.listen(3000);