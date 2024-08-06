
let di=function (){
    document.getElementById('box').style.zIndex=100;
    document.getElementById('box').style.display="block";
};
let close=function(){
   
}
document.getElementById("close").addEventListener('click',()=>{
    console.log("gcx");
    document.getElementById('box').style.display='none';
    document.getElementById('box').style.zIndex=-1;
    document.getElementById('portfolio').src="";
})