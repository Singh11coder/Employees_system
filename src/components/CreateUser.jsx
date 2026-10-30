
import React, { useState } from "react";

const CreateUser = ({ onClose, onCreate }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    status: "Active",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate({
      ...formData,
      salary: Number(formData.salary),
      image: formData.image || "https://i.pravatar.cc/150?img=11"
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Create Employee
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Enter employee information
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="text-2xl text-slate-400 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone number"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Operations">Operations</option>
                <option value="Design">Design</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Designation</label>
              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="Job designation"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Salary (₹)</label>
              <input
                name="salary"
                type="number"
                min="0"
                value={formData.salary}
                onChange={handleChange}
                required
                placeholder="Enter salary"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Joining Date</label>
              <input
                name="joiningDate"
                type="date"
                value={formData.joiningDate}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Profile Image URL</label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL (optional)"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-7">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Create Employee
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateUser;
