var handler = StripeCheckout.configure({
  key: 'pk_test_AKMonBwvNOc59DX1lxrqoKRp',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

document.getElementById('subscription_submit').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'The Beatbox Club',
    description: '2 widgets',
    amount: 5000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
