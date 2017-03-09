$(document).ready(function() {
  var userToSearch = $("input#userToSearch");

  var userSearchResult = $("#user-search-result");

  $(document).on("submit", "#user-search", searchResult);

  var userdata;



  function initializeRows(name) {

    userSearchResult.prepend("<li>"+name+"</li>");
  }



  function searchResult(event) {
    event.preventDefault();

    var user = userToSearch.val().trim()

    $.get("/admin/user/search/"+user, function() {
    	console.log("pinging the server")
    }).then(function(data){
      console.log("Todos", data);
      userdata = data;
      initializeRows(data.username);
    });
    userToSearch.val("");
  }
});