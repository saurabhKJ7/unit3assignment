

const key ="2e7333aa"
async function getData() {
    let enter=document.getElementById("moviename").value
    let url = `https://omdbapi.com/?t=${enter}&apikey=${key}`;
  

    let res = await fetch(url);
    console.log(res)

    let data = await res.json();
    console.log(data)
    if(data.Response=="True"){
    append(data);
    }else{
      notFound()
    }
 
}

function notFound(){
  let img =document.createElement("img")
  img.src="https://media.istockphoto.com/vectors/cartoon-effects-vector-id1252349524?k=20&m=1252349524&s=612x612&w=0&h=X52LAILzgCUwTKmC9-vpMS2LuJQRdvw7n-NnXc7I0Dw="
  img.setAttribute("id",'error')
  let movie = document.getElementById("movie");
  console.log("usdau")
  movie.append(img)

}

function append(data) {
  let flag=false
  let recom=document.createElement("p")
  let movie = document.getElementById("movie");
  movie.innerText = "";
  let h3 = document.createElement("h3");
  h3.innerText = `Title: ${data.Title}`;

  let p1 = document.createElement("p");
  p1.innerText = `Actors: ${data.Actors}`;
  let p6 = document.createElement("p");
  p6.innerText = `Director: ${data.Director}`;

  let p2 = document.createElement("p");
  p2.innerText = `Genre: ${data.Genre}`;
  
  let p3 = document.createElement("p");

  if(Number(data.imdbRating>8.5)){
    
    recom.innerText="Recommended"
    flag=true;
  }
  p3.innerText =`imbd Rating: ${data.imdbRating}`;
  let p4 = document.createElement("p");
  p4.innerText =`Type: ${data.Type}`;
  let p5 = document.createElement("p");
  p5.innerText =`Plot: ${data.Plot}`;
  let poster = document.createElement("img");
  poster.src=data.Poster
    let div1=document.createElement("div")
    let div2=document.createElement("div")
    div1.append(poster)

    if(flag=="false"){
    div2.append(h3,p1,p6,p2,p3,p4,p5)
    }else{
      div2.append(h3,p1,p6,p2,p3,p4,p5,recom) 
    }

  movie.append(div1,div2);

}
