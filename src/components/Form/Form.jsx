import s from './Form.module.css'
import Container from '../Container/Container'

function Form() {

    return (
        <>
            <div className={s.form}>
                <Container>
                    <div className={s.form__main}>
                        <p className={s.form__title}>Newsletter Signup</p>
                        <div className={s.form__signup}>
                            <input placeholder='test@youremail.com' className={s.form__input} type="text" />
                            <button className={s.form__button}>SIGNUP</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Form
