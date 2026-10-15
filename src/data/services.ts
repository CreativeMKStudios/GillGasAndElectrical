export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  menu: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  paragraphs: string[];
  includes: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "boiler-installation",
    name: "Boiler installation",
    menu: "New boilers",
    short: "New gas boilers, sized for the house and fitted with the flue and pipework the job needs.",
    title: "New Boiler Installation in Bedford",
    description:
      "New gas boiler installation in Bedford and Bedfordshire. Gill Gas and Electrical Ltd quotes the flue, pipework and controls before any work starts. Call 07462 696665.",
    h1: "New boiler installation",
    lede: "A new boiler has to match the house. We look at the old one, the flue route and the hot water demand before we price the job.",
    paragraphs: [
      "Gill Gas and Electrical Ltd fits new gas boilers for homes and for commercial premises in Bedford and the rest of Bedfordshire. The company says the gas work is done by a Gas Safe registered engineer. Ask to see the ID card before anyone starts on the gas.",
      "Photos of finished jobs show Vaillant and Ideal boilers, unvented cylinders and new pipework. The company’s own site also names Worcester, Baxi, Bosch and Glow-worm. We will talk through the make that suits the house. We do not push one brand on every job.",
      "A one-bed flat and a four-bed house are different jobs. That is why there is no single price on this page. The quote covers the boiler, the flue, the pipe changes, the controls and the removal of the old unit. If the gas pipe or the condensate run needs work, that is in the quote too, not added as a surprise at the end.",
      "One Google review, from Sunny, says the engineer diagnosed the problem, helped choose the boiler and fitted it the same day. That was that job. Ask about the current wait when you call. We do not promise same-day fitting on every call.",
      "After the boiler is on, you should get the paperwork for the install and a walk-through of the controls. If you rent the property out, ask us about a landlord gas safety check as a separate visit.",
    ],
    includes: [
      "A look at the old boiler, flue and hot water setup",
      "A written quote before work is booked",
      "Supply and fit of the new boiler",
      "Flue, condensate and pipe alterations the job needs",
      "Controls, including a room thermostat where the system needs one",
      "Removal of the old boiler",
    ],
    faqs: [
      {
        q: "How much does a new boiler cost?",
        a: "It depends on the boiler, the flue and the pipework. Call 07462 696665 or use the quote form and we will price your house. The company offers a free quote with no obligation.",
      },
      {
        q: "Can you fit a boiler in a cupboard or outside?",
        a: "Yes, where the flue, the ventilation and the access are safe. Job photos show boilers in outside cupboards and in utility rooms. We will say if the spot you have in mind is a poor place for a boiler.",
      },
      {
        q: "Do you take the old boiler away?",
        a: "Yes. Removal of the old boiler is part of a replacement, and it is listed on the quote.",
      },
    ],
  },
  {
    slug: "boiler-servicing-and-repair",
    name: "Boiler servicing and repair",
    menu: "Servicing and repairs",
    short: "Services for working boilers, and repairs when the heating or hot water has stopped.",
    title: "Boiler Service and Repair in Bedford",
    description:
      "Boiler servicing and breakdown repair in Bedford and Bedfordshire. Book a service or a repair with Gill Gas and Electrical Ltd on 07462 696665.",
    h1: "Boiler servicing and repair",
    lede: "A service keeps a working boiler checked. A repair is for when the heating or the hot water has stopped. Both are booked through the same number.",
    paragraphs: [
      "A boiler service is a check and a clean. It is not the same thing as a landlord gas safety record, and it is not a repair. If we find a fault during a service, we tell you what it is and what the extra work would cost before we do it.",
      "Breakdown work covers boilers that will not fire, radiators that stay cold, and hot water that has gone. Mandeep’s Google review describes a new boiler and a house rewire. An older Google review, from when the company was still called TSG Heating Services Limited, says a service was done the next day at a fair price. Another says the heating was back on quickly once a part was fitted.",
      "We do not promise a call-out at 8pm, and we are not a 24-hour emergency line. Opening hours are 8am to 7pm Monday to Friday and 9am to 4pm on Saturday. Sunday is closed. If you smell gas, leave the building and call the National Gas Emergency Service on 0800 111 999. Do not wait for us.",
      "Keep the boiler manual if you still have it. It saves time. If you do not have it, we can often identify the model from the data badge.",
    ],
    includes: [
      "Annual boiler services",
      "Breakdown diagnosis",
      "Repair or a clear quote for the part and the labour",
      "A note of what was found, in plain words",
    ],
    faqs: [
      {
        q: "Is a service the same as a landlord gas certificate?",
        a: "No. A service maintains the boiler. A landlord gas safety check is a record for a rented home. You can book either. If you need both, say so when you call.",
      },
      {
        q: "Do you charge a call-out before you look?",
        a: "Ask when you book. We would rather tell you the visit cost on the phone than hide it. The company offers free quotes for planned work.",
      },
      {
        q: "The boiler is leaking. Should I keep using it?",
        a: "Turn it off if water is coming out, and call us during opening hours. If you smell gas, or you feel dizzy, or a carbon monoxide alarm sounds, get everyone out and call 0800 111 999.",
      },
    ],
  },
  {
    slug: "central-heating",
    name: "Central heating",
    menu: "Central heating",
    short: "Full heating systems, radiators, cylinders, manifolds and smart thermostats.",
    title: "Central Heating Installation in Bedford",
    description:
      "Central heating installation and repairs in Bedford and Bedfordshire. Radiators, cylinders, underfloor manifolds and smart controls. Call 07462 696665.",
    h1: "Central heating",
    lede: "We install and alter central heating. That includes radiators, hot water cylinders, underfloor manifolds and the controls that run them.",
    paragraphs: [
      "A full system is more than a boiler on a wall. The photos show unvented cylinders, zone valves, magnetic filters, expansion vessels and underfloor heating manifolds. Some of that pipework is in cupboards. Some of it is in plant rooms with a whole bank of valves.",
      "Radiators are sized to the room. A straight swap of an old panel is a smaller job than a first-fix system in a new extension. The quote says which one you are booking.",
      "Smart thermostats are on the company’s service list. One job photo shows a Heatmiser thermostat on the wall. We fit the control the system needs. We do not add an app for the sake of it.",
      "If the system is slow to heat up, or one floor never gets warm, the cause might be sludge, a stuck valve, a pump, or a boiler that is too small. We find which one it is before we sell you a new boiler.",
      "Commercial heating is also taken on. The company describes itself as a domestic and commercial plumber and heating engineer. The right first step is still a look at the plant and a quote.",
    ],
    includes: [
      "Full central heating installs",
      "Radiator replacement and extra radiators",
      "Unvented hot water cylinders",
      "Underfloor heating manifolds and zone controls",
      "Smart thermostats",
      "Repairs to existing systems",
    ],
    faqs: [
      {
        q: "Can you add radiators to an old system?",
        a: "Often, yes. The boiler and the pump have to be able to cope with the extra load. We check that before we add them.",
      },
      {
        q: "Do you do underfloor heating?",
        a: "The job photos show underfloor manifolds connected to cylinders and boilers. If you want a new underfloor circuit, send the floor area and we will say whether we can do it.",
      },
    ],
  },
  {
    slug: "gas-safety-checks",
    name: "Gas safety checks",
    menu: "Gas safety checks",
    short: "Landlord gas safety records, often called a CP12, for rented homes.",
    title: "Landlord Gas Safety Checks in Bedford",
    description:
      "Landlord gas safety checks (CP12) in Bedford and Bedfordshire by Gill Gas and Electrical Ltd. Book on 07462 696665. Ask to see the Gas Safe ID card.",
    h1: "Gas safety checks",
    lede: "If you let a home with gas, you need a landlord gas safety record. People still call it a CP12. We carry out that check.",
    paragraphs: [
      "The check covers the gas appliances, the flue and the supply of gas to them. You get a record. It is not a boiler service, and it is not a repair. If an appliance fails, we say what failed. Any repair is a separate quote.",
      "Landlords in rented homes need a current record. Tenants can ask to see it. If you manage more than one property, say how many when you book so the visit is planned properly.",
      "The company says its gas engineer is Gas Safe registered. The ID card shows the engineer’s name and the types of gas work they are allowed to do. Check the card, and you can also search the engineer on the Gas Safe Register website. We have not printed a registration number on this site because it was not on the public pages we checked. The card on the day is the check that matters.",
      "A gas safety check does not replace a carbon monoxide alarm. Fit an alarm. Test it. If it sounds, get out and call 0800 111 999.",
    ],
    includes: [
      "Landlord gas safety checks",
      "A written record of what was tested",
      "A clear note if something fails",
      "Advice on whether a service or a repair is also due",
    ],
    faqs: [
      {
        q: "How often do I need a landlord gas check?",
        a: "Every 12 months for each rented property that has gas appliances. Book the next one before the current record runs out.",
      },
      {
        q: "Can a tenant book the check?",
        a: "The duty sits with the landlord. If you are the tenant and you are worried, tell the landlord, or call us and we will explain what a check covers. If you smell gas, call 0800 111 999.",
      },
    ],
  },
  {
    slug: "gas-appliances",
    name: "Gas cookers and appliances",
    menu: "Gas cookers",
    short: "Gas cooker and hob installation, with the pipe, ventilation and shut-off done properly.",
    title: "Gas Cooker Installation in Bedford",
    description:
      "Gas cooker and hob installation in Bedford and Bedfordshire. Gill Gas and Electrical Ltd connects the gas supply, ventilation and shut-off. Call 07462 696665.",
    h1: "Gas cookers and appliances",
    lede: "A gas cooker or hob has to be connected by someone who is allowed to do that work. Do not do it yourself with a flexible hose from a shop.",
    paragraphs: [
      "We install gas cookers and hobs. The job includes the gas connection, the stability of a freestanding cooker, and a check that the room has the ventilation the appliance needs.",
      "If the old pipe is too small, or there is no shut-off where there should be one, that work is quoted before we start. We do not leave a cooker on a temporary fitting.",
      "This sits alongside the other gas work: boilers, heating and landlord checks. If you are refitting a kitchen and you also need the boiler moved, tell us at the start so both jobs are planned together.",
    ],
    includes: [
      "Gas cooker installation",
      "Gas hob installation",
      "Gas pipe and isolation valve work the appliance needs",
      "A check of ventilation for the appliance",
    ],
    faqs: [
      {
        q: "Can I buy the cooker and ask you to connect it?",
        a: "Yes. Tell us the model before the day so we can confirm the connection and the space around it.",
      },
      {
        q: "Do you disconnect the old cooker?",
        a: "Yes. The old gas connection has to be made safe. That is part of the job, not an extra you find out about later.",
      },
    ],
  },
  {
    slug: "air-source-heat-pumps",
    name: "Air source heat pumps",
    menu: "Heat pumps",
    short: "Air source heat pumps, where the house and the heating system are a sensible match.",
    title: "Air Source Heat Pumps in Bedford",
    description:
      "Air source heat pump installation in Bedford and Bedfordshire. Gill Gas and Electrical Ltd is listed with the Renewable Energy Consumer Code. Call 07462 696665.",
    h1: "Air source heat pumps",
    lede: "We install air source heat pumps. A heat pump is not a straight swap for every old boiler. We will say if your house is a poor fit.",
    paragraphs: [
      "Imran Khalid’s Google review names heat pump installation alongside full house wiring and gas pipework. The company’s service list includes air source heat pumps. Gill Gas and Electrical Ltd, MK42 0HU, is also on the public member list of the Renewable Energy Consumer Code.",
      "A heat pump runs at a lower temperature than an old gas boiler. Radiators, pipe sizes and insulation decide whether the house stays warm. If those are not up to it, the honest answer may be to keep a boiler, or to change the emitters first.",
      "The Google profile includes a photo of Vaillant aroTHERM plus units. That photo is a product display on a showroom floor. It is not a picture of a pump we have fitted on a house. We name it that way so nobody mistakes a brochure shot for a finished job.",
      "Ask about noise, the outdoor unit position, and what happens on a very cold morning. Those are fair questions. They belong in the quote, not after the unit is on the wall.",
    ],
    includes: [
      "A look at the house, the radiators and the insulation",
      "A straight answer if a heat pump is a poor match",
      "Supply and installation where it is a sound job",
      "Controls and the hot water arrangement the system needs",
    ],
    faqs: [
      {
        q: "Will a heat pump work in an old Bedford terrace?",
        a: "Sometimes. Solid walls, small radiators and long pipe runs can make it a bad swap. We would rather tell you that at the survey than sell you the unit anyway.",
      },
      {
        q: "Are you on a heat pump consumer code?",
        a: "Gill Gas and Electrical Ltd, postcode MK42 0HU, is listed as a member of the Renewable Energy Consumer Code. You can look the name up on the RECC member list.",
      },
    ],
  },
  {
    slug: "plumbing-and-bathrooms",
    name: "Plumbing and bathrooms",
    menu: "Bathrooms",
    short: "Bathroom fitting, showers, basins, toilets and the pipework behind them.",
    title: "Bathroom Fitting and Plumbing in Bedford",
    description:
      "Bathroom fitting and plumbing in Bedford and Bedfordshire. Showers, basins, toilets and heated towel rails. Gill Gas and Electrical Ltd, 07462 696665.",
    h1: "Plumbing and bathrooms",
    lede: "We fit bathrooms and do the plumbing that goes with them. The job photos show showers, basins, toilets and heated towel rails, including a loft bathroom.",
    paragraphs: [
      "Bathroom fitting is on the company’s service list, next to the heating and gas work. That matters, because a new shower often needs the hot water, the waste and the electrics planned together. A shaver socket, a towel rail and a shower pump are not three different trades if one person is running the job.",
      "The gallery includes a loft bathroom with a roof window, a marble-effect shower and a wall-hung toilet, plus a separate bathroom with a pedestal basin and a bath. Those are real jobs from the company’s photos. We have not invented room sizes or client names for them.",
      "Small plumbing jobs are taken on as well. The company says no job is too big or too small. A leaking valve and a full bathroom are both worth a call. The quote tells you which one it is.",
      "We do not publish a day rate. Bathroom prices move with the suite, the tiles and how much pipework is hidden. Send a few photos with the quote form if you want a useful first answer.",
    ],
    includes: [
      "Bathroom fitting",
      "Showers, trays and screens",
      "Basins, toilets and baths",
      "Heated towel rails",
      "Wastes, feeds and isolation valves",
      "Smaller plumbing repairs",
    ],
    faqs: [
      {
        q: "Do you tile as well?",
        a: "The finished photos include tiled bathrooms. Ask what is included when you book. If a tiler is needed as well, we say so in the quote rather than assuming.",
      },
      {
        q: "Can you fit a bathroom in a loft?",
        a: "The gallery shows a loft bathroom with a shower, basin and toilet. Soil-pipe runs and the head height decide whether a loft is practical. We need to see the space.",
      },
    ],
  },
  {
    slug: "electrical-work",
    name: "Electrical work",
    menu: "Electrical",
    short: "Rewires, consumer units, sockets, lighting, safety checks and EV chargers.",
    title: "Electrician in Bedford",
    description:
      "Electrician in Bedford and Bedfordshire for rewires, consumer units, sockets, lighting, EICRs and EV chargers. Gill Gas and Electrical Ltd. Call 07462 696665.",
    h1: "Electrical work",
    lede: "Rewires, fuse boards, extra sockets, lighting and EV chargers. The company says this work is done by a NAPIT-approved electrician.",
    paragraphs: [
      "The electrical list on the company’s site covers light switches, outdoor sockets, consumer units, electrical safety checks, light fittings, EV chargers, electric showers, sockets, house rewires and dimmer switches. Imran Khalid’s review talks about full house wiring, fuse boxes and circuit breakers. Mandeep’s review mentions a house rewire alongside a new boiler.",
      "Google profile photos show a consumer unit with RCBOs and surge protection, a cupboard with a new board and meter tails, and a rotary isolator. Those are the kind of boards we fit when an old rewireable fuse box is past its useful life.",
      "An electrical installation condition report, an EICR, is the check landlords and buyers ask for. In England, private landlords need a satisfactory report at the start of a tenancy and then at least every five years. A failed circuit is reported. The repair is quoted on its own.",
      "An EV charger is not just a socket on the drive. The consumer unit and the supply have to take the extra load. If they do not, the board upgrade is part of the quote. We have not claimed a government grant scheme on this site, because we have not verified one.",
      "Ask to see the NAPIT details before work starts. You can search the NAPIT register online. As with gas, the card and the register matter more than a logo on a website.",
    ],
    includes: [
      "Full and partial house rewires",
      "Consumer unit and fuse board replacement",
      "Sockets, switches, dimmers and light fittings",
      "Outdoor sockets",
      "Electric showers",
      "Electrical installation condition reports",
      "EV charger installation",
    ],
    faqs: [
      {
        q: "Do I need a rewire or a new fuse board?",
        a: "They are different jobs. Old rubber cables usually mean a rewire. A 1980s board on sound cable may only need a new consumer unit. We look before we tell you which one it is.",
      },
      {
        q: "Can you install an EV charger on a driveway?",
        a: "Yes, where the supply and the consumer unit can take it. If the board needs upgrading, that is priced with the charger, not after the hole is drilled.",
      },
      {
        q: "Are you Part P registered?",
        a: "The company says its electrical work is carried out by a NAPIT-approved electrician. NAPIT is a government-approved scheme for electrical work in homes. Ask for the registration details for your job.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
