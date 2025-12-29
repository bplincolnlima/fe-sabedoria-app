import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { RegisterScreen } from "./components/RegisterScreen";
import { HomeScreen } from "./components/HomeScreen";
import { QuizScreen } from "./components/QuizScreen";
import { RewardCard } from "./components/RewardCard";
import { SummaryScreen } from "./components/SummaryScreen";
import { MyProjectScreen } from "./components/MyProjectScreen";
import { saveUser, saveQuiz, saveVictory } from "../utils/api";
import { useNotifications } from "./hooks/useNotifications";

export type Screen =
  | "splash"
  | "welcome"
  | "register"
  | "home"
  | "quiz-familiar"
  | "quiz-espiritual"
  | "quiz-financeira"
  | "quiz-saude"
  | "quiz-crescimento"
  | "reward-familiar"
  | "reward-espiritual"
  | "reward-financeira"
  | "reward-saude"
  | "reward-crescimento"
  | "summary"
  | "my-project";

export interface UserData {
  name: string;
  whatsapp: string;
  email: string;
}

export interface QuizAnswers {
  familiar: {
    selected?: string;
    text?: string;
    completed?: boolean;
    victoryNote?: string;
    completedDate?: string;
  };
  espiritual: {
    selected?: string;
    text?: string;
    completed?: boolean;
    victoryNote?: string;
    completedDate?: string;
  };
  financeira: {
    selected?: string;
    text?: string;
    completed?: boolean;
    victoryNote?: string;
    completedDate?: string;
  };
  saude: {
    selected?: string;
    text?: string;
    completed?: boolean;
    victoryNote?: string;
    completedDate?: string;
  };
  crescimento: {
    selected?: string;
    text?: string;
    completed?: boolean;
    victoryNote?: string;
    completedDate?: string;
  };
}

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("splash");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    familiar: {},
    espiritual: {},
    financeira: {},
    saude: {},
    crescimento: {},
  });
  const [projectCompleted, setProjectCompleted] =
    useState(false);

  // 🔔 Hook de Notificações
  const { notifications, requestPermission } = useNotifications();

  // ✅ Solicitar permissão de notificações quando chegar na home
  useEffect(() => {
    if (currentScreen === 'home' && userData.name) {
      // Aguarda 2 segundos para não interromper a experiência
      setTimeout(() => {
        requestPermission().then((granted) => {
          if (granted) {
            // Envia notificação de boas-vindas
            notifications.welcome();
          }
        });
      }, 2000);
    }
  }, [currentScreen, userData.name]);

  // Auto-advance from splash screen
  useState(() => {
    if (currentScreen === "splash") {
      setTimeout(() => setCurrentScreen("welcome"), 2500);
    }
  });

  const updateQuizAnswer = (
    area: keyof QuizAnswers,
    data: { selected?: string; text?: string },
  ) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [area]: { ...prev[area], ...data },
    }));
  };

  // 🔥 SALVAR QUIZ AUTOMATICAMENTE quando completar
  useEffect(() => {
    if (
      userData.whatsapp &&
      Object.values(quizAnswers).some((a) => a.selected)
    ) {
      saveQuiz(userData.whatsapp, quizAnswers).catch(
        console.error,
      );
      
      // 🔔 Se completou todas as 5 áreas, envia notificação
      const allCompleted = Object.values(quizAnswers).filter(a => a.selected).length === 5;
      if (allCompleted && currentScreen === 'summary') {
        notifications.quizCompleted();
      }
    }
  }, [quizAnswers, userData.whatsapp, currentScreen]);

  const updateChallengeProgress = (
    area: keyof QuizAnswers,
    data: {
      completed?: boolean;
      victoryNote?: string;
      completedDate?: string;
    },
  ) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [area]: { ...prev[area], ...data },
    }));

    // 🔥 SALVAR VITÓRIA quando marcar como concluído
    if (data.completed && userData.whatsapp) {
      saveVictory(
        userData.whatsapp,
        area,
        data.victoryNote,
      ).catch(console.error);
      
      // 🔔 Enviar notificação de vitória
      const areaNames: Record<string, string> = {
        familiar: 'Área Familiar',
        espiritual: 'Área Espiritual',
        financeira: 'Área Financeira',
        saude: 'Área de Saúde',
        crescimento: 'Área de Crescimento'
      };
      notifications.victoryMarked(areaNames[area] || area);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentScreen === "splash" && <SplashScreen />}
        {currentScreen === "welcome" && (
          <WelcomeScreen
            onStart={() => setCurrentScreen("register")}
          />
        )}
        {currentScreen === "register" && (
          <RegisterScreen
            userData={userData}
            onUpdate={setUserData}
            onComplete={() => setCurrentScreen("home")}
          />
        )}
        {currentScreen === "home" && (
          <HomeScreen
            onNavigate={setCurrentScreen}
            userName={userData.name}
            projectCompleted={projectCompleted}
          />
        )}
        {currentScreen === "quiz-familiar" && (
          <QuizScreen
            area="familiar"
            title="Área Familiar"
            question="Qual conflito ou distância você quer superar na sua família em 2026?"
            subtitle="Identifique o que precisa ser curado ou restaurado"
            options={[
              "Distância ou falta de convivência",
              "Conflitos não resolvidos",
              "Falta de diálogo verdadeiro",
              "Mágoas ou feridas do passado",
            ]}
            currentAnswer={quizAnswers.familiar}
            onUpdate={(data) =>
              updateQuizAnswer("familiar", data)
            }
            onNext={() => setCurrentScreen("reward-familiar")}
            onBack={() => setCurrentScreen("home")}
            progress={20}
          />
        )}
        {currentScreen === "reward-familiar" && (
          <RewardCard
            area="familiar"
            title="Área Familiar"
            selectedOption={quizAnswers.familiar.selected || ""}
            bibleVerse="Ele converterá o coração dos pais aos filhos e o coração dos filhos a seus pais."
            bibleReference="Malaquias 4:6"
            propheticMessage="Deus está quebrando muralhas e curando feridas na sua família! Em 2026, você verá restauração onde havia distância, diálogo onde havia silêncio, e amor onde havia mágoa. O Senhor está unindo corações e trazendo paz duradoura. Esta vitória será sua!"
            onContinue={() =>
              setCurrentScreen("quiz-espiritual")
            }
            color="from-blue-500 to-indigo-600"
            icon="👨‍👩‍👧‍👦"
          />
        )}
        {currentScreen === "quiz-espiritual" && (
          <QuizScreen
            area="espiritual"
            title="Área Espiritual"
            question="Qual fraqueza espiritual você quer vencer em 2026?"
            subtitle="Identifique onde sua fé precisa crescer e amadurecer"
            options={[
              "Inconstância na oração e leitura",
              "Dúvidas e falta de clareza",
              "Fé fraca ou insegurança espiritual",
              "Frieza ou distância de Deus",
            ]}
            currentAnswer={quizAnswers.espiritual}
            onUpdate={(data) =>
              updateQuizAnswer("espiritual", data)
            }
            onNext={() => setCurrentScreen("reward-espiritual")}
            onBack={() => setCurrentScreen("reward-familiar")}
            progress={40}
          />
        )}
        {currentScreen === "reward-espiritual" && (
          <RewardCard
            area="espiritual"
            title="Área Espiritual"
            selectedOption={
              quizAnswers.espiritual.selected || ""
            }
            bibleVerse="Se eu fortificar em ti, porque tu és a minha força."
            bibleReference="Salmos 18:1"
            propheticMessage="O Espírito Santo está despertando em você uma fé inabalável! Em 2026, a inconstância dará lugar à disciplina, a dúvida será vencida pela certeza, e a frieza será consumida pelo fogo de Deus. Você crescerá espiritualmente e verá frutos que nunca viu antes. Prepare-se para um novo nível!"
            onContinue={() =>
              setCurrentScreen("quiz-financeira")
            }
            color="from-purple-500 to-pink-600"
            icon="🙏"
          />
        )}
        {currentScreen === "quiz-financeira" && (
          <QuizScreen
            area="financeira"
            title="Área Financeira"
            question="Qual problema financeiro você vai resolver em 2026?"
            subtitle="Identifique o que te impede de ter paz e estabilidade"
            options={[
              "Dívidas ou contas atrasadas",
              "Desorganização e falta de controle",
              "Medo ou ansiedade com dinheiro",
              "Instabilidade e falta de reservas",
            ]}
            currentAnswer={quizAnswers.financeira}
            onUpdate={(data) =>
              updateQuizAnswer("financeira", data)
            }
            onNext={() => setCurrentScreen("reward-financeira")}
            onBack={() => setCurrentScreen("reward-espiritual")}
            progress={60}
          />
        )}
        {currentScreen === "reward-financeira" && (
          <RewardCard
            area="financeira"
            title="Área Financeira"
            selectedOption={
              quizAnswers.financeira.selected || ""
            }
            bibleVerse="O que pede emprestado, e não paga, é ímpio, mas o justo se compadece e dá."
            bibleReference="Salmos 37:21"
            propheticMessage="Deus está trazendo sabedoria e libertação financeira sobre sua vida! Em 2026, você vencerá dívidas, organizará suas finanças e conquistará estabilidade. O medo dará lugar à confiança, e a desordem será substituída por disciplina. O Senhor está abrindo portas de provisão e multiplicação. Você sairá da escassez para a abundância!"
            onContinue={() => setCurrentScreen("quiz-saude")}
            color="from-green-500 to-emerald-600"
            icon="💰"
          />
        )}
        {currentScreen === "quiz-saude" && (
          <QuizScreen
            area="saude"
            title="Área de Saúde"
            question="Qual limitação de saúde você quer superar em 2026?"
            subtitle="Identifique o que te impede de viver com plenitude"
            options={[
              "Dores ou doenças físicas",
              "Cansaço ou falta de energia",
              "Ansiedade, estresse ou depressão",
              "Maus hábitos ou negligência",
            ]}
            currentAnswer={quizAnswers.saude}
            onUpdate={(data) => updateQuizAnswer("saude", data)}
            onNext={() => setCurrentScreen("reward-saude")}
            onBack={() => setCurrentScreen("reward-financeira")}
            progress={80}
          />
        )}
        {currentScreen === "reward-saude" && (
          <RewardCard
            area="saude"
            title="Área de Saúde"
            selectedOption={quizAnswers.saude.selected || ""}
            bibleVerse="Ele enviou a sua palavra, e os sarou, e os livrou da destruição."
            bibleReference="Salmos 107:20"
            propheticMessage="Deus está restaurando seu corpo, mente e emoções! Em 2026, você experimentará cura, energia renovada e paz interior. As dores darão lugar ao bem-estar, o cansaço será vencido pela vitalidade, e a ansiedade será substituída pela paz de Deus. Você cuidará melhor de si mesmo e verá transformação completa. Saúde e vida plena são suas!"
            onContinue={() =>
              setCurrentScreen("quiz-crescimento")
            }
            color="from-red-500 to-rose-600"
            icon="❤️"
          />
        )}
        {currentScreen === "quiz-crescimento" && (
          <QuizScreen
            area="crescimento"
            title="Área de Crescimento"
            question="Qual limitação você quer quebrar para crescer em 2026?"
            subtitle="Identifique o que te impede de alcançar seu potencial"
            options={[
              "Estagnação ou zona de conforto",
              "Medo de tentar coisas novas",
              "Falta de preparo ou conhecimento",
              "Talentos não desenvolvidos",
            ]}
            currentAnswer={quizAnswers.crescimento}
            onUpdate={(data) =>
              updateQuizAnswer("crescimento", data)
            }
            onNext={() =>
              setCurrentScreen("reward-crescimento")
            }
            onBack={() => setCurrentScreen("reward-saude")}
            progress={100}
          />
        )}
        {currentScreen === "reward-crescimento" && (
          <RewardCard
            area="crescimento"
            title="Área de Crescimento"
            selectedOption={
              quizAnswers.crescimento.selected || ""
            }
            bibleVerse="Tudo posso naquele que me fortalece."
            bibleReference="Filipenses 4:13"
            propheticMessage="Deus está rompendo limites e expandindo seus horizontes! Em 2026, você sairá da zona de conforto, vencerá medos e desenvolverá talentos que estavam adormecidos. O medo dará lugar à coragem, a estagnação será quebrada pelo crescimento, e você alcançará níveis que nunca imaginou. Deus está te capacitando para voar mais alto. Prepare-se para o extraordinário!"
            onContinue={() => setCurrentScreen("summary")}
            color="from-amber-500 to-orange-600"
            icon="🌱"
          />
        )}
        {currentScreen === "summary" && (
          <SummaryScreen
            userName={userData.name}
            quizAnswers={quizAnswers}
            onBackToHome={() => {
              setProjectCompleted(true);
              setCurrentScreen("home");
            }}
          />
        )}
        {currentScreen === "my-project" && (
          <MyProjectScreen
            userName={userData.name}
            quizAnswers={quizAnswers}
            onUpdateProgress={updateChallengeProgress}
            onBackToHome={() => setCurrentScreen("home")}
          />
        )}

      </div>
    </div>
  );
}
