let form = document.querySelector("form");
let fields = form.querySelectorAll(".field");
let textarea = form.querySelector(".form-wrapper__input3");
let phonenumber = document.getElementById("phonenumber");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.querySelectorAll(".error").forEach(function (error) {
    error.parentElement.removeChild(error);
  });
  fields.forEach(function (field) {
    let error = field.parentElement.querySelector(".error");
    if (!field.value) {     
      error = document.createElement("div");
      if (field === textarea) {
        error.className = "textarea-error";
      } else {
        error.className = "error";
      }    
      error.innerHTML = "Cannot be blank";
      field.parentElement.insertBefore(error, field);
    } else if (field === phonenumber && !field.value.match(/[0-9]+/)) {
      error = document.createElement("div");
      error.className = "error";   
      error.innerHTML = "Must only digits";
      field.parentElement.insertBefore(error, field);
    } else if (field === firstname && !field.value.match(/[A-Za-z]+/)) {
      error = document.createElement("div");
      error.className = "error";      
      error.innerHTML = "Must be only latin letters";
      field.parentElement.insertBefore(error, field);
    } else if (field === lastname && !field.value.match(/[A-Za-z]+/)) {
      error = document.createElement("div");
      error.className = "error";     
      error.innerHTML = "Must be only latin letters";
      field.parentElement.insertBefore(error, field);
    } else if (field === email && !field.value.match(/[@]+/)) {
      error = document.createElement("div");
      error.className = "error";   
      error.innerHTML = "Invalid email format";
      field.parentElement.insertBefore(error, field);
    } else {
      if (error) {
        error.parentElement.removeChild(error);
      }
    }
  });

  let errors = form.querySelectorAll(".error");
  if (!errors.length) {
    form.submit();
  } 
});



let form_mob = document.querySelector("form.form_mob");
let fields_mob = form_mob.querySelectorAll(".field_mob");
let textarea_mob = form_mob.querySelector(".form-wrapper__input3_mob");
let phonenumber_mob = document.getElementById("phonenumber_mob");
let lastname_mob = document.getElementById("lastname_mob");
let firstname_mob = document.getElementById("firstname_mob");
let email_mob = document.getElementById("email_mob");

form_mob.addEventListener("submit", function (event) {
  event.preventDefault();
  form_mob.querySelectorAll(".error_mob").forEach(function (error_mob) {
    error_mob.parentElement.removeChild(error_mob);
  });
  fields_mob.forEach(function (field_mob) {
    let error_mob = field_mob.parentElement.querySelector(".error_mob");
    if (!field_mob.value) {    
      error_mob = document.createElement("div");
      if (field_mob === textarea_mob) {
        error_mob.className = "textarea-error_mob";
      } else {
        error_mob.className = "error_mob";
      }     
      error_mob.innerHTML = "Cannot be blank";
      field_mob.parentElement.insertBefore(error_mob, field_mob);
    } else if (field_mob === phonenumber_mob && !field_mob.value.match(/[0-9]+/)) {
      error_mob = document.createElement("div");
      error_mob.className = "error_mob";    
      error_mob.innerHTML = "Must be only digits";
      field_mob.parentElement.insertBefore(error_mob, field_mob);
    } else if (field_mob === firstname_mob && !field_mob.value.match(/[A-Za-z]+/)) {
      error_mob = document.createElement("div");
      error_mob.className = "error_mob";     
      error_mob.innerHTML = "Must be only latin letters";
      field_mob.parentElement.insertBefore(error_mob, field_mob);
    } else if (field_mob === lastname_mob && !field_mob.value.match(/[A-Za-z]+/)) {
      error_mob = document.createElement("div");
      error_mob.className = "error_mob";    
      error_mob.innerHTML = "Must be only latin letters";
      field_mob.parentElement.insertBefore(error_mob, field_mob);
    } else if (field_mob === email_mob && !field_mob.value.match(/[@]+/)) {
      error_mob = document.createElement("div");
      error_mob.className = "error_mob";    
      error_mob.innerHTML = "Invalid email format";
      field_mob.parentElement.insertBefore(error_mob, field_mob);
    } else {
      if (error_mob) {
        error_mob.parentElement.removeChild(error_mob);
      }
    }
  });

  let errors_mob = form_mob.querySelectorAll(".error_mob");
  if (!errors_mob.length) {
    form_mob.submit();
  } 
});




let form_pl = document.querySelector("form.form_pl");
let fields_pl = form_pl.querySelectorAll(".field_pl");
let textarea_pl = form_pl.querySelector(".form-wrapper__input3_pl");
let phonenumber_pl = document.getElementById("phonenumber_pl");
let lastname_pl = document.getElementById("lastname_pl");
let firstname_pl = document.getElementById("firstname_pl");
let email_pl = document.getElementById("email_pl");

form_pl.addEventListener("submit", function (event) {
  event.preventDefault();
  form_pl.querySelectorAll(".error_pl").forEach(function (error_pl) {
    error_pl.parentElement.removeChild(error_pl);
  });
  fields_pl.forEach(function (field_pl) {
    let error_pl = field_pl.parentElement.querySelector(".error_pl");
    if (!field_pl.value) {      
        error_pl = document.createElement("div");
      if (field_pl === textarea_pl) {
        error_pl.className = "textarea-error_pl";
      } else {
        error_pl.className = "error_pl";
      }     
      error_pl.innerHTML = "Cannot be blank";
      field_pl.parentElement.insertBefore(error_pl, field_pl);
    } else if (field_pl === phonenumber_pl && !field_pl.value.match(/[0-9]+/)) {
      error_pl = document.createElement("div");
      error_pl.className = "error_pl";    
      error_pl.innerHTML = "Must be only digits";
      field_pl.parentElement.insertBefore(error_pl, field_pl);
    } else if (field_pl === firstname_pl && !field_pl.value.match(/[A-Za-z]+/)) {
      error_pl = document.createElement("div");
      error_pl.className = "error_pl";     
      error_pl.innerHTML = "Must be only latin letters";
      field_pl.parentElement.insertBefore(error_pl, field_pl);
    } else if (field_pl === lastname_pl && !field_pl.value.match(/[A-Za-z]+/)) {
      error_pl = document.createElement("div");
      error_pl.className = "error_pl";    
      error_pl.innerHTML = "Must be only latin letters";
      field_pl.parentElement.insertBefore(error_pl, field_pl);
    } else if (field_pl === email_pl && !field_pl.value.match(/[@]+/)) {
      error_pl = document.createElement("div");
      error_pl.className = "error_pl";    
      error_pl.innerHTML = "Invalid email format";
      field_pl.parentElement.insertBefore(error_pl, field_pl);
    } else {
      if (error_pl) {
        error_pl.parentElement.removeChild(error_pl);
      }
    }
  });

  let errors_pl = form_pl.querySelectorAll(".error_pl");
  if (!errors_pl.length) {
    form_pl.submit();
  } 
});