import { MovieCard } from "./MovieCard";
import styles from "../css/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
  //let movies = []
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  //console.log(search);

  useEffect(() => {
    //1:08
    setIsLoading(true);
    const searchURl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchURl).then((data) => {
      //console.log(data);
      setIsLoading(false);
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
    });
  }, [search, page]);

if(!isLoading && movies.length ===0){
  return <Empty />
}
  
//-->console ....
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

//console.log(movies);
  //   fetch(movies)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       const { data = [] } = response;
  //       if (Array.isArray(data)) {
  //         const movie = data.map((m) => {
  //           return <li>{m.title}</li>;
  //         });
  //         return movie;
  //       }
  //     });

  // if (isLoading) {
  //   return <Spinner />;
  // }
