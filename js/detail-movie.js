window.addEventListener('load', function () {
    let detallePeli = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detallePeli);
    let idPeli = detallePeliObjeto.get ("id")

    //peliculas//
    let detallePeliculas = document.querySelector(".galeria") 
    let urlDetallePeli = `https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idPeli}&with_watch_monetization_types=flatrate`;
    console.log(urlDetalleGen);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
        }
    };
    //console.log(`https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`);
    fetch(urlDetallePeli,options)
    .then(function (response){
        return response.json();
    })
    .then (function (data){
        let arrayDetalle = data.results
        console.log(arrayDetalle);
        let DetallePeli = ''

    for (let i = 0; i< arrayDetalle.length; i++){
        DetallePeli += `<div class="pelicula">
        <a href="./detail-movie.html?resultadosbusqueda=${arrayDetalle[i].title}"><img src="https://image.tmdb.org/t/p/w500/${arrayGeneros[i].poster_path}" alt="pelis"></a>
        <h4 class="titulos-peliculas">${arrayDetalle[i].title}</h4>
        <p class="fechas">${arrayDetalle[i].release_date}</p>
    </div>`
    }
    detallePeliculas.innerHTML = DetallePelis;
    })
    .catch(function (error){
        console.error(error)
    })
})









