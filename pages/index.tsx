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
        <div className={styles.cardPrintsContainer}>
          <a href='#' className={styles.cardPrints}>
            <div className={styles.cardPrintsTop}>
              <Image
                src="/images/3d_gear.png"
                width={261}
                height={269}
                alt="Picture of 3d printed gear"
                className={styles.gear}
                sizes="(max-width: 522px) 50vw,
                261px"
                style={{ width: '50vw', height: 'auto', maxWidth: 261 }}
              />
            </div>
            <div className={styles.cardPrintsBottom}>
              <Image
                src="/images/3d_robot.png"
                width={299}
                height={362}
                alt="Picture of 3d printed robot"
                className={styles.robot}
                sizes="(max-width: 598px) 50vw,
                299px"
                style={{ width: '50vw', height: 'auto', maxWidth: 299 }}
              />
              <Image
                src="/images/3d_soil_moisture_sensor_cap.png"
                width={407}
                height={350}
                alt="Picture of 3d printed soil moisture sensor cap"
                className={styles.moistureSensorCap}
                sizes="(max-width: 814px) 50vw,
                407px"
                style={{ width: '50vw', height: 'auto', maxWidth: 407 }}
              />
            </div>
            <div className={styles.cardPrintsInfo}>
              <h3 className={styles.cardHeader}>3D Objects</h3>
              <span className={styles.cardDescription}>Download & Print</span>
            </div>
          </a>
        </div>
        <div className={styles.cardWormBinContainer}>
          <a href='#' className={styles.cardWormBin}>
            <Image
              src="/images/wormBin.png"
              width={847}
              height={904}
              alt="Picture of smart worm bin"
              className={styles.wormBinImage}
              sizes="(max-width: 847px) 100vw,
              847px"
              style={{ width: '100vw', height: 'auto', maxWidth: 847 }}
            />
            <div className={styles.cardWormBinInfo}>
              <span className={styles.cardDescription}>Step by Step</span>
              <h3 className={styles.cardHeader}>Wormbin</h3>
            </div>
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href='#'>Wiggle Bin<span>Prototype</span></a></li>
            <li><a href='#'>Compost Bin <span>Electronics</span></a></li>
            <li><a href='#'>Sensing Water <span>Data</span></a></li>
            <li><a href='#'>3d objects <span>Electronics</span></a></li>
            <li><a href='#'>Weather sensor <span>Data</span></a></li>
          </ul>
        </nav>

        <div className={styles.tools}>
          <div className={styles.handWire}>
            <Image
              src="/images/handWire.png"
              width={692}
              height={1057}
              alt="Picture of hand holding a crocodile wire"
              className={styles.handWireImage}
              sizes="(max-width: 1384px) 50vw,
              692px"
              style={{ width: '50vw', height: 'auto', maxWidth: 692 }}
            />
          </div>
          <div className={styles.logoBig}>
            <Image
              src="/images/rabotaLogoBig.svg"
              width={266}
              height={315}
              alt="Logo or R from Rabota"
              className={styles.logoBigImage}
            />
          </div>
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
              width={765}
              height={898}
              alt="Picture of soldering iron"
              className={styles.solderingIron}
              sizes="(max-width: 1530px) 50vw,
              765px"
              style={{ width: '50vw', height: 'auto', maxWidth: 765 }}
            />
          </div>
          <div className={styles.sponge}>
            <Image
              src="/images/sponge.png"
              width={808}
              height={964}
              sizes="(max-width: 1400px) 50vw,
              700px"
              alt="Picture of soldering sponge"
              className={styles.spongeImage}
              style={{ width: '50vw', height: 'auto', maxWidth: 700 }}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <h5>Studio Rabota</h5>
          <h6><a href="#">Coding</a>, <a href="#">prototyping</a>, <a href="#">electronics</a>, <a href="#">open-source hardware</a></h6>
        </div>
      </div>
    </>
  )
}
