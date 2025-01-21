import React from "react";

const Table = ({ projects }) => {
  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.length ? (
          projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id + 1}</td>
              <td>{project.percentageFunded}</td>
              <td>{project.amountPledged}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No projects available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
