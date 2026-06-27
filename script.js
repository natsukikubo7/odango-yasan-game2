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



if(stock[type]<=0){

return;

}



stock[type]--;


selected.push(type);



let plate=document.getElementById("plate");


plate.innerHTML += emoji[type];



if(selected.length>20){

plate.className="huge";

}

else if(selected.length>10){

plate.className="big";

}



render();


};



document.getElementById(area)
.appendChild(span);


}






document.getElementById("answerButton")
.onclick=function(){



let count={

strawberry:0,

banana:0,

peach:0

};



selected.forEach(function(type){

count[type]++;

});



let text="";



if(count.strawberry>0){

text+="🍓いちごが"+count.strawberry+"こ<br>";

}


if(count.banana>0){

text+="🍌ばななが"+count.banana+"こ<br>";

}


if(count.peach>0){

text+="🍑ももが"+count.peach+"こ<br>";

}



text+="ぜんぶで"+selected.length+"こかな？";



document.getElementById("hint")
.innerHTML=text;




let area=document.getElementById("choices");


area.innerHTML="";



let total=selected.length;



let answers=[

total,

total+1,

Math.max(0,total-1)

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


box.innerHTML="🎉✨ せいかい！ ✨🎉";


}

else{


box.classList.add("wrong");


box.innerHTML="💭 もういちどかんがえてみよう！";


}



document.body.appendChild(box);



setTimeout(function(){


document.body.removeChild(box);



if(correct){


selected=[];


document.getElementById("plate")
.innerHTML="";


document.getElementById("plate")
.className="";


document.getElementById("hint")
.innerHTML="";


document.getElementById("choices")
.innerHTML="";


}



},1800);



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


document.getElementById("plate")
.className="";



document.getElementById("hint")
.innerHTML="";


document.getElementById("choices")
.innerHTML="";


render();


};







render();
