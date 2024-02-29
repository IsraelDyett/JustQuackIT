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
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        name="CustomerName"
                        value={formData.CustomerName}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                    />
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div>
                    <label>Size:</label>
                    <input
                        type="text"
                        name="Size"
                        value={formData.Size}
                        onChange={handleChange}
                        placeholder="Size"
                        maxLength="1"
                        required
                    />
                </div>

                <div>
                    <label>Customer Email:</label>
                    <input
                        type="email"
                        name="CustomerEmail"
                        value={formData.CustomerEmail}
                        onChange={handleChange}
                        placeholder="Customer Email"
                        required
                    />
                </div>

                <div>
                    <label>Colour:</label>
                    <input
                        type="text"
                        name="Colour"
                        value={formData.Colour}
                        onChange={handleChange}
                        placeholder="Colour"
                    />
                </div>

                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="Quantity"
                        value={formData.Quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                    />
                </div>

                <div>
                    <label>Customer Age:</label>
                    <input
                        type="text"
                        name="CustomerAge"
                        value={formData.CustomerAge}
                        onChange={handleChange}
                        placeholder="Customer Age"
                    />
                </div>

                <div>
                    <label>Customer Gender:</label>
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
                </div>

                <div>
                    <label>Returning Customer:</label>
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
                </div>


                <button type="submit">Submit</button>
            </form>
        );
    };

export default OrderForm;
