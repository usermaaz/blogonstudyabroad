import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { study } from "../component/study"; 
import Comment from "../component/comment";
export default function Blogs() {
  return (
    <div className="p-4">
      <h1 className="text-center underline font-extrabold text-lg sm:text-xl lg:text-lg py-4">
     study-abroad
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {study.map((study) => (
          <Link href={`/blog/${study.slug}`} key={study.id}>
            <div className="border rounded-lg shadow-md p-4 bg-white ">
              <div className="relative w-full h-64 sm:h-56 lg:h-72 mb-4">
                <Image
                  src={study.image}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {study.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {study.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Comment />
      </div>
    </div>
  );
}
