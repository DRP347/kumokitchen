// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">
          Contact & Reservations
        </h1>
        <p className="text-gray-400 mt-4">
          Have a question or want to book a table? Send us a message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;