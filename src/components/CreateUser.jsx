
import React, { useState } from "react";

const CreateUser = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    status: "Active",
    message: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      salary: Number(formData.salary),
      message: Number(formData.message),
      image: formData.image || "https://i.pravatar.cc/150?img=12",
    });
  };

  const inputStyle =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  return (
    <form onSubmit={handleSubmit} className="p-6">

      <h2 className="text-xl font-bold mb-6">
        Create New Employee
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <input
          className={inputStyle}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className={inputStyle}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className={inputStyle}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />

        <input
          className={inputStyle}
          type="url"
          name="image"
          placeholder="Profile Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <select
          className={inputStyle}
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Design">Design</option>
        </select>

        <input
          className={inputStyle}
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />

        <input
          className={inputStyle}
          type="number"
          name="salary"
          placeholder="Monthly Salary"
          value={formData.salary}
          onChange={handleChange}
          min="0"
          required
        />

        <input
          className={inputStyle}
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          required
        />

        <select
          className={inputStyle}
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="On Leave">On Leave</option>
        </select>

      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Create Employee
      </button>

    </form>
  );
};

export default CreateUser;
