/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line eol-last
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}