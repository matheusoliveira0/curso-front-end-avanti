import {useState} from 'react'

import styles from "./Accordion.module.css"

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const items = [
        {question:"O que é React?", answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odio cumque culpa repellat molestiae consequatur doloribus eos accusamus, dolorum nesciunt totam, aut aliquid placeat maxime quod sapiente. Ex, voluptatum excepturi."},
        {question:"O que é um Hook?", answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odio cumque culpa repellat molestiae consequatur doloribus eos accusamus, dolorum nesciunt totam, aut aliquid placeat maxime quod sapiente. Ex, voluptatum excepturi."},
        {question:"O que é useState?", answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odio cumque culpa repellat molestiae consequatur doloribus eos accusamus, dolorum nesciunt totam, aut aliquid placeat maxime quod sapiente. Ex, voluptatum excepturi."}
    ]
  return (
    <div className={styles.accordion}>
        {items.map((item,index) => (
            <div key={index} className={`${styles.item} ${activeIndex === index ? styles.open: ""}`}>
                <button className={styles.button} onClick={()=> toggleAccordion(index)}>
                    {item.question}
                </button>
                {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
        </div>
            
        ))}
    </div>
  )
}

export default Accordion
