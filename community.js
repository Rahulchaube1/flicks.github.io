document.getElementById('post-btn').onclick = function() {
    const postInput = document.getElementById('post-input');
    const postContent = postInput.value;
    if (postContent.trim()) {
        addPost(postContent);
        postInput.value = '';
    } else {
        alert('Please enter some text for your post.');
    }
};

function addPost(content) {
    const postsContainer = document.getElementById('posts-container');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    
    postDiv.innerHTML = `
        <h3>User</h3>
        <p>${content}</p>
        <div class="reactions">
            <button class="reaction-button" onclick="reactToPost(this, '😂')">😂</button>
            <button class="reaction-button" onclick="reactToPost(this, '😊')">😊</button>
            <button class="reaction-button" onclick="reactToPost(this, '😢')">😢</button>
            <button class="reaction-button" onclick="reactToPost(this, '😡')">😡</button>
            <button class="reaction-button" onclick="reactToPost(this, '👏')">👏</button>
            <button class="reaction-button" onclick="deletePost(this)">Delete</button>
        </div>
        <div class="comment-section">
            <input type="text" class="comment-input" placeholder="Write a comment...">
            <button class="comment-btn" onclick="addComment(this)">Comment</button>
        </div>
        <div class="comments"></div>
    `;

    postsContainer.prepend(postDiv);
}

function reactToPost(button, reaction) {
    alert(`You reacted with ${reaction}!`);
}

function deletePost(button) {
    const post = button.closest('.post');
    post.remove();
}

function addComment(button) {
    const commentInput = button.previousElementSibling;
    const comment = commentInput.value;
    if (comment.trim()) {
        const commentsContainer = button.closest('.post').querySelector('.comments');
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
}
