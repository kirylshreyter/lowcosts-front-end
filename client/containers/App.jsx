import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/application.scss';
import User from '.././components/User.jsx';
import Header from '.././components/Header.jsx';

class App extends Component {
    render() {
        const name = this.props.user.name;
        return (
            <div>
                <Header/>
                <div className='container'>
                    <User name={name}/>
                    <h2>Welcome to React</h2>
                    <hr/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(App)