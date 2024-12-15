import { motion } from 'framer-motion'
import { Button } from '../components/Button/Button'
import styles from './index.module.css'

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoCtas}>
          <div className={styles.logo}>
            <div className={styles.landingPage}>
              <span className={styles.soft}>Soft</span>
              <span className={styles.journ}>Journ</span>
            </div>
          </div>
          <div className={styles.navigationMenu}>
            <div className={styles.button} />
          </div>
        </div>
        <Button>Get Started</Button>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.heroSection3}>
          <div className={styles.header}>
            <span className={styles.buildLiveLanding}>
              You Have Ideas. We Bring Them to Life.
            </span>
            <span className={styles.sayGoodbyeEndless}>
              We're a full-cycle consulting and software development company.
            </span>
          </div>
          <Button>Get Started</Button>
        </div>
        <div className={styles.desktopMockup}>
          <div className={styles.desktopGray}>
            <div className={styles.topSpeakerCam}>
              <div className={styles.rectangle} />
              <div className={styles.ellipse} />
              <div className={styles.ellipseA} />
            </div>
            <div className={styles.maskGroup}>
              <div className={styles.deviceScreen}>
                <div className={styles.browserBar}>
                  <div className={styles.group}>
                    <div className={styles.buttons}>
                      <div className={styles.ellipseB} />
                    </div>
                    <div className={styles.buttonsC}>
                      <div className={styles.ellipseD} />
                    </div>
                    <div className={styles.buttonsE}>
                      <div className={styles.ellipseF} />
                    </div>
                  </div>
                  <div className={styles.middleSearch}>
                    <div className={styles.rectangle10} />
                  </div>
                  <div className={styles.rectangle11} />
                </div>
                <div className={styles.image} />
              </div>
            </div>
            <div className={styles.device} />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className='item'
      >
        <div className={styles.features}>
          <div className={styles.headlineSubhead}>
            <span className={styles.features12}>Who We Are</span>
            <span className={styles.landingPageUi}>
              Softjourn turns ideas into software. We specialize in fintech,
              ticketing, and media, offering tailored solutions and staying
              ahead of tech trends. Focus on your business—we’ll handle the
              rest.{' '}
            </span>
          </div>
          <div className={styles.cardsRow}>
            <div className={styles.featureCard}>
              <div className={styles.cardInfo}>
                <div className={styles.icon}>
                  <div className={styles.magicWand} />
                </div>
                <div className={styles.text}>
                  <span className={styles.yearsExperience}>
                    17+ Years of Experience
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.featureCard13}>
              <div className={styles.cardInfo14}>
                <div className={styles.icon15}>
                  <div className={styles.flyingSaucer} />
                </div>
                <div className={styles.text16}>
                  <span className={styles.projectLaunches}>
                    1000+ Successful Project Launches
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.featureCard17}>
              <div className={styles.cardInfo18}>
                <div className={styles.icon19}>
                  <div className={styles.confetti} />
                </div>
                <div className={styles.text1a}>
                  <span className={styles.employees}>
                    300+
                    <br />
                    Employees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className='item'
      >
        <div className={styles.projects}>
          <div className={styles.headlineSubhead1b}>
            <span className={styles.discoverLatestWork}>Base Products</span>
            <span className={styles.explorePortfolio}>
              We deliver impactful software, combining expertise and experience
              for client success.
            </span>
          </div>
          <div className={styles.cardsRow1c}>
            <div className={styles.projectCard}>
              <div className={styles.image1d} />
              <div className={styles.text1e}>
                <span className={styles.projectTitle}>Venue Mapping Tool</span>
              </div>
            </div>
            <div className={styles.projectCard1f}>
              <div className={styles.image20} />
              <div className={styles.text21}>
                <span className={styles.projectTitle22}>Boca Printer</span>
              </div>
            </div>
            <div className={styles.projectCard23}>
              <div className={styles.image24} />
              <div className={styles.text25}>
                <span className={styles.projectTitle26}>
                  Access Control App
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className='item'
      >
        <div className={styles.testimonials}>
          <div className={styles.headlineSubhead27}>
            <span className={styles.realStories}>What Our Clients Say</span>
          </div>
          <div className={styles.cardsRow28}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialInfo}>
                <div className={styles.clientInfo}>
                  <div className={styles.image29} />
                  <div className={styles.personDetails}>
                    <span className={styles.uiDesignerBoo}>Ryan Power</span>
                    <span className={styles.ceoPaypartners}>
                      CEO at PayPartners
                    </span>
                  </div>
                </div>
                <div className={styles.text2a}>
                  <span className={styles.testimonial}>
                    The work Softjourn has done to this point has helped us
                    streamline our operations and has eliminated the need for us
                    to hire customer service reps. Through the efforts of
                    Softjourn we are able to extend more control to our clients
                    which allows them to better manage their payment process.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard2b}>
              <div className={styles.testimonialInfo2c}>
                <div className={styles.clientInfo2d}>
                  <div className={styles.image2e} />
                  <div className={styles.personDetails2f}>
                    <span className={styles.uiDesignerBoo30}>Peter Connor</span>
                    <span className={styles.coFounderBullet}>
                      Co-Founder at Bullet
                    </span>
                  </div>
                </div>
                <div className={styles.text31}>
                  <span className={styles.testimonial32}>
                    The CTO left the company after about eight years, and I
                    needed to replace him. I didn't want to replace him with a
                    single CTO because that created a single point of failure,
                    so I went back to Softjourn. You just can't run an SaaS
                    company without development work. Nearly every time I meet
                    someone, and they're having problems with developers, I tell
                    them "you need to call Softjourn". Softjourn just gives me
                    tremendous peace of mind, and I can't emphasize that enough.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className='item'
      >
        <div className={styles.footer}>
          <span className={styles.copyright}>© 2024 SoftJourn. </span>
        </div>
      </motion.div>
    </div>
  )
}
