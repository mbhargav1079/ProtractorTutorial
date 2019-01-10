describe('protractor basic steps', function(){
	it('Open angular js website',function(){
		
		browser.get('https://angularjs.org');
		//console.log("Opened Browser");
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			console.log("working on github  Browser");
			var b=browser.getPageSource();
			console.log(b)
			
		})
		//browser.sleep(9000);
		//browser.getPageSource();
		
		//browser.close();
	

			
	})
	
	it('close browser',function(){
		
		
		
	})
}) 