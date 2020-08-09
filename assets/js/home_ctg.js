
var ctg=document.getElementsByClassName('ctg-details');
for(var i=0;i<ctg.length; i++){

    var text = ctg[i].textContent.trim();
    
	if(text == "WORK"){

        ctg[i].classList.add("work");
    }
    else if(text == "SCHOOL"){
        ctg[i].classList.add("school");
    }
    else{
        ctg[i].classList.add("display-none");
  }
}


