import axios from 'axios';

import './cart.css';
import { useEffect, useState } from "react";

function CustomerCrud() {
    const [cusId, setId] = useState(""); // Changed to cusId
    const [cusName, setCusName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [customers, setCustomers] = useState([]); // State for holding customer data

    useEffect(() => {
        Load(); // Load customer data when component mounts
    }, []);

    async function Load() {
        try {
            const result = await axios.get("http://localhost:5067/api/DbModel"); // Update the API endpoint as needed
            setCustomers(result.data); // Set customers data from the API
            console.log(result.data);
        } catch (error) {
            console.error("Error loading customers:", error);
        }
    }

    async function save(event) {
        event.preventDefault(); // Prevent default form submission
        if (!cusName || !phoneNo || !email || !address) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await axios.post("http://localhost:5067/api/DbModel", {               
                cusName: cusName,
                phoneNo: phoneNo,
                email: email,
                address: address
            });
           

            alert("Added Successfully");
            clearForm(); // Clear form after saving
            Load(); // Reload customers
        } catch (err) {
            console.error(err); // Log the error for debugging
            alert("An error occurred: " + err.message); // Show a user-friendly message
        }
    }

    function clearForm() {
        setId(""); // Clear cusId
        setCusName("");
        setPhoneNo("");
        setEmail("");
        setAddress("");
    }

    async function editCustomer(customer) {
        setId(customer.cusId); // Using cusId
        setCusName(customer.cusName);
        setPhoneNo(customer.phoneNo);
        setEmail(customer.email);
        setAddress(customer.address);
    }

    async function DeleteCustomer(id) {
        await axios.delete("http://localhost:5067/api/DbModel/" + id); // Ensure correct API endpoint for deletion
        alert("Item deleted Successfully");
        clearForm(); // Clear form after deleting
        Load(); // Reload customers
    }

    async function update(event) {
        event.preventDefault();
        if ( !cusName || !phoneNo || !email || !address) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await axios.put(`http://localhost:5067/api/DbModel/${cusId}`, { // Using cusId for updating
                cusName: cusName,
                phoneNo: phoneNo,
                email: email,
                address: address
            });
            alert("Customer Updated");
            clearForm(); // Clear form after updating
            Load(); // Reload customers
        } catch (err) {
            console.error(err); // Log the error for debugging
            alert("An error occurred: " + err.message); // Show a user-friendly message
        }
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            hidden
                            value={cusId} // Using cusId
                            onChange={(event) => setId(event.target.value)}
                        />
                        <label>Customer Id</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cusId"
                            value={cusId} // Using cusId
                            onChange={(event) => setId(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cusName"
                            value={cusName}
                            onChange={(event) => setCusName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNo"
                            value={phoneNo}
                            onChange={(event) => setPhoneNo(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-4" onClick={save}>
                            Add to cart
                        </button>
                        <button type="button" className="btn btn-secondary mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <table className="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Customer Id</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.cusId}> {/* Using cusId for key */}
                            <td>{customer.cusId}</td> {/* Using cusId */}
                            <td>{customer.cusName}</td>
                            <td>{customer.phoneNo}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editCustomer(customer)}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => DeleteCustomer(customer.cusId)} // Using cusId for deletion
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerCrud;
