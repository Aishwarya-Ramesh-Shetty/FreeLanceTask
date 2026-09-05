function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Welcome, {user.fullName}! </h1>

        <p>You are successfully logged in.</p>

        <div className="user-info">
          <div>
            <span>Name</span>
            <strong>{user.fullName}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>
        </div>

        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;