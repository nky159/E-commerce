import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <nav className="bg-[#563D7C] sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
                
                {/* Logo */}
                <div className="text-[#ACA0BF] text-2xl font-bold mb-3 hover:text-black lg:mb-0">
                    <Link className="" to="/">E-Bharat</Link>
                </div>

                {/* Search Bar */}
                <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
                    <SearchBar />
                </div>

                {/* Nav Links */}
                <ul className="flex flex-wrap items-center justify-center gap-4 text-white font-medium">
                    <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/">Home</Link></li>
                    <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/allproduct">All Products</Link></li>

                    {!user && (
                        <>
                            {/* <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/signup">Signup</Link></li> */}
                            <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/login">Login</Link></li>
                        </>
                    )}

                    {user?.role === "user" && (
                        <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/user-dashboard">User</Link></li>
                    )}
                    {user?.role === "admin" && (
                        <li><Link className="hover:text-pink-100 text-[#ACA0BF] transition" to="/admin-dashboard">Admin</Link></li>
                    )}

                    {user && (
                        <li
                            onClick={logout}
                            className="cursor-pointer text-[#ACA0BF] hover:text-pink-100 transition"
                        >
                            Logout
                        </li>
                    )}

                    {/* Cart with Badge */}
                    <li>
                        <Link
                            to="/cart"
                            className="relative inline-flex items-center px-3 py-1 bg-white text-pink-600 font-bold rounded-full hover:bg-pink-100 transition"
                        >
                            Cart
                            <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold bg-pink-600 text-white rounded-full w-5 h-5">
                                {cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
