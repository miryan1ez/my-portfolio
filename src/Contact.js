import React from "react";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaViber,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "./Navbar";

function Contact() {
  const contacts = [
    {
      name: "Discord",
      icon: <FaDiscord className="text-indigo-400 w-8 h-8" />,
      link: "https://discord.com/users/525331581674455041",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-400 w-8 h-8" />,
      link: "https://www.facebook.com/aaajkk",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-sky-400 w-8 h-8" />,
      link: "https://x.com/miryan1ez",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-400 w-8 h-8" />,
      link: "https://www.instagram.com/miryaniez",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-400 w-8 h-8" />,
      link: "https://wa.me/639993427665",
    },
    {
      name: "Viber",
      icon: <FaViber className="text-purple-400 w-8 h-8" />,
      link: "viber://chat?number=099931131710",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-300 w-8 h-8" />,
      link: "https://github.com/miryan1ez",
    },
    {
  name: "Gmail",
  icon: <FaEnvelope className="text-red-400 w-8 h-8" />,
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=vonvoltairepagsiat@gmail.com",
},

  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-poppins">
      <Navbar />

      {/* Centered container */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        {/* Intro Text */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-4xl font-bold mb-3 text-[#e0aaff]">Let’s Connect!</h2>
          <p className="text-lg text-gray-300 mb-4">
            Whether you want to collaborate, ask a question, or just say hi — feel
            free to reach out to me through any of the platforms below.
          </p>
          <p className="text-sm text-gray-400 italic">
            I usually reply fastest on Discord and Messenger 💬
          </p>
        </div>

        {/* Contact Box */}
        <div className="w-full max-w-3xl bg-gray-800 border border-[#e0aaff]/40 rounded-2xl p-8 shadow-lg hover:shadow-[#e0aaff]/30 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#e0aaff]">
            Reach Me On
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-gray-700/50 rounded-xl p-4 hover:bg-[#e0aaff]/10 hover:scale-105 transition-all border border-transparent hover:border-[#e0aaff]/40"
              >
                {contact.icon}
                <span className="mt-2 text-gray-300 hover:text-[#e0aaff] text-sm font-medium transition-colors">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
