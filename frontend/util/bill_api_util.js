
export const createBill = (bill) => {
  return $.ajax({
    method: 'POST',
    url: '/api/bill',
    data: bill
  });
};
