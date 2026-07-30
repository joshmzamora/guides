const testWalkthroughs = [
  {
    name: "OCS Cast Film and Defect Review",
    area: "A-1 / film performance",
    purpose: "Turns polyethylene into cast film and uses optical inspection to help understand film appearance, gels, total defect area, and defect trends.",
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
    purpose: "Helps characterize polyethylene granules or powder so the plant understands material consistency and handling behavior.",
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
    purpose: "Measures how much polyethylene material occupies a known volume, supporting handling, packaging, and product consistency understanding.",
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
    purpose: "Helps describe polymer flow behavior under controlled conditions, which can matter for processing and product performance.",
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
    purpose: "Represents other physical or analytical checks that may support product quality, specification review, or investigation.",
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
    purpose: "Gas chromatography may be used for purity checks on materials referenced in the guide, such as Hexene-1, benzene, or isopentane.",
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
    startCopy: "Walk through MBPP context, laboratory work, common tests, quality systems, and safe shadowing.",
    secondaryTitle: "Resources & Guides",
    resourcesCopy: "Open official links, beginner lab terms, and a sample-to-data reference.",
    resourcesEyebrow: "Intern Guide / Resources",
    resourcesTitle: "Sources and lab language.",
  },
  employee: {
    brand: "MBPP Lab Orientation",
    homeTitle: "Mont Belvieu Plastics Plant Lab Orientation",
    startTitle: "Start Lab Orientation",
    startCopy: "Review how the MBPP lab supports manufacturing, controls testing, and communicates reliable results.",
    secondaryTitle: "Resources & Guides",
    resourcesCopy: "Open official sources, lab terminology, and a sample-to-data reference.",
    resourcesEyebrow: "MBPP Lab Orientation / Resources",
    resourcesTitle: "Sources and lab reference.",
  },
  technician: {
    brand: "MBPP Technician Onboarding",
    homeTitle: "Mont Belvieu Plastics Plant Technician Onboarding",
    startTitle: "First Week Overview",
    startCopy: "See what your first week may look like, what to learn first, and how qualification begins.",
    secondaryTitle: "Technician Playbook",
    resourcesCopy: "Open quick guidance for common situations: what to stop, check, contact, and record.",
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
const startGuideCopy = document.querySelector("#startGuideCopy");
const secondaryGuideTitle = document.querySelector("#secondaryGuideTitle");
const resourcesGuideCopy = document.querySelector("#resourcesGuideCopy");
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
    short: "Film appearance and defects",
    measures: "Makes a thin film from resin and checks what the film looks like.",
    why: "Defects can affect how a customer sees or uses the plastic film.",
    labUse: "The lab connects the film run, OCS output, sample ID, and comments.",
    sampleEquipment:
      "Polyethylene pellets, a cast-film setup, chill rolls, film-thickness checks, and the OCS camera/output that flags gels, lane patterns, and total defect area.",
    mentorQuestion:
      "How do you tell the difference between a real film defect and a setup issue like dirty chill rolls, film thickness, camera alignment, or material still purging through the system?",
    watch: ["Hot equipment and moving parts.", "How defects are named or counted.", "How unusual appearance is documented."],
    outputs: ["Film appearance rating", "Gel or defect counts", "Total defect area", "Sample ID and run comments"],
  },
  "Particle Size Distribution": {
    short: "How big the pieces are",
    measures: "Sorts pellets, powder, or granules into size groups.",
    why: "Size affects how material moves, feeds, blends, and handles.",
    labUse: "The lab checks whether the sample has the expected size profile.",
    sampleEquipment:
      "A representative pellet, powder, or granule sample plus a classifier or sieve-style setup, trays, and a balance to separate fines, normal-size material, and oversize pieces.",
    mentorQuestion:
      "What makes a sample representative, and what clues tell the technician the result is about the material instead of poor splitting, dirty equipment, or mixed-up identity?",
    watch: ["Clean equipment.", "Correct sample identity.", "Too many fines or oversized pieces."],
    outputs: ["Percent retained by size range", "Fines or oversize fraction", "Mass balance checks", "Representative sample notes"],
  },
  "Bulk Density": {
    short: "How much fits in a space",
    measures: "Measures how much pellet or powder mass fits into a known volume.",
    why: "It matters for storage, packaging, loading, and equipment flow.",
    labUse: "The lab uses the same fill method so samples can be compared fairly.",
    sampleEquipment:
      "Pellets or powder, a known-volume cup or cylinder, a balance, and a controlled fill method so the result is not just from packing the material differently.",
    mentorQuestion:
      "How can pouring, settling, static, fines, or moisture change the number, and what repeat check tells the lab the value is believable?",
    watch: ["Pellet spills.", "Clean, dry containers.", "How repeat checks are handled."],
    outputs: ["Mass per volume", "Repeat measurements", "Sample condition notes", "Calculation or transcription checks"],
  },
  "Melt Index": {
    short: "How melted plastic flows",
    measures: "Shows how easily polyethylene flows when it is heated.",
    why: "Flow helps connect a resin to grade, processing, and customer use.",
    labUse: "The lab controls heat, timing, load, and instrument status before reporting.",
    sampleEquipment:
      "Polyethylene pellets, a melt-index instrument with a heated barrel, die/orifice, rod or weight system, timer/cutter, and method-specific temperature/load settings.",
    mentorQuestion:
      "Before trusting a melt-flow number, what do checks like rod movement, orifice condition, spacer alignment, balance, temperature/load, and SQC prove?",
    watch: ["Hot surfaces.", "Correct temperature and load.", "Timing and cleaning between runs."],
    outputs: ["Melt flow value", "Temperature and load condition", "Replicate agreement", "Instrument and method record"],
  },
  "Density / Ash / Analytical Checks": {
    short: "Property and residue checks",
    measures: "Checks properties like density or residue left after controlled testing.",
    why: "Small property changes can matter for grade, formulation, or review.",
    labUse: "The lab connects each value to the method, instrument, standard, and sample prep.",
    sampleEquipment:
      "Depending on the method: prepared resin specimens or weighed material, density equipment, analytical balances, furnaces/ovens, XRF or other analytical instruments, and required standards or checks.",
    mentorQuestion:
      "When a property result surprises people, how does the lab decide whether to look first at sample prep, instrument configuration, calibration/SQC, trend data, or a real process change?",
    watch: ["Hot equipment or chemicals.", "Clean sample handling.", "Calibration or standard checks."],
    outputs: ["Density or ash value", "Calibration or standard check", "Preparation notes", "Review or retest documentation"],
  },
  "GC Purity Checks": {
    short: "Chemical purity check",
    measures: "Separates chemicals so the lab can estimate purity or composition.",
    why: "Composition can matter when chemical identity affects quality or process decisions.",
    labUse: "The lab relies on standards, instrument setup, sample identity, and review.",
    sampleEquipment:
      "A clearly labeled vial or standard, a GC instrument, the approved method/sequence, carrier gases, and the chromatogram data used to review peaks and purity.",
    mentorQuestion:
      "What does the analyst check in vial identity, standards, sequence setup, peak integration, and chromatogram review before a purity result is reported?",
    watch: ["Chemical and gas safety.", "Readable vial labels.", "How peaks are reviewed."],
    outputs: ["Component percentages or purity", "Chromatogram and peak integration", "Calibration status", "Sample and run sequence record"],
  },
};

function getWalkthroughSlides() {
  const companySlides = [
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Company",
      title: "Start with ExxonMobil",
      lead:
        "ExxonMobil is a large energy and chemical company. This guide focuses on one small part of that world: polyethylene manufacturing and the lab that supports it.",
      bullets: [],
      photo: slideVisuals.exxonCompany,
    }),
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Materials",
      title: "The chemical side makes materials",
      lead:
        "Chemical products can become the raw materials for packaging, films, containers, pipe, liners, and many other everyday items.",
      bullets: [
        "The product may start as small pellets.",
        "Customers care about how those pellets perform.",
        "Testing helps prove that performance is understood.",
      ],
      photo: slideVisuals.exxonProducts,
    }),
    createSlide({
      eyebrow: "Section 1 / ExxonMobil overview",
      label: "Operations",
      title: "Reliable operations matter",
      lead:
        "Manufacturing sites need safe, steady, controlled work. A small mistake can affect people, equipment, product quality, or customer trust.",
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
      title: "MBPP is a polyethylene site",
      lead:
        "Mont Belvieu Plastics Plant is an ExxonMobil site in Chambers County, Texas that makes polyethylene products.",
      bullets: [
        "Public fact sheet context: in operation since 1982.",
        "The site is about 500 acres.",
        "The plant is part of the Baytown-area ExxonMobil footprint.",
      ],
      photo: slideVisuals.mbppSite,
    }),
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "Polyethylene",
      title: "What polyethylene is",
      lead:
        "Polyethylene is a plastic resin. At a plant, you may see it as pellets or other forms before customers turn it into products.",
      bullets: [],
      note: "Simple idea: the pellets may look plain, but their properties can change how they behave.",
      photo: slideVisuals.mbppPolyethylene,
    }),
    createSlide({
      eyebrow: "Section 2 / Mont Belvieu Plastics Plant",
      label: "End uses",
      title: "What polyethylene can become",
      lead:
        "Polyethylene can become films, packaging, bags, liners, pipe, and containers. Different uses need different material behavior.",
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
      title: "Why plant samples are tested",
      lead:
        "A sample is a small piece of a much larger production story. Testing helps the plant understand whether the material is behaving as expected.",
      bullets: [
        "The sample must connect to the right lot, time, material, and request.",
        "The lab result can support product quality review.",
        "A confusing sample identity can make the result hard to defend.",
      ],
      photo: slideVisuals.mbppSampling,
    }),
  ];

  const labSlides = [
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Purpose",
      title: "What the lab does",
      lead:
        "The Quality Control lab responds to manufacturing needs by testing samples and producing reliable product-quality data.",
      bullets: [
        "Technicians run approved test methods.",
        "They check instrument status and SQC when required.",
        "They record and communicate results and issues.",
      ],
      photo: slideVisuals.labPurpose,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Support",
      title: "How the lab supports manufacturing",
      lead:
        "The lab does not make the product. It helps the plant understand the product by turning samples into controlled information.",
      bullets: [
        "Results may help with product quality review.",
        "Unusual results may trigger questions or troubleshooting.",
        "Clear communication helps the plant respond quickly.",
      ],
      photo: slideVisuals.labSupport,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Workflow",
      title: "Sample to result",
      lead:
        "A sample journey usually moves from plant context, to lab receipt, to testing, to review, to a retained result in Sample Manager or another approved record.",
      bullets: [
        "Identity comes first: what is this sample and where did it come from?",
        "The method tells trained personnel how to test it.",
        "The record should show what happened later.",
      ],
      photo: slideVisuals.labWorkflow,
    }),
    createSlide({
      eyebrow: "Section 3 / The MBPP lab",
      label: "Trust",
      title: "What good lab data means",
      lead:
        "The quality manual language can be simplified like this: good data should be correct, on time, repeatable, honest, and traceable.",
      bullets: [
        "Accurate: the number should be right.",
        "Timely: it should arrive soon enough to be useful.",
        "Traceable: someone can reconstruct the sample, method, instrument, and result later.",
      ],
      photo: slideVisuals.labTrust,
    }),
  ];

  const testIntroSlides = [
    createSlide({
      eyebrow: "Section 4 / Common lab tests",
      label: "Test index",
      title: "Common tests you may hear about",
      lead:
        "Each test answers a different question about the material. You do not need to run these tests. Your job is to understand what question each test helps answer.",
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
      lead: `${details.measures} In plain English, this test helps the plant understand ${details.short.toLowerCase()}.`,
      bullets: [
        `Why the plant cares: ${details.why}`,
        `Sample or equipment involved: ${details.sampleEquipment}`,
        `What to ask a mentor: ${details.mentorQuestion}`,
      ],
      testIndex: index,
      photo: testPhotos[index],
    };
  });

  const qualitySlides = [
    createSlide({
      eyebrow: "Section 5 / Safety and quality systems",
      label: "Safety",
      title: "Safety is part of quality work",
      lead:
        "A lab result is not worth getting if the work is unsafe. In an industrial lab, PPE, training, procedures, and mentor direction come first.",
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
      title: "What makes a result trustworthy",
      lead:
        "A trustworthy result is more than a number. It is a number with enough context to explain where it came from.",
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
      title: "Quality systems keep work consistent",
      lead:
        "Systems like QP&G, DIAF, SQC, training records, calibration, and approved methods help the lab prove that work is controlled.",
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
      title: "Data is treated like evidence",
      lead:
        "In a lab, data may support product review, investigations, reports, or customer confidence. That is why unclear data is taken seriously.",
      bullets: [],
      note: "Beginner shortcut: if someone cannot explain where the result came from, the result is weaker.",
      photo: slideVisuals.qualityEvidence,
    }),
    createSlide({
      eyebrow: "Section 5 / Quality and data integrity",
      label: "Review",
      title: "Corrections and retests are not automatically bad",
      lead:
        "A correction or retest can be valid. The important question is whether the reason is allowed, documented, and easy to understand later.",
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
      title: "What makes a record worth asking about",
      lead:
        "A red flag does not mean someone did something wrong. It means the record may need more context from a trained person.",
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
      title: "What an intern can and cannot decide",
      lead:
        "You can notice patterns, ask questions, and learn the review path. You cannot decide product status, diagnose equipment, or change data.",
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
      title: "What to focus on while shadowing",
      lead:
        "Do not try to memorize every button or number. Watch how trained people keep the work safe, controlled, and traceable.",
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
      title: "Good mentor questions",
      lead:
        "A useful intern question connects what you see to why it matters.",
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
      title: "Turn observations into notes",
      lead:
        "Reflection notes help you remember what you saw and turn shadowing into a real learning activity.",
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
      title: "Build useful intern activities",
      lead:
        "Your observations can become process maps, mini quizzes, sample-journey diagrams, red-flag reviews, or mentor discussion prompts.",
      bullets: [],
      note: "Best final habit: when something seems unclear, slow down and ask the assigned mentor or technician.",
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
        `Measurement focus: ${details.measures}`,
        `Operational relevance: ${details.why}`,
        `Typical outputs: ${details.outputs.join(", ")}.`,
      ],
      note:
        "Equipment, method conditions, authorization, and reporting requirements come from current approved procedures and assigned training.",
      photo: getTestPhoto(index),
    });
  });

  return [
    createSlide({
      eyebrow: "Section 1 / Lab mission",
      label: "Orientation",
      title: "The lab is a manufacturing control point",
      lead:
        "The MBPP lab converts representative samples into controlled, traceable results that support product quality and plant decisions.",
      bullets: [
        "Accurate: the method and instrument are suitable and controlled.",
        "Timely: results arrive when the operation needs them.",
        "Defensible: identity, raw data, entries, corrections, and review can be reconstructed.",
      ],
      photo: slideVisuals.labPurpose,
    }),
    createSlide({
      eyebrow: "Section 1 / Site context",
      label: "MBPP",
      title: "Polyethylene production sets the context",
      lead:
        "MBPP produces polyethylene products. The laboratory supports that operation by evaluating resin properties, appearance, consistency, and selected analytical characteristics.",
      bullets: [
        "Plant samples must remain connected to the correct material, lot, time, and request.",
        "Results can inform manufacturing, quality review, product disposition, and customer documentation.",
        "Operational urgency never removes safety, method, or data-integrity requirements.",
      ],
      photo: slideVisuals.mbppSite,
    }),
    createSlide({
      eyebrow: "Section 2 / Controlled workflow",
      label: "Lifecycle",
      title: "One sample, one traceable data trail",
      lead:
        "The working sequence is sample receipt and identity, preparation, instrument readiness, approved testing, result review, and controlled record retention.",
      bullets: [
        "Resolve unclear identity, condition, priority, or test scope before work proceeds.",
        "Record the sample, method, instrument, analyst, raw observations, calculations, and relevant comments.",
        "Escalate unexpected results or control failures through the applicable procedure and role.",
      ],
      photo: slideVisuals.labWorkflow,
    }),
    createSlide({
      eyebrow: "Section 2 / Controlled workflow",
      label: "Priorities",
      title: "Identity and priority travel with the sample",
      lead:
        "A technically correct measurement is not useful if it is attached to the wrong material or handled outside the required priority path.",
      bullets: [
        "Confirm sample ID, material or grade, lot, requested tests, and available context.",
        "Use the established process for routine, priority, investigation, or special samples.",
        "Do not infer missing identity or silently substitute a nearby sample or prior result.",
      ],
      photo: slideVisuals.mbppSampling,
    }),
    createSlide({
      eyebrow: "Section 3 / Common lab tests",
      label: "Test map",
      title: "Six test families in this orientation",
      lead:
        "The following slides summarize what each test family measures and why the result matters. They are orientation, not operating instructions.",
      bullets: [],
      note: "Post assignments and approved procedures determine the exact method, equipment, and authorization required.",
      photo: slideVisuals.testMenu,
      kind: "test-menu",
    }),
    ...employeeTestSlides,
    createSlide({
      eyebrow: "Section 4 / Method control",
      label: "Readiness",
      title: "Instrument readiness is part of the result",
      lead:
        "Calibration, standards, SQC, maintenance status, cleanliness, and method conditions establish whether an instrument or method is ready for use.",
      bullets: [
        "Review the required status and control evidence before relying on sample data.",
        "Treat OOC indications as method-control signals that require the defined response.",
        "Do not trade control for speed when the plant is waiting on a result.",
      ],
      photo: slideVisuals.qualitySystems,
    }),
    createSlide({
      eyebrow: "Section 4 / Data systems",
      label: "Traceability",
      title: "Sample Manager is part of the evidence trail",
      lead:
        "Sample Manager or LIMS connects sample requests, results, comments, and review records. Entries must match the source data and remain explainable later.",
      bullets: [
        "Manual entries and transfers require the checks defined by the work process.",
        "Corrections and retests need a valid reason, retained original evidence, and traceable review.",
        "OOS and OOC events follow their applicable investigation and escalation processes.",
      ],
      photo: slideVisuals.qualityEvidence,
    }),
    createSlide({
      eyebrow: "Section 5 / People and escalation",
      label: "Roles",
      title: "Know who owns the next decision",
      lead:
        "A-1, A-2, and A-3 posts have assigned responsibilities. The FLS, QAC or Chemist, QDS, and LES provide different operational, quality, data, and equipment support.",
      bullets: [
        "FLS: priorities, staffing, training status, and operational escalation.",
        "QAC / Chemist and QDS: methods, quality systems, SQC, data review, and investigation support.",
        "LES: equipment reliability, troubleshooting, service, and readiness support.",
      ],
      note: "Use current site assignments and local escalation expectations; titles describe the working map, not every responsibility.",
      photo: slideVisuals.labSupport,
    }),
    createSlide({
      eyebrow: "Section 5 / First-week orientation",
      label: "Boundaries",
      title: "Start with safety, authorization, and the local work process",
      lead:
        "Before independent work, complete the required site and lab orientation, understand emergency equipment and alarms, and verify the training authorization for each task.",
      bullets: [
        "Recognize hot surfaces, moving parts, pinch points, sharp tools, chemicals, gases, static, and pellet slip hazards.",
        "Learn where current procedures, QAS, QP&G, DIAF, and post-specific references are controlled.",
        "When safety, identity, method status, or data handling is unclear, pause and escalate.",
      ],
      note: "This orientation provides context only. Official training, current procedures, and supervisor direction govern the work.",
      photo: slideVisuals.qualitySafety,
    }),
  ];
}

function getTechnicianFirstWeekSlides() {
  return [
    createSlide({
      eyebrow: "First week / Overview",
      label: "Start here",
      title: "What the first week is for",
      lead:
        "Most of the first week is orientation, shadowing, and learning where to get help.",
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
      title: "You do not need every answer",
      lead:
        "You do need to know where the answer should come from.",
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
      title: "Walk the lab before focusing on tests",
      lead:
        "Ask someone to show you the places and resources you will use.",
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
      title: "Watch. Practice. Qualify.",
      lead:
        "Independent work comes after the required training and review.",
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
      title: "See how the pieces connect",
      lead:
        "Ask a trainer to show you one sample from receipt to final record.",
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
      title: "Know these three answers",
      lead:
        "You should be able to answer without guessing.",
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
                  <strong>${test.name}</strong>
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
              <details class="playbook-case" ${index === 0 ? "open" : ""}>
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
        <p class="resource-intro">
          ${
            isEmployee
              ? "Use these sources for public site context, operational safety language, and polyethylene product background. Controlled procedures, current training, and supervisor direction govern actual lab work."
              : "Use these links to understand the company, MBPP, safety language, and polyethylene products. For real lab work, your mentor, site procedures, and official training always come first."
          }
        </p>
      </div>
      <div class="source-list">
        ${officialLinks
          .map(
            (item, index) => `
              <details class="source-link-card" ${index === 0 ? "open" : ""}>
                <summary>
                  <strong>${item.label}</strong>
                  <span>Click to view source notes</span>
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
        <p class="resource-intro">
          ${
            isEmployee
              ? "Use this reference to decode common MBPP lab terms, roles, systems, and review language. Current procedures and assigned training remain the source of authority."
              : "Use this as a quick decoder while you shadow. Open a category when a word shows up, then ask your mentor how that word is used at MBPP."
          }
        </p>
      </div>
      <div class="term-groups">
        ${labTermGroups
          .map(
            (group, index) => `
              <details class="term-group" ${index === 0 ? "open" : ""}>
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
        <p>
          ${
            isEmployee
              ? "Follow one sample through identity, controlled testing, review, and record retention. The output is a result that can support plant decisions and withstand later review."
              : "Follow one sample from the plant to the lab record. The goal is not just a number. The goal is a result someone can trust later."
          }
        </p>
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
  startGuideCopy.textContent = config.startCopy;
  secondaryGuideTitle.textContent = config.secondaryTitle;
  resourcesGuideCopy.textContent = config.resourcesCopy;
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
  guideBrandLabel.textContent = "MBPP Lab Learning Center";
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
