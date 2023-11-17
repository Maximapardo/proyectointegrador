const search = () => {
  const apiKey = '3c3df15ca351ec3735ad14140026cfb8'; // Reemplaza 'tu_clave_de_api' con tu clave real de la API
  const url = 'https://api.themoviedb.org/3/search/movie?query=' + new URLSearchParams(window.location.search).get("resultadosbusqueda") + '&include_adult=false&language=en-US&page=1';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log(json);

      document.getElementById("titlemovie").innerHTML = json.results[0].title;
      document.getElementById("titledate").innerHTML = json.results[0].release_date;
      document.getElementById("sinopsis").innerHTML = json.results[0].overview;
      document.getElementById("generos").innerHTML = ''; //json.results[0].title;
      document.getElementById("calificacion").innerHTML = json.results[0].vote_average;
      document.getElementById("image_movie").src = 'https://image.tmdb.org/t/p/w500/' + json.results[0].backdrop_path;
      document.getElementById("calificacion").style = "--value:" + json.results[0].vote_average / 2;

    })
    .catch(err => console.error('error:' + err));

  let queryString = location.search;
  console.log(queryString);

  let queryStringObj = new URLSearchParams(queryString);
  console.log(queryStringObj.get("resultadosbusqueda"));
};

// Llamada a la función
search();
 