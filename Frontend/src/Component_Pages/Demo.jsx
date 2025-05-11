import React, { useState, useEffect, useRef } from 'react'


const employees = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    designation: "Software Engineer",
    email: "tanvir@example.com",
    photo: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 2,
    name: "Rina Akter",
    designation: "Product Manager",
    email: "rina@example.com",
    photo: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Sajib Hasan",
    designation: "UI/UX Designer",
    email: "sajib@example.com",
    photo: "https://i.pravatar.cc/150?img=10"
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    designation: "QA Engineer",
    email: "nusrat@example.com",
    photo: "https://i.pravatar.cc/150?img=13"
  }
];
const Demo = () => {
  return <>
     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Employee List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {employees.map((emp) => (
          <div key={emp.id} className="relative bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition">
            {/* Dropdown menu button */}
            <div className="absolute top-2 right-2">
              <button
                
                className="text-gray-500 hover:text-gray-700"
              >
              </button>

              
                <div
                  
                  className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-md z-10"
                >
                  <button
                    onClick={() => handleEdit(emp.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                  >
                    Delete
                  </button>
                </div>
             
            </div>

            {/* Employee Content */}
            <div className="flex flex-col items-center text-center">
              <img
                src={emp.photo}
                alt={emp.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{emp.name}</h3>
              <p className="text-sm text-gray-500">{emp.designation}</p>
              <p className="text-xs text-gray-400 mt-1">{emp.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default Demo