import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [courses, setCourses] = useState([
    {
      _id: 1,
      title: "(New) Responsive Web Design Certification",
      duration: "300 hours",
    },
    {
      _id: 2,
      title: "Legacy Responsive Web Design Certification",
      duration: "300 hours",
    },
    {
      _id: 3,
      title: "JavaScript Algorithms and Data Structures Certification",
      duration: "300 hours",
    },
    {
      _id: 4,
      title: "Front End Development Libraries Certification",
      duration: "300 hours",
    },
    {
      _id: 5,
      title: "Data Visualization Certification",
      duration: "300 hours",
    },
    {
      _id: 6,
      title: "Back End Development and APIs Certification",
      duration: "300 hours",
    },
    {
      _id: 7,
      title: "Quality Assurance Certification",
      duration: "300 hours",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">freeCodeCamp( )</div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search 8,000+ tutorials"
            className="px-4 py-2 rounded bg-gray-700 text-white"
          />
          <button className="bg-gray-700 px-4 py-2 rounded">Menu</button>
        </div>
      </nav>

      {/* Welcome and Quote Section */}
      <div className="text-center mt-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to freeCodeCamp.org</h1>
        <p className="text-xl italic mb-4">
          “I have not failed. I've just found 10,000 ways that won't work.”
        </p>
        <p className="text-lg">— Thomas A. Edison</p>
      </div>

      {/* Courses Section */}
      <div className="w-full max-w-2xl">
        {courses.length > 0 ? (
          <ul className="space-y-4">
            {courses.map((course) => (
              <li
                key={course._id}
                className="flex items-center bg-gray-200 p-4 rounded-lg shadow-md"
              >
                {/* Course Icon */}
                <div className="w-12 h-12 bg-gray-400 rounded-lg mr-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* Course Info */}
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{course.title}</h2>
                  <p className="text-gray-600">{course.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No courses available</p>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
