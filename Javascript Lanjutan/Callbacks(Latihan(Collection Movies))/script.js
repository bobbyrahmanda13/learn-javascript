$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=85d4554&s=" + $(".input-keyword").val(),
    success: (results) => {
      // * karena di dalam object nya terdapat property Search maka dihilangkan dengan membuat variable results.Search
      const movies = results.Search;
      // console.log(movies);
      // * menampilkan data movies ke dalam card menggunakan looping
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        // ! note : Arrow function tidak memiliki scope this
        //  console.log($(this).data("imdbid")); // untuk check id yang ada pada button show details
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=85d4554&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            // console.log(m);
            const movieDetail = showMovieDetails(m);

            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetails(m) {
  return `<div class="container-fluid">
       <div class="row">
         <div class="col-md-3">
           <img src="${m.Poster}" class="img-fluid" />
         </div>
         <div class="col-md">
           <ul class="list-group">
             <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
             <li class="list-group-item">
               <strong>Director : </strong>${m.Director}
             </li>
             <li class="list-group-item">
               <strong>Actors : </strong>${m.Actors}
             </li>
             <li class="list-group-item">
               <strong>Writer : </strong>${m.Writer}
             </li>
             <li class="list-group-item">
               <strong>Plot: </strong><br />
               ${m.Plot}
             </li>
           </ul>
         </div>
       </div>
     </div>`;
}
