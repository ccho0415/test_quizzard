$(document).ready(function() {
  // global vars 
  var userToSearch = $("input#userToSearch");

  var userSearchResult = $("#user-search-result");

  var categoryToSearch = $("input#categoryToSearch");

  var categorySearchResult = $("#category-search-result");

  var userToModify;

  var modifyUserArea = $("#modify-user-area");

  $(document).on("submit", "#user-search", userSearch);

  $(document).on("submit", "#category-search", categorySearch);

  


  $(document).on("click", "#modify-toggle", modifyToggle);


  var currentuser;
  var userdata;
  var categorydata;
  var moduserdata;


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
    userSearchResult.append("<a class ='btn btn-default' id ='modify-toggle'> Modify User </a>") ;      
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
      console.log("User data :", data);
      userdata = data;
// You can change this next line to take in more / less arguments
// ======================================================================================================
      userinitializeRows(data.username, data.email, data.isAdmin, data.id, data.img_url, data.dob, data.createdAt);
      // ====================================================================================================
// Do not change anything after this line
    });
    currentuser = userToSearch.val().trim();
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




function modifyToggle() {
  modifyUserArea.append("<form id ='#modify-user'>"+
    "<input type='text' name='modusername' placeholder='username' id ='userToModify'></input><br><br>"+
    "<input type='password' name='modpassword_hash' placeholder='password'></input><br><br>"+
    "<input type='checkbox' name='isAdmin' value='true' placeholder='admin'></input><br><br>"+
    "<input type='url' name='img_url' placeholder='img url'></input> <input id = 'modify-user-submit' type='submit'></input></form>");

var userToModify = $("input#userToModify");  
$(document).on("click", "#modify-user-submit", modifyUserSubmit)

function modifyUserSubmit(event){
    event.preventDefault();
    var moduser = userToModify.val().trim()
    console.log(moduser);

    $.ajax({
      url: "/admin/user/"+ moduser, 
      type: 'PUT',
      success: function(response) {
      console.log("pinging the server")
    }
  }).then(function(data){
      console.log("Updated user data :", data);
      moduserdata = data;
// You can change this next line to take in more / less arguments
// ======================================================================================================
      userinitializeRows(data.username, data.email, data.isAdmin, data.id, data.img_url, data.dob, data.createdAt);
      // ====================================================================================================
// Do not change anything after this line
    });
    userToModify.val("");
}
}



});