var obj;
var fs = require('fs');
fs.readFile('nodes.json', function(err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj);
});

exports.sortOndegreebasis = function() {
    fs.readFile('./nodes.json', function(err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].degree == "M-tech" && obj[i].percent > 75)
                console.log(obj[i].name);
        }
    });
}
fs.readFile('./nodes.json', function(err, data) {
    var jsonString = "{\"key\":\"value\"}";
    var jsonObj = JSON.parse(jsonString);
    console.log(jsonObj.key);
});

/*ar Client = require('mysql').Client;
var client = new Client(); 
client.host ='10.0.3.7:3306';
client.user = 'appserver';
client.password = 'data';
client.database = 'appserver_core'
console.log("connecting...");
client.connect(function(err, results) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
    console.log("connected.");
    clientConnected(client);
});
 
clientConnected = function(client)
{
	tableHasData(client);
}           
 
 
tableHasData = function(client)
{
    client.query(
        'SELECT * FROM db.table LIMIT 0,10',
        function selectCb(err, results, fields) {
            if (err) {
                console.log("ERROR: " + err.message);
                throw err;
            }
            console.log("Got "+results.length+" Rows:");
            for(var i in results){
			 
				console.log(results[i].[column name]); 
				console.log('\n');
				
            //console.log("The meta data about the columns:");
            //console.log(fields);     
			}
            client.end();
        });
};*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "10.0.3.7",
    user: "appserver",
    password: "data",
    database: 'appserver_core'
});

connection.connect(function() {
    console.log('Connected');
});
connection.query("select * from salary_packages where id=42", function(err, row) {
    console.log('Result Received : Err = ' + err + ' Row = ' + row);
    /* for (var i in row) {
        console.log(row[i]);
    }*/
   connection.query('update salary_packages SET salary_package_to = salary_package_from where salary_package_to=null');
    
    if (err) {
        console.log('can not fetch the tables');
    } else {
        console.log(row);
    }
    connection.end();
});


/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'http://10.0.3.7:3306',
  user     : 'appserver',
  password : 'data',
  database : 'appserver_core'
});

connection.connect();

connection.query('SELECT * from < table name >', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();


*/
