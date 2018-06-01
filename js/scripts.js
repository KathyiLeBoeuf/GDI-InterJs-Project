// TODO
console.log("%cI made it almost on time!", style = "color: green; font-size: 2rem;");

//closure
//IFFE is a closure
(function () {
	var veryImportant = "this should only be accessible in my scripts.js file."
})();

(function (modal) {
	var modalLinks = document.getElementsByClassName('modal-link');
	for (let i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener('click', function (evt) {
			/* e or evt  is our event object, and we've prevented the default event behavior*/
			evt.preventDefault();

			// find data attribute value  data-modal = "modal-1"
			let modalId = this.getAttribute('data-modal');
			// find DOM element with same ID
			let modal = document.getElementById(modalId)
			// add the open class to that DOM element
			modal.classList.add('open');
		});
	}
	//find all close button elements
	let closeButtons = document.getElementsByClassName("modal-content__close");
	//attach event listener that removes open class from a open modal element
	for (let j = 0; j < closeButtons.length; j++) {
		closeButton.addEventListener("click", function () {
			let openModal = document.querySelector('open');
			openModal.classList.remove('open');
		});
	}
	// inside the closure
	//get individual input
	let webDevInput = document. getElementById('filter1');
	let project = document.getElementsByClassName('project');
	webDevInput.addEventListener('change', function() {
		console.log('changed!');
		for (let i = 0; i < projects.length; i++) {
			//does the project have a data-category === '1'

			let projectCategory = projects[i].getAttribute('data-category');
			console.log('data-category');
			if ('data-category' === '1'){
			projects[i].classList.add('active');
		} else {
			projects[i].classList.remove('active');
		}
	}})



})();


//find element attributes
// onclick event listener - then loop thru and find all elements with attribute selected on click
// for loop through elements
// find data-category="3" number
// class="project active" >

// add active to classList
// remove active from other list
/*
function filter() {
	let filters = document.getElementsByAttribute('data-category');

	for (let i = 0; i < data - category.length; i++) {

		document.getElementsByClassName('project-active');

		switch (data - category) {
			case 1:
				filters.classList.add('active');
				filters.classList.remove('active');
			case 2:
				filters.classList.add('active');
			case 3:
				filters.classList.add('active');
			default:
				filters.classList.add('active');
		}
	}
}
*/

