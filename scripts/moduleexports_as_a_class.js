module.exports=function(name,age)
{
	this.name=name;
	this.age=age;
	this.sum=function(){
		console.log("Your name is:"+ this.name+' and age is'+ this.age);
	};
};