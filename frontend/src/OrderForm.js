import React, { useState } from 'react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        Customer_name: '',
        Phone_Number: '',
        Size: '',
        Customer_email: '',
        Colour: '',
        Quantity: '',
        Customer_age: '',
        Customer_gender: '',
        Returning_Customer: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/send-email', {
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
            <form onSubmit={handleSubmit}>
                {/* Input fields */}
                        
                <div>
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        name="Customer_name"
                        value={formData.Customer_name}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                    />
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="Phone_Number"
                        value={formData.Phone_Number}
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
                        name="Customer_email"
                        value={formData.Customer_email}
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
                        name="Customer_age"
                        value={formData.Customer_age}
                        onChange={handleChange}
                        placeholder="Customer Age"
                    />
                </div>

                <div>
                    <label>Customer Gender:</label>
                    <select
                        name="Customer_gender"
                        value={formData.Customer_gender}
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
                        name="Returning_Customer"
                        checked={formData.Returning_Customer}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                Returning_Customer: e.target.checked,
                            })
                        }
                    />
                </div>


                <button type="submit">Submit</button>
            </form>
        );
    };

export default OrderForm;
