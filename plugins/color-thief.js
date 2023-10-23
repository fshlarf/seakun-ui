import Vue from 'vue';
import ColorThief from '~/node_modules/colorthief/dist/color-thief.mjs';

const colorThief = new ColorThief();

Vue.prototype.$colorThief = colorThief;
