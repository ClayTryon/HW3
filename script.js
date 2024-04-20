function MakeMovie(title, rating, release) {
  this.movieName = title;
  this.movieRating = rating;
  this.movieRelease = release;
}

var movieList = [];

function clearInputs() {
  document.getElementById("movieName").value = "";
  document.getElementById("movieRating").value = "";
  document.getElementById("movieRelease").value = "";
}

function addMovie() {
  var title = document.getElementById("movieName").value;
  var rating = document.getElementById("movieRating").value;
  var release = document.getElementById("movieRelease").value;

  if (title === "" || rating === "" || release === "") {
    alert("Fields cannot be empty. Please try again.");
    return;
  }

  if (rating < 1 || rating > 5) {
    alert("Movie Ratings must be an integer between 1 and 5. Please try again");
    return;
  }

  var newMovie = new MakeMovie(title, rating, release);
  movieList.push(newMovie);
  clearInputs();
  console.log(movieList);
}

function displayMovies() {
  let movieContainer = document.getElementById("movieContainer");

  movieContainer.innerHTML = "";

  movieList.forEach(function (movie) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Movie Name:</strong> " + movie.movieName + ", <strong>Rating:</strong> " + movie.movieRating + ", <strong>Release:</strong> " + movie.movieRelease;
    movieContainer.appendChild(listItem);
    movieContainer.style.display = "block";
  });

}

document.getElementById("showMoviesButton").addEventListener("click", displayMovies);
document.getElementById("addMovieButton").addEventListener("click", addMovie);
