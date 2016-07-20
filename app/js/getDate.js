'use strict';
class GetDate{
	constructor(year,month){
		[this.year,this.month] = [...arguments];
	}
	getYear(){
		return this.year%400 == 0||(this.year%4==0&&this.year%100!=0);
	}
	getMonth(){
		if(this.month == 2){
			this.getYear()?this.day=29:this.day=28;
		}else{
			[1,3,5,7,8,10,12].some((index)=>{
				return index == this.month;
			})?this.day=31:this.day=30;
		}
	}
	getDay(){
		const [year,month] = [this.year,this.month];
		const day = this.day;
		this.day = {};
		for(let i = 1 ;i <= day;i ++){
			const d = new Date(`${year},${month},${i}`);
			this.day[i] =  d.getDay();
		}
	}
	showDate(){
		this.getYear();
		this.getMonth();
		this.getDay();
		return this;
	}
}

class GetCalendar extends GetDate{
	constructor(year,month){
		super(year,month);
	}
}
export default  GetCalendar ;







