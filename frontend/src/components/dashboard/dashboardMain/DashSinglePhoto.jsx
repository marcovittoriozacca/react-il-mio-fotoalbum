export default function({photo}){
    const {title, description, image, visible, categories, user} = photo;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const Visible = () => {
        return(
            <div className={`w-4 h-4 bg-green-400 rounded-full ${visible? "bg-green-500" : "bg-red-500"}`}></div>
        )
    }
    
    return(<>
        <section className="border border-black p-10 flex flex-col gap-y-10">
            <div className="flex items-center gap-x-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <Visible/>
            </div>
            <div className="flex items-start gap-x-5">
                <figure className="w-[350px]">
                    <img src={`${baseUrl}/${image}`} alt="" />
                </figure>
                <div className="flex flex-col gap-y-3">
                    {description}
                    {categories?.map((c,i) => (
                        <span key={`cat-photo-${c.id}`}>{c.name}</span>
                    ))}
                    <div>
                        <h3>Published by:</h3>
                        <h2 className="font-semibold capitalize">{user?.username}</h2>
                        <figure className="w-10 h-10 rounded-full border flex justify-center items-center p-[1px]">
                            <img src={`${baseUrl}/${user?.image}`} alt="" />
                        </figure>
                    </div>
                </div>


            </div>

            
        </section>
    </>)
}