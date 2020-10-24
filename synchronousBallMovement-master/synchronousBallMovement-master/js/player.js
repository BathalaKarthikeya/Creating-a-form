class Player{
    constructor(){

    }
    getCount(){
    var playerC = database.ref("playercount");
    playerC.on("value",function(data){
        playerCount = data.val();
    })
    }
    updateCount(count){
      database.ref("/").update({
          playerCount:count
      })
    }
    update(name){
      var playerindex = "player"+playerCount;
      database.ref(playerindex).set({
          name:name
      })
    }
}