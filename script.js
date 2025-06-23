document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value.trim();

  if (city === "") {
    alert("Masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiKey = 'ed3dca0d2b87fd1c90fdd2f1717ecdc4'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Kota tidak ditemukan');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `Suhu: ${data.main.temp}°C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById('weather').classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
      document.getElementById('weather').classList.add('hidden');
    });
});
