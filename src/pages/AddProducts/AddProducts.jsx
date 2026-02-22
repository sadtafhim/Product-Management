import React from 'react';
import { Link } from 'react-router';

const AddProducts = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const product_details = { name, quantity, description }

        fetch("https://product-management-server-ten.vercel.app/api/products", {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product_details)
        }).then(res => res.json()
        ).then(data => {
            if (data.insertedId) {
                alert('Product added Successfully')
            }
        })
    }
    return (
        <div>
            <div className="flex items-center justify-center p-10 min-h-screen">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-[#1E293B]">
                        Add Product
                    </h2>

                    <form className="space-y-5 mt-6" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label
                                className="label font-medium text-[#1E293B]"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter product name"
                                className="input input-bordered w-full p-3 focus:border-[#2563EB]"
                            />
                        </div>

                        <div className="form-control">
                            <label
                                className="label font-medium text-[#1E293B]"
                            >
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                required
                                placeholder="Enter quantity"
                                className="input input-bordered w-full p-3 focus:border-[#2563EB]"
                            />
                        </div>

                        <div className="form-control">
                            <label
                                className="label font-medium text-[#1E293B]"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                placeholder="Enter product description"
                                className="input input-bordered w-full p-3 focus:border-[#2563EB] resize-none"
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full text-white font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] transition-all"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;