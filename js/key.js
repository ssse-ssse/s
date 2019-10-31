var returnapp=false;
document.addEventListener('plusready', function() {
	plus.key.addEventListener("backbutton", function() {
		if (player) {
			player.close();
			player = null;
		} else if (myApp.getCurrentView().activePage.name!='home') {
			mainView.router.back()
		} else if (!returnapp) {
			plus.nativeUI.toast("再按一次退出应用！");
			returnapp = true;
			setTimeout(function() {
				returnapp = false;
			}, 3000);
		} else if (returnapp) {
			plus.runtime.quit();
		}
	});
});


var searchMore=false;
function queryScrollByYinshi(){
	if(this.scrollTop+window.innerHeight>this.children[0].clientHeight-1000&&searchMore){
		searchMore=false;
		var lastCard=$(this).find('.card')[$(this).find('.card').length-1];
		var fun=window[$(lastCard).attr('u')];
		var href=$(lastCard).attr('h');
		var index=$(lastCard).attr('i');
		var next=$(lastCard).attr('n');
		var nextPage=$(lastCard).attr('np');
		fun(nextPage||href,index,next);
	}
}