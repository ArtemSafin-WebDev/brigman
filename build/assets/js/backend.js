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
        })
    })
});
