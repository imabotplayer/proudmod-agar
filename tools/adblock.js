let ads = [
	document.querySelector("#adsTop"),
	document.querySelector("#adsBottom"),
	document.querySelector("#adsLeft"),
	document.querySelector("#adsRight"),
	document.querySelector("#videoContainer")
];

for(let i = 0; i > ads.length; i++) {
	ads[i].innerHTML = null;
}
