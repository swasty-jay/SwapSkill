import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function AccordionVariant() {
  const faqItems = [
    {
      value: "what-is-feedback",
      question: "What is Feedback?",
      answer:
        "Feedback is a comprehensive application designed to help organizations collect, analyze, and act on user feedback to improve their products and services.",
    },
    {
      value: "why-use-feedback",
      question: "Why should your organization use Feedback Application?",
      answer:
        "Our Feedback Application helps you gather valuable insights from your users, identify areas for improvement, and make data-driven decisions to enhance user experience.",
    },
    {
      value: "how-to-contact",
      question: "How to Contact Us?",
      answer:
        "You can reach out to us through multiple channels including email, phone, or by using the contact form on this page. We're here to help with any questions you may have.",
    },
    {
      value: "trust-level",
      question: "Trust Level of Feedback Application?",
      answer:
        "We maintain the highest security standards with enterprise-grade encryption, regular security audits, and compliance with international data protection regulations.",
    },
    {
      value: "what-is-feedback-2",
      question: "What is Feedback?",
      answer:
        "Feedback encompasses all forms of user input, suggestions, complaints, and recommendations that help organizations understand their customers' needs and experiences.",
    },
    {
      value: "why-use-feedback-2",
      question: "Why should your organization use Feedback Application?",
      answer:
        "Beyond basic feedback collection, our application provides advanced analytics, automated reporting, and integration capabilities that transform raw feedback into actionable business insights.",
    },
  ];

  return (
    <Accordion
      className="flex w-full flex-col space-y-2"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      {faqItems.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border border-gray-200 rounded-lg px-4 py-2 bg-white shadow-sm"
        >
          <AccordionTrigger className="w-full py-3 text-left hover:no-underline">
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-700 font-medium text-sm pr-4">
                {item.question}
              </div>
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">+</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <p className="pb-4 text-gray-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function Faqs() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
            Frequently Ask Question
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - FAQ */}
          <div className="space-y-4">
            <AccordionVariant />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-100 rounded-full opacity-50"></div>
              <div className="absolute top-16 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-70"></div>

              {/* Character Illustration */}
              <div className="relative z-10 flex justify-center mb-8">
                <div className="relative">
                  {/* Question mark bubble */}
                  <div className="absolute -top-8 -right-4 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">?</span>
                  </div>

                  {/* Character illustration */}
                  <div className="relative">
                    {/* Head */}
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full mx-auto mb-2 relative">
                      {/* Hair */}
                      <div className="absolute -top-2 left-2 w-12 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-full"></div>
                      {/* Eyes */}
                      <div className="absolute top-5 left-4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-5 right-4 w-2 h-2 bg-black rounded-full"></div>
                      {/* Smile */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-full"></div>
                    </div>

                    {/* Body */}
                    <div className="w-12 h-20 bg-gradient-to-b from-purple-500 to-purple-600 rounded-lg mx-auto relative">
                      {/* Arms */}
                      <div className="absolute -left-3 top-2 w-6 h-3 bg-pink-300 rounded-full rotate-45"></div>
                      <div className="absolute -right-3 top-2 w-6 h-3 bg-pink-300 rounded-full -rotate-45"></div>

                      {/* Legs */}
                      <div className="absolute -bottom-2 left-1 w-3 h-8 bg-pink-300 rounded-full"></div>
                      <div className="absolute -bottom-2 right-1 w-3 h-8 bg-pink-300 rounded-full"></div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-8 w-4 h-4 bg-cyan-300 rounded-full opacity-60"></div>
                    <div className="absolute top-8 -right-8 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-6 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
