window.addEventListener("message", function(event) {
    
  if (event.origin !== "http://example.org") // Compliant
    return;
      
  console.log(event.data)
}); 
