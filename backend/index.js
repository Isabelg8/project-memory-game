const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

//const dataBaseURL = 'https://console.firebase.google.com/u/2/project/cenfomemorygame/database/cenfomemorygame-default-rtdb/data/~2F?hl=es-419'
const dataBaseURL = 'https://proyecto-memorygamejs-default-rtdb.firebaseio.com/';

const halloween = ['halloween1.svg', 'halloween2.svg', 'halloween3.svg', 'halloween4.svg', 'halloween5.svg', 'halloween6.svg', 'halloween8.svg', 'halloween9.svg', 'halloween10.svg', 'halloween11.svg', 'halloween12.svg', 'halloween13.svg', 'halloween14.svg', 'halloween15.svg', 'halloween16.svg', 'halloween17.svg', 'halloween18.svg', 'halloween19.svg',]

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠', '🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳', '🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '☕', '🍵', '🥣', '🍼', '🥤', '🥛', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', '🥢', '🥡'];

const fastFood = ['Asset 6.svg', 'Asset 7.svg', 'Asset 8.svg', 'Asset 9.svg', 'Asset 10.svg', 'Asset 11.svg', 'Asset 12.svg', 'Asset 13.svg', 'Asset 14.svg', 'Asset 15.svg', 'Asset 16.svg', 'Asset 17.svg', 'Asset 18.svg', 'Asset 19.svg',]

const series = ['serie1.svg', 'serie2.svg', 'serie3.svg', 'serie4.svg', 'serie5.svg', 'serie6.svg', 'serie7.svg', 'serie8.svg', 'serie9.svg', 'serie10.svg', 'serie11.svg', 'serie12.svg', 'serie13.svg', 'serie14.svg', 'serie15.svg', 'serie16.svg',]

const faces = ['😀', '😬', '😁', '😂', '😃', '😄', '🤣', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁'];

const animals = ['🐶 ', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🦍', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🦊', '🐗', '🐴'];

app.get('/cards/:difficulty/:theme', (request, response) => {

    var data = { cards: [] };

    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.theme !== null) {
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty, theme);
            cards.forEach(card => {
                data.cards.push(card);
            });

            cards.forEach(card => {
                data.cards.push(card);
            });

            shuffleArray(data.cards);
            //data.cards = getCards(difficulty);
        }
    }
    response.send(JSON.stringify(data));
});

///////////////////////////////
app.post('/score', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const jsonData = Buffer.concat(body).toString();
        if (jsonData !== undefined) {
            const url = `${dataBaseURL}/data/scores.json`;
            const score = JSON.parse(jsonData);
            if (score !== undefined &&
                score.clicks !== undefined &&
                score.time !== undefined &&
                score.score !== undefined) {
                axios.post(url, score).then(function (result) {
                    response.send('Score saved!');
                }).catch(function (error) {
                    response.send(error);
                });
            } else {
                response.send('Score undefined or null!');
            }
        } else {
            response.send('request.body undefined or null!');
        }
    });
});

//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`)
//});

app.get('/scores', (request, response) => {
    const url = `${dataBaseURL}/data/scores.json`;
    axios.get(url).then(function (result) {
        console.log(result.data)
        response.send(result.data);
    }).catch(function (error) {
        console.log(error);
        response.send('Error getting scores!');
    }).finally(function () {
        // always executed
    });
});


//////////////////////////////

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIconIndex(iconIndex, length, cards) {

    let newIconIndex = randomInteger(0, (length - 1));

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id === newIconIndex) {
            return getIconIndex(iconIndex, length, cards);
        }
    }

    if (iconIndex === newIconIndex) {
        return getIconIndex(iconIndex, length, cards);
    }

    return newIconIndex;
};

function getCards(dificulty, theme) {
    var cards = [];
    var iconList = null;
    switch (theme) {
        case 'series':
            iconList = series;
            break;
        case 'halloween':
            iconList = halloween;
            break;
        case 'faces':
            iconList = faces;
            break;
        case 'animals':
            iconList = animals;
            break;
        case 'fastFood':
            iconList = fastFood;
            break;
        default:
            iconList = faces;
            break;
    }

    for (let i = 0; i < dificulty; i++) {
        var iconIndex = getIconIndex(-1, iconList.length, cards);
        var card = {
            "isDiscovered": false,
            "icon": iconList[iconIndex],
            "id": iconIndex
        }
        cards.push(card);
    }

    return cards;
};


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

module.exports = app;  


