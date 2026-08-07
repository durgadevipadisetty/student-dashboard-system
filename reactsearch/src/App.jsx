import { useState } from "react";
import studentsData from "./students.json";
import "./App.css"; // ✅ import css

function App() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredStudents = studentsData.filter((s) => {
    return (
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      (department === "All" || s.department === department)
    );
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar custom-navbar">
        <div className="container">
          <span className="navbar-brand d-flex align-items-center gap-2">
            <i className="fa-solid fa-graduation-cap"></i>
            Student Dashboard
          </span>
        </div>
      </nav>

      <div className="container my-4">

        {/* Summary Cards */}
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card dashboard-card">
              <h6>Total Students</h6>
              <h3>{studentsData.length}</h3>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card dashboard-card">
              <h6>CSE Students</h6>
              <h3>
                {studentsData.filter((s) => s.department === "CSE").length}
              </h3>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card dashboard-card">
              <h6>ECE Students</h6>
              <h3>
                {studentsData.filter((s) => s.department === "ECE").length}
              </h3>
            </div>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="row my-3">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-2">
            <select
              className="form-select custom-input"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="All">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Dept</th>
                <th>Year</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td>
                    <img
                      src={s.image}
                      alt="profile"
                      className="profile-img"
                    />
                  </td>
                  <td>{s.name}</td>
                  <td>
                    <span className="badge dept-badge">
                      {s.department}
                    </span>
                  </td>
                  <td>{s.year}</td>
                  <td>{s.mobile}</td>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;