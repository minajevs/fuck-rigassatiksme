var request = require('request');

var workId = '73';
var votesCount = 100;


var votesProcessed = 1;

var options = {
  url: 'https://www.rigassatiksme.lv/lv/konkurss/dzeltena-e-talona-jauna-dizaina-bernu-zimejumu-konkurss',
  headers: {
    'User-Agent': 'request',
	'Content-Type' : 'application/x-www-form-urlencoded',
	'Host' : 'www.rigassatiksme.lv',
	'Origin' : 'https://www.rigassatiksme.lv',
	'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
  },
    form: {
	action: 'vote',
	workId: workId
  }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('success! ');
    } else {
		//console.log('error! ',error, response.statusCode);
		console.log('\033[2J', votesProcessed++ + '/' + votesCount);
	}
}

for(var i = 0; i < votesCount; i++){
	request.post(options, callback);
}
