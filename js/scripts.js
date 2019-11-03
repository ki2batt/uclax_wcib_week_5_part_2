console.log('Hello from js/scripts.js!');
window.onload = function () {
  var customName = document.getElementById('customname');
  var customMovieCharacter = document.getElementById('customoviecharacter');
  var randomize = document.querySelector('.randomize');
  var story = document.querySelector('.story');

  function randomValueFromArray(array){
    var random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  var storyText = 'It was 94 fahrenheit outside - hotter than Han Solos kitchen , so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

  var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
  var insertY = ['the soup kitchen','Disneyland','the White House'];
  var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

  randomize.addEventListener('click', result);

  function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    if(customName.value !== '') {
      console.log("SWAP BOB");
      var name = customName.value;
      newStory = newStory.replace('Bob',name);
    }
    else {
      console.log("NO CUSTOM NAME");
    }

    if(customMovieCharacter.value !== ''){
      console.log("CUSTOM CHARACTER");
      var moviecharacter = customMovieCharacter.value;
      newStory = newStory.replace('Han Solo',moviecharacter);
    }
    else {
      console.log("NO CUSTOM CHARCTER");
    }

    if(document.getElementById("themilkyway").checked) {
      var weight = Math.round(300*0.0714286) + ' stone';
      var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace('94 fahrenheit',temperature);
      newStory = newStory.replace('300 pounds',weight);
    }

    if(document.getElementById("andromeda").checked){
      document.getElementById('image_box').src = 'images/andromeda.jpg';
    } else {
      document.getElementById('image_box').src = 'images/milky_way.jpg';
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
}
