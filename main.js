// =============================================================
// main.js — l'ÉTAT de l'application et les ÉCOUTEURS
// Le chemin d'une action est toujours le même :
//   1. l'écouteur reçoit l'action
//   2. on met à jour `state` avec une fonction de données (cards.js / cart.js)
//   3. on redessine la page avec refresh()
// =============================================================

import { getData } from "../API.js";
import { Afficher } from "./ui.js";
import * as dataCards from "./cards.js";
import * as dataCart from "./cart.js";
import * as ui from "./ui.js";

// ---------- L'état : la seule source de vérité ----------


// ---------- Les éléments de la page ----------
const searchInput = document.querySelector("#search");
const typesBox = document.querySelector("#types");
const grid = document.querySelector("#grid");
const cartList = document.querySelector("#cart-list");
const sortSelect = document.querySelector("#sort");
const form = document.querySelector("#card-form");


let data = await getData()
Afficher(data)
