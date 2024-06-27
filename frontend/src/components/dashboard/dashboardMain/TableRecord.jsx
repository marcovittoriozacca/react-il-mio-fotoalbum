import { FaCheck as Visible } from "react-icons/fa6";
import { ImCross as NotVisible } from "react-icons/im";
import './TableRecord.css';

export default function({image, title, visible, categories, user}){
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
                <button>Edit</button>
                <button>Delete</button>
                <button>Show</button>
            </div>
        </td>
    </>)
}