import s from './Story.module.css'
import StoryCard from '../StoryCard/StoryCard'
import { data } from '../data.js'
import Container from '../Container/Container.jsx'

function Story() {

  return (
    <section className={s.story}>
      <Container>
        <h2 className={s.story__title}>OUR STORY</h2>
        <hr className={s.story__title_hr} />

        <div className={s.story__main}>
          <div className={s.story__info}>
            <p className={s.story__maintext}>Founded in 2011 by John Mathew Smith, <span className={s.story__maintext_span}>Konstruct</span> has become the number one construction management</p>
            <p className={s.story__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
          </div>

          <div className={s.story__cards}>
            {data.filter((el) => el.section === 'Story')
              .flatMap((el) =>
                el.data.map((item, i) => (
                  <StoryCard img={item.img} text={item.text} key={i} />
                ))
              )}
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Story
