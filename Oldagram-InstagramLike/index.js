const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl=document.getElementById("main-el")


let post=""

function ShowPosts(){
    
for(let i=0;i<posts.length;i++){
    post+=`       <section class="post">
                <div class="user-info">
                <img class="img2" src=${posts[i].avatar}>
                <div class="user-name">
                    <p class="name">${posts[i].name}</p>
                    <p class="address">${posts[i].location}</p>
                </div></div>
                
            <img class="post-image" src=${posts[i].post}>
            
            <div class="post-body">
                <div class="icons">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                    <img src="images/icon-heart.png">
                </div>
                <div class="likeCounts spacing">${posts[i].likes} likes</div>
                <div class="caption spacing"><span class="username">${posts[i].username}</span><span>${posts[i].comment}</span></div>
            </div>
            </section>` 
    
    
}    
   mainEl.innerHTML+=post 
}

ShowPosts()