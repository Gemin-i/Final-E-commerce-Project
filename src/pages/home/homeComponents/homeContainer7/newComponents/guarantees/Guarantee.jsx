import styles from './Guarantee.module.css'

import delivery from '../../../../../../assets/imgs/home/homeContainer7/guarantees/delivery.svg'
import security from '../../../../../../assets/imgs/home/homeContainer7/guarantees/security.svg'
import service from '../../../../../../assets/imgs/home/homeContainer7/guarantees/service.svg'

function Guarantee()  {

    const guarantees = [
      {
        image: delivery,
        heading: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
      },
      {
        image: service,
        heading: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
      },
      {
        image: security,
        heading: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days of purchase",
      },
    ];

    return (
        <div>
            <ul className={styles.guarantees}>
                {guarantees.map((guarantee, index) => (
                    <li className={styles.guarantee} key={guarantee.heading}>
                        <div className={styles.greyCircle}>
                            <div className={styles.blackCircle}>
                                <img src={guarantee.image} alt={`guarantee-${index + 1}`} />
                            </div>
                        </div>
                        <div className={styles.texts}>
                            <h2 className={styles.heading}>{guarantee.heading}</h2>
                            <p className={styles.description}>{guarantee.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Guarantee;