import "../css/Admin/Admin.css";
import AdminGoTo from "./AdminGoTo";


const AdminDashboardNews = () => {
	return(
	<main className='admin-main'>
		<form method='POST' action=''>
			<AdminGoTo path={"/admin/dashboard/"} />
			<label htmlFor='img'>
				<span>Zdjęcie</span>
				<input type='file' name='img' id='img' />
			</label>
			<label htmlFor='title'>
				<span>Tytuł</span>
				<input type='text' name='title' id='title' />
			</label>
			<label htmlFor='description'>
				<span>Zdjęcie</span>
				<input type='text' name='description' id='description' />
			</label>
			<label htmlFor='content'>
				<span>Zdjęcie</span>
				<textarea name='content' id='content' />
			</label>
			<button type='submit' className='submit'>
				Zaaktualizuj
			</button>
		</form>
	</main>
)};

export default AdminDashboardNews;
