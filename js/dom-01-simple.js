document.addEventListener('DOMContentLoaded', () => {
    const inputElements = [
        ...document.querySelectorAll('input[type="number"].app-cmp-input'),];

    inputElements.forEach((element) => {
        element.addEventListener('change',() => {
            console.debug(element);
            const result = inputElements.reduce(
                (carry,elem) => carry + elem.valueAsNumber,
                0,
            )  

            //let result = 0;
            //for(const elem of inputElements) {
            //    result += elem.valueAsNumber;
            //}

            document.querySelector('output.app-cmp-result').textContent =`${result}` ;
        });
    });
});
