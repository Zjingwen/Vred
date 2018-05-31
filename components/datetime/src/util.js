function toDate(date) {
    return isDate(date) ? new Date(date) : null;
}

function isDate(date) {
    if (date === null || date === undefined) return false;
    if (isNaN(new Date(date).getTime())) return false;
    return true;
}

/**
 * var time = new Date(2014, 6, 3);
 * time.format('y年m月d日'); // "2014年7月3日"
 * time.format('y-m-d');    // "2014-7-3 "
 * time.format('m y');      // "July 2014"
 * @param str
 * @return {*}
 */
function formatDate(str) {
    let monthName = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'Aguest', 'September',
            'October', 'November', 'December',
        ],
        year = this.getFullYear(),
        month = this.getMonth(),
        day = this.getDate();

    // 替换字符串中的'y' 'm' 'd'字符
    return str.replace(/(y+)/g, year)
        .replace(/m+(\s+)/g, monthName[month] + '$1')
        .replace(/m+(\S+)/g, (month + 1) + '$1')
        .replace(/d+/g, day);
}

module.exports = {
    isDate: isDate,
    formatDate: formatDate,
};
