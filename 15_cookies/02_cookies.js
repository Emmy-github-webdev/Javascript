function cookiesWrite() {
  if(document.myForm.customer.value == ""){
    alert("Enter a value!");
    return;
  };

  cookievalue = escape(document.myForm.customer.value) + ";";
  document.cookie = "name=" + cookievalue;
  document.write("Setting cookies: " + "name=" + cookievalue);
};