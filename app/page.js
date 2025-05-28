'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {  MailOutlined } from '@ant-design/icons';


import { Menu } from 'antd';
export default function Home() {

  const menuItems=[
     {
    key: '1',
    label: 'Navigation One',
     }];
  const onClick=() => {

  }
  return (
    <div>
      <header className={styles.header1}>
        <h1 className={styles.h11}>WELCOME TO MY PROJECT</h1>
        <img src="redrose.jpg" className={styles.image2}></img>
        </header>

        <header>
          <div className={styles.navdiv}>
            <nav className={styles.navbar}>
              <a href="https://www.facebook.com/prince.legaspi.98/" target="_blank" className={styles.anchor}>HOME</a>
              <a href="#hobby1" className={styles.anchor}>HOBBY</a>
              <a href="https://www.facebook.com/prince.legaspi.98/" target="_blank" className={styles.anchor}>SERVICES</a>
              <a href="https://www.facebook.com/prince.legaspi.98/" target="_blank" className={styles.anchor}>CONTACT ME</a>
            </nav>
          </div>
        </header>

        <div className={styles.containerdiv}>
          <img src="princenobg.png" className={styles.profilePIC}></img>
          <div className={styles.h1div}>
            <h1 className={styles.h1hi}>Hi, It`s Prince</h1>
            <h3>I`m <span className={styles.prince}>Prince</span> from Mintal</h3>
            <a href="https://www.facebook.com/"><button className={styles.stylebutton}>Facebook</button></a>
            <a href="https://www.youtube.com/"><button className={styles.stylebutton}>YouTube</button></a>
            <a href="https://www.instagram.com/"><button className={styles.stylebutton}>Instagram</button></a>
          </div>
        </div>

        <div className={styles.secondContainer}>
          <div>
            <h1 className={styles.h1hobby}><a id="hobby1"></a>My Hobbies</h1>
            <p>A gym, short for gymnasium (pl.: gymnasiums or gymnasia), is an indoor venue for exercise and sports. The word is derived from the ancient Greek term "gymnasion".[1] They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also the commonly used name for a "fitness centre" or health club, which is often an area for indoor recreation. A "gym" may include or describe adjacent open air areas as well. In Western countries, "gyms" often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestling, and with equipment and machines used for physical development training, or to do exercises. In many European countries, Gymnasium (and variations of the word) also can describe a secondary school that prepares students for higher education at a university, with or without the presence of athletic courts, fields, or equipment.</p>
          </div>
          <img src="gym.jpg" className={styles.gymPIC}></img>
        </div>


        <div>
          <textarea className={styles.textAREA}></textarea>
        </div>

 

      <footer className={styles.footer1}>
        <h4>POWERED BY GATORADE</h4>
      </footer>
    </div>
  );
}
