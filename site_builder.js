/**
 * <UNIMPLEMENTED Classes for review>
 * Jorge L Lopez
 * December 23rd, 2017
 * SiteBuilder and MainContent classes
 *
 * If the data is truly an object then do I need the classes, constructors, and methods?
 * Can the singleton deign pattern be applied and should it?
 * (edited December 23, 2017)
 */

class SiteBuilder {
	constructor (siteContent) {
		let _siteContent = siteContent;
	}
	
	getImages() {
	//Stub getter method
	
	}
	
	getOwner () {
	//Stub getter method
	
	}
	
	getTitle () {
	//Stub getter method
	
	}
	
	getHeader () {
	//Stub getter method
	
	}
	
	getMain () {
	//Stub getter method
	
	}
	
	getFooter() {
	//Stub getter method
	
	}
}

class MainContent extends SiteBuilder{
	constructor(siteImages, sitePeople) {
		super(siteHeader, siteMain, siteFooter);
		let _siteHeader = siteHeader;
		let _siteMain = siteMain;
		let _siteFooter = siteFooter;
		let _siteImages = siteImages;
		let _sitePeople = sitePeople;
	}
	
	getHeaderNavBar() {
	//Stub getter method
	
	}
	
	getMainArticles() {
	//Stub getter method
	
	}
	
	getMainSections() {
	//Stub getter method
	
	}
	
	getMainPeopleCards() {
	//Stub getter method


	}
	
	setHeaderNavBar() {
	//Stub setter method
	
	}
	
	setMainArticles() {
	//Stub setter method
	
	}
	
	setMainSections() {
	//Stub setter method
	
	}
	
	setMainPeopleCards() {
	//Stub setter method
	
	
	}
	
}

