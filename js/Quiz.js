class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    question.hide();
    background("yellow");
    Fill(0);
    textSize(30);
    text("Result of the Quize", 340, 50);
    text("....................................", 340, 65);
    contestant.getplayerInfo();
    if (allContestants !== undefined) {
      debugger;
      var display_Answers = 230;
      fill("blue")
      textSize(20);
      text("Note: contestant who answerd correct are higlighted in green color!", 130, 230);

      for(var plr in allContestants){
      debugger;
        var correctAns = "2";
        if (correctionAns === allcontestants[plr].answer)
          fill("green")
        else
          fill("red");

      display_Answer += 30;
      textSize(20);
      text(allcontestants[plr].name + ":" + allcontestants[plr].answer, 250, display_Answers)

    }
  }
  }
}
