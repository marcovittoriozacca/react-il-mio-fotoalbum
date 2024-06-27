import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useAuth } from '../../../contexts/AuthContext'

export default function({username, image}) {
  const { handleLogout } = useAuth();
  return (
    <Menu>

      <MenuButton>
          <figure className="w-10 h-10 p-1 flex items-center justify-center bg-black rounded-full">
            <img src={image} alt={username} />
          </figure>
        </MenuButton>

      <MenuItems anchor="bottom end" transition className={"w-52 p-2 my-1 rounded-md transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 bg-white border-[.5px] border-slate-500"}>

        <MenuItem className={"hover:bg-slate-200/70 transition-colors duration-100 ease-in-out rounded-md inline-flex w-full p-1"}>
          <button className='flex items-center gap-x-2' onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Logout
          </button>
        </MenuItem>

      </MenuItems>

    </Menu>
  )
}