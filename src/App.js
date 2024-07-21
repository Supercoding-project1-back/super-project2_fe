import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import BasketPage from "./pages/ProductListPage/BasketPage/BasketPage";
import MyPage from "./pages/MyPage/MyPage";
import Join from "./pages/Login/Join/Join";
import HeaderLayout from "./pages/HeaderLayout";
import "./App.css";
import ProductDetail from "./pages/ProductListPage/ProductDetail/ProductDetail";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import AdminMyPage from "./pages/ProductUpload/AdminMyPage";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/join", element: <Join /> },
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "basket", element: <BasketPage /> },
      { path: "mainpage/:productId", element: <ProductDetail /> },
      { path: "mypage", element: <MyPage /> },
      { path: "upload", element: <ProductUpload /> },
      { path: "result", element: <AdminMyPage /> },
    ],
  },
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;