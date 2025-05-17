import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {getAllProduct.slice(0, 8).map((item, index) => {
        const { id, title, price, productImageUrl } = item;
        return (
          <div key={index} className="w-full">
            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105">
              <img
                onClick={() => navigate(`/productinfo/${id}`)}
                className="h-84  w-full object-cover"
                src={productImageUrl}
                alt="product"
              />
              <div className="p-4">
                <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                  E-bharat
                </h2>
                <h1 className="text-base font-semibold text-gray-900 mb-2">
                  {title.length > 25 ? title.substring(0, 25) + "..." : title}
                </h1>
                <p className="text-lg font-bold text-gray-800 mb-3">₹{price}</p>

                <div className="flex justify-center">
                  {cartItems.some((p) => p.id === item.id) ? (
                    <button
                      onClick={() => deleteCart(item)}
                      className="bg-red-500 hover:bg-red-600 w-full text-white py-2 rounded-lg font-semibold"
                    >
                      Delete From Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(item)}
                      className="bg-[#8E7DBE] hover:bg-[#7E60BF] w-full text-white py-2 rounded-lg font-semibold"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        </div>
    );
}

export default HomePageProductCard;