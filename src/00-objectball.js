function gameObject(){
    let gameData ={
        home:{
            teamName: "Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{ 
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamsDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamsDunks: 7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamsDunks:15,
                },	
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamsDunks: 5,
                },	
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamsDunks: 1,
                },
            }
        },
        away:{    
            teamName:"Charlotte Hornets",
            colors:["Turqoise","Purple"],
            players:{
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamsDunks: 2,
                },	
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamsDunks: 10,
                },	
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamsDunks: 5,
                },	
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamsDunks: 0,
                },	
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamsDunks: 12,
                },
            }
        }
    }
    return gameData;
}

//console.log(gameObject());
function numPointsScored(playerName){       //Works!
    let game = gameObject();
    
    for (const key in game){                        //Iterates through the first layer of keys - we know they aren't player names
        //console.log(game[key])

        for(const newKey in game[key]){             //Iterates through the second layer of keys - we know they aren't player names
            //console.log(game[key][newKey])
            for(const newestKey in game[key][newKey]){
                if(newestKey === playerName){          //Iterates through the third layer of keys 
                    
                    return game[key][newKey][newestKey]["points"];
                }
            }
        }
    }
    console.log("Player not found!")
}

function shoeSize(playerName){      //Works!
    let game = gameObject();
    
    for (const key in game){                        //Iterates through the first layer of keys - we know they aren't player names
        //console.log(game[key])
        for(const newKey in game[key]){             //Iterates through the second layer of keys - we know they aren't player names
            //console.log(game[key][newKey])
            for(const newestKey in game[key][newKey]){
                if(newestKey === playerName){          //Iterates through the third layer of keys 
                    
                    return game[key][newKey][newestKey]["shoe"];
                }
            }
        }
    }
    console.log("Player not found!")
}

function teamColors(teamName){          //Finished!
    let game = gameObject();
    
   
    for (const key in game){        //Iterates through the object's home/away status
        
        //console.log(game[key])
        for (const newKey in game[key]){     //Iterates through the next layer to find team name
            if(game[key][newKey]===teamName){      //Check to see if the current key in the team name
                return game[key]["colors"];
            }
        }
    }
    return "Team isn't here!"
   
}

function teamNames(){           //Finished!
    let game = gameObject();
    const arrayOfNames = [];

    for(const key in game){         //Iterates through object to go through home/away 
        arrayOfNames.push(game[key]["teamName"])
        //console.log(arrayOfNames)
    }
    
    return arrayOfNames;
}

function playerNumbers(teamName){   //Work in progress
    let game = gameObject();
    const arrayOfNumbers = [];
    

    for(const key in game){
        
        for(const newKey in game[key]){
            
            if(game[key][newKey]===teamName){ //If the inputed name matched game[teamSide][teamName]
                
                for(const newestKey in game[key]["players"]){  //Recur through the game players 
                    
                    for(const deepestKey in game[key]["players"][newestKey]){
                        
                        if(deepestKey === "number"){
                            
                            arrayOfNumbers.push(game[key]["players"][newestKey][deepestKey])
                            
                        }
                    }
                
                }
            }
        }
    }
    
    return arrayOfNumbers;
}

function playerStats(playerName){   //Works!
    let game = gameObject()
    for(key in game){
        for(newKey in game[key]){
            for(newestKey in game[key][newKey]){
                if(newestKey === playerName){
                    //console.log(game[key][newKey][newestKey])
                    return game[key][newKey][newestKey];
                }
            }
        }
    }
}

function bigShoeRebounds(){     //Works
    let game = gameObject()
    let rebounds = 0;
    let currentShoeSize = 0;
    
    //console.log(rebounds)
    //console.log(currentShoeSize)

    for(key in game){
        
        for(newKey in game[key]){
            
            for(newestKey in game[key][newKey]){
                for(deepestKey in game[key][newKey][newestKey]){
                    //console.log(game[key][newKey][newestKey][deepestKey])
                    if(deepestKey === "shoe"){    //Not actual code, testing to see if iterations work
                        if(currentShoeSize < game[key][newKey][newestKey][deepestKey]){
                            currentShoeSize = game[key][newKey][newestKey][deepestKey]
                            rebounds = game[key][newKey][newestKey]["rebounds"]
                        }
                    }
                }
            }
        }
    }
    //console.log(rebounds)
    return rebounds
}