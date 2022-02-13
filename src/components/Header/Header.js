import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <div id="title">
        <h1>Around The World</h1>
        <img
          id="logo"
          src="https://images.cdn3.stockunlimited.net/clipart450/globe-with-traveling-concept-icon_2005029.jpg"
          alt="Around The World"
        />
        </div>
        <div>
        <ul id="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
