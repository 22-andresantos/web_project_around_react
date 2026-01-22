import logo from "../../images/logo.png";
import line from "../../images/line.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Around The US Logo" className="header__logo" />

        <img src={line} alt="Line Image" className="header__line" />
      </header>
    </>
  );
}
