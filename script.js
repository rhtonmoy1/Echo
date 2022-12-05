
// document.getElementById("tableH") = getTable.;


const btn = document.getElementById("b1");
btn.onclick = getAlbum;


async function getAlbum() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos/1`);
  let data = await response.json();

  // addRow("tableH", createTableH(data) );
  addRow("tableID", data );
  // console.log(data);
  return data;
}


// function createTableH(data){
//   const values = [];
//   Object.entries(data).forEach((entry) => {
//     const [key, value] = entry;
//     values.push(String(key));
//   });
//   return values
// }


function createValusArray(data){
  const values = [];
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    values.push(String(value));
  });
  return values
}
function addRow(tableID, data) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  const values = createValusArray(data);

  for (let i = 0; i < values.length; i++) {
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(i);

    // Append a text node to the cell
    let newText = document.createTextNode(values[i]);
    newCell.appendChild(newText);
  }
}
