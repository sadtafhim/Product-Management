import React, { useEffect, useState } from "react";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        if (!window.confirm("Delete this product?")) return;
        fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setProducts(products.filter(p => p._id !== id));
                }
            });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updated = {
            name: e.target.name.value,
            quantity: e.target.quantity.value,
            description: e.target.description.value
        };

        fetch(`http://localhost:5000/products/${editingProduct._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                setProducts(products.map(p => p._id === editingProduct._id ? { ...p, ...updated } : p));
                setEditingProduct(null);
            });
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="p-10 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p._id} className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2 text-black">{p.name}</h3>
                        <p className="mb-1 text-black">Quantity: {p.quantity}</p>
                        <p className="text-sm mb-4 text-black">{p.description}</p>
                        <div className="flex gap-2 ">
                            <button onClick={() => setEditingProduct(p)} className="bg-blue-500  px-3 py-1 rounded">Edit</button>
                            <button onClick={() => handleDelete(p._id)} className="bg-red-500  px-3 py-1 rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {editingProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded w-96">
                        <h3 className="text-xl font-bold mb-4 text-black">Edit Product</h3>
                        <form onSubmit={handleEditSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                defaultValue={editingProduct.name}
                                className="input input-bordered w-full p-2"
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                defaultValue={editingProduct.quantity}
                                className="input input-bordered w-full p-2"
                                required
                            />
                            <textarea
                                name="description"
                                defaultValue={editingProduct.description}
                                className="input input-bordered w-full p-2 resize-none"
                                rows={3}
                                required
                            />
                            <div className="flex justify-end gap-2 mt-3">
                                <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 rounded border">Cancel</button>
                                <button type="submit" className="px-4 py-2 rounded bg-blue-500 ">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProducts;