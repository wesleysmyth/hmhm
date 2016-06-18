const { Component } = React;

class Home extends Component {
    render() {
        console.log("we're rendering home");
        return (
            <div>
                <span>This is the home page</span>
                <a href="#/programming">Go to the programming page</a>
            </div>
        );
    }
};

module.exports = Home;
