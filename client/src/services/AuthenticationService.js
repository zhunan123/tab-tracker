/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}


//AuthenticationService.register({
//email: 'testing@gmail.com',
//password: '123456'
//})