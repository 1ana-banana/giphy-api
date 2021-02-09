import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('#gifRando').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?tag=&rating=r&lang=en&api_key=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      $('.showRando').html(`<img src="${response.data.images.original.url}">`);
    }
  });
  $('#gif').click(function() {
    const search = $('#search').val();
    $('#search').val("");

    let request2 = new XMLHttpRequest();
    const url2 = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=25&offset=0&rating=g&lang=en&api_key=${process.env.API_KEY}`;

    request2.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response2 = JSON.parse(this.responseText);
        getElements(response2);
      }
    };

    request2.open("GET", url2, true);
    request2.send();

    function getElements(response2) {
      $('.showGiphy').html(`<img src="${response2.data[0].images.original.url}">`);
    }
  });
});