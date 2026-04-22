import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { UserCircle, Mail, Shield, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, {user.username}!</p>
      </div>

      <div className="profile-card glass-panel">
        <div className="profile-header">
          <UserCircle size={64} className="profile-avatar" />
          <div>
            <h2>{user.username}</h2>
            <span className={`role-badge ${user.role}`}>{user.role}</span>
          </div>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <Mail className="detail-icon" />
            <div>
              <span className="detail-label">Email</span>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="detail-item">
            <Shield className="detail-icon" />
            <div>
              <span className="detail-label">Account ID</span>
              <p className="monospace">{user._id || user.id}</p>
            </div>
          </div>
          <div className="detail-item">
            <Calendar className="detail-icon" />
            <div>
              <span className="detail-label">Status</span>
              <p>Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
