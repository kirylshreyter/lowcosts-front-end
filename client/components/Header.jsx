import React, {Component} from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';

export default class Header extends Component {
    render() {
        const navClasses = 'navbar bg-dark';
        return (
            <nav className={navClasses}>
                <ul className='navbar-nav ml-lg-auto'>
                    <LoginForm/>
                </ul>
            </nav>
        )
    }

}