const { Component } = React;

class Programming extends Component {
    render() {
        console.log("we're rendering Programming");
        return (
            <div>
                <h1>This is the programming page</h1>
                <video src="https://player.vimeo.com/external/87899059.hd.mp4?s=8bebb1223baebfcffcdd63ef7e6452dcb7a1afc1&profile_id=119"></video>
            </div>
        )
    }
};

module.exports = Programming;
