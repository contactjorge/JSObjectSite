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
	//add a site title dynamically.
	this.siteTitle = siteTitle; //set this functions siteTitle variable to the constructor siteTitle
	document.title = this.siteTitle; //assign the object property "Title" to document.title
}

function getSiteOwner(owner){
	//create and place the site's owner as the title for the header semantic.
	var headerTitle = document.createElement("h1"); //create the h1 element in the header-semantic element
	var titleText = document.createTextNode(owner); //create the h1 text node in the h1 in the header-semantic element
	headerTitle.appendChild(titleText); //create an <h1> child element in <header> with owner text
	
	var	updateHeader = document.getElementById('header-semantic'); //seek, locate, and enumerate the header-semantic element.
	updateHeader.appendChild(headerTitle); //append the new <h1> child element to the header
	
	return updateHeader; //does this need to be returned?
}

function getSiteNav(topNav) {
	//create and place the top navigation bar.
	var updateNavBar = document.getElementById('top-navi'); //seek, locate, and enumerate the header-semantic element.
	var linkSite = '';
	
	//iterate and append elements to the tap-navi element in the body <header> semantic
	for (key in topNav) {
		if (topNav.hasOwnProperty(key)) {
			linkSite += '<a id="nav_link' + key + '" href="' + topNav[key] + '" class="navi_links">' + key + '</a>' + '\n';
		}
	}//iterate through the NavBar child object.
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
	//Stub for creating individual person card
}

/*
 * This is an Object for the "Main" section in SiteBuilder with properties of a HTML Semantic "main.
 * This object is meant to be dynamically generated and is an early attempt at creating a pseudo
 * child element for future exercises. This is created without using JavaScript
 * frameworks. After all of the HTML elements have been created, further challenges will be added.
 * Challenges will include porting this to a proper child class. Once a finalized parent class is created.
 */

function MainSection (siteSections, siteArticles, siteImages){
	this.siteSections = siteSections; //instantiate siteSections (Is this needed?)
	this.siteArticles = siteArticles; //instantiate siteArticles (Is this needed?)
	this.siteImages = siteImages; //instantiate siteImages (Is this needed?)
	
	function createSiteSections(){
		//Create empty sections
		var updateMain = document.getElementById('main-semantic');
		var mainSections = '';

		for (secKey in siteSections) {
			if (siteSections.hasOwnProperty(secKey)) {
				mainSections += '<section id="' + secKey + '" class="styled-sections" >' +
					'</section>\n';
			}
		}//Iterate through the siteSections
		
		return updateMain.innerHTML = mainSections; //is a return necessary?
	}
	
	function getSectionArticles(){}
	
	
	function fillSiteSections(section){
	//Fill Section with Section header (h2) Article, and Image)
		
		for (sKey in section) {
			if (section.hasOwnProperty(sKey)) {
				let sectionID = sKey;
				document.getElementById(sectionID).innerHTML = '<h2 id="section-title' + sKey + '">' + section[sKey] + '</h2>\n';
			}
		}//iterate through the sections and add inner HTML
	}

	createSiteSections(); //call the function to create the sections
	fillSiteSections(siteSections); //call the function to fill the sections
}

/*
 * This is an Object called SiteBuilder with properties of a web page.
 * This object is meant to be dynamically built and an exercise on creating a site using JavaScript without
 * frameworks. After all of the HTML elements have been created, further challenges will be added.
 * Challenges will include augmenting a Virtual DOM to change content dynamically.
 */
function SiteBuilder(site, siteTitle, siteImages, siteHeader, siteMain, siteFooter) { //constructors for the new object
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
	
}