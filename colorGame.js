var colors=generateRandom(6);
var noc=6;
var h1=document.querySelector("h1");
var sqr=document.querySelectorAll(".square");
var selected=pickRandom();
var text=document.querySelector("span");
var p=document.querySelector("#sapnt");
var btn=document.querySelector("#button");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
text.textContent=selected;

easy.addEventListener("click",function(){
	noc=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=[];
	colors=generateRandom(noc);
	h1.style.backgroundColor="steelblue"
	selected=pickRandom();
	text.textContent=selected;
	for(var i=0;i<colors.length;i++){
		sqr[i].style.backgroundColor=colors[i];
	}
	for(var i=3;i<6;i++){
		sqr[i].style.display="none";
	}
	p.textContent="";
})

hard.addEventListener("click",function(){
	noc=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=[];
	h1.style.backgroundColor="steelblue"
	colors=generateRandom(6);
	selected=pickRandom();
	text.textContent=selected;
	for(var i=0;i<colors.length;i++){
		sqr[i].style.backgroundColor=colors[i];
		sqr[i].style.display="block";
	}
	p.textContent="";
})

btn.addEventListener("click",function(){
	colors=generateRandom(noc);
	selected=pickRandom();
	text.textContent=selected;
	h1.style.backgroundColor="steelblue"
	for(var i=0;i<colors.length;i++){
		sqr[i].style.backgroundColor=colors[i];
	}
	p.textContent="";
})
for(var i=0;i<colors.length;i++){
	sqr[i].style.backgroundColor=colors[i];
}

for(var i=0;i<colors.length;i++){
	//sqr[i].style.backgroundColor=colors[i];

	sqr[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor === selected){
			changeColor(clickedColor);
			h1.style.backgroundColor=selected;
			p.textContent = "correct";
			btn.textContent="Play Again?";
		}else{
			p.textContent = "try again";
			this.style.backgroundColor="#232323";
		}
		//alert("clicked");
	})
}

function changeColor(color){
	for(var j=0;j<sqr.length;j++){
		sqr[j].style.backgroundColor=color;
	}
}

function pickRandom(){
	var n=Math.floor(Math.random()*(colors.length));
	return colors[n];
}

function generateRandom(no){
	var arr=[];
	for(var i=0;i<no;i++){
		var col=[];
		for(var j=0;j<3;j++){
			col.push(Math.floor(Math.random()*256));
		}
		arr.push("rgb("+col[0]+", "+col[1]+", "+col[2]+")");
	}
	return arr;
}