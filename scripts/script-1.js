var firsth1 = document.getElementById('f-id');
var randomBgColor = Math.floor(Math.random()*15695346).toString(16);
var randomTxtColor = Math.floor(Math.random()*28625378).toString(16);
firsth1.style.backgroundColor = "#" + randomBgColor;
firsth1.style.color = "#" + randomTxtColor;

//Select all elements using a class
var SectionHeads = document.getElementsByClassName('Section-head');
for(var i=0; i<SectionHeads.length; i++){
    var element = SectionHeads[i];
    element.innerHTML = "Head-"+(i+1);
} 

//Select all elements using a class in querry selector
var SectionHeads = document.querySelectorAll('.Section-head'); //.querySelectorAll
for(var i=0; i<SectionHeads.length; i++){
    var element = SectionHeads[i];
    if(i%2==0)
        element.style.backgroundColor = "blue";
    else
        element.style.backgroundColor = "gray"; 
}