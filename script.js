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
  maxSpeed: 'normal',
  initSpeed: 'normal',

  // direction
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});