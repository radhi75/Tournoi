var red = document.querySelector(".rouge");
var yellow = document.querySelector(".orange");
var green = document.querySelector(".vert");
var test = document.getElementById("text");

red.addEventListener("click", function () {
  test.innerHTML = "STOP";
  test.style.color = "red";
});
yellow.addEventListener("click", function () {
  test.innerHTML = "READY";
  test.style.color = "orange";
});
green.addEventListener("click", function () {
  test.innerHTML = "GO";
  test.style.color = "green";
});

function playAudio(url) {
  new Audio(url).play();
}
var name1=document.querySelector(".name1")
var name2 = document.querySelector(".name2");
var pourcentage=document.getElementById('pourcentage')
var button = document.getElementById("btn")
console.log(name1.innerHTML)
button.addEventListener('click', function(){
    if(name1.value =='' || name2.value ==''){
alert("please add Name")
    }else{
        pourcentage.innerHTML = Math.floor(Math.random() * 100);

    }
})

var gagnant1 = document.querySelector(".gagnant1");
var gagnant2 = document.querySelector(".gagnant2");
var gagnantfinal=document.querySelector(".gagnant_final");
var candidat = document.querySelectorAll(".candidat")

function tournoi(){
  var g1 = Math.floor(Math.random()* 2)
  var g2 = Math.round(Math.random() + 2);
  var test = [];
  var g3 = Math.floor(Math.random() * 2);
  gagnant1.innerHTML=candidat[g1].innerHTML;
    gagnant2.innerHTML = candidat[g2].innerHTML;
    test.push(gagnant1.innerHTML, gagnant2.innerHTML)
    gagnantfinal.innerHTML= test[g3]
console.log(test)
  }