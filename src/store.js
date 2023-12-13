import { reactive } from "vue";

export const store = reactive({
  apiUrl: "",

  //array delle carte e relativa api
  cards: [],
  allApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

  //array degli archetipi (per la search) e relativa api
  archetypes: [],
  archetypesApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",

  //v-model per la search
  searchArchetype: "",

  SearchArchetypesApiUrl:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alligator",
});
