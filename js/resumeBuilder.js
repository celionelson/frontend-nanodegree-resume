var bio = {
	"name" : "Celio Nelson",
	"role" : "Administrator / Project Manager / Learning Web Developer",
	"contact" : {
		"mobile" : "+336 4740 7660",
		"email" : "celio.nelson@icloud.com",
		"github" : "celionelson",
		"linkedin" : "<a href='https://www.linkedin.com/pub/celio-nelson/54/689/4b0/fr'>my profile</a>",
		"location" : "USA"},
	"bioPic" : "images/bioPic.png",
	"welcomeMsg" : "Welcome there !",
	"skills" : ["project management", "administration", "logistics", "buildings automation", "programming"]
 };

bio.display() = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contact.linkedin)
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#topContacts").prepend(formattedLocation);
	$("#topContacts").prepend(formattedLinkedin);
	$("#topContacts").prepend(formattedGithub);
	$("#topContacts").prepend(formattedEmail);
	$("#topContacts").prepend(formattedMobile);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkill);
		}
	};
};

bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "SFE",
			"title" : "Administrator / Logistician",
			"dates" : "Jul 2011 to Jun 2014",
			"location" : "Southern Laos",
			"description" : "Christian Swiss-French NGO working in Medical Cooperation and Rural Development in Laos.<br>Managed Administration, Finances, Human Resources and Logistics of a Community Agriculture Development Project employing 13 local staff.<br>Supported the project's field activities and Directed baseline and endline surveys in the poor villages.<br>More globally in the NGO, provided Administrative support to the Head Office, IT Support and Management. Implemented new management tools for expatriate staff administrative procedures.",
			"url" : ""
		},
		{
			"employer" : "ISS FM Services",
			"title" : "Key Account Manager / Team Leader",
			"dates" : "May 2010 to May 2011",
			"location" : "Geneva, Switzerland",
			"description" : "Managed multiple Facility Management Accounts, which entailed Holding Customer Relations, Leading a team of 5 Site Managers, Handling the Sub-Contractors, Implementing changes or new accounts.<br>Carried out successfully the implementation of new Facility Management Services Accounts for a leading bank and a private client's luxury property.",
			"url" : ""
		},
		{
			"employer" : "Cofely GDF-SUEZ",
			"title" : "Project Manager in Buildings Automation",
			"dates" : "Jan 2008 to Apr 2010",
			"location" : "Geneva, Switzerland",
			"description" : "Managed Building Automation projects in HVAC from the Conception of the electrical schemes and the automatons' programs to the software commissioning of facilities (ventilation, heating, air-conditioning).<br>Initiated and achieved conception of powerful tools that led to save substantial amounts of time in the company's work process for projects.",
			"url" : ""
		}
	]
};

work.display = function () {
		
	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[job].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedWorkEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

if(work.jobs.length > 0) {
	work.display();
};

var education = {
	"schools" : [
		{
			"name" : "University of Marne-la-Vallée",
			"location" : "East of Paris, France",
			"degree" : "BS",
			"major" : "Energy and Thermal Engineering",
			"dates" : "2005 - 2007",
			"url" : "http://www.u-pem.fr"
		},
		{
			"name" : "University of Paris-Est Créteil",
			"location" : "Paris, France",
			"degree" : "Studies",
			"major" : "Science of Matter",
			"dates" : "2004 - 2005",
			"url" : "http://www.u-pec.fr"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Database by Jenifer Widom",
			"school" : "Stanford University",
			"dates" : "2013",
			"url" : "https://class.stanford.edu/courses/Engineering/db/2014_1/about"
		},
		{
			"title" : "Introduction to Computer Programming Using Python by Eric Grimson (6.00.1x, Verified)",
			"school" : "edX, MIT University",
			"dates" : "2014",
			"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0#.VNeDEkLeuGQ"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud804"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Front-End Web Dev Nanodegree - P1 Mockup to Website",
			"dates" : "2015",
			"description" : "Provided with a design mockup as a PDF-file, I had to replicate that design in HTML and CSS. I developed a responsive website that displays images, descriptions and links.",
			"url" : "https://github.com/celionelson/frontend-nanodegree-p1.git",
			"img" : ""
		}
	]
};

projects.display = function () {

	for(project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		formattedProjectTitle = formattedProjectTitle.replace("#",projects.projects[project].url);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].img);
		$(".project-entry:last").append(formattedProjectImage);
	}
};

if(projects.projects.length > 0) {
	projects.display();
};

/*//Display mouse clicks position in console
$(document).click(function(loc) {
	var x = loc.pageX
	var y = loc.pageY

	logClicks(x,y);
});

//Display internationalize buttom
$("#main").append(internationalizeButton);

//Internationalize name
function inName(name) {
	
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
};

console.log(inName("sebastian thrun"));*/

$("#mapDiv").append(googleMap);
