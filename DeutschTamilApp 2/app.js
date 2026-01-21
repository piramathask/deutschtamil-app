/* app.js — DeutschTamil Learn (stabil, Live Server)
   - Level Buttons A1/A2/B1/B2
   - Lesson List Screen
   - Grammatik Screen
   - Übungen Multi-Quiz + Next
   - Grün/Rot im Satz
   - Audio: Frage / Antwort / Erklärung (Deutsch)
*/
const isLocalHost =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";
const isSecureContext = location.protocol === "https:";

if ("serviceWorker" in navigator && (isSecureContext || isLocalHost)) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("✅ Service Worker registriert"))
    .catch(err => console.error("❌ SW Fehler:", err));
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function speakText(text, lang) {
  if (!("speechSynthesis" in window)) {
    alert("Audio nicht unterstützt");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text || ""));
  u.lang = lang;
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}

// 🔊 Deutsch Text-to-Speech (stabil)
function speakDE(text) {
  if (!("speechSynthesis" in window)) {
    alert("Audio nicht unterstützt");
    return;
  }

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = 0.9;
  u.pitch = 1;

  function setVoiceAndSpeak() {
    const voices = speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith("de"));
    if (deVoice) u.voice = deVoice;
    speechSynthesis.speak(u);
  }

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
  } else {
    setVoiceAndSpeak();
  }
}
function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}




let currentLevel = localStorage.getItem("dt_level") || "A1";
let currentLessonId = localStorage.getItem("dt_lesson") || "";

// quiz state
let quizIndex = 0;
let quizCorrect = 0;
let currentAnswer = "";


// Satzbau (order exercises)
let orderSelected = [];
let orderCorrectAnswer = "";


let screenTitle = document.getElementById("screenTitle");
let screenBody  = document.getElementById("screenBody");

function ensureScreenElements() {
  if (screenTitle && screenBody) return true;

  screenTitle = document.getElementById("screenTitle");
  screenBody = document.getElementById("screenBody");
  if (screenTitle && screenBody) return true;

  const container = document.querySelector(".container");
  if (!container) return false;

  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = `
    <h2 id="screenTitle">Start</h2>
    <div id="screenBody"></div>
  `;

  const grid = container.querySelector(".grid");
  if (grid && grid.nextSibling) {
    container.insertBefore(section, grid.nextSibling);
  } else {
    container.appendChild(section);
  }

  screenTitle = document.getElementById("screenTitle");
  screenBody = document.getElementById("screenBody");
  return Boolean(screenTitle && screenBody);
}

// cards/buttons (müssen in HTML existieren)
const btnGrammar   = document.getElementById("btnGrammar");
const btnExercises = document.getElementById("btnExercises");
const btnProgress  = document.getElementById("btnProgress");
const btnGrammarExtra = document.getElementById("btnGrammarExtra");



/* ---------- helpers ---------- */
function getLessons(level) {
  return (window.LESSONS && window.LESSONS[level]) ? window.LESSONS[level] : [];
}

function getLesson(level, id) {
  const list = getLessons(level);
  if (!list.length) return null;
  return list.find(l => l.id === id) || list[0];

}

function openLessonAndExercises(level, lessonId) {
  // Level + Lesson speichern
  currentLevel = level;
  currentLessonId = lessonId;

  localStorage.setItem("dt_level", level);
  localStorage.setItem("dt_lesson", lessonId);

  // falls du diese Funktion hast:
  if (typeof ensureLessonSelected === "function") ensureLessonSelected();

  // Übungen öffnen
  showExercises(true);
}


function ensureLessonSelected() {
  const list = getLessons(currentLevel);
  if (!list.length) {
    currentLessonId = "";
    localStorage.setItem("dt_lesson", "");
    return;
  }
  if (!currentLessonId || !list.some(l => l.id === currentLessonId)) {
    currentLessonId = list[0].id;
    localStorage.setItem("dt_lesson", currentLessonId);
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

function fillBlank(text, answer) {
  return String(text || "").includes("___")
    ? String(text).replace("___", answer || "")
    : String(text || "");
}

function getExerciseExplanation(q) {
  const answer = String(q?.answer || "").trim();
  const question = String(q?.q || "").trim();
  const type = String(q?.type || "").toLowerCase();
  const options = (q?.options || []).map(o => String(o).toLowerCase());

  if (type === "wordorder") {
    const de = `Ordne die Wörter zu einem einfachen Satz. Das Verb steht meist an Position 2.`;
    const ta = `சொற்களை சரியான வரிசையில் வைத்து வாக்கியம் உருவாக்கவும். வினைச்சொல் பெரும்பாலும் 2‑ஆம் இடத்தில் வரும்.`;
    return { de, ta };
  }

  if (type === "write") {
    const de = `Schreibe den Satz einfach und klar. Achte auf Verbform und Satzstellung.`;
    const ta = `எளிமையாக சரியான வாக்கியம் எழுதுங்கள். வினைச்சொல் வடிவமும் வரிசையும் கவனிக்கவும்.`;
    return { de, ta };
  }

  const hasArticles =
    options.some(o => ["der", "die", "das"].includes(o)) ||
    ["der", "die", "das"].includes(answer.toLowerCase());
  if (hasArticles && question.includes("___")) {
    const m = question.match(/___\s*([A-Za-zÄÖÜäöüß\-]+)/);
    const noun = m ? m[1] : "";
    const de = noun
      ? `${noun} braucht einen Artikel. Wähle der/die/das passend zum Nomen.`
      : `Wähle den richtigen Artikel passend zum Nomen.`;
    const ta = noun
      ? `${noun} என்பதற்கு Artikel வேண்டும். Nomen‑க்கு பொருத்தமான der/die/das தேர்வு செய்யவும்.`
      : `Nomen‑க்கு பொருத்தமான Artikel தேர்வு செய்யவும்.`;
    return { de, ta };
  }

  const lowerAnswer = answer.toLowerCase();
  const conjSet = ["weil", "dass", "wenn", "obwohl", "deshalb"];
  if (options.some(o => conjSet.includes(o)) || conjSet.includes(lowerAnswer)) {
    const de = lowerAnswer === "deshalb"
      ? `"deshalb" zeigt eine Folge. Das Verb steht an Position 2.`
      : `"${answer}" verbindet zwei Sätze. Im Nebensatz steht das Verb am Ende.`;
    const ta = lowerAnswer === "deshalb"
      ? `"deshalb" என்பது விளைவை காட்டும் சொல். வினைச்சொல் 2‑ஆம் இடத்தில் வரும்.`
      : `"${answer}" இரண்டு வாக்கியங்களை இணைக்கிறது. துணை வாக்கியத்தில் வினைச்சொல் கடைசியில் வரும்.`;
    return { de, ta };
  }

  const genPrep = ["wegen", "trotz", "während", "statt", "innerhalb", "außerhalb"];
  const qLower = question.toLowerCase();
  if (genPrep.some(p => qLower.includes(p))) {
    const de = `Nach Präpositionen wie wegen/trotz/während/statt/innerhalb/außerhalb steht oft der Genitiv (des/der).`;
    const ta = `wegen/trotz/während/statt/innerhalb/außerhalb போன்ற Präpositionenக்கு பிறகு Genitiv (des/der) வரும்.`;
    return { de, ta };
  }

  const perfSet = ["habe", "hast", "hat", "haben", "habt", "bin", "bist", "ist", "sind", "seid"];
  if (options.some(o => perfSet.includes(o)) || perfSet.includes(lowerAnswer)) {
    const de = `Im Perfekt benutzt man "haben" oder "sein". Wähle das passende Hilfsverb.`;
    const ta = `Perfekt‑ல் "haben" அல்லது "sein" பயன்படுத்தப்படுகிறது. சரியான உதவி வினைச்சொல் தேர்வு செய்யவும்.`;
    return { de, ta };
  }

  const de = `Wähle die richtige Option, damit der Satz richtig klingt.`;
  const ta = `சரியான வாக்கியம் உருவாக சரியான விருப்பத்தை தேர்வு செய்யுங்கள்.`;
  return { de, ta };
}

function getLessonExplanation(lesson) {
  const de = (lesson?.explain_de && lesson.explain_de.length)
    ? lesson.explain_de.join(" ")
    : (lesson?.de ? lesson.de.join(" ") : "Keine Erklärung vorhanden.");
  const ta = (lesson?.explain_ta && lesson.explain_ta.length)
    ? lesson.explain_ta.join(" ")
    : (lesson?.ta ? lesson.ta.join(" ") : "Tamil Erklärung fehlt.");
  const en = (lesson?.explain_en && lesson.explain_en.length)
    ? lesson.explain_en.join(" ")
    : "";
  return { de, ta, en };
}

function getGrammarLangPref() {
  return localStorage.getItem("grammarLang") || "de";
}

function setGrammarLangPref(val) {
  localStorage.setItem("grammarLang", val);
}

function renderLessonGrammarBox(lesson) {
  const box = document.getElementById("grammarBox");
  if (!box) return;
  const exp = getLessonExplanation(lesson);
  const lang = getGrammarLangPref();

  let content = `<b>Grammatik (Deutsch):</b><br>${escapeHtml(exp.de)}`;
  if (lang === "de-en" && exp.en) {
    content += `<br><br><b>Grammar (English):</b><br>${escapeHtml(exp.en)}`;
  }
  if (lang === "de-ta") {
    content += `<br><br><b>இலக்கணம் (Tamil):</b><br>${escapeHtml(exp.ta)}`;
  }

  box.innerHTML = `
    <div style="margin-top:8px">
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <button type="button" class="btn ${lang === "de" ? "active" : ""}" data-gram-lang="de">DE</button>
        <button type="button" class="btn ${lang === "de-en" ? "active" : ""}" data-gram-lang="de-en">DE + EN</button>
        <button type="button" class="btn ${lang === "de-ta" ? "active" : ""}" data-gram-lang="de-ta">DE + TA</button>
      </div>
      ${content}
    </div>
  `;

  box.querySelectorAll("[data-gram-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setGrammarLangPref(btn.dataset.gramLang);
      renderLessonGrammarBox(lesson);
    });
  });
}

function renderExplanation(q, lesson, targetEl) {
  const exp = getExerciseExplanation(q);
  if (!targetEl) return;
  targetEl.innerHTML = `
    <div style="margin-top:8px">
      <b>Erklärung (Deutsch):</b><br>${escapeHtml(exp.de)}<br><br>
      <b>விளக்கம் (Tamil):</b><br>${escapeHtml(exp.ta)}
    </div>
  `;
}
function bindGrammarLangSelect() {
  const sel = document.getElementById("langSelect");
  if (!sel) return;

  // gespeicherten Wert anzeigen
  sel.value = localStorage.getItem("grammarLang") || "de";

  // beim ändern speichern + neu anzeigen
  sel.onchange = () => {
    const val = sel.value;
    localStorage.setItem("grammarLang", val);

    // neu rendern: wenn du gerade ein Thema offen hast, zeig es neu
    if (window.currentGrammarItem) {
      showGrammarExtraItem(window.currentGrammarItem);
    } else {
      showGrammarExtraHome();
    }
  };
}

// ===============================
// 📘 GRAMMATIK EXTRA (A2/B1 Hilfe)
// ===============================
const GRAMMAR_EXTRA = [
{
  id: "a1_praesens_endungen",
  title: "Präsens – Verb-Endungen (A1)",
  de: [
    "Im Präsens ändern Verben ihre Endung.",
    "Man nimmt den Verbstamm und fügt eine Endung hinzu.",
    "",
    "Beispiel: gehen",
    "Stamm: geh-",
    "",
    "ich → -e",
    "ich gehe",
    "",
    "du → -st",
    "du gehst",
    "",
    "er / sie / es → -t",
    "er geht",
    "",
    "wir → -en",
    "wir gehen",
    "",
    "ihr → -t",
    "ihr geht",
    "",
    "sie / Sie → -en",
    "sie gehen / Sie gehen"
  ],
  en: [
  "In the present tense, verb endings change.",
  "First, take the verb stem.",
  "Then add an ending according to the person.",
  "",
  "Example: gehen",
  "Stem: geh-",
  "",
  "ich → ends with -e",
  "ich gehe",
  "",
  "du → ends with -st",
  "du gehst",
  "",
  "er / sie / es → ends with -t",
  "er geht",
  "",
  "wir → ends with -en",
  "wir gehen",
  "",
  "ihr → ends with -t",
  "ihr geht",
  "",
  "sie / Sie → ends with -en",
  "sie gehen / Sie gehen"
],
  ta: [
    "Präsens காலத்தில் வினைச்சொற்களின் முடிவுகள் மாறும்.",
    "முதலில் வினைச்சொல்லின் Stamm எடுக்கப்படுகிறது.",
    "பிறகு நபருக்கு ஏற்ப முடிவு சேர்க்கப்படுகிறது.",
    "",
    "உதாரணம்: gehen",
    "Stamm: geh-",
    "",
    "ich வந்தால் → -e",
    "ich gehe",
    "",
    "du வந்தால் → -st",
    "du gehst",
    "",
    "er / sie / es வந்தால் → -t",
    "er geht",
    "",
    "wir வந்தால் → -en",
    "wir gehen",
    "",
    "ihr வந்தால் → -t",
    "ihr geht",
    "",
    "sie / Sie வந்தால் → -en",
    "sie gehen / Sie gehen"
  ]
},
{
  id: "a1_personalpronomen",
  title: "Personalpronomen (A1)",
  de: [
    "Personalpronomen ersetzen Personen.",
    "Sie zeigen, wer etwas macht.",
    "",
    "ich = ich selbst",
    "du = eine Person (informell)",
    "er = ein Mann",
    "sie = eine Frau",
    "es = ein Ding oder Kind",
    "",
    "wir = ich + andere",
    "ihr = mehrere Personen",
    "sie / Sie = mehrere Personen / höflich"
  ],
  ta: [
    "Personalpronomen என்பது நபரை குறிக்க பயன்படுத்தப்படுகிறது.",
    "யார் செய்கிறார் என்பதை இது காட்டுகிறது.",
    "",
    "ich = நான்",
    "du = நீ (நண்பர்கள்)",
    "er = அவர் (ஆண்)",
    "sie = அவள்",
    "es = அது / குழந்தை",
    "",
    "wir = நாம்",
    "ihr = நீங்கள் (பலர்)",
    "sie / Sie = அவர்கள் / மரியாதையான நீங்கள்"
  ]
},
{
  id: "a1a2_praepositionen_dativ_akkusativ_alles",
  title: "Präpositionen – Dativ & Akkusativ (A1–A2)",
  de: [
    "Präpositionen stehen vor einem Nomen.",
    "Sie bestimmen den Fall: Dativ oder Akkusativ.",
    "",
    "====================",
    "Präpositionen mit DATIV (immer Dativ)",
    "====================",
    "aus – Herkunft",
    "bei – Ort / Person",
    "mit – Begleitung / Mittel",
    "nach – Richtung (Länder, Städte)",
    "seit – Zeitpunkt (ab wann)",
    "von – von wo / von wem",
    "zu – Ziel / Person",
    "gegenüber – Position",
    "",
    "Beispiele (Dativ):",
    "Ich komme aus Deutschland.",
    "Ich fahre mit dem Bus.",
    "Ich bin bei dem Arzt.",
    "Wir fahren nach Berlin.",
    "Ich lerne Deutsch seit einem Jahr.",
    "Das Geschenk ist von meinem Vater.",
    "Ich gehe zu dem Freund.",
    "Die Bank ist gegenüber der Schule.",
    "",
    "====================",
    "Präpositionen mit AKKUSATIV (immer Akkusativ)",
    "====================",
    "durch – Bewegung durch etwas",
    "für – Zweck / Empfänger",
    "gegen – Richtung / Widerstand",
    "ohne – nicht haben",
    "um – Zeit / herum",
    "bis – Endpunkt",
    "entlang – entlang einer Linie",
    "",
    "Beispiele (Akkusativ):",
    "Ich gehe durch den Park.",
    "Das Geschenk ist für den Lehrer.",
    "Er spielt gegen den Gegner.",
    "Ich komme ohne den Vater.",
    "Wir treffen uns um 8 Uhr.",
    "Ich arbeite bis den Abend.",
    "Wir gehen den Fluss entlang.",
    "",
    "Merke:",
    "Dativ = Ort, Zustand, Beziehung.",
    "Akkusativ = Bewegung, Aktion, Ziel."
  ],
  ta: [
    "Präpositionen என்பது பெயர்ச்சொல்லுக்கு முன் வரும் சொற்கள்.",
    "அவை Dativ அல்லது Akkusativ என்பதை தீர்மானிக்கும்.",
    "",
    "====================",
    "DATIV Präpositionen (எப்போதும் Dativ)",
    "====================",
    "aus – எங்கிருந்து",
    "bei – இடம் / நபர்",
    "mit – உடன் / கருவி",
    "nach – திசை (நாடு, நகரம்)",
    "seit – எப்போது இருந்து",
    "von – இருந்து / யாரிடமிருந்து",
    "zu – நோக்கி / ஒருவரிடம்",
    "gegenüber – எதிரே",
    "",
    "உதாரணங்கள் (Dativ):",
    "நான் ஜெர்மனியிலிருந்து வருகிறேன்.",
    "நான் பஸ்ஸுடன் செல்கிறேன்.",
    "நான் மருத்துவரிடம் இருக்கிறேன்.",
    "நாங்கள் பெர்லினுக்கு செல்கிறோம்.",
    "நான் ஒரு வருடமாக ஜெர்மன் கற்றுக்கொள்கிறேன்.",
    "இந்த பரிசு என் அப்பாவிடமிருந்து.",
    "நான் நண்பரிடம் செல்கிறேன்.",
    "வங்கி பள்ளிக்கு எதிரே உள்ளது.",
    "",
    "====================",
    "AKKUSATIV Präpositionen (எப்போதும் Akkusativ)",
    "====================",
    "durch – எதன் வழியாக",
    "für – ஒருவருக்காக",
    "gegen – எதிராக",
    "ohne – இல்லாமல்",
    "um – நேரம் / சுற்றி",
    "bis – வரை",
    "entlang – வழியாக (நீளமாக)",
    "",
    "உதாரணங்கள் (Akkusativ):",
    "நான் பூங்கா வழியாக நடக்கிறேன்.",
    "இந்த பரிசு ஆசிரியருக்காக.",
    "அவர் எதிரணிக்கெதிராக விளையாடுகிறார்.",
    "நான் தந்தை இல்லாமல் வருகிறேன்.",
    "நாங்கள் 8 மணிக்கு சந்திக்கிறோம்.",
    "நான் மாலை வரை வேலை செய்கிறேன்.",
    "நாங்கள் நதியின் வழியாக நடக்கிறோம்.",
    "",
    "நினைவில் வைக்க:",
    "Dativ = இடம், நிலை, தொடர்பு.",
    "Akkusativ = இயக்கம், செயல், நோக்கம்."
  ]
},

  {
   id: "a1_artikel",
      title: "Artikel: der / die / das",
      de: [
        "Jedes Nomen hat einen Artikel: der, die oder das.",
        "der → maskulin (der Mann)",
        "die → feminin (die Frau)",
        "das → neutral (das Kind)",
        "Artikel lernt man immer mit dem Wort."
      ],
      ta: [
        "ஒவ்வொரு பெயர்ச்சொல்லுக்கும் ஒரு Artikel இருக்கும்: der, die, das.",
        "der → ஆண் பாலினம்",
        "die → பெண் பாலினம்",
        "das → நடுநிலை",
        "Artikel-ஐ வார்த்தையுடன் சேர்த்து கற்க வேண்டும்."
      ]
    },

    {
      id: "a1_plural",
      title: "Plural (Mehrzahl)",
      de: [
        "Im Plural steht meistens der Artikel: die.",
        "Beispiele:",
        "der Mann → die Männer",
        "die Frau → die Frauen",
        "das Kind → die Kinder",
        "Pluralformen sind oft unregelmäßig."
      ],
      ta: [
        "பன்மையில் பெரும்பாலும் Artikel: die பயன்படுத்தப்படும்.",
        "உதாரணங்கள்:",
        "der Mann → die Männer",
        "die Frau → die Frauen",
        "das Kind → die Kinder",
        "பன்மை வடிவங்கள் பல சமயம் மாறுபடும்."
      ]
    },

    {
      id: "a1_pronomen",
      title: "Personalpronomen",
      de: [
        "ich, du, er, sie, es",
        "wir, ihr, sie",
        "Beispiele:",
        "Ich lerne Deutsch.",
        "Sie arbeitet heute."
      ],
      ta: [
        "ich = நான்",
        "du = நீ",
        "er/sie/es = அவன் / அவள் / அது",
        "wir = நாம்",
        "Beispiele:",
        "Ich lerne Deutsch. (நான் ஜெர்மன் கற்கிறேன்)",
        "Sie arbeitet heute. (அவள் இன்று வேலை செய்கிறாள்)"
      ]
    },

    {
      id: "a1_sein_haben",
      title: "sein und haben (Präsens)",
      de: [
        "sein und haben sind wichtige Verben.",
        "sein: ich bin, du bist, er/sie/es ist",
        "haben: ich habe, du hast, er/sie/es hat",
        "Beispiele:",
        "Ich bin müde.",
        "Ich habe Zeit."
      ],
      ta: [
        "sein, haben முக்கியமான வினைகள்.",
        "sein = இருக்குதல்",
        "haben = வைத்திருத்தல்",
        "Ich bin müde. (நான் சோர்வாக இருக்கிறேன்)",
        "Ich habe Zeit. (எனக்கு நேரம் இருக்கிறது)"
      ]
    },

    {
      id: "a1_prasens",
      title: "Präsens (Gegenwart)",
      de: [
        "Präsens benutzt man für jetzt und regelmäßig.",
        "Verb steht an Position 2.",
        "Beispiele:",
        "Ich arbeite heute.",
        "Wir lernen Deutsch."
      ],
      ta: [
        "Präsens என்பது நிகழ்காலம்.",
        "வினைச்சொல் இடம் 2-ல் வரும்.",
        "Ich arbeite heute. (நான் இன்று வேலை செய்கிறேன்)",
        "Wir lernen Deutsch. (நாம் ஜெர்மன் கற்கிறோம்)"
      ]
    },

    {
      id: "a1_satzstellung",
      title: "Satzstellung (Verb Position 2)",
      de: [
        "In deutschen Hauptsätzen steht das Verb auf Position 2.",
        "Beispiele:",
        "Ich gehe nach Hause.",
        "Heute gehe ich nach Hause."
      ],
      ta: [
        "ஜெர்மன் வாக்கியத்தில் வினைச்சொல் இடம் 2-ல் வரும்.",
        "Ich gehe nach Hause.",
        "Heute gehe ich nach Hause. (இன்று நான் வீட்டிற்கு செல்கிறேன்)"
      ]
    },

    {
      id: "a1_nicht_kein",
      title: "nicht und kein",
      de: [
        "nicht → verneint Verben, Adjektive, ganze Sätze",
        "kein → verneint Nomen ohne Artikel",
        "Beispiele:",
        "Ich komme nicht.",
        "Ich habe kein Geld."
      ],
      ta: [
        "nicht → வினைச்சொல் / வாக்கியத்தை மறுக்க",
        "kein → பெயர்ச்சொல்லை மறுக்க",
        "Ich komme nicht. (நான் வரவில்லை)",
        "Ich habe kein Geld. (என்னிடம் பணம் இல்லை)"
      ]
    },

    {
      id: "a1_fragen",
      title: "Fragen (W-Fragen & Ja/Nein)",
      de: [
        "W-Fragen: wer, was, wo, wann, warum",
        "Ja/Nein-Fragen: Verb steht auf Position 1.",
        "Beispiele:",
        "Wo wohnst du?",
        "Kommst du heute?"
      ],
      ta: [
        "W-Fragen: wer, was, wo, wann, warum",
        "ஆம்/இல்லை கேள்விகளில் வினைச்சொல் முதலில் வரும்.",
        "Wo wohnst du? (நீ எங்கே வசிக்கிறாய்?)",
        "Kommst du heute? (நீ இன்று வருகிறாயா?)"
      ]
    },

    {
      id: "a1_akkusativ",
      title: "Akkusativ (mich, dich)",
      de: [
        "Akkusativ = wen oder was?",
        "ich → mich",
        "du → dich",
        "Beispiele:",
        "Ich sehe dich.",
        "Er kauft einen Apfel."
      ],
      ta: [
        "Akkusativ = யாரை? என்னை?",
        "ich → mich",
        "du → dich",
        "Ich sehe dich. (நான் உன்னை பார்க்கிறேன்)",
        "Er kauft einen Apfel. (அவன் ஒரு ஆப்பிள் வாங்குகிறான்)"
      ]
    },

    {
      id: "a1_praep_dativ",
      title: "Präpositionen mit Dativ (in, auf, bei)",
      de: [
        "Einige Präpositionen brauchen den Dativ.",
        "Beispiele:",
        "in der Schule",
        "auf dem Tisch",
        "bei der Arbeit"
      ],
      ta: [
        "சில Präposition-கள் Dativ-ஐ பயன்படுத்தும்.",
        "in der Schule (பள்ளியில்)",
        "auf dem Tisch (மேசையின் மேல்)",
        "bei der Arbeit (வேலையில்)"
      ]

  },
  {
    id: "b1_nebensatz_weil",
    title: "Nebensatz mit weil",
    de: [
      "Ein Nebensatz beginnt z.B. mit: weil, dass, wenn",
      "Im Nebensatz steht das Verb am Ende.",
      "Beispiel:",
      "Ich lerne Deutsch, weil ich in Deutschland lebe."
    ],
    ta: [
      "Nebensatz என்பது துணை வாக்கியம்.",
      "weil / dass வந்தால் verb கடைசியில் வரும்.",
      "உதாரணம்:",
      "Ich lerne Deutsch, weil ich in Deutschland lebe. (நான் ஜெர்மனியில் வாழ்கிறேன் என்பதால் ஜெர்மன் கற்கிறேன்)"
    ]
  },
  {
  id: "b1_nebensatz_dass",
  title: "Nebensatz mit dass",
  de: [
    "„dass“ leitet einen Nebensatz ein.",
    "Im Nebensatz steht das Verb am Ende.",
    "Häufige Hauptverben: sagen, denken, wissen, glauben, hoffen",
    "Beispiele:",
    "Ich weiß, dass er heute kommt.",
    "Sie sagt, dass sie müde ist."
  ],
  ta: [
    "„dass“ என்பது துணை வாக்கியத்தை தொடங்கும் சொல்.",
    "துணை வாக்கியத்தில் verb (வினைச்சொல்) கடைசியில் வரும்.",
    "அடிக்கடி வரும் verbs: sagen, denken, wissen, glauben",
    "உதாரணங்கள்:",
    "Ich weiß, dass er heute kommt. (அவன் இன்று வருவான் என்று நான் அறிவேன்)",
    "Sie sagt, dass sie müde ist. (அவள் சோர்வாக இருக்கிறாள் என்று சொல்கிறாள்)"
  ]
},
{
  id: "b1_wenn_als",
  title: "Nebensatz mit wenn / als",
  de: [
    "„wenn“ benutzt man für Gegenwart und Zukunft.",
    "„als“ benutzt man für einmalige Ereignisse in der Vergangenheit.",
    "Im Nebensatz steht das Verb am Ende.",
    "Beispiele:",
    "Wenn ich Zeit habe, lerne ich Deutsch.",
    "Als ich ein Kind war, lebte ich in Sri Lanka."
  ],
  ta: [
    "„wenn“ நிகழ்காலம் அல்லது எதிர்காலத்திற்கு பயன்படுத்தப்படுகிறது.",
    "„als“ கடந்த காலத்தில் ஒரே முறை நடந்த விஷயங்களுக்கு பயன்படும்.",
    "துணை வாக்கியத்தில் verb (வினைச்சொல்) கடைசியில் வரும்.",
    "உதாரணங்கள்:",
    "Wenn ich Zeit habe, lerne ich Deutsch. (எனக்கு நேரம் இருந்தால் நான் ஜெர்மன் கற்கிறேன்)",
    "Als ich ein Kind war, lebte ich in Sri Lanka. (நான் குழந்தையாக இருந்த போது இலங்கையில் வாழ்ந்தேன்)"
  ]
},
{
  id: "b1_obwohl",
  title: "Nebensatz mit obwohl",
  de: [
    "„obwohl“ zeigt einen Gegensatz.",
    "Etwas passiert, obwohl es eigentlich nicht logisch ist.",
    "Das Verb steht am Ende.",
    "Beispiele:",
    "Ich gehe arbeiten, obwohl ich krank bin.",
    "Er lernt Deutsch, obwohl es schwierig ist."
  ],
  ta: [
    "„obwohl“ என்பது எதிர்மறை அர்த்தத்தை காட்டும்.",
    "எதிர்பார்ப்புக்கு மாறாக ஒரு செயல் நடக்கிறது.",
    "துணை வாக்கியத்தில் verb கடைசியில் வரும்.",
    "உதாரணங்கள்:",
    "Ich gehe arbeiten, obwohl ich krank bin. (நான் நோயாக இருந்தாலும் வேலைக்கு செல்கிறேன்)",
    "Er lernt Deutsch, obwohl es schwierig ist. (கடினமானதாயினும் அவன் ஜெர்மன் கற்கிறான்)"
  ]
},
{
  id: "b1_infinitiv_zu",
  title: "Infinitiv mit zu",
  de: [
    "„zu“ steht vor dem Verb im Infinitiv.",
    "Man benutzt es oft nach bestimmten Verben.",
    "Häufige Verben: versuchen, anfangen, vergessen, planen",
    "Beispiele:",
    "Ich versuche, Deutsch zu lernen.",
    "Er plant, nach Deutschland zu gehen."
  ],
  ta: [
    "„zu“ என்பது infinitiv verbக்கு முன் வரும்.",
    "சில verbs-க்கு பின் infinitiv mit zu பயன்படுத்தப்படும்.",
    "அடிக்கடி வரும் verbs: versuchen, anfangen, vergessen",
    "உதாரணங்கள்:",
    "Ich versuche, Deutsch zu lernen. (நான் ஜெர்மன் கற்க முயற்சிக்கிறேன்)",
    "Er plant, nach Deutschland zu gehen. (அவன் ஜெர்மனிக்கு செல்ல திட்டமிடுகிறான்)"
  ]
},
{
  id: "b1_erkaeltung",
  title: "Erkältung & Krankheit (B1)",
  de: [
    "Bei Krankheiten verwendet man im Deutschen meistens das Verb HABEN.",
    "Das gilt für Symptome und Beschwerden.",
    "Beispiele:",
    "Ich habe eine Erkältung.",
    "Er hat Fieber.",
    "Sie hat starke Halsschmerzen.",
    "",
    "Das Verb SEIN benutzt man, um den Zustand einer Person zu beschreiben.",
    "Beispiele:",
    "Ich bin krank.",
    "Er ist erkältet.",
    "Sie ist wieder gesund.",
    "",
    "In der B1-Stufe sind Nebensätze sehr wichtig.",
    "Mit WEIL nennt man einen Grund:",
    "Ich bleibe zu Hause, weil ich krank bin.",
    "",
    "Mit OBWOHL beschreibt man einen Gegensatz:",
    "Er geht zur Arbeit, obwohl er krank ist.",
    "",
    "Mit DASS gibt man eine Information oder Meinung weiter:",
    "Der Arzt sagt, dass ich krank bin.",
    "",
    "Wichtig:",
    "In Nebensätzen steht das Verb immer am Ende."
  ],
  ta: [
    "ஜெர்மன் மொழியில் நோய்கள் மற்றும் உடல் குறைபாடுகள் குறித்து பேசும்போது பெரும்பாலும் HABEN என்ற வினைச்சொல் பயன்படுத்தப்படுகிறது.",
    "இது அறிகுறிகள் மற்றும் உடல்நலப் பிரச்சினைகளுக்கு பொருந்தும்.",
    "உதாரணங்கள்:",
    "எனக்கு சளி இருக்கிறது.",
    "அவருக்கு காய்ச்சல் இருக்கிறது.",
    "அவளுக்கு கடுமையான தொண்டை வலி இருக்கிறது.",
    "",
    "ஒருவரின் நிலையை (status) கூற SEIN என்ற வினைச்சொல் பயன்படுத்தப்படுகிறது.",
    "உதாரணங்கள்:",
    "நான் நோயாக இருக்கிறேன்.",
    "அவர் சளி பிடித்துள்ளார்.",
    "அவள் மீண்டும் ஆரோக்கியமாக இருக்கிறாள்.",
    "",
    "B1 நிலைக்கு உபவாக்கியங்கள் மிகவும் முக்கியமானவை.",
    "WEIL பயன்படுத்தி காரணம் கூறப்படுகிறது:",
    "நான் வீட்டில் இருக்கிறேன், ஏனெனில் நான் நோயாக இருக்கிறேன்.",
    "",
    "OBWOHL பயன்படுத்தி எதிர்மறை நிலை கூறப்படுகிறது:",
    "நோயாக இருந்தாலும் அவர் வேலைக்கு செல்கிறார்.",
    "",
    "DASS பயன்படுத்தி தகவல் அல்லது கருத்து தெரிவிக்கப்படுகிறது:",
    "நான் நோயாக இருக்கிறேன் என்று மருத்துவர் சொல்கிறார்.",
    "",
    "முக்கியம்:",
    "உபவாக்கியங்களில் வினைச்சொல் எப்போதும் கடைசியில் வரும்."
  ]
},


];


  
function bindGrammarLangSelect() {
  const sel = document.getElementById("langSelect");
  if (!sel) return;

  const saved = localStorage.getItem("grammarLang") || "de";
  sel.value = saved;

  function apply() {
    const v = sel.value;
    localStorage.setItem("grammarLang", v);

    const en = document.getElementById("blockEn");
    const ta = document.getElementById("blockTa");

    if (en) en.style.display = (v === "de-en") ? "block" : "none";
    if (ta) ta.style.display = (v === "de-ta") ? "block" : "none";
  }

  sel.onchange = apply;
  apply();
}




function showGrammarExtraHome() {
  if (!ensureScreenElements()) return;
  screenTitle.textContent = "📘 Grammatik Extra";
  screenBody.innerHTML = `
    <p style="opacity:.8">Große Grammatik-Erklärungen (A2/B1)</p>
      <div style="margin:12px 0 14px">
    <label style="font-weight:700">Explanation:</label>

  <select id="langSelect" class="langSelect">


      <option value="de">Deutsch</option>
      <option value="de-en">Deutsch + English</option>
      <option value="de-ta">Deutsch + Tamil</option>
    </select>
  </div>


    <div style="display:grid;gap:10px;margin-top:10px">
      ${GRAMMAR_EXTRA.map(g => `
        <button class="btn" style="text-align:left" data-gextra="${g.id}">
          ${escapeHtml(g.title)}
        </button>
      `).join("")}
    </div>

    <div style="margin-top:14px">
      <button class="btn" id="btnBackHome">⬅ Home</button>
    </div>
  `;
bindGrammarLangSelect();


  document.getElementById("btnBackHome").onclick = showHome;

  document.querySelectorAll("[data-gextra]").forEach(b => {
    b.onclick = () => {
      const item = GRAMMAR_EXTRA.find(x => x.id === b.dataset.gextra);
      if (item) showGrammarExtraItem(item);
    };
  });
}

function showGrammarExtraItem(item) {
  if (!ensureScreenElements()) return;
  screenTitle.textContent = item.title;

  // ✅ safe fallback: en இல்லையெனில் de காட்டும்
  const enLines = item.en || item.de;

  screenBody.innerHTML = `
    <div style="margin:0 0 14px">
    <label style="font-weight:700">Explanation:</label>
    <select id="langSelect" class="btn" style="width:100%;max-width:520px">
      <option value="de">Deutsch</option>
      <option value="de-en">Deutsch + English</option>
      <option value="de-ta">Deutsch + Tamil</option>
    </select>
  </div>

   <h3>Deutsch</h3>
<ul>${item.de.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

<div id="blockEn" style="margin-top:10px">
  <h3>English</h3>
  <ul>${enLines.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
</div>

<div id="blockTa" style="margin-top:10px">
  <h3>Tamil</h3>
  <ul>${(item.ta || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
</div>


    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
      <button class="btn" onclick="window.print()">📄 PDF / Drucken</button>
      <button class="btn" id="btnBackExtra">Zurück</button>
      <button class="btn" id="btnHomeExtra">Home</button>
    </div>
  `;
window.currentGrammarItem = item;
bindGrammarLangSelect();

  document.getElementById("btnBackExtra").onclick = showGrammarExtraHome;
  document.getElementById("btnHomeExtra").onclick = showHome;
}


/* ---------- Progress (Lesson done) ---------- */
function doneKey(id){ return "dt_done_" + id; }
function isDone(id){ return localStorage.getItem(doneKey(id)) === "1"; }
function markDone(id){ localStorage.setItem(doneKey(id), "1"); }

function levelProgressPercent(level){
  const list = getLessons(level);
  if (!list.length) return 0;
  const done = list.filter(l => isDone(l.id)).length;
  return Math.round((done / list.length) * 100);
}

/* ---------- Audio (Deutsch TTS) ---------- */
function speakDE(text){
  if (!("speechSynthesis" in window)) {
    alert("Audio (Text-to-Speech) wird in diesem Browser nicht unterstützt.");
    return;
  }
 

  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text));
  u.lang = "de-DE";
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}

/* ---------- Level Buttons bind ---------- */
function bindLevelButtons(){
  const levelBtns = document.querySelectorAll("[data-level]");
  if (!levelBtns.length) return;

  levelBtns.forEach(b => b.classList.remove("active"));
  levelBtns.forEach(b => {
    if (b.dataset.level === currentLevel) b.classList.add("active");
  });

  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLevel = btn.dataset.level;
      localStorage.setItem("dt_level", currentLevel);

      currentLessonId = ""; // reset -> first lesson
      ensureLessonSelected();

      levelBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      showHome();
    });
  });
}
// ===== Kategorien (Auto) =====
function getCategory(lesson) {
  if (lesson && lesson.category) return lesson.category;

  const t = String(lesson?.title || "").toLowerCase();
  // ✅ A1 Grundlagen FIRST
  if (t.includes("artikel")) return "A1 Grundlagen";
  if (t.includes("plural")) return "A1 Grundlagen";
  if (t.includes("satzstellung") || t.includes("verb position 2")) return "A1 Grundlagen";

  if (t.includes("personalpronomen") || t.includes("pronomen")) return "A1 Grundlagen";
  if (t.includes("sein und haben") || (t.includes("sein") && t.includes("haben"))) return "A1 Grundlagen";
  if (t.includes("präsens")) return "A1 Grundlagen";
  if (t.includes("satzstellung")) return "A1 Grundlagen";
  if (t.includes("nicht und kein") || t.includes("nicht") || t.includes("kein")) return "A1 Grundlagen";
  if (t.includes("fragen")) return "A1 Grundlagen";
  if (t.includes("akkusativ")) return "A1 Grundlagen";

  if (t.includes("präposition")) return "Präpositionen";
  if (t.includes("perfekt")) return "Perfekt";
  if (t.includes("nebensatz")) return "Nebensätze";
  if (t.includes("modalverb")) return "Modalverben";
  if (t.includes("verben")) return "Verben";
  if (t.includes("wortschatz")) return "Wortschatz";
  if (t.includes("wiederholung") || t.includes("test") || t.includes("mix") || t.includes("geprüft"))
    return "Tests & Wiederholung";
  if (t.includes("a2→b1") || t.includes("a2 -> b1") || t.includes("übergang") || t.includes("einstieg"))
    return "Übergang A2 → B1";
// ✅ A1 Grundlagen (force)
if (
  t.includes("artikel") ||
  t.includes("satzstellung") ||
  t.includes("verb auf position 2") ||
  t.includes("verb position 2") ||
  t.includes("satzbau") ||
  t.includes("wörter sortieren") ||
  t.includes("satz bauen") ||
  t.includes("wortstellung")
) return "A1 Grundlagen";

  return "Sonstiges";
}

function groupByCategory(list) {
  const map = {};
  (list || []).forEach(l => {
    const c = getCategory(l);
    if (!map[c]) map[c] = [];
    map[c].push(l);
  });
  return map;
}

const CATEGORY_ORDER = [
  "A1 Grundlagen",
  "Perfekt",
  "Nebensätze",
  "Präpositionen",
  "Modalverben",
  "Verben",
  "Wortschatz",
  "Tests & Wiederholung",
  "Übergang A2 → B1",
  "Sonstiges"
];


/* ---------- HOME (Lesson list) ---------- */
function showHome(){
  if (!ensureScreenElements()) return;
  ensureLessonSelected();
  const list = getLessons(currentLevel);
  const lesson = getLesson(currentLevel, currentLessonId);

  screenTitle.textContent = `Level ${currentLevel} — Start`;
  screenBody.innerHTML = `
    <p><b>Aktuelle Lektion:</b> ${lesson ? escapeHtml(lesson.title) : "—"}</p>

    <div style="margin:10px 0">
      <div style="font-size:13px;opacity:.7">Level Fortschritt: ${levelProgressPercent(currentLevel)}%</div>
      <div style="height:10px;border:1px solid #ddd;border-radius:999px;overflow:hidden">
        <div style="height:100%;width:${levelProgressPercent(currentLevel)}%;background:var(--primary)"></div>
      </div>
    </div>

    <hr style="margin:12px 0;border:0;border-top:1px solid #eee">

    <div class="howto">
      <div class="howto-step"><span class="step-num">1</span> Lektion wählen</div>
      <div class="howto-step"><span class="step-num">2</span> Übung starten</div>
      <div class="howto-step"><span class="step-num">3</span> Aufgaben lösen</div>
    </div>

    <p><b>Lektionen (${currentLevel}):</b></p>

<div class="exercise-wrap" style="margin-top:10px">
  <div class="exercise-list" id="exerciseList">
  ${
    (() => {
      const grouped = groupByCategory(list);
      const ORDER_A1 = [
  "artikel",
  "satzbau",
  "satzstellung",
  "verb auf position 2",
  "verb position 2",
  "wörter sortieren",
  "satz bauen",
  "wortstellung",
  "präsens",
  "sein und haben",
  "verben",
  "personalpronomen",
  "plural",
  "fragen",
  "nicht und kein",
  "akkusativ",
  "präposition"
];

// ✅ Sonstiges-க்குள்ள Lessons order fix
if (grouped["Sonstiges"]) {
  grouped["Sonstiges"].sort((a, b) => {
    const rank = (title = "") => {
      const s = String(title || "").toLowerCase();
      const i = ORDER_A1.findIndex(k => s.includes(k));
      return i === -1 ? 999 : i;
    };
    return rank(a.title) - rank(b.title);
  });
}


      const cats = [
        ...CATEGORY_ORDER.filter(c => grouped[c] && grouped[c].length),
        ...Object.keys(grouped).filter(c => !CATEGORY_ORDER.includes(c))
      ];

      return cats.map(cat => `
       <div class="cat cat-${escapeHtml(cat)} cat-section" data-cat="${escapeHtml(cat)}">


          <div style="font-weight:800;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center">
            <span class="cat-title cat-title-${escapeHtml(cat)}">
  ${escapeHtml(cat)}
</span>

            <span style="opacity:.6;font-size:12px">${grouped[cat].length}</span>
          </div>

          <div style="display:grid;gap:8px">
            ${
              (grouped[cat] || []).map(l => `

                <button type="button" class="btn ${l.id === currentLessonId ? "active" : ""}" style="text-align:left" data-lesson="${l.id}">
                  <div>
                    <div class="lesson-title">${escapeHtml(l.title)}</div>
                    ${l.id === currentLessonId ? `<div class="lesson-sub"><span class="badge-current">Aktiv</span></div>` : ""}
                    ${isDone(l.id) ? `<div class="lesson-sub"><span class="badge-done">✅ Fertig</span></div>` : ""}
                  </div>
                  <div class="chev ${l.id === currentLessonId ? "chev-open" : ""}">›</div>
                </button>
              `).join("")
            }
          </div>
        </div>
      `).join("");
    })()
  }
</div>
  `;

  let startEl = null;

  function ensureStartEl() {
    if (startEl) return startEl;
    const el = document.createElement("div");
    el.className = "exercise-start";
    el.innerHTML = `
      <div class="start-card">
        <div class="start-title">Übung starten</div>
        <div class="start-sub">Bitte eine Lektion wählen.</div>
        <div class="btn-row">
          <button type="button" class="btn primary" data-start-lesson>Übung starten</button>
          <button type="button" class="btn" data-change-lesson>Andere Lektion</button>
        </div>
      </div>
    `;
    const startBtn = el.querySelector("[data-start-lesson]");
    const changeBtn = el.querySelector("[data-change-lesson]");
    if (startBtn) startBtn.addEventListener("click", () => showExercises(true));
    if (changeBtn) {
      changeBtn.addEventListener("click", () => {
        el.remove();
        startEl = null;
      });
    }
    startEl = el;
    return startEl;
  }

  const lessonButtons = Array.from(document.querySelectorAll("[data-lesson]"));
  lessonButtons.forEach(b => {
    b.addEventListener("click", () => {
      currentLessonId = b.dataset.lesson;
      localStorage.setItem("dt_lesson", currentLessonId);
      lessonButtons.forEach(btn => {
        btn.classList.remove("active");
        const chev = btn.querySelector(".chev");
        if (chev) chev.classList.remove("chev-open");
      });
      b.classList.add("active");
      const activeChev = b.querySelector(".chev");
      if (activeChev) activeChev.classList.add("chev-open");
      screenBody.querySelectorAll(".badge-current").forEach(el => el.remove());
      const content = b.querySelector(".lesson-title")?.parentElement;
      if (content) {
        const badgeWrap = document.createElement("div");
        badgeWrap.className = "lesson-sub";
        badgeWrap.innerHTML = `<span class="badge-current">Aktiv</span>`;
        const doneBadge = content.querySelector(".badge-done")?.parentElement;
        if (doneBadge) {
          content.insertBefore(badgeWrap, doneBadge);
        } else {
          content.appendChild(badgeWrap);
        }
      }
      const start = ensureStartEl();
      const title = start.querySelector(".start-title");
      const sub = start.querySelector(".start-sub");
      if (title) title.textContent = "Übung starten";
      if (sub) sub.textContent = `Lektion: ${b.querySelector(".lesson-title")?.textContent || ""}`;
      b.insertAdjacentElement("afterend", start);
    });
  });

  // start buttons are bound in ensureStartEl


  
}

/* ---------- GRAMMAR ---------- */
function showGrammar(){
  if (!ensureScreenElements()) return;
  ensureLessonSelected();
  const lesson = getLesson(currentLevel, currentLessonId);
  if (!lesson) {
    screenTitle.textContent = "Content fehlt";
    screenBody.innerHTML = `<p>${currentLevel} content später.</p>`;
    return;
  
  }




  screenTitle.textContent = `${currentLevel} • ${lesson.title}`;
  screenBody.innerHTML = `
    <p><b>Deutsch:</b></p>
    <ul>${(lesson.de || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

    <p style="margin-top:10px"><b>Tamil:</b></p>
    <ul>${(lesson.ta || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

    <div class="btn-row" style="margin-top:14px">

      <button type="button" class="btn" id="btnSpeakExplain">🔊 Erklärung (DE)</button>
      <button type="button" class="btn" id="btnBackHome">Back</button>
    </div>
  `;
// 👇 HIER EINFÜGEN (ca. Zeile 229)
screenBody.insertAdjacentHTML("beforeend", `
  <button type="button" class="btn" id="btnPrintGrammar">
    📄 Lesen / Drucken
  </button>
`);
// 👇 direkt NACH dem Button
document.getElementById("btnPrintGrammar")
  .addEventListener("click", () => openPrintGrammar(lesson));

  document.getElementById("btnBackHome").addEventListener("click", showHome);
  document.getElementById("btnSpeakExplain").addEventListener("click", () => {
    const exp = (lesson.explain_de && lesson.explain_de.length)
      ? lesson.explain_de.join(" ")
      : (lesson.de ? lesson.de.join(" ") : "Keine Erklärung vorhanden.");
    speakDE(exp);
  });
}

/* ---------- EXERCISES ---------- */
function showExercisesHome() {
  if (!ensureScreenElements()) return;
  ensureLessonSelected();
  const list = getLessons(currentLevel);

  screenTitle.textContent = `Übungen – Liste (${currentLevel})`;
  screenBody.innerHTML = `
    <p style="opacity:.8">Wähle eine Lektion. Dann erscheint „Übung starten“.</p>

    <div class="exercise-wrap" style="margin-top:10px">
      <div class="exercise-list" id="exerciseList">
        ${list.length ? list.map(l => `
          <button type="button" class="btn ${l.id === currentLessonId ? "active" : ""}" style="text-align:left" data-exlesson="${l.id}">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <div class="lesson-title">${escapeHtml(l.title)}</div>
                ${l.id === currentLessonId ? `<div class="lesson-sub"><span class="badge-current">Ausgewählt</span></div>` : ""}
                ${isDone(l.id) ? `<div class="lesson-sub"><span class="badge-done">✅ Fertig</span></div>` : ``}
              </div>
              <div class="chev">›</div>
            </div>
          </button>
        `).join("") : `<div style="opacity:.7">Keine Lektionen gefunden.</div>`}
      </div>

      <div class="exercise-start" id="exerciseStart" hidden>
        <div class="start-card">
          <div class="start-title" id="startTitle">Übung starten</div>
          <div class="start-sub" id="startSub">Bitte eine Lektion wählen.</div>
          <div class="btn-row">
            <button type="button" class="btn primary" id="btnStartLesson">Übung starten</button>
            <button type="button" class="btn" id="btnChangeLesson">Andere Lektion</button>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:14px">
      <button type="button" class="btn" id="btnBackHomeFromExercises">⬅ Home</button>
    </div>
  `;

  document.getElementById("btnBackHomeFromExercises").onclick = showHome;

  const listEl = document.getElementById("exerciseList");
  const startEl = document.getElementById("exerciseStart");
  const startTitle = document.getElementById("startTitle");
  const startSub = document.getElementById("startSub");

  document.querySelectorAll("[data-exlesson]").forEach(b => {
    b.addEventListener("click", () => {
      currentLessonId = b.dataset.exlesson;
      localStorage.setItem("dt_lesson", currentLessonId);
      if (listEl) listEl.classList.add("blurred");
      if (startEl) startEl.hidden = false;
      if (startTitle) startTitle.textContent = "Übung starten";
      if (startSub) startSub.textContent = `Lektion: ${b.querySelector(".lesson-title")?.textContent || ""}`;
    });
  });

  document.getElementById("btnStartLesson")?.addEventListener("click", () => {
    showExercises(true);
  });
  document.getElementById("btnChangeLesson")?.addEventListener("click", () => {
    if (listEl) listEl.classList.remove("blurred");
    if (startEl) startEl.hidden = true;
  });
}


function showExercises(reset = true){
  if (!ensureScreenElements()) return;
  ensureLessonSelected();
  const lesson = getLesson(currentLevel, currentLessonId);
  if (!lesson || !Array.isArray(lesson.quiz) || !lesson.quiz.length){
    screenTitle.textContent = "Übungen fehlen";
    screenBody.innerHTML = `<p>Für diese Lektion sind keine Übungen gespeichert.</p><button class="btn" onclick="showHome()">Back</button>`;
    return;
  }
  if (reset) { quizIndex = 0; quizCorrect = 0; }
  renderQuestion(lesson);
}

function startExercisesFromDashboard() {
  ensureLessonSelected();
  const lesson = getLesson(currentLevel, currentLessonId);
  if (lesson && Array.isArray(lesson.quiz) && lesson.quiz.length) {
    showExercises(true);
    return;
  }
  showExercisesHome();
}


function renderQuestion(lesson){
  const quiz = lesson.quiz;
  const q = quiz[quizIndex]; 
  console.log("DEBUG q:", q);
console.log("DEBUG type:", q && q.type);

    // 🔊 Auto-Hören: Frage automatisch sprechen
  if (q && q.q) {
   // speakDE(q.q.replace("___", "…"));
  }

  // 🔒 Schutz: keine leere Frage
  if (!q) {
    screenTitle.textContent = `Übungen: ${lesson.title}`;
    screenBody.innerHTML = `<p>Keine weitere Übung.</p>
      <button class="btn" id="btnBack">Back</button>`;
   document.getElementById("btnBack").onclick = prevQuestion;

    return;
  }

  // ✍️ WRITE-ÜBUNG
  if (q.type === "write") {
    renderWriteQuestion(q, lesson);
    return;
  }

  // 🔀 WORTORDNUNG
  if (q.type === "wordorder") {
    renderWordOrder(q, lesson);
    return;
  }

  
  

  currentAnswer = q.answer;

// für Satzbau (falls vorhanden)
orderSelected = [];
orderCorrectAnswer = q.answer;


  const quizPercent = Math.round((quizIndex / quiz.length) * 100);

  screenTitle.textContent = `Übungen: ${lesson.title} (${quizIndex + 1}/${quiz.length})`;
  screenBody.innerHTML = `
    <div style="margin-bottom:10px">
      <div style="font-size:13px;opacity:.7">Quiz Fortschritt: ${quizPercent}%</div>
      <div style="height:10px;border:1px solid #ddd;border-radius:999px;overflow:hidden">
        <div style="height:100%;width:${quizPercent}%;background:#2ecc71"></div>
      </div>
    </div>

    <p style="margin-top:12px"><b>Frage:</b> <span id="qSentence">${escapeHtml(q.q)}</span></p>

    

    <div id="options" style="display:grid;gap:10px;margin-top:10px;max-width:360px">
      ${shuffleArray(q.options).map(opt => `

        <button type="button" class="btn option-btn" data-opt="${escapeHtml(opt)}">
          ${escapeHtml(opt)}
        </button>
      `).join("")}
    </div>

    <p id="result" style="margin-top:12px;font-weight:800"></p>



<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
  <button type="button" class="btn" id="btnSpeakQ">🔊 Frage</button>
  <button type="button" class="btn" id="btnSpeakA">🔊 Antwort</button>
  <button type="button" class="btn" id="btnSpeakExp">🔊 Erklärung</button>
  <button type="button" class="btn" id="btnSpeakRepeat">🗣️ Sprich nach</button>
  <button type="button" class="btn" id="btnGrammarExp">📘 Grammatik</button>
  <button type="button" class="btn" id="btnShowSolution">✅ Lösung</button>

</div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
      <button type="button" class="btn" id="btnNext">Next ➜</button>
      <button type="button" class="btn" id="btnRestart">Restart</button>
      <button type="button" class="btn" id="btnBack">Back</button>
      <button type="button" class="btn" id="btnHome">Home</button>
    </div>

    <p style="margin-top:10px;opacity:.8">Score: <b>${quizCorrect}</b> / ${quiz.length}</p>
    <div id="grammarBox" style="margin-top:12px"></div>
  `;
  // 🔊 AUDIO-BUTTONS (NACH innerHTML!)
document.getElementById("btnSpeakQ")?.addEventListener("click", () => {
  speakDE(q.q.replace("___", "…"));
});

document.getElementById("btnSpeakA")?.addEventListener("click", () => {
  speakDE(q.q.replace("___", currentAnswer));
});
document.getElementById("btnSpeakRepeat")?.addEventListener("click", () => {
  // 1 Sekunde Pause, dann Satz sprechen
  setTimeout(() => {
   speakDE(q.q.replace("___", currentAnswer || ""));
  }, 800);
});


document.getElementById("btnSpeakExp")?.addEventListener("click", () => {
  const r = document.getElementById("result");
  renderExplanation(q, lesson, r);
  // no auto-audio on explanation
});

document.getElementById("btnShowSolution")?.addEventListener("click", () => {
  const r = document.getElementById("result");
  const qEl = document.getElementById("qSentence");
  if (qEl && currentAnswer) {
    const original = qEl.textContent || "";
    qEl.innerHTML = original.replace(
      "___",
      `<span style="color:#16a34a;font-weight:800">${escapeHtml(currentAnswer)}</span>`
    );
  }
  if (r && currentAnswer) {
    r.innerHTML = `✅ Lösung: <b>${escapeHtml(currentAnswer)}</b>`;
  }
});

document.getElementById("btnGrammarExp")?.addEventListener("click", () => {
  renderLessonGrammarBox(lesson);
});


  // Answer buttons
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(btn));
  });

  document.getElementById("btnNext").addEventListener("click", nextQuestion);
  document.getElementById("btnRestart").addEventListener("click", () => showExercises(true));
  document.getElementById("btnBack").addEventListener("click", prevQuestion);
  document.getElementById("btnHome").addEventListener("click", showHome);

}

function checkAnswer(btnEl){ 

  const chosen = btnEl.dataset.opt;
  const r = document.getElementById("result");
  const qEl = document.getElementById("qSentence");
  const original = qEl ? qEl.textContent : "";
 
  
function enableWrongWordEditing() {
  document.querySelectorAll(".wrong").forEach(word => {
    word.style.cursor = "pointer";
    word.onclick = () => {
      const neu = prompt("Anderes Wort eingeben:", word.textContent);
      if (neu) {
        word.textContent = neu.trim();
        checkAnswer({ dataset: { opt: null } });
      }
    };
  });
}

// disable all buttons after first click
const allBtns = Array.from(document.querySelectorAll(".option-btn"));
allBtns.forEach(b => (b.disabled = true));

if (chosen === currentAnswer) {
  if (qEl) {
    qEl.innerHTML = original.replace(
      "___",
      `<span style="color:green;font-weight:bold">${currentAnswer}</span>`
    );
  }

  btnEl.style.background = "#2ecc71";
  btnEl.style.color = "#fff";
  r.innerHTML = "✅ <span style='color:green;font-weight:bold'>Richtig!</span>";
  quizCorrect++;
  speakDE(original.replace("___", currentAnswer));

} else {
  r.innerHTML = "❌ Falsch – hör zu und versuch es nochmal!";

  // 🎯 Wiederholung bei falscher Antwort (richtiger Satz)
  //setTimeout(() => {
    //speakDE(original.replace("___", currentAnswer));
  //}, 800);

  // ✅ Buttons wieder aktivieren → nochmal versuchen
  allBtns.forEach(b => (b.disabled = false));

  return; // ⛔ bleibt bei gleicher Frage
}



}

function nextQuestion(){
  const lesson = getLesson(currentLevel, currentLessonId);
  if (!lesson) return;

  quizIndex++;

  if (quizIndex >= lesson.quiz.length) {
    const total = lesson.quiz.length;
    const percent = Math.round((quizCorrect / total) * 100);
    if (percent >= 70) markDone(lesson.id);

    screenTitle.textContent = `Fertig: ${lesson.title}`;
    screenBody.innerHTML = `
      <p><b>Result:</b> ${quizCorrect} / ${total} (${percent}%)</p>
      <p>${percent >= 70 ? "✅ Lektion abgeschlossen!" : "❌ Bitte nochmal (70% nötig)."} </p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
        <button class="btn" onclick="showExercises(true)">Restart</button>
        <button class="btn" onclick="showHome()">Home</button>
      </div>
    `;
    return;
  }

  renderQuestion(lesson);
}
function prevQuestion(){
  if (quizIndex > 0) {
    quizIndex--;
    const lesson = getLesson(currentLevel, currentLessonId);
    renderQuestion(lesson);
  }
}

/* ---------- Card Buttons ---------- */
if (btnGrammar)   btnGrammar.addEventListener("click", showGrammar);
if (btnGrammarExtra) btnGrammarExtra.addEventListener("click", showGrammarExtraHome);

if (btnExercises) btnExercises.addEventListener("click", startExercisesFromDashboard);

if (btnProgress) {
  btnProgress.addEventListener("click", () => {
    const list = getLessons(currentLevel);
    screenTitle.textContent = "Mein Fortschritt / முன்னேற்றம்";
    screenBody.innerHTML = `
      <p><b>Level:</b> ${currentLevel}</p>
      <p><b>Progress:</b> ${levelProgressPercent(currentLevel)}%</p>
      <hr style="margin:12px 0;border:0;border-top:1px solid #eee">
      <div style="display:grid;gap:8px">
        ${list.map(l => `<div>${isDone(l.id) ? "✅" : "⬜"} ${escapeHtml(l.title)}</div>`).join("")}
      </div>
      <div style="margin-top:14px">
        <button class="btn" onclick="showHome()">Back</button>
      </div>
    `;
  });
}


function renderWordOrder(q, lesson) {
  let selected = [];

  screenTitle.textContent = "Wörter sortieren";

  screenBody.innerHTML = `
    <p><b>${escapeHtml(q.q)}</b></p>

    <div id="wordPool" style="display:flex;gap:8px;flex-wrap:wrap">
      ${shuffleCopy(q.words).map(w => `
        <button type="button" class="btn word-btn" data-word="${escapeHtml(w)}">${escapeHtml(w)}</button>
      `).join("")}
    </div>

    <p style="margin-top:12px"><b>Dein Satz:</b></p>
    <div id="sentenceBox" style="min-height:40px;border:1px dashed #999;padding:10px;border-radius:10px"></div>

    <p id="result" style="margin-top:10px;font-weight:800"></p>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
      <button type="button" class="btn" id="btnReset">Reset</button>
      <button type="button" class="btn" id="btnCheck">Prüfen</button>
      <button type="button" class="btn" id="btnNext">Next →</button>
      <button type="button" class="btn" id="btnHome">Home</button>
      <button type="button" class="btn" id="btnExplainOrder">Erklärung</button>
    </div>
  `;

  const wordPool = document.getElementById("wordPool");
  const sentenceBox = document.getElementById("sentenceBox");
  const result = document.getElementById("result");


 



  // Prüfen (Groß/Klein egal + Leerzeichen egal)
  document.getElementById("btnCheck").addEventListener("click", () => {
    const user = selected.join(" ").trim().replace(/\s+/g, " ").toLowerCase();
    const correct = String(q.answer || "").trim().replace(/\s+/g, " ").toLowerCase();

    if (!correct) {
      result.textContent = "⚠️ Keine Lösung gespeichert.";
      return;
    }

    result.textContent = (user === correct)
      ? "✅ Richtig!"
      : `❌ Falsch. Lösung: ${q.answer}`;
  });

  // Next
  document.getElementById("btnNext").addEventListener("click", nextQuestion);
  document.getElementById("btnHome").addEventListener("click", showHome);
  document.getElementById("btnExplainOrder").addEventListener("click", () => {
    renderExplanation(q, lesson, result);
  });




function renderWriteQuestion(q, lesson) {
  const quiz = lesson.quiz || [];
  const total = quiz.length || 1;
  const percent = Math.round((quizIndex / total) * 100);
  // 🔊 Auto-Hören: Write-Frage
  if (q && q.q) {
    speakDE(q.q.replace("___", "…"));
  }

  // Titel
  screenTitle.textContent = `Übungen: ${lesson.title} (${quizIndex + 1}/${total})`;

  // Body (immer sichtbar)
  screenBody.innerHTML = `
    <div style="margin-bottom:10px">
      <div style="font-size:13px;opacity:.7">Quiz Fortschritt: ${percent}%</div>
      <div style="height:10px;border:1px solid #ddd;border-radius:999px;overflow:hidden">
        <div style="height:100%;width:${percent}%;background:#2ecc71"></div>
      </div>
    </div>

    <p style="margin-top:12px"><b>Frage:</b> <span id="qSentence">${escapeHtml(q.q || "")}</span></p>

    <input id="writeInput" type="text"
      placeholder="Antwort eingeben…"
      style="width:100%;max-width:360px;padding:10px;border:1px solid #ddd;border-radius:10px;margin-top:10px">

    <p id="result" style="margin-top:12px;font-weight:800"></p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
  <button type="button" class="btn" id="btnSpeakWriteQ">🎧 Hören</button>
  <button type="button" class="btn" id="btnSpeakWriteRepeat">🗣️ Sprich nach</button>
</div>


    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
      <button type="button" class="btn" id="btnCheckWrite">Prüfen</button>
      <button type="button" class="btn" id="btnNext">Weiter</button>
      <button type="button" class="btn" id="btnRestart">Restart</button>
      <button type="button" class="btn" id="btnBack">Back</button>
      <button type="button" class="btn" id="btnHome">Home</button>
      <button type="button" class="btn" id="btnExplainWrite">Erklärung</button>
    </div>
  `;

  const input = document.getElementById("writeInput");
  const result = document.getElementById("result");
  const btnCheck = document.getElementById("btnCheckWrite");
  const btnNext = document.getElementById("btnNext");
  const btnRestart = document.getElementById("btnRestart");
  const btnBack = document.getElementById("btnBack");
  const btnHome = document.getElementById("btnHome");
  const btnExplain = document.getElementById("btnExplainWrite");

  
// 🎧 Hören (Write-Frage)
document.getElementById("btnSpeakWriteQ")?.addEventListener("click", () => {
  speakDE(q.q.replace("___", "…"));
});

// 🗣️ Sprich nach (Write – mit Lösung, wenn schon bekannt)
document.getElementById("btnSpeakWriteRepeat")?.addEventListener("click", () => {
  speakDE(q.q.replace("___", currentAnswer || "…"));
});


  // Sicherheits-Check (falls irgendwas fehlt)
  if (!input || !result || !btnCheck || !btnNext || !btnRestart || !btnBack || !btnHome || !btnExplain) {
    console.error("WRITE UI fehlt:", { input, result, btnCheck, btnNext, btnRestart, btnBack });
    return;
  }

  const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ");

  btnCheck.addEventListener("click", () => {
    const user = norm(input.value);
    const correct = norm(q.answer);

    if (!correct) {
      result.innerHTML = `⚠️ <span style="color:#e67e22">Keine richtige Antwort gesetzt (q.answer fehlt).</span>`;
      return;
    }

    if (user === correct) {
      result.innerHTML = `✅ <span style="color:green">Richtig!</span>`;
      quizCorrect++;
    } else {
      result.innerHTML = `❌ <span style="color:red">Falsch</span> – richtig: <b>${escapeHtml(q.answer)}</b><br>${q.hint ? "Tipp: " + escapeHtml(q.hint) : ""}`;
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnCheck.click();
  });

  btnNext.addEventListener("click", nextQuestion);
  btnRestart.addEventListener("click", () => showExercises(true));
  btnBack.addEventListener("click", showHome);
  btnHome.addEventListener("click", showHome);
  btnExplain.addEventListener("click", () => {
    renderExplanation(q, lesson, result);
  });

  input.focus();
}

function checkWriteAnswer(q) {
  const input = document.getElementById("writeInput");
  const user = input.value.trim().toLowerCase();
  const correct = q.answer.trim().toLowerCase();

  const r = document.getElementById("result");
  const btnNext = document.getElementById("btnNext");

  if (user === correct) {
    r.textContent = "✅ Richtig!";
    btnNext.disabled = false;
  } else {
    r.textContent = "❌ Falsch – ändere das Verb und prüfe nochmal.";
    btnNext.disabled = true;
    input.focus();
    input.select();
  }
}

  const updateSentence = () => {
    let sentence = selected.join(" ");
sentence = sentence.replace(/\s+([.,!?])/g, "$1");
document.getElementById("sentenceBox").textContent = sentence;

  };

  document.querySelectorAll(".word-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selected.push(btn.dataset.word);
      btn.disabled = true;
      updateSentence();
    });
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    selected = [];
    document.getElementById("result").textContent = "";
    document.querySelectorAll(".word-btn").forEach(b => b.disabled = false);
    updateSentence();
  });

  document.getElementById("btnCheck").addEventListener("click", () => {
    let userSentence = selected.join(" ").trim();
userSentence = userSentence.replace(/\s+([.,!?])/g, "$1");

    const r = document.getElementById("result");

    if (userSentence === q.answer) {
      r.innerHTML = `✅ <span ="color:green">Richtig!</span> <br><b>${escapeHtml(q.answer)}</b>`;
      if (typeof speakDE === "function") speakDE(q.answer);
    } else {
      r.innerHTML = `❌ <span style="color:red">Falsch</span><br>✔ Richtig: <b>${escapeHtml(q.answer)}</b>`;
    }
  });

  document.getElementById("btnNext").addEventListener("click", nextQuestion);
}



/* ---------- START ---------- */
bindLevelButtons();
showHome();
function setupCategorySticky() {
  const sticky = document.getElementById("catSticky");
  const sections = Array.from(document.querySelectorAll(".cat-section[data-cat]"));
  if (!sticky || !sections.length) return;

  function updateSticky() {
    // Wenn erste Kategorie noch sichtbar oben ist -> Sticky verstecken
    const firstTop = sections[0].getBoundingClientRect().top;
    if (firstTop > 80) {
      sticky.style.display = "none";
      return;
    }

    // aktuelle Kategorie finden (die zuletzt über den oberen Bereich gescrollt ist)
    let current = sections[0].dataset.cat;
    for (const s of sections) {
      const top = s.getBoundingClientRect().top;
      if (top <= 90) current = s.dataset.cat;
      else break;
    }

    sticky.style.display = "block";
    sticky.innerHTML = `
      <span class="cat-title cat-title-${current}">${current}</span>
    `;
  }

  window.removeEventListener("scroll", updateSticky);
  window.addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();
}

// ===== EXTRA: Schreiben Übungen =====
const btnWriteMenu = document.getElementById("btnWriteMenu");
const writeModeBox = document.getElementById("writeModeBox");

if (btnWriteMenu && writeModeBox) {
  btnWriteMenu.addEventListener("click", () => {
    writeModeBox.style.display =
      writeModeBox.style.display === "none" || writeModeBox.style.display === ""
        ? "block"
        : "none";
  });
}
const btnWritePresent = document.getElementById("btnWritePresent");
const btnWritePerfect = document.getElementById("btnWritePerfect");
const btnWriteB2BewerbungSwitch = document.getElementById("btnWriteB2Bewerbung");
const btnWriteB2Bewerbung = document.getElementById("btnWriteB2Bewerbung");

if (btnWritePresent) {
  btnWritePresent.addEventListener("click", () => startWrite("present"));
}
if (btnWritePerfect) {
  btnWritePerfect.addEventListener("click", () => startWrite("perfect"));
}

const btnWriteB1Nebensatz = document.getElementById("btnWriteB1Nebensatz");

if (btnWriteB1Nebensatz) {
  btnWriteB1Nebensatz.addEventListener("click", () => {
    startWrite("b1_nebensatz");
  });
}
if (btnWriteB2Bewerbung) {
  btnWriteB2Bewerbung.addEventListener("click", () => {
    startWrite("b2_bewerbung");
  });
}



// ✅ A2 Schreiben – Extra Übungen (20)
const WRITE_EXERCISES = [
  // Perfekt (sein/haben) + Bewegung
  
  {
    prompt: "Schreibe den Satz (Perfekt): Ich / gehen / nach Hause",
    answer: "Ich bin nach Hause gegangen.",
    hint_de: "Bewegung → sein + gegangen",
    hint_ta: "நகர்வு → sein + gegangen"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Wir / fahren / nach Köln",
    answer: "Wir sind nach Köln gefahren.",
    hint_de: "fahren → sein",
    hint_ta: "fahren → sein"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Er / kommen / nach Deutschland",
    answer: "Er ist nach Deutschland gekommen.",
    hint_de: "kommen → sein",
    hint_ta: "kommen → sein"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Ich / bleiben / zu Hause",
    answer: "Ich bin zu Hause geblieben.",
    hint_de: "bleiben → sein",
    hint_ta: "bleiben → sein"
  },

  // nach / in / zu (typische Ziele)
  {
    prompt: "Schreibe den Satz (A2): Ich / gehen / zur Arbeit",
    answer: "Ich gehe zur Arbeit.",
    hint_de: "zu + Ort/Person → zur/zum",
    hint_ta: "zu → ஒருவரிடம்/இடத்திற்கு"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Ich / gehen / zur Arbeit",
    answer: "Ich bin zur Arbeit gegangen.",
    hint_de: "gehen → sein",
    hint_ta: "gehen → sein"
  },
  {
    prompt: "Schreibe den Satz (A2): Wir / gehen / zum Arzt",
    answer: "Wir gehen zum Arzt.",
    hint_de: "zum Arzt (zu + der Arzt)",
    hint_ta: "மருத்துவரிடம் → zum Arzt"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Wir / gehen / zum Arzt",
    answer: "Wir sind zum Arzt gegangen.",
    hint_de: "gehen → sein",
    hint_ta: "gehen → sein"
  },
  {
    prompt: "Schreibe den Satz (A2): Sie / fahren / in die Stadt",
    answer: "Sie fährt in die Stadt.",
    hint_de: "Wohin? → in die",
    hint_ta: "எங்கு செல்கிறாள்? → in die"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Sie / fahren / in die Stadt",
    answer: "Sie ist in die Stadt gefahren.",
    hint_de: "fahren → sein",
    hint_ta: "fahren → sein"
  },

  // Arzt / Termin
  {
    prompt: "Schreibe den Satz: Ich / haben / einen Termin / beim Arzt",
    answer: "Ich habe einen Termin beim Arzt.",
    hint_de: "haben + Akkusativ",
    hint_ta: "habe = வைத்திருக்கிறேன்"
  },
  {
    prompt: "Schreibe den Satz: Wir / müssen / den Termin / verschieben",
    answer: "Wir müssen den Termin verschieben.",
    hint_de: "müssen + Infinitiv am Ende",
    hint_ta: "müssen → கட்டாயம்"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Wir / müssen / den Termin / verschieben",
    answer: "Wir haben den Termin verschieben müssen.",
    hint_de: "Modalverb Perfekt → haben + Infinitiv + müssen",
    hint_ta: "Modalverb Perfekt → haben + Infinitiv + müssen"
  },
  {
    prompt: "Schreibe den Satz: Bitte / kommen / Sie / pünktlich",
    answer: "Bitte kommen Sie pünktlich.",
    hint_de: "Imperativ Höflichkeitsform",
    hint_ta: "தயவு செய்து நேரத்திற்கு வாருங்கள்"
  },

  // Einkaufen / Alltag
  {
    prompt: "Schreibe den Satz: Ich / einkaufen / im Supermarkt",
    answer: "Ich kaufe im Supermarkt ein.",
    hint_de: "trennbares Verb: einkaufen → kaufe ... ein",
    hint_ta: "பிரிக்கப்படும் வினை: kaufe ... ein"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Ich / einkaufen / im Supermarkt",
    answer: "Ich habe im Supermarkt eingekauft.",
    hint_de: "einkaufen → haben + eingekauft",
    hint_ta: "haben + Partizip"
  },
  {
    prompt: "Schreibe den Satz: Wir / brauchen / Brot und Milch",
    answer: "Wir brauchen Brot und Milch.",
    hint_de: "brauchen + Akkusativ",
    hint_ta: "brauchen = தேவை"
  },
  {
    prompt: "Schreibe den Satz (Perfekt): Wir / kaufen / Obst",
    answer: "Wir haben Obst gekauft.",
    hint_de: "kaufen → haben + gekauft",
    hint_ta: "haben + Partizip"
  },

  // in der / in die (sanft A2→B1)
  {
    prompt: "Schreibe den Satz: Ich / sein / in der Schule",
    answer: "Ich bin in der Schule.",
    hint_de: "Wo? → in der",
    hint_ta: "எங்கே? → in der"
  },
  {
    prompt: "Schreibe den Satz: Ich / gehen / in die Schule",
    answer: "Ich gehe in die Schule.",
    hint_de: "Wohin? → in die",
    hint_ta: "எங்கு செல்கிறேன்? → in die"
  }
];

// ===============================
// ✍️ SCHREIBÜBUNGEN – SETS
// ===============================

const WRITE_PRESENT = [
  { prompt: "Schreibe (Präsens): Ich / arbeiten / heute", answer: "Ich arbeite heute." },
  { prompt: "Schreibe (Präsens): Wir / lernen / Deutsch", answer: "Wir lernen Deutsch." },
  { prompt: "Schreibe (Präsens): Er / wohnen / in Berlin", answer: "Er wohnt in Berlin." },
  { prompt: "Schreibe (Präsens): Sie / kommen / morgen", answer: "Sie kommt morgen." },
  { prompt: "Schreibe (Präsens): Ich / trinken / Wasser", answer: "Ich trinke Wasser." },

  { prompt: "Schreibe (Präsens): Wir / gehen / einkaufen", answer: "Wir gehen einkaufen." },
  { prompt: "Schreibe (Präsens): Du / machen / Hausaufgaben", answer: "Du machst Hausaufgaben." },
  { prompt: "Schreibe (Präsens): Er / fahren / zur Arbeit", answer: "Er fährt zur Arbeit." },
  { prompt: "Schreibe (Präsens): Sie / lesen / ein Buch", answer: "Sie liest ein Buch." },
  { prompt: "Schreibe (Präsens): Ich / sehen / einen Film", answer: "Ich sehe einen Film." },

  { prompt: "Schreibe (Präsens): Wir / kochen / zu Hause", answer: "Wir kochen zu Hause." },
  { prompt: "Schreibe (Präsens): Du / sprechen / Deutsch", answer: "Du sprichst Deutsch." },
  { prompt: "Schreibe (Präsens): Er / schlafen / früh", answer: "Er schläft früh." },
  { prompt: "Schreibe (Präsens): Sie / arbeiten / im Büro", answer: "Sie arbeitet im Büro." },
  { prompt: "Schreibe (Präsens): Ich / brauchen / Hilfe", answer: "Ich brauche Hilfe." },

  { prompt: "Schreibe (Präsens): Wir / haben / einen Termin", answer: "Wir haben einen Termin." },
  { prompt: "Schreibe (Präsens): Du / warten / auf den Bus", answer: "Du wartest auf den Bus." },
  { prompt: "Schreibe (Präsens): Er / kaufen / Brot", answer: "Er kauft Brot." },
  { prompt: "Schreibe (Präsens): Sie / bezahlen / an der Kasse", answer: "Sie bezahlt an der Kasse." },
  { prompt: "Schreibe (Präsens): Ich / bleiben / heute zu Hause", answer: "Ich bleibe heute zu Hause." }
];


const WRITE_PERFECT = [
  { prompt: "Schreibe (Perfekt): Ich / gehen / nach Hause", answer: "Ich bin nach Hause gegangen." },
  { prompt: "Schreibe (Perfekt): Wir / fahren / nach Köln", answer: "Wir sind nach Köln gefahren." },
  { prompt: "Schreibe (Perfekt): Er / kommen / spät", answer: "Er ist spät gekommen." },
  { prompt: "Schreibe (Perfekt): Sie / bleiben / zu Hause", answer: "Sie ist zu Hause geblieben." },
  { prompt: "Schreibe (Perfekt): Ich / lernen / Deutsch", answer: "Ich habe Deutsch gelernt." },

  { prompt: "Schreibe (Perfekt): Wir / machen / Hausaufgaben", answer: "Wir haben Hausaufgaben gemacht." },
  { prompt: "Schreibe (Perfekt): Du / kaufen / Brot", answer: "Du hast Brot gekauft." },
  { prompt: "Schreibe (Perfekt): Er / trinken / Wasser", answer: "Er hat Wasser getrunken." },
  { prompt: "Schreibe (Perfekt): Sie / lesen / ein Buch", answer: "Sie hat ein Buch gelesen." },
  { prompt: "Schreibe (Perfekt): Ich / sehen / einen Film", answer: "Ich habe einen Film gesehen." },

  { prompt: "Schreibe (Perfekt): Wir / kochen / zu Hause", answer: "Wir haben zu Hause gekocht." },
  { prompt: "Schreibe (Perfekt): Du / sprechen / Deutsch", answer: "Du hast Deutsch gesprochen." },
  { prompt: "Schreibe (Perfekt): Er / schlafen / früh", answer: "Er hat früh geschlafen." },
  { prompt: "Schreibe (Perfekt): Sie / arbeiten / im Büro", answer: "Sie hat im Büro gearbeitet." },
  { prompt: "Schreibe (Perfekt): Ich / brauchen / Hilfe", answer: "Ich habe Hilfe gebraucht." },

  { prompt: "Schreibe (Perfekt): Wir / haben / einen Termin", answer: "Wir haben einen Termin gehabt." },
  { prompt: "Schreibe (Perfekt): Du / warten / auf den Bus", answer: "Du hast auf den Bus gewartet." },
  { prompt: "Schreibe (Perfekt): Er / bezahlen / an der Kasse", answer: "Er hat an der Kasse bezahlt." },
  { prompt: "Schreibe (Perfekt): Sie / bestellen / einen Kaffee", answer: "Sie hat einen Kaffee bestellt." },
  { prompt: "Schreibe (Perfekt): Ich / bleiben / zu Hause", answer: "Ich bin zu Hause geblieben." }
];
// ===============================
// ✍️ B1 Schreiben – Nebensätze
// weil / dass / obwohl
// ===============================

const WRITE_B1_NEBENSAETZE = [

  // 🔹 weil
  {
    prompt: "Verbinde die Sätze mit WEIL: Ich lerne Deutsch. Ich lebe in Deutschland.",
    answer: "Ich lerne Deutsch, weil ich in Deutschland lebe."
  },
  {
    prompt: "Verbinde mit WEIL: Er bleibt zu Hause. Er ist krank.",
    answer: "Er bleibt zu Hause, weil er krank ist."
  },
  {
    prompt: "Verbinde mit WEIL: Wir fahren nicht. Es regnet stark.",
    answer: "Wir fahren nicht, weil es stark regnet."
  },
  {
    prompt: "Verbinde mit WEIL: Sie ist glücklich. Sie hat die Prüfung bestanden.",
    answer: "Sie ist glücklich, weil sie die Prüfung bestanden hat."
  },

  // 🔹 dass
  {
    prompt: "Bilde einen Satz mit DASS: Ich denke. Er kommt heute.",
    answer: "Ich denke, dass er heute kommt."
  },
  {
    prompt: "Bilde einen Satz mit DASS: Sie sagt. Sie hat keine Zeit.",
    answer: "Sie sagt, dass sie keine Zeit hat."
  },
  {
    prompt: "Bilde einen Satz mit DASS: Wir wissen. Der Zug ist spät.",
    answer: "Wir wissen, dass der Zug spät ist."
  },
  {
    prompt: "Bilde einen Satz mit DASS: Er glaubt. Die Prüfung ist schwer.",
    answer: "Er glaubt, dass die Prüfung schwer ist."
  },

  // 🔹 obwohl
  {
    prompt: "Verbinde mit OBWOHL: Er arbeitet viel. Er verdient wenig.",
    answer: "Er arbeitet viel, obwohl er wenig verdient."
  },
  {
    prompt: "Verbinde mit OBWOHL: Es regnet. Wir gehen spazieren.",
    answer: "Wir gehen spazieren, obwohl es regnet."
  },
  {
    prompt: "Verbinde mit OBWOHL: Sie ist müde. Sie lernt weiter.",
    answer: "Sie lernt weiter, obwohl sie müde ist."
  },
  {
    prompt: "Verbinde mit OBWOHL: Er ist krank. Er geht zur Arbeit.",
    answer: "Er geht zur Arbeit, obwohl er krank ist."
  },

  // 🔹 gemischt
  {
    prompt: "Verbinde mit WEIL: Ich bleibe zu Hause. Ich habe viel Arbeit.",
    answer: "Ich bleibe zu Hause, weil ich viel Arbeit habe."
  },
  {
    prompt: "Bilde einen Satz mit DASS: Wir hoffen. Das Wetter wird besser.",
    answer: "Wir hoffen, dass das Wetter besser wird."
  },
  {
    prompt: "Verbinde mit OBWOHL: Sie hat Angst. Sie macht die Prüfung.",
    answer: "Sie macht die Prüfung, obwohl sie Angst hat."
  },
  {
    prompt: "Verbinde mit WEIL: Er kommt zu spät. Der Bus hat Verspätung.",
    answer: "Er kommt zu spät, weil der Bus verspätet ist."

  },
  {
    prompt: "Bilde einen Satz mit DASS: Ich weiß. Du hast recht.",
    answer: "Ich weiß, dass du recht hast."
  },
  {
    prompt: "Verbinde mit OBWOHL: Er ist alt. Er arbeitet noch.",
    answer: "Er arbeitet noch, obwohl er alt ist."
  },
  {
    prompt: "Verbinde mit WEIL: Wir lernen Deutsch. Wir wollen arbeiten.",
    answer: "Wir lernen Deutsch, weil wir arbeiten wollen."
  },
  {
    prompt: "Bilde einen Satz mit DASS: Sie merkt. Die Zeit ist knapp.",
    answer: "Sie merkt, dass die Zeit knapp ist."
  }
];

const WRITE_B2_BEWERBUNG = [
  {
    prompt: "Schreibe eine kurze Bewerbung: Stelle + Firma nennen.",
    answer: "Hiermit bewerbe ich mich um die Stelle als Lagerhelfer bei der Firma Müller GmbH."
  },
  {
    prompt: "Schreibe: Warum interessierst du dich für die Stelle?",
    answer: "Ich interessiere mich für die Stelle, weil ich gerne praktisch arbeite und zuverlässig bin."
  },
  {
    prompt: "Schreibe: Welche Erfahrung hast du?",
    answer: "Ich habe bereits zwei Jahre Erfahrung im Lager und im Umgang mit Waren."
  },
  {
    prompt: "Schreibe: Welche Stärken hast du?",
    answer: "Ich bin pünktlich, sorgfältig und arbeite gern im Team."
  },
  {
    prompt: "Schreibe: Deine Sprachkenntnisse nennen.",
    answer: "Ich spreche Deutsch auf B2-Niveau und Tamil als Muttersprache."
  },
  {
    prompt: "Schreibe: Deine Verfügbarkeit nennen.",
    answer: "Ich kann ab dem 1. Juli in Vollzeit beginnen."
  },
  {
    prompt: "Schreibe: Bitte um ein Vorstellungsgespräch.",
    answer: "Ich freue mich über eine Einladung zu einem persönlichen Gespräch."
  },
  {
    prompt: "Schreibe: Lebenslauf und Zeugnisse erwähnen.",
    answer: "Meinen Lebenslauf und Zeugnisse sende ich Ihnen anbei."
  },
  {
    prompt: "Schreibe: Höflicher Abschluss.",
    answer: "Mit freundlichen Grüßen"
  },
  {
    prompt: "Schreibe: Kurze E-Mail-Betreffzeile.",
    answer: "Bewerbung als Lagerhelfer"
  },
  {
    prompt: "Schreibe: Bitte um Rückmeldung.",
    answer: "Ich freue mich auf Ihre Rückmeldung."
  },
  {
    prompt: "Schreibe: Deine Motivation in einem Satz.",
    answer: "Ich möchte mich beruflich weiterentwickeln und neue Aufgaben lernen."
  },
  {
    prompt: "Schreibe: Deine Ausbildung nennen.",
    answer: "Ich habe eine Ausbildung als Fachlagerist abgeschlossen."
  },
  {
    prompt: "Schreibe: Kündigungsfrist nennen.",
    answer: "Meine Kündigungsfrist beträgt vier Wochen."
  },
  {
    prompt: "Schreibe: Bereitschaft zu Schichtarbeit.",
    answer: "Ich bin bereit, im Schichtbetrieb zu arbeiten."
  }
];


// 👉 STANDARD (Start)
let activeWriteSet = WRITE_PRESENT;
let writeIndex = 0;

function startWrite(mode) {
  if (mode === "present") {
    activeWriteSet = WRITE_PRESENT;
  } else if (mode === "perfect") {
    activeWriteSet = WRITE_PERFECT;
  } else if (mode === "b1_nebensatz") {
  activeWriteSet = WRITE_B1_NEBENSAETZE;
} else if (mode === "b2_bewerbung") {
  activeWriteSet = WRITE_B2_BEWERBUNG;
} else {
  activeWriteSet = [];
}


  writeIndex = 0;
  showWriteExtra();
}



function normalizeText(s) {
  return String(s || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!?])/g, "$1");
}

function showWriteExtra() {
  writeIndex = 0;
  renderWriteExtra();
}

function renderWriteExtra() {
 const item = activeWriteSet[writeIndex];
 


  screenTitle.textContent = "Schreiben – Extra Übung";
  screenBody.innerHTML = `
    <p><b>${item.prompt}</b></p>

    <input id="writeInput"
      style="width:100%;padding:12px;font-size:18px"
      placeholder="Hier schreiben...">

  <div class="btn-row" style="margin-top:12px">

  <button class="btn" id="btnSpeakTask">🔊 Aufgabe</button>
  <button class="btn" id="btnShowSolution">✅ Lösung</button>
  <button class="btn" id="btnSpeakSolution">🔊 Lösung</button>

  <button class="btn primary" id="btnCheckWrite">Prüfen</button>
<button class="btn danger" id="btnBackWrite">Back</button>
<button class="btn primary" id="btnNextWrite">Next</button>
<button class="btn" id="btnHomeWrite">Home</button>

</div>


    <p id="writeResult" style="margin-top:12px;font-weight:800"></p>
    <p style="opacity:.7;margin-top:6px">Übung ${writeIndex + 1} / ${activeWriteSet.length}
</p>
  `;

  const input = document.getElementById("writeInput");
  const result = document.getElementById("writeResult");

  // 🔊 Aufgabe sprechen
document.getElementById("btnSpeakTask").onclick = () => {
  speakDE(item.prompt);
};

// ✅ Lösung anzeigen
document.getElementById("btnShowSolution").onclick = () => {
  input.value = item.answer;
  result.textContent = "✅ Lösung angezeigt.";
};
// ===============================
// 🔘 Schreibübung wechseln
// ===============================

const btnWritePresent = document.getElementById("btnWritePresent");
const btnWritePerfect = document.getElementById("btnWritePerfect");

if (btnWritePresent) {
  btnWritePresent.onclick = () => {
    activeWriteSet = WRITE_PRESENT;
    writeIndex = 0;
    renderWriteExtra();
  };
}

if (btnWritePerfect) {
  btnWritePerfect.onclick = () => {
    activeWriteSet = WRITE_PERFECT;
    writeIndex = 0;
    renderWriteExtra();
  };
}
if (btnWriteB1Nebensatz) {
  btnWriteB1Nebensatz.onclick = () => {
    activeWriteSet = WRITE_B1_NEBENSAETZE;
    writeIndex = 0;
    renderWriteExtra();
  };
}
if (btnWriteB2BewerbungSwitch) {
  btnWriteB2BewerbungSwitch.onclick = () => {
    activeWriteSet = WRITE_B2_BEWERBUNG;
    writeIndex = 0;
    renderWriteExtra();
  };
}

// 🔊 Lösung sprechen
document.getElementById("btnSpeakSolution").onclick = () => {
  speakDE(item.answer);
};


  document.getElementById("btnCheckWrite").onclick = () => {
    const user = normalizeText(input.value).toLowerCase();
    const correct = normalizeText(item.answer).toLowerCase();
    if (!user) {
      result.textContent = "✍️ Bitte erst schreiben.";
      return;
    }
    result.textContent = (user === correct)
      ? "✅ Richtig!"
      : `❌ Falsch. Lösung: ${item.answer}`;
  };

  document.getElementById("btnBackWrite").onclick = () => {
    if (writeIndex > 0) {
      writeIndex--;
      renderWriteExtra();
    }
  };

  document.getElementById("btnNextWrite").onclick = () => {
    if (writeIndex < activeWriteSet.length - 1) {

      writeIndex++;
      renderWriteExtra();
    } else {
      screenTitle.textContent = "Schreiben – Fertig ✅";
      screenBody.innerHTML = `
        <p>Du hast alle Schreibübungen gemacht.</p>
        <button class="btn" onclick="showWriteExtra()">Restart</button>
        <button class="btn" onclick="showHome()">Home</button>
      `;
    }
  };

  document.getElementById("btnHomeWrite").onclick = showHome;
}


function openPrintGrammar(lesson) {
  const win = window.open("", "_blank");
  if (!win) {
    alert("Popup blockiert. Bitte Popups erlauben.");
    return;
  }

  win.document.write(`
    <html>
    <head>
      <meta charset="utf-8" />
      <title>${escapeHtml(lesson.title || "Grammatik")}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
        h2 { margin-top: 20px; }
        button { margin-top: 18px; padding: 10px 14px; border: 1px solid #ddd; border-radius: 10px; }
        @media print { button { display:none; } }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(lesson.title || "Grammatik")}</h1>

      <h2>Deutsch (Grammatik)</h2>
<ul>
  ${((lesson.explain_de && lesson.explain_de.length) ? lesson.explain_de : (lesson.de || []))
      .map(x => `<li>${escapeHtml(x)}</li>`).join("")}
</ul>

<h2>Tamil (விளக்கம்)</h2>
<ul>
  ${((lesson.explain_ta && lesson.explain_ta.length) ? lesson.explain_ta : (lesson.ta || []))
      .map(x => `<li>${escapeHtml(x)}</li>`).join("")}
</ul>


      <button onclick="window.print()">🖨️ Drucken / PDF</button>
    </body>
    </html>
  `);

  win.document.close();
  win.focus();
}


