
export const createPayment = (payment) => {
  //  
  return $.ajax({
    method: 'POST',
    url: '/api/payments',
    data: payment
  });
};
