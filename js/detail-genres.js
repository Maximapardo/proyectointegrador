document.addEventListener("DOMContentLoaded", function () {
    const detalleGenero = new URLSearchParams(location.search);
    const idGen = detalleGenero.get("id");
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
      }
    };
  
    // Películas
    const generoPeliculas = document.querySelector(".galeria");
    const urlDetalleGenPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
  
    fetch(urlDetalleGenPeliculas, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
  
        if (data.results && data.results.length > 0) {
          let detalleGen = '';
  
          data.results.forEach(movie => {
            detalleGen += `<div class="pelicula">
              <a href="./detail-movie.html?resultadosbusqueda=${movie.title}">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="pelis">
              </a>
              <h4 class="titulos-peliculas">${movie.title}</h4>
              <p class="fechas">${movie.release_date}</p>
            </div>`;
          });
  
          generoPeliculas.innerHTML = detalleGen;
        } else {
          console.error('No se encontraron resultados para películas');
        }
      })
      .catch(error => console.error('Error en la solicitud de películas:', error));
  
    // Series
    const generoSeries = document.querySelector(".galeriatv");
    const urlDetalleGenSeries = `https://api.themoviedb.org/3/discover/tv?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
  
    fetch(urlDetalleGenSeries, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
  
        if (data.results && data.results.length > 0) {
          let detalleSeries = '';
  
          data.results.forEach(series => {
            detalleSeries += `<div class="series">
              <a href="./detail-serie.html?resultadosbusqueda=${series.name}">
                <img src="https://image.tmdb.org/t/p/w500/${series.poster_path}" alt="series">
              </a>
              <h4 class="titulos-series">${series.name}</h4>
              <p class="fechas">${series.first_air_date}</p>
            </div>`;
          });
  
          generoSeries.innerHTML = detalleSeries;
        } else {
          console.error('No se encontraron resultados para series');
        }
      })
      .catch(error => console.error('Error en la solicitud de series:', error));
  });
  


