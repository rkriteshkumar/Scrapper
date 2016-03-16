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
var links = [];
function getLinks() {
    var links = document.querySelectorAll('div.pu-visual-section a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}


//casper.start('http://www.flipkart.com/mobiles/samsung~brand/pr?sid=tyy,4io&otracker=hp_nmenu_sub_electronics_0_Samsung');

/*casper.then(function () {
 this.sendKeys('#ctl00_centreContentPlaceHolder_txtEmail', 'marek@balticproperty.ee');
 this.sendKeys('#ctl00_centreContentPlaceHolder_txtPassword', 'Estateguru1');
 //    console.log('Entering form element to textbox');
 });

 casper.thenClick(x('//*[@id="ctl00_centreContentPlaceHolder_btnLogin"]'), function () {
 //    console.log("submit the form");

 })
 */

//casper.wait(10000, function () {
//    console.log('after waiting 3 seconds');
//})

//casper.thenClick(x('//*[@id="navTreeItem-Participants"]/a'), function () {
//    console.log("clicking to participant");

//})

casper.start('http://www.flipkart.com/laptop-accessories/pr?sid=6bo,ai3&otracker=ch_vn_computer_a_subcategory_Laptop%20Accessories', function() {
    this.scrollToBottom();
});

casper.wait(10000, function () {
    var numTimes = 4, page = 1;
    casper.repeat(numTimes, function () {
        this.scrollToBottom();
        casper.wait(10000, function () {

        })

    })
    page=page+1;
})


casper.thenClick(x('//*[@id="show-more-results"]'), function () {
    var numTimes = 860, page = 1;
    casper.repeat(numTimes, function () {
        this.scrollToBottom();
        casper.wait(10000, function () {
//casper.capture(page+".png")
        })
        casper.thenClick(x('//*[@id="show-more-results"]'), function () {
        })
    })
    page++;

})
casper.wait(10000, function () {
    links = links.concat(this.evaluate(getLinks));
})
casper.run(function() {
    // echo results in some pretty fashion

    this.echo('http://www.flipkart.com' +links.join('\nhttp://www.flipkart.com')).exit();

});


//*[@id="show-more-results"]



//test.assertExists("input#gallery_file_0", "File field exists");
