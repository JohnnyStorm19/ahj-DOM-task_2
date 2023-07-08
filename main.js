/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/db.js
const db = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: 9.3,
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: 9.2,
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: 9.0,
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: 9.0,
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: 8.9,
  year: 1994
}];
const json = JSON.stringify(db);
;// CONCATENATED MODULE: ./src/js/Table.js

class Table {
  constructor() {
    this.container = null;
    this.db = json;
    this.sort = [{
      sortDirection: "up",
      sortItem: "id"
    }, {
      sortDirection: "down",
      sortItem: "id"
    }, {
      sortDirection: "up",
      sortItem: "title"
    }, {
      sortDirection: "down",
      sortItem: "title"
    }, {
      sortDirection: "up",
      sortItem: "imdb"
    }, {
      sortDirection: "down",
      sortItem: "imdb"
    }, {
      sortDirection: "up",
      sortItem: "year"
    }, {
      sortDirection: "down",
      sortItem: "year"
    }];
  }
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }
  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }
  drawTable() {
    this.checkBinding();
    const db = JSON.parse(this.db);
    console.log(db);
    const tableEl = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const tableHead = document.createElement("thead");
    const tableHeadRow = document.createElement("tr");
    for (let prop in db[0]) {
      const th = document.createElement("th");
      th.textContent = prop;
      tableHeadRow.append(th);
    }
    tableHead.append(tableHeadRow);
    db.forEach(obj => {
      const tableRow = document.createElement("tr");
      tableRow.dataset.id = obj.id;
      tableRow.dataset.title = obj.title;
      tableRow.dataset.imdb = obj.imdb;
      tableRow.dataset.year = obj.year;
      const dataSet = tableRow.dataset;
      for (let prop in dataSet) {
        const tableDataEl = document.createElement("td");
        if (prop === "imdb") {
          const n = Number(dataSet[prop]);
          tableDataEl.textContent = `imdb: ${n.toFixed(2)}`;
        } else {
          tableDataEl.textContent = dataSet[prop];
        }
        tableRow.append(tableDataEl);
      }
      tableBody.append(tableRow);
    });
    tableEl.append(tableHead, tableBody);
    this.container.append(tableEl);
  }
  sorted(options) {
    const tableBody = document.querySelector("tbody");
    const tableRows = tableBody.querySelectorAll("tr");
    const tableHead = document.querySelector("thead");
    const arrowUpEl = document.createElement("span");
    const arroDownEl = document.createElement("span");
    arrowUpEl.textContent = " \u2191";
    arroDownEl.textContent = " \u2193";
    const db = JSON.parse(this.db);

    // если сортируем по возрастанию
    if (options.sortDirection === "up") {
      const tableHeaders = document.querySelectorAll("th");
      const arrows = tableHead.querySelectorAll("span");
      arrows.forEach(el => el.remove());
      const findedHeader = [...tableHeaders].find(el => el.textContent === options.sortItem);
      findedHeader.append(arrowUpEl);
      db.sort((a, b) => {
        if (options.sortItem != "title") {
          return a[options.sortItem] - b[options.sortItem];
        }
        return a[options.sortItem].localeCompare(b[options.sortItem]);
      });
    }

    // если сортируем по убыванию
    if (options.sortDirection === "down") {
      const tableHeaders = document.querySelectorAll("th");
      const arrows = tableHead.querySelectorAll("span");
      arrows.forEach(el => el.remove());
      const findedHeader = [...tableHeaders].find(el => el.textContent === options.sortItem);
      findedHeader.append(arroDownEl);
      db.sort((a, b) => {
        if (options.sortItem != "title") {
          return b[options.sortItem] - a[options.sortItem];
        }
        return b[options.sortItem].localeCompare(a[options.sortItem]);
      });
    }
    tableRows.forEach(row => {
      row.remove();
    });
    db.forEach(obj => {
      const tableRow = document.createElement("tr");
      tableRow.dataset.id = obj.id;
      tableRow.dataset.title = obj.title;
      tableRow.dataset.imdb = obj.imdb;
      tableRow.dataset.year = obj.year;
      const dataSet = tableRow.dataset;
      for (let prop in dataSet) {
        const tableDataEl = document.createElement("td");
        if (prop === "imdb") {
          const n = Number(dataSet[prop]);
          tableDataEl.textContent = `imdb: ${n.toFixed(2)}`;
        } else {
          tableDataEl.textContent = dataSet[prop];
        }
        tableRow.append(tableDataEl);
      }
      tableBody.append(tableRow);
    });
  }
  intervalSort() {
    let index = 0;
    setInterval(() => {
      if (index > this.sort.length - 1) {
        index = 0;
      }
      console.log("Sorted: ", this.sort[index]);
      this.sorted(this.sort[index]);
      index++;
    }, 2000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const table = new Table();
  table.bindToDOM(document.querySelector(".container"));
  table.drawTable();
  table.intervalSort();
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;