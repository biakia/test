
		$('document').ready(function(){
			autoSize();
			$("body").css("overflow-y","hidden");
		});
		
		
		
		
        function autoSize(){
           
            iframe = parent.document.getElementById("upWin");
            if(iframe){
                if(iframe.document){
                    iframe.style.height = iframe.document.documentElement.scrollHeight;
                    iframe.style.width = iframe.document.documentElement.scrollWidth;
                    iframe.style.top = (window.screen.height - iframe.document.documentElement.scrollHeight)/2 +'px'; 
                    iframe.style.left = (window.screen.width - iframe.document.documentElement.scrollWidth)/2 +'px'; 
                }else if(iframe.contentDocument){//ie,firefox,chrome,opera,safari
                    	iframe.style.height ='600px';
                    	iframe.style.width ='400px';
                        iframe.style.top = (window.screen.height - iframe.contentDocument.body.offsetHeight)/2 +'px'; 
                        iframe.style.left = (window.screen.width - iframe.contentDocument.body.offsetWidth)/2 +'px'; 
                        if((iframe.style.top)<0){
                    		iframe.style.top = "0px";
                    	}
                        if(parent.window.orientation == 90 || parent.window.orientation == -90){
                        	iframe.style.left = (window.screen.height - iframe.contentDocument.body.offsetWidth)/2 +'px';
                        	if((window.screen.width - iframe.contentDocument.body.offsetHeight)<0){
                        		iframe.style.top = "0px";
                        	}else{
                        		iframe.style.top = (window.screen.width - iframe.contentDocument.body.offsetHeight)/2 +'px'; 
                        	}
                        }
                }
            }
        }
        
        
        