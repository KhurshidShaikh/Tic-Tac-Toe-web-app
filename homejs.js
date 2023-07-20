document.addEventListener('DOMContentLoaded', function () {
let multiplayer=document.getElementById('multiplayer');
let computer=document.getElementById('computer');
multiplayer.addEventListener("click",function(){
window.open("./multiplayer.html","_self");

});
computer.addEventListener("click",function(){
window.open("./computer.html","_self");


});



});