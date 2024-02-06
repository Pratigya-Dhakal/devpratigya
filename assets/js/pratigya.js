$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	}
    });
});

function downloadCv() {
    var fileName = 'PratigyaDhakalCV.pdf';
    var pdfPath = '/assets/imgs/' + fileName;

    var downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
