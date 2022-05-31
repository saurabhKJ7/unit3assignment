// function Product(name,brand,price){
//     this.name=name;
//     this.brand=brand;
//     this.price=price;
// }




// var array=[]
// function submitProduct(){
//     event.preventDefault()
//     let form =document.getElementById("product")
//     let name=form.Name.value
//     let brand=form.brand.value
//     let price=form.price.value
//     let p=new Product(name,brand,price)
//     array.push(p)
//     console.log(array)
// }

// var arr=[]
// const nike={
//     brand:"nike",
//     logo:"nike",
//     seller:"amazon"
// }

// const shoe=Object.create(nike, {name:{value:"shoes"}},{price:{value:"1000"}},{color:{value:"black"}})
// console.log(shoe)
// arr.push(shoe)
// console.log(arr)


// function counter(){
//     let i=0;
//     let id=setInterval(function(){
//         if(i===59){
//             clearInterval(id)
//         }
//         i=i+1
//         console.log(i)
//     },100);
// }
// counter()


function image(){
    let im=document.getElementById("url").value;
    let imarr=JSON.parse(localStorage.getItem('images'))|| []
    imarr.push(im);
    localStorage.setItem('images',JSON.stringify(imarr))
    document.getElementById('url').value=null
}