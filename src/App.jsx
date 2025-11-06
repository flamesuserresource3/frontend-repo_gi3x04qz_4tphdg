import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import { AuthModals } from './components/AuthModals';
import CartDrawer from './components/CartDrawer';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleBook = (car) => {
    // In a full app this would open a booking form; for now we add to cart
    setCartItems((prev) => {
      if (prev.find((p) => p.id === car.id)) return prev; // avoid duplicates
      return [...prev, car];
    });
    setCartOpen(true);
  };

  const handleCheckout = () => {
    alert('Booking flow coming next: collect user details and confirm.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onToggleCart={() => setCartOpen((o) => !o)}
        cartCount={cartItems.length}
      />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Luxury. Performance. Simplicity.</h2>
                <p className="mt-3 text-gray-600">We bring together a curated selection of premium cars from top brands. Compare models by type, performance, and pricing, then reserve your ride with a fast, secure checkout. Admins get a dedicated dashboard to review bookings.</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <li className="rounded-lg border p-3">Browse by brand and model</li>
                  <li className="rounded-lg border p-3">Smart search with instant filtering</li>
                  <li className="rounded-lg border p-3">Cart with booked cars</li>
                  <li className="rounded-lg border p-3">User/Admin login and registration</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-extrabold">50+</div>
                    <div className="text-xs text-gray-600">Models</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold">8</div>
                    <div className="text-xs text-gray-600">Brands</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Collections onBook={handleBook} />
      </main>

      <AuthModals
        openLogin={showLogin}
        openRegister={showRegister}
        onClose={() => { setShowLogin(false); setShowRegister(false); }}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onCheckout={handleCheckout}
      />

      <footer className="border-t py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} VeloShowroom. All rights reserved.</footer>
    </div>
  );
}

export default App;
