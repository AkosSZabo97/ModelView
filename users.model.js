// MVC Model View Controller

class UsersModel {
    apiUrl = 'http://jsonplaceholder.typicode.com/users/';

    getUserById(id, options) {
        return fetch(this.apiUrl + id, options).then(res => res.json());
    };
};