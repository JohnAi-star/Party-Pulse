import React, { useState } from 'react';

const PasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password reset logic here
    // For example, you can call an API to send a password reset email
    try {
      // Assume resetPassword is a function that sends a password reset email
      await resetPassword(email);
      setMessage('Password reset email sent successfully.');
    } catch (error) {
      setMessage('Failed to send password reset email.');
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

// Mock function to simulate password reset
const resetPassword = async (email: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com') {
        resolve('Success');
      } else {
        reject('Error');
      }
    }, 1000);
  });
};

export default PasswordResetForm;
