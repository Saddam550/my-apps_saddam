import Image from 'next/image'

export default function Navber({ items }) {
  return (
    <nav className="text-white flex  items-center justify-between p-3">
      <div className="logo">
        <a href="">
          <Image src="./MYLOGO.svg" width={100} height={100} alt="LOGO" />
        </a>
      </div>

      <div className="menu">
        <ul className=" flex text-xl">
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400"  href="">
              Home
            </a>
          </li>
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 "  href="">
              Home
            </a>
          </li>  <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 "  href="">
              Home
            </a>
          </li>  <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 "  href="">
              Home
            </a>
          </li>  <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 "  href="">
              Home
            </a>
          </li>  <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 "  href="">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
