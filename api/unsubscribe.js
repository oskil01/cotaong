// api/unsubscribe.js
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Méthode non autorisée");
  }

  const { token } = req.query;
  const apiKey = process.env.BREVO_API_KEY;
  const jwtSecret = process.env.JWT_SECRET;

  if (!token) {
    return res.status(400).send("Token manquant.");
  }

  if (!apiKey || !jwtSecret) {
    return res.status(500).send("Configuration serveur manquante.");
  }

  try {
    // 1️⃣ Vérifier et décoder le token
    const decoded = jwt.verify(token, jwtSecret);
    const email = decoded.email;

    // 2️⃣ Supprimer le contact de la liste Brevo
    const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: "DELETE",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
      },
    });

    if (response.ok) {
      return res.status(200).send(`
        <h2>Désinscription réussie ✅</h2>
        <p>Vous ne recevrez plus nos newsletters à cette adresse : ${email}</p>
      `);
    } else {
      const data = await response.json();
      return res.status(response.status).send(`Erreur lors de la désinscription : ${data.message || "Erreur Brevo"}`);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send("Token invalide ou expiré.");
  }
}
