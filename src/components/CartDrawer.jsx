import React from 'react';
import { X } from 'lucide-react';

const CartDrawer = ({ open, onClose, items = [], onCheckout }) => {
  return (
    <div className={`fixed inset-0 z-30 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Bookings</h3>
          <button onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"><X size={16} /></button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-136px)]">
          {items.length === 0 ? (
            <p className="text-sm text-gray-600">No cars booked yet.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 rounded-lg border p-3">
                <img src={item.image} alt={item.model} className="h-20 w-28 rounded object-cover" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{item.brand} {item.model}</h4>
                  <p className="text-xs text-gray-600">{item.type}</p>
                  <p className="mt-1 text-sm font-medium">${item.pricePerDay}/day</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t p-4">
          <button onClick={onCheckout} disabled={items.length===0} className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black disabled:opacity-50">Proceed to Checkout</button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
