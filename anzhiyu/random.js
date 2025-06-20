var posts=["2025/06/12/第一篇Blog/","2025/06/11/hello-world/","2025/06/12/游卡短暂的面试/","2025/06/16/小记/","2025/06/17/Unity Profiler学习（一）/","2025/06/21/PatternPlay（1）：一切从AB包开始/","2025/06/20/微派Unity开发实习面经/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };