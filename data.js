/* Ada Telecoms — iPhone catalogue data (demo) */
window.AT_PHONES = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    family: "Pro",
    tagline: "Our biggest, most capable iPhone",
    lenses: 3,
    deviceTotal: 1199,
    upfront: 29,
    colors: [
      { name: "Cosmic Orange", hex: "#C96F3A" },
      { name: "Deep Blue", hex: "#27374F" },
      { name: "Silver", hex: "#D8DADF" }
    ],
    storage: [
      { size: "256GB", delta: 0 },
      { size: "512GB", delta: 100 },
      { size: "1TB", delta: 200 }
    ],
    specs: {
      "Display": "6.9\u2033 Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19 Pro",
      "Camera": "48MP Pro Fusion triple system, 8x optical zoom",
      "Battery": "Up to 37 hours video playback",
      "Connectivity": "5G Ultra, Wi\u2011Fi 7, USB\u2011C"
    }
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    family: "Pro",
    tagline: "Pro power in a pocketable size",
    lenses: 3,
    deviceTotal: 1099,
    upfront: 29,
    colors: [
      { name: "Cosmic Orange", hex: "#C96F3A" },
      { name: "Deep Blue", hex: "#27374F" },
      { name: "Silver", hex: "#D8DADF" }
    ],
    storage: [
      { size: "256GB", delta: 0 },
      { size: "512GB", delta: 100 },
      { size: "1TB", delta: 200 }
    ],
    specs: {
      "Display": "6.3\u2033 Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19 Pro",
      "Camera": "48MP Pro Fusion triple system, 8x optical zoom",
      "Battery": "Up to 31 hours video playback",
      "Connectivity": "5G Ultra, Wi\u2011Fi 7, USB\u2011C"
    }
  },
  {
    id: "iphone-air",
    name: "iPhone Air",
    family: "Air",
    tagline: "Impossibly thin. Surprisingly tough.",
    lenses: 2,
    deviceTotal: 999,
    upfront: 19,
    colors: [
      { name: "Sky Blue", hex: "#9FB6CE" },
      { name: "Light Gold", hex: "#D9C6A0" },
      { name: "Space Black", hex: "#2A2A2E" },
      { name: "Cloud White", hex: "#E8E6E1" }
    ],
    storage: [
      { size: "256GB", delta: 0 },
      { size: "512GB", delta: 100 },
      { size: "1TB", delta: 200 }
    ],
    specs: {
      "Display": "6.5\u2033 Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19 Pro",
      "Camera": "48MP Fusion dual system, 2x optical zoom",
      "Battery": "Up to 27 hours video playback",
      "Connectivity": "5G Ultra, Wi\u2011Fi 7, USB\u2011C"
    }
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    family: "Standard",
    tagline: "The everyday iPhone, levelled up",
    lenses: 2,
    deviceTotal: 799,
    upfront: 19,
    colors: [
      { name: "Lavender", hex: "#B6A8D4" },
      { name: "Sage", hex: "#A8BAA4" },
      { name: "Mist Blue", hex: "#A9C2D8" },
      { name: "Black", hex: "#26262A" },
      { name: "White", hex: "#E9E7E2" }
    ],
    storage: [
      { size: "256GB", delta: 0 },
      { size: "512GB", delta: 100 }
    ],
    specs: {
      "Display": "6.3\u2033 Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19",
      "Camera": "48MP Dual Fusion system, 2x optical zoom",
      "Battery": "Up to 30 hours video playback",
      "Connectivity": "5G, Wi\u2011Fi 7, USB\u2011C"
    }
  },
  {
    id: "iphone-16e",
    name: "iPhone 16e",
    family: "Standard",
    tagline: "All the essentials. Easier on the wallet.",
    lenses: 1,
    deviceTotal: 599,
    upfront: 0,
    colors: [
      { name: "Black", hex: "#26262A" },
      { name: "White", hex: "#E9E7E2" }
    ],
    storage: [
      { size: "128GB", delta: 0 },
      { size: "256GB", delta: 100 },
      { size: "512GB", delta: 200 }
    ],
    specs: {
      "Display": "6.1\u2033 Super Retina XDR",
      "Chip": "A18",
      "Camera": "48MP Fusion camera, 2x in-sensor zoom",
      "Battery": "Up to 26 hours video playback",
      "Connectivity": "5G, Wi\u2011Fi 6E, USB\u2011C"
    }
  }
];

window.AT_PLANS = [
  {
    id: "unlimited-max",
    name: "Unlimited Max",
    data: "Unlimited data",
    monthly: 29,
    perks: "Fastest 5G Ultra speeds, EU roaming included"
  },
  {
    id: "unlimited-lite",
    name: "Unlimited Lite",
    data: "Unlimited data",
    monthly: 22,
    perks: "Standard 5G speeds, great for streaming"
  },
  {
    id: "30gb",
    name: "30GB",
    data: "30GB data",
    monthly: 14,
    perks: "Plenty for everyday browsing and social"
  }
];

window.AT_TERM_MONTHS = 36;

window.atDeviceMonthly = function (phone, storageDelta) {
  return (phone.deviceTotal + (storageDelta || 0)) / window.AT_TERM_MONTHS;
};

window.atFromPrice = function (phone) {
  var cheapestPlan = Math.min.apply(null, window.AT_PLANS.map(function (p) { return p.monthly; }));
  return window.atDeviceMonthly(phone, 0) + cheapestPlan;
};

window.atMoney = function (n) {
  return "\u00A3" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, "");
};

window.atShade = function (hex, f) {
  var n = parseInt(hex.slice(1), 16);
  var r = Math.min(255, Math.round(((n >> 16) & 255) * f));
  var g = Math.min(255, Math.round(((n >> 8) & 255) * f));
  var b = Math.min(255, Math.round((n & 255) * f));
  return "rgb(" + r + "," + g + "," + b + ")";
};

var AT_SVG_UID = 0;

function atLens(cx, cy, r, uid) {
  return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + uid + '-ring)" stroke="rgba(255,255,255,0.35)" stroke-width="1"></circle>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 4) + '" fill="url(#' + uid + '-glass)"></circle>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 7) + '" fill="none" stroke="rgba(140,170,215,0.35)" stroke-width="1"></circle>' +
    '<circle cx="' + (cx - r * 0.28) + '" cy="' + (cy - r * 0.32) + '" r="2.6" fill="rgba(255,255,255,0.55)"></circle>';
}

window.atPhoneVisual = function (phone, hex, sizeClass) {
  var uid = "atp" + (++AT_SVG_UID);
  var light = window.atShade(hex, 1.25);
  var dark = window.atShade(hex, 0.74);
  var island = window.atShade(hex, 0.86);
  var islandEdge = window.atShade(hex, 1.35);

  var camera = "";
  if (phone.lenses === 3) {
    camera = '<rect x="16" y="16" width="80" height="86" rx="25" fill="' + island + '" stroke="' + islandEdge + '" stroke-width="1.5"></rect>' +
      atLens(41, 42, 15, uid) + atLens(41, 77, 15, uid) + atLens(73, 59, 15, uid) +
      '<circle cx="76" cy="31" r="4.5" fill="#F6EFCF" opacity="0.9"></circle>' +
      '<circle cx="76" cy="31" r="2" fill="#D9C27A"></circle>';
  } else if (phone.lenses === 2) {
    camera = '<rect x="16" y="16" width="48" height="84" rx="24" fill="' + island + '" stroke="' + islandEdge + '" stroke-width="1.5"></rect>' +
      atLens(40, 41, 14, uid) + atLens(40, 75, 14, uid) +
      '<circle cx="75" cy="30" r="4" fill="#F6EFCF" opacity="0.9"></circle>';
  } else {
    camera = '<circle cx="44" cy="44" r="27" fill="' + island + '" stroke="' + islandEdge + '" stroke-width="1.5"></circle>' +
      atLens(44, 44, 15, uid) +
      '<circle cx="44" cy="84" r="4" fill="#F6EFCF" opacity="0.9"></circle>';
  }

  var svg =
    '<svg viewBox="0 0 170 340" role="img" aria-label="' + phone.name + '">' +
    '<defs>' +
      '<linearGradient id="' + uid + '-body" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + light + '"></stop>' +
        '<stop offset="0.45" stop-color="' + hex + '"></stop>' +
        '<stop offset="1" stop-color="' + dark + '"></stop>' +
      '</linearGradient>' +
      '<linearGradient id="' + uid + '-rail" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="rgba(255,255,255,0.85)"></stop>' +
        '<stop offset="0.4" stop-color="rgba(255,255,255,0.25)"></stop>' +
        '<stop offset="1" stop-color="rgba(40,30,60,0.6)"></stop>' +
      '</linearGradient>' +
      '<linearGradient id="' + uid + '-sheen" x1="0" y1="0" x2="1" y2="0.4">' +
        '<stop offset="0" stop-color="rgba(255,255,255,0.30)"></stop>' +
        '<stop offset="0.35" stop-color="rgba(255,255,255,0.06)"></stop>' +
        '<stop offset="1" stop-color="rgba(255,255,255,0)"></stop>' +
      '</linearGradient>' +
      '<radialGradient id="' + uid + '-ring" cx="0.35" cy="0.3" r="0.9">' +
        '<stop offset="0" stop-color="' + window.atShade(hex, 1.15) + '"></stop>' +
        '<stop offset="1" stop-color="' + window.atShade(hex, 0.55) + '"></stop>' +
      '</radialGradient>' +
      '<radialGradient id="' + uid + '-glass" cx="0.35" cy="0.3" r="1">' +
        '<stop offset="0" stop-color="#48587A"></stop>' +
        '<stop offset="0.55" stop-color="#1A2236"></stop>' +
        '<stop offset="1" stop-color="#080B14"></stop>' +
      '</radialGradient>' +
    '</defs>' +
    '<rect x="4" y="4" width="162" height="332" rx="34" fill="url(#' + uid + '-rail)"></rect>' +
    '<rect x="7" y="7" width="156" height="326" rx="31" fill="url(#' + uid + '-body)"></rect>' +
    camera +
    '<rect x="7" y="7" width="156" height="326" rx="31" fill="url(#' + uid + '-sheen)"></rect>' +
    '</svg>';

  return '<div class="phone ' + (sizeClass || "") + '" data-lenses="' + phone.lenses + '">' + svg + '</div>';
};

/* Basket count (demo only — stored locally) */
window.atGetBasket = function () {
  try { return JSON.parse(localStorage.getItem("ada-telecoms-basket") || "[]"); }
  catch (e) { return []; }
};
window.atSaveBasket = function (items) {
  localStorage.setItem("ada-telecoms-basket", JSON.stringify(items));
  window.atUpdateBasketCount();
};
window.atUpdateBasketCount = function () {
  var el = document.querySelector("[data-basket-count]");
  if (el) { el.textContent = String(window.atGetBasket().length); }
};
document.addEventListener("DOMContentLoaded", window.atUpdateBasketCount);
