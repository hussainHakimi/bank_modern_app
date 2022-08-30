import React from 'react'
import { features } from '../constants'
import styles , {layout} from '../styles'
import { apple, bill, google } from '../assets'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1  ? 'mb-6' : 'mb-0'} feature-card cursor-pointer`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3 '>
      <h4 className='text-white font-semibold font-poppins text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='text-dimWhite font-noraml font-poppins text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className=' w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam.
          Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
            <img src={google} alt="google play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
          </div>
      </div>

    </section>
  )


export default Billing