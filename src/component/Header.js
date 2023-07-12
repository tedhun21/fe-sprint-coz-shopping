import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header-container">
      <Link to="/">
        <div className="header-logo">
          <img src="/images/logo.png" alt="logo" />
          <span className="logo-name">COZ Shopping</span>
        </div>
      </Link>
      <img
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="hamburger"
        src="/images/hamburger.png"
        alt="hamburger menu"
      />
      {isNavOpen ? (
        <div className="gnb">
          <div className="nav-hi">OOO님, 안녕하세요!</div>
          <Link to="/products/list">
            <div className="nav-item">
              <img src="/images/gift.png" />
              <span>상품리스트 페이지</span>
            </div>
          </Link>
          <Link to="/bookmark">
            <div className="nav-bookmark">
              <img src="/images/star.png" />
              <span>북마크 페이지</span>
            </div>
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
