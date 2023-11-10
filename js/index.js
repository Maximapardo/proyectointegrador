function search(){
    let _search = document.getElementById("busqueda").value;
    location.href='/search-results.html?resultadosbusqueda='+_search; 
  }
  
  const url = 'https://api.themoviedb.org/3/search/movie?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
  const options = {
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
    })
    .catch(err => console.error('error:' + err));

    window.addEventListener('load', function (){
      const url = 'https://api.themoviedb.org/3/tv/popular?api_key=3c3df15ca351ec3735ad14140026cfb8&languange=en-US'

      fetch(url)
        .then (function (response){
          return response.json()
        })
        .then(function(data){
          let info = data.results
          console.log(info);
          let contenedorseries = document.querySelector('.series');
          for (let i = 0; i < info.length; i++) {
            contenedorseries.innerHTML += `<div class="series">
            <a href="./detail-series.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="series"></a>
            <h3 class="titulos-series">${info[i].title}</h3>
            <h4 class="fechas">${info[i].release_date}</h4>
          </div>`
          }
        })
    })
    .catch(function (error){
      console.log(error);
    })

    const url2 = 'https://api.themoviedb.org/3/movie/popular?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US'

    fetch(url2)
        .then (function(response){
            return response.json()
        })
        .then(function(data){
            let info = data.results
            console.log(info);
            let contenedorpelis = document.querySelector('.pelis');
            for (let i = 0; i < info.length; i++) {
              contenedorpelis.innerHTML += `<div class="pelis">
              <a href="./detail-pelis.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="series"></a>
              <h3 class="titulos-pelis">${info[i].title}</h3>
              <h4 class="fechas">${info[i].release_date}</h4>
            </div>`
            }
          })
          .catch(function (error){
            console.log(error);
          })
      
    const url3 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US'
    fetch (url3)
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        console.log(info);
        let contenedorpelis = document.querySelector('.pelis');
        for (let i = 0; i < info.length; i++) {
          contenedorpelis.innerHTML += `<div class="pelis">
          <a href="./detail-pelis.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="series"></a>
          <h3 class="titulos-pelis">${info[i].title}</h3>
          <h4 class="fechas">${info[i].release_date}</h4>
        </div>`
        }
      })
      .catch(function (error){
        console.log(error);
      })