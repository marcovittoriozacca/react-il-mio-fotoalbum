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
            {visible}
        </td>
        <td>
            {categories.map((c,i) => (
                <p key={`photo-category-${c.id}-${i}`}>{c}</p>
            ))}
        </td>
        <td>
            {`${user.username}: id:${user.id}`}
        </td>
        <td>
            <div className="flex items-center justify-center gap-x-3">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </td>
    </>)
}