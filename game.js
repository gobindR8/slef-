class Game{
constructor(){


}

getState(){
var ho=database.ref('gameState')
ho.on("value",(data)=>{
gameState=data.val()
})


}
updateState(state){
database.ref('/').set({
gameState:state
})


}

async start(){
if(gameState===0){
Player=new player()
var dataref= await database.ref('playerCount').once("value")
if(dataref.exists()){
playerCount=dataref.val()
Player.getCount()

}
form=new Form()
form.display()

}

}

play(){
form.hide()
    Player.getPlayerInfo()



}



}