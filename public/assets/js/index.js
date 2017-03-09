$(document).ready(function() {
  // global vars 
  var userToSearch = $("input#userToSearch");

  var userSearchResult = $("#user-search-result");

  $(document).on("submit", "#user-search", searchResult);

  var userdata;


  // This is what changes the result that is displayed for the result
  // You can change this
  // ============================================================================
  function initializeRows(name, email, isAdmin, id, img, dob, created) {

    userSearchResult.append("<img src = '"+img+"' height = '200px' width ='auto'>");
    userSearchResult.append("<h3>"+name+"</h3>");
    userSearchResult.append("<li> Email : "+email+"</li>");
    userSearchResult.append("<li> Admin Status : "+isAdmin+"</li>");
    userSearchResult.append("<li> Unique User Id : "+id+"</li>");
    userSearchResult.append("<li> Date of Birth : "+dob+"</li>");
    userSearchResult.append("<li> Account Created : "+created+"</li>");       
  }
// ================================================================================

// This actually looks for the user
// Do not change this
  function searchResult(event) {
    event.preventDefault();

    var user = userToSearch.val().trim()

    $.get("/admin/user/search/"+user, function() {
    	console.log("pinging the server")
    }).then(function(data){
      console.log("Todos", data);
      userdata = data;
// You can change this next line to take in more / less arguments
// ======================================================================================================
      initializeRows(data.username, data.email, data.isAdmin, data.id, data.img_url, data.dob, data.createdAt);
      // ====================================================================================================
// Do not change anything after this line
    });
    userToSearch.val("");
  }
});