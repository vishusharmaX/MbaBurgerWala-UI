import React from 'react'
import {AiFillInstagram,AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback. </em>
        <strong>All right reserved  @mbaburgerwala</strong>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/vishwajeet-sharma-649a21205">
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com/vishusharmaX">
            <AiFillGithub/>
        </a>
        <a href="https://www.instagram.com/vishu.livincool/">
            <AiFillInstagram/>
        </a>
        <a href="https://twitter.com/VishuSh62450403?t=m-5QTgaVVlWHmsFXDuXxFw&s=09">
            <AiFillTwitterCircle/>
        </a>
    </aside>
   </footer>
  )
}

export default Footer