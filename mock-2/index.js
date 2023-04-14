

function submitHandle(event){

let username = document.getElementById("username").value;
let startDate = document.getElementById("startDate").value;
let endDate = document.getElementById("endDate").value;
let sd = startDate.toString().split("-").map(Number);
let ed = endDate.toString().split("-").map(Number);

let month = ed[1] - sd[1];
let date = ed[2] - sd[2];
let totalLeaves = date+month*30;
let radio="";
if(document.getElementById("Employee").checked){
  radio = document.getElementById("Employee").value
}else{
  radio = document.getElementById("Student").value
}
// console.log(document.getElementById("Employee").checked)
  event.preventDefault();
   let obj =  {
    username,
    startDate,
    endDate,
    id:Date.now(),
    otp:Math.floor(1000 + Math.random() * 9000),
    totalLeaves:totalLeaves,
    Designation : radio
  };

  let data = JSON.parse(localStorage.getItem("leaveRequest")) || [];
  data.push(obj);
  console.log(radio)
  localStorage.setItem("leaveRequest",JSON.stringify(data));
  document.getElementById("formData").reset();
}