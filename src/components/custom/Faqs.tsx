import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is SwapSkill?",
    answer:
      "SwapSkill is a free platform where you can exchange your skills with others. Teach what you know, learn what you love — no money involved, just pure skill-sharing.",
  },
  {
    question: "How does SwapSkill work?",
    answer:
      "It's simple. Create your profile, list what you can teach, and explore skills you want to learn. Connect with other users and exchange knowledge — it's that easy!",
  },
  {
    question: "Is SwapSkill really free?",
    answer:
      "Absolutely! SwapSkill is 100% free to use. We believe learning and teaching should be accessible to everyone, no fees attached.",
  },
  {
    question: "Can I swap skills online?",
    answer:
      "Yes! You can meet people locally or connect virtually for your skill exchange sessions whatever works best for you.",
  },
  {
    question: "What kind of skills can I swap?",
    answer:
      "Literally anything coding, photography, language lessons, makeup tutorials, music, crafts, and more. If you can teach it, you can swap it!",
  },
];

export default function Faqs() {
  return (
    <div className="min-h-screen py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center bellefair mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Frequently Asked <span className="text-[#10B981]">Questions</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto belleza">
            Got questions? We’ve got answers! Learn more about how SwapSkill
            makes skill exchange simple, fun, and free.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          {/* Subtle animated background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse-slow" />
          </div>

          {/* Left Column - FAQ */}
          <div className="space-y-4 relative belleza z-10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <AccordionTrigger className="flex items-center justify-between text-left w-full text-gray-200 font-medium text-base hover:no-underline">
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="mt-3 text-gray-300 leading-relaxed text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
            <img
              src="/faqs.svg"
              alt="Skill sharing illustration"
              className="w-full max-w-md"
            />

            <div className="bg-white/10 backdrop-blur-md border bellefair border-white/20 rounded-2xl p-6 shadow-lg max-w-sm text-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                Didn’t find the answer you were looking for?
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Our team is always happy to help. Reach out and we'll get back
                to you as soon as possible.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#10B981] text-white font-medium rounded-xl hover:bg-[#0ea76b] transition-all shadow-md w-full"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
