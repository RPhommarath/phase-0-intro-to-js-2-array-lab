const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
};

function destructivelyPrependCat(name) {
    return cats.unshift(name)
};

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
};

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
};

function appendCat(Broom) {
    const moreCats = [...cats, Broom];
    return moreCats;
};

function prependCat(Arnold) {
    return [Arnold, ...cats]
};

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
};

function removeFirstCat() {
    return cats.slice(1)
};