/* eslint-disable */

const helpers = (function () {
  const today = new Date();

  function padStart(strOrNum, length, filler = '0') {
    return String(strOrNum).padStart(length, filler);
  }

  function getCurrentYear() {
    return today.getFullYear();
  }

  function getCurrentDate() {
    return `${today.getFullYear()}-${padStart(
      today.getMonth() + 1,
      2
    )}-${padStart(today.getDate(), 2)}`;
  }

  function getServerTime(callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      callback(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  }

  function signupEmail({ email, onSuccess, onError }) {
    fetch('/api/signup', {
      method: 'post',
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(onSuccess)
      .catch(onError);
  }

  function createButton({ text, variant = 'primary' }) {
    const $button = document.createElement('button');
    $button.className = 'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ' +
      (variant === 'primary' ? 'text-white bg-pink-500 hover:bg-pink-800' : 'text-pink-500');
    $button.innerText = text;
    return $button;
  }

  function createInput(type = 'text') {
    const $input = document.createElement('input');
    $input.className = 'w-full px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md';
    $input.type = type;
    return $input;
  }

  function createModal() {
    // create the wrapper to cover the entire screen
    const $root = document.createElement('div');
    $root.className = 'hidden fixed inset-0 h-screen w-screen flex items-center justify-center p-6';

    // create the backdrop to prevent user to click other element
    const $backdrop = document.createElement('div');
    $backdrop.className = 'fixed inset-0 bg-black opacity-30';

    // create the modal
    const $modal = document.createElement('div');
    $modal.className = 'relative bg-white w-full max-w-md';
    const $modalBody = document.createElement('div');
    $modalBody.className = 'p-3';
    const $modalFooter = document.createElement('div');
    $modalFooter.className = 'p-3 border-t border-gray-200 text-right space-x-3';

    $modal.appendChild($modalBody);
    $modal.appendChild($modalFooter);
    $root.appendChild($backdrop);
    $root.appendChild($modal);

    function showModal() {
      $root.classList.remove('hidden');
      const focusable = $modal.querySelector('input, button');
      if (focusable) {
        focusable.focus();
      }
    }

    function hideModal() {
      $root.classList.add('hidden');
    }

    function destroyModal() {
      document.body.removeChild($root);
    }

    document.body.appendChild($root);

    return {
      destroyModal,
      showModal,
      hideModal,
      body: $modalBody,
      footer: $modalFooter
    };
  }

  /**
   * 
   * @param {Object} options
   * @param {'question' | 'confirmation'} options.type 
   * @param {string} options.label
   * @param {(result: string) => void} callback 
   */
  function prompt({ type = 'question', label }, callback) {
    const { destroyModal, showModal, body, footer } = createModal();

    if (type === 'question') {
      const input = createInput();
      input.id = 'input';
      input.placeholder = label;
      const submitBtn = createButton({ text: 'Submit' });
      function onClick() {
        const value = body.querySelector('#input').value;
        submitBtn.removeEventListener('click', onClick);
        destroyModal();
        callback(value);
      }
      submitBtn.addEventListener('click', onClick);
      body.appendChild(input);
      footer.appendChild(submitBtn);
      showModal();
    } else if (type === 'confirmation') {
      body.innerHTML = `<p class="text-2xl text-center">${label}</p>`;
      const noBtn = createButton({ text: 'No', variant: 'secondary' });
      noBtn.addEventListener('click', function onNo() {
        noBtn.removeEventListener('click', onNo);
        destroyModal();
        callback(false);
      });
      const yesBtn = createButton({ text: 'Yes' });
      yesBtn.addEventListener('click', function onYes() {
        yesBtn.removeEventListener('click', onYes);
        destroyModal();
        callback(true);
      });
      footer.appendChild(noBtn);
      footer.appendChild(yesBtn);
      showModal();
    }
  }

  return {
    getCurrentYear,
    getCurrentDate,
    getServerTime,
    signupEmail,
    prompt
  };
})();
