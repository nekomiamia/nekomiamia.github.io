var posts=["2025/06/12/第一篇Blog/","2025/06/11/hello-world/","2025/06/12/游卡短暂的面试/","2025/06/16/小记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };