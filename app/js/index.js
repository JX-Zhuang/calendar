'use strict';
import Calendar from './getDate.js';
import Render from './renderData.js';
import Event from './event.js';
const d = new Date();
const [y,m] = [d.getFullYear(),d.getMonth()+1];
let calendar = new Calendar(y,m);
let data = calendar.showDate();
let ele = $('.calendar');
let render = new Render(data, ele);
render.renderSelect();
render.render();

let monthEvent = new Event($('.select-month'),calendar,()=>{render.data = calendar.showDate();render.render()});
monthEvent.change();

let yearEvent = new Event($('.select-year'),calendar,()=>{render.data = calendar.showDate();render.render()});
yearEvent.change();