const diffy = document.querySelector(".container");

fetchCSVFiles()
  .then((response) => console.log("Hallo"))
  .catch((error) =>
    console.error(`There was an error with fetching the CSV File - ${error}`)
  );

async function fetchCSVFiles() {
  const response = await fetch("remoteworkers.csv");
  const output = await response.text();
  const rows = output.split("\n").slice(1);
  for (let row of rows) {
    let columnFields = row.split(",");
    let htmlText = "";
    let tArr = [];

    // for (let entry of columnFields) {
    //   htmlText = htmlText + entry + "  -  ";
    // }

    // for (let i = 0; i < columnFields.length; i++) {
    //   tArr.push(columnFields[i]);
    // }

    for (let val of columnFields) {
      tArr.push(val);
    }

    htmlText = `${tArr[0]} of age ${tArr[1]} is a ${tArr[2]} with email address ${tArr[3]} and lives in ${tArr[4]}`;

    const para = document.createElement("p");
    const text = document.createTextNode(htmlText);
    para.appendChild(text);
    diffy.appendChild(para);
    htmlText = "";
  }
}
