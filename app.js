$(document).ready(function () {
  var friends = ["Zack", "Eli", "Will", "Eileen", "Mister Doctor"];
  var locationName = [
    "top of Vulcan",
    "outside of Marty's",
    "the Shampoo Aisle",
    "Master P's house",
    "Red Mountain Express",
    "Cookout Drive-thru",
    "Shelby County Fair",
    "middle of Kansas",
    "Woodfin's Tesla",
    "Guitar Center lessons room",
  ];
  var weapons = [
    "Inflatable screwdriver",
    "novelty hammerhead shark doll",
    "iron drumsticks",
    "14 bowling balls",
    "flamethrower Axe",
    "poisonous spork",
    "fake bug that explodes",
    "compact disc blade",
    "stingray bees",
    "literal lava cake",
    "cluster scissors",
    "hyperspeed wine cork",
    "million pound book",
    "lazer lime",
    "invisible quicksand",
    "supersonic hatchet",
    "David Carrigans Tesla",
    "Shipt card blade",
    "very normal gun",
    "spykids 2",
  ];

  for (var i = 1; i <= 100; i++) {
    var $h3 = $("<h3>Accusation " + i + "</h3>");
    $($h3).appendTo("main");
    $($h3).click(wildAlert(i));
  }

  function wildAlert(i) {
    var friend = friends[i % 5];
    var location = locationName[i % 10];
    var weapon = weapons[i % 20];
    function doubleTrouble() {
      alert(
        "Accusation " +
          i +
          ": I saw " +
          friend +
          " with the " +
          weapon +
          " in " +
          location +
          "!"
      );
    }
    return doubleTrouble;
  }
});
