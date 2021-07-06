function guessSearch() {
    let startSearch = 0;
    let endSearch = 100;

    while (startSearch <= endSearch) {
        let answerSearch = ((endSearch-startSearch)/2) + startSearch;

        let tryA = prompt(`Is your answer ${answerSearch}? If yes, press "y", if it's smaller press "s", if bigger press "b"`);
        
        if (tryA == "y") {
            alert("Bingo!");
        } else if (tryA == "s") {
            startSearch = answerSearch;
        } else if (tryA == "b") {
            endSearch = answerSearch;
        }
    }
}