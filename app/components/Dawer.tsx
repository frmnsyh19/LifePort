import Link from "next/link"
import { FiMenu } from "react-icons/fi"


const Dawer = () => {
  return (
    <div className="drawer lg:hidden block z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><FiMenu className=" text-lg text-white" /></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu bg-slate-100  text-base-content min-h-full w-64 p-4">
          <div className=" w-full flex justify-start items-center h-16">
            <div className="flex-1 p-2 justify-start flex">
              <span className="text-2xl font-bold text-green-600">Life</span>
              <span className=" text-2xl font-bold text-blue-600">Port</span>
            </div>
          </div>
          {/* Sidebar content here */}
          <li className="mt-5"><Link className=" text-base" href="/">Home</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/about">About</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/healthy">Healhty</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/food">Food</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/sport">Sport</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/fashion">Fashion</Link></li>
          <li className="mt-5"><Link className=" text-base" href="/technology">Technology</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Dawer