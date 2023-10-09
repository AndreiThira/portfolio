import HeaderText from "./HeaderText"

function Header() {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li class="header-title">Portfolio</li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
            <HeaderText/>
        </div>
    )
  }

  export default Header