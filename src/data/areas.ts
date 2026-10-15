export type Area = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  paragraphs: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: "bedford",
    name: "Bedford",
    title: "Gas Engineer and Electrician in Bedford",
    description:
      "Boilers, heating, bathrooms and electrical work in Bedford. Gill Gas and Electrical Ltd is based in Shortstown, MK42. Call 07462 696665.",
    h1: "Gas and electrical work in Bedford",
    lede: "Bedford is the home patch. The registered office is in Shortstown, on the south side of the town, and the day-to-day work is in Bedford homes.",
    paragraphs: [
      "Bedford’s housing is a mix. Victorian terraces near the centre, 1930s semis, post-war estates, and newer flats. Older houses are where we see tired boilers, small gas pipes and fuse boxes that still use rewireable wire. Newer flats are more often a landlord gas check, a shower, or an extra socket.",
      "The town sits on the River Great Ouse. Postcodes MK40, MK41 and MK42 cover most of the urban area, with MK43 and MK44 on the edges. Shortstown, where the company is registered, is MK42 0HU. Kempston, Queens Park, Brickhill, Putnoe and Goldington are all a short drive.",
      "Google reviews name boiler swaps, a house rewire, heat pump work and gas pipework. They do not name a street in the town centre, so we will not invent one. If you are in Bedford, call and say the postcode.",
      "Parking and access matter for a boiler or a cylinder. If the only space is a paid bay, say so when you book. We would rather plan the van than block a neighbour.",
    ],
    nearby: ["Kempston", "Shortstown", "Queens Park", "Brickhill", "Putnoe", "Goldington"],
  },
  {
    slug: "kempston",
    name: "Kempston",
    title: "Gas Engineer and Electrician in Kempston",
    description:
      "Boiler, heating and electrical work in Kempston, MK42. Gill Gas and Electrical Ltd is based a short drive away in Shortstown. Call 07462 696665.",
    h1: "Gas and electrical work in Kempston",
    lede: "Kempston sits on the west side of Bedford and shares the MK42 postcode with Shortstown. It is one of the closer towns to the yard.",
    paragraphs: [
      "Kempston has older streets around the high street and larger estates towards Great Denham and the western bypass. The older houses often need a boiler change or a consumer unit. The newer estates more often need a boiler service, a landlord check, or a charger on the drive.",
      "We have not published a count of Kempston jobs, because we do not have a public figure for that. The company covers Bedfordshire from Aviation Way. Kempston is inside that area.",
      "If the job is a rented house, say whether you need a gas safety record, an electrical report, or both. They are separate visits and separate pieces of paper.",
    ],
    nearby: ["Great Denham", "Biddenham", "Bedford", "Wootton"],
  },
  {
    slug: "shortstown",
    name: "Shortstown",
    title: "Gas Engineer and Electrician in Shortstown",
    description:
      "Local gas and electrical work in Shortstown, Bedford. The company is registered at 4 Aviation Way, MK42 0HU. Call 07462 696665.",
    h1: "Gas and electrical work in Shortstown",
    lede: "This is where the company is registered. 4 Aviation Way, Shortstown, Bedford, MK42 0HU.",
    paragraphs: [
      "Shortstown grew beside the old RAF Cardington site, the airship sheds south-east of Bedford. The streets mix older houses with newer ones built as the area filled in. Cotton End, Harrowden and Cardington are the next villages along the road.",
      "Being local does not change the way a job is quoted. You still get a price before work is booked, and you should still ask to see the Gas Safe card and the electrical registration before gas or wiring starts.",
      "The office is not a trade counter. Do not turn up expecting to collect parts. Call or email first. Opening hours are 8am to 7pm on weekdays and 9am to 4pm on Saturday.",
    ],
    nearby: ["Cardington", "Cotton End", "Harrowden", "Elstow", "Bedford"],
  },
  {
    slug: "wixams",
    name: "Wixams",
    title: "Gas Engineer and Electrician in Wixams",
    description:
      "Boiler servicing, landlord gas checks and electrical work for Wixams homes. Gill Gas and Electrical Ltd, based in Shortstown. Call 07462 696665.",
    h1: "Gas and electrical work in Wixams",
    lede: "Wixams is the newer town south of Bedford, between the town and Ampthill. Most of the houses are recent builds.",
    paragraphs: [
      "New homes still need a boiler service, a landlord gas check when they are let, and the odd extra socket or EV charger. A new-build warranty does not cover every fault after the first years, and it does not replace a gas safety record.",
      "Some Wixams houses use a system boiler and a cylinder. Others are combi boilers. Tell us which you have, or send a photo of the front of the boiler. The data badge is enough for us to see the model.",
      "The company has not claimed to have built the Wixams estates. The work we take there is the same list as everywhere else: boilers, heating, bathrooms, gas checks and electrics.",
    ],
    nearby: ["Wilstead", "Elstow", "Shortstown", "Stewartby"],
  },
  {
    slug: "wootton",
    name: "Wootton",
    title: "Gas Engineer and Electrician in Wootton",
    description:
      "Heating, gas and electrical work in Wootton, MK43. Gill Gas and Electrical Ltd covers Bedfordshire from Shortstown. Call 07462 696665.",
    h1: "Gas and electrical work in Wootton",
    lede: "Wootton is a village south-west of Bedford, in MK43, with older houses and newer estates on the edges.",
    paragraphs: [
      "Village houses often have boilers tucked into cupboards, and pipework that has been added to over the years. That is a normal Bedfordshire job. We look at the flue route and the ventilation before we agree a swap.",
      "A Google review mentions routine checks at Wootton Vale. The owner replied on Google to say that review was left for the wrong company. We are not using it as proof of work in Wootton. The reason Wootton is on this site is simpler: it is in the Bedfordshire area the company says it covers.",
      "If you are a landlord with a few houses in the village, book them together if you can. It keeps the visits tidy.",
    ],
    nearby: ["Stewartby", "Kempston", "Cranfield", "Marston Moretaine"],
  },
  {
    slug: "ampthill",
    name: "Ampthill",
    title: "Gas Engineer and Electrician in Ampthill",
    description:
      "Boilers, heating and electrical work in Ampthill, MK45. Gill Gas and Electrical Ltd comes from Shortstown, near Bedford. Call 07462 696665.",
    h1: "Gas and electrical work in Ampthill",
    lede: "Ampthill is a market town about eight miles south of Bedford. The centre is Georgian. The edges are later estates.",
    paragraphs: [
      "Older Ampthill houses are the ones that tend to need a rewire or a boiler move when a kitchen is refitted. Flues on street-facing walls need a proper route. We will say if a proposed flue would be too close to a window or a neighbour’s opening.",
      "The drive from Shortstown is straightforward down the A6. We still book a time rather than claiming to be ten minutes away all day. Saturday hours stop at 4pm.",
      "Flitwick is the next town south, and Maulden and Clophill are close by. If your job is in one of those, you are still inside the county area. Use the quote form and put the postcode in.",
    ],
    nearby: ["Flitwick", "Maulden", "Clophill", "Silsoe"],
  },
  {
    slug: "flitwick",
    name: "Flitwick",
    title: "Gas Engineer and Electrician in Flitwick",
    description:
      "Boiler, heating and electrical jobs in Flitwick, MK45. Gill Gas and Electrical Ltd is based in Shortstown, Bedford. Call 07462 696665.",
    h1: "Gas and electrical work in Flitwick",
    lede: "Flitwick is on the railway south of Ampthill. The streets near the station are older. The outer estates are newer.",
    paragraphs: [
      "A town of this size has the usual mix of combi swaps, cylinder systems and consumer-unit upgrades. We do not keep a separate price list for Flitwick. The quote is for the house in front of us.",
      "If the boiler is in a loft, say so. Loft boilers need boards to stand on and a safe way up. If that is missing, it has to be sorted before a service can be done properly.",
      "Westoning, Harlington and Ampthill are nearby. Name the village on the form so we can confirm we can take the day.",
    ],
    nearby: ["Ampthill", "Westoning", "Harlington", "Steppingley"],
  },
  {
    slug: "biggleswade",
    name: "Biggleswade",
    title: "Gas Engineer and Electrician in Biggleswade",
    description:
      "Heating, gas and electrical work in Biggleswade, SG18. Gill Gas and Electrical Ltd covers Bedfordshire from Bedford. Call 07462 696665.",
    h1: "Gas and electrical work in Biggleswade",
    lede: "Biggleswade is a market town in the east of the county, on the River Ivel, about twelve miles from Bedford.",
    paragraphs: [
      "It is further from Shortstown than Kempston or Wixams, so we confirm the day before we promise a slot. The company says it covers Bedfordshire. Biggleswade is in Bedfordshire. That is the basis for taking work here, not a claim that we are based in the town.",
      "The centre has older houses. The estates towards the A1 are newer. Both need the same honest survey: flue, gas pipe, electrics, and a price before anyone buys a boiler.",
      "Sandy, Potton and Langford are in the same part of the county. Put the postcode on the quote form. If we cannot fit the job in, we will say so.",
    ],
    nearby: ["Sandy", "Langford", "Potton", "Blunham"],
  },
];

export const areaGroups: { title: string; note: string; towns: string[] }[] = [
  {
    title: "Bedford and the edges",
    note: "The day-to-day area around the MK42 base.",
    towns: [
      "Bedford",
      "Kempston",
      "Shortstown",
      "Queens Park",
      "Brickhill",
      "Putnoe",
      "Goldington",
      "Great Denham",
      "Biddenham",
      "Elstow",
      "Cotton End",
      "Cardington",
      "Harrowden",
    ],
  },
  {
    title: "South of Bedford",
    note: "Villages and newer towns down towards Ampthill.",
    towns: ["Wixams", "Wilstead", "Wootton", "Stewartby", "Kempston Rural", "Houghton Conquest", "Haynes"],
  },
  {
    title: "North and west",
    note: "Villages along the Ouse and out towards the A6.",
    towns: ["Bromham", "Clapham", "Oakley", "Milton Ernest", "Sharnbrook", "Harrold", "Carlton", "Turvey", "Stevington"],
  },
  {
    title: "Mid Bedfordshire",
    note: "Market towns and the villages between them.",
    towns: [
      "Ampthill",
      "Flitwick",
      "Maulden",
      "Clophill",
      "Silsoe",
      "Shefford",
      "Henlow",
      "Barton-le-Clay",
      "Cranfield",
      "Marston Moretaine",
      "Lidlington",
      "Aspley Guise",
      "Woburn",
    ],
  },
  {
    title: "East Bedfordshire",
    note: "Further from the yard. We confirm the diary before booking.",
    towns: [
      "Biggleswade",
      "Sandy",
      "Potton",
      "Stotfold",
      "Arlesey",
      "Langford",
      "Blunham",
      "Moggerhanger",
      "Northill",
      "Old Warden",
      "Great Barford",
      "Willington",
      "Cople",
      "Renhold",
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
