import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut, User, ShieldAlert } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-logo">
          <ShieldAlert className="icon" /> AuthSystem
        </Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            {user.role === 'admin' && (
              <Link to="/admin" className="nav-link admin-link">Admin Panel</Link>
            )}
            <div className="user-menu">
              <span className="user-greeting">
                <User className="icon-small" /> {user.username}
              </span>
              <button onClick={handleLogout} className="btn-logout">
                <LogOut className="icon-small" /> Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
