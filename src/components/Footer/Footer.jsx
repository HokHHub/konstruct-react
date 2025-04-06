import s from './Footer.module.css'
import Container from '../Container/Container'
export default function Footer(){
    return(
        <>  
            <footer className={s.footer}>
                <Container>
                    <p className={s.footer__text}>© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </Container>
            </footer>
        </>
    )
}