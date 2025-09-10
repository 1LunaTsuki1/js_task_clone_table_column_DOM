'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

rows.forEach((row) => {
  const newCell = row.cells[1].cloneNode(true);

  row.lastElementChild.before(newCell);
});
// write your code here
