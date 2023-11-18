var url = 'https://api.themoviedb.org/3/search/tv?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
var Idtv= '';
var options = {
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
    document.getElementById("titleseries").innerHTML=json.results[0].name;
    document.getElementById("dateseries").innerHTML=json.results[0].first_air_date;
    document.getElementById("sinopsisseries").innerHTML=json.results[0].overview;
    document.getElementById("generosseries").innerHTML=''; //json.results[0].title;
    document.getElementById("calificacionseries").innerHTML=json.results[0].vote_average;
    document.getElementById("image_series").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
})
.catch(err => console.error('error:' + err));

let queryString = location.search
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj.get("resultadosbusqueda"))

function recommendations(){
    document.getElementById("divrecommendationstv").style.display='block';
    console.log(Idtv);
    const url = 'https://api.themoviedb.org/3/movie/'+Idtv+'/recommendations?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        console.log(json.results);
        let recomendacionesSeries = document.querySelector("#divrecommendationstv")
    
    
        for (let i = 0; i < 1; i++) {
            recomendacionesSeries.innerHTML += `<div class="reco-pelis">
            <img class="imgreco" src='https://image.tmdb.org/t/p/w500/${json.results[i].poster_path}'>
            <h4 class="fechas-reco">${json.results[i].title}</h4>
            </div>`
            }
    
        })
    
     
      .catch(err => console.error('error:' + err));
    }
    
    