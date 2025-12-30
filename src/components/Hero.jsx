import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from 'gsap/all';
import React from 'react'

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });

    heroSplit.chars.forEach((chars) => chars.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05
    });
    gsap.from(paragraphSplit.lines, {
      duration: 1.8,
      yPercent: 100,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">FITNESS</h1>

        <img
          src="/public/images/hero-left-leaf.png"
          alt="left leaf "
          className="left-leaf"
        />
        <img
          src="/public/images/hero-right-leaf.png"
          alt="right leaf "
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Strong. Focused. Powerful.</p>
              <p className="subtitle">
                Train the Body <br /> Transform the Mind
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every workout program at our gym is a blend of expert coaching,
                modern equipment, and proven training methods — designed to
                transform your body and mind.
              </p>
              <a href="#programs">View Programs</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero