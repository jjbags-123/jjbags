

'use client';
import { motion } from 'framer-motion';
import { FaLeaf, FaAward, FaUsers } from 'react-icons/fa';
import { FiTarget, FiAward, FiUsers, FiShield } from 'react-icons/fi';
import Image from 'next/image';
import { CtaSection } from '@/components/cta';
import { AnimatedSection } from '@/components/animated-section';
import { AnimatedCounter } from '@/components/animated-counter';

const missionData = {
  title: "Our Mission",
  content: "We are dedicated to crafting premium, eco-friendly bags that blend sustainability with style. Our mission is to provide a green alternative to plastic without compromising on quality or design.",
  image: "/images/our-mission.webp",
  alt: "Hands holding a sprout, symbolizing our mission for a greener planet"
}

const originData = {
  title: "Our Origin",
  timeline: [
    {
      title: "The Beginning",
      content: "JJ Bags was born out of a simple yet powerful mission — to replace single-use plastics with eco-friendly, stylish, and durable alternatives. What started as a small initiative has grown into a purposeful journey, driven by the belief that everyday products can be both functional and sustainable."
    },
    {
      title: "Our Approach",
      content: "By choosing premium natural fabrics and ethical production methods, we have positioned ourselves as a brand that blends responsibility with modern design."
    }
  ]
};

const craftsmanshipData = {
  title: "Craftsmanship",
  description: "Every JJ Bag is a result of careful craftsmanship. From the first cut of jute or juco fabric to the final stitch, our artisans ensure precision and durability in every detail. The textures of natural fibers give each bag a unique character, while our quality standards guarantee long-lasting strength.",
  cards: [
    {
      icon: <FaLeaf />,
      title: "Natural Fiber Expertise",
      content: "Premium jute and juco fabrics selected for quality and sustainability"
    },
    {
      icon: <FiTarget />,
      title: "Artisan Precision",
      content: "Skilled craftspeople ensuring every detail meets our high standards"
    },
    {
      icon: <FiAward />,
      title: "Quality Standards",
      content: "Rigorous testing and quality control for lasting durability"
    },
    {
      icon: <FiShield />,
      title: "Durability Focus",
      content: "Built to withstand daily use while maintaining their character"
    }
  ]
}

const sustainabilityData = {
    title: "Sustainability",
    content: "At JJ Bags, sustainability is at the heart of everything we do. We adopt clean, eco-conscious processes that reduce waste, conserve energy, and minimize our carbon footprint.",
    features: ["Renewable raw materials", "Biodegradable inks and dyes", "Energy conservation", "Waste reduction"],
    image: "/images/sustainability.webp",
    alt: "A lush green leaf, representing our commitment to sustainability"
};

const fairPracticesData = {
    title: "Fair Practices",
    content: "We believe that sustainability goes beyond materials — it includes people too. Our bags are made under fair labor standards, where workers are provided with safe working conditions, fair wages, and respect. We partner with communities that share our values, empowering artisans and supporting livelihoods.",
    image: "/images/fair-practices.webp",
    alt: "Two people shaking hands, symbolizing our commitment to fair practices"
};

const innovationData = {
  title: "Innovation",
  content: "Innovation drives our designs. We continually explore new textures, materials, and eco-friendly techniques to stay ahead of trends while staying true to sustainability. From experimenting with blends of jute and cotton to incorporating reusable and multi-purpose designs, we push boundaries to create bags that are as fashionable as they are functional.",
  image: "/images/innovation.webp",
  alt: "A lightbulb glowing, representing innovation in design"
};

const globalReachData = {
    title: "Global Reach",
    content: "From local markets to international shelves, JJ Bags has grown into a globally trusted brand. Our products are exported worldwide, serving diverse industries such as retail, events, hospitality, and fashion. This global presence reflects not just our product quality but also our commitment to universal sustainability.",
    image: "/images/global-reach.webp",
    alt: "A map of the world, showing our global reach"
};

const customizationData = {
    title: "Customization",
    content: "We understand that every brand has its own story. That's why we provide extensive customization options — from sizes and colors to unique prints and branding elements. Businesses can showcase their identity while staying eco-conscious, and individuals can own bags that reflect their personal style.",
    image: "/images/customization.webp",
    alt: "A color palette, representing customization options"
};

const futureData = {
    title: "Our Future",
    content: "We see our journey as just the beginning. JJ Bags is committed to scaling sustainable solutions and driving innovation in eco-friendly alternatives. Our vision includes expanding into new product categories, exploring advanced biodegradable materials, and building stronger community partnerships. More than just a company, we aim to inspire a global shift towards responsible living — where sustainability is not an option, but a way of life."
};

const valuesData = {
  title: "Our Core Values",
  description: "The principles that guide our work and our impact.",
  values: [
    { icon: <FaLeaf />, name: "Sustainability", description: "Committed to eco-friendly materials and processes that protect our planet." },
    { icon: <FaAward />, name: "Quality Craftsmanship", description: "Ensuring every bag is durable, stylish, and made to the highest standards." },
    { icon: <FaUsers />, name: "Ethical Responsibility", description: "Supporting fair wages, safe conditions, and empowered communities." }
  ]
};

const impactData = {
    title: "Eco Impact",
    description: "Each JJ Bag makes a measurable difference",
    metrics: [
        { target: 1000, label: "Plastic Bags Saved", description: "per reusable bag", suffix: "+" },
        { target: 95, label: "Carbon Footprint Reduced", description: "vs. plastic alternatives", suffix: "%" },
        { target: 50, label: "Communities Empowered", description: "artisan partnerships", suffix: "+" },
        { target: 75, label: "Global Markets Served", description: "countries worldwide", suffix: "+" }
    ]
}

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">About JJ Bags</h1>
          <p className="hero-tagline">Premium Eco-Friendly Bags</p>
          <a href="#mission" className="hero-cta">Explore Our Story</a>
        </div>
      </section>

      <AnimatedSection as="section" className="section mission-section" id="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">{missionData.title}</h2>
              <p className="section-content">{missionData.content}</p>
            </div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <Image src={missionData.image} alt={missionData.alt} fill className="object-cover"/>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="section journey-section" id="origin">
        <div className="container">
          <h2 className="section-title">{originData.title}</h2>
          {originData.timeline.map((item, index) => (
             <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
              <h3 className="text-2xl mb-4 font-semibold text-foreground">{item.title}</h3>
              <p className="section-content">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="section" id="craftsmanship">
        <div className="container">
          <h2 className="section-title">{craftsmanshipData.title}</h2>
          <p className="section-content mb-12">{craftsmanshipData.description}</p>
          <div className="craftsmanship-grid">
            {craftsmanshipData.cards.map((card, index) => (
               <motion.div 
                  key={index} 
                  className="craft-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <div className="craft-icon text-primary text-4xl">{card.icon}</div>
                <h3 className="craft-title">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="section bg-eco-green-light">
          <div className="container">
              <div className="split-section">
                  <div className="split-content">
                      <h2 className="section-title">{sustainabilityData.title}</h2>
                      <p className="section-content">{sustainabilityData.content}</p>
                      <ul className="feature-list">
                          {sustainabilityData.features.map((feature, i) => <li key={i} className="feature-item">{feature}</li>)}
                      </ul>
                  </div>
                  <div className="split-visual relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                      <Image src={sustainabilityData.image} alt={sustainabilityData.alt} fill className="object-cover"/>
                  </div>
              </div>
          </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="section">
          <div className="container">
              <div className="split-section">
                   <div className="split-visual relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                      <Image src={fairPracticesData.image} alt={fairPracticesData.alt} fill className="object-cover"/>
                  </div>
                  <div className="split-content">
                      <h2 className="section-title">{fairPracticesData.title}</h2>
                      <p className="section-content">{fairPracticesData.content}</p>
                  </div>
              </div>
          </div>
      </AnimatedSection>
      
       <AnimatedSection as="section" className="section bg-card" id="values">
        <div className="container">
          <h2 className="section-title text-center">{valuesData.title}</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">{valuesData.description}</p>
          <div className="values-grid">
            {valuesData.values.map((value, index) => (
              <motion.div 
                  key={index} 
                  className="value-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <span className="value-icon text-primary">{value.icon}</span>
                <h3 className="value-name">{value.name}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="section impact-section" id="impact">
        <div className="container">
            <h2 className="section-title text-center">{impactData.title}</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">{impactData.description}</p>
            <div className="metrics-grid">
                {impactData.metrics.map((metric, index) => (
                    <motion.div 
                      key={index} 
                      className="metric-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <AnimatedCounter target={metric.target} suffix={metric.suffix} />
                        <div className="metric-label">{metric.label}</div>
                        <div className="metric-description">{metric.description}</div>
                    </motion.div>
                ))}
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="section">
        <div className="container">
            <div className="split-section">
                <div className="split-content">
                    <h2 className="section-title">{innovationData.title}</h2>
                    <p className="section-content">{innovationData.content}</p>
                </div>
                <div className="split-visual relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <Image src={innovationData.image} alt={innovationData.alt} fill className="object-cover"/>
                </div>
            </div>
        </div>
      </AnimatedSection>
      
       <AnimatedSection as="section" className="section bg-secondary/80">
        <div className="container">
            <div className="split-section">
                 <div className="split-visual relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <Image src={globalReachData.image} alt={globalReachData.alt} fill className="object-cover"/>
                </div>
                <div className="split-content">
                    <h2 className="section-title">{globalReachData.title}</h2>
                    <p className="section-content">{globalReachData.content}</p>
                </div>
            </div>
        </div>
      </AnimatedSection>

       <AnimatedSection as="section" className="section">
        <div className="container">
            <div className="split-section">
                <div className="split-content">
                    <h2 className="section-title">{customizationData.title}</h2>
                    <p className="section-content">{customizationData.content}</p>
                </div>
                <div className="split-visual relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <Image src={customizationData.image} alt={customizationData.alt} fill className="object-cover"/>
                </div>
            </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="section bg-eco-green-light" id="future">
        <div className="container">
          <h2 className="section-title text-center">{futureData.title}</h2>
          <p className="section-content text-center max-w-4xl mx-auto">{futureData.content}</p>
        </div>
      </AnimatedSection>

      <CtaSection />
    </>
  );
}
