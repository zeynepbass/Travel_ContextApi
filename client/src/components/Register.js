import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const { register } = useContext(AuthContext);

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        register(user);
    };

    return (
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" value={user.username} onChange={onChange} placeholder="Username" required />
                <input type="email" name="email" value={user.email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={user.password} onChange={onChange} placeholder="Password" required />
<button type="submit" className="btn btn-primary btn-block">Register</button>
</form>
</div>
);
};

export default Register;

