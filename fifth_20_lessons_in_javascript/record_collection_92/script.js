//Rever a aula novamente mais algumas vezes tempo= 2:05:00

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artists": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artists": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artists": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "artists": "ABBA Gold",
    }
};

// Keep a copy of the collection for tests 
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line 
function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id] [prop];
    }else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));