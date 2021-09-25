//  *** Menggunakan Library External yaitu Jquery yang memiliki Ajax di dalamnya

// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=85d4554&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       // * karena di dalam object nya terdapat property Search maka dihilangkan dengan membuat variable results.Search
//       const movies = results.Search;
//       // console.log(movies);
//       // * menampilkan data movies ke dalam card menggunakan looping
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol detail di klik
//       $(".modal-detail-button").on("click", function () {
//         // ! note : Arrow function tidak memiliki scope this
//         //  console.log($(this).data("imdbid")); // untuk check id yang ada pada button show details
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=85d4554&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             // console.log(m);
//             const movieDetail = showMovieDetails(m);

//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// *** Fetch (API Vanilla Javascript (Javascript Murni))

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   // ! note : "fetch" adalah sebuah fungsi di javascript yang mengembalikan "Promise"
//   fetch("http://www.omdbapi.com/?apikey=85d4554&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // ketika tombol detail di click
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           // console.log(this); // untuk check apakah yang di klik adalah html tombol atau bukan
//           const imdbid = this.dataset.imdbid;
//           // console.log(imdbid); // untuk check dapat id nya atau tidak
//           fetch("http://www.omdbapi.com/?apikey=85d4554&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetails(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// ** Refactoring "fetch"

// * ini ketika tombol Search di click
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");

    // * Sebelumnya
    //   fetch("http://www.omdbapi.com/?apikey=85d4554&s=" + inputKeyword.value)
    //     .then((response) => response.json())
    //     .then((response) => {
    //       const movies = response.Search;
    //       let cards = "";
    //       movies.forEach((m) => (cards += showCards(m)));
    //       const movieContainer = document.querySelector(".movie-container");
    //       movieContainer.innerHTML = cards;

    // * Sesudahnya
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);
    updateUI(movies);
  } catch (error) {
    // console.log(error);
    alert(error);
  }
});

// ! note => ketika menggunakan "fetch" masalah nya adalah error yang ditangkap oleh "fetch" itu hanya error yang ada pada network atau yang ada pada url nya,
// ! note => karena fetch hanya akan menangkap "reject" / gagal jika network nya error

// add function getMovies() and updateUI()

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=85d4554&s=" + keyword)
    .then((response) => {
      // response.json(); // hanya akan jalan ketika data benar, film nya ada, ada yang diisikan dalam kolom pencarian
      // console.log(response); // check response
      if (!response.ok) {
        // => ! (tanda seru) menandakan "response"-nya tidak oke (not ok)
        throw new Error(response.statusText); // melempar kan error ke dalam catch(error)
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
      // console.log(response);
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// * ini ketika tombol Details di click
// dilakukan dengan cara :

// * event binding => memberikan event ke element yang awalnya belum ada, tapi ketika dia ada event nya bisa tetep berjalan

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    // console.log("ok");
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

// ** Catatan
// => menjalankan function di dalam variabel itu adalah cara syncronous
// => jika function digunakan hanya untuk menjalankan saja maka tidak perlu menggunakan return karena function tersebut tidak mengembalikan nilai

// add function getMovieDetail() and updateUIDetail()
function getMovieDetail(imdbid) {
  // console.log(imdbid);
  return fetch("http://www.omdbapi.com/?apikey=85d4554&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  // console.log(m);
  const movieDetail = showMovieDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

// create function showCards(m) and showMovieDetails(m)
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
