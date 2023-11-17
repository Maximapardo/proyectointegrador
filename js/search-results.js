const baseURL = "https://api.themoviedb.org/3/"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkZjE1Y2EzNTFlYzM3MzVhZDE0MTQwMDI2Y2ZiOCIsInN1YiI6IjY1NGE1MjQ3NTMyYWNiMDEzODBjOTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmVu6YIU9OpS5RIJ_aIWxqW1O3P-a0xjYVJlzzRCA90'
  }
};


const search = ()=> {
  function search(){
      let _search = document.getElementById("busqueda").value;
      location.href='/search-results.html?resultadosbusqueda='+_search; 
    }
    const searchParams = new URLSearchParams(window.location.search).get("resultadosbusqueda");
    const url = `${baseURL}search/movie?query=${searchParams}&include_adult=false&language=en-US&page=1`;
    
    fetch(url, options)
      .then(res => res.json())
      .then(json =>{
        console.log(json);
        document.getElementById("titlemovie").innerHTML=json.results[0].title;
        document.getElementById("titledate").innerHTML=json.results[0].release_date;
        document.getElementById("sinopsis").innerHTML=json.results[0].overview;
        document.getElementById("generos").innerHTML=''; //json.results[0].title;
        ddocument.getElementById("calificacion").innerHTML=json.results[0].vote_average;
        document.getElementById("image_movie").src='https://image.tmdb.org/t/p/w500/'+json.results[0].backdrop_path;
      })
      .catch(err => console.error('error:' + err));
}
 