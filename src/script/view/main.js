import '../component/club-list.js';
import '../component/search-container.js';
import DataSource from "../data/data-source.js";


const main = ()=> {
    const searchElement = document.querySelector("search-container");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async ()=> {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = results=> {
        clubListElement.clubs= results;
    };

    const fallbackResult = function (message) {
        clubListElement.renderError(message);
    };

    SearchElement.clickEvent= onButtonSearchClicked;
};
export default main;
