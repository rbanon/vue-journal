import axios from "axios"

const journalApi = axios.create ({
    baseURL: 'https://vue-demos-2c80f-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi