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
          peliculasPopularesContainer.innerHTML += `<div class="muestra">
            <a  href="./detail-movie.html?resultadosbusqueda=${info[i].title}"><img class="imgpopulares" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="pelis"></a>
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
              peliculasValoradasContainer.innerHTML += `<div class="muestra">
                  <a href="./detail-movie.html?resultadosbusqueda=${info[i].id}"><img img class="imgpopulares"src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="pelis"></a>
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
        seriesPopularesContainer.innerHTML += `<div class="muestra">
                <a href="./detail-serie.html?resultadosbusqueda=${info[i].id}">
                <img class="imgpopulares" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="series"></a>
                <h3 class="titulos-pelis">${info[i].name}</h3>
                <h4 class="fechas">${info[i].first_air_date}</h4>
        </div>`;
      }
    })
    .catch(function(err){
      console.log(err);
    });
 };


 

 