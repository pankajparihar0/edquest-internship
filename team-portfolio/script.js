
let di=function (){
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
    document.getElementById('box').style.display='none';
    document.getElementById('box').style.zIndex=-1;
    document.getElementById('portfolio').src="";
})