import s from './GetInTouch.module.css'
import Container from '../Container/Container'
export default function GetInTouch(){
    return(
        <>
            <section className={s.GetInTouch}>
                <Container>
                    <div className={s.GetInTouch__div}>
                        <p className={s.GetInTouch__text}>Want to build something amazing?</p>
                        <button className={s.GetInTouch__button}>GET IN TOUCH</button>
                    </div>
                </Container>
            </section>
        </>
    )
}