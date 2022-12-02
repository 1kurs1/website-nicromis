import styles from "../styles/About.module.css";
import Head from "next/head";
import Image from "next/image";

import pack from "../public/nicromis[light].png";

const About = () => {
    return (
        <>
            <Head>
                <title>Наши ресурсы</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/arrow.png" />
            </Head>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Nicromis</h1>
                    <div className={styles.containerImage}>
                        <Image className={styles.image} src={pack} alt="img"></Image>
                    </div>
                    <div className={styles.footContainer}>
                        <div className={styles.block}>
                            <h5>Программное обеспечение</h5>
                            <li>Windows 10/Ubuntu 20.04</li>
                            <li>Visual Studio</li>
                            <li>Adobe Photoshop</li>
                            <li>Unity</li>
                            <li>VS Code</li>
                            <li>CLion</li>
                            <li>Unreal Engine 5</li>
                        </div>
                        <div className={styles.block}>
                            <h5>Серверные архитектуры</h5>
                            <li>Coming soon...</li>
                        </div>
                    </div>
                    <div className={styles.buttonContainerAbout}>
                        <button className={styles.ncButtonAbout}>
                            <a href="/api/show">Для поддержки</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;