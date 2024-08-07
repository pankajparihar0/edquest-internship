let screen1= document.querySelector('.screen1');
let screen = document.querySelector('.screen');
let box = document.querySelector('.box');
let pr=document.querySelector('.pr');
let di=function (){
    screen.classList.add('col-sm-3');
    box.classList.add('col-sm-9');
    pr.classList.add('row');
    document.getElementById('box').style.zIndex=100;
    document.getElementById('box').style.display="block";

};
let cls=function(){
    document.getElementById('box').style.display='none';
    document.getElementById('box').style.zIndex=-1;
    document.getElementById('portfolio').src="";
}
document.getElementById("close").addEventListener('click',()=>{
    console.log("gcx");
    screen.classList.remove('col-sm-3');
    box.classList.remove('col-sm-9');
    pr.classList.remove('row');
    document.getElementById('box').style.display='none';
    document.getElementById('box').style.zIndex=-1;
    document.getElementById('portfolio').src="";
})
