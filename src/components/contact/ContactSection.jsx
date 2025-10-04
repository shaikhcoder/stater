import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const popupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    tl.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(titleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(inputRefs.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
      "-=0.3"
    );

    // Hover animations for form inputs
    inputRefs.current.forEach((inputRef) => {
      if (inputRef) {
        inputRef.addEventListener('mouseenter', () => {
          gsap.to(inputRef, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        inputRef.addEventListener('mouseleave', () => {
          gsap.to(inputRef, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      inputRefs.current.forEach((inputRef) => {
        if (inputRef) {
          inputRef.removeEventListener('mouseenter', () => {});
          inputRef.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  useEffect(() => {
    if (showSuccess && popupRef.current) {
      gsap.fromTo(popupRef.current,
        { 
          opacity: 0, 
          scale: 0.5, 
          y: 200,
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );

      // Auto-hide popup after 3 seconds
      const timer = setTimeout(() => {
        hideSuccessPopup();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const hideSuccessPopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 200,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setShowSuccess(false)
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.oo.live/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.note
        })
      });

      if (response.ok) {
        // Success - clear form and show popup
        setFormData({ name: '', email: '', note: '' });
        setShowSuccess(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to send message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-card p-4 sm:p-8 rounded-md space-y-8">
      <div ref={sectionRef} className="w-full max-w-4xl">
        {/* Title */}
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-text-secondary">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-text-info max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-btn-primary mx-auto rounded-full"></div>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="bg-card border border-border rounded-xl p-8 shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-card-foreground">
                Name *
              </label>
              <input
                ref={(el) => (inputRefs.current[0] = el)}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-btn-primary focus:border-transparent transition-all duration-200 hover:border-btn-primary/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
                Email *
              </label>
              <input
                ref={(el) => (inputRefs.current[1] = el)}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-btn-primary focus:border-transparent transition-all duration-200 hover:border-btn-primary/50"
                placeholder="Enter your email address"
              />
            </div>

            {/* Note Field */}
            <div className="space-y-2">
              <label htmlFor="note" className="block text-sm font-medium text-card-foreground">
                Message *
              </label>
              <textarea
                ref={(el) => (inputRefs.current[2] = el)}
                id="note"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-btn-primary focus:border-transparent transition-all duration-200 resize-none hover:border-btn-primary/50"
                placeholder="Tell us about your inquiry or feedback..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-btn-primary text-white font-semibold rounded-lg hover:bg-btn-highlight focus:outline-none focus:ring-2 focus:ring-btn-primary focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-card border border-border rounded-xl p-8 shadow-2xl max-w-md mx-4 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">
              Successfully Received!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your message. We'll get back to you soon!
            </p>
            <button
              onClick={hideSuccessPopup}
              className="px-6 py-2 bg-btn-primary text-white rounded-lg hover:bg-btn-highlight transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
