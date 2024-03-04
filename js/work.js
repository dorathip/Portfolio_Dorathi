/* import fetch data javascript file */
import { fetchWorks } from '../modules/fetchdata.js';

// Call the main function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', main);

// Main function to fetch the works data, generate the table, and display it
async function main() {

    const works = await fetchWorks("data/works.json");  
    const table = generateTable(works);
    displayTable(table);
  } 

// Function to generate the HTML table dynamically
function generateTable(works) {
  const table = document.createElement('table');

  // Create the table head (thead) element
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  headerRow.innerHTML = 
  '<th>Organization</th><th>Role</th><th>Start Date</th><th>End Date</th><th>Address</th>';

  // Create the table body (tbody) element
  const tbody = document.createElement('tbody');

  works.forEach(work => {
    const row = tbody.insertRow();
    row.innerHTML = 
    `<td>${work.Organization}</td>
    <td>${work.Role}</td>
    <td>${work.StartDate}</td>
    <td>${work.EndDate}</td>
    <td>${work.Address}</td>`;
  });

  // Append the thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

// Function to insert the table into the DOM
function displayTable(table) {
  const container = document.getElementById('works-table');  
  container.appendChild(table);
}


