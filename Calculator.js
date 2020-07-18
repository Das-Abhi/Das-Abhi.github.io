function sqrt(){
    var x,y;
	x=Number(document.MyCal.input.value);
    if(!(x<0)){
    y=Math.sqrt(x);
    document.MyCal.input.value=y;
    }
    else
    swal("Imaginary", "There is no real root of a negative number.", "warning");
}

    function ln(){
    var x,y;
    x=Number(document.MyCal.input.value);
    if(!(x<0)){
    y=Math.log(x);
    document.MyCal.input.value=y;
    }
    else
    swal("Negative Number", "ln(x) is defined for x>0", "warning");
}

function exp(){
  var x,y;
    x=Number(document.MyCal.input.value);
    if(x){
    y=Math.exp(x);
    document.MyCal.input.value=y;
    }

}

function deleteChar(){
     var value = document.MyCal.input.value;
	 document.MyCal.input.value = value.substring(0, value.length - 1);
}
function equal(){
    var n=document.MyCal.input.value;
    if(n){
        document.MyCal.input.value = eval(document.MyCal.input.value);
    }
    else{
         swal({
  title: "input Error",
  text: "Please enter a value before evaluating.",
  icon: "error",
  button: "Got it bruv!"
});
    }
}

function bin(){
    var x,y;
    x=Number(document.MyCal.input.value);
    if(x){
    y=x.toString(2);
    document.MyCal.input.value=y;
    }
    
}
function square(){
    var p,q;
    p=Number(document.MyCal.input.value);
    if(p){
    q=Math.pow(p,2);
    document.MyCal.input.value=q;
    }
    
} 