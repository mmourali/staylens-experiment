// =============================================================
// STAYLENS EXPERIMENT: Shared Data & Helper Functions
// 5-Dimension Design: Room Comfort (anchor), Staff Helpfulness,
//   Breakfast Quality, Design & Atmosphere, Evening Dining & Bar
// Host on a static web server and load via Look & Feel > Header.
// =============================================================

// --- Dimension display labels ---
var DIM_LABELS = {
  room_comfort: "Room Comfort",
  staff:        "Staff Helpfulness",
  breakfast:    "Breakfast Quality",
  design:       "Design & Atmosphere",
  dining:       "Evening Dining & Bar"
};

var DIM_ORDER = ["room_comfort", "staff", "breakfast", "design", "dining"];

// --- Anchor dimension ---
// Room comfort is always displayed as a star rating in the partial
// condition, regardless of CB cell. It does not participate in the
// MV/MI contrast and is held constant in the final choice task.
var ANCHOR_DIM = "room_comfort";

// --- Counterbalancing map (2 cells) ---
// CB1: MV = staff + breakfast;   MI = design + dining
// CB2: MV = design + dining;    MI = staff + breakfast
// (Room comfort is NOT listed here; it is handled separately as ANCHOR_DIM.)
var CB_MAP = {
  1: { mv: ["staff", "breakfast"], mi: ["design", "dining"] },
  2: { mv: ["design", "dining"],   mi: ["staff", "breakfast"] }
};

// --- Travel scenarios (one per round, fixed order) ---
var SCENARIOS = [
  "You are planning a <strong>weekend getaway focused on rest and relaxation</strong>. Which hotel would you book?",
  "You have a <strong>two-night business trip with one free evening</strong> to enjoy. Which hotel would you book?",
  "You are celebrating a <strong>special anniversary with a partner</strong>. Which hotel would you book?",
  "You are <strong>visiting a new city for the first time</strong> and want to explore. Which hotel would you book?"
];

// --- Choice set assignments (4 rounds, 3 hotels each) ---
var CHOICE_SETS = {
  1: ["H01", "H02", "H03"],
  2: ["H04", "H05", "H06"],
  3: ["H07", "H08", "H09"],
  4: ["H10", "H11", "H12"]
};

// --- 12 Hotel profiles (4 rounds x 3 hotels, 5 dimensions each) ---
var HOTELS = {

  // ---- Round 1: Weekend getaway for relaxation (room comfort = 3.5) ----
  "H01": {
    name: "The Verdant",
    room_comfort: 3.5, staff: 2.5, breakfast: 3.0, design: 4.0, dining: 3.5,
    desc: {
      room_comfort: "Rooms are a good size, with quality bedding and effective blackout curtains. Temperature controls work well, and the space feels restful. A comfortable place to unwind, though not lavish.",
      staff: "Staff are polite and professional but tend not to go out of their way. Requests are fulfilled, though sometimes with a delay. Front desk interactions are efficient rather than warm.",
      breakfast: "A standard continental spread with coffee, pastries, and fruit. Nothing stands out as exceptional, but nothing is lacking either. Dietary accommodations are available on request.",
      design: "The hotel embraces a botanical theme, with living plant walls in the lobby and natural wood finishes throughout. Common areas feel tranquil and considered. The overall aesthetic is cohesive and inviting.",
      dining: "The lobby bar serves a short but well-crafted cocktail menu alongside light bites. The atmosphere is relaxed and pleasant. There is no full restaurant, but the bar is a comfortable spot for an evening drink."
    }
  },
  "H02": {
    name: "Crestview Lodge",
    room_comfort: 3.5, staff: 4.5, breakfast: 4.0, design: 2.5, dining: 2.5,
    desc: {
      room_comfort: "Rooms are clean and well maintained, with firm but supportive beds and decent linens. The layout is practical, and natural light is good. Not the most spacious, but perfectly adequate for a comfortable stay.",
      staff: "Staff are exceptionally warm and go out of their way to assist. The concierge provides tailored restaurant and activity recommendations. Several guests note that staff remembered their names by the second day.",
      breakfast: "A hearty breakfast with freshly baked bread, local cheeses, eggs made to order, and good coffee. The selection rotates daily, keeping repeat stays interesting. Vegetarian and gluten-free options are always available.",
      design: "The decor is dated, with generic furnishings and a lobby that feels more like a waiting room than a lounge. The building is well maintained but lacks character or visual identity.",
      dining: "A small lounge area offers a limited selection of wine and beer. No cocktail menu or food service in the evening. Guests looking for nightlife will need to venture out."
    }
  },
  "H03": {
    name: "Birchwood Inn",
    room_comfort: 3.5, staff: 3.5, breakfast: 4.5, design: 4.5, dining: 3.0,
    desc: {
      room_comfort: "Rooms are compact but thoughtfully arranged, with comfortable beds and modern bathrooms. Soundproofing is reasonable, and the bedding is good quality. A solid room that does what it needs to do.",
      staff: "Staff are friendly and approachable, though response times can be slow during busy periods. Check-in is smooth, and the front desk is helpful with basic queries about the area.",
      breakfast: "Breakfast is a highlight, with locally sourced ingredients, house-made granola, fresh-squeezed juices, and a rotating hot menu. Guests frequently mention it as a reason to return. Dietary needs are handled thoughtfully.",
      design: "A beautifully restored building with exposed brick, reclaimed wood, and curated local artwork. The lobby doubles as a quiet reading lounge with a fireplace. Every space feels intentionally designed with warmth and character.",
      dining: "A cozy wine bar in the lobby offers a curated selection of local wines and cheese boards. The setting is intimate but the menu is limited. No full dinner service."
    }
  },

  // ---- Round 2: Business trip with one free evening (room comfort = 3.0) ----
  "H04": {
    name: "The Metropolitan",
    room_comfort: 3.0, staff: 3.0, breakfast: 2.5, design: 4.5, dining: 4.0,
    desc: {
      room_comfort: "Rooms are functional, with a proper writing desk and reliable climate control. The bed is adequate, and blackout shades help with sleep. Not luxurious, but it gets the job done for a business stay.",
      staff: "Staff are competent and process requests efficiently, but interactions feel transactional. The concierge can arrange transport and reservations but does not volunteer suggestions unprompted.",
      breakfast: "A basic continental offering that feels like an afterthought. Coffee is mediocre, and the pastries are pre-packaged. Most business travelers end up eating elsewhere.",
      design: "Striking modern architecture with clean lines, a double-height lobby, and a curated art collection. The rooftop bar offers panoramic views. The overall impression is polished and sophisticated.",
      dining: "The rooftop bar is a highlight, with inventive cocktails and a small plates menu that draws guests and locals alike. The vibe is stylish and lively. A good spot to unwind after a day of meetings."
    }
  },
  "H05": {
    name: "Harborview",
    room_comfort: 3.0, staff: 4.0, breakfast: 4.5, design: 3.0, dining: 2.5,
    desc: {
      room_comfort: "Rooms are modest but clean, with a reliable shower and acceptable bedding. Some street noise is noticeable, but earplugs are provided. The room serves its purpose as a base between meetings.",
      staff: "Staff are genuinely accommodating, handling late check-outs and special requests with ease. They proactively offer tips for the evening and adjust arrangements when plans change. The atmosphere at the front desk is welcoming.",
      breakfast: "An impressive buffet with fresh fruit, made-to-order omelettes, smoked fish, artisan breads, and fresh juices. Quality is consistently high, and the dining room is a pleasant space to start the day.",
      design: "The interior is clean but unremarkable, with neutral tones and corporate furnishings. Nothing is unpleasant, but nothing invites you to linger in the common areas. The lobby feels like a corridor more than a gathering space.",
      dining: "A ground-floor cafe serves basic pasta dishes and sandwiches until 9 p.m. The atmosphere is functional rather than inviting. No proper bar or evening social space."
    }
  },
  "H06": {
    name: "Parkside Suites",
    room_comfort: 3.0, staff: 2.5, breakfast: 3.5, design: 2.5, dining: 3.5,
    desc: {
      room_comfort: "Rooms are an adequate size with a separate sitting area and a minibar. The bed is comfortable enough, though the pillows are unremarkable. Climate control works but responds slowly.",
      staff: "Check-in was slow on arrival, and it can be difficult to reach anyone by phone during off-peak hours. Staff are courteous when you do connect, but the operation feels understaffed.",
      breakfast: "A solid breakfast with a reasonable range of hot and cold options. Nothing is memorable, but everything is fresh and well prepared. Coffee is above average.",
      design: "The hotel is due for a refresh. Carpets are worn in the hallways, and the lobby furniture looks like it was chosen for durability rather than style. Functional but uninspiring.",
      dining: "A pleasant courtyard restaurant serves a short seasonal menu with well-executed dishes. The wine list is modest but thoughtful. A good option if you don't want to leave the hotel."
    }
  },

  // ---- Round 3: Anniversary celebration (room comfort = 4.0) ----
  "H07": {
    name: "The Rosewood",
    room_comfort: 4.0, staff: 4.5, breakfast: 4.0, design: 4.5, dining: 4.5,
    desc: {
      room_comfort: "Rooms are comfortable and well appointed, with quality linens, good climate control, and a charming layout. The bed is inviting, and the bathroom has nice period fixtures. A pleasant space to retire to at the end of the evening.",
      staff: "Service is deeply personal. Staff arranged a surprise welcome amenity without being asked and offered a curated list of romantic dining options in the neighborhood. Guests describe the experience as feeling like a private guesthouse.",
      breakfast: "An elegant breakfast served at individual tables rather than a buffet. The menu is small but curated, with fresh pastries, seasonal fruit, and well-prepared eggs. Presentation is beautiful.",
      design: "A converted heritage building with original moldings, velvet furnishings, and soft ambient lighting. The courtyard garden is enchanting. Every detail contributes to a romantic, intimate atmosphere.",
      dining: "An intimate candlelit restaurant serves a tasting menu that changes weekly, paired with wines selected by the sommelier. The courtyard bar is perfect for a nightcap. Guests describe it as one of the most romantic dining experiences they have had."
    }
  },
  "H08": {
    name: "Grand Elara",
    room_comfort: 4.0, staff: 2.5, breakfast: 2.5, design: 3.0, dining: 2.5,
    desc: {
      room_comfort: "Spacious rooms with king-size beds and quality linens. Soundproofing is good, and the in-room climate system is quiet. The bathroom is modern and well equipped. A comfortable room, though it lacks the warmth of a boutique property.",
      staff: "Service is correct but formal, with little warmth. Requests are handled, but staff do not anticipate needs or offer personalized touches. The experience feels like a well-run machine rather than a hospitable home.",
      breakfast: "Breakfast is an afterthought: a small buffet with pre-packaged items and lukewarm coffee. For a hotel at this price point, guests expect more. The dining room itself is sterile and uninviting.",
      design: "The lobby is grand in scale but impersonal, with marble floors and oversized chandeliers that feel more like a convention hotel than a boutique retreat. Hallways are wide and quiet, but lack personality.",
      dining: "A large, half-empty restaurant serves a generic international menu. The food is competent but uninspired, and the atmosphere is cavernous. The lobby bar offers standard cocktails without flair."
    }
  },
  "H09": {
    name: "Lumi\u00e8re",
    room_comfort: 4.0, staff: 3.0, breakfast: 4.5, design: 2.5, dining: 3.5,
    desc: {
      room_comfort: "Rooms are well sized with comfortable beds and a modern bathroom. The bedding is high quality, and the space is bright and airy. The open-plan layout is stylish, and the mattress is supportive. A restful room overall.",
      staff: "Staff are knowledgeable about the neighborhood and can recommend hidden spots. However, the front desk is often busy, and it can take time to get attention during peak hours.",
      breakfast: "Breakfast is exceptional: artisanal pastries baked on-site, single-origin pour-over coffee, house-cured salmon, and a charcuterie selection that rivals a standalone restaurant. This alone draws guests back.",
      design: "The lobby bar is lively and photogenic, but the energy spills into common areas in a way that undermines any sense of calm. The aesthetic is trendy and youthful, which may not suit every taste.",
      dining: "A buzzy cocktail bar with creative drinks and DJ sets on weekends. The crowd is young and energetic. Food is limited to sharing plates, but the drinks are excellent. Not a quiet evening option."
    }
  },

  // ---- Round 4: Visiting a new city (room comfort = 3.5) ----
  "H10": {
    name: "The Wanderer",
    room_comfort: 3.5, staff: 4.5, breakfast: 2.5, design: 4.0, dining: 2.5,
    desc: {
      room_comfort: "Rooms are cozy and well thought out, with quality linens, good lighting, and a compact but efficient layout. Storage is smart, and the bathroom is modern. Not spacious, but comfortable for a city base.",
      staff: "Staff are exceptional guides to the city, offering hand-drawn neighborhood maps and personal recommendations that go far beyond the usual tourist suggestions. They help arrange walking tours and book hard-to-get reservations.",
      breakfast: "Breakfast is minimal: coffee, toast, and a small selection of fruit and yogurt. The quality is fine, but guests looking for a proper morning meal will want to explore nearby cafes instead.",
      design: "The hotel is decorated with local art and photography, giving it a strong sense of place. A communal lounge encourages conversation among guests. The overall feel is eclectic, warm, and connected to the neighborhood.",
      dining: "No formal restaurant or bar. A communal kitchen is available, and the front desk keeps a list of neighborhood restaurants. The hotel's philosophy is that you should be out exploring, not eating in."
    }
  },
  "H11": {
    name: "Cornerstone Hotel",
    room_comfort: 3.5, staff: 2.5, breakfast: 4.5, design: 2.5, dining: 4.0,
    desc: {
      room_comfort: "Rooms are quiet and well proportioned, with supportive mattresses and good bedding. Blackout curtains and decent insulation make for restful sleep. The bathroom is clean and functional. A reliable room for recharging between outings.",
      staff: "Staff are efficient but detached, handling check-in and checkout smoothly without much warmth. Questions about the area are answered with a printed map. There is no concierge service.",
      breakfast: "An outstanding breakfast featuring local specialties: regional pastries, cured meats, farmhouse cheeses, and freshly baked sourdough. The kitchen clearly values provenance and freshness. Guests call it the best hotel breakfast they have had.",
      design: "A perfectly functional but characterless interior. Beige walls, standard furniture, and fluorescent-lit hallways. The lobby is small and serves as a passageway rather than a destination.",
      dining: "A surprisingly accomplished restaurant serves modern takes on regional cuisine, with a well-chosen wine list. The bar is small but has character, with knowledgeable staff who enjoy talking about local spirits."
    }
  },
  "H12": {
    name: "District House",
    room_comfort: 3.5, staff: 3.5, breakfast: 3.0, design: 3.5, dining: 4.5,
    desc: {
      room_comfort: "Rooms are compact but well kept, with comfortable beds and a clean bathroom. The central location means some ambient noise, but double glazing helps. The space is practical and perfectly serviceable as a home base for exploring the city.",
      staff: "Staff are helpful and clearly know the area well, though they are not always at the desk when needed. When available, they offer good dining and nightlife suggestions tailored to different tastes.",
      breakfast: "A decent spread with fresh bread, cold cuts, cereal, and coffee. Not a destination breakfast, but it covers the basics competently and without fuss.",
      design: "The hotel occupies a converted warehouse with original industrial features, exposed brick, and a lively ground-floor cafe. The vibe is energetic and urban, appealing to younger travelers.",
      dining: "The ground-floor bar is one of the best in the neighborhood, with craft cocktails, a rotating guest bartender program, and live music on Thursday evenings. The attached tapas kitchen serves excellent small plates until midnight."
    }
  }
};

// --- Final Choice Task Profiles ---
// Hotel Alder: HIGH staff + breakfast, LOW design + dining, EQUAL room comfort
// Hotel Bramley: LOW staff + breakfast, HIGH design + dining, EQUAL room comfort
// CB1 (MV = staff, breakfast) -> MV-favored = Alder
// CB2 (MV = design, dining)  -> MV-favored = Bramley
var FINAL_PROFILES = {
  alder: {
    name: "Hotel Alder",
    key: "alder",
    desc: {
      room_comfort: "Rooms are well proportioned and quiet, with quality bedding, effective climate control, and good natural light. Guests consistently note that the room is a comfortable and restful base.",
      staff: "Staff are warm, proactive, and attentive to detail. They follow up on requests and anticipate needs before guests have to ask. Multiple reviews describe them as the heart of the hotel.",
      breakfast: "Breakfast is outstanding: a curated menu of house-baked goods, seasonal fruit, locally sourced eggs, and specialty coffee. Guests describe it as a reason to stay. Dietary needs are handled with care and creativity.",
      design: "The interior is bland and dated, with mismatched furniture and a lobby that feels like a waiting area. There is nothing offensive, but nothing memorable either.",
      dining: "A vending machine and a small coffee station near the lobby are the only evening options. No restaurant, bar, or lounge. Guests looking for dinner or a drink will need to eat out."
    }
  },
  bramley: {
    name: "Hotel Bramley",
    key: "bramley",
    desc: {
      room_comfort: "Rooms are well proportioned and quiet, with quality bedding, effective climate control, and good natural light. Guests consistently note that the room is a comfortable and restful base.",
      staff: "Staff are present but passive, responding to direct requests without initiative. Check-in is slow, and guests report difficulty getting attention during busy periods.",
      breakfast: "Breakfast is limited to packaged pastries, instant coffee, and a small fruit bowl. Most guests skip it in favor of nearby cafes. It is clearly not a priority for the hotel.",
      design: "The hotel is beautifully designed, with a cohesive aesthetic that blends contemporary art, warm textures, and soft lighting. The lobby lounge is a destination in itself, and every corridor and corner feels intentional.",
      dining: "An acclaimed restaurant serves a seasonal tasting menu with creative cocktail pairings. The bar is one of the most atmospheric rooms in the city, with dim lighting, leather seating, and a bartender who is locally famous. Guests describe the evening experience as a highlight of their stay."
    }
  }
};

// --- Reason labels for post-choice dropdown ---
var REASON_LABELS = [
  { key: "room_comfort", label: "Its room comfort" },
  { key: "staff",        label: "Its staff helpfulness" },
  { key: "breakfast",    label: "Its breakfast quality" },
  { key: "design",       label: "Its design and atmosphere" },
  { key: "dining",       label: "Its evening dining and bar" }
];

// =============================================================
// HELPER FUNCTIONS
// =============================================================

// Generate a noisy platform rating from a true value
function platformRating(trueValue) {
  var u1 = Math.random();
  var u2 = Math.random();
  var z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  var noise = z * 0.3;
  var raw = trueValue + noise;
  raw = Math.max(1.0, Math.min(5.0, raw));
  return Math.round(raw * 2) / 2;
}

// Render a star rating as HTML
function renderStars(value, label) {
  var fullStars = Math.floor(value);
  var halfStar = (value % 1 >= 0.5) ? 1 : 0;
  var emptyStars = 5 - fullStars - halfStar;
  var html = '<div class="star-rating-row">';
  if (label) html += '<span class="dim-label">' + label + ':</span> ';
  html += '<span class="stars">';
  for (var i = 0; i < fullStars; i++) html += '<span class="star-full">&#9733;</span>';
  if (halfStar) {
    html += '<span class="star-half-wrap">';
    html += '<span class="star-half-empty">&#9734;</span>';
    html += '<span class="star-half-filled">&#9733;</span>';
    html += '</span>';
  }
  for (var i = 0; i < emptyStars; i++) html += '<span class="star-empty">&#9734;</span>';
  html += '</span>';
  html += ' <span class="rating-num">(' + value.toFixed(1) + ')</span>';
  html += '</div>';
  return html;
}

// Render a progress bar
function renderProgress(current, total, label) {
  var pct = Math.round((current / total) * 100);
  return '<div class="progress-wrap">' +
    '<div class="progress-label">' + label + ' ' + current + ' of ' + total + '</div>' +
    '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
    '</div>';
}

// Shuffle an array in place (Fisher-Yates)
function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
