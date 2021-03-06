// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('news-details', function (page) {
	console.log('detail '+page.url);


$(document).ready(function(){

				var mid = page.query['id'];
				var ppage = page.query['page'];
				
				var previouspage = window.sessionStorage.getItem("page");
				var currentPage = page.url;
				window.sessionStorage.setItem("page",currentPage); 
				$('.top_small').append('<a href="'+ previouspage +'" class="back_small" data-transition="pop"></a>');
				
				
				if(mid){
					
					$.ajax({
					type: "GET",
					url: "http://moiyug.ru/mha_server/news.php?id="+ mid +"",
					jsonp: "callback",
					dataType: "html",
					crossDomain: true,
					beforeSend: function() { $( ".loading_spinner_all" ).show(); },
					success: function(data) {
						
					$( ".loading_spinner_all" ).hide();
				
					$('#js_alld').html(data);
																						
					},
					error: function(){
						$('#js_all').slideDown("slow").show(100).html('<div class="ce">Error: Connection problem...</div>').delay(10000).slideUp("slow").hide(100);
					}
					});
																				
				
				} else {
				
					if(ppage){
				
					$.ajax({
					type: "GET",
					url: "http://moiyug.ru/mha_server/news.php?page="+ ppage +"",
					jsonp: "callback",
					dataType: "html",
					crossDomain: true,
					beforeSend: function() { $( ".loading_spinner_all" ).show(); },
					success: function(data) {
						
					$( ".loading_spinner_all" ).hide();
				
					$('#js_alld').html(data);
																						
					},
					error: function(){
						$('#js_all').slideDown("slow").show(100).html('<div class="ce">Error: Connection problem...</div>').delay(10000).slideUp("slow").hide(100);
					}
					});
					
					} else {
					
					$.ajax({
					type: "GET",
					url: "http://moiyug.ru/mha_server/news.php",
					jsonp: "callback",
					dataType: "html",
					crossDomain: true,
					beforeSend: function() { $( ".loading_spinner_all" ).show(); },
					success: function(data) {
						
					$( ".loading_spinner_all" ).hide();
				
					$('#js_all').html(data);
																						
					},
					error: function(){
						$('#js_all').slideDown("slow").show(100).html('<div class="ce">Error: Connection problem...</div>').delay(10000).slideUp("slow").hide(100);
					}
					});
						
					}
						
				}
});



});

myApp.onPageInit('news', function (page) {

$(document).ready(function(){


					$.ajax({
					type: "GET",
					url: "http://moiyug.ru/mha_server/news.php",
					jsonp: "callback",
					dataType: "html",
					crossDomain: true,
					beforeSend: function() { $( ".loading_spinner_all" ).show(); },
					success: function(data) {
						
					$( ".loading_spinner_all" ).hide();
				
					$('#js_all').html(data);
																						
					},
					error: function(){
						$('#js_all').slideDown("slow").show(100).html('<div class="ce">Error: Connection problem...</div>').delay(10000).slideUp("slow").hide(100);
					}
					});
						
					
						
				
//onready_end


});


});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}