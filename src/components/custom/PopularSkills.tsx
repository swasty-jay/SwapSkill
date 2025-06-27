// import { InfiniteSlider } from "../ui/infinite-slider";

import { InfiniteSlider } from "../ui/infinite-slider";

// export function PopularSkills() {
//   return (
//     <InfiniteSlider gap={24} speed={50} speedOnHover={20} reverse>
//       <img
//         src="data:image/jpeg;base64,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"
//         alt="Apple Music logo"
//         className="h-[120px] w-auto"
//       />
//       <img
//         src="/chrome_logo.svg"
//         alt="Chrome logo"
//         className="h-[120px] w-auto"
//       />
//       <img
//         src="/strava_logo.svg"
//         alt="Strava logo"
//         className="h-[120px] w-auto"
//       />
//       <img
//         src="/nintendo_logo.svg"
//         alt="Nintendo logo"
//         className="h-[120px] w-auto"
//       />
//       <img
//         src="/jquery_logo.svg"
//         alt="Jquery logo"
//         className="h-[120px] w-auto"
//       />
//       <img
//         src="/prada_logo.svg"
//         alt="Prada logo"
//         className="h-[120px] w-auto"
//       />
//     </InfiniteSlider>
//   );
// }

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={2} gap={34} speed={30} reverse>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[120px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}
