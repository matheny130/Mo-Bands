$("#details").hide();

var config = {
  apiKey: "AIzaSyC22pg8At8rnWwjY-8HhGMlL8RSqtIO-lw",
  authDomain: "mo-bands-mo-problems.firebaseapp.com",
  databaseURL: "https://mo-bands-mo-problems.firebaseio.com",
  projectId: "mo-bands-mo-problems",
  storageBucket: "mo-bands-mo-problems.appspot.com",
  messagingSenderId: "172100309774"
};

firebase.initializeApp(config);

var bandData = firebase.database();

bandData.ref().orderByChild("timestamp").limitToLast(10).on("child_added", function (childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var bName = childSnapshot.val().name;
  var bNeed = childSnapshot.val().need;
  var bDate = childSnapshot.val().need_date;
  var bDes = childSnapshot.val().description;
  var bMedia = childSnapshot.val().media;
  var bLoc = childSnapshot.val().location;

  console.log(bName);
  console.log(bNeed);
  console.log(bDate);
  console.log(bDes);
  console.log(bMedia);
  console.log(bLoc);



  var tr = $("<tr>");
  var headingTD = $("<td>");
  headingTD.text(bName).attr("class", "heading").attr("data-bDes", bDes).attr("data-bName", bName).attr("data-bNeed", bNeed).attr("data-bDate", bDate).attr("data-bMedia", bMedia).attr("data-bLoc", bLoc);


  var needTD = $("<td>");
  needTD.text(bNeed);

  var dateTD = $("<td>");
  dateTD.text(bDate);

  var locationTD = $("<td>");
  locationTD.text(bLoc);

  tr.append(headingTD);
  tr.append(needTD);
  tr.append(dateTD);
  tr.append(locationTD);
  $("#posts-table").append(tr);
});

$("body").on("click", ".heading", function () {

  // Load the details for this ad
  $("#name-div").text($(this).attr("data-bName"));
  $("#need-div").text($(this).attr("data-bNeed"));
  $("#date-div").text($(this).attr("data-bDate"));
  $("#desc-div").text($(this).attr("data-bDes"));
  $("#loc-div").text($(this).attr("data-bLoc"));
  // Hide the main table
  $("#wrapper").hide();
  // Show the details page
  $("#details").show();
  displayVideo($(this).attr("data-bMedia"));
});


  // 2. This code loads the IFrame Player API code asynchronously.
  function displayVideo(videoId) {

    var player = new YT.Player('player', {
      height: '300',
      width: '300',
      videoId: videoId,
      playerVars: {

      },
      events: {
        'onReady': onPlayerReady,

      },
    });

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      player.setPlaybackRate(1);

    }
  };