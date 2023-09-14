const diffy = document.querySelector(".container");

fetchCSVFiles()
  .then((response) => console.log(`The CSV File fetch was Successful`))
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
    for (let entry of columnFields) {
      htmlText = htmlText + entry + "  -  ";
    }
    const para = document.createElement("p");
    const text = document.createTextNode(htmlText);
    para.appendChild(text);
    diffy.appendChild(para);
    htmlText = "";
  }
}
