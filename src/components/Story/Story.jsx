import s from './Story.module.css'

function Story() {

  return (
    <section className={s.story}>
      <h2 className={s.story__title}>OUR STORY</h2>
      <hr className={s.story__title_hr} />

      <div className={s.story__main}>
        <div className={s.story__info}>
          <p className={s.story__maintext}>Founded in 2011 by John Mathew Smith, <span className={s.story__maintext_span}>Konstruct</span> has become the number one construction management</p>
          <p className={s.story__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        </div>

        <div className={s.story__cards}>
          <div style={{'height':'225px', 'width':'140px', 'backgroundColor':'red'}}></div>
          <div style={{'height':'225px', 'width':'140px', 'backgroundColor':'red'}}></div>
          <div style={{'height':'225px', 'width':'140px', 'backgroundColor':'red'}}></div>
        </div>
      </div>

    </section>
  )
}

export default Story
