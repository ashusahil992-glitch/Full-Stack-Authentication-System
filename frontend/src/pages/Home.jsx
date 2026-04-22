import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Secure & Scalable Authentication</h1>
        <p className="hero-subtitle">
          A full-stack authentication system built with React, Node.js, and MongoDB.
          Featuring JSON Web Tokens (JWT) and Role-Based Access Control (RBAC).
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn-primary btn-large">Get Started</Link>
          <Link to="/login" className="btn-secondary btn-large">Login</Link>
        </div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <ShieldCheck className="feature-icon" />
          <h3>JWT Security</h3>
          <p>Stateless authentication using industry-standard JSON Web Tokens.</p>
        </div>
        <div className="feature-card">
          <Lock className="feature-icon" />
          <h3>Role-Based Access</h3>
          <p>Restrict access to sensitive routes and features based on user roles.</p>
        </div>
        <div className="feature-card">
          <Users className="feature-icon" />
          <h3>User Management</h3>
          <p>Complete dashboard for users and admin panel for user management.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
