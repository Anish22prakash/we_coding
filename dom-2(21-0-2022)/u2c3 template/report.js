// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();

    var pic =document.querySelector("#image").value
    var name=document.querySelector("#name").value
    var bat=document.querySelector("#batch").value
    var dsa=document.querySelector("#dsa").value
    var cs=document.querySelector("#cs").value
    var code=document.querySelector("#coding").value

  var tr=document.createElement("tr")


    var td1=document.createElement("td")
     var img=document.createElement("img")
     img.setAttribute("src",pic)
    td1.append(img)

    var td2=document.createElement("td")
    td2.innerText=name

    var td3=document.createElement("td")
    td3.innerText=bat

    var td4=document.createElement("td")
    td4.innerText=dsa

    var td5=document.createElement("td")
    td5.innerText=cs

    var td6=document.createElement("td")
    td6.innerText=code

    var td7=document.createElement("td")
     var total=Number(dsa)+Number(cs)+Number(code)
     var per=(total/30)*100
     td7.innerText=per

    var td8=document.createElement("td")
    if(per<50){
        td8.innerText="Aynsc"
        td8.style.background="red"
    }
    else{
        td8.innerText="Regular"
        td8.style.background="green"
    }

    var td9=document.createElement("td")
       td9.innerText="Delete"
        td9.style.background="red"
        td9.style.cursor="pointer";
       td9.addEventListener("click",deleteRow);

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr)
}
function deleteRow(){
    event.target.parentNode.remove()
}