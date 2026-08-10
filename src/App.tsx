import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import WhyUsPage from './pages/WhyUsPage';
import ForDentistsPage from './pages/ForDentistsPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:slug', element: <ProductDetailPage /> },
      { path: 'why-us', element: <WhyUsPage /> },
      { path: 'for-dentists', element: <ForDentistsPage /> },
      { path: 'quote', element: <QuotePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
