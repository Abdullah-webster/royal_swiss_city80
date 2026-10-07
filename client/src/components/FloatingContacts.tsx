import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function FloatingContacts() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contacts = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/923004647979",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      external: true,
    },
    {
      id: "call",
      icon: Phone,
      label: "Call",
      href: "tel:+9242111777588",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      external: false,
    },
    {
      id: "email",
      icon: Mail,
      label: "Email",
      href: "mailto:info@royalswisscity.com",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      external: false,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Contact Buttons */}
      {isExpanded &&
        contacts.map((contact, index) => (
          <a
            key={contact.id}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center w-12 h-12 ${contact.bgColor} ${contact.hoverColor} text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110`}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
            aria-label={contact.label}
            title={contact.label}
          >
            <contact.icon className="w-5 h-5" />
          </a>
        ))}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 ${
          isExpanded ? "bg-gray-700" : "bg-amber-600"
        } hover:${isExpanded ? "bg-gray-800" : "bg-amber-700"} text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl`}
        title="Contact Options"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isExpanded ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
