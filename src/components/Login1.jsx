import React, { useState } from 'react';
import './Login1.css';
import { useNavigate } from "react-router-dom";

const Login1 = ({}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bookingId: ''
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setFormError(false); // Reset form error when input changes
  };

  const handleLogin = () => {
    if (!formData.name || !formData.bookingId) {
      setFormError(true); // Set form error if fields are empty
      return;
    }

    localStorage.setItem('name', formData.name);
    localStorage.setItem('bookingId', formData.bookingId);
    navigate('/');
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <section className="login-section">
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2 className="login-h2">Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"/> <input type="text" required="" name="name" value={formData.name} onChange={handleChange}/>
                <label>Your Name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline" /><input type="text" required="" name="bookingId" value={formData.bookingId} onChange={handleChange} />
                <label>Booking Id</label>
              </div>
              {formError && <p className="error-message">Please fill in all fields.</p>}
              <button type="button" onClick={handleLogin} disabled={!formData.name || !formData.bookingId}>Log In</button> {/* Added type="button" and disabled attribute */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login1;
