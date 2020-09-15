class CommentsModel { 
    apiUrl = 'http://jsonplaceholder.typicode.com/posts/';

    getCommentForPost(id) {
        return this.getApiData(id);
    }

    createComment(body, email, userId = 1) {
        const post = {
            body,
            email
        };

        return this.getApiData(userId, {
            method: 'POST',
            headers: {
                "Content-type": "aplication/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        });
    }

    getApiData(id, options) {
        return fetch(this.apiUrl + id + "/comments", options)
        .then(res => res.JSON())
    }
}