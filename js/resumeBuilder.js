/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Nikhil Iyer");
 var bio={
 	"name": "Nikhil Iyer",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "9891231212",
 		"email": "iyernikhil95@gmail.com",
 		"github": "iyernikhil",
 		"twitter": "@iyernikhil95",
 		"location": "Mumbai"
 	},
 	"welcomeMessage": "Hello",
 	"bioPic": "images/resume.jpg",
 	"skills": ["Programming","Football","Theater"]
 };
 var work={
 	"jobs": [
 		{
 			"title": "Mass Email Markerting",
 			"employer":"PRAMA",
 			"dates":"May 2015 - August 2015",
 			"location":"Mumbai",
 			"description": "We developed a web application that facilitates personalized mass email marketing by using customer centric targeting marketing techniques"
 		},
 		{
 			"title": "Research",
 			"employer":"Royal Forwarders",
 			"dates":"August 2015",
 			"location":"Brazil",
 			"description": "We learned about how customs is involved in the process of import of export of goods from country to country"
 		}
 	]
 };

 var projects={
 	"projects":[
 		{
 			"title": "About Me",
 			"images":["images/pro0-600.jpg"],
 			"dates":"2015",
 			"description": "Done as a part of Project 0 of Front End Developer NanoDegree under Udacity"
 		},
 		{
 			"title": "Portfolio",
 			"images":["images/Portfolio.jpg"],
 			"dates":"2015",
 			"description": "Done as a part of Project 1 of Front End Developer NanoDegree under Udacity"
 		}
 	]
 };
 var education={
 	"schools":[
 		{
 			"name":"BITS",
 			"location":"Goa",
 			"degree":"BE",
 			"majors": ["EEE","PEP"],
 			"dates":"2013-today",
 			"url":"x"
 		},
 		{
 			"name":"Podar",
 			"location":"Mumbai",
 			"degree":"Undergraduate",
 			"majors": ["English","Science"],
 			"dates":"2011-2013",
 			"url":"x"
 		}
 	],
 	"onlineCourses":[
 		{
 			"title":"Javascript Syntax",
 			"school":"Udacity",
 			"dates":"2014",
 			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
 		}
 	]
 };


 work.displayWork=function(){
	 	for(job in work.jobs)
	 {
	 	$("#workExperience").append(HTMLworkStart);
	 	var formatEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	 	var formatTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	 	var formatDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	 	var formatLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	 	var formatDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	 	var emptit=formatEmployer+formatTitle;
	 	$(".work-entry:last").append(emptit);
	 	$(".work-entry:last").append(formatDate);
	 	$(".work-entry:last").append(formatLocation);
		$(".work-entry:last").append(formatDescription);
	 }
 }
 work.displayWork();

 $(document).click(function(loc) {
  var x= loc.pageX;
  var y= loc.pageY;
  logClicks(x,y);
});

 /*$("#main").append(internationalizeButton);

 function inName(oldName){
 	var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
 }*/

 projects.display=function(){
 	for(var pro in projects.projects){
 		$("#projects").append(HTMLprojectStart);
 		var formatTitle=HTMLprojectTitle.replace("%data%",projects.projects[pro].title);
 		$(".project-entry:last").append(formatTitle);
 		var formatDate=HTMLprojectDates.replace("%data%",projects.projects[pro].dates);
 		$(".project-entry:last").append(formatDate);
 		var formatDescription=HTMLprojectDescription.replace("%data%",projects.projects[pro].description);
 		$(".project-entry:last").append(formatDescription);
 		if(projects.projects[pro].images.length>0)
 		{
 			for(image in projects.projects[pro].images){
 				var formatImage=HTMLprojectImage.replace("%data%",projects.projects[pro].images[image]);
 				$(".project-entry:last").append(formatImage);
 			}

 		}

 	}
}
 projects.display();

 $("#mapDiv").append(googleMap);


 bio.display=function(){
 	var formatRole=HTMLheaderRole.replace("%data%",bio.role);
 	$("#header").prepend(formatRole);
 	var formatName=HTMLheaderName.replace("%data%",bio.name);
 	$("#header").prepend(formatName);
 	var formatcontactGeneric=HTMLcontactGeneric.replace("%contact%",bio.contacts);
 	//$("#header").append(formatcontactGeneric);
 	var formatMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
 	$("#topContacts").append(formatMobile);
 	$("#footerContacts").append(formatMobile);
 	var formatemail=HTMLemail.replace("%data%",bio.contacts.email);
 	$("#topContacts").append(formatemail);
 	$("#footerContacts").append(formatemail);
 	var formatgithub=HTMLgithub.replace("%data%",bio.contacts.github);
 	$("#topContacts").append(formatgithub);
 	$("#footerContacts").append(formatgithub);
 	var formattwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
 	$("#topContacts").append(formattwitter);
 	$("#footerContacts").append(formattwitter);
 	var formatheadlocation=HTMLlocation.replace("%data%",bio.contacts.location);
 	$("#topContacts").append(formatheadlocation);
 	$("#footerContacts").append(formatheadlocation);
 	var formatimg=HTMLbioPic.replace("%data%",bio.bioPic);
 	$("#header").append(formatimg);
 	var formatwel=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 	$("#header").append(formatwel);
 	if(bio.skills.length>0)
	 {
	 	$("#header").append(HTMLskillsStart);
	 	var skills;
	 	skills=HTMLskills.replace("%data%",bio.skills[0]);
	 	$("#header").append(skills);
	 	skills=HTMLskills.replace("%data%",bio.skills[1]);
	 	$("#header").append(skills);
	 	skills=HTMLskills.replace("%data%",bio.skills[2]);
	 	$("#header").append(skills);
	 }
 }
  bio.display();



  education.display=function(){
 	for(school in education.schools){
 		$("#education").append(HTMLschoolStart);
 		var formatName=HTMLschoolName.replace("%data%",education.schools[school].name);
 		//$(".education-entry:last").append(formatName);
 		var formatDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
 		var namedeg= formatName+formatDegree;
 		$(".education-entry:last").append(namedeg);
 		var formatdates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
 		$(".education-entry:last").append(formatdates);
 		var formatlocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
 		$(".education-entry:last").append(formatlocation);
 		var formatMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
 		$(".education-entry:last").append(formatMajor);
 	}
 	$(".education-entry:last").append(HTMLonlineClasses);
 	for(course in education.onlineCourses){
 		var formatTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
 		//$(".education-entry:last").append(formatTitle);
 		var formatSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
 		var titschool=formatTitle+formatSchool;
 		$(".education-entry:last").append(titschool);
 		var formatdates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
 		$(".education-entry:last").append(formatdates);
 		var formaturl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
 		$(".education-entry:last").append(formaturl);
 	}

 }
 education.display();



