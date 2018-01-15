import React, {Component} from 'react';
import Username from './Username.jsx';
import Password from './Password.jsx';
import Submit from './Submit.jsx';

export default class LoginForm extends Component {
    render() {
        return (
            <form className='form-inline float-right'>
                <Username/>
                <Password/>
                <Submit/>
            </form>
        )
    }

}