/* eslint-disable */

function showNotification() {
    const notification = document.querySelector('#signup-notification');
    // remove 'hidden' class on #signup-notification
    notification.classList.remove('hidden');
    timerId = setTimeout(() => {
        // add the 'hidden' class back after 2 second
        notification.classList.add('hidden');
    }, 2000);
}

const form = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email-address');

let isSubmitting = false;

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if (!isSubmitting) {
        isSubmitting = true;

        helpers.signupEmail({
            email: emailInput.value,
            onSuccess: (res) => {
                console.log('signup email success');
                console.log(res)
                isSubmitting = false;
            },
            onError: () => {
                console.log('signup email error');
            }
        });
        showNotification();
    }
});
