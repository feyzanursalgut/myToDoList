

//yeni öğe eklemek
function newElement(event){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    var t=document.createTextNode(inputValue);

    

    li.appendChild(t);
    if(inputValue.trim()==""){  //boş bırakılmasını ve boşluk bırakılmsını engelledim
        $(".error").toast("show");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);  
    }
    document.getElementById("myInput").value="";


    var span=document.createElement("SPAN");
    var txt =document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}

function renkDegistir(red)
{
    document.body.style.background=red;
}
//Eklenen öğeyi silmek

var close=document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
    $(".deleted").toast("show");
}



//localstorage işlemleri

//keşke yapabilseydim