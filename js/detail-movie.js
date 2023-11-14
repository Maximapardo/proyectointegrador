window.addEventListener ('load', function (){

    let detalle = location.search;
    let detalleObjeto = new URLSearchParams(detalle);
    let movie_id = detalleObjeto.get ('id');

    let url = (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US`)

    fetch (url)
    .then (function (response){
        return response.json();
    })
    .then(function (peliculaDetalle){
        console.log(peliculaDetalle);

        document.querySelector('.title').innerHTML = peliculaDetalle.title;
        document.querySelector('.overview').innerHTML = peliculaDetalle.overview;
        document.querySelector('image').src = `https://image.tmdb.org/t/p/w500/${peliculaDetalle.poster_path}`;
        document.querySelector('releasedate').innerHTML = peliculaDetalle.release.date;
        document.querySelector('runtime').innerHTML = peliculaDetalle.runtime;
        document.querySelector('rating').innerHTML = peliculaDetalle.vote_average;

        for (var i = 0; i < peliculaDetalle.genres.length; i++) {
            let genero = document.querySelector(".genero");
            genero.innerHTML += `<a href="detail-genres.html?id=${peliculaDetalle.genres[i].id}"> ${peliculaDetalle.genres[i].name}</a>`
        }
    })
    .catch (function (error){
        console.log(error);
    })

    //recomendaciones//

    let url2 = (`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US`)

    fetch (url2)
    .then (function (response){
        return response.json ();
    })
    .then (function (data){
        console.log (data);
        let resultados= data.results 
        let botonrecomendaciones = document.querySelector('.recomendaciones')
        let recomendacion = document.querySelector('.galeriamovie')

        botonrecomendaciones.addEventListener('click', function(event){
            event.preventDefault();

            document.querySelector('reco').innerText = "Recomendaciones";
            

            for (let i = 0; i < resultados.length; i++) {
                recomendacion.innerHTML += `<div class="pelicula">
            <a href="./detail-movie.html?id=${resultados[i].id}"><img src="https://image.tmdb.org/t/p/w500/${resultados[i].poster_path}" alt="pelis"></a>
            <h4 class="titulos-peliculas">${resultados[i].title}</h4>
            <p class="fechas">${resultados[i].release_date}</p>
        </div>`
            }
        })

    })









})
