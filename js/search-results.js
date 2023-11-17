const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "3c3df15ca351ec3735ad14140026cfb8"; // Reemplaza con tu propia clave de API de TMDb

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
  }
};
window.onload = function() {
	document.getElementById('buscador').addEventListener('submit', search);
};
function search() {
  let searchTerm = new URLSearchParams(window.location.search).get("resultadosbusqueda")
  
  // Codifica el término de búsqueda para manejar espacios y caracteres especiales
  const encodedSearchTerm = encodeURIComponent(searchTerm);

  const url = `${baseURL}search/movie?query=${encodedSearchTerm}&include_adult=false&language=en-US&page=1`;

  fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .then(json => {
      console.log("Respuesta de la API:", json);

      if (json.results && json.results.length > 0) {
        const movie = json.results[0];
        console.log("Información de la película:", movie);

        document.getElementById("titlemovie").innerHTML = movie.title;
        document.getElementById("titledate").innerHTML = movie.release_date;
        document.getElementById("sinopsis").innerHTML = movie.overview;
        document.getElementById("generos").innerHTML = ''; // Puedes agregar el código para mostrar los géneros
        document.getElementById("calificacion").innerHTML = movie.vote_average;
        document.getElementById("image_movie").src = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
      } else {
        console.log("No se encontraron resultados.");
      }
    })
    .catch(err => console.error('Error:', err));
}
