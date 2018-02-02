import {combineReducers} from 'redux';
import user from './user';
import header from './header'
import loginForm from './loginForm'

export default combineReducers({
    header,
    user,
    loginForm
})
