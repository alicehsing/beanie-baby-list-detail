import { getBeanie } from '../fetch-utils.js';
import { renderBeanieDetail } from '../render-utils.js';

const beanieDetailListEl = document.querySelector('#beanie-babies-detail');

window.addEventListener('load', async() => {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');
    //use the id to fetch the beanie
    const beanie = await getBeanie(id);
    //render and append this beanie's detail to the container
    const beanieEl = renderBeanieDetail(beanie);
    beanieDetailListEl.append(beanieEl);
});