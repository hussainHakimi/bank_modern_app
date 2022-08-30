import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => (
  (
    <section className={`${styles.flexCenter} my-4 text-white`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:w-[192px] min-w-[120px] hover:cursor-pointer`}>
            <img src={client.logo} alt="client"  className='w-[100px] sm:w-[192px] object-contain '/>
          </div>
        ))}
      </div>
    </section>
  )
)

export default Clients