// import swatches from '../../../hex-clothes/src/colors'
import swatches from './Colors'

const shirtGroup1= [
    "Sapphire Blue",
    "Red",
    "Orange",
    "Eggplant",
    "Gray",
    "Khaki",
    "Pink",
    "Light Blue",
    "Mint Green",
    "White"
]
const shirtGroup2= [
"Black",
"Gray",
"Navy Blue",
"Crimson",
"Brown",
"Yellow",
"Orange",
"Green",
"Cream",
"Khaki",
],
shirtGroup3= [
"Black",
"Light Yellow",
"Khaki",
"Coral Pink",
"Blush Pink",
"Peach",
"Light Sky Blue",
"Seafoam Green",
"Mint Green"
]


const ShirtColors = (color) => {
 

    const DarkSkin = {
     cocoaBean : "#4a221a",
     ironStone :"#75483b",
     leather : '#9d6e5b',
}
const BrownSkin ={
    pentitOrchid : "#d9a38e",
    fair :"#f3c6a5",
    olive : "#edb98a" 
}
    const FairSkin ={
        mandysPink : "#f3cfba",  
        veryFair : "#f8ebdb"     
    }

// COCOA BEAN #4a221a   from GRoup 1
// IRON STONE #75483b     from g1
// leather #9d6e5b              from g1
// petit orchid #d9a38e       from g2
// Mandys pink 	#f3cfba    from g3

// Very fair #f8ebdb g3
// fair #f3c6a5     g2
// olive #edb98a g2
    if(color ==DarkSkin.cocoaBean 
        || color==DarkSkin.ironStone || color == DarkSkin.leather){
    console.log('in Dark')
            console.log(shirtGroup1)
            return ( 
        shirtGroup1
        // swatches.shirtColors.colors1

     );
    }
    // if(color == BrownSkin.fair || color == BrownSkin.olive || color == BrownSkin.pentitOrchid)
    //         return (swatches.shirtColors.colors2)
    if(Object.values(BrownSkin).indexOf(color)>-1)
    {
console.log('in brown skin')
// console.log(...Object.values(BrownSkin))
        return (
            shirtGroup2
            // swatches.shirtColors.colors2
            )
// console.log(swatches.shirtColors.colors2)
    }
    if(color == FairSkin.mandysPink || color == FairSkin.veryFair)
    {console.log(shirtGroup3)    
    console.log('in fair')
            
    return (
                shirtGroup3
                // swatches.shirtColors.colors3
                )
    }
}
 
export default ShirtColors;