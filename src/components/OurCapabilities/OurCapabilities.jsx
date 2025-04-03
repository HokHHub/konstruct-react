import s from './OurCapabilities.module.css'
import Card from '../Card/Card'
import { data } from '../data'

export default function OurCapabilities() {
    return (
        <>
            <section className={s.OurCapabilities}>
                <div className={s.container}>
                    <div className={s.title}>
                        <div className={s.title__name}>
                            <h2 className={s.title__name_h2}>OUR CAPABILITIES</h2>
                            <span className={s.title__name_span}></span>
                        </div>
                        <p className={s.title__about}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                        <button className={s.title__button}>ALL SERVICES</button>
                    </div>
                    <div className={s.articles}>
                        {data.filter((el) => el.section === 'Capabilities')
                            .flatMap((el) =>
                                el.data.map((item, i) => (
                                    
                                    <Card img={item.img} title={item.title} descr={item.descr} key={i} />
                                ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}