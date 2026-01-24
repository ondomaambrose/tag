import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="min-h bg-black margin-0 text-white">
      <div className="p-10 flex flex-col gap-5 justify-center items-center mt-30">
        <p className="text-gray-700 font-bold">Oops!</p>
        <p className="text-red-700 text-5xl font-extrabold">404</p>
        <p> Page Not Found </p>
        <Link to="/">
          <button className="bg-orange-600 text-white p-3 border-none hover:bg-orange-700 mt-10">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
