/*
  Reuse guide
  To launch a new state, only edit CONFIG and the arrays inside it.
  Everything else renders automatically.
*/

const CONFIG = {
  stateName: "North Carolina",
  shortState: "NC",
  programName: "North Carolina Energy",
  heroKicker: "Official home energy rebates",
  heroTitle: "Home energy rebates for efficiency and electrification upgrades",
  heroBody:
    "If you qualify, you can lower your utility bills and get help covering upgrade costs. Start by reviewing the program pathways, then follow the application steps.",
  officialProgramUrl: "https://energysavernc.org/",
  officialStateAgencyUrl: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina/energy-efficiency-rebates",
  statusOverviewUrl:
    "https://nccleantech.ncsu.edu/2025/03/26/50-state-analysis-home-energy-rebate-programs-status/",
  stats: [
    { label: "Efficiency upgrades max", value: "Up to $16,000", note: "HOMES pathway" },
    { label: "Electrification max", value: "Up to $14,000", note: "HEAR pathway" },
    { label: "State allocation", value: "Over $208M", note: "Combined programs" },
    { label: "Applications", value: "Open", note: "Check official site" },
  ],
  programs: [
    {
      title: "HOMES",
      subtitle: "Home efficiency upgrades",
      body:
        "Supports projects like insulation, air sealing, and heating and cooling efficiency improvements. Larger savings can mean larger rebates.",
      icon: "leaf",
      accent: "alt",
    },
    {
      title: "HEAR",
      subtitle: "Home electrification and appliances",
      body:
        "Supports high efficiency electric appliances and related upgrades such as heat pump water heaters, electric cooking, and more.",
      icon: "bolt",
      accent: "",
    },
  ],
  audience: [
    {
      title: "Low-to-moderate income families",
      body: "Priority access with enhanced rebate amounts for qualifying households.",
      icon: "shield",
      accent: "warn",
    },
    {
      title: "Homeowners",
      body: "Direct access to both efficiency and electrification rebate programs.",
      icon: "home",
      accent: "",
    },
    {
      title: "Renters with landlord support",
      body: "Eligible for certain upgrades when property owners participate.",
      icon: "key",
      accent: "alt",
    },
  ],
  upgrades: [
    { title: "Electric heat pumps", body: "ENERGY STAR-certified heating and cooling systems. Up to $8,000 rebate.", icon: "snow", accent: "" },
    { title: "Heat pump water heaters", body: "ENERGY STAR-certified electric water heating. Up to $1,750 rebate.", icon: "drop", accent: "alt" },
    { title: "Electric ranges and cooktops", body: "ENERGY STAR-certified electric cooking equipment. Up to $840 rebate.", icon: "flame", accent: "" },
    { title: "Insulation and air sealing", body: "ENERGY STAR-certified envelope improvements. Up to $1,600 rebate.", icon: "layers", accent: "alt" },
    { title: "Heat pump dryers", body: "ENERGY STAR-certified efficient laundry equipment. Up to $840 rebate.", icon: "bolt", accent: "" },
    { title: "Electrical upgrades", body: "Panel upgrades (up to $4,000) and wiring (up to $2,500) for electrification.", icon: "tool", accent: "alt" },
  ],
  tips: [
    { title: "Start with the official checker", body: "Eligibility can depend on income, home type, and savings estimates.", icon: "search", accent: "" },
    { title: "Keep receipts and scope", body: "Programs often require documentation and approved work paths.", icon: "doc", accent: "alt" },
    { title: "Contractors may need registration", body: "Some programs require registered contractors for instant rebates.", icon: "tool", accent: "" },
  ],
  steps: [
    { title: "Check basic eligibility", body: "Use the official program site to confirm income and household details." },
    { title: "Pick an upgrade path", body: "Choose efficiency upgrades, electrification upgrades, or a mix if allowed." },
    { title: "Get quotes and plan work", body: "Confirm what documentation is required before spending money." },
    { title: "Apply and track", body: "Submit your application and keep an eye on updates from the program." },
  ],
  quickLinks: [
    { label: "Apply or learn more", url: "https://energysavernc.org/" },
    { label: "State agency info", url: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina/energy-efficiency-rebates" },
    { label: "State status map", url: "https://nccleantech.ncsu.edu/2025/03/26/50-state-analysis-home-energy-rebate-programs-status/" },
  ],
  sourceLinks: [
    { label: "Energy Saver NC", url: "https://energysavernc.org/" },
    { label: "NC DEQ overview", url: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina" },
    { label: "NC DEQ rebate info", url: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina/energy-efficiency-rebates" },
    { label: "NC Clean Tech status analysis", url: "https://nccleantech.ncsu.edu/2025/03/26/50-state-analysis-home-energy-rebate-programs-status/" },
  ],
  programDetails: {
    homes: {
      title: "Home Efficiency Upgrades",
      fullTitle: "HOMES Program Overview",
      amount: "Up to $16,000",
      description: "The HOMES program provides rebates for whole-home efficiency improvements that achieve at least 20% modeled energy savings. The program rewards deeper energy savings with higher rebate amounts.",
      stats: [
        { label: "Maximum Rebate", value: "$16,000", note: "Per household" },
        { label: "Minimum Savings", value: "20%", note: "Required" },
        { label: "Rebate Structure", value: "$2,000-$4,000", note: "Performance-based" },
      ],
      improvements: [
        { title: "Insulation upgrades", body: "Attic, wall, and floor insulation to reduce energy loss.", icon: "layers" },
        { title: "Air sealing", body: "Eliminate drafts and improve building envelope performance.", icon: "snow", accent: "alt" },
        { title: "HVAC efficiency", body: "High-efficiency heating and cooling system upgrades.", icon: "snow" },
        { title: "Windows and doors", body: "Energy-efficient windows and door replacements.", icon: "home", accent: "alt" },
      ],
      howItWorks: [
        { title: "Pre-upgrade assessment", body: "Home energy audit to establish baseline consumption.", icon: "search", accent: "warn" },
        { title: "Qualified contractor work", body: "Improvements completed by registered contractors.", icon: "tool" },
        { title: "Performance verification", body: "Post-upgrade assessment confirms energy savings achieved.", icon: "doc", accent: "alt" },
      ],
      requirements: [
        { title: "Income eligibility", body: "Must meet program income limits based on area median income.", icon: "shield", accent: "warn" },
        { title: "Primary residence", body: "Property must be your primary residence, not rental or vacation home.", icon: "home" },
        { title: "Registered contractors", body: "Work must be completed by program-approved contractors.", icon: "tool", accent: "alt" },
      ]
    },
    hear: {
      title: "Home Electrification & Appliances",
      fullTitle: "HEAR Program Overview",
      amount: "Up to $14,000",
      description: "The HEAR program offers rebates for qualifying electric appliances and equipment that help homeowners transition to efficient, all-electric homes while reducing energy costs and carbon emissions.",
      stats: [
        { label: "Maximum Rebate", value: "$14,000", note: "Per household" },
        { label: "Heat Pump Water Heater", value: "$1,750", note: "Up to" },
        { label: "Electric Range", value: "$840", note: "Up to" },
      ],
      improvements: [
        { title: "Heat pump water heaters", body: "Energy-efficient electric water heating with up to $1,750 rebate.", icon: "drop" },
        { title: "Electric cooking", body: "Electric ranges, cooktops, and induction cooking equipment.", icon: "flame", accent: "alt" },
        { title: "Heat pump space heating", body: "Efficient electric heating and cooling systems.", icon: "bolt" },
        { title: "Electrical upgrades", body: "Panel upgrades and wiring to support new electric appliances.", icon: "tool", accent: "alt" },
      ],
      howItWorks: [
        { title: "Heat pump water heater", body: "$1,750 for qualifying ENERGY STAR models.", icon: "drop", accent: "warn" },
        { title: "Electric range", body: "Up to $840 for induction and electric cooking equipment.", icon: "flame" },
        { title: "Heat pump HVAC", body: "Rebates vary based on system size and efficiency rating.", icon: "bolt", accent: "alt" },
      ],
      requirements: [
        { title: "Income limits", body: "Must meet program income requirements based on household size.", icon: "shield", accent: "warn" },
        { title: "Primary residence only", body: "Appliances must be installed in your primary residence.", icon: "home" },
        { title: "Certified appliances", body: "Equipment must meet program efficiency and certification standards.", icon: "shield" },
      ]
    }
  }
};

const ICONS = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 4c-7.5 0-13 3.8-14.6 10.6C4.8 17.4 6.7 20 10 20c7.7 0 10-8.2 10-16Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 18c2.7-2.7 7.2-6.1 13.2-8.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.5 14.5A4.5 4.5 0 1 1 12 10h9v4h-3v3h-3v-3h-3.2a4.5 4.5 0 0 1-4.3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7.5 9.5h.01" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2 20 6v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M2 16l10 5 10-5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  snow: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4 7l16 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M20 7 4 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 4l4 3 4-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 20l4-3 4 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  drop: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2c4 6 7 9 7 13a7 7 0 1 1-14 0c0-4 3-7 7-13Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2c2 4 2 6 0 8 3-1 6 2 6 6a6 6 0 1 1-12 0c0-2 1-4 3-6 1-1 2-2 3-8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 2h7l5 5v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 13h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 17h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.7 6.3a4.5 4.5 0 0 0 6 6l-7.7 7.7a2.2 2.2 0 0 1-3.1 0l-5-5a2.2 2.2 0 0 1 0-3.1l7.7-7.7a4.5 4.5 0 0 0 5.9 1.4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6.7 14.7 9.3 17.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};

function $(id) {
  return document.getElementById(id);
}

function setText(id, txt) {
  const el = $(id);
  if (el) el.textContent = txt;
}

function setLink(id, url, label) {
  const el = $(id);
  if (!el) return;
  el.href = url;
  if (label) el.textContent = label;
}

function iconBox(iconKey, accentClass) {
  const cls = accentClass ? `icon ${accentClass}` : "icon";
  return `<div class="${cls}">${ICONS[iconKey] || ICONS.leaf}</div>`;
}

function renderList(containerId, items) {
  const root = $(containerId);
  if (!root) {
    console.error(`Element with ID ${containerId} not found`);
    return;
  }
  root.innerHTML = "";
  items.forEach((it) => {
    const div = document.createElement("div");
    div.className = root.classList.contains("grid3") || root.classList.contains("grid4") ? "item vertical" : "item";
    div.innerHTML = `
      ${iconBox(it.icon, it.accent)}
      <div>
        <p class="itemTitle">${it.title}</p>
        <p class="itemBody">${it.body}</p>
      </div>
    `;
    root.appendChild(div);
  });
}

function renderPrograms() {
  // Programs are now hardcoded in HTML, no dynamic rendering needed
  return;
}

function renderStats(containerId, stats) {
  const root = $(containerId);
  if (!root) return;
  root.innerHTML = "";
  stats.forEach((s) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `
      <div class="statTop">
        <span>${s.label}</span>
        <span style="opacity:.65">${s.note}</span>
      </div>
      <div class="statValue">${s.value}</div>
    `;
    root.appendChild(div);
  });
}

function renderSteps() {
  const root = $("stepList");
  root.innerHTML = "";
  CONFIG.steps.forEach((s, idx) => {
    const div = document.createElement("div");
    div.className = root.classList.contains("grid4") ? "step vertical" : "step";
    div.innerHTML = `
      <div class="num">${idx + 1}</div>
      <div>
        <div style="font-weight:750">${s.title}</div>
        <div style="color:rgba(234,240,255,.75); font-size:13px; margin-top:4px;">${s.body}</div>
      </div>
    `;
    root.appendChild(div);
  });
}

function renderLinks(containerId, links) {
  const root = $(containerId);
  root.innerHTML = "";
  links.forEach((l) => {
    const a = document.createElement("a");
    a.className = "linkBtn";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    root.appendChild(a);
  });
}

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}


function openSignupForm() {
  // Open the dedicated form page
  const popup = window.open("form.html", "_blank", "width=700,height=900,scrollbars=yes,resizable=yes");
  if (!popup) window.location.href = "form.html";
}


function renderProgramDetail(type) {
  const d = CONFIG.programDetails[type];
  if (!d) return;

  setText("detailTitle", d.title);
  setText("detailFullTitle", d.fullTitle);
  setText("detailAmount", d.amount);
  setText("detailDesc", d.description);
  
  renderStats("detailStats", d.stats);
  renderList("detailImprovements", d.improvements);
  renderList("detailHowItWorks", d.howItWorks);
  renderList("detailRequirements", d.requirements);
  
  // Update browser title
  document.title = `${type.toUpperCase()} Program - ${CONFIG.stateName} Energy Grants`;
}

function init() {
  const path = window.location.pathname;
  const isHomes = path.includes("homes.html");
  const isHear = path.includes("hear.html");

  if (isHomes || isHear) {
    const type = isHomes ? "homes" : "hear";
    renderProgramDetail(type);
    
    // Header brand info
    setText("headerTitle", `${type.toUpperCase()} Program`);
    setText("headerSub", isHomes ? "Home Efficiency Upgrades" : "Home Electrification & Appliances");
  } else {
    // Index page logic
    setText("siteTitle", `${CONFIG.programName} Grants`);
    setText("siteSub", `${CONFIG.stateName} home upgrades and rebates`);
    setText("kickerText", `${CONFIG.stateName} program spotlight`);
    setText("heroTitle", CONFIG.heroTitle);
    setText("heroBody", CONFIG.heroBody);
    setText("footerText", `Template ready for reuse. Replace CONFIG to launch another state.`);

    renderStats("stats", CONFIG.stats);
    renderList("audienceList", CONFIG.audience);
    renderList("upgradeList", CONFIG.upgrades);
    renderList("tipsList", CONFIG.tips);
    renderSteps();
    renderLinks("linkRow", CONFIG.quickLinks);
    renderLinks("sourceLinks", CONFIG.sourceLinks);
    
    $("primaryCta").addEventListener("click", openSignupForm);
    $("openSignupHero").addEventListener("click", openSignupForm);
    $("openSignupInline").addEventListener("click", openSignupForm);
  }
}

init();
