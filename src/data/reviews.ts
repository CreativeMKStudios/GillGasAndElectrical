export type Review = {
  author: string;
  rating: number;
  when: string;
  text: string;
  reply?: string;
  source: string;
  featured?: boolean;
  note?: string;
};

export const googleReviews: Review[] = [
  {
    author: "Hamad Abbasi",
    rating: 5,
    when: "About August 2026",
    text: "Spontaneous service with very reasonable prices , Work was carried out with in the time frame given and I must say quality wasn’t compromised at all. So I would highly recommend this company to everyone!",
    reply: "Thank you very much, sir",
    source: "Google",
    featured: true,
  },
  {
    author: "Imran Khalid",
    rating: 5,
    when: "About July 2025",
    text: "Mr. Gill is an expert in complete house electrical wiring, gas line installation, and heat pump installation. He uses high-quality, reliable products such as premium-grade wires, fuse boxes, and circuit breakers in his work. He provides honest advice on all types of installations and connections, ensuring clients make informed decisions. Mr. Gill is dedicated and trustworthy—he never abandons a project midway and always sees his work through to completion. I highly recommend his services without hesitation.",
    reply: "Thank you very much",
    source: "Google",
    featured: true,
  },
  {
    author: "Maudo Balde",
    rating: 5,
    when: "About 2024",
    text: "This company is amazing, they are very reliable. Communication was great, helped me with everything I needed, whilst also being efficient. I definitely recommend for anything gas and electricity related.",
    reply: "Thank you",
    source: "Google",
    featured: true,
  },
  {
    author: "Sunny",
    rating: 5,
    when: "About 2024",
    text: "Highly recommended, very efficient. Diagnosed the problem quickly and looked for solutions. Helped me choose the correct boiler and installed everything on the same day. Great work.",
    reply: "Thank you",
    source: "Google",
    featured: true,
  },
  {
    author: "Ann Thorne",
    rating: 5,
    when: "About August 2026",
    text: "Andrew came to bpha wootton vale to do routine checks on all the properties. He was polite and very efficient.",
    reply:
      "Hello Ann I just want to let you know you have left a review with the wrong company. We are Gill Gas and Electrical LTD. Can you please check with your engineer company and leave him review for his hard work, please.",
    source: "Google",
    note: "The owner replied on Google to say this review was left for the wrong company. It is shown here because it is on the profile. It is not a review of Gill’s work.",
  },
  {
    author: "Mandeep",
    rating: 5,
    when: "13 September 2024",
    text: "Very happy with work they’re done fit new boiler and rewire all house wiring Recommend to everyone",
    source: "Google review quoted on the public place record",
  },
  {
    author: "Paul",
    rating: 5,
    when: "5 December 2022",
    text: "Needed a quick bit of help and home visit. Very quick to respond, helpful, and wonderful to deal with. Highly recommended.",
    source: "Google review quoted on the public place record",
  },
  {
    author: "A Google reviewer",
    rating: 5,
    when: "15 September 2022",
    text: "Very good company.had heating working in no time.and got the new part and came and fitted it.",
    source: "Google review quoted on the public place record",
  },
  {
    author: "A Google reviewer",
    rating: 5,
    when: "29 March 2022",
    text: "The service was excellent, the work completed was excellent & I have recommended him to all my family! Everything from start to finish is what I expected! Thank you so much!",
    source: "Google review quoted on the public place record",
  },
  {
    author: "A Google reviewer",
    rating: 5,
    when: "29 March 2022",
    text: "Needed a boiler service done quickly, contacted TSG Heating Services and he was here the next day. Great price, very friendly, would highly recommend.",
    source: "Google review quoted on the public place record",
    note: "This review uses the company’s previous name, TSG Heating Services Limited. That name was used until 19 September 2024.",
  },
];

export const websiteComments: Review[] = [
  {
    author: "Customer in MK42",
    rating: 5,
    when: "Published on the previous website",
    text: "Gill is a star plumber! Advised me on which boiler to install and was a fitted to a high standard no issues after install. Gill was friendly and polite. Great for money.",
    source: "Company website",
  },
  {
    author: "Customer in MK40",
    rating: 5,
    when: "Published on the previous website",
    text: "The work was done excellently without any hassles. Very prompt service. I just called the service and told over phone what needs to be done at the tenant’s flat. The next day, the owner of the company, himself, called the tenant and made appointment with them. The work was done very efficiently. The tenant was very happy and so was I with the service. I would recommend everyone. The charges had been reasonable as well and I paid after the replacement parts had been purchased and the job was being done.",
    source: "Company website",
  },
  {
    author: "Customer in MK40",
    rating: 5,
    when: "Published on the previous website",
    text: "I could not recommend this company more. I received out standing service, explained completely in a simple way. The wonderful workman who came to help me the same day at 8pm when everyone else was closed, came with empathy and tried problem solving everything he could without parts. He downloaded the manual to my exact boiler and showed me everything off his phone with total transparency. Very pleasant and clearly caring, you couldn’t ask for better.",
    source: "Company website",
  },
  {
    author: "Customer in MK42",
    rating: 5,
    when: "Published on the previous website",
    text: "Very pleased with the installation work, work carried out in a professional timely manner. Was polite, honest and very competitive in price. I highly recommend him.",
    source: "Company website",
  },
  {
    author: "Customer in MK42",
    rating: 5,
    when: "Published on the previous website",
    text: "Boiler service, excellent work.",
    source: "Company website",
  },
  {
    author: "Customer in TW4",
    rating: 5,
    when: "Published on the previous website",
    text: "I am very happy this boiler service, excellent work!",
    source: "Company website",
  },
  {
    author: "Customer in BR2",
    rating: 5,
    when: "Published on the previous website",
    text: "Very quick and professional job done on time. Highly recommended!",
    source: "Company website",
  },
  {
    author: "Customer in TW3",
    rating: 5,
    when: "Published on the previous website",
    text: "He was professional. I really liked the work. 5 stars for him.",
    source: "Company website",
  },
  {
    author: "Customer in MK42",
    rating: 5,
    when: "Published on the previous website",
    text: "Good service, very friendly guy. Thanks a lot!",
    source: "Company website",
  },
];

export const homeFaqs = [
  {
    q: "Are you Gas Safe registered?",
    a: "The company says its gas work is done by a Gas Safe registered engineer. Ask to see the ID card before work starts, and check the name on the Gas Safe Register. We have not printed a registration number here because it was not on the public pages we checked.",
  },
  {
    q: "Do you cover my town?",
    a: "The base is Shortstown, Bedford, MK42 0HU. The company says it covers Bedfordshire. Look at the areas page, or send your postcode with the quote form. If we cannot take the job, we will say so.",
  },
  {
    q: "Is the quote free?",
    a: "Yes. The company offers a free quote with no obligation for planned work. Call 07462 696665 or use the contact form.",
  },
  {
    q: "Are you open on Sunday?",
    a: "No. Hours on the Google profile are 8am to 7pm Monday to Friday, and 9am to 4pm on Saturday. Sunday is closed. If you smell gas, call 0800 111 999.",
  },
];
