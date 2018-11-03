// import uuid from 'uuid/v4';
//
// const $button = document.querySelector('button');
//
// const handler = StripeCheckout.configure({
//   key: STRIPE_PUBLISHABLE_KEY,
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   closed: function () {
//
//   },
//   token: function(token) {
//
//     fetch(`${LAMBDA_ENDPOINT}purchase`, {
//       method: 'POST',
//       body: JSON.stringify({
//         token,
//         amount,
//         idempotency_key: uuid()
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//     .then(res => res.json())
//     .catch(error => console.error(error))
//     .then(response => {
//
//
//     });
//   }
// });
//
// $button.addEventListener('click', () => {
//   // setTimeout(() => {
//   //   $button.innerHTML = 'Waiting for response...';
//   // }, 500);
//
//   if ($button.id = "loops"){
//     handler.open({
//       amount: 500,
//       name: 'Loops',
//       description: 'Buy Loops'
//     });
//   } else if ($button.id = "tracks"){
//     handler.open({
//       amount: 2000,
//       name: 'Tracks',
//       description: 'Tracks'
//     });
//   } else if ($button.id = "stems"){
//     handler.open({
//       amount: 5000,
//       name: 'Stems',
//       description: 'Stems'
//     });
//   }
//
// });
