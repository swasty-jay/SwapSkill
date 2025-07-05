import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
  hasQuotes: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ankamah",
    avatar: "https://avatar.iran.liara.run/public/43",
    message:
      "I love how I can teach graphic design and learn photography without paying a pesewa. SwapSkill is the real deal.",
    hasQuotes: true,
  },
  {
    id: 2,
    name: "Ama Owusu",
    avatar: "https://avatar.iran.liara.run/public/28",
    message:
      "Who knew I’d be teaching hair braiding and getting Spanish lessons in return? SwapSkill's actually lit.",
    hasQuotes: true,
  },
  {
    id: 3,
    name: "Kwame",
    avatar: "https://avatar.iran.liara.run/public/25",
    message:
      "Bro, I literally traded guitar lessons for coding help — best decision ever. SwapSkill’s lowkey a game changer.",
    hasQuotes: true,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-4 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } space-y-6`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100  font-inter mb-6">
              What our <br />
              <span className="text-[#10B981] font-bold font-inter italic">
                learners say
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-roboto">
              Behind every skill is a story. At SwapSkill, real people from all
              walks of life are connecting, sharing knowledge, and unlocking new
              opportunities all without spending a dime. Whether you're
              teaching, learning, or simply curious, we're making skill exchange
              simple, exciting, and accessible for everyone. Join the movement
              because your next lesson could change your life.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse-slow" />
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-80 border-l border-white/10"></div>

          {/* RIGHT SIDE */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10
                  transition-all duration-300 hover:shadow-xl hover:scale-105 
                  hover:border-[#10B981]/20 cursor-pointer
                  ${
                    hoveredCard === testimonial.id
                      ? "ring-2 ring-[#10B981]/20"
                      : ""
                  }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  animationDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 shadow-md transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="font-bold text-[#10B981] text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-base">
                      <span className="italic text-gray-300">
                        "{testimonial.message}"
                      </span>
                    </p>
                  </div>

                  {testimonial.hasQuotes && (
                    <div className="flex-shrink-0 text-[#10B981]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`
                    mt-4 h-1 bg-gradient-to-r from-[#10B981] to-transparent rounded-full 
                    transition-all duration-300 
                    ${
                      hoveredCard === testimonial.id
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
