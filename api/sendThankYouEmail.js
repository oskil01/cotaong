// api/sendThankYouEmail.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const API_KEY = process.env.VITE_BREVO_API_KEY; // clé API Brevo
  const SENDER_EMAIL = "direction.cota@gmail.com"; // ton email
  const SENDER_NAME = "COTA Newsletter";

  // Contenu HTML de l'email
  const htmlContent = `
    <div style="font-family:sans-serif; line-height:1.6; color:#333;">
      <h2>Merci pour votre inscription, ${name || "cher abonné"} !</h2>
      <p>Nous sommes ravis de vous compter parmi nos abonnés.</p>
      <p>Vous recevrez bientôt toutes nos actualités, opportunités et formations directement dans votre boîte mail.</p>
      <p style="margin-top:20px;">— L'équipe COTA</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        sender: { email: SENDER_EMAIL, name: SENDER_NAME },
        to: [{ email }],
        subject: "Merci pour votre inscription à notre Newsletter !",
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo Error:", errorData);
      return res.status(500).json({ error: "Impossible d'envoyer l'email." });
    }

    return res.status(200).json({ message: "Email de remerciement envoyé avec succès !" });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Erreur serveur lors de l'envoi de l'email." });
  }
}
