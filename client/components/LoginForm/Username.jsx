import React, {Component} from 'react';

export default class Username extends Component {
    render() {
        return (
            <div className='input-group'>
                <input className='form-control mb-2 mr-sm-2 mb-sm-0' type='text' name='username' value='' placeholder='Enter your username'/>
            </div>
        )
    }
}