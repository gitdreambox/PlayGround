var Badge = React.createClass({
    render: function () {
        return (
            <button>
                {this.props.title} - {this.props.number}
            </button>
        );
    }
});

var Form = React.createClass({
    render: function () {
        return (
            <div>
                <Badge title='Inbox' number=5 />
            </div>
        );
    }
});

var element = React.createElement(Badge);
React.render(element, document.body);