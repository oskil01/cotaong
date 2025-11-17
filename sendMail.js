// api/sendMail.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { type, name, email, message, subject, complaint, suggestion } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY, // stockée dans les variables Vercel
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "COTA Website", email: "direction.cota@gmail.com" },
        to: [{ email: "direction.cota@gmail.com" }],
        replyTo: { email: email, name: name || "Visiteur" },
        subject: `Nouveau ${type} reçu via le site`,
        htmlContent: `
          <h3>Nouveau message (${type}) reçu depuis le site :</h3>
          ${name ? `<p><b>Nom :</b> ${name}</p>` : ""}
          ${email ? `<p><b>Email :</b> ${email}</p>` : ""}
          ${subject ? `<p><b>Objet :</b> ${subject}</p>` : ""}
          ${message ? `<p><b>Message :</b> ${message}</p>` : ""}
          ${complaint ? `<p><b>Plainte :</b> ${complaint}</p>` : ""}
          ${suggestion ? `<p><b>Suggestion :</b> ${suggestion}</p>` : ""}
        `,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error("Erreur Brevo:", data);
      return res.status(400).json({ success: false, error: data });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    return res.status(500).json({ success: false, error: "Erreur serveur" });
  }
}
