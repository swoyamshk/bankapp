
import styles from '../styles'
import { clients } from '../constants'


const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-2-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:brightness-200 transition duration-300 cursor-pointer" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients