import axios from 'axios';

class Service {
    constructor() {
        this.state = {
            baseUrl: 'https://jsonplaceholder.typicode.com'
        }
    }

    validateRequest(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        });
    }

    static async get(url) {
        let baseUrl = 'https://jsonplaceholder.typicode.com'
        return await axios.get(baseUrl + url)
    }

    static async post(url, data) {
        let baseUrl = 'https://jsonplaceholder.typicode.com'
        return await axios.post(baseUrl + url, data)
    }

    static async put(url, data) {
        let baseUrl = 'https://jsonplaceholder.typicode.com'
        return await axios.post(baseUrl + url, data)
    }

    static async delete(url) {
        let baseUrl = 'https://jsonplaceholder.typicode.com'
        return await axios.post(baseUrl + url)
    }

}

export default Service;