const algoliasearch = window.algoliasearch;
const instantsearch = window.instantsearch;

const searchClient = algoliasearch(
  "V41OTE1K6R",
  "119c55c041cc7d897ed25e80d035b4e9"
);

const search = instantsearch({
  indexName: "glenn_movies",
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
  }),
  instantsearch.widgets.hits({
    container: "#hits",
  }),
]);

search.start();
