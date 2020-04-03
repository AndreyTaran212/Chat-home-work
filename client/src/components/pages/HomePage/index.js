import React, {Component} from 'react';
import MessagesList from "../../MessagesList";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: new Map(),
            users: new Map(),
            currentUser: '',
            message: '',
        }
    }


    render() {
        return (
            <div>
                <ChatsList/>
                <div>

                    <h1>Home page</h1>
                    <MessagesList/>
                    <div>
                        <input type="text" value={this.state.message}
                               onChange={(e) => {
                                   this.setState({
                                       message: e.target.value,
                                   });
                               }}/>
                        <button onClick={this.sendMessage}>send message
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;