
//Navbar functions 

const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');

		})
})

//Checkbox functions

// const allProjects = document.querySelectorAll('portfolio');

// const pythonProjects = document.querySelectorAll('#doommapper, #placeholder1');

// const javascriptProjects = document.querySelectorAll('#doommapper');

$('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab


// $(document).ready(function(){
//     $('#myList a:first-child').click(function(e){
//         e.preventDefault();
//         $(pythonProjects.tab('show'));
//     });
// });


// function pyFunction() {

// $(document).ready(function () {
//     $('#python').change(function () {
//         if (this.checked) 
//         //  ^
//            $(pythonProjects).fadeIn('slow');
          
//         else 
//             $(pythonProjects).fadeOut('slow');
            
//     });
// });

// }


// function jsFunction() {

// $(document).ready(function () {
//     $('#javascript').change(function () {
//         if (this.checked) 
//         //  ^
//     	   $(allProjects).fadeOut('slow');
//            $(javascriptProjects).fadeIn('slow');
          
//         else 
//             $(javascriptProjects).fadeOut('slow');
            
//     });
// });

// }