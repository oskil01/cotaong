// api/unsubscribe.js
import jwt from "jsonwebtoken";
import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  // Vérifie que la méthode est GET
  if (req.method !== "GET") {
    return res.status(405).send("Méthode non autorisée ❌");
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).send("<h1>Token manquant ❌</h1>");
  }

  try {
    // Vérifie et décode le token JWT
    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    if (!email) {
      return res.status(400).send("<h1>Email invalide dans le token ❌</h1>");
    }

    // Configuration de l'API Brevo
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const contactsApi = new SibApiV3Sdk.ContactsApi();

    // Supprime le contact
    await contactsApi.deleteContact(email);

    // Réponse HTML stylée
    return res.status(200).send(`
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f6fa;">
        <h1 style="color: #03337f;">Vous êtes désinscrit ✅</h1>
        <p style="color: #555;">Vous ne recevrez plus nos newsletters. Merci d'avoir été abonné.</p>
        <a href="https://cota-pink.vercel.app" style="display:inline-block; margin-top:20px; background-color:#03337f; color:#fff; padding:12px 25px; border-radius:50px; text-decoration:none;">Retour au site</a>
      </div>
    `);
  } catch (err) {
    console.error(err);
    return res.status(400).send(`
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f6fa;">
        <h1 style="color: #d9534f;">Token invalide ou expiré ❌</h1>
        <p style="color: #555;">Si vous souhaitez toujours vous désinscrire, réessayez depuis votre email.</p>
        <a href="https://cota-pink.vercel.app" style="display:inline-block; margin-top:20px; background-color:#03337f; color:#fff; padding:12px 25px; border-radius:50px; text-decoration:none;">Retour au site</a>
      </div>
    `);
  }
}
