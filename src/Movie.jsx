const Movie = ({ movie }) => {
  return (
    <div
      style={{ border: "1px solid gray", width: "150px", textAlign: "center" }}
    >
      <h3>{movie.original_title}</h3>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          style={{ width: "100px" }}
          alt={movie.original_title}
        />
      )}
      <button>View</button>
      <div> Release: {movie.release_date}</div>
      <div>Overview: {movie.overview}</div>
    </div>
  );
};

export default Movie;