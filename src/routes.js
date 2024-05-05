// import Admin from "routes/Account/Admin"
import Account from "routes/Account/Account"
import Admin from "routes/Admin/Admin"
import Blog from "routes/Blog/Blog"
import Contact from "routes/Contact/Contact"
import Home from "routes/Home/Home"
import Offers from "routes/Offers/Offers"

import Shop from "routes/Shop/Shop"
import SingleProduct from "routes/SingleProduct/SingleProduct"
import WishList from "routes/WishList/WishList"
import { BLOG_ROUTE, CONTACT_ROUTE, HOME_ROUTE, OFFERS_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE , ACCOUNT_ROUTE, ADMIN_ROUTE, WISHLIST_ROUTE } from "utils/consts"


export const authRoutes = [
    {
        path : ACCOUNT_ROUTE,
        Component : Admin,
    },
    {
        path : WISHLIST_ROUTE,
        Component : WishList
    }
]

export const publicRouters = [
    {
        path : OFFERS_ROUTE,
        Component : Offers
    },
   
    {
        path : BLOG_ROUTE,
        Component : Blog
    },
    {
        path : CONTACT_ROUTE,
        Component : Contact
    },
    {
        path : HOME_ROUTE,
        Component : Home
    },
    {
        path : SHOP_ROUTE,
        Component : Shop
    },
    {
        path : PRODUCT_ROUTE + "/:id",
        Component : SingleProduct
    },
    /// redirect to login form 
    {
        path : ACCOUNT_ROUTE,
        Component : Account
    },
    {
        path : WISHLIST_ROUTE,
        Component : Account
    },
    
    
]