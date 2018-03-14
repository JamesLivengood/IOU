
export const createBill = (bill) => {
  return $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: bill
  });
};
