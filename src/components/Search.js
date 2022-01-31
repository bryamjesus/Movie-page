import style from "../css/Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  // const [searchText, setSearchText] = useState("");
  const history = useHistory();

  //   useEffect(()=>{
  //     setSearchText(search || "") //que me ponga search o si esata vacio que me ponga hola
  // },[search])

  const handelSubmit = (e) => {
    e.preventDefault();
    // history.push("/?search="+searchText)
  };

  return (
    <form className={style.searchContainer} onSubmit={handelSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          value={search ?? ""}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            // setSearchText(value)
            history.push("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={style.searchButton} />
      </div>
    </form>
  );
}
