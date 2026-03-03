import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4">
            Dashboard Content
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;