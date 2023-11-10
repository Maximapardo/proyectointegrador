window.addEventListener('load', function(){
    let detalle= location.search;
    let detalleObjeto = new URLSearchParams(detalle);
    let movie_id = detalleObjeto.get('id')
    let baseURL = "https://api.themoviedb.org/3/"
    let API_KEY = "?api_key=3c3df15ca351ec3735ad14140026cfb8"

    fetch (baseURL + API_KEY)
    .then(function (response) {
        return response.json();
    })

    .then(function (peliculaDetalle) {
        console.log(peliculaDetalle);

        document.querySelector('.titulo').innerHTML = peliculaDetalle.title;
        document.querySelector('.sinopsis').innerHTML = peliculaDetalle.overview;
        document.querySelector('.imagen').src = `https://image.tmdb.org/t/p/original${peliculaDetalle.poster_path}`;
        document.querySelector('.estreno').innerHTML = peliculaDetalle.release_date;
        document.querySelector('.duracion').innerHTML = `${peliculaDetalle.runtime} Minutos`;
        document.querySelector('.rate').innerHTML = peliculaDetalle.vote_average;

        for (var i = 0; i < peliculaDetalle.genres.length; i++) {
            let genero = document.querySelector(".genero");
            genero.innerHTML += `<a href="detail-genres.html?id=${peliculaDetalle.genres[i].id}"> ${peliculaDetalle.genres[i].name}</a>`
        }
    })




})