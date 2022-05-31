

let form=document.querySelector("form");


form.addEventListener("submit",function(event){
    event.preventDefault();
    let detailarr=JSON.parse(localStorage.getItem("personalDetails"))||[];
    let email=form.email.value;
    let password=form.password.value;
    if(email===detailarr[0].email && password===detailarr[0].password){
        alert ("Login sucessfulll")
        window.location.href = "index.html";
        form.reset() 
    }else{
        alert("EMAIL & Password are wrong")
    }
})

