
export const createPayment = (payment) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/payments',
    data: payment
  });
};
