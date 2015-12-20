// <script type="text/jsx">

// </script>

var Badge = React.createClass({
    render: function () {
        return (
            <button className="btn btn-parimary" type="button">
                Messages <span className="badge">4</span>
            </button>
        );
    }
});

var element = React.createElement(Badge);
React.render(element, document.body);