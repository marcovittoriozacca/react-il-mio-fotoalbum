export default function({photo}){
    const {title, description, image, visible, categories, user} = photo;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const Visible = () => {
        return(
            <div className={`w-4 h-4 bg-green-400 rounded-full ${visible? "bg-green-500" : "bg-red-500"}`}></div>
        )
    }
    
    return(<>
        <section className="border border-black p-10 flex flex-col flexs gap-y-10">

            <div className="flex items-center gap-x-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <Visible/>
            </div>

            <div className="flex gap-x-5">

                <figure className="w-[400px] h-[400px] overflow-hidden rounded-lg">
                    <img className="object-contain object-center w-full h-full" src={`${baseUrl}/${image}`} alt="" />
                </figure>

                <div className="flex flex-col gap-y-3 justify-between">
                    <div className="flex flex-col gap-y-2 h-full">
                        {description}

                        {categories?.map((c,i) => (
                            <span key={`cat-photo-${c.id}`}>{c.name}</span>
                        ))}
                    </div>

                    <div className="bg-slate-100 p-5 rounded-lg flex flex-col gap-y-2">
                        <h3>Published by:</h3>
                        <div className="flex items-center gap-x-3">
                            <h2 className="font-semibold capitalize">{user?.username}</h2>
                            <figure className="w-10 h-10 rounded-full border flex justify-center items-center p-[1px] bg-black">
                                <img src={`${baseUrl}/${user?.image}`} alt="" />
                            </figure>
                        </div>
                    </div>

                </div>


            </div>

            
        </section>
    </>)
}