const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_MESSAGE = "Olá, vim pela landing page da Holanda Assessoria e gostaria de atendimento.";

function buildWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
});
