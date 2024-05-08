import { useNavigate } from "react-router-dom";
import AdminGoTo from "./AdminGoTo";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToNewsUpd = () => {
    navigate("/admin/dashboard/news", { replace: true });
  };

  return (
    <main className="admin-main">
      <div className="admin-dashboard-grid">
		<AdminGoTo path={"/admin/dashboard/news"} text={"Dodawanie Aktualności"}/>
		<AdminGoTo path={"/admin/dashboard/news"} text={"Edycja Aktualności"}/>
      </div>
    </main>
  );
};

export default AdminDashboard;
