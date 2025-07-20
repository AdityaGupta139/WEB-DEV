import Link from 'next/link'
 
export default function NotFound() {
return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] font-sans bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-red-700 mb-4 font-bold text-4xl tracking-wide">
            Not Found
        </h2>
        <p className="mb-6 text-gray-200">Could not find requested resource</p>
        <Link
            href="/"
            className="text-blue-700 font-bold px-4 py-2 rounded bg-blue-100 border border-blue-300 no-underline"
        >
            Return Home
        </Link>
    </div>
)
}