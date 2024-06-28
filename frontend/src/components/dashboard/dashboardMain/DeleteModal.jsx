import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useGlobal } from '../../../contexts/GlobalContext';
import axios from '../../../axios/axiosClient.js';
import { useNavigate } from 'react-router-dom';

export default function({open, close, photo}) {
    const navigate = useNavigate();
    const { baseUrl } = useGlobal();
    const { title, slug } = photo;

    const initialData = {
        title: '',
        endpoint: '',
        slug: '',
    }

    const [data, setData] = useState(initialData);

    const setDeleteData = () => {
        setData({
            title,
            slug,
            endpoint: `${baseUrl}/photos/${slug}`
        })
    }

    const handleDelete = async (slug) => {
        try{
            const response = await axios.delete(`/photos/${slug}`);
            if(response.data.success){
                close(null, null);
                navigate("/dashboard");  
            };
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        setDeleteData();
    },[photo]);

  return (
    <>
      <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={() => close(null, null)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className={`flex min-h-full items-center justify-center p-4 ${!data.slug? "bg-transparent" : "bg-slate-100/50"}`}>
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6 duration-300 bg-white ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Do you want to <strong className=' text-red-600'>eliminate</strong> "{data.title}"?
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                Keep in mind that this is an irreversible action. There's no going back from eliminating this photo.
                Proceeding to eliminate "<strong>{data.title}</strong>"?
              </p>
              <div className="mt-4 flex items-center gap-x-5">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-sky-400 py-1.5 px-3 text-sm/6 font-semiboldshadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-sky-300 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => close(null, null)}
                >
                  Close
                </Button>

                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semiboldshadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-300 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                  onClick={() => handleDelete(data.slug)}
                >
                  Delete
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}