export class Api {
  constructor(config) {
    this._url = config.url;
    this._token = config.token;
  }

  getCurrentWheather(cityName) {
    return fetch(`${this._url}q=${cityName}&units=metric&appid=${this._token}`, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const apiRequest = new Api({
  url: 'https://api.openweathermap.org/data/2.5/weather?',
  token: '9235e0678cc68e3c9d6076471cbba7f9'
})

export default apiRequest;