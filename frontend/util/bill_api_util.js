
export const createBill = (bill) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: bill
  });
};
