/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(document).ready(function() {
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#toptext").prepend(formattedRole);
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			$("#toptext").prepend(formattedName);
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedMobile);
			$("#topContacts").append(formattedEmail);
			$("#topContacts").append(formattedGithub);
			$("#topContacts").append(formattedTwitter);
			$("#topContacts").append(formattedLocation);
			var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(formattedBiopic);
			var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedWelcomemsg);
			
			$("#header").append(HTMLskillsStart);
			
			for (skill in bio.skills) {
				var s = bio.skills[skill];
				var formattedSkill = HTMLskills.replace("%data%",s).replace("skill##","skill"+skill);
				$("#skills").append(formattedSkill);
			}
			
			$("#footerContacts").append(formattedMobile);
			$("#footerContacts").append(formattedEmail);
			$("#footerContacts").append(formattedGithub);
			$("#footerContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedLocation);
		};
	
work.display = function() {
	
			for (job in work.jobs) {
				var j = work.jobs[job];
				var formattedWorkStart = HTMLworkStart.replace("work##","work"+job);
				var formattedEmployerLink = HTMLworkEmployer.replace("%data%",j.employer)+HTMLworkTitle.replace("%data%",j.title);
				var formattedDates = HTMLworkDates.replace("%data%",j.dates);
				var formattedLocation = HTMLworkLocation.replace("%data%",j.location);
				var formattedDescription = HTMLworkDescription.replace("%data%",j.description);
				var workElem = $(formattedWorkStart).appendTo("#workExperience");
				workElem.append(formattedEmployerLink);
				workElem.append(formattedDates);
				workElem.append(formattedLocation);
				workElem.append(formattedDescription);
				
			}
			
		
	
};

projects.display = function() {
	
			for (project in projects.projects) {
				var p = projects.projects[project];
				var formattedProjectStart = HTMLprojectStart.replace("project##","project"+project)
				var formattedTitle = HTMLprojectTitle.replace("%data%",p.title);
				var formattedDates = HTMLprojectDates.replace("%data%",p.dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%",p.description);
				var workElem = $(formattedProjectStart).appendTo("#projects");
				workElem.append(formattedTitle);
				workElem.append(formattedDates);
				workElem.append(formattedDescription);
				for (image in p.images) {
					var i = p.images[image];
					var formattedImage = HTMLprojectImage.replace("%data%",i);
					workElem.append(formattedImage);
				}
				
			}
			
		
	
};

education.display = function() {
	for (school in education.schools) {
				var s = education.schools[school];
				var formattedSchoolStart = HTMLschoolStart.replace("school##","school"+school);
				var formattedSchoolLink = HTMLschoolName.replace("%data%",s.name)+HTMLschoolDegree.replace("%data%",s.degree);
				var formattedDates = HTMLschoolDates.replace("%data%",s.dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%",s.location);
				
				var schoolElem = $(formattedSchoolStart).appendTo("#education");
				schoolElem.append(formattedSchoolLink);
				schoolElem.append(formattedDates);
				schoolElem.append(formattedLocation);
				for (major in s.majors) {
					var m = s.majors[major];
					var formattedMajor = HTMLschoolMajor.replace("%data%",m);
					schoolElem.append(formattedMajor);
				}
				
			}
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				var c = education.onlineCourses[course];
				var formattedSchoolStart = HTMLschoolStart.replace("school##","onlinecourse"+course);
				var formattedOnlineLink = HTMLonlineTitle.replace("%data%",c.title)+HTMLonlineSchool.replace("%data%",c.school);
				var formattedDates = HTMLonlineDates.replace("%data%",c.date);
				var formattedURL = HTMLonlineURL.replace("%data%",c.url);
				var schoolElem = $(formattedSchoolStart).appendTo("#education");
				schoolElem.append(formattedOnlineLink).append(formattedDates).append(formattedURL);				
			}
	
};

bio.display();
work.display();
projects.display();
education.display();

	
	// Notice how all of a sudden there's JavaScript inside this HTML
	// document? You can write JavaScript between <script> tags. At the end of your
	// JavaScript, don't forget the closing script tag with the slash (/).


	// Also, this is a JavaScript style comment. You can comment in JavaScript with:

	//   two slashes for all following characters on a single line, or

	/*
		an opening and closing set of slash asterisks for block comments.
	*/


	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('topContacts').style.display = 'none';
	}
	if(document.getElementsByTagName('h1').length === 0) {
		document.getElementById('header').style.display = 'none';
	}
	if(document.getElementsByClassName('work-entry').length === 0) {
		document.getElementById('workExperience').style.display = 'none';
	}
	if(document.getElementsByClassName('project-entry').length === 0) {
		document.getElementById('projects').style.display = 'none';
	}
	if(document.getElementsByClassName('education-entry').length === 0) {
		document.getElementById('education').style.display = 'none';
	}
	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('lets-connect').style.display = 'none';
	}
	/*if(document.getElementById('map') === null) {
		document.getElementById('map-div').style.display = 'none';
	}*/
	

$("#map-div").append(googleMap);

});
