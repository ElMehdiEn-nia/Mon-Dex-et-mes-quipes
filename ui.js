export function renderTypes(counts, activeType) {
  if (activeType === "") {
    return [...counts]
  } else {
    const filterByType = counts.filter(count => count.activeType() === activeType())
  }
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
