export default function catalogSorting() {
    const elements = Array.from(document.querySelectorAll('.js-catalog-sorting'));

    elements.forEach(element => {
        const tumbler = element.querySelector('.catalog__intro-sorting-tumbler');
        const inputs = Array.from(element.querySelectorAll('input[type="radio"]'));

        tumbler.addEventListener('click', event => {
            event.preventDefault();
            if (inputs[0].checked) {
                inputs[1].checked = true;
            } else if (inputs[1].checked) {
                inputs[0].checked = true;
            }
           
            inputs.forEach(input => {
              

                const changeEvent = new Event('change');

                input.dispatchEvent(changeEvent);
            });
        })
    })
}