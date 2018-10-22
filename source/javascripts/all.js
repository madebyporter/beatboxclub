import uuid from 'node_modules/uuid/v4';

const amount = 500;
const $messageBox = document.getElementById('messageBox');
const $button = document.querySelector('subscription_submit');

function resetButtonText() {
  $button.innerHTML = 'Click to Buy! <strong>$10</strong>';
}

const handler = StripeCheckout.configure({
  key: STRIPE_PUBLISHABLE_KEY,
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  closed: function () {
    resetButtonText();
  },
  token: function(token) {

    fetch(`${LAMBDA_ENDPOINT}purchase`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        amount,
        idempotency_key: uuid()
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error(error))
    .then(response => {

      resetButtonText();

      let message = typeof response === 'object' && response.status === 'succeeded'
        ? 'Charge was successful!'
        : 'Charge failed.'
      $messageBox.querySelector('h2').innerHTML = message;

      console.log(response);
    });
  }
});

$button.addEventListener('click', () => {

  setTimeout(() => {
    $button.innerHTML = 'Waiting for response...';
  }, 500);

  handler.open({
    amount,
    name: 'Test Shop',
    description: 'A Fantastic New Widget'
  });
});
