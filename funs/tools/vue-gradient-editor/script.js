Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default);
  } });


Vue.component('pointer', {
  template: '#pointer',
  props: {
    position: Number,
    color: String } });



Vue.component('bg', {
  template: '#bg',
  props: {
    stop: String,
    start: String,
    scrolled: Boolean },

  data: function () {
    return {
      scrolled: this.didScroll };

  } });


Vue.component('picker', {
  template: '#picker',
  data: function () {
    return { id: null };
  },
  props: {
    colors: Array,
    shift: Number },

  mounted() {
    this.id = this._uid;
  } });


Vue.component('ratio', {
  template: '#ratio',
  props: {
    ratio: Number,
    color: String },

  methods: {
    updateValue: function (event) {
      this.$emit('input', event.target.value);
    } },

  mounted() {
    const $range = document.querySelector('.ratio__range');
    function stop(e) {
      e.stopPropagation();
    }
    $range.addEventListener('mousedown', stop, false);
    $range.addEventListener('touchstart', stop, false);
    $range.addEventListener('mouseup', stop, false);
    $range.addEventListener('touchend', stop, false);
  } });


new Vue({
  el: '#app',
  data: function () {return {
      colorsOuter: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'],
      shift: .05,
      mods: {
        brighten: 2.5 },

      pointer: 0,
      nameInner: null,
      nameOuter: null,
      ratio: .5,

      colorUI: '#212121',
      isPlaying: false,
      visibleUI: true,
      animateUI: false,
      didScroll: false };
  },
  computed: {
    colorsInner: function () {
      return this.colorsOuter.map(color => chroma(color).brighten(this.mod.brighten).hex());
    },
    colorOuter: function () {
      return chroma(`hsl(${this.pointer * 360}, 100%, 50%)`).hex();
    },
    colorInner: function () {
      return chroma(`hsl(${(this.pointer + this.shift) * 360 % 360}, 100%, 50%)`).brighten(this.mod.brighten).hex();
    },
    mod: function () {
      return this.mods = {
        brighten: 4 - this.ratio * 4 };

    } },

  methods: {
    getColors: function () {
      /*
      <h1 class="title">{{ nameOuter }} → {{ nameInner }}</h1>
      fetch(`https://api.color.pizza/v1/${this.colorInner.replace('#','')},${this.colorOuter.replace('#','')}`)
        .then(data => data.json())
        .then(data => {
          this.nameInner = data.colors[0].name;
          this.nameOuter = data.colors[1].name;
        });*/
    },
    toggleDiscrete: function () {
      if (this.colorUI == '#212121') {
        this.colorUI = 'transparent';
      } else {
        this.colorUI = '#212121';
      }
    },
    togglePlay: function () {
      if (!this.isPlaying) {
        this.playAnimation = setInterval(() => {
          this.pointer += 0.0001;
          this.shift += .0025;
        }, 16.666);
        this.isPlaying = true;
      } else {
        clearTimeout(this.playAnimation);
        this.isPlaying = false;
      }
    },
    toggleUI: function () {
      /*Vue.nextTick().then(() => {
        this.animateUI = !this.animateUI;
        Vue.nextTick().then(() => {
          this.visibleUI = !this.visibleUI;
        })
      });*/
    } },

  mounted() {
    const $ui = document.querySelector('.actions');
    new ClipboardJS('[data-clipboard-text]');
    const hamster = Hamster(window);

    hamster.wheel((event, delta, deltaX, deltaY) => {
      this.shift += Math.sign(deltaY) / 250;
      if (!this.didScroll && Math.abs(this.shift) > .05) {
        this.didScroll = true;
      }
    });

    document.addEventListener('keydown', event => {
      if (event.which === 38 /* up */) {
          this.shift += .005;
        } else if (event.which === 40 /* down */) {
          this.shift -= .005;
        }
    });

    let listen = false;

    const start = e => {
      listen = true;
      move(e);
    };
    const stop = () => {
      listen = false;
    };

    document.addEventListener('mousedown', start, false);
    document.addEventListener('touchstart', start, false);
    document.addEventListener('mouseup', stop, false);
    document.addEventListener('touchend', stop, false);

    function stopProp(e) {
      e.stopPropagation();
    }

    $ui.addEventListener('mousedown', stopProp, false);
    $ui.addEventListener('touchstart', stopProp, false);
    $ui.addEventListener('mouseup', stopProp, false);
    $ui.addEventListener('touchend', stopProp, false);

    const move = e => {
      if (!listen) {return;}
      const radians = Math.atan2(e.pageY - window.innerHeight * .5, e.pageX - window.innerWidth * .5);
      const deg = radians * (180 / Math.PI);
      this.pointer = (deg + 360 + 90) % 360 / 380;
      this.getColors();
    };


    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
  } });


/*
var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
*/