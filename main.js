import { getData } from "../API.js";
import { Afficher } from "./ui.js";



const searchInput = document.querySelector("#search");
const typesBox = document.querySelector("#types");
const grid = document.querySelector("#grid");
const cartList = document.querySelector("#cart-list");
const sortSelect = document.querySelector("#sort");
const form = document.querySelector("#card-form");


let data = await getData()
Afficher(data)
