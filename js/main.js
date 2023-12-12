var qoutes = [
  '"Opportunities don\'t happen, you create them."',
  '"If it scares you, it might be a good thing to try."',
  '"Man cannot discover new oceans unless he has the courage to lose sight of the shore."',
  '"It is never too late to be what you might have been."',
  '"You don\'t learn to walk by following rules. You learn by doing and falling over."',
  '"The man who removes a mountain begins by carrying away small stones."',
  '"Do not let what you cannot do interfere with what you can do."',
  '"No one can discover you until you do. Exploit your talents, skills and strengths and make the world sit up and take notice."',
];

var people = [
  "--Chris Grosser",
  "--Seth Godin",
  "--Andre Gide",
  "--George Eliot",
  "--Sir Richard Branson",
  "--Chinese Proverb",
  "--John Wooden",
  "--Rob Liano",
];

var old = 0;
var i = getRandomInt();

function randomQoute() {
  do {
    i = getRandomInt();
  } while (i == old);

  document.getElementById("MainQoute").innerHTML = qoutes[i];
  document.getElementById("Speaker").innerHTML = people[i];
  old = i;
}

function getRandomInt() {
  return Math.floor(Math.random() * qoutes.length);
}
