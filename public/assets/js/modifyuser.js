$(document).ready(function() {

  var userToModify =$("input#userToModify");
  $(document).on("submit", "#modify-user", modifyUser);

// This edits the user
// Do not change this
  function modifyUser(event) {
    event.preventDefault();
    console.log("bop")
    // var user = userToModify.val().trim()

    // $.put("/admin/user/modify/"+user, function() {
    //   console.log("pinging the server")
    // }).then(function(data){
    //   console.log(data);
    // });
  }

 });