document.addEventListener('DOMContentLoaded', () => {
    var contactsForm = document.querySelector('#contacts-form');

    if (contactsForm) {
        contactsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(contactsForm)
                    .parsley()
                    .isValid()
            ) {
                contactsForm.classList.add('success');
                setTimeout(function() {
                    contactsForm.classList.remove('success');
                    contactsForm.reset();
                    $(contactsForm)
                        .parsley()
                        .reset();
                }, 4000);
            }
        });
    }

    const reportBtns = Array.from(document.querySelectorAll('.js-report'));

    reportBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            window.openModal('#report-modal');
        });
    });

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
            });

            element.classList.toggle('active');

            const parentListItem = element.closest('li');
            if (parentListItem) parentListItem.classList.toggle('form-shown');
        });
    });

    const btn = document.querySelector('.article__comments-btn');

    if (btn) {
        btn.addEventListener('click', event => {
            event.preventDefault();
            btn.parentElement.classList.toggle('comments-shown')
        })
    }
});
