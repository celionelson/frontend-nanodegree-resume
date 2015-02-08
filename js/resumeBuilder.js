var bio = {
	"name" : "Celio NELSON",
	"role" : "Administrator / Project Manager / Implementer",
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
var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkill4 = HTMLskills.replace("%data%", bio.skills[3]);
var formattedSkill5 = HTMLskills.replace("%data%", bio.skills[4]);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedLinkedin);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkill1);
$("#header").append(formattedSkill2);
$("#header").append(formattedSkill3);
$("#header").append(formattedSkill4);
$("#header").append(formattedSkill5);







