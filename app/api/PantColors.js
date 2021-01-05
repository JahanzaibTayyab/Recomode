import ShirtColors from "./ShirtColors";

const pantsarray = [];

// const Combo1 ={

const shirts1 = [
    "navyBlue",
    "maroon",
    "red",
    "darkGreen",
    "black",
    "brown",
    "purple",
    "blue",
    "darkBlue",
]
const pants1 = [
    "khaki",
    "skin",
    "offWhite"]
// }
// const Combo2={
const shirts2 = [
    "maroon",
    "red",
    "darkGreen",
    "black",
    "brown",
    "purple",
    "blue",
    "teal",
    "cherry",
    "crimson"
]
const pants2 = [
    "black"
]
// }
// const Combo3 ={
const shirts3 = [
    "maroon",
    "red",
    "black",
    "grey",
    "white",
    "blue",
    "pink",
    "teal",
    "cherry",
    "crimson"
]
const pants3 = [
    "grey",
    "darkGrey"

]
// }
// const Combo4={
const shirts4 = [
    "black",
    "white",
    "darkBlue",
    "blue",
    "navyBlue",
    "cherry",
]
const pants4 = [
    //jeans all shades
    "blue",
    "glacierBlue",
    "tunaBlue",
]
// }
// const Combo5={
const shirts5 = [
    "white",
    "mustard",
    "peach",
    "grey",
    "royalBlue",
    "blue",
    "green"
]
const pants5 = [
    "navyBlue"
]
// }
// if(color==Combo1.shirts)
// if(Combo1.shirts.includes(color,0))
const PantColors = (color) => {
    console.log("before if")
    if (shirts1.includes(color, 0))
    // if(Object.values(shirts1).indexOf(color) >-1)
    {
        console.log(1)
        pantsarray.push(...pants1)
        // console.log(...Combo1.pants)

        // console.log("Combo1", ...Object.keys(Combo1.pants))

    }
    if (shirts2.includes(color, 0))
    // if(Object.values(shirts2).indexOf(color) >-1)
    {
        console.log(2)

        pantsarray.push(...pants2)
        // console.log(...Combo2.pants)

        // console.log("Combo2", ...Object.keys(Combo2.pants))
    }
    if (shirts3.includes(color, 0))
    // if(Object.values(shirts3).indexOf(color) >-1)
    {
        console.log(3)

        pantsarray.push(...pants3)
        // console.log(...Combo3.pants)

        // console.log("Combo3", ...Object.keys(Combo3.pants))

    }
    if (shirts4.includes(color, 0))
    // if(Object.values(shirts4).indexOf(color) >-1)
    {
        console.log(4)

        pantsarray.push(...pants4)
        // console.log(...Combo4.pants)
        // console.log("Combo4", ...Object.keys(Combo4.pants))

    }
    if (shirts5.includes(color, 0))
    // if(Object.values(shirts5).indexOf(color) >-1)
    {
        console.log(5)

        pantsarray.push(...pants5)
        // console.log("Combo5", ...Combo5.pants)

        // console.log(...Object.keys(Combo5.pants))

    }
    console.log("i am array", pantsarray)
    return pantsarray;
}

export default PantColors;