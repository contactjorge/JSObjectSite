let siteData = {
	"Site" : "Internet Video Database", //used to change the site name
	"Owner" : "Walt Disney Studios", //used to change the ?
	"navLinks" : [
		{ "About" : "http://thejorgelopez.com"},
		{ "Portfolio" : "http://thejorgelopez.com"},
		{ "Blog" : "http://thejorgelopez.com"},
		{ "Resume" : "http://thejorgelopez.com"},
	],
	"Main" : [{ //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds"
		"Sections": [
			{"Section0": ""},
			{"Section1": ""},
			{"Section2": ""},
			{"Section3": ""},
			{"Section4": ""},
			{"Section5": ""}
		],
		"Articles": [ //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds"
			{"Article0": ""},
			{"Article1": ""},
			{"Article2": ""},
			{"Article3": ""}
		],
		"People": {  //People data is a standard object with key : field pairs. Why would the above examples have [ ] around them? (part of the challenge)
				"fName": "Jorge",
				"lName": "Lopez",
				"Movies": [
					{
						"Yitle": "Star Wars",
						"Year": "1977"
					},
					{
						"Title": "Wizard of Oz",
						"Year": "1939"
					},
					{
						"Title": "BeetleJuice",
						"Year": "1988"
					},
					{
						"Title": "E.T.",
						"Year": "1982"
					}
				]},
				"fName": "John",
				"lName": "Smith",
				"Movies": [
					{
						"Title": "It's a Wonderful Life",
						"Year": "1946"
					},
					{
						"Title": "Justice League",
						"Year": "2017"
					},
					{
						"Title": "Muppets Take Manhattan",
						"Year": "1984"
					},
					{
						"Title": "Grease",
						"Year": "1978"
					}
				]},
			{
				"fName": "Sarah-Jane",
				"lName": "Smith",
				"Movies": [
					{
						"Title": "Batman",
						"Year": "1980"
					},
					{
						"Title": "Star Wars: Force Awakens",
						"Year": "2015"
					},
					{
						"Title": "Star Trek",
						"Year": "1979"
					},
					{
						"Title": "Gone With the Wind",
						"Year": "1939"
					}
				]}],
	"Footer" : { //build the footer social media nav element with links
		"socialMedia" : {
			"blog"     : "http://sithguidetogalaxy.com",
			"facebook" : "https://www.facebook.com/DePaulUniversity/",
			 "youtube"  : "https://www.youtube.com/user/BinauralBrainwave",
			 "instagram"  : "https://www.instagram.com/downtownevanston/",
			 "twitter"  : "https://twitter.com/repkellycassidy"
		}
	}
};//End Site Data Object

function getSiteData() {

}//end getSiteData Data and site builder

function getNavi() {
	let updateNavBar = document.getElementById('top-navi');
	let linkSite = '';
	for (let i = 0; i <= siteData.navLinks.length; i++){
		for (key in siteData.navLinks[i]){
			if (siteData.navLinks[i].hasOwnProperty(key)){
				linkSite += '<a id="nav_link' + i + '" href="' + siteData.navLinks[i][key] + '" class="navi_links">' + key + '</a>' +'\n';
			}
		}
	}
	return updateNavBar.innerHTML = linkSite;
}//end getNavi() navbar builder

function getSections() {

}//end getSections Data and section builder


function getArticles() {

}//end getArticles Data and article builder

function getPeopleCards() {

}//end getPeopleCards Data and People card builder

function getFooter() {
	let updateFooter = document.getElementById('bottom-navi'); //Get element ID that will hold the new nav elements
	let socialMediaLinks = ''; //empty string for link builder
		for (fKey in siteData.Footer.socialMedia) { //loop through the object socialMedia
			if (siteData.Footer.socialMedia.hasOwnProperty(fKey)){ //Check whether the object has specified property as own and not inherited
				socialMediaLinks += '<a id="footer-link-' + fKey + '" href="' + siteData.Footer.socialMedia[fKey] + '" class="footer-links">' + fKey + '</a>' +'\n';
			}//append the strings to a single output the <a> links
		}
	return updateFooter.innerHTML = socialMediaLinks;
}//end geFooteri() navbar builder



