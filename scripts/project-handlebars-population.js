$(function(){
	var context = {
		projects: [
			{ name: 'Ball State Map App', description: 'A multi-platform mobile app to help visitors to Ball State University find any place on campus, track the campus buses, and look up information about any department on campus.', imageUrl: 'internal_site_images/bsu_map_app.png', projectUrl: 'https://play.google.com/store/apps/details?id=edu.bsu.campusmap&hl=en' },
			{ name: 'Ball State Chirper (Android)', description: 'A simple app where the user shakes or taps their phone to make a loud chirping noise to root for the BSU Cardinals.', imageUrl: 'internal_site_images/bsu_chirper_app.png', projectUrl: 'https://play.google.com/store/apps/details?id=edu.bsu.ballstatechirper&hl=en'},
			{ name: 'BSU Rec App', description: 'Displays live feed of how full individual rooms are in the campus Recreation and Wellness Center. Includes a beautiful and functional backend website for employees and managers to input and manage data for the mobile app.', imageUrl: 'internal_site_images/bsu_rec_app.png', projectUrl: 'https://play.google.com/store/apps/details?id=air.edu.bsu.rec&hl=en' },
			{ name: 'Indiana State Parks Tour', description: 'Utility/educational mobile app that presents historical information about the state parks of Indiana using geo- fencing to determine the user\'s location relative to the landmarks within.', imageUrl: 'internal_site_images/indiana_park_icon.png', projectUrl: 'https://play.google.com/store/apps/details?id=com.frogbabyapps.indianaparks&hl=en' }
		]
	};

	var projectsScript = $('#project-description-template').html();
	var projectsTemplate = Handlebars.compile(projectsScript);
	var compiledHtml = projectsTemplate(context);
	$('.projects-for').append(compiledHtml);
		
	var projectsSlideScript = $('#project-slider-template').html();	
	var projectsSlideTemplate = Handlebars.compile(projectsSlideScript);	
	var compiledSlideHtml = projectsSlideTemplate(context);
	$('.projects-slider').append(compiledSlideHtml);	
});
