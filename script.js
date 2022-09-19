// Get all necessery navigation elements

var nav = document.getElementById('middle-nav');
var navBtn = document.querySelector('.nav-button');


// Click Event for navigation bar on smaller screens (tables and phones)

navBtn.addEventListener('click', function(e) {
    nav.classList.toggle('active');
    console.log("Hello");
});

// Get necessery comments section element

var usercomment = document.querySelector('.article-comments-section');

// Click Event for posting new comments in a comment sections on articles

usercomment.addEventListener('click', function(e) {

    // Event bubbling - Targeting specific element with class "post" in this case its a button
    // in order to add a comment
    if (e.target.className == "post") {
        
        // preventing page from refreshing each time we click on targeted element (button)

        e.preventDefault();

        // Creating necessery elements and appending them values
        var txtarea = document.querySelector('textarea');
            var txtareavalue = txtarea.value;
        
        var comment = document.createElement('div');
            comment.classList.add('comments');
        
        var avatar = document.createElement('div');
            avatar.classList.add('avatar');
        
        var name = document.createElement('span');
            name.textContent = "John";
        var lastname = document.createElement('span');
            lastname.textContent = "Doe";
            avatar.appendChild(name);
            avatar.appendChild(lastname);

        var commentsfield = document.createElement('div');
            commentsfield.classList.add('comments-field');
            commentsfield.textContent = txtareavalue;

        var commentsreaction = document.createElement('ul');
        commentsreaction.classList.add('comments-reaction');
            var like = document.createElement('li');
                like.classList.add('like');
            var thumbsup = document.createElement('i');
                thumbsup.classList.add('fa-solid');
                thumbsup.classList.add('fa-thumbs-up');
                like.appendChild(thumbsup);
                var likecount = document.createElement('span');
                likecount.textContent = "0";
                thumbsup.appendChild(likecount);
            var dislike = document.createElement('li');
                dislike.classList.add('dislike');
                var thumbsdown = document.createElement('i');
                    thumbsdown.classList.add('fa-solid');
                    thumbsdown.classList.add('fa-thumbs-down');
                dislike.appendChild(thumbsdown);
                var dislikecount = document.createElement('span');
                dislikecount.textContent = "0";
                thumbsdown.appendChild(dislikecount);
            var reply = document.createElement('li');
                reply.classList.add('reply');
                reply.textContent = "Reply";
            commentsreaction.appendChild(like);
            commentsreaction.appendChild(dislike);
            commentsreaction.appendChild(reply);
        
        // Appending comments elements to a comment parent element for creating comment structure

        comment.appendChild(avatar);
        comment.appendChild(commentsfield);
        comment.appendChild(commentsreaction);

        // Getting parent comment element and appending a created comment
        
        var commentlist = document.querySelector('.comment-list');

        commentlist.appendChild(comment);

        
    }
})

