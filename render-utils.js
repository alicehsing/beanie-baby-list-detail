export function renderBeanieBabies(beanieData) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const worthEl = document.createElement('p');
    const YearEl = document.createElement('p');
    const imgEl = document.createElement('img');

    div.classList.add('beanie');
    imgEl.classList.add('beanie-img');
    a.href = `./beanie-babies/?id=${beanieData.id}`;
    nameEl.textContent = beanieData.name;
    worthEl.textContent = beanieData.worth;
    YearEl.textContent = beanieData.year_created;
    imgEl.src = beanieData.image;

    div.append(nameEl, worthEl, YearEl, imgEl);
    a.append(div);

    return a;
}