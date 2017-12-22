/**
 * Jorge L Lopez
 * December 15th, 2017
 * Site Data Object for the site builder.
 *
 */

let siteData = {
	"Title": "Internet Video Database", //used to change the site name
	"Owner" : "Walt Disney Studios", //used to change the ?
	"Header": [{
		"Logo": "logo.png", //Logo for the NavBar
		"NavBar": {
			"About": "http://thejorgelopez.com",
			"Portfolio": "http://thejorgelopez.com",
			"Blog": "http://thejorgelopez.com",
			"Resume": "http://thejorgelopez.com"
		},// NavBar Elements with URL
		"Header_Images": {
			"image00": "image01.png",
			"image01": "image02.png",
			"image02": "image03.png",
			"image03": "image04.png",
			"image04": "image05.png"
		}// Dummy NavBar Images
	}],//End Header Section Data
	"Main" : [{ //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds"
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
			{"Article3": ""}//Challenge: Check for null article content
		],
		"People": [
			{  //People data is a standard object with key : field pairs. Why would the above examples have [ ] around them? (part of the challenge)
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
	"Footer": {
		"socialMedia" : {
			"blog"     : "http://sithguidetogalaxy.com",
			"facebook" : "https://www.facebook.com/DePaulUniversity/",
			 "youtube"  : "https://www.youtube.com/user/BinauralBrainwave",
			 "instagram"  : "https://www.instagram.com/downtownevanston/",
			 "twitter"  : "https://twitter.com/repkellycassidy"
		}//End Social Media Links for navigation
	}//build the Footer Section Data
};//End Site Data Object

