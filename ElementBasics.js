/**
 * 
 */

describe('Protractor elements demo', function(){
	it('Locators',function(){
		
		/*browser.waitForAngularEnabled(false);
		browser.get('https://www.google.com/');*/
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
			//browser.sleep(5000);
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
			
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");	
		
	

			
	})
})