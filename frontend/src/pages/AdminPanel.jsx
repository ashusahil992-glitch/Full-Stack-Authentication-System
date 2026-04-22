import { useState, useEffect } from 'react';
import axios from 'axios';
import { Users, UserCog, ShieldAlert } from 'lucide-react';

const AdminPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/admin');
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load admin data');
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) return <div className="loading-spinner">Loading admin data...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!data) return null;

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1>Admin Control Panel</h1>
        <p>{data.message}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <Users className="stat-icon" />
          <div className="stat-info">
            <h3>Total Users</h3>
            <p className="stat-value">{data.stats.totalUsers}</p>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <UserCog className="stat-icon admin-icon" />
          <div className="stat-info">
            <h3>Admins</h3>
            <p className="stat-value">{data.stats.adminUsers}</p>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <ShieldAlert className="stat-icon user-icon" />
          <div className="stat-info">
            <h3>Regular Users</h3>
            <p className="stat-value">{data.stats.regularUsers}</p>
          </div>
        </div>
      </div>

      <div className="users-table-container glass-panel mt-8">
        <h2>Registered Users</h2>
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((u) => (
                <tr key={u._id}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td><span className={`role-badge ${u.role}`}>{u.role}</span></td>
                  <td className="monospace text-sm">{u._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
