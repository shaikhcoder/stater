import HeroSection from "../components/home/HeroSection";
import Carousel from "../components/ui/Components/Carousel/Carousel"
import DownloadSection from "../components/download/DownloadSection";
import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const downloadSection = document.getElementById('download');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (downloadSection) {
        const rect = downloadSection.getBoundingClientRect();
        // Show button only when download section is visible AND we're not at the top
        setShowScrollTop(rect.top < window.innerHeight && scrollTop > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations for scroll-to-top button
  useEffect(() => {
    if (showScrollTop && scrollTopRef.current) {
      // Button appears with scale and fade animation
      gsap.fromTo(scrollTopRef.current, 
        { 
          opacity: 0, 
          scale: 0, 
          y: 100
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        }
      );
    } else if (!showScrollTop && scrollTopRef.current) {
      // Button disappears with scale and fade animation
      gsap.to(scrollTopRef.current, {
        opacity: 0,
        scale: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [showScrollTop]);

  const scrollToTop = () => {
    // Animate the button on click
    if (scrollTopRef.current) {
      gsap.to(scrollTopRef.current, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.in",
        yoyo: true,
        repeat: 1
      });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  gsap.to('#cards',{
    opacity:1,
    duration:1,
    ease:'sine.in'
  })

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section - Full Screen */}
      <div className="min-h-screen w-full flex flex-col sm:flex-row">
        <div className="w-full max-w-3xl flex justify-center items-center">
          <div className="p-2">
            <HeroSection />
          </div>
        </div>

        <div className="w-full flex items-center justify-center opacity-1" id='cards'>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
      
      {/* Download Section - Full Screen */}
      <div className="w-full">
        <DownloadSection />
      </div>

      {/* About Section - Full Screen */}
      <div className="w-full">
        <AboutSection />
      </div>

      {/* Contact Section - Full Screen */}
      <div className="w-full">
        <ContactSection />
      </div>

      {/* Scroll to Top Button with GSAP Animation */}
      {showScrollTop && (
        <button
          ref={scrollTopRef}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-btn-primary text-white rounded-full shadow-lg hover:bg-btn-highlight transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Home;
