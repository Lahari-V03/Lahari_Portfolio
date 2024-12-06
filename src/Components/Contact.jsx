import React, { useState } from "react";
import '../Styles/Contact.css';

function Contact({ setIsOpen }) {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.subject) newErrors.subject = "Subject is required.";
        if (!formData.message) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSendEmail = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const { name, subject, message } = formData;
        const mailtoLink = `mailto:laharivus@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailtoLink;

        setIsOpen(false);

        setFormData({ name: "", subject: "", message: "" });
    };

    return (
        <div className="contact-form-container" onClick={() => setIsOpen(false)}>
            <div
                className="contact-form"
                onClick={(e) => e.stopPropagation()} 
            >
                <span className="contact-head">Contact Me</span>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                        />
                        {errors.subject && <p className="error-message">{errors.subject}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                            style={{height: "100px"}}
                        ></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>

                    <div className="button-group">
                        <button type="button" onClick={handleSendEmail} className="button">
                            Send Email
                        </button>
                        <button type="button" onClick={() => setIsOpen(false)} className="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;