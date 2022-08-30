
import styles from "../styles"
import Button from "./Button"

const CTA = () => (
  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[5px] box-shadow justify-between`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div>
      <Button styles='mt-10 md:mt-0'/>
      </div>
    </section>
  )
)

export default CTA