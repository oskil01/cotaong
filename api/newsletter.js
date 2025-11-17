// api/newsletter.js

import dotenv from 'dotenv';
dotenv.config();

import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { email } = req.body;
  const apiKey = process.env.BREVO_API_KEY;
  const jwtSecret = process.env.JWT_SECRET;

  if (!apiKey) {
    return res.status(500).json({ error: "Clé API Brevo manquante." });
  }

  if (!jwtSecret) {
    return res.status(500).json({ error: "Secret JWT manquant." });
  }

  try {
    // 1️⃣ Ajouter le contact à la liste Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [3], // Remplace par ton ID de liste Brevo
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "Erreur Brevo" });
    }

    // 2️⃣ Générer le token JWT pour le lien de désinscription
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: "7d" });

    // 3️⃣ Créer le lien unsubscribe
    const unsubscribeLink = `https://cota-pink.vercel.app/unsubscribe?token=${token}`;
    // Remplace "ton-domaine.com" par ton vrai domaine de production

    // 4️⃣ Envoyer le mail de remerciement via Brevo
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
    sender: { name: "COTA", email: "direction.cota@gmail.com" },
    to: [{ email }],
    templateId: 1, // ton template créé sur Brevo
    params: {
      unsubscribe_link: unsubscribeLink,
    },
  }),
});

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur serveur lors de l'inscription." });
  }
}
