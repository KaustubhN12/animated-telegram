

let box = document.getElementById("container")

let url = "https://impossible-eel-kimono.cyclic.app/hotels"
window.addEventListener("load",()=>{
    fetchData(url)
})


function Sorting(e){
    let select = document.getElementById("select").value
    console.log(e.target.value)
    if(e.target.value=="ascending"){
        url= `https://impossible-eel-kimono.cyclic.app/hotels?_sort=price&_order=asc&category=${select}`
        fetchData(url)
    }
    else if(e.target.value=="descending"){
        url= `https://impossible-eel-kimono.cyclic.app/hotels?_sort=price&_order=desc&category=${select}`
        fetchData(url)
    }

 }

 function filterData(e){
    if(e.target.value=="family"){
        url= `https://impossible-eel-kimono.cyclic.app/hotels?category=family`
        fetchData(url)
    }
    else if(e.target.value=="Adults"){
        url= `https://impossible-eel-kimono.cyclic.app/hotels?category=Adults`
        fetchData(url)
    }
    else{
        url= `https://impossible-eel-kimono.cyclic.app/hotels?category=Couples`
        fetchData(url)
    }
 }


async function fetchData(url){
   
    console.log(url)
   
    let res = await fetch (url)
  res = await res.json()
  console.log(res)
  getData(res)
}



async function getData(data){
  box.innerHTML=null
   data.forEach(el => {
    let div = document.createElement("div");
   let image = document.createElement("img");
   image.setAttribute("src",el.img);
   let category = document.createElement("p")
   category.innerText="Category:" + el.category;
   let price = document.createElement("p");
   price.innerText = "Price:"+ el.price;

   let status = document.createElement("button");
   status.innerText = el.booked?"Booked":"Book-Now"
   status.id = el.id
   status.disabled=el.booked?true:false
   status.addEventListener("click",(event)=>{
      
      changeStatus(el)
     
   })
   
   div.append(image,category,price,status)
  box.append(div)
   });


   

}

async function changeStatus(el){

let res = await fetch(`http://localhost:8080/hotels/${el.id}`,{
    method:"PATCH",
    body:JSON.stringify({booked:true}),
    headers:{
        "Content-type":"application/json"
    }
})
res = await res.json()
  console.log(res)
  

fetchData()

}



