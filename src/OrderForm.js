import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        CustomerName: '',
        PhoneNumber: '',
        Size: '',
        CustomerEmail: '',
        Colour: '',
        Quantity: '',
        CustomerAge: '',
        CustomerGender: '',
        ReturningCustomer: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://us-central1-just-quack-it.cloudfunctions.net/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            // Handle success or display error message to the user
        } catch (error) {
            console.error('Error:', error);
            // Display error message to the user
        }
    };

    return (
            <form className="order-form" onSubmit={handleSubmit}>
                {/* Input fields */}
                        
                <div>
                    <label>
                        <span>Customer Name:</span>
                        <input
                            type="text"
                            name="CustomerName"
                            value={formData.CustomerName}
                            onChange={handleChange}
                            placeholder="Customer Name"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Phone Number:</span> 
                        <input
                            type="text"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Size:</span>
                        <input
                            type="text"
                            name="Size"
                            value={formData.Size}
                            onChange={handleChange}
                            placeholder="Size"
                            maxLength="1"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Customer Email:</span>
                        <input
                            type="email"
                            name="CustomerEmail"
                            value={formData.CustomerEmail}
                            onChange={handleChange}
                            placeholder="Customer Email"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Colour:</span>
                        <input
                            type="text"
                            name="Colour"
                            value={formData.Colour}
                            onChange={handleChange}
                            placeholder="Colour"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Quantity:</span>
                        <input
                            type="number"
                            name="Quantity"
                            value={formData.Quantity}
                            onChange={handleChange}
                            placeholder="Quantity"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Customer Age:</span>
                            <input
                                type="text"
                                name="CustomerAge"
                                value={formData.CustomerAge}
                                onChange={handleChange}
                                placeholder="Customer Age"
                            />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Customer Gender:</span>
                            <select
                                name="CustomerGender"
                                value={formData.CustomerGender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Returning Customer:</span>
                        <input
                            type="checkbox"
                            name="ReturningCustomer"
                            checked={formData.ReturningCustomer}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    ReturningCustomer: e.target.checked,
                                })
                            }
                        />
                    </label>
                </div>


                <button type="submit">Submit</button>
            </form>
        );
    };

export default OrderForm;
