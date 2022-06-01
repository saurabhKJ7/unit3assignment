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
        p.addEventListener("click",function(){
          detail(el);
        })
        
        movieDiv.append(p)
    })


}
function detail(el){
  console.log(el)
  movieDiv.innerHTML=null
  let img=document.createElement("img")
  
  img.src=`https://image.tmdb.org/t/p/w500${el.poster_path}`
  console.log(img.src)
  let p=document.createElement('p')
        p.innerText=`Title ${el.original_title}`
        let p1=document.createElement('p')
        
        p1.innerText=`Releasing Date ${el.release_date}`
        let p2=document.createElement('p')
        p2.innerText=`Rating ${el.vote_average}`

  movieDiv.append(img,p,p1,p2)

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