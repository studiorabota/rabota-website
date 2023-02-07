import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Rabota | Coding, education, prototyping and artistic-scientific experimentation</title>
        <meta name="description" content="Studio Rabota is a studio specialized in code, rapid-prototyping and artistic-scientific experimentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.intro}><span>S</span>tudio <span>R</span>abota | Coding, prototyping, electronics, open-source hardware 🪱 and some artistic-scientific experimentation <span className={styles.virus}>🦠</span></h1>
        <div className={styles.footer}>
          <h5>Studio Rabota</h5>
          <h6><a href="#">Coding</a>, <a href="#">prototyping</a>, <a href="#">electronics</a>, <a href="#">open-source hardware</a></h6>
        </div>
      </div>
      <div className={styles.handWire}>
        <Image
          src="/images/handWire.png"
          width={785}
          height={1202}
          alt="Picture of hand holding a crocodile wire"
          className={styles.handWireImage}
        />
      </div>
      <div className={styles.logoBig}>
        <Image
          src="/images/rabotaLogoBig.png"
          width={808}
          height={808}
          alt="Logo or R from Rabota"
          className={styles.logoBigImage}
        />
      </div>
      <a href='#' className={styles.cardWormBin}>
        <Image
          src="/images/wormBin.png"
          width={847}
          height={904}
          alt="Picture of smart worm bin"
          className={styles.wormBinImage}
        />
        <div className={styles.cardWormBinInfo}>
          <span className={styles.cardDescription}>Step by Step</span>
          <h3 className={styles.cardHeader}>Wormbin</h3>
        </div>
      </a>
      <nav className={styles.nav}>
        <ul>
          <li><a href='#'>Wiggle Bin<span>Prototype</span></a></li>
          <li><a href='#'>Compost Bin <span>Electronics</span></a></li>
          <li><a href='#'>Sensing Water <span>Data</span></a></li>
          <li><a href='#'>3d objects <span>Electronics</span></a></li>
          <li><a href='#'>Weather sensor <span>Data</span></a></li>
        </ul>
      </nav>
      <a href='#' className={styles.cardPrints}>
        <Image
          src="/images/3d_gear.png"
          width={261}
          height={269}
          alt="Picture of 3d printed gear"
          className={styles.gear}
        />
        <Image
          src="/images/3d_robot.png"
          width={299}
          height={362}
          alt="Picture of 3d printed robot"
          className={styles.robot}
        />
        <Image
          src="/images/3d_soil_moisture_sensor_cap.png"
          width={407}
          height={350}
          alt="Picture of 3d printed soil moisture sensor cap"
          className={styles.moistureSensorCap}
        />
        <div className={styles.cardPrintsInfo}>
          <h3 className={styles.cardHeader}>3D Objects</h3>
          <span className={styles.cardDescription}>Download & Print</span>
        </div>
      </a>
      <div className={styles.soldering}>
        <div className={styles.smokeWrap}>
          <Image
            src="/images/smoke.png"
            width={112}
            height={2232}
            alt="Picture of smoke from soldering iron"
            className={styles.smoke}
          />
        </div>
        <div className={styles.smokeWrap}>
          <Image
            src="/images/smoke.png"
            width={112}
            height={2232}
            alt="Another picture of smoke from soldering iron"
            className={styles.smoke}
          />
        </div>
        <div className={styles.smokeWrap}>
          <Image
            src="/images/smoke.png"
            width={112}
            height={2232}
            alt="One more picture of smoke from soldering iron"
            className={styles.smoke3}
          />
        </div>
        <Image
          src="/images/solderingIron.png"
          width={1092}
          height={1042}
          alt="Picture of soldering iron"
          className={styles.solderingIron}
        />
      </div>
      <div className={styles.sponge}>
        <Image
          src="/images/sponge.png"
          width={808}
          height={964}
          alt="Picture of soldering sponge"
          className={styles.spongeImage}
        />
      </div>
    </>
  )
}
