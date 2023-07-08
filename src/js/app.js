import Table from "./Table";

const table = new Table();

table.bindToDOM(document.querySelector(".container"));
table.drawTable();
table.intervalSort();
