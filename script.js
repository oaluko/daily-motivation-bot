document.getElementById('inspireMe').addEventListener('click', function() {
    var quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = 'Fetching your daily motivation...';
  
    // Simulate an API call with a timeout
    setTimeout(function() {
      // This is where you would handle the actual API response
      // For now, we'll just simulate it with a placeholder text
      quoteDisplay.textContent = '“The best way to predict the future is to create it.” – Abraham Lincoln';
    }, 2000); // Simulate a 2 second delay for the API call
  });
  