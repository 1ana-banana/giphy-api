
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GiphyRandom, GiphySearch } from './giphy.js';

$(document).ready(function () {
  $('#gifRando').click(function () {
    let promise = GiphyRandom.getElements();
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.showRando').html(`<img src="${body.data.images.original.url}">`);
    }), function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    }
  });

  $('#gif').click(function () {
    const search = $('#search').val();
    let promise = GiphySearch.getElements(search);
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.showGiphy').html(`<img src="${body.data[0].images.original.url}">`);
    }), function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    }
  });
});