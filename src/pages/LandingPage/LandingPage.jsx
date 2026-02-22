import React, { useEffect, useState } from 'react';

const LandingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    return (
        <div className="p-10 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p._id} className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2 text-black">{p.name}</h3>
                        <p className="mb-1 text-black">Quantity: {p.quantity}</p>
                        <p className="text-sm mb-4 text-black">{p.description}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold text-center m-6">Go to All Products to add or remove</h2>
        </div>
    );
};

export default LandingPage;