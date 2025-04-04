import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! It looks like the page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-600 hover:text-blue-800 underline decoration-4">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
