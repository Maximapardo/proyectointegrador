const detailGenre=()=>{
    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let idGen = detalleGeneroObjeto.get ("id")

    //peliculas//
    let generoPeliculas = document.querySelector(".galeria") 
    let urlDetalleGen = `https://api.themoviedb.org/3/discover/movie?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
    console.log(urlDetalleGen);
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
  
    //series//
    let generoSeries = document.querySelector(".galeriatv") 
    let urlDetallesGen = `https://api.themoviedb.org/3/discover/tv?api_key=3c3df15ca351ec3735ad14140026cfb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;
    console.log(urlDetallesGen);
    fetch(urlDetallesGen,options)
    .then(function (response){
        return response.json();
    })
    .then (function (data){
        let arrayGenero = data.results
        console.log(arrayGenero);
        let DetallesGen = ''
  
    for (let i = 0; i< arrayGenero.length; i++){
        DetallesGen += `<div class="series">
        <a href="./search-results.html?resultadosbusqueda=${arrayGenero[i].name}"><img src="https://image.tmdb.org/t/p/w500/${arrayGenero[i].poster_path}" alt="series"></a>
        <h4 class="titulos-series">${arrayGenero[i].name}</h4>
        <p class="fechas">${arrayGenero[i].first_air_date}</p>
    </div>`
    }
    generoSeries.innerHTML = DetallesGen;
    })
    .catch(function (error){
        console.error(error)
    })
   
   };

