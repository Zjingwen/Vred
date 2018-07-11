<template>
  <div class="t-date">
    <div class="t-date-header">
      <div class="t-date-prev">
        <span @click.prevent="lastYear">《 </span>
        <span @click.prevent="lastMonth">《 </span>
      </div>
      <span> {{year}}年</span>
      <span> {{month + 1}}月 </span>
      <div class="t-date-next">
        <span @click.prevent="nextMonth"> 》</span>
        <span @click.prevent="nextYear"> 》</span>
      </div>
    </div>
    <div class="t-date-content">
      <table class="t-date-table" @click="handleClick">
        <tr>
          <th v-for="(week,index) in weeks" :key="index">{{week}}</th>
        </tr>
        <tr v-for="(row,index) in tableRows" :key="index">
          <td
            v-for="(cell,index) in row"
            :class="getCellClass(cell)"
            v-text="cell.type == 'today'? '今天': cell.text"
            :key="index"
          ></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style src='./date.less' lang='less'></style>

<script>
function clearHours(time) {
  let cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};
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
};
const profixCls = 't-date';

export default {
  name: profixCls,
  data: function() {
    return {
      tableRows: [[], [], [], [], [], []],
      year: '',
      month: '',
      curYear: '',
      curMonth: '',
      datesOfMonth: '',
      datesOfLastMonth: '',
      firstDayIndex: '',
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      selectionMode: 'day',
      format: 'y-m-d',
      date: {},
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  mounted: function() {
    this.rows();
  },
  mounted: function() {
    let newVal = this.value;
    this.date = (!newVal || Array.isArray(newVal)) ? new Date() : new Date(newVal);

    this.curYear = this.date.getFullYear();
    this.curMonth = this.date.getMonth();
    this.rows();
    this.$emit('pick', newVal);
  },
  methods: {
    rows: function() {
      this.year = this.date.getFullYear();
      this.month = this.date.getMonth();

      // 本月份的天数
      this.datesOfMonth = new Date(this.year, this.month + 1, 0).getDate();
      // 上个月份的天数
      this.datesOfLastMonth = new Date(this.year, this.month, 0).getDate();
      // 本月1日的星期
      this.firstDayIndex = new Date(this.year, this.month, 1).getDay();

      this.firstDayIndex = (this.firstDayIndex === 0 ? 7 : this.firstDayIndex);

      let count = 1;
      let rows = this.tableRows;
      let now = clearHours(new Date());

      // 5行
      for (let i = 0; i < 6; i++) {
        let row = rows[i];

        // 7列
        for (let j = 0; j < 7; j++) {
          let cell = row[j];

          if (!cell) {
            cell = {row: i, column: j, type: 'normal', inRange: false, start: false, end: false};
          }

          // 如果cell 存在,重置
          cell.type = 'normal';

          // 第一行 数据填充
          if (i === 0) {
            if (j < this.firstDayIndex) {
              // 填充上个月
              cell.text = this.datesOfLastMonth - (this.firstDayIndex - 1 - j);
              cell.type = 'last';
            } else {
              cell.text = count++;
            }
          } else {
            if (count <= this.datesOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - this.datesOfMonth;
              cell.type = 'next';
            }
          }
          let time = clearHours(new Date(this.year, this.month, cell.text));
          let isToday = time === now;

          if (cell.type === 'normal' && isToday) {
            cell.type = 'today';
          }

          this.$set(row, j, cell);
        }
      }
    },
    getCellClass: function(cell) {
      let classes = [];

      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('usable');
        if (cell.type === 'today') classes.push('today');
      } else {
        classes.push(cell.type);
      }

      if (this.selectionMode === 'day' &&
        (cell.type === 'normal' || cell.type === 'today') &&
        Number(this.curYear) === this.date.getFullYear() &&
        this.curMonth === this.date.getMonth() && this.date.getDate() === Number(cell.text)) {
        classes.push('current');
      }

      // if (cell.disabled) {
      //    classes.push('disabled');
      // }
      return classes.join(' ');
    },
    lastMonth: function() {
      this.date.setMonth(this.month - 1);
      this.rows();
    },
    nextMonth: function() {
      this.date.setMonth(this.month + 1);
      this.rows();
    },
    lastYear: function() {
      this.date.setFullYear(this.year - 1);
      this.rows();
    },
    nextYear: function() {
      this.date.setFullYear(this.year + 1);
      this.rows();
    },
    handleClick: function(event) {
      let target = event.target;
      if (target.tagName !== 'TD') return;

      let selectionMode = this.selectionMode;

      let cellIndex = target.cellIndex;
      let rowIndex = target.parentNode.rowIndex;
      let cell = this.tableRows[rowIndex - 1][cellIndex];
      let text = cell.text;
      let className = target.className;

      let year = Number(this.year);
      let month = Number(this.month);

      let newDate = new Date(year, month, 1);

      if (className.indexOf('last') !== -1) {
        if (month === 0) {
          year = year - 1;
          month = 11;
        } else {
          month = month - 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      } else if (className.indexOf('next') !== -1) {
        if (month === 11) {
          year = year + 1;
          month = 0;
        } else {
          month = month + 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      }
      newDate.setDate(parseInt(text, 10));

      this.date = newDate;
      if (selectionMode === 'day') {
        let str = formatDate.call(newDate, this.format);
        this.$emit('pick', str);
      }
    },
  },
};
</script>
