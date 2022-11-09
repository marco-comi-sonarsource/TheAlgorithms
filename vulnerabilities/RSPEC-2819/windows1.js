window.onload = function(e){ 
  var iframe = document.getElementById("testiframe");
  iframe.contentWindow.postMessage("hello", "*"); // Noncompliant
  
  
  var iframe2 = document.getElementById("testsecureiframe");
  iframe2.contentWindow.postMessage("hello", "https://secure.example.com"); // Compliant
  
} 
