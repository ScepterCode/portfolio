window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollToTopIcon").style.display = "block";
  } else {
    document.getElementById("scrollToTopIcon").style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});

const menubar1 = document.getElementById('menubar');
const menubar2 = document.getElementById('menubar2');

function synchCheckboxes() {
    if (this === menubar1) {
        menubar2.checked = this.checked;
    } else {
        menubar1.checked = this.checked;
    }
}
menubar1.addEventListener('change', synchCheckboxes);
menubar2.addEventListener('change', synchCheckboxes);


const anchorTags = document.querySelectorAll('a[href="#"]');
anchorTags.forEach(anchorTag => {
    anchorTag.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

document.getElementById('myForm').addEventListener('submit', sendEmail);
function sendEmail(e) {
    e.preventDefault(); // Uncomment this if you're using this function in a form submission context

    const nameInput = document.getElementById('name');
    const name = nameInput.value
    .split(' ') // Split the string into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' ');
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "keldan40k@gmail.com",
        Password: "E59B0231169F477C0576AF0D35830B0BA3F9",
        To: 'keldan40k@gmail.com',
        From: 'keldan40k@gmail.com',
        Subject: subject,
        Body: `Name: ${name} <br>Email: ${email} <br>Message: ${message}`
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully",
                    icon: "success"
                  });
        }
        else(
            Swal.fire({
                title: "Error",
                text: "An error occurred while sending the message, please use a valid email address",
                icon: "error"
            })
        )
    }
    )

    this.reset()
}
