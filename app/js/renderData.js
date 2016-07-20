'use strict';
class RenderData {
    constructor(data, element) {
        [this.data ,this.element ] = [...arguments];
    }
    renderSelect(){
    	const ele = this.element.append('<div class="select-date">');
    	let year = $('<select class="select-year">');
        let month = $('<select class="select-month">');
        const d = new Date();
        const [y,m] = [d.getFullYear(),d.getMonth()+1];
        $('.select-date').append(year).append('<span>年</span>');
        $('.select-date').append(month).append('<span>月</span>');

        for(let i = 1990;i<=2020;i++){
            if (i == y){
                year.append(`<option value=${i} selected='selected'>${i}</option>`);
            }else{
                year.append(`<option>${i}</option>`);
            }
        }

        for(let i = 1;i<=12;i++){
            if (i == m){
                month.append(`<option value=${i} selected='selected'>${i}</option>`);
            }else{
               month.append(`<option>${i}</option>`); 
           }
        }
    }
    render() {
        const [data, ele] = [this.data, this.element];
        let index = 1;
        $('.calendar-tab')?$('.calendar-tab').remove():'';
        const table = $('<table class="calendar-tab">').append('<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></table>');
        ele.append(table);
        const day = new Date();
        const [y,m,d] = [day.getFullYear(),day.getMonth()+1,day.getDate()];
        for (let i = 0; i < 6; i++) {
        	const tr = $(`<tr>`);
            table.append(tr);
            for (let j = 0; j < 7; j++) {
                const td = $('.select-year').val()==y&&$('.select-month').val()==m&&index == d?$(`<td class='today'>`):$(`<td>`);
                tr.append(td);
                if (data.day[index] == j) {
                	td.text(index);
                    index++;
                }else{
                	td.text(' ');
                }
            }
        }
    }
}

class RenderCalendar extends RenderData {
    constructor(data, element) {
        super(data, element);
    }
}

export default RenderCalendar;