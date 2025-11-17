// /api/sendEmail.js
// Serverless function compatible Vercel (Node runtime) - pas d'Express nécessaire

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const apiKey = process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
  if (!apiKey) {
    console.error("Clé BREVO_API_KEY manquante sur le serveur.");
    return res.status(500).json({ error: "Clé API manquante." });
  }

  try {
    // req.body devrait être parsé automatiquement par Vercel (si non, utiliser await getRawBody)
    const {
      name = "",
      email = "",
      message = "",
      subject = "",
      complaint = "",
      suggestion = "",
      type = "contact"
    } = req.body || {};

    const htmlContent = `
      <h3>Nouveau message (${type}) reçu depuis le site :</h3>
      ${name ? `<p><b>Nom :</b> ${name}</p>` : ""}
      ${email ? `<p><b>Email :</b> ${email}</p>` : ""}
      ${subject ? `<p><b>Objet :</b> ${subject}</p>` : ""}
      ${message ? `<p><b>Message :</b> ${message}</p>` : ""}
      ${complaint ? `<p><b>Plainte :</b> ${complaint}</p>` : ""}
      ${suggestion ? `<p><b>Suggestion :</b> ${suggestion}</p>` : ""}
    `;

    const payload = {
      sender: { name: "COTA Website", email: "direction.cota@gmail.com" },
      to: [{ email: "direction.cota@gmail.com" }],
      subject: `Nouveau ${type} reçu via le site`,
      htmlContent
    };

    if (email) {
      payload.replyTo = { email, name: name || "Visiteur" };
    }

    // Appel à Brevo
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const brevoText = await brevoRes.text();
    let brevoJson = null;
    try { brevoJson = JSON.parse(brevoText); } catch (e) { /* not json */ }

    if (!brevoRes.ok) {
      console.error("Brevo error:", brevoRes.status, brevoText);
      return res.status(400).json({ error: "Erreur lors de l'envoi via Brevo.", details: brevoJson || brevoText });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur serveur /api/sendEmail:", err);
    return res.status(500).json({ error: "Erreur interne du serveur." });
  }
}
