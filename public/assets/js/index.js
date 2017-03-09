$(document).ready(function() {
  // global vars 
  var userToSearch = $("input#userToSearch");

  var userSearchResult = $("#user-search-result");

  var categoryToSearch = $("input#categoryToSearch");

  var categorySearchResult = $("#category-search-result");

  $(document).on("submit", "#user-search", userSearch);

  $(document).on("submit", "#category-search", categorySearch);


  var userdata;


  // This is what changes the result that is displayed for the result
  // You can change this
  // ============================================================================
  function userinitializeRows(name, email, isAdmin, id, img, dob, created) {

    userSearchResult.append("<img src = '"+img+"' height = '200px' width ='auto'>");
    userSearchResult.append("<h3>"+name+"</h3>");
    userSearchResult.append("<li> Email : "+email+"</li>");
    userSearchResult.append("<li> Admin Status : "+isAdmin+"</li>");
    userSearchResult.append("<li> Unique User Id : "+id+"</li>");
    userSearchResult.append("<li> Date of Birth : "+dob+"</li>");
    userSearchResult.append("<li> Account Created : "+created+"</li>");
    userSearchResult.append("<a class ='btn btn-default' href ='/admin/user/modify/"+name+"'> Modify User </a>") ;      
  }
// ================================================================================

// This actually looks for the user
// Do not change this
  function userSearch(event) {
    event.preventDefault();

    var user = userToSearch.val().trim()

    $.get("/admin/user/search/"+user, function() {
    	console.log("pinging the server")
    }).then(function(data){
      console.log("Todos", data);
      userdata = data;
// You can change this next line to take in more / less arguments
// ======================================================================================================
      userinitializeRows(data.username, data.email, data.isAdmin, data.id, data.img_url, data.dob, data.createdAt);
      // ====================================================================================================
// Do not change anything after this line
    });
    userToSearch.val("");
  }


  // This is what changes the result that is displayed for the result
  // You can change this
  // ============================================================================
  function categoryinitializeRows(name, id, img, description, created) {

    categorySearchResult.append("<img src = '"+img+"' height = '200px' width ='auto'>");
    categorySearchResult.append("<h3>"+name+"</h3>");
    categorySearchResult.append("<li> Unique Category Id : "+id+"</li>");
    categorySearchResult.append("<li> Description : "+description+"</li>");
    categorySearchResult.append("<li> Account Created : "+created+"</li>");       
  }
// ================================================================================

// This actually looks for the category
// Do not change this
  function categorySearch(event) {
    event.preventDefault();

    var category = categoryToSearch.val().trim()

    $.get("/admin/category/search/"+category, function() {
      console.log("pinging the server")
    }).then(function(data){
      console.log("Category data : ", data);
      categorydata = data;
// You can change this next line to take in more / less arguments
// ======================================================================================================
      categoryinitializeRows(data.categoryname,data.id, data.img_url, data.description, data.createdAt);
      // ====================================================================================================
// Do not change anything after this line
    });
    categoryToSearch.val("");
  }



});