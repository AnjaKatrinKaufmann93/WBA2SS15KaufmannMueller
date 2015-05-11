
var fs = require('fs');
var chalk = require('chalk');

var values
var sortedData;
var length;

fs.readFile("wolkenkratzer.json", function(err, data)
{
	if(err) throw err;

	console.log();
	console.log('open data...');
	console.log();
	console.log('Data:');
	console.log();

	values = JSON.parse(data);
	length = values.wolkenkratzer.length;

	console.log('--------------------');

	for(var i = 0; i< length; i++)
	{
		console.log(chalk.green('Name: '+values.wolkenkratzer[i].name));
		console.log(chalk.cyan('Stadt: '+values.wolkenkratzer[i].stadt));
		console.log(chalk.magenta('Hoehe: '+values.wolkenkratzer[i].hoehe+'m'));
		console.log('--------------------');
	}

	values.wolkenkratzer.sort(function(a,b)
	{
		return a.hoehe - b.hoehe;
	});

	sortedData = JSON.stringify(values);

	fs.writeFile("wolkenkratzer_sortiert.json", sortedData, function(err){
		if(err) throw err;

		console.log();
		console.log('write Data ...');
		console.log();
		console.log('sorted Data:');
		console.log();

		console.log('--------------------');

		for(var l = 0; l < length; l++)
		{
			console.log(chalk.green('Name: '		+JSON.parse(sortedData).wolkenkratzer[l].name));
			console.log(chalk.cyan('Stadt: '		+JSON.parse(sortedData).wolkenkratzer[l].stadt));
			console.log(chalk.magenta('Hoehe: '	+JSON.parse(sortedData).wolkenkratzer[l].hoehe+'m'));
			console.log('--------------------');
		}
	});

});
