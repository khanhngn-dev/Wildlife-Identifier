function validate(event) {
  // Validate the entry of latitude (between -90 and 90) and longitude (between -180 and 180).
  // If either or both are invalid, stop the form from being submitted and add an alert next to the required field.
  // Else remove the alert and submit the form.
  const lat = document.querySelector('#latitude').value;
  const long = document.querySelector('#longitude').value;
  if (isNaN(lat) || lat > 90 || lat < -90) {
    document.querySelector('#latitude-lbl').querySelector('.required').innerHTML="* must be a valid Latitude (-90 to 90)";
    event.preventDefault();
  }
  else {
    document.querySelector('#latitude-lbl').querySelector('.required').innerHTML="*";
  }
  if (isNaN(long) || long > 180 || long < -180) {
    document.querySelector('#longitude-lbl').querySelector('.required').innerHTML="* must be a valid Longitude (-180 to 180)";
    event.preventDefault();
  }
  else {
    document.querySelector('#longitude-lbl').querySelector('.required').innerHTML="*";
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
