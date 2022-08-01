(function () {
	var agent = window.navigator.userAgent.toLowerCase();
	var isIE = agent.indexOf('msie') > -1 || agent.indexOf('trident') > -1;
	var warning = document.querySelector('#ie-warning');
	var root = document.querySelector('#root');

	if (isIE) {
		warning.style.display = '';
		warning.removeAttribute('aria-hidden');
		root.setAttribute('aria-hidden', true);
	}
})();
