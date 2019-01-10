describe('protractor locators', function(){
	
	function add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	it('all Locators',function(){
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		add(5,5);
		add(7,5);
		add(10,5);
		add(20,5);
		add(30,5);
		
		element.all(by.repeater("result in memory")).count().then(function(count){
			console.log("count: "+count);
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})

			
	})
	
	
		
		
		
	
}) 