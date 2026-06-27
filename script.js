let stock = {

strawberry:10,

banana:10,

peach:10

};



let selected=[];



const emoji={

strawberry:"🍓",

banana:"🍌",

peach:"🍑"

};





function render(){


document.getElementById("strawberryStock").innerHTML="";

document.getElementById("bananaStock").innerHTML="";

document.getElementById("peachStock").innerHTML="";



for(let i=0;i<stock.strawberry;i++){

createDango("strawberry","strawberryStock");

}



for(let i=0;i<stock.banana;i++){

createDango("banana","bananaStock");

}



for(let i=0;i<stock.peach;i++){

createDango("peach","peachStock");

}



}





function createDango(type,area){



let span=document.createElement("span");


span.innerText=emoji[type];


span.className="dango";



span.onclick=function(){


stock[type]--;


selected.push(type);



document.getElementById("plate")
.innerHTML += emoji[type];


render();


};



document.getElementById(area)
.appendChild(span);


}








document.getElementById("answerButton")
.onclick=function(){


let total=selected.length;


let area=document.getElementById("choices");


area.innerHTML="";



let answers=[

total,

total+1,

total+2

];



answers.sort(()=>Math.random()-0.5);




answers.forEach(function(num){


let btn=document.createElement("button");


btn.innerText=num+"こ";



btn.onclick=function(){



if(num===selected.length){


showResult(true);


}

else{


showResult(false);


}



};



area.appendChild(btn);


});



};








function showResult(correct){



let box=document.createElement("div");


box.className="result";



if(correct){



box.classList.add("correct");


box.innerHTML=

"🎉✨ せいかい！ ✨🎉<br>🍡すごいね！";



setTimeout(function(){


selected=[];


document.getElementById("plate")
.innerHTML="";


document.body.removeChild(box);



},1800);



}

else{


box.classList.add("wrong");


box.innerHTML=

"💭 もういちど<br>かんがえてみよう！";



setTimeout(function(){


document.body.removeChild(box);



},2000);



}



document.body.appendChild(box);



}









document.getElementById("resetButton")
.onclick=function(){



stock={

strawberry:10,

banana:10,

peach:10

};



selected=[];


document.getElementById("plate")
.innerHTML="";


document.getElementById("choices")
.innerHTML="";


render();


};






render();