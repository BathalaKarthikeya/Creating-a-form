class Form{
    constructor(){

    }
    display(){
      var title = createElement("h2");
      title.html("Multiplayer Car Racing Game");
      title.position(200,50);

      var input = createInput("name");
      var button = createButton("play");
      
      var greetings = createElement("h3");

      input.position(200,100);
      button.position(200,150);

      button.mousePressed(function(){
          input.hide();
          button.hide();

          var name = input.value();
          playerCount = playerCount+1;

          player.update(name);
          player.updateCount(playerCount);

          greetings.html("Welcome "+name);
          greetings.position(200,75);
      })
    }
}