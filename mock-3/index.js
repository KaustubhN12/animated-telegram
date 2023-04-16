
let totalData = 67
let paginationWrapper = document.getElementById("buttons")
const params = new URLSearchParams();
let url = `https://api.thecatapi.com/v1/breeds?page=0&limit=${5}`
 async  function fetchData(url){
      
      let res = await fetch(url,{
           headers:{
            'x-api-key':'live_ZWe2Yl7lovQQxynYrcjrNei5SJgHfMbtcVmY55yjb0Rsqe0haxcwkqJMxPuLFA8L'
           }
      })

      res = await res.json()
      displaycat(res)
     
      console.log(res)
  }

  
  window.addEventListener("load",()=>{
      
      fetchData(url)
      renderPaginationButtons(totalData)
  })

  let div = document.getElementById("container")

function displaycat(data){


      div.innerHTML = null
    console.log(data)
  
   data.forEach((el,index)=>{
        let box = document.createElement("div")

       let img = document.createElement("img")
       img.src= el.image.url
       img.id="imgg"

      let h1 = document.createElement("h1")
      h1.innerText = el.name

      let p = document.createElement("p")
      p.innerText= el.description

      let h2 = document.createElement("h2")
      h2.innerText = `Origin:${el.origin}`

      let spann = document.createElement("h2")
     spann.innerText = `Lifespan:${el.life_span}`

     let qual = document.createElement("h4")
     qual.innerText = el.temperament

     let read = document.createElement("a")
       read.setAttribute("href", el.wikipedia_url )
       read.innerText= 'Wikipedia'

       let a = document.createElement("button")
       a.innerText = "View Images"
       params.set('breed', el.id);
      
       a.addEventListener("click",()=>{
        window.location.href = 'cat.html?' + params.toString();
       })
       



       
       


       box.append(img,h1,p,h2,spann,qual,read,a)
       div.append(box)

   } 
    
   )
  



}



 function renderPaginationButtons(totalData){
 
  let totalButtons = Math.ceil(totalData/5)

  function asListOfButton(){
    let arr = []
   
    for(let i=1; i<totalButtons; i++){
        arr.push(getAsButton(i,"pagination-buttton button",i))
    }

    return arr.join('')

  }


  paginationWrapper.innerHTML = `
  <div class="pagination-btn-list">
  ${asListOfButton()}
  <div>
    total items: ${totalData}
  </div>
</div>
  `

  let paginationButtons = document.querySelectorAll(".pagination-buttton")
  console.log(paginationButtons)

   for(let paginationButton of paginationButtons){
      
        paginationButton.addEventListener("click",(event)=>{
            let dataId = event.target.dataset.id
            console.log(dataId)
             fetchData(`https://api.thecatapi.com/v1/breeds?page=${dataId-1}&limit=${5}`)
             reset()
             event.target.classList.add('current-button')
        })
   }


   function reset(){

    for(let paginationButton of paginationButtons){
        paginationButton.classList.remove('current-button')
      }
   }



 }


 function getAsButton(text,cls, dataId){

      return `<button class="${cls}" ${dataId?`data-id=${dataId}`:""  }> ${text} </button>`

 }




 

