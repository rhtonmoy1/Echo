const btn = document.getElementById("b1");
btn.onclick = getAlbum;

async function getAlbum() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos/1`);
  let data = await response.json();
  const pra = document.getElementById("p1");
  pra.innerText = "albumID = " + data.albumId + " ID = " + data.id;

  //   console.log(data);
  //   for (const key in data) console.log(key);

  //   Object.entries(data).forEach((entry) => {
  //     const [key, value] = entry;
  //     console.log(` ${value}`);
  //   });
  const valus = [];
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    valus.push(String(value));
  });

  addRow("tableID", valus);
  return data;
}


function addRow(tableID, data) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
    
    for(let i = 0 ; i <data.length; i++){
        // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(i);
  
    // Append a text node to the cell
    let newText = document.createTextNode(data[i]);
    newCell.appendChild(newText);
    }



    
  }
  

