import s from './StoryCard.module.css'
export default function StoryCard(props){
    return(
        <>
            <article className={s.article}>
                <img className={s.article__img} src={props.img} alt=''/>
                <p className={s.article__text}>WE<br/>{props.text}</p>
            </article>
        </>
    )
}