
function itLanguage() {
  var elementsEn = document.querySelectorAll(".en");
  var elementsIt = document.querySelectorAll(".it");
  var buttonsEn = document.querySelectorAll(".en-btn");
  var buttonsIt = document.querySelectorAll(".it-btn");

  elementsEn.forEach(function (el) {
    el.style.display = "none";
  });
  elementsIt.forEach(function (el) {
    el.style.display = "block";
  });
  buttonsEn.forEach(function (el) {
    el.style.display = "none";
  });
  buttonsIt.forEach(function (el) {
    el.style.display = "inline-block";
  });
  document.getElementById('englishButton').classList.remove('active');
  document.getElementById('italianButton').classList.add('active');
  
  //document.getElementById(language + 'Button').classList.add('active');
}

function enLanguage() {
  var elementsEn = document.querySelectorAll(".en");
  var elementsIt = document.querySelectorAll(".it");
  var buttonsEn = document.querySelectorAll(".en-btn");
  var buttonsIt = document.querySelectorAll(".it-btn");

  elementsEn.forEach(function (el) {
    el.style.display = "block";
  });
  elementsIt.forEach(function (el) {
    el.style.display = "none";
  });
  buttonsEn.forEach(function (el) {
    el.style.display = "inline-block";
  });
  buttonsIt.forEach(function (el) {
    el.style.display = "none";
  });

  document.getElementById('italianButton').classList.remove('active');
  document.getElementById('englishButton').classList.add('active');
}
