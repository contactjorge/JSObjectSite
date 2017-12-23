/**
 * Jorge L Lopez
 * December 21st, 2017
 * Main functions called SiteBuilder, May become a class in future iterations
 *
 * This SiteBuilder exersize builds a site from a single local JavaScript Object
 * There are no frameworks or libraries used in this exercise. This is taking "it"
 * back to the basics with some addition of newer ECMAScript 2015, 2016 concepts.
 *
 * If the data is truly an object then do I need getters and setters? Which ones are necessary
 * and which ones are not? Are the mutators methods already implied in the object itself?
 * (Edited December 23, 2017
 */

function getSiteOwner(){
	return this.site.Owner;
}

function getSiteTitle(){
	return this.site.Title;
}

function getSiteHeader() {
	return this.site.Header;
}

function getSiteMain() {
	return this.site.Main;
}

function getSiteFooter() {
	return this.site.Footer;
}

function getSiteNav() {
	theNavi = '';
	
	for (let a = 0; a < this.siteHeader.length; a++){
		for (key in this.siteHeader[a]) {
			if (this.siteHeader[a].hasOwnProperty(key)) {
				if (key === 'NavBar'){
					theNavi = this.siteHeader[a][key];
				}
			}
		}
	}
	return (theNavi);
	
}

function setSiteTitle(){
	document.title = getSiteTitle();
}

function setSiteOwner(){
	return document.getElementById('header-semantic').nextElementSibling.innerHTML = '<h1 id="site-owner">' + this.siteOwner + '</h1>';
}

function setSiteNav() {
	let updateNavBar = document.getElementById('top-navi');
	let linkSite = '';
	for (key in this.siteNav) {
		if (this.siteNav.hasOwnProperty(key)) {
			linkSite += '<a id="nav_link' + key + '" href="' + this.siteNav[key] + '" class="navi_links">' + key + '</a>' + '\n';
		}
	}
	return updateNavBar.innerHTML = linkSite;
}//end getNavi() navbar builder

function setSiteFooter() {
	let updateFooter = document.getElementById('bottom-navi'); //Get element ID that will hold the new nav elements
	let socialMediaLinks = ''; //empty string for link builder
	for (fKey in siteData.Footer.socialMedia) { //loop through the object socialMedia
		if (siteData.Footer.socialMedia.hasOwnProperty(fKey)){ //Check whether the object has specified property as own and not inherited
			socialMediaLinks += '<a id="footer-link-' + fKey + '" href="' + siteData.Footer.socialMedia[fKey] + '" class="footer-links">' + fKey + '</a>' +'\n';
		}//append the strings to a single output the <a> links
	}
	return updateFooter.innerHTML = socialMediaLinks;
}//end getFooteri() navbar builder


function siteBuilder(theSiteData) {
	//this.siteOwner = getSiteOwner();
	site = theSiteData;
	siteOwner = getSiteOwner();
	siteTitle = getSiteTitle();
	siteHeader = getSiteHeader();
	siteMain = getSiteMain(site);
	siteFooter = getSiteFooter(site);
	siteNav = getSiteNav(siteHeader);
	
	setSiteTitle();
	
	setSiteOwner();
	
	setSiteNav();
	
	setSiteFooter();
	
}