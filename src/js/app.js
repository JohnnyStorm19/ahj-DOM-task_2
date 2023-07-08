import Table from "./Table";

document.addEventListener("DOMContentLoaded", () => {
  const table = new Table();
  table.bindToDOM(document.querySelector(".container"));
  table.drawTable();
  table.intervalSort();
});
