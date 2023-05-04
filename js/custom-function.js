/* ====================== Toggle Text ==================== */

const toggleText = document.querySelectorAll('.toggle-text');
toggleText.forEach(text => {
	text.addEventListener('mouseover', () => {
		text.classList.add('show-text');
	});
	
	text.addEventListener('mouseout', () => {
		text.classList.remove('show-text');
	});
})

/*
const toggleText = document.querySelectorAll('.toggle-text');
toggleText.forEach(text => {
	text.addEventListener('click', () => {
		text.classList.toggle('show-text');
	});
})
*/

/* ====================== Live Chat & Email-Form ==================== */

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = 'https://embed.tawk.to/6409da834247f20fefe4eb17/1gr37r4or';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1, s0);
})();

function showConfirmation() {
	var confirmation = confirm("Möchten Sie das Formular wirklich absenden?");
	return confirmation;
}

/* ====================== Prev & Next Page ==================== */

var currentPage = 1;	// Set initial Page
var totalPage = 2;		// Set total number of Pages

// Add click event listeners to Previous and Next Links
document.querySelector('previous').addEventListener('click', function(e) {
	e.preventDefault();
	if (currentPage > 1) {
		currentPage--;
		updatePagination();
	}
});

document.querySelector('next').addEventListener('click', function(e) {
	e.preventDefault();
	if (currentPage < totalPage) {
		currentPage++;
		updatePagination();
	}
});

function updatePagination() {
	var paginationLinks = document.querySelectorAll('.pagination li a');
	for (var i = 0; i < paginationLinks.length; i++) {
		paginationLinks[i].classList.remove('active');
		
		if (i == currentPage) {
			paginationLinks[i].classList.add('active');
		}
	}
}

/* ====================== Search Option ==================== */

function search() {
	var searchTerm = document.getElementById("search").value;
	var paragraphs = document.getElementsByTagName("p");

	for (var i = 0; i < paragraphs.length; i++) {
		var paragraph = paragraphs[i];
		var text = paragraph.innerText;
		var index = text.indexOf(searchTerm);
		if (index >= 0) {
			var highlightedText = text.substring(0, index) + "<span style='background-color: red'>" + text.substring(index, index + searchTerm.length) + "</span>" + text.substring(index + searchTerm.length);
			paragraph.innerHTML = highlightedText;
		}
	}
}

function handleKeyPress(e) {
	var key = e.keyCode || e.which;
	if (key == 13) {
		search();
	};
};

/* ====================== Funktionen, die mit jQuery arbeitet ==================== */

$(document).ready(function(){
	
	$(".fa-ellipsis-v").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});

function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"0",
			"transition":"0.5s"
		});
	});
}

/* ====================== Error Message ==================== */











/* ====================== Nicht mehr gebraucht, wäre aber eine Möglichkeit ==================== */
/*
const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

// Add EventListener for keyup event on search input
searchInput.addEventListener("keyup", (event) => {
	// Check if enter key was pressed
	if (event.keyCode === 13) {
		// Get the search term and convert to lowercase
		const searchTerm = event.target.value.toLowerCase();

		// Get all the elements on the page to search through
		const elements = document.querySelectorAll('body *');

		// Loop through each element and check if it contains the search term
		let matches = 0;
		elements.forEach((element) => {
			// Get the element's text content and convert to lowercase
			const text = element.textContent.toLowerCase();

			// If the element contains the search term, highlight it
			if (text.includes(searchTerm)) {
				element.getElementsByClassName.backgroundColor = '#fff99';
				matches++
			} else {
				element.getElementsByClassName.backgroundColor = '';
			}
		});

		// Update the results div with the number of matches
		resultsDiv.innerHTML = `<h4>${matches} Treffer für "${searchTerm}" gefunden.</h4>`;
	}
});
*/

/*
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)}; 
  formbutton("create", {
    action: "https://formspree.io/f/xleklekw",
    title: "Wie kann ich dir helfen?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "deine-email@domain.com"
      },
      {
        type: "textarea",
        label: "Nachricht:",
        name: "message",
        placeholder: "Was ist dein Anliegen?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "blue"
      },
      button: {
        backgroundColor: "green"
      }
    }
});
*/
