$(document).ready(function(){
	$(".error").fadeIn("slow");
	$(".error").fadeOut(3000);
	$(".tablogin").click(function(){
		
		 $(".register").slideUp(20);
	    $(".content").toggle(200);
	  });
	$(".tabreg").click(function(){
		 $(".content").slideUp(20);
	    $(".register").toggle(200);
	  });
});


function CheckForm()
{
	 if(username.value == "")
	 {
		 $(".warning1").fadeIn("slow");
	  history.back();
	 
	  username.focus();
	  return false;
	 }
	 else
	 { $(".warning1").fadeOut(800);
		 return true;}
}
function CheckPsw()
{
	
		 if(input1.value!=input2.value)
		 { $(".warning2").fadeIn("slow");
	       history.back();
	    
	       input1.focus();
	       return false;
	 }
	 else
	 { $(".warning2").fadeOut(800);
		 return true;}
}
function test()
{
   var temp =email;
   //对电子邮件的验证
   var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
   if(!myreg.test(temp.value))
   {    $(".warning3").fadeIn("slow");
         history.back();
        myreg.focus();
        return false;
  }
   else {$(".warning3").fadeOut(800);
     return true;
   }
}


function all(thisform){
	with (thisform){
	if(CheckForm()==false)
		{ return false;}
	else{ return true;}
}
}