///THE REASON WHY THIS IS A JAVASCRIPT FILE INSTEAD OF TYPES SCRIPT IS BECAUSE PAYSTACK DOESN'T SUPPORT TYPESCRIPT AT THE MOMENT
// THIS IS JUST A HACK TO BYPASS SOME TYPE CHECK


import { usePaystackPayment } from 'react-paystack';

const PaymentWithPaystack = ({amount=0, paymentResponse }) => {
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: amount,
    publicKey: 'pk_test_5899c5730c6a69c33fc4ff3e4902a20a9508cd49',
  };
  
  // you can call this function anything
  const handleSuccess = (ref) => {
  // Implementation for whatever you want to do with reference and after success call.
  //  console.log(ref);
   paymentResponse(ref)
   
  };
  
  // you can call this function anything
  const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
  }
  
  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className="px-24 text-sm py-2 bg-green-400 text-white my-4" onClick={() => {
        initializePayment(handleSuccess , onClose)
        }}>
            ORDER
        </button>
      </div>
    );
  };
  return (
    <div>
      
      <PaystackHookExample />
    </div>
    
  )
}

export default PaymentWithPaystack