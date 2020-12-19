

exports.config = {


	directConnect: true,



	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		browserName: 'chrome',


	},


	framework: 'jasmine2',



	specs: ['./rough/BankManagerLogin.js'],

	/*suites: {

			smoke: ['./smoke/!*.spec.js'],
			regression: ['./regression/!*.spec.js'],
			functional: ['./functional/!*.spec.js'],
			all: ['./!*!/!*.spec.js'],
			selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],


	},*/



	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000
	},

	onPrepare: function() {
		browser.driver.manage().window().maximize();
	   
	  }









}