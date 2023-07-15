
  // Open modal dialog when "Hire Me" button is pressed
  document.querySelector('.actionbutton').addEventListener('click', function () {
    document.getElementById('staticBackdrop').style.display = 'block';
  });

  // Close modal dialog when form is submitted
  document.getElementById('email-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const companyName = document.getElementById('company-name').value;
    const email = document.getElementById('email').value;
    const emailSubject = document.getElementById('email-subject').value;
    const message = document.getElementById('message').value;

    // Send email using emailJS
    emailjs.send('service_v25n0ah', 'template_08jgemo', {
      name: name,
      designation: designation,
      companyName: companyName,
      email: email,
      emailSubject: emailSubject,
      message: message,
    }, 'joelsiroy')
      .then(function (response) {
        console.log('Email sent successfully!', response.status, response.text);
        // Close the modal dialog
        document.getElementById('staticBackdrop').style.display = 'none';
      })
      .catch(function (error) {
        console.error('Error sending email:', error);
      });
  });
