import Link from "next/link"

export default function Navbar(){
    return (
        <div className="bg-gray-500 flex justify-center  gap-4 p-4">
            <li className="hover:to-blue-300"><Link  href={"/"}>Home</Link></li>
            <li><Link  href={"/blog"}>blog</Link></li>
            <li><Link  href={"/about"}>about</Link></li>
        </div>
    )
}