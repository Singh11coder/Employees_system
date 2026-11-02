
import React, { useState } from "react";
import { result } from "./data";
import ListCard from "./components/ListCard";
import CreateUser from "./components/CreateUser";

const App = () => {
  const [data, setData] = useState(result);
  const [viewData, setViewData] = useState(result[0] || null);
  const [search,setSearch] = useState();
  const [showModal, setShowModal] = useState(false);

  let ans =search?.trim().toLowerCase();
  const filterData = data.filter((val) => {
     
     return (
       val.name?.toLowerCase().includes(ans) ||
       val.email?.toLowerCase().includes(ans) ||
       val.department?.toLowerCase().includes(ans) ||
       val.designation?.toLowerCase().includes(ans)
     )
  })

  const handleCreateUser = (newUser) => {
  const employee = {
    ...newUser,
    id: Math.max(0, ...data.map((emp) => emp.id)) + 1,
  };

  setData((prev) => [...prev, employee]);
  setViewData(employee);

  setShowModal(false);
};

  const handleDescription = (id) => {
    const employee = data.find((val) => val.id === id);
    setViewData(employee);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* Navbar */}

      {!showModal 
       ?
        <div >
           <header className="bg-white border-b border-slate-200 px-6 md:px-10 py-5">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold">
              E
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Employee Management
              </h1>
              <p className="text-xs md:text-sm text-slate-500">
                Manage your organization and team
              </p>
            </div>
          </div>

          <div className="hidden sm:block">
            <button
             onClick={() => setShowModal(true)}
             className="bg-indigo-50 text-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition"
            >
            + Create User
            </button>
          </div>

        </div>
      </header>
      
      <main className="max-w-[1600px] mx-auto p-5 md:p-8">
        
        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Total Employees
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  {data.length}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl">
                👥
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Active Employees
                </p>
                <h2 className="text-3xl font-bold text-green-600 mt-2">
                  {data.filter((emp) => emp.status === "Active").length}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-2xl">
                ✓
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Departments
                </p>
                <h2 className="text-3xl font-bold text-violet-600 mt-2">
                  {new Set(data.map((emp) => emp.department)).size}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-2xl">
                🏢
              </div>
            </div>
          </div>

        </div>

        {/* Main Dashboard */}
         
        <div className="grid grid-cols-1 lg:grid-cols-[350px_minmax(0,1fr)] gap-6 items-start">

          {/* Employee Directory */}
          <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-slate-200">

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">
                    Employee Directory
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    {data.length} team members
                  </p>
                </div>

                <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full">
                  Team
                </span>
              </div>

              {/* Search UI only */}
              <div className="relative mt-5">
                <span className="absolute left-3 top-3 text-slate-400">
                  🔍
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search employees..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

            </div>

            {/* Employee List */}
            <div className="max-h-[650px] overflow-y-auto p-3 space-y-2">

              {filterData.map((d) => (
                <div
                  key={d.id}
                  onClick={() => handleDescription(d.id)}
                  className={`cursor-pointer rounded-xl p-3 transition-all duration-200 border ${
                    viewData?.id === d.id
                      ? "bg-indigo-50 border-indigo-200"
                      : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <ListCard val={d} />
                </div>
              ))}

            </div>

          </aside>

          {/* Employee Details */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-w-0">

            {viewData ? (
              <>

                {/* Profile Banner */}
                <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 md:px-10 py-10 overflow-hidden">

                  <div className="absolute -right-10 -top-20 w-64 h-64 rounded-full bg-white/10" />
                  <div className="absolute right-32 -bottom-32 w-64 h-64 rounded-full bg-white/10" />

                  <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-6">

                    <img
                      src={viewData.image}
                      alt={viewData.name}
                      className="w-28 h-28 rounded-2xl object-cover border-4 border-white/30 shadow-xl"
                    />

                    <div className="text-white text-center sm:text-left">

                      <p className="text-indigo-200 text-sm font-medium mb-2">
                        EMPLOYEE PROFILE
                      </p>

                      <h2 className="text-3xl md:text-4xl font-bold">
                        {viewData.name}
                      </h2>

                      <p className="text-indigo-100 mt-2">
                        {viewData.designation}
                      </p>

                      <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">

                        <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm">
                          {viewData.department}
                        </span>

                        <span className={`px-4 py-1.5 rounded-full text-sm ${
                          viewData.status === "Active"
                            ? "bg-green-400/30"
                            : "bg-orange-400/30"
                        }`}>
                          ● {viewData.status}
                        </span>

                      </div>

                    </div>

                  </div>
                </div>

                {/* Profile Information */}
                <div className="p-6 md:p-10">

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-800">
                      Personal Information
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Employee contact and professional details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">

                    <Info
                      label="Full Name"
                      value={viewData.name}
                    />

                    <Info
                      label="Employee ID"
                      value={`EMP${String(viewData.id).padStart(3, "0")}`}
                    />

                    <Info
                      label="Email Address"
                      value={viewData.email}
                    />

                    <Info
                      label="Phone Number"
                      value={viewData.phone}
                    />

                    <Info
                      label="Department"
                      value={viewData.department}
                    />

                    <Info
                      label="Designation"
                      value={viewData.designation}
                    />

                    <Info
                      label="Monthly Salary"
                      value={`₹${viewData.salary.toLocaleString("en-IN")}`}
                    />

                    <Info
                      label="Joining Date"
                      value={viewData.joiningDate}
                    />

                  </div>

                  {/* Employment Details */}
                  <div className="mt-10 pt-8 border-t border-slate-200">

                    <h3 className="text-xl font-bold">
                      Employment Details
                    </h3>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                      <div className="bg-slate-50 rounded-xl p-5">
                        <p className="text-sm text-slate-500">
                          Employment Status
                        </p>

                        <p className="font-semibold text-slate-800 mt-2">
                          {viewData.status}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-5">
                        <p className="text-sm text-slate-500">
                          Department
                        </p>

                        <p className="font-semibold text-slate-800 mt-2">
                          {viewData.department}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </>
            ) : (
              <div className="min-h-[500px] flex flex-col items-center justify-center text-slate-400">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-lg font-semibold">
                  No Employee Selected
                </h3>
                <p className="text-sm mt-2">
                  Select an employee from the directory
                </p>
              </div>
            )}

           </section>

          </div>

         </main>
        </div>
     
       :
        <div>
           <CreateUser onSubmit={handleCreateUser}/>
        </div>
      }
        
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div className="border-b border-slate-100 pb-4 min-w-0">
      <p className="text-sm text-slate-500 mb-2">
        {label}
      </p>

      <p className="text-base font-semibold text-slate-800 break-words">
        {value || "N/A"}
      </p>
    </div>
  );
};

export default App;
