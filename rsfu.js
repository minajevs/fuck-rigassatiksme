var request = require('request');

var workId = '78';
var votesCount = 100;


var votesProcessed = 1;

var options = {
  url: 'https://www.rigassatiksme.lv/ru/konkurs/konkurs-detskikh-risunkov-dlya-novogo-dizaina-zheltogo-e-talona-7',
  headers:{
    'User-Agent':'request',
	'Content-Type' :'applicationx-www-form-urlencoded',
	'Host' :'www.rigassatiksme.lv',
	'Origin' :'httpswww.rigassatiksme.lv',
	'User-Agent' :'Mozilla5.0 (Windows NT 10.0; WOW64) AppleWebKit537.36 (KHTML, like Gecko) Chrome51.0.2704.103 Safari537.36'
  },
    form:{
	action:'vote',
	workId:workId
  }
};

function callback(error, response, body) {
	console.log('\033[2J');
    if (!error) {
        console.log('Success!');
    } else {
		console.log('error! ',response, response.statusCode);
	}
	console.log(votesProcessed++ + ' / ' + votesCount);
}

for(var i = 0; i <votesCount; i++){
	request.post(options, callback);
}
