let y;

function search(y,x){


let array=y.split('');

let flag=0;

for (let i=0;i<array.length;i++){
if (x==array[i]){

document.write("The index of element is  :"+ i)

  flag=1;

}

}


if(flag!=1){

    document.write("The element not found","-1");

}



}



search(prompt("Insert more than one number",),prompt("Please provide the number you'd like to search for",));




