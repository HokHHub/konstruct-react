import s from './Card.module.css'
export default function Card(props){
    return(
        <>
            <div className={s.card}>
                <img className={s.card__img} src={props.img} alt="" />
                <div className={s.card__texts}>
                    <p className={s.card__title}>{props.title}</p>
                    <p className={s.card__descr}>{props.descr}</p>
                </div>
            </div>
        </>
    )
}