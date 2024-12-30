"use client";

import { useParams } from "next/navigation"; 
import { study } from "@/app/component/study"; 
import Image from "next/image";

export default function Studydetails() {
    const params = useParams();

    // Fallback if params are not ready
    if (!params) return <p>Loading...</p>;

    const { slug } = params;

    console.log("Slug from URL:", slug); // Debug log
    console.log("study Array:", study); // Debug books array

    // Find the book matching the slug
    const studys = study.find((study) => study.slug === slug);

    if (!studys) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Book Not Found</h1>
                <p>We could not find the book you are looking for.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen text-center">
            <h1 className="text-3xl font-bold mb-4">{studys.title}</h1>
            <div className="relative w-32 h-32 mb-6">
                <Image 
                    src={studys.image}
                    alt={studys.title}
                    fill
                    style={{ objectFit: "cover" }} // Ensure proper scaling
                    className="rounded-lg"
                />
            </div>
            <p className="text-gray-700 text-lg">{studys.content}</p>
        </div>
    );
}
