const testWalkthroughs = [
  {
    name: "OCS Cast Film and Defect Review",
    area: "A-1 / film performance",
    purpose: "Makes a thin film from the resin and checks it for gels and other visible defects.",
    sample: "Pellet or resin sample tied to a lot, grade, time, and test request.",
    internRole: "Observe the setup, identify hazards, map the sample-to-result flow, and ask how the technician knows the system is ready.",
    hazards: ["Hot polymer and hot equipment", "Rotating screws, chill rolls, and pinch points", "Static electricity", "Sharp scraper or shim-stock edges", "Pellet slip hazards"],
    controls: ["Approved procedure and trained operator", "Required PPE and safe positioning", "Emergency stop awareness", "Instrument status and SQC review", "Documented result entry and review"],
    data: "Film defects, appearance ratings, comments, instrument output, sample ID, analyst, method, and review notes must stay traceable.",
    decision: {
      prompt: "During shadowing, pellets spill near the OCS walkway while the run is active. What is the best intern response?",
      options: [
        "Tell the mentor or technician immediately and follow their direction; do not step into active equipment space.",
        "Quickly clean the pellets yourself so nobody slips.",
        "Ignore it until the run is complete because it is not part of the test result.",
      ],
      correct: 0,
      feedback: [
        "Correct. The intern recognizes the slip hazard but stays within approved boundaries and escalates.",
        "Not the safest choice. Cleaning may be appropriate only if trained, allowed, and safe to do so.",
        "Not acceptable. A visible hazard should be communicated promptly.",
      ],
    },
  },
  {
    name: "Particle Size Distribution",
    area: "A-1 / resin or powder properties",
    purpose: "Sorts the material by size so the lab can see the amount of fines, normal material, and oversize pieces.",
    sample: "Representative LLDPE or HDPE material with clear identity and handling history.",
    internRole: "Build a process map showing sample ID, preparation, measurement, calculation, result entry, and review.",
    hazards: ["Dust or fines depending on material", "Moving parts or sieves", "Manual handling", "Sample mix-up risk"],
    controls: ["Correct sample label", "Clean equipment", "Approved method", "Balance or instrument checks", "Clear calculation and data entry review"],
    data: "The result should link to sample ID, method, equipment, preparation notes, raw observations, calculations, and any retest reason.",
    decision: {
      prompt: "A sample cup is readable, but the lot number does not match the test request. What should happen before testing?",
      options: [
        "Pause and ask the technician or supervisor to resolve the identity mismatch.",
        "Test it anyway and add a note later if the result looks strange.",
        "Copy the lot number from a nearby sample because it is probably the same material.",
      ],
      correct: 0,
      feedback: [
        "Correct. Sample identity is a data integrity control, not a clerical detail.",
        "Not acceptable. Testing an unresolved sample can create non-defensible data.",
        "Never guess or copy identity information.",
      ],
    },
  },
  {
    name: "Bulk Density",
    area: "A-1 / physical properties",
    purpose: "Measures how much material fits in a known volume.",
    sample: "Granules or pellets with traceable sample identity.",
    internRole: "Observe how the sample is prepared, how the measurement volume is controlled, and where the official result is recorded.",
    hazards: ["Pellet spill slip hazard", "Manual handling", "Incorrect sample conditioning or container use"],
    controls: ["Clean dry equipment", "Approved fill technique", "Balance or volume verification", "Repeatability expectations", "Reviewed entry in the correct record"],
    data: "Bulk density data must show the sample, method, equipment, raw value or calculation, analyst, date/time, and review path.",
    decision: {
      prompt: "A measured value is very different from the previous sample. What is the best first response?",
      options: [
        "Notify the technician and compare against procedure, sample identity, equipment status, and required review steps.",
        "Change the value to match the expected trend because the first number is probably wrong.",
        "Run it again without documenting anything and report only the better-looking result.",
      ],
      correct: 0,
      feedback: [
        "Correct. Unusual data needs controlled review, not informal editing.",
        "Incorrect. Changing data to match expectations violates data integrity.",
        "Incorrect. Retesting must follow procedure and remain traceable.",
      ],
    },
  },
  {
    name: "Melt Index",
    area: "Physical property testing",
    purpose: "Measures how easily the resin flows when it is heated under set conditions.",
    sample: "Polyethylene sample associated with grade, lot, and required method.",
    internRole: "Learn what conditions are controlled, which parts may be hot, and how calibration or checks support trust in the result.",
    hazards: ["Hot barrel or die", "Cutting tools", "Moving weights or mechanisms", "Burn risk"],
    controls: ["Qualified operator", "Method conditions verified", "Instrument status acceptable", "Timing and mass handled per procedure", "Result reviewed before use"],
    data: "The reported result depends on method conditions, sample identity, instrument status, raw measurements, calculations, and review.",
    decision: {
      prompt: "The instrument is due for a required check and the plant is waiting on data. What should an intern conclude?",
      options: [
        "Timeliness matters, but an uncontrolled instrument can make data unusable; ask the qualified person what procedure requires.",
        "Run the sample quickly because production needs the result.",
        "Use yesterday's result as a temporary value.",
      ],
      correct: 0,
      feedback: [
        "Correct. Timely data must still be controlled, traceable, and procedure-based.",
        "Incorrect. Speed does not override instrument control requirements.",
        "Incorrect. Never substitute old data for a new sample.",
      ],
    },
  },
  {
    name: "Density / Ash / Analytical Checks",
    area: "A-2 or other lab areas",
    purpose: "Covers property checks such as density and ash that help confirm the material is what the plant expects.",
    sample: "Material sample with clear identity and required test request.",
    internRole: "Ask what the test measures, what can go wrong, and what evidence shows the result is defensible.",
    hazards: ["Hot surfaces or furnaces depending on method", "Chemicals or sample preparation hazards", "Glassware or sharp tools", "Data transcription risk"],
    controls: ["Site-specific PPE", "Approved method", "Instrument calibration/checks", "SQC where applicable", "Supervisor or specialist escalation for abnormal results"],
    data: "Traceability should include sample, method, instrument, analyst, raw data, calculations, corrections, comments, and review.",
    decision: {
      prompt: "A result appears out of specification. What should the intern do?",
      options: [
        "Do not interpret or decide product status; ask the technician what the approved escalation/review path is.",
        "Tell operations the product failed because the number is outside the limit.",
        "Suggest deleting the result and retesting to avoid confusion.",
      ],
      correct: 0,
      feedback: [
        "Correct. Interns learn the review path; they do not make product quality decisions.",
        "Incorrect. Product status decisions require approved roles and review.",
        "Incorrect. Deleting or hiding data is a serious data integrity issue.",
      ],
    },
  },
  {
    name: "GC Purity Checks",
    area: "Analytical testing",
    purpose: "Uses gas chromatography to check the composition or purity of selected materials.",
    sample: "Properly labeled sample or standard handled by trained personnel.",
    internRole: "Observe how sample identity, instrument method, standards, and chromatogram review connect to a reported result.",
    hazards: ["Chemicals and vapors", "Pressurized gases", "Glassware", "Instrument heat or electrical systems"],
    controls: ["Trained operator only", "Chemical handling requirements", "Correct method and sequence", "Standards or checks", "Chromatogram/result review"],
    data: "A defensible result connects the sample, method, instrument sequence, raw chromatogram/data, integration or review notes, and reported value.",
    decision: {
      prompt: "You notice a vial label is partially unreadable before analysis. What is the correct learning response?",
      options: [
        "Point it out to the trained analyst and ask how sample identity is confirmed before analysis.",
        "Rewrite the label based on what you think it says.",
        "Place it in the sequence because the instrument file will identify it later.",
      ],
      correct: 0,
      feedback: [
        "Correct. You protected sample identity and stayed inside the intern role.",
        "Incorrect. Do not recreate official identity information by guessing.",
        "Incorrect. Instrument files do not fix an unresolved sample identity problem.",
      ],
    },
  },
];

const guideConfigs = {
  intern: {
    brand: "MBPP Lab Intern Guide",
    homeTitle: "Mont Belvieu Plastics Plant Lab Intern Guide",
    startTitle: "Start Intern Guide",
    secondaryTitle: "Resources & Guides",
    resourcesEyebrow: "Intern Guide / Resources",
    resourcesTitle: "Sources and lab language.",
  },
  employee: {
    brand: "MBPP Lab Orientation",
    homeTitle: "Mont Belvieu Plastics Plant Lab Orientation",
    startTitle: "Start Lab Orientation",
    secondaryTitle: "Resources & Guides",
    resourcesEyebrow: "MBPP Lab Orientation / Resources",
    resourcesTitle: "Sources and lab reference.",
  },
  technician: {
    brand: "MBPP Technician Onboarding",
    homeTitle: "Mont Belvieu Plastics Plant Technician Onboarding",
    startTitle: "First Week Overview",
    secondaryTitle: "Technician Playbook",
    resourcesEyebrow: "Technician Playbook",
    resourcesTitle: "What do I do now?",
  },
};

const views = {
  audience: document.querySelector("#audienceView"),
  home: document.querySelector("#homeView"),
  slideshow: document.querySelector("#slideshowView"),
  resources: document.querySelector("#resourcesView"),
};
const guideBrandLabel = document.querySelector("#guideBrandLabel");
const homeTitle = document.querySelector("#homeTitle");
const startGuideTitle = document.querySelector("#startGuideTitle");
const secondaryGuideTitle = document.querySelector("#secondaryGuideTitle");
const resourcesEyebrow = document.querySelector("#resourcesEyebrow");
const resourcesTitle = document.querySelector("#resourcesTitle");
const topbarBrand = document.querySelector("[data-guide-home]");
const topbarIntroButton = document.querySelector("[data-intro-open]");
const topbarSwitchButton = document.querySelector("[data-switch-guide]");
const slideStage = document.querySelector(".slide-stage");
const slideEyebrow = document.querySelector("#slideEyebrow");
const slideCounter = document.querySelector("#slideCounter");
const slideProgress = document.querySelector("#slideProgress");
const slideContent = document.querySelector("#slideContent");
const resourcesContent = document.querySelector("#resourcesContent");
const introOverlay = document.querySelector("#welcomeIntro");
const introTitle = document.querySelector("#welcomeTitle");
const introVideo = document.querySelector("#introVideo");
const introVideoModule = document.querySelector("#introVideoModule");
const disclaimerOverlay = document.querySelector("#guideDisclaimer");
const disclaimerButton = document.querySelector("[data-disclaimer-acknowledge]");
const mobileExperienceNote = document.querySelector("#mobileExperienceNote");
const viewportMeta = document.querySelector('meta[name="viewport"]');
const INTRO_SEEN_KEY = "mbppInternGuideIntroSeen";
const MOBILE_NOTICE_KEY = "mbppInternGuideMobileNoticeDismissed";
const DEFAULT_VIEWPORT_CONTENT = viewportMeta?.getAttribute("content") || "width=device-width, initial-scale=1";
const SLIDESHOW_VIEWPORT_CONTENT = "width=device-width, initial-scale=1, viewport-fit=cover";
const VIEW_TRANSITION_MS = 280;
const SLIDE_ENTER_MS = 620;
const REVEAL_CLASS_MS = 1200;
const DETAILS_ANIMATION_MS = 300;

let activeGuide = null;
let pendingGuide = null;
let activeView = "audience";
let activeSlide = 0;
let activeRevealStep = 0;
let activeIntroScene = 0;
let introSceneChangeTimer = null;
let slideAnimationTimer = null;
let revealAnimationTimer = null;
let isViewTransitioning = false;
let sfxEnabled = true;
let audioUnlocked = false;
let audioContext = null;

const introScenes = [
  {
    theme: "welcome",
    title: ["Welcome,", "high school intern."],
    video: false,
  },
  {
    theme: "context",
    title: ["See where", "an internship", "can lead."],
    video: false,
  },
  {
    theme: "video",
    title: ["Official", "ExxonMobil video."],
    video: true,
  },
  {
    theme: "ready",
    title: ["Start the", "MBPP lab", "walkthrough."],
    video: false,
  },
];

const photos = {
  plant: {
    src: "assets/photo-plant.png",
    alt: "Industrial polyethylene plant units, piping, and rail loading area.",
  },
  lab: {
    src: "assets/photo-lab-bench.png",
    alt: "Polymer quality-control lab bench with pellet samples, balance, PPE, and instruments.",
  },
  pellets: {
    src: "assets/photo-pellets.png",
    alt: "White polyethylene pellets with sieve stack, trays, and sample containers.",
  },
  film: {
    src: "assets/photo-film.png",
    alt: "Clear polymer film running through a lab inspection and optical review setup.",
  },
  melt: {
    src: "assets/photo-melt.png",
    alt: "Polymer melt-flow testing instrument with pellets, tools, and heat-resistant gloves.",
  },
  analytical: {
    src: "assets/photo-analytical.png",
    alt: "Analytical chemistry instruments with sample vials and quality-control records.",
  },
};

const slideVisuals = {
  exxonCompany: {
    src: "assets/slide-01-exxonmobil-overview.png",
    alt: "Large modern energy and chemical manufacturing complex with pipe racks, towers, tanks, and rail infrastructure at sunrise.",
  },
  exxonProducts: {
    src: "assets/slide-02-chemical-materials.png",
    alt: "Polyethylene pellets, film, pipe, packaging, and molded plastic samples arranged on a clean industrial worktable.",
  },
  exxonOperations: {
    src: "assets/slide-03-reliable-operations.png",
    alt: "Industrial operations control room with safety gear, process screens, and manufacturing units visible through windows.",
  },
  mbppSite: {
    src: "assets/slide-04-mbpp-site-context.png",
    alt: "Polyethylene plant site with process units, pellet handling silos, pipe racks, railcars, and loading infrastructure.",
  },
  mbppPolyethylene: {
    src: "assets/slide-05-polyethylene-resin.png",
    alt: "Close-up of translucent polyethylene pellets in a glass dish on a clean polymer lab bench with sample containers and PPE.",
  },
  mbppProducts: {
    src: "assets/slide-06-polyethylene-end-uses.png",
    alt: "Polyethylene pellets, clear film rolls, packaging, liner material, pipe section, and molded container samples in a polymer technical center.",
  },
  mbppSampling: {
    src: "assets/slide-07-plant-sample-testing.png",
    alt: "Sealed polymer pellet sample container on a red tray with PPE and plant rail-loading equipment blurred in the background.",
  },
  labPurpose: {
    src: "assets/slide-08-lab-overview.png",
    alt: "Wide view of a clean polymer quality-control lab with benches, pellet samples, balances, instruments, and PPE.",
  },
  labSupport: {
    src: "assets/slide-09-lab-manufacturing-support.png",
    alt: "Polymer lab workstation with pellet samples and abstract process charts visually connected to plant operations in the background.",
  },
  labWorkflow: {
    src: "assets/slide-10-sample-to-result.png",
    alt: "Polyethylene pellet sample, lab instrument, unlabeled chart graphics, and review checklist arranged as a sample-to-result workflow.",
  },
  labTrust: {
    src: "assets/slide-11-good-lab-data.png",
    alt: "Controlled lab data scene with pellet sample jar, abstract chart record, calibration weight, safety glasses, and review markings.",
  },
  testMenu: {
    src: "assets/slide-12-common-lab-tests.png",
    alt: "Polymer QC lab bench showing six test cues: film inspection, sieve stack, bulk density cup, melt flow detail, balance, and vial rack.",
  },
  testOcs: {
    src: "assets/slide-13-ocs-film-inspection.png",
    alt: "Clear polyethylene film running through an optical inspection frame with a monitor showing abstract defect plots.",
  },
  testParticle: {
    src: "assets/slide-14-particle-size-distribution.png",
    alt: "Stainless steel sieve stack with separated polyethylene pellet fractions in shallow trays on a polymer lab bench.",
  },
  testBulk: {
    src: "assets/slide-15-bulk-density.png",
    alt: "Polyethylene pellets flowing through a stainless funnel into a cylindrical measuring cup for bulk density testing.",
  },
  testMelt: {
    src: "assets/slide-16-melt-index.png",
    alt: "Melt index testing station with heated barrel instrument, polyethylene pellet cup, extrudate strand pieces, tools, and heat-resistant gloves.",
  },
  testAnalytical: {
    src: "assets/slide-17-density-ash-analytical.png",
    alt: "Analytical polymer lab bench with balance, density glassware, ceramic crucibles, pellet sample dishes, tweezers, and PPE.",
  },
  testGc: {
    src: "assets/slide-18-gc-purity-checks.png",
    alt: "Gas chromatography instrument with autosampler, clear sample vials, vial rack, and unlabeled chromatogram peak shapes on a monitor.",
  },
  qualitySafety: {
    src: "assets/slide-19-lab-safety-quality.png",
    alt: "Industrial lab safety setup with PPE, clear safety shield, sample containers, red boundary accent, and pellet spill tray.",
  },
  qualityTrust: {
    src: "assets/slide-20-trustworthy-result.png",
    alt: "Trustworthy result review setup with pellet sample jar, calibration weights, instrument standard, unlabeled status graphics, and checkmarks.",
  },
  qualitySystems: {
    src: "assets/slide-21-quality-systems.png",
    alt: "Lab quality system materials with blank binder tabs, calibration weight, control sample vial, checkmarks, and instrument background.",
  },
  qualityEvidence: {
    src: "assets/slide-22-data-evidence.png",
    alt: "Polymer lab evidence trail with pellet sample jar, abstract record cards, magnifying glass, data cable, and review stamp shape.",
  },
  qualityCorrections: {
    src: "assets/slide-23-corrections-retests.png",
    alt: "Original and retest pellet sample cups beside a blank correction form with checkmarks, red revision marks, and calibration weight.",
  },
  qualityRedFlags: {
    src: "assets/slide-24-review-red-flags.png",
    alt: "Lab review desk with blank review sheets, red flag tabs, magnifying glass, sealed pellet sample jar, and calibration weight.",
  },
  qualityBoundaries: {
    src: "assets/slide-25-intern-boundaries.png",
    alt: "High school intern and mentor in PPE observing a lab instrument from behind a clear boundary line without touching equipment.",
  },
  internShadowing: {
    src: "assets/slide-26-shadowing-focus.png",
    alt: "Intern in PPE shadowing a technician at a polymer lab bench with pellet sample containers, instrument setup, and notebook.",
  },
  internQuestions: {
    src: "assets/slide-27-mentor-questions.png",
    alt: "Mentor and intern in PPE discussing a pellet sample jar with blank question cards, notebook, PPE, and lab bench materials.",
  },
  internReflection: {
    src: "assets/slide-28-reflection-notes.png",
    alt: "Reflection notebook with blank structured boxes, check icons, pencil, safety glasses, pellet sample jar, and simple flow sketch.",
  },
  internProject: {
    src: "assets/slide-29-intern-project-activities.png",
    alt: "Intern activity planning table with blank process-map cards, sample journey diagram, pellet jar, film sample, PPE, and tablet.",
  },
};

const testThumbnailPhotos = [
  slideVisuals.testOcs,
  slideVisuals.testParticle,
  slideVisuals.testBulk,
  slideVisuals.testMelt,
  slideVisuals.testAnalytical,
  slideVisuals.testGc,
];

function getTestPhoto(testIndex) {
  return testThumbnailPhotos[testIndex] || slideVisuals.testMenu;
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function createSlide({ eyebrow, title, lead, bullets = [], note = "", label = "", photo = photos.lab, ...rest }) {
  return { eyebrow, title, lead, bullets, note, label, photo, ...rest };
}

function getMaxRevealStep(slide) {
  if (slide.kind === "test-menu") return 3;
  let maxStep = slide.bullets.length ? 3 : 2;
  if (slide.note) maxStep = slide.bullets.length ? 4 : 3;
  return maxStep;
}

const testExplainers = {
  "OCS Cast Film and Defect Review": {
    menu: "OCS film review",
    short: "Film appearance and defects",
    measures: "The resin is made into film and checked for gels and other visible defects.",
    why: "The film can show problems that are hard to see in the pellets.",
    labUse: "The lab connects the film run, OCS output, sample ID, and comments.",
    sampleEquipment: "pellets, the cast-film line, chill rolls, and the OCS camera",
    mentorQuestion: "What tells you the defect came from the resin and not the setup?",
    watch: ["Hot equipment and moving parts.", "How defects are named or counted.", "How unusual appearance is documented."],
    outputs: ["Film appearance rating", "Gel or defect counts", "Total defect area", "Sample ID and run comments"],
  },
  "Particle Size Distribution": {
    menu: "Particle size",
    short: "How big the pieces are",
    measures: "The sample is separated into size ranges.",
    why: "Too many fines or oversize pieces can affect how the material handles.",
    labUse: "The lab checks whether the sample has the expected size profile.",
    sampleEquipment: "a representative sample, the classifier or sieve setup, trays, and a balance",
    mentorQuestion: "How do you know the sample represents the material?",
    watch: ["Clean equipment.", "Correct sample identity.", "Too many fines or oversized pieces."],
    outputs: ["Percent retained by size range", "Fines or oversize fraction", "Mass balance checks", "Representative sample notes"],
  },
  "Bulk Density": {
    menu: "Bulk density",
    short: "How much fits in a space",
    measures: "A known volume is filled and the material in it is weighed.",
    why: "The result helps explain how the material will store, package, and move.",
    labUse: "The lab uses the same fill method so samples can be compared fairly.",
    sampleEquipment: "the sample, a known-volume cup, a balance, and a consistent fill method",
    mentorQuestion: "What can make the same material give a different number?",
    watch: ["Pellet spills.", "Clean, dry containers.", "How repeat checks are handled."],
    outputs: ["Mass per volume", "Repeat measurements", "Sample condition notes", "Calculation or transcription checks"],
  },
  "Melt Index": {
    menu: "Melt index",
    short: "How melted plastic flows",
    measures: "The resin is heated and its flow is measured under set conditions.",
    why: "Flow is one of the main ways the plant checks grade and processing behavior.",
    labUse: "The lab controls heat, timing, load, and instrument status before reporting.",
    sampleEquipment: "pellets, the heated barrel and die, the weight system, a timer, and a balance",
    mentorQuestion: "Which readiness checks matter before you trust the result?",
    watch: ["Hot surfaces.", "Correct temperature and load.", "Timing and cleaning between runs."],
    outputs: ["Melt flow value", "Temperature and load condition", "Replicate agreement", "Instrument and method record"],
  },
  "Density / Ash / Analytical Checks": {
    menu: "Density and ash",
    short: "Property and residue checks",
    measures: "These methods check properties such as density or the residue left after heating.",
    why: "Small changes can point to a grade, formulation, or sample problem.",
    labUse: "The lab connects each value to the method, instrument, standard, and sample prep.",
    sampleEquipment: "prepared samples, balances, density equipment, furnaces, or other analytical instruments",
    mentorQuestion: "When a result looks wrong, what do you check first?",
    watch: ["Hot equipment or chemicals.", "Clean sample handling.", "Calibration or standard checks."],
    outputs: ["Density or ash value", "Calibration or standard check", "Preparation notes", "Review or retest documentation"],
  },
  "GC Purity Checks": {
    menu: "GC purity",
    short: "Chemical purity check",
    measures: "The GC separates components so the analyst can check purity or composition.",
    why: "The result confirms that the material matches what the process expects.",
    labUse: "The lab relies on standards, instrument setup, sample identity, and review.",
    sampleEquipment: "a labeled vial or standard, the GC, the run sequence, and the chromatogram",
    mentorQuestion: "What do you review before reporting the purity result?",
    watch: ["Chemical and gas safety.", "Readable vial labels.", "How peaks are reviewed."],
    outputs: ["Component percentages or purity", "Chromatogram and peak integration", "Calibration status", "Sample and run sequence record"],
  },
};

function getWalkthroughSlides() {
  const companySlides = [
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Company",
      title: "Where this work fits",
      lead:
        "ExxonMobil has energy and chemical businesses around the world. This guide stays focused on the MBPP lab and the polyethylene it supports.",
      bullets: [],
      photo: slideVisuals.exxonCompany,
    }),
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Materials",
      title: "From pellets to products",
      lead:
        "MBPP makes polyethylene resin. Customers use that resin to make film, packaging, pipe, containers, and other products.",
      bullets: [
        "At the plant, the resin is often handled as pellets.",
        "Different products need different resin properties.",
        "The lab checks properties the plant and customer care about.",
      ],
      photo: slideVisuals.exxonProducts,
    }),
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Operations",
      title: "Safe, steady work",
      lead:
        "A manufacturing site depends on people doing the basics well every time. Safety, clear procedures, and reliable data all matter.",
      bullets: [
        "Safety comes before speed.",
        "Procedures help people do work the same way.",
        "Quality data helps the site make good decisions.",
      ],
      photo: slideVisuals.exxonOperations,
    }),
  ];

  const mbppSlides = [
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "Site",
      title: "About MBPP",
      lead:
        "Mont Belvieu Plastics Plant is an ExxonMobil polyethylene site in Chambers County, Texas.",
      bullets: [
        "The site has operated since 1982.",
        "The site is about 500 acres.",
        "It is part of ExxonMobil's Baytown-area operations.",
      ],
      photo: slideVisuals.mbppSite,
    }),
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "Polyethylene",
      title: "Polyethylene, in plain terms",
      lead:
        "Polyethylene is a plastic resin. At MBPP, you will often see it as pellets before a customer turns it into a finished product.",
      bullets: [],
      note: "The pellets may look alike, but small property changes can affect how they run and perform.",
      photo: slideVisuals.mbppPolyethylene,
    }),
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "End uses",
      title: "What customers make with it",
      lead:
        "Polyethylene can become film, bags, liners, pipe, packaging, and containers. Each use asks something different from the resin.",
      bullets: [
        "Film may need good appearance and toughness.",
        "Pipe or containers may need strength and consistency.",
        "Packaging may need sealing, clarity, or durability.",
      ],
      photo: slideVisuals.mbppProducts,
    }),
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "Samples",
      title: "Why the lab tests samples",
      lead:
        "A sample gives the lab a look at material from the plant. The result helps show whether that material is behaving as expected.",
      bullets: [
        "The sample ID must match the lot, material, time, and request.",
        "The result may support a plant or product-quality decision.",
        "If the identity is unclear, stop and resolve it before testing.",
      ],
      photo: slideVisuals.mbppSampling,
    }),
  ];

  const labSlides = [
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Purpose",
      title: "The lab's job",
      lead:
        "The lab tests plant samples and reports data people can use. The work needs to be safe, timely, and traceable.",
      bullets: [
        "Technicians run approved test methods.",
        "They confirm the instrument and required controls are ready.",
        "They record the result and speak up when something is wrong.",
      ],
      photo: slideVisuals.labPurpose,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Support",
      title: "How the lab helps the plant",
      lead:
        "The lab turns a physical sample into information the plant can act on.",
      bullets: [
        "Routine results show whether the material is tracking normally.",
        "An unusual result may lead to a review or troubleshooting.",
        "Clear communication keeps the next person from guessing.",
      ],
      photo: slideVisuals.labSupport,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Workflow",
      title: "From sample to result",
      lead:
        "The basic path is receipt, identity check, preparation, testing, review, and a final record in Sample Manager or another approved system.",
      bullets: [
        "First, confirm what the sample is and where it came from.",
        "Then follow the current method and required checks.",
        "Leave enough of a record for someone to retrace the work.",
      ],
      photo: slideVisuals.labWorkflow,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Trust",
      title: "What makes data useful",
      lead:
        "Good lab data is correct, available when it is needed, and clear enough for someone else to follow.",
      bullets: [
        "The number matches the sample and method.",
        "Required checks and reviews are complete.",
        "The sample, instrument, raw data, and final result stay connected.",
      ],
      photo: slideVisuals.labTrust,
    }),
  ];

  const testIntroSlides = [
    createSlide({
      eyebrow: "Section 4 / Common lab tests",
      label: "Test index",
      title: "Six tests you'll hear about",
      lead:
        "Start by learning what each test measures and why the lab uses it. You are not running them yet.",
      bullets: [],
      kind: "test-menu",
      photo: slideVisuals.testMenu,
    }),
  ];

  const testSlides = testWalkthroughs.map((test, index) => {
    const details = testExplainers[test.name];
    const testPhotos = [
      slideVisuals.testOcs,
      slideVisuals.testParticle,
      slideVisuals.testBulk,
      slideVisuals.testMelt,
      slideVisuals.testAnalytical,
      slideVisuals.testGc,
    ];
    return {
      eyebrow: `Section 4 / Common lab tests / ${test.area}`,
      label: `Test ${index + 1}`,
      title: test.name,
      lead: details.measures,
      bullets: [
        details.why,
        `You will usually see ${details.sampleEquipment}.`,
        `Ask your mentor: "${details.mentorQuestion}"`,
      ],
      testIndex: index,
      photo: testPhotos[index],
    };
  });

  const qualitySlides = [
    createSlide({
      eyebrow: "Section 5 / Safety and quality systems",
      label: "Safety",
      title: "Do the work safely or stop",
      lead:
        "No result is worth bypassing a safety step. Stay within your training and ask before touching equipment, samples, or chemicals.",
      bullets: [
        "Do not touch equipment, samples, or chemicals without approval.",
        "Notice hot surfaces, moving parts, pellets on the floor, vapors, and sharp tools.",
        "If a boundary is unclear, stop and ask.",
      ],
      photo: slideVisuals.qualitySafety,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Trust",
      title: "A number needs a story",
      lead:
        "A result is only useful when the lab can explain where it came from and how it was produced.",
      bullets: [
        "Is the sample identity clear?",
        "Was the approved method and instrument used?",
        "Were required checks, reviews, or comments handled clearly?",
      ],
      photo: slideVisuals.qualityTrust,
    }),
    createSlide({
      eyebrow: "Section 5 / Safety and quality systems",
      label: "Systems",
      title: "The systems behind the work",
      lead:
        "QP&G, DIAF, SQC, training records, calibration, and approved methods are how the lab keeps work controlled.",
      bullets: [
        "QP&G connects lab quality expectations to evidence.",
        "DIAF protects data integrity.",
        "SQC helps show methods and instruments are behaving normally.",
      ],
      photo: slideVisuals.qualitySystems,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Evidence",
      title: "Treat data like evidence",
      lead:
        "Lab data may be used in product review, an investigation, or a customer document. It needs to hold up later.",
      bullets: [],
      note: "If the result cannot be traced back to the work, it is not a strong result.",
      photo: slideVisuals.qualityEvidence,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Review",
      title: "Corrections and retests need a reason",
      lead:
        "Sometimes a correction or retest is the right action. Keep the original evidence and document why the additional work was needed.",
      bullets: [
        "A typo correction should explain the source of the correct value.",
        "A retest should have an approved reason.",
        "A transferred result should explain the correct sample or lot connection.",
      ],
      photo: slideVisuals.qualityCorrections,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Red flags",
      title: "When a record needs another look",
      lead:
        "A red flag is a reason to pause and ask for context. It is not a conclusion by itself.",
      bullets: [
        "A vague comment like “fixed result.”",
        "A retest with no clear reason.",
        "A sample ID, lot, or request that does not line up.",
      ],
      photo: slideVisuals.qualityRedFlags,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Boundary",
      title: "Know where your role stops",
      lead:
        "As an intern, you can notice something unusual and ask about it. You do not decide product status, diagnose equipment, or change data.",
      bullets: [
        "Say “this looks unusual,” not “this product failed.”",
        "Ask how the result is reviewed.",
        "Let approved roles make quality decisions.",
      ],
      photo: slideVisuals.qualityBoundaries,
    }),
  ];

  const internSlides = [
    createSlide({
      eyebrow: "Section 6 / Intern learning path",
      label: "Shadow",
      title: "What to watch while you shadow",
      lead:
        "Do not try to memorize every button. Watch how the technician prepares, checks, runs, and records the work.",
      bullets: [
        "What hazards are controlled before work starts?",
        "How does the technician know the instrument is ready?",
        "Where does the result go after the test?",
      ],
      photo: slideVisuals.internShadowing,
    }),
    createSlide({
      eyebrow: "Section 6 / Intern learning path",
      label: "Ask",
      title: "Questions worth asking",
      lead:
        "Good questions help you connect a test step to the decision it supports.",
      bullets: [
        "What decision could this result support?",
        "What would make this result questionable?",
        "What record would prove what happened later?",
      ],
      photo: slideVisuals.internQuestions,
    }),
    createSlide({
      eyebrow: "Section 6 / Intern learning path",
      label: "Reflect",
      title: "Write down what you saw",
      lead:
        "A few clear notes are more useful than trying to remember the whole day.",
      bullets: [
        "Write what you observed in simple words.",
        "List one safety control and one quality control.",
        "Write one question to ask next time.",
      ],
      photo: slideVisuals.internReflection,
    }),
    createSlide({
      eyebrow: "Section 6 / Intern learning path",
      label: "Project",
      title: "Turn the work into a small project",
      lead:
        "Use what you observed to build a process map, sample journey, short quiz, or mentor discussion guide.",
      bullets: [],
      note: "When something is unclear, slow down and ask the assigned mentor or technician.",
      photo: slideVisuals.internProject,
    }),
  ];

  return [...companySlides, ...mbppSlides, ...labSlides, ...testIntroSlides, ...testSlides, ...qualitySlides, ...internSlides];
}

function getEmployeeSlides() {
  const employeeTestSlides = testWalkthroughs.map((test, index) => {
    const details = testExplainers[test.name];
    return createSlide({
      eyebrow: `Section 3 / Test overview ${index + 1} of ${testWalkthroughs.length}`,
      label: test.area,
      title: test.name,
      lead: test.purpose,
      bullets: [
        details.why,
        `Lab staff may use: ${details.sampleEquipment}.`,
        `Results may include ${details.outputs.join(", ").toLowerCase()}.`,
      ],
      note:
        "This is an overview, not test training. Only trained and authorized lab personnel perform the work.",
      photo: getTestPhoto(index),
    });
  });

  return [
    createSlide({
      eyebrow: "Section 1 / Lab mission",
      label: "Orientation",
      title: "Lab purpose",
      lead:
        "The MBPP lab tests representative samples and gives the plant results it can use.",
      bullets: [
        "Lab technicians use approved methods and equipment that is ready for service.",
        "Lab results support production, quality, and product decisions.",
        "The sample, raw data, result entry, and review remain connected.",
      ],
      photo: slideVisuals.labPurpose,
    }),
    createSlide({
      eyebrow: "Section 1 / Site context",
      label: "MBPP",
      title: "MBPP products",
      lead:
        "MBPP makes polyethylene resin. The lab checks the properties, appearance, consistency, and selected analytical results that matter to that operation.",
      bullets: [
        "Samples need the correct material or grade, lot, time, and request information.",
        "Results may support manufacturing, quality review, product decisions, or customer records.",
        "Urgent plant needs do not change the lab's safety, method, or record requirements.",
      ],
      photo: slideVisuals.mbppSite,
    }),
    createSlide({
      eyebrow: "Section 2 / Controlled workflow",
      label: "Lifecycle",
      title: "Sample workflow",
      lead:
        "The normal path is receipt, identity check, preparation, equipment readiness, testing, review, and record retention.",
      bullets: [
        "Lab staff resolve an unclear identity, condition, priority, or test request before testing.",
        "The record shows what was tested, how it was tested, and who performed the work.",
        "Unusual results and failed controls follow a defined review path.",
      ],
      photo: slideVisuals.labWorkflow,
    }),
    createSlide({
      eyebrow: "Section 2 / Controlled workflow",
      label: "Priorities",
      title: "Information the lab needs",
      lead:
        "Testing starts only after the sample can be connected to the correct plant context and request.",
      bullets: [
        "The sample ID, material or grade, lot, requested tests, and priority need to be clear.",
        "Routine, priority, investigation, and special samples may follow different paths.",
        "If information is missing, the lab contacts the requesting group before testing.",
      ],
      photo: slideVisuals.mbppSampling,
    }),
    createSlide({
      eyebrow: "Section 3 / Common lab tests",
      label: "Test map",
      title: "Common lab tests",
      lead:
        "These slides explain what each test measures and why the plant may need the result.",
      bullets: [],
      note: "These are awareness slides, not instructions for performing lab work.",
      photo: slideVisuals.testMenu,
      kind: "test-menu",
    }),
    ...employeeTestSlides,
    createSlide({
      eyebrow: "Section 4 / Method control",
      label: "Readiness",
      title: "Equipment and method readiness",
      lead:
        "Calibration, standards, SQC, maintenance status, cleanliness, and method conditions all help show that the system is ready.",
      bullets: [
        "Lab staff check the required status and control evidence before using sample data.",
        "An out-of-control signal follows a defined response and review.",
        "Plant urgency does not remove readiness checks.",
      ],
      photo: slideVisuals.qualitySystems,
    }),
    createSlide({
      eyebrow: "Section 4 / Data systems",
      label: "Traceability",
      title: "Result traceability",
      lead:
        "Sample Manager or LIMS connects the request, result, comments, and review. The entry needs to match the source data.",
      bullets: [
        "Lab staff check manual entries and data transfers as required.",
        "Original evidence remains available when data is corrected or a test is repeated.",
        "Out-of-specification and out-of-control events follow the applicable review path.",
      ],
      photo: slideVisuals.qualityEvidence,
    }),
    createSlide({
      eyebrow: "Section 5 / People and escalation",
      label: "Roles",
      title: "Lab support roles",
      lead:
        "The A-1, A-2, and A-3 posts have assigned work. The FLS, QAC or Chemist, QDS, and LES support different parts of that work.",
      bullets: [
        "FLS: priorities, staffing, training status, and operational escalation.",
        "QAC / Chemist and QDS: methods, quality systems, SQC, data review, and investigation support.",
        "LES: equipment reliability, troubleshooting, service, and readiness support.",
      ],
      note: "Use the current site assignment and local escalation path. These titles are only a quick map.",
      photo: slideVisuals.labSupport,
    }),
    createSlide({
      eyebrow: "Section 5 / Plant connection",
      label: "Working together",
      title: "Working with the lab",
      lead:
        "Most employees will not perform lab work, but many plant roles depend on samples, requests, or lab results.",
      bullets: [
        "Use the established channel when requesting tests, delivering samples, or asking about results.",
        "Do not operate lab equipment or handle lab samples unless your role, training, and authorization allow it.",
        "Contact the appropriate lab representative when a request, sample identity, priority, or result is unclear.",
      ],
      note: "This plant-wide orientation provides context only. It does not qualify anyone to perform lab work.",
      photo: slideVisuals.qualitySafety,
    }),
  ];
}

function getTechnicianFirstWeekSlides() {
  return [
    createSlide({
      eyebrow: "First week / Overview",
      label: "Start here",
      title: "Use the first week to get oriented",
      lead:
        "Your first week is mostly orientation, shadowing, and learning where to get help.",
      bullets: [
        "Meet the people covering your post.",
        "Learn the lab layout and emergency equipment.",
        "Confirm what you may do while training.",
      ],
      note: "Your trainer or FLS will set the actual schedule.",
      photo: slideVisuals.labPurpose,
    }),
    createSlide({
      eyebrow: "First week / People",
      label: "Who to ask",
      title: "Know who to ask",
      lead:
        "You will not know every answer. You should know where to get it.",
      bullets: [
        "Trainer: day-to-day method and task questions.",
        "FLS: priorities, authorization, or anything unclear.",
        "Technical support: equipment, quality, and data questions.",
      ],
      photo: slideVisuals.labSupport,
    }),
    createSlide({
      eyebrow: "First week / Lab walk",
      label: "Find the basics",
      title: "Learn the lab before the tests",
      lead:
        "Walk the space with your trainer and find the things you will use.",
      bullets: [
        "Exits, eyewashes, showers, alarms, spill supplies, and waste areas.",
        "Sample drop-off, post manuals, and equipment status boards.",
        "Where current procedures are accessed.",
      ],
      photo: slideVisuals.qualitySafety,
    }),
    createSlide({
      eyebrow: "First week / Qualification",
      label: "How it starts",
      title: "Training comes before independent work",
      lead:
        "The normal order is to watch the task, practice it, and complete the required review.",
      bullets: [
        "Observe the task and its hazards.",
        "Practice with the assigned trainer.",
        "Complete the required demonstration and review.",
      ],
      note: "This guide does not qualify you to perform lab work.",
      photo: slideVisuals.qualityBoundaries,
    }),
    createSlide({
      eyebrow: "First week / Sample journey",
      label: "Follow one sample",
      title: "Follow one sample all the way through",
      lead:
        "Ask your trainer to show you one sample from receipt to the final record.",
      bullets: [
        "Where did it come from, and how is it identified?",
        "What shows the equipment is ready?",
        "Where are the result and review recorded?",
      ],
      photo: slideVisuals.labWorkflow,
    }),
    createSlide({
      eyebrow: "First week / Self-check",
      label: "Before week two",
      title: "Before week two",
      lead:
        "Make sure you can answer these without guessing.",
      bullets: [
        "What am I allowed to do right now?",
        "What should make me stop and ask?",
        "Where do I find help and the current procedure?",
      ],
      note: "The Technician Playbook covers common situations.",
      photo: slideVisuals.qualityTrust,
    }),
  ];
}

function getActiveSlides() {
  if (activeGuide === "employee") return getEmployeeSlides();
  if (activeGuide === "technician") return getTechnicianFirstWeekSlides();
  return getWalkthroughSlides();
}

function goToSlide(index, revealStep = 0) {
  const slides = getActiveSlides();
  const target = Math.max(0, Math.min(slides.length - 1, index));
  activeSlide = target;
  activeRevealStep = revealStep;
  renderSlide();
}

function updateRevealState({ animateNew = true } = {}) {
  const slides = getActiveSlides();
  const slide = slides[activeSlide];
  const maxRevealStep = getMaxRevealStep(slide);
  slideContent.querySelectorAll("[data-reveal]").forEach((element) => {
    const step = Number(element.dataset.reveal);
    const wasVisible = element.classList.contains("is-visible");
    const isVisible = step <= activeRevealStep;
    element.classList.toggle("is-visible", isVisible);
    element.classList.remove("is-newly-revealed");

    if (animateNew && isVisible && !wasVisible && step > 0) {
      element.classList.add("is-newly-revealed");
    }
  });

  window.clearTimeout(revealAnimationTimer);
  revealAnimationTimer = window.setTimeout(() => {
    slideContent.querySelectorAll(".is-newly-revealed").forEach((element) => {
      element.classList.remove("is-newly-revealed");
    });
  }, REVEAL_CLASS_MS);

  const previous = document.querySelector("[data-slide-prev]");
  const next = document.querySelector("[data-slide-next]");
  previous.disabled = activeSlide === 0 && activeRevealStep === 0;
  next.textContent = activeRevealStep < maxRevealStep ? "Reveal" : activeSlide === slides.length - 1 ? "Finish" : "Next";
}

function advanceDeck() {
  const slides = getActiveSlides();
  const slide = slides[activeSlide];
  const maxRevealStep = getMaxRevealStep(slide);
  if (activeRevealStep < maxRevealStep) {
    activeRevealStep += 1;
    updateRevealState({ animateNew: true });
    return;
  }
  if (activeSlide === slides.length - 1) {
    showView("home");
    return;
  }
  goToSlide(activeSlide + 1);
}

function retreatDeck() {
  if (activeRevealStep > 0) {
    activeRevealStep -= 1;
    updateRevealState({ animateNew: false });
    return;
  }
  if (activeSlide > 0) {
    const previousSlide = activeSlide - 1;
    const previousMaxReveal = getMaxRevealStep(getActiveSlides()[previousSlide]);
    goToSlide(previousSlide, previousMaxReveal);
  }
}

function renderSlide() {
  const slides = getActiveSlides();
  const slide = slides[activeSlide];
  const progress = ((activeSlide + 1) / slides.length) * 100;
  const testMenu =
    slide.kind === "test-menu"
      ? `
        <div class="test-menu-grid" data-reveal="3" aria-label="Lab tests">
          ${testWalkthroughs
            .map((test, index) => {
              const details = testExplainers[test.name];
              return `
                <article class="test-menu-card stagger-card" style="--card-index: ${index}">
                  <img src="${getTestPhoto(index).src}" alt="" aria-hidden="true" />
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${details.menu || test.name}</strong>
                  <small>${activeGuide === "employee" ? test.area : details.short}</small>
                </article>
              `;
            })
            .join("")}
        </div>
      `
      : "";

  slideEyebrow.textContent = slide.eyebrow;
  slideCounter.textContent = `${activeSlide + 1}/${slides.length}`;
  slideProgress.style.width = `${progress}%`;
  slideContent.className = `simple-slide ${slide.kind === "test-menu" ? "test-menu-slide" : ""}`;
  slideContent.innerHTML = `
    <div class="slide-copy-block">
      <h2 id="slideTitle" data-reveal="0">${slide.title}</h2>
      <p class="slide-lead" data-reveal="1">${slide.lead}</p>
      ${slide.bullets.length ? `<div class="simple-points" data-reveal="3">${renderList(slide.bullets)}</div>` : ""}
      ${testMenu}
      ${slide.note ? `<p class="slide-note" data-reveal="${slide.bullets.length ? 4 : 3}">${slide.note}</p>` : ""}
    </div>
    <figure class="slide-photo" data-reveal="2">
      <img src="${slide.photo.src}" alt="${slide.photo.alt}" />
    </figure>
  `;
  updateRevealState({ animateNew: false });
  restartSlideEntrance();
}

const technicianPlaybookSituations = [
  {
    title: "I am about to start a test",
    cue: "Use this before sample preparation or instrument work begins.",
    stop: "Do not begin until your authorization and the required work conditions are clear.",
    check: "Sample identity, current method, equipment status, calibration, standards, SQC, hazards, and required PPE.",
    contact: "Ask the assigned trainer or FLS when any readiness check is unclear.",
    record: "Use the required sample, instrument, and source-record trail from the start.",
  },
  {
    title: "The sample identity is unclear",
    cue: "The label, lot, request, material, time, or sampling context does not make sense.",
    stop: "Do not guess, relabel from memory, or silently substitute another sample.",
    check: "Container label, sample request, lot or material, collection context, condition, and requested tests.",
    contact: "Notify the FLS or the role responsible for sample coordination and identity resolution.",
    record: "Preserve the original label and document the clarification through the approved process.",
  },
  {
    title: "Equipment is red-tagged or out of control",
    cue: "A status tag, control result, malfunction, or calibration issue shows the system is not ready.",
    stop: "Do not use the equipment for reportable work or move its assigned components without authorization.",
    check: "Status tag, control evidence, calibration, equipment board, existing EQR, and affected work window.",
    contact: "Notify the FLS and the applicable equipment support role.",
    record: "Follow the current tag-out, EQR, troubleshooting, validation, and return-to-service process.",
  },
  {
    title: "A calibration or QC check fails",
    cue: "The control evidence does not support continued testing.",
    stop: "Stop relying on the system and do not treat sample urgency as permission to continue.",
    check: "Run rules, standard identity, preparation, expiration, method conditions, instrument status, and recent data.",
    contact: "Escalate to the FLS and appropriate quality or equipment support role.",
    record: "Retain the failed check and document the required response, investigation, and affected-data review.",
  },
  {
    title: "A standard or solution is expired",
    cue: "The available material is outside its approved use period, even if it appears stable.",
    stop: "Do not use it because the sample is urgent or because it has worked beyond expiration before.",
    check: "Label, expiration, preparation requirements, storage conditions, and availability of a valid replacement.",
    contact: "Ask the trainer, FLS, or appropriate technical role how to restore readiness.",
    record: "Document only actions required by the current method and local quality process.",
  },
  {
    title: "The result looks unusual",
    cue: "The result is atypical, OOS, inconsistent, or does not match expectations.",
    stop: "Do not run until it passes, discard the original result, or choose only preferred data.",
    check: "Sample identity, method execution, equipment and QC status, calculations, entries, and observations.",
    contact: "Notify the FLS and the applicable quality or technical role before deciding the next test action.",
    record: "Preserve the original evidence, comments, permitted retests, and review trail.",
  },
  {
    title: "I need to correct or retest data",
    cue: "An entry is wrong, a known assignable cause exists, or the controlled process permits additional testing.",
    stop: "Do not overwrite, conceal, delete, or replace the original evidence without the approved process.",
    check: "Source record, reason for correction or retest, authorization, traceability requirements, and review path.",
    contact: "Ask the trainer, FLS, or quality support role when the correct handling is not explicit.",
    record: "Keep the original value visible and make the reason, change, identity, date, and review reconstructable.",
  },
  {
    title: "Someone asks me to deviate from the method",
    cue: "A person requests a shortcut, different instrument, skipped step, changed condition, or altered result.",
    stop: "Do not make an unauthorized change, even when the request comes from an experienced or senior person.",
    check: "Current controlled method, documented change process, authorization requirements, and exact facts of the request.",
    contact: "Raise the issue to the FLS or appropriate management and quality channel.",
    record: "Preserve factual information and follow the approved change or concern-reporting process.",
  },
  {
    title: "An auditor or customer asks a question",
    cue: "You are asked about work, data, equipment, a method, or a decision outside your direct knowledge.",
    stop: "Do not guess, speculate, hide information, or make conclusions beyond your role.",
    check: "What was actually asked, what you personally know, and who owns the authoritative answer.",
    contact: "Direct the question to the FLS or correct subject-matter role when needed.",
    record: "Use clear, factual, concise communication and follow any applicable documentation expectation.",
  },
  {
    title: "I am handing work to the next shift",
    cue: "Samples, equipment, priorities, or investigations remain open.",
    stop: "Do not leave unresolved status, risk, or ownership ambiguous.",
    check: "Pending samples, priorities, equipment status, unusual results, customer needs, and required follow-up.",
    contact: "Confirm the handoff with the receiving technician and escalate unresolved decisions to the FLS.",
    record: "Complete the required entries and leave a traceable, factual handoff through the approved channel.",
  },
];

function renderTechnicianPlaybook() {
  resourcesContent.innerHTML = `
    <section class="technician-playbook">
      <header class="playbook-intro">
        <span>Self-guided quick reference</span>
        <h3>Start with the situation in front of you.</h3>
        <p>
          Use this as a quick pause before you act. Then check the current procedure or ask your trainer or FLS.
        </p>
        <div class="playbook-key" aria-label="Playbook response pattern">
          <span><b>01</b> Stop</span>
          <span><b>02</b> Check</span>
          <span><b>03</b> Contact</span>
          <span><b>04</b> Record</span>
        </div>
      </header>

      <div class="playbook-list">
        ${technicianPlaybookSituations
          .map(
            (situation, index) => `
              <details class="playbook-case">
                <summary>
                  <span class="playbook-case-number">${String(index + 1).padStart(2, "0")}</span>
                  <span class="playbook-case-copy">
                    <small>Situation</small>
                    <strong>${situation.title}</strong>
                    <span>${situation.cue}</span>
                  </span>
                  <span class="playbook-case-toggle" aria-hidden="true"></span>
                </summary>
                <div class="playbook-response-grid">
                  <article class="playbook-response playbook-stop">
                    <span>01 / Stop</span>
                    <p>${situation.stop}</p>
                  </article>
                  <article class="playbook-response">
                    <span>02 / Check</span>
                    <p>${situation.check}</p>
                  </article>
                  <article class="playbook-response">
                    <span>03 / Contact</span>
                    <p>${situation.contact}</p>
                  </article>
                  <article class="playbook-response">
                    <span>04 / Record</span>
                    <p>${situation.record}</p>
                  </article>
                </div>
                <p class="playbook-controlled-note">
                  Next: check the current procedure and follow your training.
                </p>
              </details>
            `,
          )
          .join("")}
      </div>

      <aside class="playbook-boundary">
        <strong>Orientation aid only.</strong>
        <span>This playbook is not an operating procedure, qualification record, or authorization to perform work.</span>
      </aside>
    </section>
  `;
}

function renderResources() {
  if (activeGuide === "technician") {
    renderTechnicianPlaybook();
    return;
  }

  const isEmployee = activeGuide !== "intern";
  const officialLinks = [
    {
      label: "Baytown Area Operations Facilities",
      href: "https://corporate.exxonmobil.com/locations/united-states/baytown/our-facilities",
      text: "Start here for public company context on the Baytown area facilities, including Mont Belvieu Plastics Plant.",
    },
    {
      label: "Mont Belvieu Plastics Plant 2024 Fact Sheet",
      href: "assets/mont-belvieu-2024-fact-sheet.pdf",
      text: "Use this for MBPP-specific public facts: location, products, capacity language, startup year, acreage, and site overview.",
    },
    {
      label: "Operations Integrity Management System",
      href: "https://corporate.exxonmobil.com/who-we-are/technology-and-collaborations/energy-technologies/risk-management-and-safety/operations-integrity-management-system",
      text: "Public overview of the management-system mindset behind safe, reliable, controlled operations.",
    },
    {
      label: "Risk Management and Safety",
      href: "https://corporate.exxonmobil.com/who-we-are/technology-and-collaborations/energy-technologies/risk-management-and-safety",
      text: "Background on how ExxonMobil publicly describes risk, safeguards, and operational safety.",
    },
    {
      label: "Digital Product Selector",
      href: "https://www.exxonmobilchemical.com/en/productselector",
      text: "A working ExxonMobil Product Solutions selector for finding product families, technical data sheets, and polymer categories.",
    },
    {
      label: "Polyethylene Overview",
      href: "https://www.exxonmobilchemical.com/en/products/polyethylene",
      text: "Useful product context for why resin properties such as flow, density, and film performance matter.",
    },
    {
      label: "Polyethylene Portfolio",
      href: "https://www.exxonmobilchemical.com/en/products/polyethylene/pe-portfolio",
      text: "Explains polyethylene performance areas such as strength, toughness, sealing, optics, and packaging use cases.",
    },
    {
      label: "Performance PE Product Finder Guide",
      href: "https://www.exxonmobilchemical.com/-/media/media-assets/media-library-assets/23/performance_pe_product_finder_en.pdf",
      text: "A public PDF guide for performance polyethylene families such as Exceed, Enable, and related product grades.",
    },
  ];

  const labTermGroups = [
    {
      title: "MBPP Areas and People",
      terms: [
        [
          "A-1",
          isEmployee
            ? "A lab post or work area associated with film appearance, OCS, particle-size distribution, bulk density, and other physical-property work tied to polyethylene samples."
            : "A lab post or work area. For an intern, think film appearance, OCS, particle size, bulk density, and other physical-property work tied to polyethylene samples.",
        ],
        [
          "A-2",
          isEmployee
            ? "A lab post or work area that may include density, ash, melt index, or other assigned analytical and physical-property methods."
            : "Another lab post or work area. It may involve analytical or physical property tests such as density, ash, melt index, or other assigned methods.",
        ],
        [
          "A-3",
          isEmployee
            ? "A lab post or work area associated with broader sample coordination, records, analytical support, and post-specific responsibilities."
            : "A lab post or work area often connected with broader lab support, coordination, samples, records, and post-specific responsibilities.",
        ],
        ["Lab Technician", "The trained person who runs samples, follows methods, checks instruments, records results, and communicates problems."],
        ["FLS", "First Line Supervisor. The person who helps manage technicians, priorities, training, resources, and escalation."],
        ["QAC / Chemist", "Quality Assurance Coordinator or chemist role. Helps connect methods, quality systems, SQC, data integrity, and assessments."],
        ["QDS", "Quality Data Specialist. Supports quality data, lot/grading records, reviews, and data investigations."],
        ["LES", "Lab Equipment Specialist. Supports instrument reliability, troubleshooting, parts, service, and equipment readiness."],
      ],
    },
    {
      title: "Product and Samples",
      terms: [
        ["MBPP", "Mont Belvieu Plastics Plant. In this guide, it means the ExxonMobil polyethylene site that the lab supports."],
        ["Polyethylene", "A plastic resin made into small pellets or other forms. It can become film, bags, liners, pipe, containers, and packaging."],
        ["LLDPE", "Linear low-density polyethylene. Think flexible films and packaging uses where toughness and sealing can matter."],
        ["HDPE", "High-density polyethylene. Think stronger, stiffer uses such as certain bags, liners, pipe, and rigid containers."],
        ["Resin / Pellets", "The white plastic material the lab often tests. The pellets may look simple, but small property changes can matter."],
        ["Lot", "A defined amount of material that needs to stay tied to the correct sample, test request, and result."],
        ["Sample ID", "The name tag for a sample. If the ID is wrong or unclear, the result may not be defensible."],
      ],
    },
    {
      title: "Tests and Instruments",
      terms: [
        ["Test Method", "The approved recipe for running a test. It tells trained personnel how the sample, instrument, timing, and calculation should be handled."],
        ["Melt Index", "A test for how easily melted polyethylene flows. Flow behavior helps connect a resin to grade and processing behavior."],
        ["Density", "A property that helps describe the resin. Different density ranges can relate to different product behavior."],
        ["Ash", "A check for inorganic residue left after burning under controlled conditions. It can help point to additives, contamination, or formulation clues."],
        ["GC", "Gas Chromatography. A method that separates chemicals so trained personnel can estimate composition or purity."],
        ["OCS", "Optical Control System. A film-inspection setup used to look for visible defects such as gels or total defect area."],
        ["Calibration", "A check against a known standard. It helps prove an instrument is measuring correctly enough for its intended use."],
        ["SQC", "Statistical Quality Control. A routine check that helps show whether an instrument or method is behaving normally."],
      ],
    },
    {
      title: "Quality Data and Review",
      terms: [
        ["LIMS / Sample Manager", "The computer system used to track samples, requests, results, and records. It is part of the data trail."],
        ["Traceability", "The ability to reconstruct what happened later: sample, lot, method, instrument, analyst, raw data, corrections, and review."],
        ["Data Integrity", "Treating data like evidence. A result is useful only if it is honest, complete, and explainable later."],
        ["DIAF", "Data Integrity Assurance Framework. A quality mindset for keeping lab data accurate, complete, and defensible."],
        ["QAS", "Quality Assurance System. The organized system of procedures, roles, records, assessments, and controls that supports quality work."],
        ["QP&G", "Quality Practices and Guidelines. Company lab quality expectations that connect methods, training, calibration, data, and corrective actions."],
        ["Manual Entry", "A result typed by a person instead of transferred automatically. It can be valid, but it creates transcription risk and should be checked."],
        ["Retest", "Running a test again. A retest is not automatically bad, but the reason should be allowed, documented, and traceable."],
        ["Correction", "A record change made to fix something. The concern is not that a correction exists; the concern is whether the reason and source are clear."],
        ["OOS", "Out of Specification. A result may not meet an expected limit or requirement and needs proper review."],
        ["OOC", "Out of Control. A control check may show the method or instrument is not behaving normally."],
        [
          "CoA",
          isEmployee
            ? "Certificate of Analysis. A formal quality document. Data supporting a CoA must remain controlled, reviewed, and traceable."
            : "Certificate of Analysis. A formal quality document. Interns should understand that data feeding a CoA must be controlled and defensible.",
        ],
      ],
    },
  ];

  const sampleJourneySteps = [
    {
      label: "Plant sample",
      title: "Material is sampled",
      text: "A pellet or resin sample comes from plant activity and needs the right context.",
    },
    {
      label: "Container",
      title: "Identity is checked",
      text: "The sample ID, lot, material, time, and request must make sense before testing.",
    },
    {
      label: "Instrument",
      title: "Approved test runs",
      text: "A trained technician uses the method, instrument checks, and safety controls.",
    },
    {
      label: "Data review",
      title: "Result is checked",
      text: "The result is reviewed for reasonableness, SQC status, entries, and comments.",
    },
    {
      label: "Sample Manager / LIMS",
      title: "Record is retained",
      text: "The final data trail should be traceable enough to reconstruct later.",
    },
  ];

  resourcesContent.innerHTML = `
    <section class="resource-card resource-row source-row" id="approvedSources">
      <img class="resource-photo" src="${photos.plant.src}" alt="${photos.plant.alt}" />
      <div class="resource-section-intro">
        <div class="resource-section-title">
          <h3>${isEmployee ? "Official context and working references" : "Start with official ExxonMobil links"}</h3>
        </div>
      </div>
      <div class="source-list">
        ${officialLinks
          .map(
            (item, index) => `
              <details class="source-link-card">
                <summary>
                  <strong>${item.label}</strong>
                </summary>
                <div class="source-reveal">
                  <p>${item.text}</p>
                  <a href="${item.href}" target="_blank" rel="noreferrer">Open source</a>
                </div>
              </details>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="resource-card resource-row terms-row" id="labLanguage">
      <img class="resource-photo" src="${photos.analytical.src}" alt="${photos.analytical.alt}" />
      <div class="resource-section-intro">
        <div class="resource-section-title">
          <h3>${isEmployee ? "MBPP lab terms and working roles" : "Lab words you may hear"}</h3>
        </div>
      </div>
      <div class="term-groups">
        ${labTermGroups
          .map(
            (group, index) => `
              <details class="term-group">
                <summary>
                  <strong>${group.title}</strong>
                  <span>${group.terms.length} terms</span>
                </summary>
                <div class="terms-grid">
                  ${group.terms
                    .map(
                      ([term, definition], termIndex) => `
                        <article class="term-card" style="--term-index: ${termIndex}">
                          <strong>${term}</strong>
                          <p>${definition}</p>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              </details>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="resource-card sample-journey-row">
      <div class="sample-journey-head">
        <h3>From pellet to defensible data</h3>
      </div>
      <div class="sample-flow-map" aria-label="Animated sample-to-data lifecycle">
        <span class="sample-pellet" aria-hidden="true"></span>
        ${sampleJourneySteps
          .map(
            (step, index) => `
              <article class="sample-flow-step" style="--step-index: ${index}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <small>${step.label}</small>
                <strong>${step.title}</strong>
                <p>${step.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function hasSeenIntro() {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "true");
  } catch {
    // Browsers can block storage in some local contexts; the guide still works.
  }
}

function hasDismissedMobileNotice() {
  try {
    return localStorage.getItem(MOBILE_NOTICE_KEY) === "true";
  } catch {
    return false;
  }
}

function dismissMobileNotice() {
  mobileExperienceNote?.classList.add("is-dismissed");
  try {
    localStorage.setItem(MOBILE_NOTICE_KEY, "true");
  } catch {
    // The notice can still be dismissed visually for this page load.
  }
}

function dismissDisclaimer() {
  disclaimerOverlay?.classList.remove("active");
  disclaimerOverlay?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("disclaimer-is-open");

  const guideId = pendingGuide;
  pendingGuide = null;
  if (!guideId || !applyGuideContext(guideId)) {
    document.querySelector("[data-guide-select]")?.focus();
    return;
  }

  showView("home");
  if (guideId === "intern") {
    setIntroOpen(true, { remember: false });
  }
}

function initMobileNotice() {
  if (hasDismissedMobileNotice()) {
    mobileExperienceNote?.classList.add("is-dismissed");
  }
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  audioUnlocked = true;
  return audioContext;
}

function playSfx(kind = "tick") {
  if (!sfxEnabled || !audioUnlocked || prefersReducedMotion()) return;
  const context = ensureAudioContext();
  const now = context.currentTime;
  const output = context.createGain();
  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(kind === "open" ? 0.07 : 0.045, now + 0.018);
  output.gain.exponentialRampToValueAtTime(0.0001, now + (kind === "open" ? 0.42 : 0.18));
  output.connect(context.destination);

  const first = context.createOscillator();
  const second = context.createOscillator();
  first.type = "sine";
  second.type = "triangle";
  const base = kind === "open" ? 146.83 : kind === "button" ? 220 : 174.61;
  first.frequency.setValueAtTime(base, now);
  first.frequency.exponentialRampToValueAtTime(base * 1.5, now + 0.16);
  second.frequency.setValueAtTime(base * 2, now + 0.035);
  second.frequency.exponentialRampToValueAtTime(base * 1.25, now + 0.24);
  first.connect(output);
  second.connect(output);
  first.start(now);
  second.start(now + 0.035);
  first.stop(now + (kind === "open" ? 0.36 : 0.15));
  second.stop(now + (kind === "open" ? 0.42 : 0.18));
}

function unlockIntroSfx() {
  if (!sfxEnabled || audioUnlocked || prefersReducedMotion()) return;
  ensureAudioContext();
  playSfx("button");
}

function clearIntroTimer() {
  if (introSceneChangeTimer) {
    window.clearTimeout(introSceneChangeTimer);
    introSceneChangeTimer = null;
  }
}

function setIntroScene(sceneIndex, options = {}) {
  const target = Math.max(0, Math.min(introScenes.length - 1, sceneIndex));
  const scene = introScenes[target] || introScenes[0];
  const { instant = false } = options;
  if (!introOverlay || !introTitle) return;

  activeIntroScene = target;
  introOverlay.dataset.scene = scene.theme;
  introOverlay.classList.toggle("intro-video-scene", scene.video);
  introOverlay.classList.toggle("intro-context-scene", scene.theme === "context");
  introOverlay.classList.toggle("intro-ready-scene", scene.theme === "ready");
  introTitle.setAttribute("aria-label", scene.title.join(" "));
  introTitle.innerHTML = scene.title
    .map((line) => `<span class="animate-title-line">${line}</span>`)
    .join("");

  if (!scene.video && introVideo) {
    introVideo.pause();
    introVideo.currentTime = 0;
  }

  introOverlay.classList.remove("scene-changing");
  if (!instant && !prefersReducedMotion()) {
    void introOverlay.offsetWidth;
    introOverlay.classList.add("scene-changing");
    introSceneChangeTimer = window.setTimeout(() => {
      introOverlay.classList.remove("scene-changing");
      introSceneChangeTimer = null;
    }, 980);
    playSfx(scene.video ? "open" : "tick");
  }
}

function startIntroSceneSequence() {
  clearIntroTimer();
  setIntroScene(0, { instant: true });
  introOverlay?.classList.add("intro-complete");
}

function setIntroOpen(isOpen, options = {}) {
  if (!introOverlay) return;
  const { remember = true } = options;
  clearIntroTimer();

  if (isOpen) {
    introOverlay.classList.remove("intro-active", "intro-complete");
    introOverlay.classList.remove("intro-video-scene", "intro-context-scene", "intro-ready-scene", "scene-changing");
    introOverlay.classList.add("active");
    introOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("intro-is-open");

    if (introVideo) {
      introVideo.pause();
      introVideo.currentTime = 0;
    }

    // Force a fresh animation pass when the intro is reopened from the topbar.
    void introOverlay.offsetWidth;
    window.requestAnimationFrame(() => {
      introOverlay.classList.add("intro-active");
      startIntroSceneSequence();
    });
    return;
  }

  introOverlay.classList.remove("active", "intro-active", "intro-complete");
  introOverlay.classList.remove("intro-video-scene", "intro-context-scene", "intro-ready-scene", "scene-changing");
  introOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("intro-is-open");

  if (introVideo) {
    introVideo.pause();
    introVideo.currentTime = 0;
  }

  if (remember) {
    markIntroSeen();
  }
}

function applyGuideContext(guideId) {
  const config = guideConfigs[guideId];
  if (!config) return false;

  activeGuide = guideId;
  document.body.dataset.guide = guideId;
  document.title = `ExxonMobil ${config.brand}`;
  guideBrandLabel.textContent = config.brand;
  homeTitle.textContent = config.homeTitle;
  startGuideTitle.textContent = config.startTitle;
  secondaryGuideTitle.textContent = config.secondaryTitle;
  resourcesEyebrow.textContent = config.resourcesEyebrow;
  resourcesTitle.textContent = config.resourcesTitle;
  topbarBrand.setAttribute("aria-label", "Return to selected guide home");
  topbarSwitchButton.hidden = false;
  topbarIntroButton.hidden = guideId !== "intern";
  activeSlide = 0;
  activeRevealStep = 0;
  renderResources();
  return true;
}

function selectGuide(guideId) {
  if (!guideConfigs[guideId]) return;
  pendingGuide = guideId;
  disclaimerOverlay?.classList.add("active");
  disclaimerOverlay?.setAttribute("aria-hidden", "false");
  document.body.classList.add("disclaimer-is-open");
  window.requestAnimationFrame(() => disclaimerButton?.focus());
}

function showGuideSelector() {
  setIntroOpen(false, { remember: false });
  activeGuide = null;
  delete document.body.dataset.guide;
  document.title = "ExxonMobil MBPP Lab Guides";
  guideBrandLabel.textContent = "MBPP Lab Onboarding";
  homeTitle.textContent = "Selected MBPP lab guide";
  topbarBrand.setAttribute("aria-label", "Return to guide selection");
  topbarSwitchButton.hidden = true;
  topbarIntroButton.hidden = true;
  showView("audience");
}

function activateView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    const isActive = name === viewName;
    element.classList.toggle("active", isActive);
    element.classList.toggle("view-entering", isActive && !prefersReducedMotion());
    element.classList.remove("view-exiting");
    element.setAttribute("aria-hidden", String(!isActive));
  });

  activeView = viewName;
  document.body.dataset.activeView = viewName;
  viewportMeta?.setAttribute(
    "content",
    viewName === "slideshow" ? SLIDESHOW_VIEWPORT_CONTENT : DEFAULT_VIEWPORT_CONTENT,
  );

  if (viewName === "slideshow") {
    goToSlide(0);
  }

  if (!prefersReducedMotion()) {
    window.setTimeout(() => {
      views[viewName]?.classList.remove("view-entering");
    }, VIEW_TRANSITION_MS + 80);
  }
}

function showView(viewName) {
  if (!views[viewName] || isViewTransitioning) return;

  if (viewName === activeView) {
    if (viewName === "slideshow") {
      goToSlide(0);
    }
    return;
  }

  const previousView = views[activeView];

  if (prefersReducedMotion() || !previousView) {
    activateView(viewName);
    return;
  }

  isViewTransitioning = true;
  previousView.classList.add("view-exiting");
  window.setTimeout(() => {
    activateView(viewName);
    isViewTransitioning = false;
  }, VIEW_TRANSITION_MS);
}

function restartSlideEntrance() {
  if (!slideContent || prefersReducedMotion()) return;
  window.clearTimeout(slideAnimationTimer);
  slideContent.classList.remove("slide-entering");
  slideStage?.classList.remove("slide-stage-entering");
  void slideContent.offsetWidth;
  window.requestAnimationFrame(() => {
    slideContent.classList.add("slide-entering");
    slideStage?.classList.add("slide-stage-entering");
    slideAnimationTimer = window.setTimeout(() => {
      slideContent.classList.remove("slide-entering");
      slideStage?.classList.remove("slide-stage-entering");
    }, SLIDE_ENTER_MS);
  });
}

function getDetailsAccordion(details) {
  if (details.classList.contains("source-link-card")) {
    return { parent: ".source-list", item: ".source-link-card" };
  }

  if (details.classList.contains("term-group")) {
    return { parent: ".term-groups", item: ".term-group" };
  }

  return null;
}

function closeSiblingDetails(details, accordion) {
  details.closest(accordion.parent)?.querySelectorAll(accordion.item).forEach((item) => {
    if (item !== details) {
      closeDetailsWithAnimation(item);
    }
  });
}

function openDetailsWithAnimation(details) {
  if (!details || details.open) return;

  details.classList.remove("is-closing");
  details.open = true;
  if (prefersReducedMotion()) return;

  details.classList.add("is-opening");

  window.setTimeout(() => {
    details.classList.remove("is-opening");
  }, DETAILS_ANIMATION_MS);
}

function closeDetailsWithAnimation(details) {
  if (!details?.open || details.classList.contains("is-closing")) return;

  if (prefersReducedMotion()) {
    details.open = false;
    return;
  }

  details.classList.remove("is-opening");
  details.classList.add("is-closing");

  window.setTimeout(() => {
    details.open = false;
    details.classList.remove("is-closing");
  }, DETAILS_ANIMATION_MS);
}

document.addEventListener(
  "click",
  (event) => {
    const summary = event.target.closest?.(".source-link-card > summary, .term-group > summary");
    if (!summary) return;

    const details = summary.parentElement;
    if (!details) return;
    const accordion = getDetailsAccordion(details);
    if (!accordion) return;

    event.preventDefault();

    if (details.open) {
      closeDetailsWithAnimation(details);
      return;
    }

    closeSiblingDetails(details, accordion);
    openDetailsWithAnimation(details);
  },
  true,
);

document.addEventListener("click", (event) => {
  unlockIntroSfx();

  const disclaimerAcknowledge = event.target.closest("[data-disclaimer-acknowledge]");
  if (disclaimerAcknowledge) {
    event.preventDefault();
    playSfx("open");
    dismissDisclaimer();
    return;
  }

  const guideSelection = event.target.closest("[data-guide-select]");
  if (guideSelection) {
    event.preventDefault();
    playSfx("open");
    selectGuide(guideSelection.dataset.guideSelect);
    return;
  }

  const switchGuide = event.target.closest("[data-switch-guide]");
  if (switchGuide) {
    event.preventDefault();
    playSfx("button");
    showGuideSelector();
    return;
  }

  const guideHome = event.target.closest("[data-guide-home]");
  if (guideHome) {
    event.preventDefault();
    if (activeGuide) {
      showView("home");
    } else {
      showGuideSelector();
    }
    return;
  }

  const introOpen = event.target.closest("[data-intro-open]");
  if (introOpen) {
    event.preventDefault();
    playSfx("button");
    setIntroOpen(true, { remember: false });
    return;
  }

  const introContinue = event.target.closest("[data-intro-continue]");
  if (introContinue) {
    event.preventDefault();
    playSfx(activeIntroScene >= introScenes.length - 1 ? "open" : "button");
    if (activeIntroScene >= introScenes.length - 1) {
      setIntroOpen(false);
      activateView("home");
      return;
    }

    setIntroScene(activeIntroScene + 1);
    return;
  }

  const mobileNoticeDismiss = event.target.closest("[data-mobile-notice-dismiss]");
  if (mobileNoticeDismiss) {
    event.preventDefault();
    dismissMobileNotice();
    return;
  }

  const viewTarget = event.target.closest("[data-view-target]");
  if (viewTarget) {
    event.preventDefault();
    showView(viewTarget.dataset.viewTarget);
    return;
  }

  const previousSlide = event.target.closest("[data-slide-prev]");
  if (previousSlide) {
    retreatDeck();
    return;
  }

  const nextSlide = event.target.closest("[data-slide-next]");
  if (nextSlide) {
    advanceDeck();
  }
});

document.addEventListener(
  "toggle",
  (event) => {
    const details = event.target;
    if (
      details?.tagName?.toLowerCase() !== "details" ||
      !details.open ||
      details.classList.contains("is-opening") ||
      details.classList.contains("is-closing")
    ) {
      return;
    }

    const accordion = getDetailsAccordion(details);
    if (accordion) {
      closeSiblingDetails(details, accordion);
    }
  },
  true,
);

document.addEventListener("keydown", (event) => {
  if (disclaimerOverlay?.classList.contains("active")) {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      disclaimerButton?.focus();
    }
    return;
  }

  if (introOverlay?.classList.contains("active")) {
    if (event.key === "Escape") {
      event.preventDefault();
      setIntroOpen(false);
    }
    return;
  }

  if (activeView !== "slideshow") return;
  const target = event.target;
  const tagName = target?.tagName?.toLowerCase();
  const isTyping =
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target?.isContentEditable;
  if (isTyping) return;

  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    advanceDeck();
  }

  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    retreatDeck();
  }

  if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    const slides = getActiveSlides();
    goToSlide(slides.length - 1);
  }

  if (event.key === "Escape") {
    event.preventDefault();
    showView("home");
  }
});

renderResources();
initMobileNotice();
document.body.dataset.activeView = activeView;
