const color = ['red','green','blue','orange','red','green','blue','orange','pink'];
color.sort(()=>0.5-Math.random());
const card = document.querySelector('.card');
const cards= document.querySelectorAll('.cards');
const c=()=>{
    time();
    card.removeEventListener('click',c);
}
 card.addEventListener('click',c);
let selectedcard = [];
let score = 0;
let t=0;
function time(){
    let x = setInterval(()=>{
         t= document.getElementById('time').innerText;
        document.getElementById('time').innerHTML = --t;
        console.log(t)
        if(t==0){
            if(score!=4)
                clearInterval(x);
                window.alert("You Lost.");
            location.reload();
            
        }
     },1000)
}
for(let i=0;i<9;i++){
    const cards = document.createElement('div');
    cards.classList.add('cards');
    cards.setAttribute('id',i);
    cards.addEventListener('click',flip);
    card.appendChild(cards);
}
function flip(){
    document.getElementById('start').style.display='none';
    const id = this.getAttribute('id');
    this.setAttribute("style","background-color:"+color[id]);
    selectedcard.push(id);
    if(selectedcard.length == 2){
        setTimeout(check,250)
    }
    
}
function check(){
    const a=selectedcard[0];
    const b = selectedcard[1];
    if(a==b){
        window.alert("Same card selected!!");
        document.getElementById(a).style.backgroundColor = 'black';
    }else if(color[a] == color[b]){
        score +=1;
        document.getElementById('score').innerText = score; 
        document.getElementById(a).style.backgroundColor = 'white';
        document.getElementById(b).style.backgroundColor = 'white';
        document.getElementById(a).removeEventListener('click',flip);
        document.getElementById(b).removeEventListener('click',flip);

    }else{
        document.getElementById(a).style.backgroundColor = 'black';
        document.getElementById(b).style.backgroundColor = 'black';
    }
    selectedcard = [];
    if(score == 4){
        window.alert("You Won.");
        location.reload();
         
    }
}