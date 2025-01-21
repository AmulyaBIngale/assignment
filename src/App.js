import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import "./index.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedProjects = data.map((project, index) => ({
          id: index,
          percentageFunded: project["percentage.funded"],
          amountPledged: project["amt.pledged"],
        }));
        setProjects(formattedProjects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(projects.length / recordsPerPage);

  return (
    <div className="app">
      <h1>Kickstarter Projects</h1>
      <Table projects={currentRecords} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
