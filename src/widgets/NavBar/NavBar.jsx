import './NavBar.scss'; 

const NavBar = () => {


    return (
        <nav className="nav">
            <div className="nav__content container">
                <a href="../Header/Header.jsx" className="nav__logo" >
                <p className='nav__logo-latterM'>M</p>
                <p className='nav__logo-latterS'>S</p>    
                </a>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__list-link">Обо мне</a>
                    </li>

                    <li>
                        <a href="#" className="nav__list-link">Навыки</a>
                    </li>

                    <li>
                        <a href="#" className="nav__list-link">Работы</a>
                    </li>

                    <li>
                        <a href="#" className="nav__list-link-contact">Контакты</a>
                    </li>
                </ul>
                {/* смена языка */}
            </div>
        </nav>
    )
};

export default NavBar;