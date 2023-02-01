import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import me from '../../assets/founder.jpg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section className="about">
        <main>
            <h1>About Us</h1>
            <motion.article
            initial={{
                x : '-100%',
                opacity :0 ,
            }}
            whileInView ={{
                x : 0,
                opacity :1,
            }}
            transition={{
                delay : 0.8
            }}
            >
                <h4>MBA Burger Wala</h4>
                <p>We are MBA Burger Wala . The place for most tasty burgers on the entire earth.</p>
                <p>Explore the various type of food and burgers. Click below to see the menu</p>
                <Link to='/'><RiFindReplaceLine/> </Link>
            </motion.article>

            <div>
             <h2>Founder</h2>
                <motion.article
                initial={{
                    y : '-100%',
                    opacity :0 ,
                }}
                whileInView ={{
                    y : 0,
                    opacity :1,
                }}
                transition={{
                    delay : 0.9
                }}>
                    <div>
                        <img src={me} alt="Founder" />
                        <h3>Vishwajeet Sharma</h3>
                    </div>
                    <p>I am Vishwajeet Sharma, the founder of MBA Burger Wala. Affiliated to God tatse..</p>
                </motion.article>
            </div>
        </main>
    </section>
  )
}

export default About