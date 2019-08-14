
function outputname() {

var x,y,first;

x=document.getElementById("form1");
first=x.elements["first"].value;
last=x.elements["last"].value

document.write(last + "," + first);


}