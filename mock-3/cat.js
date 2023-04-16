const params = new URLSearchParams(window.location.search);
const param1Value = params.get('breed');


// use the search parameters
console.log(param1Value); // outputs "value1"

let url  = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${param1Value}`

async function fetchData(){
    let res = await fetch(url,{
        headers:{
         'x-api-key':'live_ZWe2Yl7lovQQxynYrcjrNei5SJgHfMbtcVmY55yjb0Rsqe0haxcwkqJMxPuLFA8L'
        }
   })

   res = await res.json()
   displaycat(res)
  
   console.log(res)
}

fetchData()

let div = document.getElementById("container")
let favourite = JSON.parse(localStorage.getItem("favourite-billliyan")) || []
function displaycat(data){


      div.innerHTML = null
    console.log(data)
  
   data.forEach((el,index)=>{
        let box = document.createElement("div")

       let img = document.createElement("img")
       img.src= el.url
       img.id="imgg"

      let button = document.createElement("button")
      button.innerText = "Add to Favourite"
       button.addEventListener("click",()=>{
          

           favourite.push(el)
           alert("billi-push ho gyii")
           localStorage.setItem("favourite-billiyan",JSON.stringify(favourite))
        
       })
       box.append(img,button)
       div.append(box)

   } 
    
   )
  



}