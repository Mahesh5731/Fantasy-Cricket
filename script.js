firebase.database().ref("liveMatch").on("value", function(snapshot) {
  const data = snapshot.val();
  document.getElementById("teamName").innerText = data.team;
  document.getElementById("score").innerText = data.score;
  document.getElementById("batsmenList").innerText = data.batsmen;
  document.getElementById("bowler").innerText = "Bowler: " + data.bowler;
});
