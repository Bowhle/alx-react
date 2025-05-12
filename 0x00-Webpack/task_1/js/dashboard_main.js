import $ from 'jquery';
import _ from 'lodash';

$(document).ready(() => {
  // Add elements to the body
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  const button = $('<button>Click here to get started</button>');
  $('body').append(button);
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - ALX</p>');

  let count = 0;
  const countElement = $('#count');

  function updateCounter() {
    count += 1;
    countElement.text(`${count} clicks on the button`);
  }

  // Use Lodash's debounce
  const debouncedUpdateCounter = _.debounce(updateCounter, 500); // Debounce for 500ms
  button.on('click', debouncedUpdateCounter);
});

