/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
}

function fetchPricingData() {
  return fetch('/api/pricing').then((res) => res.json());
}

function fetchDataThenWait() {
  return fetchPricingData().then((pricingData) => {
    return wait(1).then(() => pricingData);
  });
}
