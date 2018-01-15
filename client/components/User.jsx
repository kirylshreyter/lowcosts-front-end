import React, {Component} from 'react';

export default class User extends Component {
    render() {
        let name = this.props.name;
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }

}