import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src="/images/logo.png" alt="logo" />
        <span className="logo-name">COZ Shopping</span>
      </div>
      <img
        className="hamburger"
        src="/images/hamburger.png"
        alt="hamburger menu"
      />
    </header>
  );
};

export default Header;
