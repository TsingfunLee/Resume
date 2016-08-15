document.getElementsByTagName('header')[0].onmouseenter=function(){
	document.getElementById('head-img').className='';
	document.getElementsByClassName('mask')[0].className='mask gradient';
}
document.getElementsByTagName('header')[0].onmouseleave=function(){
	document.getElementById('head-img').className='blur';
	document.getElementsByClassName('mask')[0].className='mask';
}
