export default function SponsoredSlider() {
  const sponsors = [
    {
      id: 1,
      name: "TechCorp",
      logo: "https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677",
    },
    {
      id: 2,
      name: "InnovateX",
      logo: "https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141",
    },
    {
      id: 3,
      name: "CloudSphere",
      logo: "https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf",
    },
    {
      id: 4,
      name: "DataFlow",
      logo: "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f",
    },
    {
      id: 5,
      name: "SecureNet",
      logo: "https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288",
    },
    {
      id: 6,
      name: "NextGen",
      logo: "https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520",
    },
  ];

  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="w-full  py-1">
      <div className="max-w-7xl mx-auto px-50">
        {/* Infinite Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 px-2 shadow-lg py-1">
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative  rounded-sm shadow-sm border border-gray-200/10 h-20  transition-all duration-300 ">
                  {/* Subtle gray overlay */}

                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-20 h-20 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50/10 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-100/10 to-transparent z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
// This component creates a sponsored slider showcasing various sponsors with their logos
