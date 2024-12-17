document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  document.getElementById('request-service').addEventListener('click', function() {
    console.log('Request Service button clicked');
    window.location.href = 'Contact.html';
  });

  document.getElementById('take-view').addEventListener('click', function() {
    console.log('Take A View button clicked');
    window.location.href = 'Facility.html';
  });
});