export const fetchBill = (id) => {
  return $.ajax({
  method: 'GET',
  url: `/api/bills/${id}`,
  });
};


export const createBill = (bill) => {
  //  
  return $.ajax({
    method: 'POST',
    url: '/api/bills/',
    data: bill
  });
};
