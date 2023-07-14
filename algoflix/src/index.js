const algoliasearch = window.algoliasearch;
const instantsearch = window.instantsearch;

const searchClient = algoliasearch(
  "V41OTE1K6R",
  "119c55c041cc7d897ed25e80d035b4e9"
);

const search = instantsearch({
  indexName: "glenn_movies",
  searchClient,
  insights: true
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10
  }),
  instantsearch.widgets.refinementList({
    container: "#refinements",
    attribute: "genres",
    sortBy: ["count"]
  }),
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for the movie here"
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit, {html, components: {Highlight}, sendEvent}) {
        return html`<div class="items">
        <button onClick=${(event) => {
          event.stopPropagation();
          sendEvent("conversion", hit, "Movie converted")}}>
          Convert on this
        </button>
        <img src="https://image.tmdb.org/t/p/w185${hit.poster}" alt=${hit.title} />
        <div class="items-info">
          <div class="items-info--title">
            <h3>
              ${Highlight({hit, attribute: 'title'})}
            </h3>
          </div>
          <div className="items-info--genres">
            <span className="genre-title">${hit.genres[0]} - ${hit.vote_average}</span>
          </div>
        </div>
      </div>`
      }
    }
  }),
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
]);

search.start();
