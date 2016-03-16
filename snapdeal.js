var casper = require('casper').create({
    verbose: true,
    logLevel: 'error',
    pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
    }
});

var x = require('casper').selectXPath;

casper.start('http://www.snapdeal.com/products/mobiles-mobile-phones?q=Price%3A600%2C69500&sort=plrty', function() {
    this.scrollToBottom();
});
casper.wait(20000, function () {
  var numTimes = 10, page = 1;
    casper.repeat(numTimes, function () {
 this.scrollToBottom();
casper.capture(page+".png");
        casper.wait(20000, function () {

	})

    })
page=page+1;
})

casper.wait(20000, function () {
 this.echo(this.getHTML());
})

casper.run();



