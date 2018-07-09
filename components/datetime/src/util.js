function isDate(date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  return true;
}

function formatDate(str) {
  let monthName = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'Aguest', 'September',
    'October', 'November', 'December',
  ];
  let year = this.getFullYear();
  let month = this.getMonth();
  let day = this.getDate();

  return str.replace(/(y+)/g, year)
    .replace(/m+(\s+)/g, monthName[month] + '$1')
    .replace(/m+(\S+)/g, (month + 1) + '$1')
    .replace(/d+/g, day);
}

module.exports = {
  isDate: isDate,
  formatDate: formatDate,
};
