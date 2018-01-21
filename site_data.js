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
 * (edited January 21, 2018)
 */
let siteData = {
	Site_Title: "JavaScript in a data driven world: Arrays, Objects, and JSON", //Method to change the site name
	Site_Images: {// Site Image properties for image elements.
		"image00": "image01.png",
		"image01": "image02.png",
		"image02": "image03.png",
		"image03": "image04.png",
		"image04": "image05.png"
	},//End Images Data
	Header_Semantic: { //Method for all header properties
		Owner : "TheJorgeLopez Learning", //Header property for the header title
		Logo: "logo.png", //Logo property for the Header or NavBar
		NavBar: { //NavBar property for the header.
			About : "http://thejorgelopez.com",
			Portfolio : "http://thejorgelopez.com",
			Blog : "http://thejorgelopez.com",
			Resume : "http://thejorgelopez.com"
		}
	},//End Header Section
	Main_Semantic : { //Main Section Semantic Data.
		Sections: {
			Section0: "JavaScript in a Data Driven World",
			Section1: "JavaScript Arrays",
			Section2: "JavaScript Objects",
			Section3: "JSON Objects",
			Section4: "JavaScript Arrays vs JavaScript Objects",
			Section5: "JavaScript Objects vs JSON Objects",
			Section6: "What to do when I encounter (Part 1)...",
			Section7: "What to do when I encounter (Part 2)...",
			Section8: "ECMAScript Objects (2015-Present)",
			Section9: ""
		},//Challenge: Check for null section content
		Articles: { //Notice this is an array with 1 item that has items in it. This is intentional to represent "dirty data feeds"
			Article0 : "Today we are going to look at Objects, JSON Objects, and Arrays in JavaScript. They may look familiar and for most intents and purposes they do the same job. Working with them is where it can be a bit tricky. In this data driven world of front end frameworks, understanding the nuances of these objects can mean the difference between staring at your screen and crying out, like Luke Skywalker did, 'No! it's not True. That's unpossible', or easily writing code that gets things done.",
			Article1 : "Javascript objects and arrays are useful but I have found them to be confusing when working with them. Add to this the confusion between a JavaScript Object and JSON and you have a recipe for \"Brain Craziness.\" Especially with arrays that look like objects. How does one sort through all of this confusion? This exercize is meant to look at that but first let's take a step back and just make this a simple object. Let's find out what exactly an object is and learn determine is there are differences between objects and arrays.",
			Article2 : "",
			Article3 : "Once we have determined the difference between an object and array, let's then determine the next step for working with them. What does we do when we encounter common array-like objects, regular (hash) maps, and how do we truly trap into the power that of this new data driven JavaScript world.",
			Article4 : "",
			Article5 : "",
			Article6 : "",
			Article7 : "\"Tódæg we ârunghûslgang ongietan to JavaScript þings. Tôhwon sy dôð forma capitula ac l¯ærednes. Man sy gewrit ætstandan gamolferhð englisc nymðe geþéodan.\"",
			Article8 : "",
			Article9 : ""//Challenge: Check for null article content
		},
		People: [
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
	},//End Main Section Data
	Footer_Semantic: {//Footer method for the header.
		Social_Media : {//Social Media property for the footer? Can you think of another use?
			blog : "http://sithguidetogalaxy.com",
			facebook : "https://www.facebook.com/DePaulUniversity/",
			youtube : "https://www.youtube.com/user/BinauralBrainwave",
			instagram : "https://www.instagram.com/downtownevanston/",
			twitter : "https://twitter.com/repkellycassidy"
		}//End Social Media Links for navigation
	}//build the Footer Section Data
};//End Site Data Object
