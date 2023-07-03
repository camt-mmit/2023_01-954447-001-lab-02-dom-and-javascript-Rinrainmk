function createElement() {
    const tmpInput =document.querySelector('template.app-temp-input');
    const container = tmpInput.content.cloneNode(true).firstElementChild;

    const inputElement =[
        ...document.querySelectorAll('input[type="number"].app-cmp-input'),
    ];
    container.querySelector('.app-cmp-input-no').textContent = `${inputElement.length + 1}`;
    container.querySelector('input[type="number"].app-cmp-input').addEventListener ('change',
    () => {
        const result =[
        ...document.querySelectorAll('input[type="number"].app-cmp-input'),
        ].reduce((carry,elem)=> carry + elem.valueAsNumber,0);
        document.querySelector(
            'output.app-cmp-result'
        ).value = `${result.toLocaleString()}`;
    });
    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputlist = document.querySelector('.app-cmp-inputs-list');
    const addComand = document.querySelector('.app-cmp-add-input');

    addComand.addEventListener('click', () =>
    inputlist.append(createElement()),
    );

    inputlist.append(createElement());
});