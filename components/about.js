import aboutStyle from "../styles/Home.module.css";
import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
    return (
        <div className={aboutStyle.container}>
            <div className={aboutStyle.header}>
                <h1>Кто мы?</h1>
                <p>
                    Мы - небольшая игровая студия из России, 
                    занимающаяся разработкой как небольших проектов, 
                    так и достаточно крупных. Пока что наша команда состоит нескольких человек, 
                    но надеемся, в скором времени это изменится.
                    В наши планы входит не только разработка игровых приложений, 
                    но также десктопного и мобильного ПО, веб-сервисов,
                    приложений и многого другого. На данный момент у студии
                    уже имеется один крупный проект - Counteract, работа над 
                    которым продолжается уже несколько лет. 

                    Впереди нас ждет еще очень много нового и интересного, и мы только рады такой возможности.
                    Nicromis™
                </p>

                <div className={aboutStyle.footContainer}>
                    <div className={aboutStyle.block}>
                        <h5>Проекты</h5>
                        <ul>
                            <li>
                                <a href="https://vk.com/counteractofficial">Counteract</a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.Nicromis.ChanMania">Chan Mania</a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.Nicromis.CubePlay">Cube Play</a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.Nicromis.AngryBall">Angry Ball</a>
                            </li>
                            <li>NosyEngine (soon...)</li>
                        </ul>
                    </div>
                    <div className={aboutStyle.block}>
                        <h5>Контакты</h5>
                        <ul>
                            <li>
                                <a href="mailto:officialcryon@gmail.com">officialcryon@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://vk.com/nicromisoff">VK</a>
                            </li>
                            <li>
                                <a href="https://t.me/nicromis">Telegram</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCxiYmgoAzGdTMbytviqD-5A">YouTube</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/US4T3bJ">Discord</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.buttonContainerAbout}>
                    <button className={styles.ncButtonAbout}>
                        <Link href="/about">Больше о нас</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;