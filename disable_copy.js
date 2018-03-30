
function disableselect(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function (&quot;return false&quot;)
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}


