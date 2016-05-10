import {API_ROOT} from '../constants';

export default {
    get(route) {
        return fetch(API_ROOT + route, {
            method: 'GET',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(query)
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => { throw err; });
    },
    post(route, data) {
        return fetch(API_ROOT + route, {
            method: 'POST',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                return json;
            })
            .catch(err => { throw err; });
    },
    graph(query) {
        return fetch(API_ROOT + 'graph', {
            method: 'POST',
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'Accept': 'applciation/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(payload => {
            console.log(payload.data);
            if(payload && payload.errors) {
                throw payload.errors;
            } else if (payload && payload.data && payload.data !== null) {
                return payload.data;
            } else {
                throw 'network error';
            }
        })
        .catch(err => { throw err; });
    }
}