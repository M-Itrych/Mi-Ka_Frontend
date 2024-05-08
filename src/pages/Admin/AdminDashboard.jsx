import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToNewsUpd = () => {
    navigate("/admin/dashboard/news", { replace: true });
  };

  return (
    <main className="admin-main">
      <div className="admin-dashboard-grid">
        <a onClick={goToNewsUpd}>Panel Edycji Aktualności</a>
      </div>
    </main>
  );
};

export default AdminDashboard;
