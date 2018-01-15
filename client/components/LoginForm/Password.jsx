import React, {Component} from 'react';

export default class Password extends Component {
    render() {
        return (
            <div className='input-group'>
                <input className='form-control mb-2 mr-sm-2 mb-sm-0' type='password' name='password' value='' placeholder='Enter your password'/>
            </div>
        )
    }
}