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

function setSiteTitle(siteTitle){
	this.siteTitle = siteTitle;
	document.title = this.siteTitle;
}

function getSiteOwner(owner){
	var headerTitle = document.createElement("h1");
	var titleText = document.createTextNode(owner);
	headerTitle.appendChild(titleText);
	
	var	updateHeader = document.getElementById('header-semantic');
	updateHeader.appendChild(headerTitle);
	//	.innerHTML = '<h1 id="header-navi"> </h1>';
	//updateOwner.write('<h1 id="header-owner">' + owner +'</h1>');
	return updateHeader;
}

function getSiteNav(topNav) {
	var updateNavBar = document.getElementById('top-navi');
	var linkSite = '';
	for (key in topNav) {
		if (topNav.hasOwnProperty(key)) {
			linkSite += '<a id="nav_link' + key + '" href="' + topNav[key] + '" class="navi_links">' + key + '</a>' + '\n';
		}
	}
	return updateNavBar.innerHTML = linkSite;
}//end getNavi() navbar builder

function getSiteFooter(footers) {
	var updateFooter = document.getElementById('bottom-navi'); //Get element ID that will hold the new nav elements
	var socialMediaLinks = ''; //empty string for link builder
	for (fKey in footers.Social_Media) { //loop through the object socialMedia
		if (footers.Social_Media.hasOwnProperty(fKey)){ //Check whether the object has specified property as own and not inherited
			socialMediaLinks += '<a id="footer-link-' + fKey + '" href="' + footers.Social_Media[fKey] + '" class="footer-links">' + fKey + '</a>\n';
		}//append the strings to a single output the <a> links
	}
	return updateFooter.innerHTML = socialMediaLinks;
}//end getFooter() navbar builder


function getSitePeople(){

}

function MainSection (siteSections, siteArticles, siteImages){
	this.siteSections = siteSections;
	this.siteArticles = siteArticles;
	this.siteImages = siteImages;
	
	function getSiteSections(){
		
		var updateMain = document.getElementById('main-semantic');
		var mainSections = '';

		for (secKey in siteSections) {
			if (siteSections.hasOwnProperty(secKey)) {
				mainSections += '<section id="' + secKey + '" class="styled-sections" >' +
					'<h2>' + siteSections[secKey] + '</h2>\n' +
					'</section>\n';
			}
		}
		
		return updateMain.innerHTML = mainSections;
	}
	
	getSiteSections();
}


function SiteBuilder(site, siteTitle, siteImages, siteHeader, siteMain, siteFooter) {
	this.site = site;
	this.siteTitle = setSiteTitle(siteTitle);
	this.siteHeader = siteHeader;
	this.siteMain = siteMain;
	this.siteFooter = siteFooter;
	this.siteImages = siteImages;
	
	let siteOwner = this.siteHeader.Owner;
	let siteNav = this.siteHeader.NavBar;
	let siteSections = this.siteMain.Sections;
	let siteArticles = this.siteMain.Sections;
	//let sitePeople = siteMain.Sections;
	
	getSiteOwner(siteOwner);
	getSiteNav(siteNav);
	getSiteFooter(this.siteFooter);
	
	var mainSection = new MainSection(siteSections, siteArticles, this.siteImages);
	mainSection;
	//console.log('Is Array: ' + Array.isArray(siteMain));
	//findArray(siteHeader);
	//console.log('Is Array: ' + Array.isArray(siteMain));
	

	
}