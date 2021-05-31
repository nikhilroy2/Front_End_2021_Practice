function start() {
    queryCRMData();
  }

  function queryCRMData() {
    var queryConfig = {
      object: "Account",
      fields: ["Name", "Phone", "sFax"],
      where: "",
      sort: [],
      limit: "10"
    };

    ds.queryRecord(queryConfig).then(
      function (resp) {
        console.log(resp);
        printToScreen(resp);
      }, function(err) {
        console.log(err);
      }
    );
  }

  function printToScreen(jsonObj) {
    var test = document.getElementById("test");
    test.innerHTML = JSON.stringify(jsonObj);
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    start();
  });
  function navigateToHomePage() {
    com.veeva.clm.gotoSlide("Home_Page","my_hidden_presentation");
    //Navigates to the presentation with a Presentation_Id_vod__c field of "my_hidden_presentation"
    //Then navigates to the slide within that presentation with the Media_File_Name_vod__c field of "home_page"
  }