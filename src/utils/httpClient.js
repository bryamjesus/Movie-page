const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhhZGUzOWQwN2FmN2Q3YzBiOTg1ZWJlMDg3ZDQ4MSIsInN1YiI6IjYxZTlmNmU0YzY2OWFkMDA1OGVmZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G92CwjLPFofDDpX2JjrjurFqS_fEquosoE41jfgdiI4",
      "Content-Type": "application/json;charst=utf-8",
    },
  }).then((result) => result.json());
}
