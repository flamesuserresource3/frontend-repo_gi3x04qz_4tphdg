import React, { useState } from 'react';
import { X } from 'lucide-react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100">
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Input = (props) => (
  <input {...props} className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900 ${props.className || ''}`} />
);

export const AuthModals = ({ openLogin, openRegister, onClose }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Modal open={openLogin} onClose={onClose} title="Login">
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <label className="flex items-center gap-2"><input type="checkbox" checked={isAdmin} onChange={(e)=>setIsAdmin(e.target.checked)} /> Admin Login</label>
          </div>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <button type="submit" className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Sign in</button>
        </form>
      </Modal>

      <Modal open={openRegister} onClose={onClose} title="Create account">
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Full name" required />
            <Input placeholder="Phone" required />
          </div>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <label className="flex items-center gap-2"><input type="checkbox" /> Register as Admin</label>
          </div>
          <button type="submit" className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Create account</button>
        </form>
      </Modal>
    </>
  );
};
