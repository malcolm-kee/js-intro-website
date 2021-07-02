// use an IIFE to keep everything inside function scope

(function setupSignup() {
  // listen for click on #signup-button
  const signupBtn = document.querySelector('#signup-button');
  let timerId;
  signupBtn.addEventListener('click', function invokeSignup() {
    clearTimeout(timerId);
    const notification = document.querySelector('#signup-notification');
    // remove 'hidden' class on #signup-notification
    notification.classList.remove('hidden');
    timerId = setTimeout(() => {
      // add the 'hidden' class back after 2 second
      notification.classList.add('hidden');
    }, 2000);
  });
})();
