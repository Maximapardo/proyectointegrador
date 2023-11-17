var url = 'https://api.themoviedb.org/3/search/movie?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
var idMovie="";
var options = {
method: 'GET',
headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
}
};

fetch(url, options)
.then(res => res.json())
.then(json =>{
    console.log(json);
    document.getElementById("titlemovie").innerHTML=json.results[0].title;
    document.getElementById("titledate").innerHTML=json.results[0].release_date;
    document.getElementById("sinopsis").innerHTML=json.results[0].overview;
    document.getElementById("generos").innerHTML=''; //json.results[0].title;
    document.getElementById("calificacion").innerHTML=json.results[0].vote_average;
    document.getElementById("image_movie").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
    idMovie = json.results[0].id;
})
.catch(err => console.error('error:' + err));

let queryString = location.search
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj.get("resultadosbusqueda"))


function recommendations(){
document.getElementById("divrecommendations").style.display='block';
console.log(idMovie);
const url = 'https://api.themoviedb.org/3/movie/'+idMovie+'/recommendations?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    console.log(json.results);
    let recomendacionesPeliculas = document.querySelector("#divrecommendations")


    for (let i = 0; i < json.results.length; i++) {
        recomendacionesPeliculas.innerHTML += `<div class="pelis">
        <img src='https://image.tmdb.org/t/p/w500/${json.results[i].poster_path}' size="50%">
        <h4 class="fechas">${json.results[i].title}</h4>
        </div>`
        }

    })

 
  .catch(err => console.error('error:' + err));
}

