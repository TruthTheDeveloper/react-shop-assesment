///THE REASON WHY THIS IS A JAVASCRIPT FILE INSTEAD OF TYPESCRIPT IS BECAUSE PAYSTACK DOESN'T SUPPORT TYPESCRIPT AT THE MOMENT
// THIS IS JUST A HACK TO BYPASS SOME TYPE CHECK ALTHOUGH CREATING A TYPE DEFINATION FILE MIGHT BE AN ALTERNATIVE BUT IT WUD BE AN OVERKILL

import { usePaystackPayment } from "react-paystack";

const PaymentWithPaystack = ({ amount = 0, paymentResponse, btn }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: amount,
    publicKey: process.env.REACT_APP_API_KEY,
  };

  // you can call this function anything
  const handleSuccess = (ref) => {
    // Implementation for whatever you want to do with reference and after success call.
    //  console.log(ref);
    paymentResponse(ref);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        {btn === "cart" ? (
          <button
            className="px-24 text-sm py-2 bg-green-400 text-white my-4"
            onClick={() => {
              initializePayment(handleSuccess, onClose);
            }}
          >
            ORDER
          </button>
        ) : (
          <button
            className="px-6 mx-1 py-2 my-4 bg-green-400 text-white text-sm"
            onClick={() => {
              initializePayment(handleSuccess, onClose);
            }}
          >
            CHECKOUT
          </button>
        )}
      </div>
    );
  };
  return (
    <div>
      <PaystackHookExample />
    </div>
  );
};

export default PaymentWithPaystack;
