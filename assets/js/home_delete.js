
var checkboxs=document.getElementsByClassName('checkbox');
for(let i=0; i<checkboxs.length;i++ ){    
    checkboxs[i].addEventListener('click',function(){
    var j=i;
    var date=document.getElementsByClassName('date-not-deleted')[j];
    var dateDeleted=document.getElementsByClassName('date-deleted')[j];
    var desc=document.getElementsByClassName('desc-not-deleted')[j];
    var descDeleted=document.getElementsByClassName('desc-deleted')[j];
    
    
    if(date.classList.contains('display-none')){
        date.classList.remove("display-none")
        dateDeleted.classList.add('display-none')
        desc.classList.remove("display-none")
        descDeleted.classList.add('display-none')
    }
    else{
        date.classList.add('display-none')
        dateDeleted.classList.remove("display-none")
        desc.classList.add('display-none')
        descDeleted.classList.remove("display-none")
    }
        
    })
}
