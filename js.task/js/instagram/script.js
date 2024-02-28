// script.js
document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        post.addEventListener('click', function() {
            console.log('Post clicked');
        });
    });
});
