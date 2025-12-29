import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2abe71c1/health", (c) => {
  return c.json({ status: "ok" });
});

// 🔥 SALVAR CADASTRO DO USUÁRIO
app.post("/make-server-2abe71c1/save-user", async (c) => {
  try {
    const body = await c.req.json();
    const { name, whatsapp, email } = body;
    
    if (!name || !whatsapp || !email) {
      return c.json({ error: "Todos os campos são obrigatórios" }, 400);
    }
    
    const userId = `user_${whatsapp.replace(/\D/g, '')}`;
    await kv.set(userId, {
      name,
      whatsapp,
      email,
      createdAt: new Date().toISOString()
    });
    
    console.log(`✅ Usuário salvo: ${name} (${whatsapp})`);
    return c.json({ success: true, userId });
  } catch (error) {
    console.error("❌ Erro ao salvar usuário:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// 🔥 SALVAR RESPOSTAS DO QUIZ
app.post("/make-server-2abe71c1/save-quiz", async (c) => {
  try {
    const body = await c.req.json();
    const { whatsapp, quizAnswers } = body;
    
    if (!whatsapp || !quizAnswers) {
      return c.json({ error: "WhatsApp e respostas são obrigatórios" }, 400);
    }
    
    const quizId = `quiz_${whatsapp.replace(/\D/g, '')}`;
    await kv.set(quizId, {
      whatsapp,
      quizAnswers,
      updatedAt: new Date().toISOString()
    });
    
    console.log(`✅ Quiz salvo para: ${whatsapp}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ Erro ao salvar quiz:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// 🔥 SALVAR VITÓRIA MARCADA
app.post("/make-server-2abe71c1/save-victory", async (c) => {
  try {
    const body = await c.req.json();
    const { whatsapp, area, victoryNote } = body;
    
    if (!whatsapp || !area) {
      return c.json({ error: "WhatsApp e área são obrigatórios" }, 400);
    }
    
    const victoryId = `victory_${whatsapp.replace(/\D/g, '')}_${area}_${Date.now()}`;
    await kv.set(victoryId, {
      whatsapp,
      area,
      victoryNote,
      completedAt: new Date().toISOString()
    });
    
    console.log(`✅ Vitória marcada: ${area} - ${whatsapp}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ Erro ao salvar vitória:", error);
    return c.json({ error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);
