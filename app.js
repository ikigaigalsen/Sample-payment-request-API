if (window.PaymentRequest) {
  //if the API is supported by the client interface

  //Create supported payment methods
  const supportedPaymentMethods = [
    {
      supportedMethods: "bank-card",
    },
  ];

  //Providing payment details (amount, currency...)
  const paymentDetails = {
    total: {
      label: "Total cost",
      amount: {
        currency: "xof",
        value: 2000,
      },
    },
  };

  //custom options
  const options = {};

  //Create a request
  const PaymentRequest = new PaymentRequest(
    supportedPaymentMethods,
    paymentDetails,
    options
  );

  paymentRequest
    .show()
    .then((payment) => console.log(payment))
    .catch((error) => console.log(error));
} else {
  //Jump on to another traditional implementation
}

