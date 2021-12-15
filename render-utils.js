export function renderBeanieBabies(beanieData) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    
    
    const imgEl = document.createElement('img');

    div.classList.add('beanie');
    imgEl.classList.add('beanie-img');
    a.href = `./beanie-babies/?id=${beanieData.id}`;
    nameEl.textContent = beanieData.name;
    imgEl.src = beanieData.image;

    div.append(nameEl, imgEl);
    a.append(div);

    return a;
}

export function renderBeanieDetail(beanieData) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const img = document.createElement('img');
    const worthEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const yearAndWorthEl = document.createElement('div');

    div.classList.add('beanie-baby-detail');
    nameEl.textContent = beanieData.name;
    nameEl.classList.add('name');

    img.src = beanieData.image;

    worthEl.textContent = beanieData.worth;
    worthEl.classList.add('worth');

    yearEl.textContent = beanieData.year_created;
    yearEl.classList.add('year');

    descriptionEl.textContent = beanieData.description;
    descriptionEl.classList.add('description');

    yearAndWorthEl.classList.add('year-and-worth');

    yearAndWorthEl.append(yearEl, worthEl);
    div.append(nameEl, img, yearAndWorthEl, descriptionEl);
    return div;
}