/**
 * Jorge L Lopez
 * December 15th, 2017
 * Main functions called SiteBuilder, May become a class in future iterations
 *
 * This SiteBuilder exersize builds a site from a single local JavaScript Object
 * There are no frameworks or libraries used in this exercise. This is taking "it"
 * back to the basics with some addition of newer ECMAScript 2015, 2016 concepts.
 *
 * ECMAScript 2017 and 2018 won't be used in this exercise.
 */




function getSiteTitle(){
	siteTitle = this.siteData.Title;
	return siteTitle;
}

function setSiteTitle(siteTitle){
	document.title = getSiteTitle();
}


function getNavi() {
	let updateNavBar = document.getElementById('top-navi');
	let linkSite = '';
	//for (let a = 0; a <= siteData.Header[0].NavBar.length; a++){
	for (key in siteData.Header[0].NavBar) {
		if (siteData.Header[0].NavBar.hasOwnProperty(key)) {
			linkSite += '<a id="nav_link' + key + '" href="' + siteData.Header[0].NavBar[key] + '" class="navi_links">' + key + '</a>' + '\n';
		}
		//	}
	}
	return updateNavBar.innerHTML = linkSite;
}//end getNavi() navbar builder

function getFooter() {
	let updateFooter = document.getElementById('bottom-navi'); //Get element ID that will hold the new nav elements
	let socialMediaLinks = ''; //empty string for link builder
	for (fKey in siteData.Footer.socialMedia) { //loop through the object socialMedia
		if (siteData.Footer.socialMedia.hasOwnProperty(fKey)){ //Check whether the object has specified property as own and not inherited
			socialMediaLinks += '<a id="footer-link-' + fKey + '" href="' + siteData.Footer.socialMedia[fKey] + '" class="footer-links">' + fKey + '</a>' +'\n';
		}//append the strings to a single output the <a> links
	}
	return updateFooter.innerHTML = socialMediaLinks;
}//end getFooteri() navbar builder

function getSiteContent() {
	getNavi(); //returns the top navigation bar.
	//getMainContent(); //returns the top navigation bar.
	getFooter(); //returns the top navigation bar.
	/*
	let footerData = siteData.Footer;
	let headerData = siteData.Header;
	let mainData = siteData.Main;
	let sectionData = setSections(mainData);
	*/
}//end getSiteContent