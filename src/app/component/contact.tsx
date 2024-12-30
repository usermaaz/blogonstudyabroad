export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-stone-600">
            <h1 className="font-extrabold p-2">share your contact information </h1>
            <input 
                type="text" 
                placeholder="Name" 
                className="border border-stone-300 rounded p-2 w-64 mb-4" 
            />
            <input 
                type="text" 
                placeholder="Email" 
                className="border border-stone-300 rounded p-2 w-64 mb-4"  />
            <div className="mt-10 w-64 text-center">
                <h3 className="text-lg font-bold mb-4">Comments</h3>
                <textarea 
                    placeholder="Write your comments here..." 
                    className="border border-stone-300 rounded p-2 w-full h-32" 
                ></textarea>
                            <button className="bg-stone-500 text-white px-6 py-2 rounded hover:bg-stone-600">Submit</button>

            </div>
        </div>
    );
}
