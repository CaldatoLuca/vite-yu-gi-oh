# Yu-Gi-Oh


https://github.com/CaldatoLuca/vite-yu-gi-oh/assets/144032332/7975ac90-98db-4fca-a0fb-f05675d74609


Creazione di una sito per la ricerca di carte di yu-gi-oh tramite una select.
I dati forniti sono ottenuti tramite API.

## Focus principale esercizio

Gli obbiettivi principali di questo esercizio sono:

- la gestione dei dati tramite API.

- lo scambio di dati tramite una variabile oggetto globale ( store ).

- gestione degli eventi (da figlio a padre) con @emit

## Indice

- [Header](#header)
- [Main](#main)
  - [Chiamata alle api](#chiamata-alle-api)
  - [Store](#dato-globale-dinamico-lo-store)
  - [Computed](#occhio-alle-performance-computed)
- [MainSearch](#mainsearch)
- [MainCards](#maincards)
- [MainCardsNum](#maincardsnum)
- [MainCardsList](#maincardslist)

## Header

Il componente header presenta solamente il titolo del sito.

## Main

Nel main si ritrova tutta la complessità e la logica del sito.

Infatti ho deciso di far avvenire in questo componenete le chiamate api perchè entrambi i suoi componenti figli dovranno poi prendere (o scambiare) informazioni col Main.

Come controllo generale ho voluto inserire un v-if al container per visualizzare le carte solo quando la chiamata è finita

```html
<div v-if="store.cards.length !== 0" class="container"></div>
<div v-else><h1>Loading...</h1></div>
```

### Chiamata alle API

- installare e importare 'axios'

```
Eseguire il seguente comando nel terminale:
npm i axios
```

```js
importare axios nello script
import axios from "axios";
```

- alla creazione dell' applicazione far avvenire la chiamata

```js
  created() {
    axios.get(this.store.apiUrl).then((apiData) => {
      this.store.cards = apiData.data.data;
    });
    axios.get(this.store.archetypesApiUrl).then((apiData) => {
      this.store.archetypes = apiData.data;
    });
  },
```

La prima chiamata serve per ottenere tutte le carte e le loro info (usata per creare la lista)

La seconda chiamata serve per ottenere solo l' archertipo delle carte (usata per popolare la select auotomaticamente)

### Dato globale dinamico, lo STORE

Lo store è una variabile globale che permette a tutti i componenti di accedere a dati che vengono modificati e aggiornati dinamicamete.

Il suo vantaggio principale è la sua possibilità di 'collegare' tutti i componenti, senza andare a fare mille ramificazioni con le 'props'

Al livello di main.js si crea un file store.js

```js
import { reactive } from "vue";

export const store = reactive({
  //array delle carte e relativa api
  cards: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

  //array degli archetipi (per la search) e relativa api
  archetypes: [],
  archetypesApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",

  //v-model per la search
  searchArchetype: "",

  //api per la search
  searchArchetypesApiUrl:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
});
```

Come per `createApp` importiamo da vue `reactive`.

Successivamente salviamo nello store le varibili desiderate:

- il link alle api
- gli array che si 'riempiranno' coi dati delle api
- il v-model per la ricerca, tramite select, sugli archetipi

### Occhio alle performance, COMPUTED

Per evitare ripetute richieste ad API accessorie, Vue fornisce una funzione `computed`, che permette di far avvenire le funzioni solo quando necessario (quando cambia qualcosa che le riguarda).

Questo, vista la grandezza delle api, migliora di molto le performance dell' applicativo.

```js
  computed: {
    searchArchetype() {
      let apiArchetype = this.store.searchArchetypesApiUrl;
      if (this.store.searchArchetype !== "") {
        apiArchetype += this.store.searchArchetype;
        axios.get(apiArchetype).then((apiData) => {
          this.store.cards = apiData.data.data;
        });
      } else {
        axios.get(this.store.apiUrl).then((apiData) => {
          this.store.cards = apiData.data.data;
        });
      }
    },
  },
```

Nel caso specifico la funzione effettua diverse chiamate api a seconda del valore del v-model collegato alla select:

- api totale se il valore è vuoto ""

- api di ricerca per archetype a cui aggiungo alla fine il valore del v-model

```
"https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=`v-mode`"
```

NB

tutto cio dipende da come sono composte le api

## MainSearch

In questo componente avviene la ricerca delle carte in base al loro archetipo, per farlo è stato necessario richiamare i dati con lo 'store' e emittare verso il main (al @change della select)

Per utilizzare lo store è obbligatori importarlo:

```js
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
```

Da qui si può utilizzare all' interno dell' html tutti i dati presenti nello store

```html
<select
  v-model="store.searchArchetype"
  @change="$emit('searchArchetype')"
  name="card-search"
>
  <option value="">All</option>
  <option v-for="search in store.archetypes" :value="search.archetype_name">
    {{ search.archetype_name }}
  </option>
</select>
```

Alla select collego un v-model e un $emit che passerò al Main.

```html
<MainSearch @searchArchetype="searchArchetype" />
```

Popolo le option coi dati nello store.

## MainCards

Questo componente funge da contenitore al numero delle carte e alla lista delle carte

## MainCardsNum

Questo componente lo store per poter stampare la lunghezza di cards, in questo modo si sa quante carte sono state trovate.

```js
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
```

```html
<template>
  <div class="card-number">
    <span>Found {{ store.cards.length }} cards</span>
  </div>
</template>
```

## MainCardsList

In questo componente si va a popolare la lista col componente CommonCard.

Richiamando i dati dallo store si possono passare le informazioni necessarie all' elemento CommonCard tramite 'props', in questo modo rendo indipendente CommonCard

```html
<template>
  <div class="cards-album">
    <CommonCard
      v-for="card in store.cards"
      :src="card.card_images[0].image_url"
      :name="card.name"
      :archetype="card.archetype"
    />
  </div>
</template>
```
