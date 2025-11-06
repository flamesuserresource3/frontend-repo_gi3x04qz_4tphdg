import React, { useMemo } from 'react';
import { Car, Star } from 'lucide-react';

const demoCars = [
  {
    id: 'tesla-model-s',
    brand: 'Tesla',
    model: 'Model S Plaid',
    type: 'Sedan',
    pricePerDay: 299,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'bmw-m4',
    brand: 'BMW',
    model: 'M4 Competition',
    type: 'Coupe',
    pricePerDay: 259,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'porsche-911',
    brand: 'Porsche',
    model: '911 Carrera',
    type: 'Coupe',
    pricePerDay: 329,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'audi-rs7',
    brand: 'Audi',
    model: 'RS7 Sportback',
    type: 'Hatchback',
    pricePerDay: 279,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const Card = ({ car, onBook }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-900">
          <Car size={14} /> {car.type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{car.brand}</h3>
            <p className="text-sm text-gray-600">{car.model}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="#f59e0b" />
            <span className="text-sm font-medium text-gray-800">{car.rating}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-900"><span className="text-xl font-bold">${car.pricePerDay}</span><span className="text-sm text-gray-500">/day</span></p>
          <button onClick={() => onBook(car)} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Book</button>
        </div>
      </div>
    </div>
  );
};

const Collections = ({ onBook }) => {
  const grouped = useMemo(() => {
    return demoCars.reduce((acc, car) => {
      acc[car.brand] = acc[car.brand] || [];
      acc[car.brand].push(car);
      return acc;
    }, {});
  }, []);

  return (
    <section id="collections" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Car Collections</h2>
            <p className="mt-1 text-gray-600">Browse by brand and explore popular models.</p>
          </div>
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input type="text" placeholder="Search models..." className="w-full sm:w-72 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900" onChange={(e) => {
                const q = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('[data-model]');
                cards.forEach((el) => {
                  const m = el.getAttribute('data-model');
                  el.parentElement.style.display = m.includes(q) ? '' : 'none';
                });
              }} />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {Object.keys(grouped).map((brand) => (
            <div key={brand}>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{brand}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {grouped[brand].map((car) => (
                  <div key={car.id} data-model={(car.model + ' ' + car.type + ' ' + brand).toLowerCase()}>
                    <Card car={car} onBook={onBook} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
