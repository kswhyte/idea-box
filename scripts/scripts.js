var Idea = function(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
};

var ideas = [];

$('#save-button').on('click', function(event) {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  var formattedIdea = formatIdea(titleInput, bodyInput);
  createIdealist(titleInput, bodyInput);
  addIdeaToList(formattedIdea);
  $('#title-input').focus();
});

$('#body-input').keypress(function(event) {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  if (event.which == 13) {
    var formattedIdea = formatIdea(titleInput, bodyInput);
  }
});

function formatIdea(title, body) {
  return '<li><h3> class="idea-title"' + title + '</h3><button class="delete-idea">x</button><break><p class="body-input">' + body + '</p><break></li>';
}

function createIdealist(title, body) {
  ideas.push(new Idea(title, body));
  storeIdea();
}

function addIdeaToList(idea) {
  $('idea-list').prepend(idea);
}

function storeIdea() {
  localStorage.setItem('ideas', JSON.stringify(ideas));
}


//
// $('.linked-list').on('click', '.new-url-link', markAsRead);
//
// function addToLinkList(siteLink) {
//   $('.linked-list').append(siteLink);
//   clearFields();
//   countTotals();
// }
