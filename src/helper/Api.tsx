import axios, { AxiosRequestConfig } from "axios";


let instance;

class FetchApi { 

    private headers: AxiosRequestConfig;
    private token: string | null;

    constructor() {
        if (instance) {
            throw new Error("Should to create once only object")
        }

        this.headers = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        }
        instance = this
    }

    setToken(token: string) {
        this.token = token;
    }

    get(path: string, params?: string[][]) {
        const url = `${path}/${new URLSearchParams(params).toString()}`;
        return axios.get(url, this.headers);
    }

    post(path: string, params?: object[]) {
        return axios.post(path, params);
    }

    put() {

    }

    delete() {

    }
}

export default new FetchApi();