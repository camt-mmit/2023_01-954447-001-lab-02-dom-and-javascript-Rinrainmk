function createElement() {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const title = document.createElement('b');
    const input = document.createElement('input');

    const inputElements = [... document.querySelectorAll('input[type="number"].app-cmp-input'),
];
    title.textContent = `Number ${inputElements.length + 1}`;

    input.type = 'number';
    //input.defaultValue ='0';
    input.setAttribute('value','0');
    input.classList.add('app-cmp-input');

    input.addEventListener('change', ()=> {
        const result = [
            ... document.querySelectorAll('input[type="number"].app-cmp-input'),
        ].reduce ((carry,elem) => carry + elem.valueAsNumber, 0);

        document.querySelector(
            'output.app-cmp-result',).value =`${result.toLocaleString()}` ;
    });

    label.append(title);
    label.append(input);
    container.append(label);

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