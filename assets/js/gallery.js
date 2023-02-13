

/*delay på data hentning i ms */
const myLoadTime = 300;

// reset variables
let myData = null;



/* kicks off app when the DOM is loaded */
window.addEventListener("load", initApp);


// din kode her 
const app = document.querySelector('#app')


function initApp() {
    // Vis loading text
    app.innerText = 'Loading Animals'
    fetchData()
}

function initGallery(data) {
    //fjern loading text
    app.innerHTML = ''

    // loop over data og append returns
    data.map((animal) => {
        app.append(createCard(animal))
    })
}

function createCard(cardData) {
    // Opret DOM-elementer
    let newCard = document.createElement('article')
    let cardTitle = document.createElement('h2')
    let cardDesc = document.createElement('p')
    let cardImg = document.createElement('img')

    // Føj indhold til elementer
    cardTitle.innerText = cardData.name
    cardDesc.innerText = cardData.shortDescription
    cardImg.src = cardData.picture
    cardImg.alt = cardData.name

    // Konsolider elementer
    newCard.append(cardTitle)
    newCard.append(cardImg)
    newCard.append(cardDesc)
    newCard.style.cursor = 'pointer'

    // Giv class
    newCard.classList.add('galleryCard')

    // tilføj onclick
    newCard.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('detailView')
        e.currentTarget.classList.toggle('galleryCard')
        showDetailView(e.currentTarget, cardData.description, cardData.shortDescription)
    })

    // indsæt figure i card
    return newCard
}

function showDetailView(card, description, shortDescription) {
    // Vis lang beskrivelse
    card.getElementsByTagName('p')[0].innerText = card.classList.contains('detailView') ? description : shortDescription

    // find alle cards og vis/skjul baseret på class
    let allCards = document.querySelectorAll('article')

    //hvis classlist indeholder detailView
    if (card.classList.contains('detailView')) {
        allCards.forEach((art) => {
            if (card === art) {
                // gør intent
            } else {
                // skjule cards der ikke blev klikket på
                art.style.display = 'none'
            }
        })
    }
    // hvis ikke den indeholder (viser alle cards igen)
    else {
        allCards.forEach((art) => {
            art.style.display = 'block'
        })
    }
}


/*  get data function  DO NOT TOUCH!!!!! ......................................................

denne funktion vil typisk være en funktion der henter data fra et API
*/



async function fetchData() {
    // data object
    console.log('fetching data');
    await new Promise(resolve => setTimeout(resolve, myLoadTime));

    myData = [

        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    initGallery(myData);


}

