var posts=["2025/06/12/第一篇Blog/","2025/06/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };