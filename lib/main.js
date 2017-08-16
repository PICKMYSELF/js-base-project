
var nintynineBeerSong=()=>{
    let song='';
    for(let i=99;i>=1;i++){
        if(i==2) {
            song+='2 bottles of beer on the wall, 2 bottles of beer.\n' +
                'Take one down and pass it around, 1 bottle of beer on the wall.\n';
            continue;
        }
        if(i==1){
            song +='1 bottle of beer on the wall, 1 bottle of beer.\n' +
                'Take one down and pass it around, no more bottles of beer on the wall.\n' +
                'No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.'
            continue;
        }
        song+=`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.`;
    }
    return song;
}


module.exports = nintynineBeerSong;
