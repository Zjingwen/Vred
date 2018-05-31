
require('./clock.css');
let template = require('./clock.html');

module.exports = {

    template: template,

    data: function() {
      return {
          visible: false,
          format: 'HH:mm:ss',
          showSecond: false,
          dialRadius: 100,
          outerRadius: 80,
          tickRadius: 13,
          twelveHour: false,
          dial: 0, // hour,minute,second
          hourDial: [],
          minuteDial: [],
          secondDial: [],
          value: [],
          svgNS: 'http://www.w3.org/2000/svg',
      };
    },

    mounted: function() {
        this.panelCreated();

        if (this.svgSupported) {
            this.canvasPointer();
        }
        this.setClockPointer();
    },

    watch: {
        inputValue: function(val) {
            this.$emit('pick', val);
        },
        visible: function(val) {
            if (val) {
                this.dial = 0;
                this.currentTime();
                this.setClockPointer();
            }
        },
    },

    computed: {

        inputValue: function() {
            if (!Array.isArray(this.value)) {
                this.value = this.value == '' ? []: this.value.split(':');
            }
            return this.value.join(':');
        },
        diameter: function() {
            return this.dialRadius * 2;
        },
        svgSupported: function() {
            if ('SVGAngle' in window) {
                let supported, el = document.createElement('div');
                el.innerHTML = '<svg/>';
                supported = (el.firstChild && el.firstChild.namespaceURI) == this.svgNS;
                el.innerHTML = '';
                return supported;
            }
            return false;
        },
        isHour: function() {
            return this.dial == 0;
        },
    },

    methods: {

        createSvgElement: function(name) {
            return document.createElementNS(this.svgNS, name);
        },

        canvasPointer: function() {
            let canvas = this.$refs.canvas;
            let svg = this.createSvgElement('svg');
            svg.setAttribute('width', this.diameter);
            svg.setAttribute('height', this.diameter);

            let g = this.createSvgElement('g');
            g.setAttribute('transform', 'translate(' + this.dialRadius + ',' + this.dialRadius + ')');

            let bearing = this.createSvgElement('circle');
            bearing.setAttribute('class', 't-clock_circle-center');
            bearing.setAttribute('cx', 0);
            bearing.setAttribute('cy', 0);
            bearing.setAttribute('r', 3);

            let hand = this.createSvgElement('line');
            hand.setAttribute('x1', 0);
            hand.setAttribute('y1', 0);
            // hand.setAttribute('x2', 0);
            // hand.setAttribute('y2', this.outerRadius);

            let bg = this.createSvgElement('circle');
            bg.setAttribute('class', 't-clock_circle-bg');
            bg.setAttribute('r', this.tickRadius);
            bg.setAttribute('cx', 0);
            bg.setAttribute('cy', this.outerRadius);

            let fg = this.createSvgElement('circle');
            fg.setAttribute('class', 't-clock_circle-fg');
            fg.setAttribute('r', 3.5);
            fg.setAttribute('cx', 0);
            fg.setAttribute('cy', this.outerRadius);

            g.appendChild(hand);
            g.appendChild(bg);
            g.appendChild(fg);
            g.appendChild(bearing);
            svg.appendChild(g);
            canvas.appendChild(svg);

            this.hand = hand;
            this.bg = bg;
            this.fg = fg;
            this.bearing = bearing;
            this.g = g;
            this.canvas = canvas;
        },

        panelCreated: function() {
            let radian, radius, num;
            // hour
            if (this.twelveHour) {
                for (var i = 1; i <= 12; i++) {
                    radian = i * 30 * Math.PI / 180;
                    radius = this.outerRadius;

                    this.hourDial.push({
                        left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                        top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                        num: i,
                    });
                }
            } else {
                for (var i = 0; i < 24; i++) {
                    radian = i * 15 * Math.PI / 180;
                    radius = this.outerRadius;

                    this.hourDial.push({
                        left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                        top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                        num: i === 0 ? '00' : i,
                    });
                }
            }
            // minute, second
            for (let j = 0; j < 12; j ++) {
                radian = j * 30 * Math.PI / 180;
                radius = this.outerRadius;
                num = j*5;
                this.minuteDial.push({
                    left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                    num: num < 10 ? '0'+ num : num,
                });
                if (this.showSecond) {
                    this.secondDial.push({
                        left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                        top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                        num: num < 10 ? '0'+ num : num,
                    });
                }
            }

            this.currentTime();
        },

        currentTime: function() {
            let _hour, _minute, _second;
            if (this.value.length > 0) {
                let date = this.value;
                _hour = Number(date[0]);
                _minute = Number(date[1]);
                _second = Number(date[2]);
            } else {
                let now = new Date();
                _hour = now.getHours();
                _minute = now.getMinutes();
                _second = now.getSeconds();
            }

            this.value[0] = _hour < 10 ? '0'+ _hour : _hour;
            this.value[1] = _minute < 10 ? '0'+ _minute : _minute;
            if (this.showSecond) {
this.value[2] = _second < 10 ? '0'+ _second : _second;
}
        },

        setClockPointer: function(radian) {
            let radius = this.outerRadius;

            if (typeof radian == 'undefined') {
                var unit = this.dial == 0 ? 15 : (this.dial < 3 ? 6 : 30),
                    radian = this.value[this.dial] * unit * Math.PI / 180;
            }

            let cx = Math.sin(radian) * radius, cy = - Math.cos(radian) * radius;

            this.hand.setAttribute('x2', cx);
            this.hand.setAttribute('y2', cy);
            this.bg.setAttribute('cx', cx);
            this.bg.setAttribute('cy', cy);
            this.fg.setAttribute('cx', cx);
            this.fg.setAttribute('cy', cy);
        },

        setDial: function(dial) {
            this.dial = dial;
            this.setClockPointer();
        },

        /**
         *
         * @param e
         * @param space 数值之间的间隙
         */
        tickMouseDown: function(e, space) {
            let plate = this.canvas.parentNode,
                clockEl = this.$el,
                isTouch = /^touch/.test(e.type),
                // 圆心
                x0 = plate.offsetLeft + this.dialRadius + clockEl.offsetLeft,
                y0 = plate.offsetTop + this.dialRadius + clockEl.offsetTop,
                dx = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
                dy = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0,
                z = Math.sqrt(dx * dx + dy * dy),
                moved = false;

            // 分钟视图,点击间隙,判断鼠标点击位置
            if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
                return;
            }
            e.preventDefault();

            let radian = Math.atan2(dx, -dy);
            // console.log("_radian:",radian);
            let unit = Math.PI / (this.isHour ? 12 : 30);

            // Radian should in range [0, 2PI]
            if (radian < 0) {
                radian = Math.PI * 2 + radian;
            }
            // Get the round value
            let value = Math.round(radian / unit);
            value = (this.dial == 0 && value == 24) || value == 60 ? 0 : value;
            let _value = Number(value) < 10 ? '0' + value : value;
            this.value.splice(this.dial, 1, _value);

            radian = value * unit;
            // console.log("_radian:",radian);

            this.setClockPointer(radian);

            if ((this.showSecond && this.dial < 2) || (!this.showSecond && this.dial < 1)) {
                setTimeout(function() {
                    this.dial += 1;
                    this.setClockPointer();
                }.bind(this), 0);
            } else {
                if (this.$options.autoClose) {
                    this.$emit('dodestroy');
                }
            }
        },

        gapMouseDown: function(e) {
            if (e.target.className !== 't-clock_tick') {
                this.tickMouseDown(e, true);
            }
        },
    },
};
