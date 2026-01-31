import "./Header.css";

function Header() {
  return (
    <header className="top-bar">
      <img src="/logo.png" alt="Logo" className="logo" />

      <div className="header-right">
        <span className="login-text">เข้าสู่ระบบ</span>
        <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
      </div>
    </header>
  );
}

export default Header;
