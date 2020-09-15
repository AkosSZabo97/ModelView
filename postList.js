class PostListView {
    postsModel = new PostsModel();

    constructor() {
        this.postsModel.getAllPosts()
            .then(posts => {
                const html = this.buildHtml(posts);
                this.displayPostList(html);
            });  
    }

    buildHtml(posts) {
        // for(let i = 0; i < posts.length; i++) {
        //     const post = posts[i];
        // }
        const fragment = document.createDocumentFragment();

        for (const post of posts) {
            // <p><a href="postDetails.html?id=1">Post Title</a></p>
            const p = document.createElement('p');
            const a = document.createElement('a');
            p.append(a);
            a.innerText = post.title;
            a.href = 'postDetails.html?id=' + post.id;

            fragment.appendChild(p);
        }

        return fragment;
    }

    displayPostList(html) {
        const container = document.querySelector('[data-post-container]');

        container.appendChild(html);
    }
}


new PostListView();
