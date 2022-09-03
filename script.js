// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Hello!", "Bonjour!","안녕하세요!", "Halo!", "Guten Tag!", "ハロ!", "Hola!", "您好!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Rotating Sphere
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'normal',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

// //To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.content').style.color = random_color;