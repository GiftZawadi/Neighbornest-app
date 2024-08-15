import React from 'react';
import '../styles/ResidentStatusTable.css';

const ResidentStatusTable = () => {
  return (
    <div className="resident-status-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Active</td>
            <td>Yesterday</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Inactive</td>
            <td>3 Days Ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResidentStatusTable;
