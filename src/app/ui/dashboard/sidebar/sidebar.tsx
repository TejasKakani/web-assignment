export default function SideBar() {
    return (
      <div className="bg-gray-800 h-screen w-48 hidden md:block">
        <div className="flex p-4 gap-3">
          <img src="https://via.placeholder.com/150" alt="logo" className="w-20 h-20" />
          <h1 className="text-white">User Details</h1>
        </div>
        <div>
          <ul className="text-white">
            <li className="p-2 hover:bg-slate-400">Dashboard</li>
            <li className="p-2 hover:bg-slate-400">Profile</li>
            <li className="p-2 hover:bg-slate-400">Settings</li>
          </ul>
        </div>
      </div>
    );
}