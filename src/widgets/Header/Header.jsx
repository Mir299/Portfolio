
import './Header.scss';
import myImg from '../../assets/images/myImg.png';
import tgIcon from '../../assets/icons/Telegram-icon.svg';
import gitHubIcon from '../../assets/icons/GitHub-icon.svg';
import emailIcon from '../../assets/icons/Email-icon.svg';


const Header = () => {
  return (
    <header className="header">
        <div className="header__content container">
          <div className="header__content-info">
            <p>Привет, меня зовут</p>
            <h1>Мирсаид</h1>
            <h2>Front-end разработчик</h2>

            <div className="header__content-info-soicials">
              <div className="header__content-info-soicials-link"><img style={{width: '35px',height: '35px'} } src={tgIcon} alt="TG" /></div>
              <div className="header__content-info-soicials-link"><img src={gitHubIcon} alt="GIt" /></div>
              <div className="header__content-info-soicials-link"><img src={emailIcon} alt="Email" /></div>
            </div>
          </div>
            <div className="header__content-myImg">
              <img src={myImg}  alt="myIMG" />
            </div>
        </div>
    </header>
  )
};

export default Header;