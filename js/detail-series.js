var url = 'https://api.themoviedb.org/3/search/tv?query='+new URLSearchParams(window.location.search).get("resultadosbusqueda")+'&include_adult=false&language=en-US&page=1';
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
    document.getElementById("titleserie").innerHTML=json.results[0].name;
    document.getElementById("titleair").innerHTML=json.results[0].first_air_date;
    document.getElementById("resumen").innerHTML=json.results[0].overview;
    document.getElementById("genero").innerHTML=''; //json.results[0].title;
    document.getElementById("vote").innerHTML=json.results[0].vote_average;
    document.getElementById("image_serie").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
})
.catch(err => console.error('error:' + err));

let queryString = location.search
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj.get("resultadosbusqueda"))