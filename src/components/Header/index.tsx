import logo from '/logo.png';
import './index.css';
import { Link } from 'react-router';

const stNavLink: string = 'nav-link px-2 font-semibold';

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="loFgo" />
          </Link>
        </div>
        <ul className="nav gap-[2vw]">
          <li>
            <Link className={stNavLink} to="/">
              협회소개
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/program">
              치료프로그램
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/instructor">
              강사소개
            </Link>
          </li>
          {/* <li>
            <Link className={stNavLink} to="/notice">
              공지사항
            </Link>
          </li> */}
          <li>
            <Link className={stNavLink} to="/contact">
              문의
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
