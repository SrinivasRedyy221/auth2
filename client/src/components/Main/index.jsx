import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Authenticator</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div >
				<h1>Welcome to Authenticator</h1>
				<p>
					You are logged in! This is a protected route.
				</p>
			</div>

		</div>
	);
};

export default Main;
