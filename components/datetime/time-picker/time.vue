<template>
  <ul class="t-clock">
    <li class="hour" ref="hour">
      <div class="scroll">
        <div
          class="item"
          v-for="(hour,index) in hourDial" 
          :key="index" 
          @click="handleAction('hour',hour,index)"
          :class="[hour === inputValue[0] ? 'action' : '']"
        >{{hour}}</div>
      </div>
    </li>
    <li class="minute" ref="minute">
      <div class="scroll">
        <div
          class="item"
          v-for="(minute,index) in minuteDial" 
          :key="index" 
          @click="handleAction('minute',minute,index)"
          :class="[minute === inputValue[1] ? 'action' : '']"
        >{{minute}}</div>
      </div>
    </li>
    <li class="second" ref="second">
      <div class="scroll">
        <div
          class="item"
          v-for="(second,index) in secondDial" 
          :key="index"
          :class="[second === inputValue[2] ? 'action' : '']"
          @click="handleAction('second',second,index)"
        >{{second}}</div>
      </div>
    </li>
  </ul>
</template>
<style src='./time.less' lang='css'></style>
<script>
const profixCls = 't-time';

export default {
  name: profixCls,
  props:{
    value: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {
      hourDial: [],
      minuteDial: [],
      secondDial: [],
      inputValue: [],
    };
  },
  mounted: function() {
    while(this.hourDial.length < 24){
      let i = this.hourDial.length.toString() 
      this.hourDial.push(i < 10 ? '0'+i : i);
    };

    while(this.minuteDial.length < 60){
      let i = this.minuteDial.length.toString() 
      this.minuteDial.push(i < 10 ? '0'+i : i);
      this.secondDial.push(i < 10 ? '0'+i : i);
    };

    this.inputValue = this.value === '' ? ['','','']: this.value.split(':');
  },
  methods: {
    handleScroll(type,index){
      this.$refs[type].scrollTo(0,24*index);
    },
    handleAction(type,val,index){
      switch (type){
        case 'hour':
        this.$set(this.inputValue,0,val);
        break;
        case 'minute':
        this.$set(this.inputValue,1,val);
        break;
        case 'second':
        this.$set(this.inputValue,2,val);
        break;
      };

      this.inputValue.forEach((val,index)=>{
        if(val == '') {
          this.$set(this.inputValue,index,'00');
        }
      })

      this.$emit('pick', this.inputValue.join(':'));
      this.handleScroll(type,index);
    },
    handleReload(){
      // @TODO 用来初始化定位，因为display:none的问题，无法做到。
      this.inputValue.forEach((val,index)=>{
        if(val === '') return false;
        switch (index){
          case 0:
          this.handleScroll('hour',Number(val));
          break;
          case 1:
          this.handleScroll('minute',Number(val));
          break;
          case 2:
          this.handleScroll('second',Number(val));
          break;
        };
      });
    },
  },
}
</script>
