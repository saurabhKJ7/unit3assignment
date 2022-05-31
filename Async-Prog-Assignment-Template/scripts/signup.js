let detailarr=JSON.parse(localStorage.getItem("personalDetails"))||[];

let form=document.querySelector("form");

function Detailobj(email,password){
    this.email=email;
    this.password=password;
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let password=form.password.value;
    if(name!=='' && contact!=='' && email!=='' && password!==''){
        let detail=new Detailobj(email,password)
        detailarr.push(detail)
        localStorage.setItem("personalDetails",JSON.stringify(detailarr));
        
        window.location.href = "login.html";
        form.reset() 
    }else{
        alert ("Fill all details")
    }
})

