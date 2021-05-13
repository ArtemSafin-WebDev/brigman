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
});
