// 85c09e920f341513ce86dfce8110190d

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

fetch('http://api.openweathermap.org/geo/1.0/direct?q=kiev&appid=85c09e920f341513ce86dfce8110190d')
.then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
      console.log(data);
  })
  .catch(error => {
    // Error handling
  });