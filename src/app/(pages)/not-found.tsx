import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Page not found</h1>
      <p className="mt-2 text-gray-600">The page you are looking for could not be found.</p>
      <p className="mt-6 text-sm text-gray-500">
        <Link className="text-blue-600 underline" href="/">Go back home</Link>
      </p>
    </div>
  );
}


