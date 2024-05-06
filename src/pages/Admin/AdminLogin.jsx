import "../css/Admin/AdminLogin.css";
import { useState } from "react";

const AdminLogin = () => {
	let [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<main>
				<form method='POST' onSubmit={(e) => e.preventDefault}>
					<section>
						<label htmlFor='login'>
							<span>Login</span>
							<input type='text' name='login' id='login' />
						</label>
						<label htmlFor='password'>
							<span>Hasło</span>
							<button
								type='button'
								onClick={() => {
									setShowPassword(!showPassword);
								}}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									class='lucide lucide-rectangle-ellipsis'>
									<rect
										width='20'
										height='12'
										x='2'
										y='6'
										rx='2'
									/>
									<path d='M12 12h.01' />
									<path d='M17 12h.01' />
									<path d='M7 12h.01' />
								</svg>
							</button>
							<input
								type={showPassword ? "text" : "password"}
								name='password'
								id='password'
							/>
						</label>
					</section>
					<button type='submit' className='submit'>
						Zaloguj
					</button>
				</form>
			</main>
		</>
	);
};

export default AdminLogin;
