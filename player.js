class Player{
      Constructor(){
          this.Index = null;
          this.distance = 0;
          this.name = null;
          this.scroce = 0;
          
      }
       
      getCout(count){

          database.ref('/')update ({
          playerCount: count

          });
      }
      
      update(){
          varplayerIndex ="player/player"+this.Index;
          database.ref (playerIndex).set({
          name:this.name
          distance:this.distance
          scorc:this.scorce
          
          });
      }

      staticgetCout(){
          var playerInfoRef = database.ref('players')
          playerInfoRef.on("value"(data)) =>{
          allplayers=data.val();

          }
      }

    }
