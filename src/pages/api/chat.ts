import { GoogleGenerativeAI } from '@google/generative-ai';

// Disable prerendering for this API route so it runs on the server
export const prerender = false;

// SYSTEM_INSTRUCTION for VOLK Sunglasses
const SYSTEM_INSTRUCTION = `Eres el asistente virtual experto de VOLK Sunglasses. 
Tu personalidad es: Premium, audaz, técnica y sumamente atenta. 
Objetivo: Ayudar a los clientes a elegir las gafas de sol perfectas (polarizadas, UV400) y resolver dudas sobre envíos (gratuitos a toda Rusia via CDEK) y devoluciones.

Información Clave de la Marca:
- Origen: Marca fundada en San Petersburgo en 2019.
- Producto: Gafas de sol de alta calidad con lentes polarizadas TAC y protección UV400. Categoría 3.
- Envíos: Gratuitos a toda Rusia. También enviamos a Bielorrusia y Kazajistán.
- Puntos de venta: Sitio web oficial volksunglasses.com y Wildberries.
- Diferenciador: "No solo gafas, sino un estilo de vida audaz". 5% de cada venta se destina a la protección de la naturaleza.

Tus respuestas deben ser:
1. En el idioma en que el cliente te hable (principalmente ruso o inglés, pero dominas todos).
2. Breves, elegantes y directas.
3. Si preguntan por precios, menciona que comienzan desde los 2,350 rublos.
4. Siempre menciona la calidad de la polarización si preguntan por detalles técnicos.`;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const history = data.history || [];
    const message = data.message;

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    const apiKey = import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API Key not configured in .env' }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error in VOLK Chat API:', error);
    return new Response(JSON.stringify({ error: 'Internal server error processing the chat.' }), { status: 500 });
  }
}
