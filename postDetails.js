class PostDetailsView {
    postsModel = new PostsModel();

    constructor() {
        const id = this.getPostId();
        const post = this.postsModel.getPostById(id);
        this.hidrateHtml(post);

        // attach event listeners (submit event pentru adaugat comentarii)
    }

    getPostId() {
        const params = new URLSearchParams(location.search);
        return params.get('id');
    }

    hidrateHtml(data) {
       data.then(post => {
            this.hidrateAuthor(post);

            const titleElem = document.querySelector('[data-post="tile"]');
            const bodyElem = document.querySelector('[data-post="body"]');

            titleElem.innerText = post.title;
            bodyElem.innerText = post.body;
       })
    }

    hidrateAuthor(post) {
        this.usersModel.getUserById(post.userId).then(user => {
            const authorModel = document.querySelector('[data-post="author"]');

            authorModel.innerText = user.name;
        
        });
    };

    hidrateComments(post) {
        this.commentsModel.getCommentForPost(post.id).then(comments => {

            const fragment = document.createDocumentFragment();

            for(const comment of comments) {

                const i = document.createElement('i');
                const h5 = document.createElement('h5');
                const p = document.createElement('p');

                h.innerText = comment.email + " :";
                i.innerText = '"' + comment.body + '"';

                p.append(i);
                fragment.append(h, p);
            };

            this.appendComments(frament);
        });
    };

    appendComments(fragment) {
        const comments = document.querySelector('[data-post="comments"]');

        comments.append(fragment);
    }

    handleCommentFormSubmit(e) {
        e.preventDefault();

        const comment = document.querySelector("[data-comment]").value;
        const email = "szaboakos@yahoo.com"

        this.commentsModel.createComment(comment, email)
        .then(console.log);
        
    };
};

new PostDetailsView();
    
