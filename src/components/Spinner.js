import { FaSpinner } from 'react-icons/fa';
import style from "../css/Spinner.module.css"

export function Spinner(){
    return(
        <div className={style.spinner}>
            <FaSpinner className={style.spinnig} size={70}/>
        </div>
    )
}