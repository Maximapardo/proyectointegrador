const baseURL = "https://api.themoviedb.org/3/"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
  }
};


const home = ()=> {
  function search(){
      let _search = document.getElementById("busqueda").value;
      location.href='/search-results.html?resultadosbusqueda='+_search; 
    }
    const searchParams = new URLSearchParams(window.location.search).get("resultadosbusqueda");
    const url = `${baseURL}search/movie?query=${searchParams}&include_adult=false&language=en-US&page=1`;
    
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
      })
      .catch(err => console.error('error:' + err));

  //index//
  //defino las varaibles a usar//

  let API_KEY = "?api_key=3c3df15ca351ec3735ad14140026cfb8"
  let populares = "movie/popular"
  let valoradas = "movie/top_rated"
  let populares1 = "tv/popular"

  //peliculas populares//
  fetch(baseURL + populares + API_KEY)
  .then(function(res){
  return res.json()
  })
  .then(function(data){
      let info = data.results
      console.log(data.results)
      let peliculasPopularesContainer = document.querySelector("#peliculasPopulares")
      for (let i = 0; i < info.length; i++) {
          peliculasPopularesContainer.innerHTML += `<div class="pelis">
            <a href="./detail-movie.html?resultadosbusqueda=${info[i].title}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="pelis"></a>
            <h3 class="titulos-pelis">${info[i].title}</h3>
            <h4 class="fechas">${info[i].release_date}</h4>
            </div>`
            }
  })
  .catch(function(err){
      console.log(err)
  })

  //peliculas valoradas//
  fetch(baseURL + valoradas + API_KEY)
      .then(function(res) {
          return res.json();
      })
      .then(function(data) {
          let info = data.results;
          console.log(data.results);
          let peliculasValoradasContainer = document.querySelector("#peliculasValoradas");

          for (let i = 0; i < info.length; i++) {
              peliculasValoradasContainer.innerHTML += `<div class="pelis">
                  <a href="./detail-movie.html?id=${info[i].id}">
                      <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="pelis">
                  </a>
                  <h3 class="titulos-pelis">${info[i].title}</h3>
                  <h4 class="fechas">${info[i].release_date}</h4>
              </div>`;
          }
      })
      .catch(function(err) {
          console.log(err);
    });
    
    //series populares//
    fetch(baseURL + populares1 + API_KEY)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let info = data.results;
      console.log(data.results);
      let seriesPopularesContainer = document.querySelector("#seriesPopulares");  // Cambiado para usar un contenedor de series populares
      for (let i = 0; i < info.length; i++) {
        seriesPopularesContainer.innerHTML += `<div class="series">
                <a href="./detail-serie.html?id=${info[i].id}">
                <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="series"></a>
                <h3 class="titulos-series">${info[i].name}</h3>
                <h4 class="fechas">${info[i].first_air_date}</h4>
        </div>`;
      }
    })
    .catch(function(err){
      console.log(err);
    });
 };

 const genre =()=>{
 
    let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=45d43a6901861343cdb188d4f3bafd7c&language=en-US"
  //pelis//
    fetch(url)
      .then(function (response) {
        return response.json()
  
      })
      .then(function (listaGeneros) {
        console.log(listaGeneros);
        let generos = listaGeneros.genres;
        let lista = document.querySelector(".generos")
        for (let i = 0; i < generos.length; i++) {
          lista.innerHTML += `<article class="borde">
          <a href="./detail-genres.html?id=${generos[i].id}" class="genero-boton">${generos[i].name}</a>
          </article>`
        }
      })
      .catch(function (error) {
        console.log("Error: " + error);
      })
    //series//
      let ruta = "https://api.themoviedb.org/3/genre/tv/list?api_key=45d43a6901861343cdb188d4f3bafd7c&language=en-US"
      fetch(ruta)
        .then(function (response) {
          return response.json()
        })
        .then(function (GenerosTV) {
          console.log(GenerosTV);
    
          let generosSeries = GenerosTV.genres;
    
          let lista = document.querySelector(".tv")
    
          for (let i = 0; i < generosSeries.length; i++) {
            lista.innerHTML = `<article class="borde">
          <a href="./detail-genres.html?id=${generosSeries[i].id}" class="genero-boton">${generosSeries[i].name}</a>
          </article>`
          }
        })
        .catch(function (error) {
          console.log("Error: " + error);
        })
 
 };

 const detailGenre=()=>{
  let detalleGenero = location.search;
  let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
  let idGen = detalleGeneroObjeto.get ("id")

  //peliculas//
  let generoPeliculas = document.querySelector(".galeria") 
  let urlDetalleGen = `https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
  console.log(urlDetalleGen);
  fetch(urlDetalleGen,options)
  .then(function (response){
      return response.json();
  })
  .then (function (data){
      let arrayGeneros = data.results
      console.log(arrayGeneros);
      let DetalleGen = ''

  for (let i = 0; i< arrayGeneros.length; i++){
      DetalleGen += `<div class="pelicula">
      <a href="./search-results.html?resultadosbusqueda=${arrayGeneros[i].title}"><img src="https://image.tmdb.org/t/p/w500/${arrayGeneros[i].poster_path}" alt="pelis"></a>
      <h4 class="titulos-peliculas">${arrayGeneros[i].title}</h4>
      <p class="fechas">${arrayGeneros[i].release_date}</p>
     
  </div>`
  }
  generoPeliculas.innerHTML = DetalleGen;
  })
  .catch(function (error){
      console.error(error)
  })

  //series//
  let generoSeries = document.querySelector(".galeriatv") 
  let urlDetallesGen = `https://api.themoviedb.org/3/discover/tv?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
  console.log(urlDetallesGen);
  fetch(urlDetallesGen,option)
  .then(function (response){
      return response.json();
  })
  .then (function (data){
      let arrayGenero = data.results
      console.log(arrayGenero);
      let DetallesGen = ''

  for (let i = 0; i< arrayGenero.length; i++){
      DetallesGen += `<div class="series">
      <a href="./search-results.html?resultadosbusqueda=${arrayGenero[i].name}"><img src="https://image.tmdb.org/t/p/w500/${arrayGenero[i].poster_path}" alt="series"></a>
      <h4 class="titulos-series">${arrayGenero[i].name}</h4>
      <p class="fechas">${arrayGenero[i].first_air_date}</p>
  </div>`
  }
  generoSeries.innerHTML = DetallesGen;
  })
  .catch(function (error){
      console.error(error)
  })
 
 };

 const search=()=>{

  
  const url = 'https://api.themoviedb.org/3/search/movie?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
  fetch(url, options)
    .then(res => res.json())
    .then(json =>{
      console.log(json);
     
        document.getElementById("titlemovie").innerHTML= json.results[0].title;
        document.getElementById("titledate").innerHTML=json.results[0].release_date;
        document.getElementById("sinopsis").innerHTML=json.results[0].overview;
        document.getElementById("generos").innerHTML=''; //json.results[0].title;
        document.getElementById("calificacion").innerHTML=json.results[0].vote_average;
        document.getElementById("image_movie").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
        document.getElementById("calificacion").style ="--value:"+json.results[0].vote_average/2;
        
        
      

    })
    .catch(err => console.error('error:' + err));

let queryString = location.search
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj.get("resultadosbusqueda"))



 };

 const detailMovie=()=>{

  
  const url = 'https://api.themoviedb.org/3/search/movie?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
  fetch(url, options)
    .then(res => res.json())
    .then(json =>{
      console.log(json);
     
        document.getElementById("titlemovie").innerHTML= json.results[0].title;
        document.getElementById("titledate").innerHTML=json.results[0].release_date;
        document.getElementById("sinopsis").innerHTML=json.results[0].overview;
        document.getElementById("generos").innerHTML=''; //json.results[0].title;
        document.getElementById("calificacion").innerHTML=json.results[0].vote_average;
        document.getElementById("image_movie").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
        document.getElementById("calificacion").style="--value:"+json.results[0].vote_average/2;
        
        
      

    })
    .catch(err => console.error('error:' + err));

let queryString = location.search
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj.get("resultadosbusqueda"))



 };


 const enumMovieGener=[
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

const enumGenreTv=[
  {
    "id": 10759,
    "name": "Action & Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 10762,
    "name": "Kids"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10763,
    "name": "News"
  },
  {
    "id": 10764,
    "name": "Reality"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
  },
  {
    "id": 10766,
    "name": "Soap"
  },
  {
    "id": 10767,
    "name": "Talk"
  },
  {
    "id": 10768,
    "name": "War & Politics"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

 