class Game{
    constructor(){

    }
    getState(){
        var gamestateR = database.ref("gamestate");
        gamestateR.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref("/").update({
           gamestate:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form();
            form.display();
        }
    }
}