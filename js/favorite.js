const baseURL = "https://api.themoviedb.org/3/"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
  }
};


let url = "https://api.themoviedb.org/3//favorite/movies?language=en-US&page=1&sort_by=created_at.asc?api_key=45d43a6901861343cdb188d4f3bafd7c&language=en-US"
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