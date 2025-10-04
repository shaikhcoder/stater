import { useEffect, useRef } from "react";
import gsap from "gsap";
import MaskedDiv  from "@/components/ui/masked-div";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const teamRef = useRef(null);
  const memberRefs = useRef([]);

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
    .fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(teamRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(memberRefs.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.2 },
      "-=0.4"
    );
  }, []);

  const teamMembers = [
    {
      name: "",
      role: "",
      image: "",
      description: ""
    },
    {
      name: "",
      role: "",
      image: "",
      description: ""
    },
    {
      name: "",
      role: "",
      image: "",
      description: ""
    }
  ];

  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-card p-4 sm:p-8 rounded-md space-y-8">
      <div ref={sectionRef} className="w-full max-w-6xl">
        {/* Title */}
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-text-secondary">
          </h1>
          <div className="w-24 h-1 bg-btn-primary mx-auto rounded-full"></div>
        </div>

        {/* Project Description */}
        <div ref={descriptionRef} className="text-center space-y-6 mb-20">
          <p className="text-base sm:text-lg text-text-info max-w-4xl mx-auto leading-relaxed mb-4">
            lorem32
          </p>
          <p className="text-base sm:text-lg text-text-info max-w-4xl mx-auto leading-relaxed">
            Lorem23
          </p>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-secondary text-center mb-16">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => (memberRefs.current[index] = el)}
                className="text-center px-10"
              >
                <div className="w-32 h-32 mx-auto my-15">
                  <MaskedDiv>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      maskType="type-1"
                      size={0.45} 
                      onError={(e) => {
                        e.target.src = "/default_user.png";
                      }}
                    />
                  </MaskedDiv>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {member.name}
                </h3>
                <p className="text-btn-primary font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      </div>
    </section>
  );
};

export default AboutSection;
