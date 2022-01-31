import styles from "./css/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetalls";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  //el deaful es para que si cambias el nombre no va a cambiar automaticamente
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Peliculas</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        {/* <MoviesGrid /> */}
      </main>
    </Router>
  );
}
