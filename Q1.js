let fruitsArray=["strawberry.jpg", "watermelon.jpg","cherry.jpg","kiwi.jpg","apples.jpg"];




let divELement=document.createElement("div");


let ulElement=document.createElement("ul");





document.body.appendChild(divELement);

divELement.appendChild(ulElement);




for(let i=0;i<fruitsArray.length;i++){



let liElement=document.createElement("li");


let imageElement=document.createElement("img");

imageElement.src=fruitsArray[i];
imageElement.width=200;
imageElement.height=200;
imageElement.style.marginLeft=55;
imageElement.style.padding=10;
ulElement.appendChild(liElement);
liElement.appendChild(imageElement);


}





