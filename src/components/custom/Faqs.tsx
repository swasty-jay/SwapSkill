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
    <section className="py-8 px-2 sm:px-5 lg:px-7 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
            <span className="text-[#10B981] uppercase tracking-wider text-sm font-semibold belleza">
              FAQ
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black cinzel text-white mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">
              Questions
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl belleza max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers! Learn more about how SwapSkill
            makes skill exchange simple, fun, and accessible for everyone.
          </p>
        </div>

        {/* Main Content with Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
          {/* Left Column - Enhanced FAQ Accordion */}
          <div className="space-y-4 relative z-10">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border-none"
                >
                  <AccordionTrigger
                    className="flex items-start gap-6 p-6 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800
                      transition-all duration-300 hover:border-[#10B981]/20 hover:shadow-lg hover:shadow-[#10B981]/5 text-left w-full
                      data-[state=open]:rounded-b-none"
                  >
                    <span className="flex-1 text-lg text-white font-medium bellefair group-hover:text-[#10B981] transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-6 pt-2 bg-gray-900/80 backdrop-blur-xl border-x border-b border-gray-800 
                    rounded-b-2xl text-gray-300 belleza text-base leading-relaxed"
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Enhanced Illustration and CTA */}
          <div className="lg:sticky lg:top-8 space-y-8 relative z-10 ">
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/10 to-transparent blur-2xl rounded-full" />
              <img
                src="/faqs.svg"
                alt="Skill sharing illustration"
                className="relative w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 
              hover:border-[#10B981]/20 transition-all duration-300 max-w-md mx-auto shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white bellefair mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 belleza mb-6 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to
                help. We'll get back to you as soon as possible.
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r 
                  from-[#10B981] to-[#059669] text-white text-lg font-semibold rounded-xl shadow-lg 
                  hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10">Contact Support</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
