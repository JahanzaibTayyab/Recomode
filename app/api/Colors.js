const COLORS = {
    "Root Beer" : "#260701",
    "Black Bean" : "#3d0c02",
    "Burnt Umber" : "#843722",
    "Russet" : "#8d5524",
    "Peru" : "#c68642",
    "Coconut" : "#9f5c3c",
    "Brown Sugar" : "#af6e51",
    "Deer" : "#c18566",
    "Antique Brass" : "#c69076",
    "Tumbleweed" : "#d3a186",
    "Pastel Pink" : "#e2a898",
    "Desert Sand" : "#f0beaf",
    "Pale Pink" : "#f6d3bd",
    "Fawn" : "#e0ac69",
    "Mellow Apricot" : "#f1c27d",
    "Navajo White" : "#ffdbac",
    "White": "#ffffff",
    "Khaki": "#f0e68c",
    "Eggplant": "#614051",
    "Red": "#ff0000",
    "Gray": "#808080",
    "Light Blue": "#add8e6",
    "Orange": "#ffa500",
    "Pink": "#ffc0cb",
    "Blush Pink": "#fe828c",
    "Coral Pink": "#f88379",
    "Gold": "#ffdf00",
    "Royal Purple": "#7851a9",
    "Mint Green": "#98ff98",
    "Seafoam Green": "#71eeb8",
    "Sapphire Blue": "#0f52ba",
    "Brown": "#a52a2a",
    "Tan": "#d2b48c",
    "Yellow": "#ffff00",
    "Light Yellow": "#ffff33",
    "Green": "#008000",
    "Blue": "#0000ff",
    "Light Sky Blue": "#87cefa",
    "Cream": "#fffdd0",
    "Black": "#000000",
    "Ivory": "#fffff0",
    "Navy Blue": "#000080",
    "Olive Green": "#bab86c",
    "Crimson": "#dc143c",
    "Firebrick": "#b22222",
    "Teal": "#008080",
    "Cyan": "#00ffff",
    "Peach": "#ffdab9",
    "Lavender": "#e6e6fa",
    "Beige": "#f5f5dc",
    "Denim": "#1560bd",
    "Ford Blue": "#1351d8",
    "Dark Imperial": "#00416a",
    "Ateneo Blue": "#003a6c",
    "Rich Black": "#010b13",
    "Light Gray": "#d3d3d3",
    "Mocha": "#a38068",
    "Camel": "#c19a6b",
    "Light Taupe": "#b38b6d",
    "Charcoal": "#36454f"
}

const swatches = {
    skintones: {
        group1: {
            "Root Beer": COLORS["Root Beer"],
            "Black Bean": COLORS["Black Bean"],
            "Burnt Umber": COLORS["Burnt Umber"],
            "Brown Sugar": COLORS["Brown Sugar"],
            "Coconut": COLORS["Coconut"]
        },
        group2: {
            "Peru": COLORS["Peru"],
            "Fawn": COLORS["Fawn"],
            "Mellow Apricot": COLORS["Mellow Apricot"],
            "Tumbleweed": COLORS["Tumbleweed"],
            "Deer": COLORS["Deer"],
            "Antique Brass": COLORS["Antique Brass"]
        },
        group3: {
            "Pastel Pink": COLORS["Pastel Pink"],
            "Desert Sand": COLORS["Desert Sand"],
            "Pale Pink": COLORS["Pale Pink"],
            "Navajo White": COLORS["Navajo White"]
        }
    },
    shirtColors: {
        colors1: {
            "Sapphire Blue": COLORS["Sapphire Blue"],
            "Red": COLORS["Red"],
            "Orange": COLORS["Orange"],
            "Gold": COLORS["Gold"],
            "Eggplant": COLORS["Eggplant"],
            "Royal Purple": COLORS["Royal Purple"],
            "Gray": COLORS["Gray"],
            "Khaki": COLORS["Khaki"],
            "Pink": COLORS["Pink"],
            "Light Blue": COLORS["Light Blue"],
            "Mint Green": COLORS["Mint Green"],
            "White": COLORS["White"]
        },
        colors2: {
            "Black": COLORS["Black"],
            "Gray": COLORS["Gray"],
            "Navy Blue": COLORS["Navy Blue"],
            "Crimson": COLORS["Crimson"],
            "Brown": COLORS["Brown"],
            "Yellow": COLORS["Yellow"],
            "Orange": COLORS["Orange"],
            "Green": COLORS["Green"],
            "Tan": COLORS["Tan"],
            "Cream": COLORS["Cream"],
            "Khaki": COLORS["Khaki"],
            "Olive Green": COLORS["Olive Green"]
        },
        colors3: {
            "Black": COLORS["Black"],
            "Light Yellow": COLORS["Light Yellow"],
            "Tan": COLORS["Tan"],
            "Khaki": COLORS["Khaki"],
            "Ivory": COLORS["Ivory"],
            "Coral Pink": COLORS["Coral Pink"],
            "Blush Pink": COLORS["Blush Pink"],
            "Peach": COLORS["Peach"],
            "Lavender": COLORS["Lavender"],
            "Light Sky Blue": COLORS["Light Sky Blue"],
            "Seafoam Green": COLORS["Seafoam Green"],
            "Mint Green": COLORS["Mint Green"]
        }
    },
    pantsColors: {
        jeansShades: {
            "Black": COLORS["Black"],
            "Rich Black": COLORS["Rich Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Blue": COLORS["Blue"],
            "Ateneo Blue": COLORS["Ateneo Blue"],
            "Dark Imperial": COLORS["Dark Imperial"],
            "Denim": COLORS["Denim"],
            "Ford Blue": COLORS["Ford Blue"]
        },
        khakisShades: {
            "Charcoal": COLORS["Charcoal"],
            "Brown": COLORS["Brown"],
            "Light Taupe": COLORS["Light Taupe"],
            "Camel": COLORS["Camel"],
            "Olive Green": COLORS["Olive Green"],
            "Khaki": COLORS["Khaki"],
            "Tan": COLORS["Tan"],
            "Beige": COLORS["Beige"],
            "Cream": COLORS["Cream"],
            "Light Gray": COLORS["Light Gray"],
        },
        chinosShades: {
            "Black": COLORS["Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Blue": COLORS["Blue"],
            "Light Blue": COLORS["Light Blue"],
            "Crimson": COLORS["Crimson"],
            "Tan": COLORS["Tan"],
            "Light Gray": COLORS["Light Gray"],
            "Cream": COLORS["Cream"],
            "Beige": COLORS["Beige"],
            "Peach": COLORS["Peach"],
        },
        dressPantsShades: {
            "Black": COLORS["Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Gray": COLORS["Gray"],
            "Light Gray": COLORS["Light Gray"]
        }
    },
    shoeColors: {
        bootShades: {
            "Black": COLORS["Black"],
            "Brown": COLORS["Brown"],
            "Tan": COLORS["Tan"],
            "White": COLORS["White"]
        },
        sneakerShades: {
            "Black": COLORS["Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Blue": COLORS["Blue"],
            "Crimson": COLORS["Crimson"],
            "Firebrick": COLORS["Firebrick"],
            "White": COLORS["White"]
        }
    }
}

export default swatches;