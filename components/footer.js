import styles from "../styles/Footer.module.css";
import{ FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faYoutube,
    faVk,
    faTelegram,
    faDiscord,
    faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.socialContainer}>
                    <div className={styles.social}>
                        <a href="mailto:officialcryon@gmail.com">
                            <FontAwesomeIcon
                                className={styles.envelope}
                                icon={faEnvelope}
                                size="2x"
                            />
                        </a>
                    </div>  
                    <div className={styles.social}>
                        <a href="https://vk.com/nicromisoff">
                            <FontAwesomeIcon
                                className={styles.vk}
                                icon={faVk}
                                size="2x"
                            />
                        </a>
                    </div>
                    <div className={styles.social}>
                        <a href="https://t.me/nicromis">
                            <FontAwesomeIcon
                                className={styles.telegram}
                                icon={faTelegram}
                                size="2x"
                            />
                        </a>
                    </div>
                    <div className={styles.social}>
                        <a href="https://www.youtube.com/channel/UCxiYmgoAzGdTMbytviqD-5A">
                            <FontAwesomeIcon
                                className={styles.youtube}
                                icon={faYoutube}
                                size="2x"
                            />
                        </a>
                    </div>
                    <div className={styles.social}>
                        <a href="https://discord.gg/US4T3bJ">
                            <FontAwesomeIcon
                                className={styles.discord}
                                icon={faDiscord}
                                size="2x"
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.desc}>
                    <p>По вопросам сотрудничества и другой информации</p>
                </div>
            </div>
            <div className={styles.rights}>
                <p>&copy;All rights reserved.</p>
            </div>
        </div>
    );
};
export default Footer;