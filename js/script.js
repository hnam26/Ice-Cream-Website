/* ==========================================================================
#SLIDE IMAGES BANNER
========================================================================== */


let current = 1, interval;

const changeSlides = () => {
    const slideList = $(".slide");
    const slides = Array.from(slideList);
    const buttonList = $(".button");
    const buttons = Array.from(buttonList);
    // console.log(current);
    if (current > slides.length) {
        current = 1;
    }
    
    slides.forEach(slide => {
        if (slide.classList[1].split("-")[1] * 1 === current) {
            $(slide).css({"visibility": "visible", "opacity" : "1"});
        } else {
            $(slide).css({"visibility": "hidden", "opacity" : "0"});
        }
    });
    
    buttons.forEach(button => {
        if (button.classList[1].split("-")[1] * 1 === current) {
            $(button).css({"background-color" : "#fff"});
        } else {
            $(button).css({"background-color" : "#dc9289"});
        }
    });
};

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(function () {
        current++;
        changeSlides();
    }, 5000);
}

/* ==========================================================================
#CHANGE PRODUCTS IMAGES
========================================================================== */


function changeProducts () {
    $(".button-1").css({"background-color" : "#fff"});
    $(".slide-1").css({"visibility": "visible", "opacity" : "1"});
    
    interval = setInterval(function () {
        current++;
        changeSlides();
    }, 5000);
    
    
    $(".button-1").click(function () {
        current = 1;
        resetInterval();
        changeSlides();
        $(".button-1").css({"background-color" : "#fff"});
    });
    
    $(".button-2").click(function () {
        current = 2;
        resetInterval();
        
        changeSlides();
        $(".button-2").css({"background-color" : "#fff"});
        
    });
    
    $(".button-3").click(function () {
        current = 3;
        resetInterval();
        changeSlides();
        $(".button-3").css({"background-color" : "#fff"});
    });
    
    $("#gelato").click(function () {
        $(".this").removeClass("this");
        $("#gelato").addClass("this");
        $("#product1").attr("src", "images/gelato1.jfif");
        $("#product2").attr("src", "images/gelato2.jfif");
        $("#product3").attr("src", "images/gelato3.jfif");
        $("#product4").attr("src", "images/gelato4.jfif");
    });
    
    $("#softServe").click(function () {
        $(".this").removeClass("this");
        $("#softServe").addClass("this");
        $("#product1").attr("src", "images/softServe1.jpg");
        $("#product2").attr("src", "images/softServe2.jpg");
        $("#product3").attr("src", "images/softServe4.jpg");
        $("#product4").attr("src", "images/softServe3.jpg");
    });
    
    $("#rolled").click(function () {
        $(".this").removeClass("this");
        $("#rolled").addClass("this");
        $("#product1").attr("src", "images/rolled1.jpg");
        $("#product2").attr("src", "images/rolled2.jpg");
        $("#product3").attr("src", "images/rolled3.jpg");
        $("#product4").attr("src", "images/rolled4.jpg");
    });
}

/* ==========================================================================
#Date Picker For register.html
========================================================================== */


(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

/* ==========================================================================
#Validation registration form
========================================================================== */


function validateReg() {
    // registration information validate
    var username = $("#regForm #username").val();
    var email = $("#regForm #email").val();
    var password = $("#regForm #pwd1").val();
    var retypePassword = $("#regForm #pwd2").val();
    var birth = $("#regForm #birth").val();
    var stores = $("#regForm #stores").val();
    
    // Error Message Of Each Field
    var usernameErrorMsg = $("#regForm #username + .errMsg");
    var emailErrorMsg = $("#regForm #email + .errMsg");
    var passwordErrorMsg = $("#regForm #pwd1 + .errMsg");
    var retypePasswordErrorMsg = $("#regForm #pwd2 + .errMsg");
    var birthErrorMsg = $("div.birth");
    var storesErrorMsg = $("div.stores");
    
    var result = true;
    
    // Check if the field is blank and/or does not meet all the requirements
    
    usernameErrorMsg.html("");
    if (username == "") {
        usernameErrorMsg.append("<p>Username must not be empty.</p>");
        result = false;
    }
    
    emailErrorMsg.html("");
    if (email === "") {
        emailErrorMsg.append("<p>Email must not be empty.</p>");
        result = false;
    } else {
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            emailErrorMsg.append("<p>Email address must be valid.</p>");
            result = false;
        }
    }
    
    passwordErrorMsg.html("");
    if (password === "") {
        passwordErrorMsg.append("<p>Password must not be empty.</p>");
        result = false;
    } else {
        passwordErrorMsg.html("<p>Contain:</p>");
        
        if (password.length < 9) {
            passwordErrorMsg.append("<p>At least 9 characters.</p>");
            result = false;
        }
        if (!password.match(/[a-z]/)) {
            passwordErrorMsg.append("<p>At least one lowercase character.</p>");
            result = false;
        }
        if (!password.match(/[A-Z]/)) {
            passwordErrorMsg.append("<p>At least one uppercase character.</p>");
            result = false;
        }
        if (!password.match(/[0-9]/)) {
            passwordErrorMsg.append("<p>At least one number.</p>");
            result = false;
        }
        if (!password.match(/[#?!@$%^&*-]/)) {
            passwordErrorMsg.append("<p>At least one of the following special characters: # ? ! @ $ % ^ & * - </p>");
            result = false;
        }
    }
    
    retypePasswordErrorMsg.html("");
    if (retypePassword === "") {
        retypePasswordErrorMsg.append("<p>Retype password must not be empty.</p>");
        result = false;
    } else {
        if (retypePassword != password) {
            retypePasswordErrorMsg.append("<p>Retype password must be the same as the password.</p>");
            result = false;
        }
    }
    
    [[birth, birthErrorMsg], [stores, storesErrorMsg]].forEach(([element, elementErrorMsg]) => {
        elementErrorMsg.html("");
        if (element === "") {
            elementErrorMsg.append("<p>Please fill out this field.</p>");
        }
    });
    
    return result;
};


/* ==========================================================================
#VALIDATE THE ORDER FORM
========================================================================== */


var maxlength = 0;

function validateOrd() {
    
    // Order Information Validate
    var deliveryMethod = $("#ordForm #deliveryMethod").val();
    var deliveryAdd = $("#ordForm #deliveryAdd").val();
    var postCode = $("#ordForm #postCode").val();
    var billingAdd = $("#ordForm #billingAdd").val();
    var num = $("#ordForm #num").val();
    var paymentOption = $("#ordForm #paymentOption").val();
    var creditCardOption = $("#ordForm #creditCardOption").val();
    var paymentOption = $("#ordForm #paymentOption").val();
    var creditCardNum = $("#ordForm #creditCardNum").val();
    var email = $("#ordForm #email").val();
    
    // Error Message Of Each Field
    
    var deliveryMethodErrorMsg = $("div.deliveryMethod");
    var deliveryAddErrorMsg = $("#ordForm #deliveryAdd + .errMsg");
    var postCodeErrorMsg = $("#ordForm #postCode + .errMsg");
    var billingAddErrorMsg = $("#ordForm #billingAdd + .errMsg");
    var numErrorMsg = $("#ordForm #num + .errMsg");
    var paymentOptionErrorMsg = $("div.paymentOption");
    var creditCardOptionErrorMsg = $("div.creditCardOption");
    var emailErrorMsg = $("#ordForm #email + .errMsg");
    
    var result = true;
    
    // Check if the field is blank and/or does not meet all the requirements
    
    postCodeErrorMsg.html(""); 
    var choice =  $('#deliveryMethod').val();
    if(choice == "Shipping") {
        if (postCode === "") {
            postCodeErrorMsg.append("<p>Post code must not be empty.</p>");
            result = false;
        } else if (!(postCode.length < 5 && postCode.match(/\d/))) {
            postCodeErrorMsg.html("<p>Contain:</p>");
            postCodeErrorMsg.append("<p>Only 4 digits</p>");
            result = false;
        };
        
        deliveryAddErrorMsg.html("");
        if (deliveryAdd === "") {
            deliveryAddErrorMsg.append("<p>Delivery Address must not be empty.</p>");
            result = false;
        };
    };
    
    var choicePayment =  $('#paymentOption').val();
    if(choicePayment == "Online") {
        if (creditCardOption === null) {
            creditCardOptionErrorMsg.append("<p>Please choose your type of cards.</p>");
            result = false;
        };
        
        
        $(".creditCardNum").html("");
        
        if (creditCardNum === "") {
            $("div.creditCardNum").append("<p>Please fill out this field.</p>");
            result = false;
        } else if (!(creditCardNum.length <= maxlength && creditCardNum.match(/^[0-9]*$/))) {
            $("div.creditCardNum").html("<p>Contain:</p>");
            $("div.creditCardNum").append(`<p>Only ${maxlength} digits</p>`);
            result = false;
        };
    };
    
    
    
    [[billingAdd, billingAddErrorMsg], [num, numErrorMsg], [email, emailErrorMsg]].forEach(([element, elementErrorMsg]) => {
        elementErrorMsg.html("");
        if (element === "") {
            elementErrorMsg.append("<p>Please fill out this field.</p>");
            result = false;
        }
    });
    
    [[paymentOption, paymentOptionErrorMsg], [creditCardOption, creditCardOptionErrorMsg], [deliveryMethod, deliveryMethodErrorMsg] ].forEach(([element, elementErrorMsg]) => {
        elementErrorMsg.html("");
        if (element === null) {
            elementErrorMsg.append("<p>Please choose one option from the list.</p>");
            result = false;
        }
    });
    return result;
};

function init () {
    var checkboxErrorMsg = $(".cbx");
    
    // Slide Banner
    changeProducts();
    
    // Display the content when choosing the right option
    $(".deliveryAddContainer").hide();
    $(".onlineContainer").hide();
    
    $('#deliveryMethod').change(function () {
        var choice =  $('#deliveryMethod').val();
        if(choice == "Shipping") {
            $(".deliveryAddContainer").slideDown(800);
        } else {
            $(".deliveryAddContainer").slideUp(800);
        }
    });
    
    $('#paymentOption').change(function () {
        var choicePayment =  $('#paymentOption').val();
        if(choicePayment == "Online") {
            $(".onlineContainer").slideDown(800);
        } else {
            $(".onlineContainer").slideUp(800);
        }
    });
    
    // Function of the "Same As Delivery Address" button for the billing address field
    $("#cbx").on("change", function () {
        if (this.checked) {
            checkboxErrorMsg.html("");
            
            if ($("#deliveryAdd").val() != "") {
                $("#billingAdd").val($("#deliveryAdd").val());
            } else {
                $(".cbx").html("<p>Please enter your delivery address first</p>")
            }
        }
    });
    
    // Change the maximum number of the credit card depend on the type of it
    $('#creditCardOption').change(function () {
        var choiceCreditCard =  $('#creditCardOption').val();
        
        if(choiceCreditCard == "Visa") {
            maxlength = 16;
        };
        if(choiceCreditCard == "Mastercard") {
            maxlength = 16;
        };
        if(choiceCreditCard == "American Express") {
            maxlength = 15;
        };
    });
    
    // Validate the information when submitted
    $("#regForm").submit(validateReg);
    $("#ordForm").submit(validateOrd);
    
    // Side nav for responsive
    $(".hamburger-menu").click(function () {
        $(".navigation").toggleClass("change");
    })};
    
    $(document).ready(init);
    