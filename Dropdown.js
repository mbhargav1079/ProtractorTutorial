describe('protractor locators', function(){
	
	function add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	it('drop down Locators',function(){
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		add(5,5);
		add(7,5);
		add(10,5);
		element.all(by.tagName("option")).each(function(oper) {
			oper.getAttribute("value").then(function(text) {
				console.log(text);
				
			})
			
		})

			
	})
	
	
		
		
		
	
}) 