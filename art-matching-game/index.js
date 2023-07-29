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

//Here we add "hide-on-mobile" to the class list of two html img elements when the screen is below 575px. The
// "hide-on-mobile" class will give the style "display-none" to those two elements, hiding them on mobile.
let mediaQuery = window.matchMedia("(max-width: 575px");
if (mediaQuery.matches) {
   let firstImageElement = document.getElementById("delete-on-mobile-one");
   let secondImageElement = document.getElementById("delete-on-mobile-two");
   firstImageElement.classList.add("hide-on-mobile");
   secondImageElement.classList.add("hide-on-mobile");
    paintingsAndArtistsHashmap.delete("Sistine-Chapel");
    arrayOfTiles.pop();
    arrayOfTiles.pop();
}

/**
 * This function loops through a hashmap and assigns each key and value as a new id for randomly generated elements.
 * @param map takes in a hashmap with set keys and values.
 */
function assignIDs(map) {
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

let clickTracker = 0;
let previousTileClicked;
for (let individualTile of arrayOfTiles) {
    individualTile.onclick = function () {
        if (clickTracker < 2 && individualTile !== previousTileClicked && !individualTile.style.filter.includes("blur")) {
            // Flip the user is not clicking on the same tile over and over
            clickTracker++;
            individualTile.classList.toggle("flipTile180Deg");
            let lowerCaseTileID = individualTile.id.toLowerCase();
            individualTile.src = `images/${lowerCaseTileID}.jpg`;
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
let currentRound = 1;
let foundMatches = "";

let playAgainButtonElement = document.getElementById("play-again-button");
let blurredImages = 0;

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
            blurredImages += 2;
            if (blurredImages === 20) {
                playAgainButtonElement.style.display = "inline-block";
                console.log("reached 20");
            }
            if (mediaQuery.matches) {
                if (blurredImages === 18) {
                    playAgainButtonElement.style.display = "inline-block";
                    console.log("reached 18");
                }
            }
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

playAgainButtonElement.onclick = function () {
    window.location.reload();
}

assignIDs(paintingsAndArtistsHashmap);
