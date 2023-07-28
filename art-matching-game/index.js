let paintingsAndArtistsHashmap = new Map();
paintingsAndArtistsHashmap.set("Starry-Night", "Van-Gogh");
paintingsAndArtistsHashmap.set("Mona-Lisa", "Leonardo-da-Vinci");
paintingsAndArtistsHashmap.set("Girl-With-A-Pearl-Earring", "Johannes-Vermeer");
paintingsAndArtistsHashmap.set("The-Kiss", "Gustav-Klimt");
paintingsAndArtistsHashmap.set("The-Scream", "Edvard-Munch");
paintingsAndArtistsHashmap.set("American-Gothic", "Grant-Wood");
paintingsAndArtistsHashmap.set("The-Persistence-Of-Memory", "Salvador-Dali");
paintingsAndArtistsHashmap.set("Sistine-Chapel", "Michelangelo");
paintingsAndArtistsHashmap.set("A-Sunday-Afternoon", "George-Seurat");
paintingsAndArtistsHashmap.set("Weeping-Woman", "Pablo-Picasso");

/**
 * This function randomly selects an item from a list of elements and returns the item.
 * @param listOfElements list of elements we want to choose a random item from.
 */
function getRandomItem(listOfElements) {
    let randomGeneratedIndex = Math.floor(Math.random() * listOfElements.length);
    // swap value at random generated index with the last value in the list of elements
    [listOfElements[randomGeneratedIndex], listOfElements[listOfElements.length - 1]] = [listOfElements[listOfElements.length - 1], listOfElements[randomGeneratedIndex]];
    return listOfElements.pop();
}

/**
 * This function loops through a hashmap and assigns each key and value as a new id for randomly generated elements.
 * @param map takes in a hashmap with set keys and values.
 */
function assignIDs(map) {
    console.log(arrayOfTiles);
    for (let i = 0; i < arrayOfTiles.length; i++) {
        if (arrayOfTiles[i].classList.contains("hide-on-mobile")) {
            map.delete("Sistine-Chapel");
            [arrayOfTiles[i], arrayOfTiles[arrayOfTiles.length - 1]] = [arrayOfTiles[arrayOfTiles.length - 1], arrayOfTiles[i]];
            arrayOfTiles.pop();
        }
    }
    for (let keyAndValuePair of map) {
        getRandomItem(arrayOfTiles).id = keyAndValuePair[0];
        getRandomItem(arrayOfTiles).id = keyAndValuePair[1];
    }
}

/**
 * A pointer event controls the behavior of HTML elements in response to mouse or touch events.
 * This function will be used to prevent users from clicking tiles and causing them to flip when we don't want that
 * to happen.
 * @param collectionOfElements list of elements we want to apply pointer event to.
 * @param {string} pointerEvent "none" turns off pointer event and "auto" turns on pointer event.
 */
function setPointerEventOfElements(collectionOfElements, pointerEvent) {
    for (let individualElement of collectionOfElements) {
        individualElement.style.pointerEvents = pointerEvent;
    }
}

/**
 * This function takes in a hyphenated string and replaces the hyphens with spaces, and returns the string.
 * @param hyphenatedString must contain at least one hyphen symbol between alphabet characters.
 */
function changeHyphensToSpaces(hyphenatedString) {
    let stringWithSpaces = "";
    for (let individualCharacter of hyphenatedString) {
        if (individualCharacter === "-") {
            stringWithSpaces += " ";
        } else {
            stringWithSpaces += individualCharacter;
        }
    }
    return stringWithSpaces;
}

let collectionOfTiles = document.getElementsByClassName("tiles");
// put collection of tiles elements into a list because collection of tiles is not an array, which we need in order to
// use .pop() method.
let arrayOfTiles = [];
for (let tile of collectionOfTiles) {
    // Flip all the tiles so the gradient image is actually backwards. We want this so that when a user clicks on the
    // tile we can flip it another 180 degrees and get the right orientation when an image shows.
    tile.classList.toggle("flipTile180Deg");
    arrayOfTiles.push(tile);
}

let clickTracker = 0;
let previousTileClicked;
for (let individualTile of arrayOfTiles) {
    individualTile.onclick = function () {
        if (clickTracker < 2 && individualTile !== previousTileClicked && !individualTile.style.filter.includes("blur")) {
            // Flip the user is not clicking on the same tile over and over
            clickTracker++;
            individualTile.classList.toggle("flipTile180Deg");
            individualTile.src = `images/${individualTile.id}.jpg`;
        }
        if (clickTracker === 2) {
            oneRound(previousTileClicked, individualTile);
            clickTracker = 0;
        } else {
            previousTileClicked = individualTile;
        }
    }
}

let foundMatchesPTagElement = document.getElementById("found-matches");
// TODO: implement this
let currentRound = 1;
let foundMatches = "";

function oneRound(firstTileClicked, secondTileClicked) {
    setPointerEventOfElements(collectionOfTiles, "none");
    currentRound++;
    let key;
    let value;
    if (paintingsAndArtistsHashmap.get(firstTileClicked.id) === secondTileClicked.id) {
        key = firstTileClicked;
        value = secondTileClicked;
    } else if (paintingsAndArtistsHashmap.get(secondTileClicked.id) === firstTileClicked.id) {
        key = secondTileClicked;
        value = firstTileClicked;
    }
    if (key !== undefined && value !== undefined) {
        foundMatches += `${key.id}, ${value.id} \n`;
        setTimeout(function () {
            firstTileClicked.style.filter = "blur(.3rem)";
            secondTileClicked.style.filter = "blur(.3rem)";
        }, 1500);
    } else {
        setTimeout(function () {
            firstTileClicked.src = "images/gradient-square.jpg";
            secondTileClicked.src = "images/gradient-square.jpg";
            // Flip the tiles to the original orientation
            firstTileClicked.classList.toggle("flipTile180Deg");
            secondTileClicked.classList.toggle("flipTile180Deg");
        }, 1500);
    }
    previousTileClicked = undefined;
    setTimeout(function () {
        setPointerEventOfElements(collectionOfTiles, "auto");
        document.getElementById("round").innerText = `Round: ${currentRound}`;

    }, 1500);
    if (foundMatches !== undefined) {
        foundMatchesPTagElement.innerText = changeHyphensToSpaces(foundMatches);
    }
}

assignIDs(paintingsAndArtistsHashmap);
