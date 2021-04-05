// Year update
const date = document.getElementById("fullYear");
date.innerHTML = new Date().getFullYear();

// navbar toggle 
 $(".navbar-toggler").click(function(){
    $(".collapse").toggle();
  });
  
// form database
const firebaseConfig = {
    apiKey: "AIzaSyCsppX3Dn75DSdYjv7P7fOB4tGYlcTSFeY",
    authDomain: "myportfolio-a58d3.firebaseapp.com",
    databaseURL: "https://myportfolio-a58d3.firebaseio.com",
    projectId: "myportfolio-a58d3",
    storageBucket: "myportfolio-a58d3.appspot.com",
    messagingSenderId: "897436045269",
    appId: "1:897436045269:web:0fcb11a803afaeafe4b75c",
    measurementId: "G-B34LBEP4F9"
  };
	firebase.initializeApp(firebaseConfig);
	
messagesRef = firebase.database().ref('portfolioFormMessages');
	
	$('#contactForm').submit(function(e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#userName').val(),
        email: $('#userEmail').val(),
        message: $('#userMessage').val()
    });
    
    $('#messageSent').append("<p><h4>Your message has been sent!</h4>");
        
    $('#contactForm')[0].reset();

        setTimeout(function(){
             $('#messageSent').hide();  
        },3000); 
});




