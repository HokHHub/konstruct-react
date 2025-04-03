import s from './Header.module.css'
import Logo from './headerLogo.svg'
import Container from '../Container/Container'

function Header() {

    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.main}>
                        <img className={s.header__img} src={Logo} alt="" />
                        <ul className={s.header__ul}>
                            <li className={s.header__li}>HOME</li>
                            <li className={s.header__li}>ABOUT</li>
                            <li className={s.header__li}>SERVICES</li>
                            <li className={s.header__li}>WORK</li>
                            <li className={s.header__li}>CONTACT</li>
                        </ul>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header
