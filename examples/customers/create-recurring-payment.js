/**
 * @docs https://docs.mollie.com/reference/v2/customers-api/create-customer-payment
 */
(async () => {
  const mollie = require('@mollie/api-client');
  const mollieClient = mollie({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

  try {
    const customerId = 'cst_pzhEvnttJ2';

    const payment = await mollieClient.customers_payments.create({
      amount: { value: '10.00', currency: 'EUR' },
      description: `Recurring payment`,
      redirectUrl: `https://example.org/redirect`,
      webhookUrl: `http://example.org/webhook`,
      metadata: { orderId: 'Order #23' },
      customerId,
      sequenceType: 'recurring',
    });

    console.log(payment);
  } catch (e) {
    console.log(e);
  }
})();
