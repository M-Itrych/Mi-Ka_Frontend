import AdminGoTo from "./AdminGoTo";

const AdminDashboard = () => {
  return (
    <main className="admin-main">
      <div className="admin-dashboard-grid">
        <AdminGoTo
          path={"/admin/dashboard/add_news"}
          text={"Dodawanie Aktualności"}
        />
        <AdminGoTo path={"/admin/dashboard/modify_news"} text={"Edycja Aktualności"} />
      </div>
    </main>
  );
};

export default AdminDashboard;
