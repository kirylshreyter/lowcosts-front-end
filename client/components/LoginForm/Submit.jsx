import React, {Component} from 'react';
import $ from 'jquery';

export default class Submit extends Component {
    render() {
        let submit = () => {
            $.ajax({
                url: 'https://localhost:8081',
                data: 'aaa'

            });
        };
        return (
            <button type='button' className='btn btn-primary' onClick={submit}>Log In</button>
        )
    }
}