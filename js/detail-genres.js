window.addEventListener ('load', function (){

    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let idGen = detalleGeneroObjeto.get ("id")

    //peliculas//
    let generoPeliculas = document.querySelector(".galeria") 
    let urlDetalleGen = `https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
    console.log(urlDetalleGen);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
        }
    };
    //console.log(`https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`);
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

    // //series//
    // let url2 = 'https://api.themoviedb.org/3/discover/tv?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&with_genres=${idGen}'
    // let generoSeries = document.querySelector(".galeriatv")
    
    // fetch (url2)
    // .then  (function (response){
    //     return response.json ();
    // })
    // .then (function (data){
    //     let results = data.results
    //     console.log(results);
    //     console.log(data);

    //     let GeneroEspecifico = ''
    
    // for (let i = 0; i < results.length; i++){
    //     GeneroEspecifico += `<div class="series">
    //     <a href="./detail-serie.html?id=${results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" alt="series"></a>
    //     <h4 class="titulos-series">${results[i].original_name}</h4>
    //     <p class="fechas">${results[i].first_air_date}</p>
    // </div>`
    // }
    // generoSeries.innerHTML = GeneroEspecifico;
    // })
    // .catch (function (error){
    //     console.log (error)
    // })
   

})