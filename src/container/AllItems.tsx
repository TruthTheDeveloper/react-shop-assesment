import CartItem from "../components/CartItem";
import CartModel from "../components/CartModel";

const LandingPage = () => {
  return (
    <>
      <section className="m-8 bg-white  ">
      <h1 className="text-2xl ml-24">Category name</h1>

      <div className="grid grid-cols-3">
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Product%20B.png?alt=media&token=aa354ac1-58c7-430e-8b21-b0a48fb7c0f8"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Product%20C.png?alt=media&token=cfb9afd5-2ac1-465b-aa68-c773961a5f1e"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Product%20A.png?alt=media&token=ee8623bd-503c-486d-b463-bdea72a1a2ad"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
        <CartItem
          img={
            "https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Product%20C.png?alt=media&token=cfb9afd5-2ac1-465b-aa68-c773961a5f1e"
          }
          title={"Apollo Runing short"}
          price={"$50,000"}
        />
      </div>
    </section>
     {/* <CartModel/> */}
    </>
  );
};

export default LandingPage;
