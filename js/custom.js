$((function() {
    var header = $(".navbar");
    $(window).scroll((function() {
        var scroll;
        $(window).scrollTop() >= 50 ? header.addClass("scrolled") : header.removeClass("scrolled")
    }))
}))

$(document).ready(function () {
    (function ($) {
        "use strict"; // Start of use strict
    
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location
                .hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 56)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
    
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 100
        });
    
    })(jQuery); // End of use strict
});

$(window).on('load', function() {
    $('#onload-form').modal('show');
});
$(document).ready(function () {
    $('.owl-one').owlCarousel({
        stagePadding: 200,
        loop: false,
        autoplay: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            600: {
                items: 1,
                stagePadding: 0
            },
            1000: {
                items: 1,
                stagePadding: 0
            },
            1200: {
                items: 1,
                stagePadding: 200,
                margin: 10
            },
            1400: {
                items: 1,
                stagePadding: 300
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
                stagePadding: 400
            }
        }
    });


    $('.owl-two').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 2,
                margin: 20,
            },

            1440: {
                items: 3,
                margin: 40,

            }
        }
    });
    $('.owl-three').owlCarousel({
             loop: true,
        nav: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items:1
            },

            1440: {
                items: 1

            }
        }
    });

});


$("#sbmtFormBtn").click(function (e) {
  e.preventDefault();
  let name = $("#nameInp").val();
   let mobile = $("#mobileInp").val();
//   let country = $("#countryInp").val();
  let email = $("#emailInp").val();
  let check = $("#checkInp").val();

  if (!name || !mobile || !email || !check) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Fill all the fields!",
    });
    return;
  }


  $("#sbmtFormBtn").text("Submitting ...");

  let htmlContact = `<div> <p> Form Response From House of Realty </p>
   <p> <b>Name :</b>${name}</p>
   <p> <b>Mobile :</b> ${mobile}</p> 

   <p> <b>Email :</b> ${email}</p>
   <p> <b>Checkbox :</b> ${check}</p></div>`; 

  let subject = "New Form Submitted on House of Realty";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eemgroup1@gmail.com",
    Password: "B81FF5CFF4E41D5734E3502EE8C6C0077958",
    To: ["ankitatri112@gmail.com"],
    From: "eemgroup1@gmail.com",
    Subject: subject,
    Body: htmlContact,
  }).then(() => {
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Thank You for Contacting Us",
      showConfirmButton: false,
      timer: 1500,
    });

    $("#nameInp").val("");
    $("#mobileInp").val("");
    //  $("#countryInp").val("");
     $("#emailInp").val("");
       $("#checkInp").val("");
    $("#sbmtFormBtn").text("Submitted");
  });
});

