let logbtn = document.getElementById("logbtn")

logbtn.addEventListener("click",()=>{
  let logform = document.getElementById("loginform")
  let regform = document.getElementById("registerform")
  logform.style.display = "block"
  logform.style.flexDirection='column'
  regform.style.display = "none"
})


let regbtn = document.getElementById("regbtn")
regbtn.addEventListener("click",()=>{
  let logform = document.getElementById("loginform")
  let regform = document.getElementById("registerform")
  regform.style.display = "block"
  logform.style.display = "none"
})


async  function login(e){
e.preventDefault()
  let email = document.getElementById("loginemail").value
  
   if(email=="eve.holt@reqres.in"){

    let password = document.getElementById("loginpassword").value
       let obj={
email,
password
       }

       let res = await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body: JSON.stringify(obj),
        headers:{
            "Content-type":'application/json'
        }

       })

       res = await res.json()
       if(res.token){
        alert("Admin-Login Successfull")
        window.location.href="./Admin.html"
       }

       else{
        alert("Wrong Credentials")
       }
      
    }




    else{
        
        let res = await fetch(`https://different-blue-kilt.cyclic.app/users`)
       
 
        
 
        res = await res.json()
        console.log(res)

        let password = document.getElementById("loginpassword").value

       let user=  res.filter((el)=>{
           return el.email==email&&el.pass1==password
        })

        if(user.length>0){
            alert("login successfull")
            window.location.href="./hotels.html"
        }

        else{
            alert("wrong credentials")
        }


    }

      




}




 async function register(e){
   e.preventDefault()
    let email = document.getElementById("registeremail").value
     let name = document.getElementById("registername").value
     let pass1 = document.getElementById("registerpassword").value
     let pass2 = document.getElementById("repeatpassword").value

     if(pass1!=pass2){
        alert("Your passwords are mismatched enter correct one")
        return;
     }


   let obj={
    email,
    name,
    pass1,
    
   }
   let res = await fetch(`https://different-blue-kilt.cyclic.app/users`,{
    method:"POST",
    body: JSON.stringify(obj),
    headers:{
        "Content-type":'application/json'
    }

   })

   res = await res.json()
    console.log(res)


 }