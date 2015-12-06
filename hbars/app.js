

Handlebars.registerHelper('unless', function (value, options) {
    console.log('options:', options);
    if (value)
        return options.inverse(this);
    else
        return options.fn(this);
});

Handlebars.registerHelper('iterate', function (context, options) {
    var ret = '',
        i, len;
    console.log(options);
    for (i = 0, len = context.length; i < len; i++) {
        ret += options.fn(context[i]);
    }
    return ret;
});

Handlebars.registerHelper('displayName', function (person, greeting) {
    console.log(greeting);
    return [ greeting, person.firstName, person.lastName ].join(' ');
});

$(function () {
    var source = $("#page-template").html();
    var render = Handlebars.compile(source);

    var person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    var renderedHtml = render(person);
    $(document.body).html(renderedHtml);
});