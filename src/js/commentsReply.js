export default function commentsReply() {
    const elements = Array.from(document.querySelectorAll('.js-comment-reply'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            elements.forEach(otherElement => {
                if (otherElement !== element) {
                    otherElement.classList.remove('active');
                    const parentListItem = otherElement.closest('li');
                    if (parentListItem) parentListItem.classList.remove('form-shown');
                }
            })

            element.classList.toggle('active');

            
            const parentListItem = element.closest('li');
            if (parentListItem) parentListItem.classList.toggle('form-shown');
        })
    })
}