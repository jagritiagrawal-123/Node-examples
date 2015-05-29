var obj;
var fs = require('fs');
fs.readFile('nodes.json', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj);
}
module.exports.sortOndegreebasis=function()
{
	fs.readFile('nodes.json',function(err, data){
if(err) throw err;
obj = JSON.parse(data);
	for (var i=0;i<obj.length;i++){
  		if(obj[i].degree=="M-tech")
  console.log(obj[i].name);
	})
}
});



