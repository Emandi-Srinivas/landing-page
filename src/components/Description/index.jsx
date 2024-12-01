import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Utilizing ML, AI and other software technologies to convert regional language audio files, such as Telugu, Hindi, and others, into fully-AI-generated Images/Videos.";
    const description = useRef(null);
    const members = "Our Team";
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Original audio as soundtrack.
                    Bilingual subtitles (regional language and English).
                    Consistent Character/Image Generator.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>Features</p>
                    </Rounded>
                </div>
            </div>
        </div>
        
    )
}
