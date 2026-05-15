/* AnnealX site — material profile data + interactive curve picker */

/* Each step: { ramp: bool, target: °C, ratePerMin: °C/min, holdMin: minutes }
   Source: firmware HOUSEHOLD_PROFILES / ENGINEERING_PROFILES.
   Hardware caps: heating ≤ 3.35 °C/min, cooling ≤ 1.89 °C/min. */
window.ANNEALX_PROFILES = [
  /* ───── Household ───── */
  {
    id: "pla", category: "Household", name: "PLA",
    peak: 90, durationLabel: "~2.5 hours", durationH: 2.5,
    steps: [
      { ramp: true, target: 90, ratePerMin: 3.35, holdMin: 120 },
      { ramp: true, target: 22, ratePerMin: 1.89, holdMin: 0 },
    ],
    result: "Tensile strength +25% (48 → 60 MPa). Crystallinity significantly increased.",
    rationale: "Peer-reviewed Taguchi/ANOVA optimisation (2025). Ramp rate from MDPI convection furnace study.",
    source: "ScienceDirect (2025) · MDPI Polymers (2022)",
  },
  {
    id: "petg", category: "Household", name: "PETG",
    peak: 90, durationLabel: "~3.5 hours", durationH: 3.5,
    steps: [
      { ramp: true, target: 90, ratePerMin: 3.35, holdMin: 180 },
      { ramp: true, target: 22, ratePerMin: 1.89, holdMin: 0 },
    ],
    result: "Optimal balance at 90 °C. Neat PETG achieves higher UTS than CF-PETG at all conditions.",
    rationale: "Only PETG study with an explicitly stated ramp rate. DOE national-lab instrumentation.",
    source: "OSTI / DOE National Lab (2022)",
  },

  /* ───── Engineering ───── */
  {
    id: "pp", category: "Engineering", name: "Polypropylene (PP)",
    peak: 110, durationLabel: "~6 hours", durationH: 6,
    steps: [
      { ramp: true, target:  60, ratePerMin: 2.00, holdMin:  25 },
      { ramp: true, target: 110, ratePerMin: 2.50, holdMin: 240 },
      { ramp: true, target:  22, ratePerMin: 0.80, holdMin:   0 },
    ],
    result: "Optimal interlayer bonding and crystallinity. Gradual ramp reduces warping.",
    rationale: "ORNL: 110 °C / 4 h is optimal. ACS Omega confirms gradual ramp improves uniformity.",
    source: "ORNL / MRS Communications (2023) · ACS Omega (2025)",
  },
  {
    id: "pa12", category: "Engineering", name: "Nylon PA12 / PA12-CF",
    peak: 150, durationLabel: "~7 hours", durationH: 7,
    steps: [
      { ramp: true, target: 150, ratePerMin: 3.35, holdMin: 360 },
      { ramp: true, target:  22, ratePerMin: 1.00, holdMin:   0 },
    ],
    result: "Significant tensile and flexural improvement at 150 °C. Avoid 165 °C (oxidation).",
    rationale: "Only PA12 study with both ramp and cool rates explicitly stated. Peer-reviewed with tensile + flexural data.",
    source: "ScienceDirect / Composites Part B (2023)",
  },
  {
    id: "pa6", category: "Engineering", name: "Nylon PA6-CF / PA6-GF",
    peak: 120, durationLabel: "~10 hours", durationH: 10,
    steps: [
      { ramp: true, target:  80, ratePerMin: 2.00, holdMin:  30 },
      { ramp: true, target: 120, ratePerMin: 2.00, holdMin: 480 },
      { ramp: true, target:  22, ratePerMin: 1.00, holdMin:   0 },
    ],
    result: "Full crystallisation. Less than 0.5% deformation with CF reinforcement.",
    rationale: "Best-documented manufacturer profile in the absence of peer-reviewed PA6 studies with ramp rates.",
    source: "Bambu Lab (manufacturer) · Polymaker Wiki",
  },
  {
    id: "pc", category: "Engineering", name: "Polycarbonate (PC)",
    peak: 90, durationLabel: "~3.5 hours", durationH: 3.5,
    steps: [
      { ramp: true, target: 60, ratePerMin: 2.00, holdMin:  20 },
      { ramp: true, target: 90, ratePerMin: 2.00, holdMin: 120 },
      { ramp: true, target: 22, ratePerMin: 0.65, holdMin:   0 },
    ],
    result: "Stress relief — prevents delamination and cracking. No crystallinity gain (amorphous polymer).",
    rationale: "Polymaker is the primary authority on PC annealing for FDM. Must anneal immediately after print.",
    source: "Polymaker — PC User Guide v3.02 + Wiki",
  },
  {
    id: "petcf", category: "Engineering", name: "PET-CF",
    peak: 120, durationLabel: "~12 hours", durationH: 12,
    steps: [
      { ramp: true, target:  90, ratePerMin: 2.30, holdMin:  60 },
      { ramp: true, target: 120, ratePerMin: 2.00, holdMin: 600 },
      { ramp: true, target:  22, ratePerMin: 0.90, holdMin:   0 },
    ],
    result: "HDT jumps from ~70 °C to over 100 °C. Stiffness increase.",
    rationale: "Polymaker provides the most actionable profile with a 2-stage ramp. Universally applicable.",
    source: "Polymaker Fiberon PET-CF17",
  },
  {
    id: "pahtcf", category: "Engineering", name: "PAHT-CF",
    peak: 80, durationLabel: "~13 hours", durationH: 13,
    steps: [
      { ramp: true, target: 80, ratePerMin: 3.35, holdMin: 720 },
      { ramp: true, target: 22, ratePerMin: 1.00, holdMin:   0 },
    ],
    result: "Tensile strength +50% at room temperature. HDT up to 194 °C. Also dries the part.",
    rationale: "Bambu Lab TDS specifies 80 °C for 12 h. Peer-reviewed MDPI study (2025) validates with tensile data.",
    source: "Bambu Lab TDS v2.0 · MDPI Composites (2025)",
  },

  /* ───── High-Performance ───── */
  {
    id: "peek", category: "High Performance", name: "PEEK",
    peak: 200, durationLabel: "~20+ hours", durationH: 20,
    steps: [
      { ramp: true, target: 150, ratePerMin: 1.00,  holdMin:  60 },
      { ramp: true, target: 200, ratePerMin: 1.00,  holdMin: 120 },
      { ramp: true, target:  22, ratePerMin: 0.167, holdMin:   0 },
    ],
    result: "Targets 25–35% crystallinity. Dimensional stability at service temperatures over 250 °C.",
    rationale: "PRES provides the only complete staged profile with explicit cool-down rate (10 °C/h). Confirmed by spinal-cage studies.",
    source: "PRES Group (manufacturer) · ScienceDirect Review (2023)",
  },
  {
    id: "pps", category: "High Performance", name: "PPS / PPS-CF",
    peak: 130, durationLabel: "~5 hours", durationH: 5,
    steps: [
      { ramp: true, target:  80, ratePerMin: 2.00, holdMin:  60 },
      { ramp: true, target: 130, ratePerMin: 2.00, holdMin: 180 },
      { ramp: true, target:  22, ratePerMin: 1.00, holdMin:   0 },
    ],
    result: "Full crystallinity. Maximises mechanical, thermal, and chemical resistance.",
    rationale: "3DXTech provides the most detailed staged profile. Confirmed by Prusa Store listing.",
    source: "3DXTech / Vision Miner — ThermaX PPS",
  },
  {
    id: "pei9085", category: "High Performance", name: "PEI / ULTEM 9085",
    peak: 149, durationLabel: "~4 hours", durationH: 4,
    steps: [
      { ramp: true, target: 121, ratePerMin: 3.30, holdMin:  60 },
      { ramp: true, target: 149, ratePerMin: 2.00, holdMin:  60 },
      { ramp: true, target:  93, ratePerMin: 1.89, holdMin:  30 },
      { ramp: true, target:  22, ratePerMin: 0.80, holdMin:   0 },
    ],
    result: "Stress relief — prevents cracking and delamination. Amorphous polymer, no crystallinity gain.",
    rationale: "3DXTech / Vision Miner — primary authority. Only source with a complete 5-step staged protocol. Widely adopted in aerospace FDM.",
    source: "3DXTech / Vision Miner — 5-step protocol",
  },
  {
    id: "pei1010", category: "High Performance", name: "PEI / ULTEM 1010",
    peak: 200, durationLabel: "~6.5 hours", durationH: 6.5,
    steps: [
      { ramp: true, target: 149, ratePerMin: 3.30, holdMin:  60 },
      { ramp: true, target: 200, ratePerMin: 2.00, holdMin:  60 },
      { ramp: true, target: 149, ratePerMin: 1.89, holdMin:  30 },
      { ramp: true, target:  22, ratePerMin: 0.80, holdMin:   0 },
    ],
    result: "Stress relief — prevents cracking and delamination. Amorphous polymer, no crystallinity gain.",
    rationale: "Same proven 5-step protocol as the 9085, scaled to ULTEM 1010’s higher glass transition (217 °C vs 186 °C).",
    source: "3DXTech / Vision Miner — 5-step protocol",
  },
];

/* ───────────────────── Curve builder ─────────────────────
   Given a step list, produce {points:[[t_min,T_c],…], totalMin}. */
window.buildCurve = function buildCurve(steps, startTemp = 22) {
  const pts = [[0, startTemp]];
  let t = 0, T = startTemp;
  for (const s of steps) {
    if (s.ramp) {
      const dT = s.target - T;
      const ratePerMin = (dT >= 0 ? s.ratePerMin : -s.ratePerMin);
      const minutes = Math.abs(dT) / Math.abs(ratePerMin || 1);
      t += minutes;
      T = s.target;
      pts.push([t, T]);
    } else {
      // SET: instantaneous jump
      T = s.target;
      pts.push([t, T]);
    }
    if (s.holdMin > 0) {
      t += s.holdMin;
      pts.push([t, T]);
    }
  }
  return { points: pts, totalMin: t };
};

/* Render a curve into an <svg> element.
   Options: { width, height, padding, color, gridColor, labels:bool, mini:bool } */
window.renderCurve = function renderCurve(svg, profile, opts = {}) {
  const { points, totalMin } = window.buildCurve(profile.steps);
  const W = opts.width  || svg.viewBox.baseVal.width  || 800;
  const H = opts.height || svg.viewBox.baseVal.height || 280;
  const padL = opts.padL ?? 0;
  const padR = opts.padR ?? 0;
  const padT = opts.padT ?? 10;
  const padB = opts.padB ?? 16;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxT = Math.max(...points.map(p => p[1]));
  const yMax = Math.ceil((maxT + 20) / 20) * 20;
  const yMin = 0;
  const xMax = totalMin || 1;

  const x = m => padL + (m / xMax) * plotW;
  const y = c => padT + plotH - ((c - yMin) / (yMax - yMin)) * plotH;

  // Clear
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("preserveAspectRatio", "none");
  const NS = "http://www.w3.org/2000/svg";

  // Grid lines (horizontal, every 50 °C)
  if (!opts.mini) {
    for (let temp = 0; temp <= yMax; temp += 50) {
      const yy = y(temp);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", padL); line.setAttribute("x2", W - padR);
      line.setAttribute("y1", yy);   line.setAttribute("y2", yy);
      line.setAttribute("stroke", "#1f2935");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
    }
  }

  // Highlight hold regions (flat horizontal segments)
  for (let i = 1; i < points.length; i++) {
    const [t0, T0] = points[i-1];
    const [t1, T1] = points[i];
    if (T0 === T1 && t1 > t0) {
      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("x", x(t0));
      rect.setAttribute("y", y(T0) - 2);
      rect.setAttribute("width", x(t1) - x(t0));
      rect.setAttribute("height", 4);
      rect.setAttribute("fill", "rgba(60,166,86,0.18)");
      svg.appendChild(rect);
      // green hold underline shading
      const shade = document.createElementNS(NS, "rect");
      shade.setAttribute("x", x(t0));
      shade.setAttribute("y", y(T0));
      shade.setAttribute("width", x(t1) - x(t0));
      shade.setAttribute("height", padT + plotH - y(T0));
      shade.setAttribute("fill", "rgba(60,166,86,0.04)");
      svg.appendChild(shade);
    }
  }

  // Build line path
  let d = "";
  points.forEach((p, i) => {
    d += (i === 0 ? "M" : "L") + x(p[0]).toFixed(1) + "," + y(p[1]).toFixed(1) + " ";
  });

  // Glow underlay
  const glow = document.createElementNS(NS, "path");
  glow.setAttribute("d", d);
  glow.setAttribute("fill", "none");
  glow.setAttribute("stroke", "rgba(232,168,60,0.25)");
  glow.setAttribute("stroke-width", "6");
  glow.setAttribute("stroke-linecap", "round");
  glow.setAttribute("stroke-linejoin", "round");
  glow.setAttribute("filter", "blur(2px)");
  svg.appendChild(glow);

  // Main curve
  const line = document.createElementNS(NS, "path");
  line.setAttribute("d", d);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", opts.color || "#E8A83C");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("stroke-linejoin", "round");
  svg.appendChild(line);

  // Vertex dots + peak label
  points.forEach((p, i) => {
    const isEnd = i === 0 || i === points.length - 1;
    const dot = document.createElementNS(NS, "circle");
    dot.setAttribute("cx", x(p[0]));
    dot.setAttribute("cy", y(p[1]));
    dot.setAttribute("r", isEnd ? 3 : 2.5);
    dot.setAttribute("fill", "#0B1118");
    dot.setAttribute("stroke", opts.color || "#E8A83C");
    dot.setAttribute("stroke-width", "1.5");
    svg.appendChild(dot);
  });

  // Peak temperature callout
  if (!opts.mini) {
    const peakIdx = points.reduce((bi, p, i) =>
      p[1] > points[bi][1] ? i : bi, 0);
    const [pt, pT] = points[peakIdx];
    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", x(pt));
    text.setAttribute("y", y(pT) - 12);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-family", "Geist Mono, monospace");
    text.setAttribute("font-size", "12");
    text.setAttribute("fill", "#00B4C8");
    text.textContent = pT + " °C";
    svg.appendChild(text);
  }

  return { yMax, xMax };
};

/* ───────────────────── Picker wiring ─────────────────────  */
document.addEventListener("DOMContentLoaded", () => {
  /* Build material list */
  const list = document.querySelector("[data-mat-list]");
  if (list) {
    const cats = ["Household", "Engineering", "High Performance"];
    cats.forEach(cat => {
      const head = document.createElement("div");
      head.className = "mat-list__group";
      head.textContent = cat;
      list.appendChild(head);
      window.ANNEALX_PROFILES
        .filter(p => p.category === cat)
        .forEach(p => {
          const btn = document.createElement("button");
          btn.className = "mat-row";
          btn.type = "button";
          btn.dataset.id = p.id;
          btn.innerHTML =
            `<span>${p.name}</span><span class="meta">${p.peak}°·${p.durationLabel.replace(/~|hours?/g,'').trim()}h</span>`;
          btn.addEventListener("click", () => selectMaterial(p.id));
          list.appendChild(btn);
        });
    });
  }

  function selectMaterial(id) {
    const p = window.ANNEALX_PROFILES.find(x => x.id === id);
    if (!p) return;
    document.querySelectorAll(".mat-row").forEach(el =>
      el.classList.toggle("is-active", el.dataset.id === id));
    const cat   = document.querySelector("[data-mat-category]");
    const name  = document.querySelector("[data-mat-name]");
    const dur   = document.querySelector("[data-mat-duration]");
    const peak  = document.querySelector("[data-mat-peak]");
    const stepCount = document.querySelector("[data-mat-steps]");
    const result   = document.querySelector("[data-mat-result]");
    const rat      = document.querySelector("[data-mat-rationale]");
    const src      = document.querySelector("[data-mat-source]");
    if (cat)  cat.textContent  = p.category;
    if (name) name.textContent = p.name;
    if (dur)  dur.innerHTML    = `${p.durationH}<span class="u">h</span>`;
    if (peak) peak.innerHTML   = `${p.peak}<span class="u">°C</span>`;
    if (stepCount) stepCount.innerHTML = `${p.steps.length}<span class="u">steps</span>`;
    if (result) result.textContent = p.result;
    if (rat)    rat.textContent    = p.rationale;
    if (src)    src.textContent    = p.source;

    const svg = document.querySelector("[data-mat-curve]");
    if (svg) window.renderCurve(svg, p, { width: 800, height: 280, padL: 20, padR: 20, padT: 30, padB: 20 });

    // X-axis time labels
    const xa = document.querySelector("[data-mat-xaxis]");
    if (xa) {
      const { totalMin } = window.buildCurve(p.steps);
      const totH = totalMin / 60;
      const labels = ["0h", (totH * 0.25).toFixed(1) + "h",
                      (totH * 0.5).toFixed(1) + "h",
                      (totH * 0.75).toFixed(1) + "h",
                      totH.toFixed(1) + "h"];
      xa.innerHTML = labels.map(l => `<span>${l}</span>`).join("");
    }
  }

  // Initial select
  if (list) selectMaterial("pa12");

  /* FAQ accordions */
  document.querySelectorAll(".faq__item").forEach(item => {
    const q = item.querySelector(".faq__q");
    if (!q) return;
    q.addEventListener("click", () => item.classList.toggle("is-open"));
  });

  /* Hero scope: animated drawing of a sample thermal curve */
  const heroSvg = document.querySelector("[data-scope-curve]");
  if (heroSvg) {
    const demo = window.ANNEALX_PROFILES.find(x => x.id === "pa12");
    window.renderCurve(heroSvg, demo, {
      width: 220, height: 84, padL: 4, padR: 4, padT: 14, padB: 6,
      color: "#E8A83C",
    });
  }

  /* Manual: section scroll-spy highlight */
  const navLinks = document.querySelectorAll(".manual__nav a");
  if (navLinks.length) {
    const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    function onScroll() {
      const top = window.scrollY + 140;
      let activeIdx = 0;
      sections.forEach((s, i) => { if (s.offsetTop <= top) activeIdx = i; });
      navLinks.forEach((a, i) => a.classList.toggle("is-active", i === activeIdx));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
