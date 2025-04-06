import s from './Header.module.css'
import Logo from './navLogo.svg'
import HeaderLogo from '/img/headerlogo.svg'
import Container from '../Container/Container'

function Header() {

    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.header__logo}>
                        <img src={HeaderLogo} alt="" />
                    </div>
                    <div className={s.header__main}>
                        <h1 className={s.header__title}>PARTNER WITH KONSTRUCT</h1>
                        <p className={s.header__subtext}>An award-winning construction management firm</p>
                    </div>
                    <p className={s.header__scroll}>SCROLL DOWN</p>
                </Container>
            </header>
            <nav className={s.nav}>
                <Container>
                    <div className={s.main}>
                        <img className={s.nav__img} src={Logo} alt="" />
                        <ul className={s.nav__ul}>
                            <li className={s.nav__li}>HOME</li>
                            <li className={s.nav__li}>ABOUT</li>
                            <li className={s.nav__li}>SERVICES</li>
                            <li className={s.nav__li}>WORK</li>
                            <li className={s.nav__li}>CONTACT</li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Header
