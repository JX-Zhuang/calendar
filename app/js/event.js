'use strict';
class changeEvent{
	constructor(ele,data,render){
		[this.ele,this.data,this.render] = [...arguments];
	}
	change(){
		const me = this;
		this.ele.on('change',function () {
			[me.data.year,me.data.month] = [$('.select-year').val(),$('.select-month').val()];
			me.render();
		});
	}
}

class changeCalendar extends changeEvent{
	constructor(ele,data,render){
		super(ele,data,render);
	}
}
export default changeCalendar;
