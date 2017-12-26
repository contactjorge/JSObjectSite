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
	return this.siteHeader.Owner;
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
	
	for (key in this.siteHeader) {
		if (this.siteHeader.hasOwnProperty(key)) {
				theNavi = this.siteHeader[key];
		}
	}
	return (theNavi);
	
}

function setSiteTitle(){
	return document.title = getSiteTitle();
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
}//end getFooter() navbar builder

function findAllArrays(theObject) {
	if (Array.isArray(theObject)) {
		console.log('Is Array: ' + theObject + '\n');
		for (let i = 0; i < theObject.length; i++)
		{
			console.log(theObject[i]);
		}
	} else {
		for (objKey in theObject) {
			if (theObject.hasOwnProperty(objKey)){
				console.log('Not Array: ' + objKey + ' ' + theObject[objKey]);
			}
		}
	}
}

function SiteBuilder(site) {
	this.site = site;
	siteHeader = getSiteHeader();
	siteTitle = getSiteTitle();
	siteMain = getSiteMain(site);
	siteFooter = getSiteFooter(site);
	siteOwner = getSiteOwner();
	siteNav = getSiteNav(siteHeader);
	
	setSiteTitle();
	setSiteOwner();
	setSiteNav();
	setSiteFooter();
	findAllArrays(siteHeader);
	findAllArrays(siteMain);
	findAllArrays(site);

	/*
	function MainSection (siteMain){
		this.siteMain = siteMain;
		
		
		
		let siteArticles = this.siteMain.Articles;
		let sitePeople = this.siteMain.People;

		siteArticles.map((siteArticles) => {
			return siteArticles.length;
		});

		sitePeople.map((sitePeople) => {
			return sitePeople.length;
		)};
		
		function getSiteSections(){}
		function getSitePeople(){}
	}
	*/
}