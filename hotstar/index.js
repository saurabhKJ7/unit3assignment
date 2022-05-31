let id;
let movieDiv=document.getElementById("box")
const key ="e4667502e46350e8b506fdd3acef5b60"
async function searchMovie(q){

    try{
        let url= `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${q}`;

        let res =await fetch(url)

        let data =await res.json()

        return data.results
    }catch(error){
        console.log("error")
    }
}

function appendMovies(movie){
    console.log(movie)
    movieDiv.innerHTML=null
    movie.forEach(function(el){
        let p=document.createElement('p')
        p.innerText=el.original_title
        
        movieDiv.append(p)
    })


}


async function main(){

let q=document.getElementById("query").value;

let response=searchMovie(q)
let data=await response
appendMovies(data)
console.log(data)
}

function debouncing(func,delay){
  if(id){
    clearTimeout(id);
  }
  id=setTimeout(function(){
    func();
  },delay)
}