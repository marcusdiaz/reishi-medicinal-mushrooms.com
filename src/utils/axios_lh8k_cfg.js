// This purpose of this file is to remove the axios connect
//  and config from whatever other code it would normally live 
//  in because it is going to help with a future lesson or knowledge.


import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8000',
    headers: {

    }
})
