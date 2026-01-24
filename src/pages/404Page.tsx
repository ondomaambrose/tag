import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="min-h bg-black margin-0 text-white justify-center align-middle">
      <p className="text-gray-700">Oops!</p>
      <p className="text-red-700">404</p>
      <p> Page Not Found </p>

      <Link to="/">
        <button className="bg-orange-600 text-white text-2xl p-10 border-r-5 hover:bg-orange-700 ">
          Back Home
        </button>
      </Link>
    </div>
  );
}
