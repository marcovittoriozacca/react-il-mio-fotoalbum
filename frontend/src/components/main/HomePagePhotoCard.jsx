import { useGlobal } from "../../contexts/GlobalContext"

export default function({photo}){
    const { baseUrl } = useGlobal();
    return(
        <div className="general-wrapper border min-w-[calc((100%/3)-13.4px)] rounded-md">
            <div className="homepage-figure-wrapper flex items-start p-2 gap-x-5 h-full">
                <figure className="border w-52 h-52">
                    <img className="w-full h-full object-center object-scale-down" src={`${baseUrl}/${photo.image}`} alt={photo.slug} />
                </figure>
                <div className="homepage-photo-info-wrapper flex flex-col justify-between items-start h-full pr-1">
                    <div className="homepage-general-infos max-w-[200px]">
                        <h2>{photo.title}</h2>
                        <p>{photo.description}</p>
                    </div>
                    <div className="homepage-user-infos border-[.5px] rounded-sm p-2 bg-slate-300 flex items-center gap-x-2">
                        <h2>{photo.user.username}</h2>
                        <figure className="w-10 h-10 grid p-1 place-items-center rounded-full border-[.5px] bg-black">
                            <img src={`${baseUrl}/${photo.user.image}`} alt={photo.user.username} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}