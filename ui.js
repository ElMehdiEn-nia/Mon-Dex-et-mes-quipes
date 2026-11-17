// =============================================================
// ui.js — fonctions d'AFFICHAGE
// Elles reçoivent des données et modifient la page. Elles ne changent jamais les données.
// Utilisez createElement, textContent, classList, setAttribute / dataset, append.
// (Pas de innerHTML avec des données : seulement innerHTML = "" pour vider une zone.)
// =============================================================

const typesBox = document.querySelector("#types");
const grid = document.querySelector("#grid");
const count = document.querySelector("#count");
const detail = document.querySelector("#detail");
const cartList = document.querySelector("#cart-list");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const statsBox = document.querySelector("#stats");

// -------------------------------------------------------------
// Petites aides (déjà écrites, utilisez-les)
// -------------------------------------------------------------


export const formatNumero = (id) => "#" + String(id).padStart(3, "0");


export const formatPrix = (prix) => prix + " DH";


export const typeClass = (type) =>
  "type-" + type.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function el(tag, className = "", text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== "") element.textContent = text;
  return element;
}

// -------------------------------------------------------------
// PALIER 1
// -------------------------------------------------------------

/**
 * Affiche les boutons de type dans #types.
 * counts = { Feu: 3, Eau: 3, … } (résultat de countByType) ; activeType = "Tous" ou un type.
 * Modèle d'un bouton :
 *   <button class="type-btn is-active" type="button" data-type="Feu">Feu (3)</button>
 * Le premier bouton est « Tous (12) » avec data-type="Tous" (12 = la somme des compteurs).
 * Seul le bouton du type actif a la classe is-active.
 */
export function renderTypes(counts, activeType) {
  if (activeType === "") {
    return [...counts]
  } else {
    const filterByType = counts.filter(count => count.activeType() === activeType())
  }
}

/**
 * Affiche le nombre de cartes visibles dans #count : "5 cartes", "1 carte" ou "Aucune carte".
 */
export function renderCount(n) {
  // TODO
}

/**
 * Affiche les cartes dans #grid.
 * list = les cartes à afficher ; cart = le panier (pour la classe is-selected, palier 2).
 * Si list est vide : un <p class="empty">Aucune carte trouvée</p>.
 * Modèle d'une carte :
 *   <article class="card" data-id="1">
 *     <img class="card__img" src="images/emberkit.svg" alt="Emberkit">
 *     <p class="card__num">#001</p>
 *     <h3 class="card__name">Emberkit</h3>
 *     <p class="card__meta"><span class="badge type-feu">Feu</span> <span class="rarity">Commune</span></p>
 *     <p class="card__price">12 DH</p>
 *     <button class="btn btn--primary" type="button" data-add="1">Ajouter</button>
 *   </article>
 * - stock 0 : classe out-of-stock sur l'article ET bouton désactivé (disabled = true)
 * - palier 2 : classe is-selected si la carte est dans le panier (cart.some(...))
 */
export function renderGrid(list, cart) {
  // TODO 1. Videz #grid
  // TODO 2. Liste vide : ajoutez le message et arrêtez (return)
  // TODO 3. Pour chaque carte : créez l'article et ses enfants, puis grid.append(article)
}

/**
 * Affiche la fiche d'une carte dans #detail : image, nom (h3), numéro + badge du type,
 * description, puis une liste <dl> : Rareté, Prix, Stock (« Rupture » si 0).
 */
export function renderDetail(card) {
  // TODO
}

// -------------------------------------------------------------
// PALIER 2
// -------------------------------------------------------------

/**
 * Affiche le panier.
 * cart = [{ id, quantite }] ; cards = toutes les cartes (pour le nom, le prix, le stock).
 * Modèle d'une ligne :
 *   <li class="cart-line" data-id="1">
 *     <span class="cart-line__name">Emberkit</span>
 *     <button class="btn btn--small" type="button" data-action="minus">−</button>
 *     <span class="cart-line__qty">2</span>
 *     <button class="btn btn--small" type="button" data-action="plus">+</button>
 *     <button class="btn btn--small" type="button" data-action="remove">Retirer</button>
 *   </li>
 * - le bouton + est désactivé quand la quantité atteint le stock
 * - panier vide : <li class="empty">Votre panier est vide</li>
 * - #cart-count : "3 cartes" (ou "1 carte", "0 carte") ; #cart-total : "54 DH"
 *   → total et nbCards sont déjà calculés par main.js (cartTotal et cartCount de cart.js)
 * - pour le nom et le stock d'une ligne, retrouvez la carte dans cards avec find
 */
export function renderCart(cart, cards, total, nbCards) {
  // TODO
}

// -------------------------------------------------------------
// PALIER 3 (bonus)
// -------------------------------------------------------------

/**
 * Affiche les statistiques dans #stats : 4 blocs
 *   <div class="stat"><p class="stat__value">1 234 DH</p><p class="stat__label">Valeur du stock</p></div>
 */
export function renderStats(stats) {
  // TODO
}
export function Afficher(Array) {
  const section = document.getElementById("grid");

  section.innerHTML = "";
  console.log("Cards to display:", Array.length);
  Array.forEach((pokemon) => {
    section.innerHTML += `
        <article data-id="${pokemon.id}"
            class="pokemon-card flex flex-col gap-3 rounded-card bg-white p-3 pb-4">

            <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
                <span class="absolute left-3 top-2 font-mono text-sm">
                    ${pokemon.id}
                </span>

                <img src="${pokemon.image}" alt="${pokemon.name}"/>
            </div>

            <div class="flex items-center justify-between gap-2">
                <h3 class="font-display text-xl font-semibold">
                    ${pokemon.name}
                </h3>

                <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">
                    ${pokemon.type}
                </span>
            </div>

            <p class="text-sm text-black">
                ${pokemon.level} · Total 470
            </p>

            <button type="button" class="btn-outline add-team-btn">
                Ajouter à l'équipe
            </button>
        </article>`;
  });
}

/**
 * Affiche les erreurs du formulaire : errors = { nom: "…", prix: "…" }
 * Pour chaque champ (nom, prix, stock) : écrit le message dans [data-error-for="…"]
 * et ajoute ou retire la classe field-error sur le champ #form-….
 */
export function showFormErrors(errors) {
  // TODO
}
