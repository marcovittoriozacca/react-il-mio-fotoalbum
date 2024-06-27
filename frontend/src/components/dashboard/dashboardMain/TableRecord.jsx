import { FaCheck as Visible } from "react-icons/fa6";
import { ImCross as NotVisible } from "react-icons/im";
import './TableRecord.css';
import { HiOutlineArrowUpRight as Show } from "react-icons/hi2";
import { HiPencilAlt as Edit } from "react-icons/hi";
import { FaTrash as Delete } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function({image, title, slug, visible, categories, user}){
    const baseUrl = import.meta.env.VITE_BASE_URL
    return(<>
        <td className="flex justify-center">
            <figure className="w-[50px]">
                <a href={`${baseUrl}/${image}`} target="_blank">
                    <img src={`${baseUrl}/${image}`} alt={title} />
                </a>
            </figure>
        </td>
        <td>
            {title}
        </td>
        <td>
            {categories.map((c,i) => (
                <p key={`photo-category-${c.id}-${i}`}>{c}</p>
            ))}
        </td>
        <td>
            <div className="flex justify-center">
                {visible === "true"? <Visible className="visible vis"/> : <NotVisible className="not-visible vis"/> }
            </div>
        </td>
        <td>
            {`${user.username}: id:${user.id}`}
        </td>
        <td>
            <div className="flex items-center justify-center gap-x-3">
                <button type="button" className="edit" aria-label="edit">                    
                    <Edit/>
                </button>
                <button type="button" className="delete" aria-label="delete">
                    <Delete/>
                </button>
                <button type="button" className="show" aria-label="show">
                    <Link to={`/dashboard/${slug}`}>
                        <Show/>
                    </Link>
                </button>
            </div>
        </td>
    </>)
}