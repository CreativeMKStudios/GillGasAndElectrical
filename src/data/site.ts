import images from "./images.json";

export const site = {
  name: "Gill Gas and Electrical Ltd",
  legalName: "GILL GAS AND ELECTRICAL LTD",
  url: "https://gillgasandelectrical.co.uk",
  phoneDisplay: "07462 696665",
  phoneTel: "+447462696665",
  email: "gillgaselectrical@gmail.com",
  companyNumber: "14391379",
  incorporated: "2 October 2022",
  previousName: "TSG Heating Services Limited",
  previousNameUntil: "19 September 2024",
  director: "Gurwariam Singh",
  directorAppointed: "2 October 2022",
  street: "4 Aviation Way",
  locality: "Shortstown",
  town: "Bedford",
  region: "Bedfordshire",
  postcode: "MK42 0HU",
  country: "United Kingdom",
  latitude: 52.113894,
  longitude: -0.4229042,
  plusCode: "4H7G+HR",
  maps: "https://maps.app.goo.gl/nwK9EGjcFDNcHXF37",
  companiesHouse: "https://find-and-update.company-information.service.gov.uk/company/14391379",
  recc: "https://www.recc.org.uk/scheme/members/all/19",
  gasSafeCheck: "https://www.gassaferegister.co.uk/",
  napit: "https://www.napit.org.uk/",
  gasEmergency: "0800 111 999",
  googleRating: 4.9,
  googleReviewCount: 19,
  checked: "15 October 2026",
  ogImage: "/og.jpg",
} as const;

export const hours = [
  { day: "Monday", opens: "08:00", closes: "19:00", label: "8am–7pm" },
  { day: "Tuesday", opens: "08:00", closes: "19:00", label: "8am–7pm" },
  { day: "Wednesday", opens: "08:00", closes: "19:00", label: "8am–7pm" },
  { day: "Thursday", opens: "08:00", closes: "19:00", label: "8am–7pm" },
  { day: "Friday", opens: "08:00", closes: "19:00", label: "8am–7pm" },
  { day: "Saturday", opens: "09:00", closes: "16:00", label: "9am–4pm" },
  { day: "Sunday", opens: "", closes: "", label: "Closed" },
] as const;

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  tag: string;
  caption: string;
  alt: string;
  source: string;
};

export const photos = images as Photo[];

export const photoTags = [
  { id: "all", label: "All photos" },
  { id: "heating", label: "Heating" },
  { id: "gas", label: "Gas" },
  { id: "heat-pumps", label: "Heat pumps" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "electrical", label: "Electrical" },
] as const;

export function absolute(path: string) {
  if (path.startsWith("http")) return path;
  return new URL(path, site.url).toString();
}

export const businessSchema = {
  "@type": ["HVACBusiness", "Electrician", "Plumber"],
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  image: [absolute("/brand/logo.png"), absolute("/og.jpg"), absolute("/media/hero.webp")],
  logo: absolute("/brand/logo.png"),
  telephone: site.phoneTel,
  email: site.email,
  currenciesAccepted: "GBP",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude,
  },
  hasMap: site.maps,
  areaServed: [
    { "@type": "City", name: "Bedford" },
    { "@type": "AdministrativeArea", name: "Bedfordshire" },
  ],
  openingHoursSpecification: hours
    .filter((slot) => slot.opens)
    .map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.day,
      opens: slot.opens,
      closes: slot.closes,
    })),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "GB-COH",
    value: site.companyNumber,
  },
  sameAs: [site.maps, site.companiesHouse],
  knowsAbout: [
    "Boiler installation",
    "Boiler servicing",
    "Central heating",
    "Gas safety checks",
    "Air source heat pumps",
    "Bathroom fitting",
    "Electrical installation",
    "Consumer unit replacement",
    "EV charger installation",
  ],
};
