


let div = document.getElementById("container")
let data = JSON.parse(localStorage.getItem('favourite-billiyan'))
console.log(data)

window.addEventListener("load",()=>{
    displaycat(data)
})
function displaycat(data){


      div.innerHTML = null
    console.log(data)
  
   data.forEach((el,index)=>{
        let box = document.createElement("div")

       let img = document.createElement("img")
       img.src= el.url
       img.id="imgg"

      let button = document.createElement("button")
      button.innerText = "Delete from Favourites"
       button.addEventListener("click",()=>{
          del(el)
    
       })
       
       box.append(img,button)
       div.append(box)
    } 
    
   )
  



}



function del(el){
    let newdata=     data.filter((element)=>{
        return element.id!= el.id
    })               
       
      alert("billi-delete ho gyii")
      localStorage.setItem("favourite-billiyan",JSON.stringify(newdata))
      displaycat(newdata)
}
