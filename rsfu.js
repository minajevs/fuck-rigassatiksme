var request = require('request');

var workId = '85';
var votesCount = 10000;
var votesProcessed = 0;

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

let processed = 0;
let int = setInterval(() => {
	if(votesProcessed >= votesCount){
		clearInterval(int);
		console.log('Done!' + votesProcessed + ' added!');
	} 
	if(votesProcessed % 10 == 0){
		console.log(votesProcessed);
	}
	votesProcessed++;
	request.post(options)
}, 10)
