// import functions and grab DOM elements
import { getBeanies } from './fetch-utils.js';
import { renderBeanieBabies } from './render-utils.js';

const beanieListEl = document.querySelector('.beanie-babies-list');

// set event listeners 
window.addEventListener('load', async() => {
  // get all beanies from the supabase
    const beanies = await getBeanies();
  // render and append all dog cards to the container
    for (let beanie of beanies) {
        const beanieEl = renderBeanieBabies(beanie);
        beanieListEl.append(beanieEl);
    }
});
