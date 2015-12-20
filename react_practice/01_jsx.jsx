$('button').click(function () {
    $('.button-container').append('<h1>You have clicked the button</h1>');
});

// JSX
{
    render: function () {
        var = a;
        a = 1;
        console.log(a + 1);

        return (
            <div>Hello World!</div>
        );
    }
}

// Compiled JS
{
    render: function () {
        return React.createElement('div', null, 'Hello World!');
    }
}