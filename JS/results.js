'use strict';

//Array to store the quiz results
var quizResults = [];
var allPups = [];
var topDogs = [];

//Arrays for current and next selections

//constructor for dogs
function Dog(breed, sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength, filePath) {
  this.breed = breed;
  this.sizeOfPup = sizeOfPup;
  this.pupLifestyle = pupLifestyle;
  this.allergies = allergies;
  this.pupService = pupService;
  this.noiseTolerance = noiseTolerance;
  this.furLength = furLength;
  this.pupScore = 0;
  this.filePath=filePath;

  allPups.push(this);
}

//*********MAINLINE*********

//Retrieve quiz results
(function getLocalStorage() {
  if (localStorage.quizResults) {
    // console.log('we want quiz results');
    var strQuizResults = localStorage.getItem('quizResults');
    quizResults = JSON.parse(strQuizResults);
    // console.log(quizResults);
  }
})();


// sort by value

//**********FUNCTIONS START HERE *****************/
//Build Objects
function instantiateDogs() {
  new Dog('Newfoundland', 'large' , 'sedentary', 'yes', 'yes', 'no-barking', 'some-fur', 'newfy.jpg');
  new Dog('Smooth Coat Dachsund', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'doxie.jpg');
  new Dog('Golden Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'golden.jpg');
  new Dog('Bichon Frise', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'bichon.jpg');

}


instantiateDogs();
scorePups();
sortPups();
console.log('postsort ', allPups);
selectTopDogs();

displayTopDogs();
console.log('topDogs ', topDogs);


function scorePups() {
  for (var i=0; i < allPups.length; i++) {
    //we are starting at one because we don't want to incluse the first question in score
    // console.log('allpups' + allPups[i].pupLifestyle);
    //checking for lifestyle
    if(quizResults[1] === allPups[i].pupLifestyle) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].allergies);
    //checking for pet allergies
    if(quizResults[2] !== allPups[i].allergies) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].pupService);
    //checking for service dog
    if(quizResults[3] === allPups[i].pupService) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].noiseTolerance);
    //checking for noise tolerance
    if(quizResults[4] === allPups[i].noiseTolerance || quizResults[4] === 'dont-care' || (quizResults[4] === 'some-barking' && allPups[i].noiseTolerance === 'no-barking')) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].furLength);
    //checking for fur length
    if(quizResults[5] === allPups[i].furLength || quizResults[5] === 'fur-dont-care' || (quizResults[5] === 'some-fur' && allPups[i].furLength === 'min-fur')) {
      allPups[i].pupScore++;
    }
  }
}
// This function is going to sort the pups in the allPups array by pupScore
function sortPups() {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 71a8fd5cea34c1b7e0e0b5bb9145bb68019f1a28
  allPups.sort(function (b, a) {
    // console.log('a.pupScore ' + a.pupScore);
    // console.log('b pupScore ' + b.pupScore);
  return +a.pupScore - +b.pupScore;
<<<<<<< HEAD
=======
  allPups.sort(function(b, a) {
    return +a.pupScore - +b.pupScore;
>>>>>>> 49b141cbfe5ee05a4b261d9f88570cc05448e760
=======

>>>>>>> 71a8fd5cea34c1b7e0e0b5bb9145bb68019f1a28
  });
}
// In order for a dog to be considered for the topDog array, the size must match
function selectTopDogs() {
  var i = 0;
  var endOfScoringDogs = false;
  while(topDogs.length < 3 && endOfScoringDogs === false && i < allPups.length) {
    // console.log('allPups[i].pupScore' , allPups[i].pupScore);
    // console.log('allPups index', i);
    if(allPups[i].pupScore > 0 && quizResults[0] === allPups[i].sizeOfPup) {
      topDogs.push(allPups[i]);
    } else {
      if (allPups[i] === 0) {
        endOfScoringDogs = true;
      }
    }
    i++;
  }
}

function displayTopDogs() {
  var resultPic = document.getElementById('result-pic');
  var resultPic2 = document.getElementById('result-pic2');
  var resultPic3 = document.getElementById('result-pic3');
  resultPic.src = 'img/' +topDogs[0].filePath;
  resultPic2.src = 'img/' +topDogs[1].filePath;
  resultPic3.src = 'img/' +topDogs[2].filePath;
}