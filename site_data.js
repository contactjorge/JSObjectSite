/**
 * Jorge L Lopez
 * December 15th, 2017
 * Site Data Object for the site builder.
 *
 * Is this truly an object? Where do the methods begin
 * and which data points represent properties and constructors?
 * The goal of this learning example is to identify the questions and answers.
 *
 * This will be achieved through an analysis of the Object Oriented design features of JavaScript
 * such as object prototypes, classes, and inheritance.
 *
 * A goal for me personally is to explore the singleton deign pattern. Anyone care to explain it?
 * (edited December 23, 2017)
 */
var siteData = {
	"Title": "Internet Video Database", //Method to change the site name
	"Site_Images": {// Site Image properties for image elements.
		"image00": "image01.png",
		"image01": "image02.png",
		"image02": "image03.png",
		"image03": "image04.png",
		"image04": "image05.png"
	},//End Images Data
	"Header": { //Method for all header properties
		"Owner" : "Walt Disney Studios", //Header property for the header title
		"Logo": "logo.png", //Logo property for the Header or NavBar
		"NavBar": { //NavBar property for the header.
			"About": "http://thejorgelopez.com",
			"Portfolio": "http://thejorgelopez.com",
			"Blog": "http://thejorgelopez.com",
			"Resume": "http://thejorgelopez.com"
		}
	},//End Header Section
	"Main" : [{ //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds" or Object methods and properties.
		"Sections": [
			{"Section0": ""},
			{"Section1": ""},
			{"Section2": ""},
			{"Section3": ""},
			{"Section4": ""},
			{"Section5": ""}
		],//Challenge: Check for null section content
		"Articles": [ //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds"
			{"Article0": ""},
			{"Article1": ""},
			{"Article2": ""},
			{"Article3": ""},
			{"Article4": ""},
			{"Article5": ""},
			{"Article6": ""}//Challenge: Check for null article content
		],
		"People": [
			{  //People card Method. Has Object with key : field pairs. Why would this method have [] around them? (part of the challenge)
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
					}]
			},//End Person card 1. Challenge: Sort movies by year{
			{
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
				}]
			},//End Person card 2. Challenge: Sort movies by year
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
				}]
		},//End Person card 3. Challenge: Sort movies by year
			{
			"fName": "Neil DeGrasse",
			"lName": "Tyson",
			"Movies": [
				{
					"Title": "Batman vs Superman",
					"Year": "2015"
				},
				{
					"Title": "Contact",
					"Year": "1997"
				},
				{
					"Title": "Paper Moon",
					"Year": "1973"
				},
				{
					"Title": "Young Frankenstein",
					"Year": "1974"
				}]//End Person card 4. Challenge: Sort movies by year
			}]//End Person Content Challenge: Sort by Last Name
	}],//End Main Section Data
	"Footer": {//Footer method for the header.
		"socialMedia" : {//Social Media property for the footer? Can you think of another use?
			"blog"     : "http://sithguidetogalaxy.com",
			"facebook" : "https://www.facebook.com/DePaulUniversity/",
			 "youtube"  : "https://www.youtube.com/user/BinauralBrainwave",
			 "instagram"  : "https://www.instagram.com/downtownevanston/",
			 "twitter"  : "https://twitter.com/repkellycassidy"
		}//End Social Media Links for navigation
	}//build the Footer Section Data
};//End Site Data Object
