// Service page images
import pestControlHero from "@/assets/services/pest-control-hero.jpg";
import antHero from "@/assets/services/ant-hero.jpg";
import termiteHero from "@/assets/services/termite-hero.jpg";
import spiderHero from "@/assets/services/spider-hero.jpg";
import waspHero from "@/assets/services/wasp-hero.jpg";
import scorpionHero from "@/assets/services/scorpion-hero.jpg";
import rodentHero from "@/assets/services/rodent-hero.jpg";
import fleaTickHero from "@/assets/services/flea-tick-hero.jpg";
import roachHero from "@/assets/services/roach-hero.jpg";
import bedBugHero from "@/assets/services/bed-bug-hero.jpg";
import snakeHero from "@/assets/services/snake-hero.jpg";
// Secondary images
import fireAntsImg from "@/assets/services/fire-ants.jpg";
import brownRecluseImg from "@/assets/services/brown-recluse.jpg";
import coralSnakeImg from "@/assets/services/coral-snake.jpg";
import rattlesnakeImg from "@/assets/services/rattlesnake.jpg";
import houseMouseImg from "@/assets/services/house-mouse.jpg";
import petsFleaImg from "@/assets/services/pets-flea.jpg";
import antsVsTermitesImg from "@/assets/services/ants-vs-termites.png";
// Process icons
import processStep1 from "@/assets/services/process-step1.png";
import processStep2 from "@/assets/services/process-step2.png";
import processStep3 from "@/assets/services/process-step3.png";
import processStep4 from "@/assets/services/process-step4.png";
import processTreatment from "@/assets/services/process-treatment.png";
// Why choose us icons
import provenResults from "@/assets/services/proven-results.png";
import comprehensive from "@/assets/services/comprehensive.png";
import safety from "@/assets/services/safety.png";
import guarantee from "@/assets/services/guarantee.png";
import superPowered from "@/assets/services/super-powered.png";
import localExperts from "@/assets/services/local-experts.png";
import customPlans from "@/assets/services/custom-plans.png";

export interface ProcessStep {
  title: string;
  subtitle?: string;
  icon: string;
  description: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  processTitle: string;
  processIntro?: string;
  steps: ProcessStep[];
  extraSections?: Array<{
    title: string;
    content: string[];
    image?: string;
    imageAlt?: string;
    bulletPoints?: string[];
  }>;
  whyChooseUs: WhyChooseItem[];
  whyChooseIntro?: string;
  additionalServicesIntro?: string;
  bottomCTA: {
    title: string;
    text: string;
  };
  bottomImage?: string;
  bottomImageAlt?: string;
  faqs?: FAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  "pest-control": {
    title: "Comprehensive General Pest Control Services",
    subtitle: "pest control",
    heroImage: pestControlHero,
    heroAlt: "Technician Providing Pest Control Services in Tyler TX",
    intro: "Your home or property deserves year-round protection from pests. At Dang Pest Control, we deliver general pest control services tailored to the unique challenges of the East Texas environment. Count on our team of skilled technicians to protect your home from unwanted invaders with precision and professionalism. We serve Tyler, TX, and the surrounding areas. Call us today at (903) 871-0550 and get your quote.",
    processTitle: "Our Pest Control Process",
    steps: [
      {
        title: "Step 1",
        subtitle: "Phone Quoting Made Easy",
        icon: processStep1,
        description: "No inspection is required to get started. Our team will assess your needs by gathering essential details about your property—size, pest issues, and more—over the phone. Using this information, we'll prepare a plan before even stepping onto your property.",
      },
      {
        title: "Step 2",
        subtitle: "Thorough Initial Service",
        icon: processStep2,
        description: "Our technicians will conduct a comprehensive inspection of your property to identify pests, evidence of activity, entry points, and harborage areas.",
      },
      {
        title: "",
        subtitle: "Targeted Treatments",
        icon: processStep2,
        description: "We'll provide both interior and exterior treatments to address pests already inside while preventing new ones from entering. This includes spraying in the kitchen, bathrooms, wall penetrations and selected interior areas as well as spraying exterior foundations, around windows and doors, and the eaves (up to 20 feet high).",
      },
      {
        title: "",
        subtitle: "Pest Prevention",
        icon: processStep2,
        description: "We treat up to 10 feet out from your foundation in addition to sweeping away spider webs, and treat entry points to fortify your property against a wide range of pests, including cockroaches, ants, scorpions, spiders, silverfish, centipedes, millipedes, and many more. Note: Specialized treatment plans for pests like bed bugs, fleas and ticks, German cockroaches, and termites are available as stand-alone services.",
      },
      {
        title: "Step 3",
        subtitle: "Custom Treatment Plan",
        icon: processStep3,
        description: "Based on our findings, we'll discuss a detailed solution tailored to your situation. Our integrated pest management approach doesn't just treat pests temporarily—it gets to the root of the problem to keep them away year-round.",
      },
      {
        title: "Step 4",
        subtitle: "Monitoring & Preventative Care",
        icon: processStep4,
        description: "To ensure long-lasting protection, our team monitors your property regularly, adjusting treatments as needed to guarantee effectiveness.",
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Focused Expertise", description: "We are proud members of the National Pest Management Association (NPMA) and the Texas Pest Control Association (TPCA), reflecting our commitment to industry best practices and professionalism." },
      { icon: comprehensive, title: "Environmentally Responsible", description: "Our Integrated Pest Management (IPM) approach prioritizes environmentally protective solutions. We don't just spray for a quick fix—we work to eliminate the root causes of your pest problems." },
      { icon: safety, title: "Proven Results", description: "Our technicians leverage years of experience to deliver effective pest control with minimal disruption to your daily life. Whether it's ants, spiders, cockroaches, or more unique pests, we've got the skills to handle the job." },
      { icon: guarantee, title: "Customer-Focused Service", description: "From the moment you call until the final treatment, we're dedicated to your satisfaction. Our knowledgeable team will walk you through each step of the process, ensuring your property is pest-free." },
      { icon: superPowered, title: "Local & Reliable", description: "Based in Tyler, TX, Dang Pest Control proudly serves homeowners and property managers across Longview, Jacksonville, Lindale, Bullard, Whitehouse, and surrounding areas." },
    ],
    bottomCTA: {
      title: "Protect Your Property Today",
      text: "Don't wait for pests to invade your home—act now. With Dang Pest Control, you'll enjoy expert service, tailored solutions, and peace of mind knowing your property is in good hands. Located in Tyler, TX, we proudly serve surrounding communities including Longview, Jacksonville, Lindale, Bullard, and Whitehouse.",
    },
  },
  "ant-control": {
    title: "Ant Control Services",
    subtitle: "Ants",
    heroImage: antHero,
    heroAlt: "Carpenter Ant Control Services Tyler TX",
    intro: "Ant infestations can disrupt your daily life and damage your property. Don't let them take over your home or yard. At Dang Pest Control, we specialize in identifying, treating, and preventing ant infestations—giving you back your peace of mind. Our comprehensive ant control services are designed to eliminate current infestations and keep your property ant-free in the long term. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Ant Control Process",
    steps: [
      { title: "Step 1", subtitle: "Inspection & Identification", icon: processStep1, description: "Our skilled technicians will assess your property to identify the type of ants and locate their nests and entry points. We take an Integrated Pest Management (IPM) approach, looking at environmental and structural factors that contribute to the infestation. Ants that we commonly deal with in East Texas include Fire Ants, Carpenter Ants, Pharaoh Ants, Crazy Ants, Odorous House Ants, Rover Ants, and more!" },
      { title: "Step 2", subtitle: "Customized Treatment Plan", icon: processStep2, description: "We create a tailored Integrated Pest Management Plan to target your specific ant problem. Our treatments include applying regulated insecticides to nests, entry points, and affected areas—both inside your home and throughout your outdoor space. These products are designed to be family and pet friendly, so you can rest easy." },
      { title: "Step 3", subtitle: "Long-Term Elimination", icon: processStep3, description: "Our treatments don't just stop at the surface. Ants carry the product back to their colony, effectively eliminating the entire population. This method is far more effective than spot treatments that only handle visible problem areas." },
      { title: "Step 4", subtitle: "Ongoing Monitoring & Prevention", icon: processStep4, description: "We monitor the effectiveness of the treatment, evaluate the results, and provide preventative care tips to ensure your property remains ant-free." },
    ],
    extraSections: [
      {
        title: "Fire Ant Treatment & Prevention",
        content: [
          "At Dang Pest Control, we understand the dangers and disruptions fire ants can bring to your home and outdoor spaces. Their bites and stings can cause significant pain, itching, swelling, and even allergic reactions, such as dizziness, nausea, or difficulty breathing. If you experience an allergic reaction from a fire ant bite, seek emergency medical care immediately.",
          "Beyond their bites, fire ants can pose serious risks to your home. They are notorious for moving into walls, roofs, and floors, often causing electrical malfunctions by invading air conditioners, telephone wiring, and other machinery. These malfunctions increase the risk of financial damage and even potential fire hazards.",
          "With Dang Pest Control's professional ant control treatments, you'll regain your home and yard as a safe space, free from fire ants. Our advanced treatments target nests as well as problem areas. We apply solutions strategically, allowing ants to carry the product back to their colonies. This process eradicates the entire population, providing a far more effective solution than spot treatments or DIY methods that only address visible issues.",
          "Our pest management strategies are tailored to each client's specific needs, backed by our commitment to environmentally responsible practices. Our technicians specialize in Integrated Pest Management (IPM), which addresses root causes of pest issues, not just surface-level problems.",
          "Don't wait for fire ants to take over your property. Trust our ant-free guarantee and regain your peace of mind. Get your quote from Dang Pest Control today and protect your home, family, and outdoor spaces.",
        ],
        image: fireAntsImg,
        imageAlt: "Fire Ants in Tyler TX",
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Proven Results", description: "We deliver results you can count on. Our expert treatments ensure thorough elimination of ants and safeguard your property from future infestations." },
      { icon: comprehensive, title: "Comprehensive Coverage", description: "We treat your entire yard, beds, and indoor spaces to create a no-ant zone. This holistic approach ensures every corner of your property is protected." },
      { icon: safety, title: "Family First", description: "Our insecticides are thoroughly regulated and can be used around your home, pets, and children. We uphold environmentally protective practices to give you peace of mind." },
      { icon: guarantee, title: "Ant-Free Guarantee", description: "We stand by our work with an ant-free guarantee. Enjoy your home and outdoor space without worrying about invasive ants." },
    ],
    bottomCTA: {
      title: "Take the First Step Today",
      text: "Don't wait—restore comfort and peace to your home with professional ant control services from Dang Pest Control. Located in Tyler, TX, we proudly serve the surrounding areas, including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.",
    },
  },
  "termite-inspections": {
    title: "Professional Termite Inspections",
    subtitle: "Termite Inspections",
    heroImage: termiteHero,
    heroAlt: "Subterranean Termite Inspections in Tyler TX",
    intro: "Termites cause more than $5 billion in property damage every year—don't be their next victim. At Dang Pest Control, our licensed termite inspectors specialize in protecting your home with thorough termite inspections, state-of-the-art treatments, and proactive prevention plans. We serve Tyler, TX, and the surrounding areas. Take the first step in protecting your property today.",
    processTitle: "Comprehensive Termite Inspections",
    processIntro: "Our licensed termite inspectors conduct an in-depth evaluation of your property, including both the interior and exterior areas. We leave no stone unturned, looking for telltale signs of termites such as mud tubes, hollow wood, discarded wings, bubbling paint, stuck doors, and even head-banging sounds from soldier termites. Whether you're a homeowner, realtor, homebuyer, or home seller, we'll provide a detailed report on any termite structural damage inspection results we uncover, along with customized recommendations for treatment and prevention.",
    steps: [],
    extraSections: [
      {
        title: "Identifying Termites",
        content: [
          "Termites are small, resilient insects that can cause significant structural damage to homes and businesses. Recognizing the signs of termites early is critical for preventing costly repairs and protecting your property. Termites are often mistaken for other insects, such as flying ants, but several key traits distinguish them:",
          "**Antennae:** Termite antennae are straight with bead-like segments, whereas ants have bent, elbow-like antennae.",
          "**Body:** Termites have soft, light-colored bodies and a broadly connected abdomen and thorax. Flying ants, on the other hand, are darker and feature a narrow, pinched waist.",
          "**Wings:** Winged termites, or swarmers, have front and hind wings that are equal in size, unlike ants, whose forewings are larger than their hindwings.",
          "Termites serve specific roles within a colony, and these roles impact their physical appearance.",
          "**Winged Termites (Swarmers):** These are reproductive termites responsible for starting new colonies. Their color ranges from pale yellow to reddish-brown or black, depending on the species.",
          "**Worker Termites:** Wingless and white or creamy white in color, they undertake foraging and construction responsibilities within the colony.",
          "**Soldier Termites:** Creamy white with a darker, reinforced head and large mandibles, these termites defend the colony.",
          "**King and Queen Termites:** These are the largest members of a colony. Egg-laying queens can grow to several inches in length, while kings are slightly smaller.",
        ],
        image: antsVsTermitesImg,
        imageAlt: "Identifying Termites in Tyler TX - Ants vs Termites comparison",
      },
      {
        title: "Signs of a Termite Infestation",
        content: [
          "Termites are often called \"silent destroyers\" because they can cause severe damage without immediate detection. Look for these common signs of termite activity at your property:",
          "**Mud Tubes:** Termites build mud tubes to travel between their underground colonies and above-ground food sources. These can often be found along wood beams, walls, or in crawl spaces.",
          "**Hollow Wood:** Termites consume wood from the inside out, leaving a thin outer shell. Tapping on damaged wood may produce a hollow sound.",
          "**Discarded Wings:** Swarmers shed their wings after flight. Look for discarded wings near windowsills, doorways, or around the foundation of your property.",
          "**Termite Droppings (Frass):** Tiny pellet-like droppings near doors or wooden furniture could indicate termites are nearby.",
          "**Stuck Windows or Doors:** Termites target exposed wood around frames, often warping the structure and making them harder to open or close.",
          "**Bubbling Paint:** Uneven or bubbling paint may signal moisture buildup caused by termites or water damage.",
          "**Buckling Wood:** Damaged wood may start to warp or buckle as termites eat through it.",
          "**Head Banging Sounds:** Soldier termites are known to bang their heads against wood to signal danger to the colony.",
        ],
      },
      {
        title: "Professional Termite Inspections",
        content: [
          "It is critical to have termite issues evaluated by a professional. At Dang Pest Control, our licensed technicians will conduct a comprehensive inspection of both exterior and interior areas of your property. Based on the inspection, we'll determine the scope of the infestation and recommend the most effective course of treatment.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Professional Expertise", description: "Our licensed termite inspectors are well-trained in handling both subterranean termites and drywood termites that are prevalent in East Texas. We're part of trusted organizations, including the NPMA and the TPCA." },
      { icon: comprehensive, title: "Environmentally Conscious Solutions", description: "Using an Integrated Pest Management Plan approach, we ensure treatments are effective while being the most environmentally protective option available." },
      { icon: safety, title: "Broad Pest Control Expertise", description: "Beyond termite inspections, we provide specialized treatments for ants, spiders, mosquitos, roaches, bed bugs, rodents, and more to give your home full-spectrum protection." },
      { icon: guarantee, title: "Local, Reliable Service", description: "We're a locally owned and operated company in Tyler, TX, proudly serving the surrounding communities." },
      { icon: superPowered, title: "Customer-Focused Approach", description: "Your satisfaction is our priority. We tailor our service to your specific needs, ensuring lasting peace of mind." },
    ],
    whyChooseIntro: "When it comes to termite inspection and treatment, experience matters. Here's why homeowners trust us in a market saturated with pest control options:",
    bottomCTA: {
      title: "Call Us Today & Protect What Matters",
      text: "Don't wait until termites cause irreparable damage to your home or property. Whether you're buying, selling, or ensuring your home is termite-free long-term, our expertise makes all the difference. Located in Tyler, TX, we proudly serve customers in Longview, Jacksonville, Lindale, Bullard, Whitehouse, and beyond.",
    },
  },
  "spider-control": {
    title: "Spider Pest Control Services",
    subtitle: "Spiders",
    heroImage: spiderHero,
    heroAlt: "Black Widow Spider Control Services in Tyler TX",
    intro: "At Dang Pest Control, we understand how unsettling a spider infestation can be. Our approach goes beyond just spraying—we deliver a comprehensive solution to eliminate your spider problem entirely. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Spider Control Process",
    processIntro: "Here's what you can expect from our spider pest control services:",
    steps: [
      { title: "Step 1", subtitle: "Identify the Problem", icon: processStep1, description: "Our licensed technicians carefully assess your property to pinpoint the spider species and locate their entry points and favorite hiding spots. This critical step helps ensure we use the most effective treatment plan. While there are way too many species of spiders in East Texas to list here, Brown Recluse and Black Widow are the perennial villains that strike fear in most people! Rest assured, we have a Super Powered plan to treat them all!" },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "We craft a custom Integrated Pest Management (IPM) plan that combines environmentally responsible techniques with proven treatments. This targeted strategy ensures long-term results while being mindful of your property and surroundings." },
      { title: "Step 3", subtitle: "Monitor & Evaluate", icon: processStep3, description: "After the treatment, we actively monitor the results and assess the effectiveness of our methods. Our team makes any necessary adjustments to address lingering concerns and keep your property spider-free." },
      { title: "Step 4", subtitle: "Continued Prevention", icon: processStep4, description: "We don't just get rid of spiders—we help prevent them from coming back. Our technicians will provide practical tips on sealing entry points, reducing conducive conditions, and keeping pests at bay." },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Trusted Expertise", description: "With experience serving the Tyler, TX area, our technicians are certified experts in spider treatment and pest control. We are proud members of the NPMA and the TPCA, underscoring our commitment to excellence." },
      { icon: comprehensive, title: "Customer-Focused Solutions", description: "Every home and property is different, and our service is tailored to your specific needs. From detailed inspections to customized IPM plans, we go above and beyond to ensure your satisfaction." },
      { icon: safety, title: "Environmental Responsibility", description: "At Dang Pest Control, we prioritize eco-friendly practices. Our IPM plans minimize environmental impact without sacrificing effectiveness." },
      { icon: guarantee, title: "Comprehensive Approach", description: "We aren't a \"spray and go\" company. Our holistic process ensures quality results that last, keeping your space spider-free while preventing future infestations." },
    ],
    bottomCTA: {
      title: "Spider-Free Living Starts Here",
      text: "Reclaim your home or property with Dang Pest Control's expert spider pest control services. Whether you're dealing with a minor issue or a full infestation, our proven methods ensure effective and lasting results. Located in Tyler, TX, we proudly serve homeowners and property managers throughout nearby areas, including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.",
    },
    bottomImage: brownRecluseImg,
    bottomImageAlt: "Brown Recluse Spider Control Services in Tyler TX",
  },
  "wasp-hornet-control": {
    title: "Wasp & Hornet Control Services",
    subtitle: "Wasps & Hornets",
    heroImage: waspHero,
    heroAlt: "Red Wasp Control Services in Tyler TX",
    intro: "Don't let wasps or hornets take over your home or property. Dang Pest Control offers expert solutions to eliminate these dangerous pests and protect your family, tenants, or customers. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Expert Wasp & Hornet Control Service That Works",
    steps: [
      { title: "Step 1", subtitle: "Identification & Assessment", icon: processStep1, description: "Our trained technicians start by identifying the type of wasp or hornet and locating their nest or point of entry. This step is crucial for a targeted and effective solution to your pest problem." },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "We don't just treat the symptoms—we tackle the root cause. Using our environmentally mindful Integrated Pest Management Plan, we create a custom strategy to address your pest issue. This includes removal techniques, preventative measures, and recommendations to eliminate conducive conditions on your property." },
      { title: "Step 3", subtitle: "Long-Term Elimination", icon: processStep3, description: "After treatment, we'll ensure the wasps or hornets are completely eradicated. Additionally, we provide preventative care tips and solutions to make sure they don't return." },
      { title: "Step 4", subtitle: "Ongoing Monitoring & Prevention", icon: processStep4, description: "We monitor the effectiveness of the treatment, evaluate the results, and provide preventative care tips to ensure your property remains free of wasps and hornets." },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Local Expertise", description: "Located in Tyler, TX, we proudly serve our community and surrounding areas. We know the unique challenges of dealing with wasps and hornets in East Texas and deliver results tailored to your property." },
      { icon: comprehensive, title: "Certified Specialists", description: "We're proud members of the National Pest Management Association (NPMA) and the Texas Pest Control Association (TPCA), showcasing our expertise and commitment to professional standards." },
      { icon: safety, title: "Environmentally Mindful Solutions", description: "We prioritize your family, pets, and the environment. Our Integrated Pest Management approach ensures we deliver lasting results responsibly." },
      { icon: guarantee, title: "Broad Pest Control Services", description: "More than just a wasp and hornet removal company, we handle various pests including ants, spiders, termites, rodents, mosquitos, fleas and ticks, roaches, bed bugs, and more." },
    ],
    bottomCTA: {
      title: "Call Us Today to Solve Your Pest Problem",
      text: "Wasps and hornets don't belong on your property—protect your family, tenants, or customers before the problem worsens. Located in Tyler, TX, we proudly serve Longview, Jacksonville, Lindale, Bullard, Whitehouse, and surrounding areas.",
    },
  },
  "scorpion-control": {
    title: "Scorpion Control Services",
    subtitle: "Scorpions",
    heroImage: scorpionHero,
    heroAlt: "Scorpion Control Services in Tyler TX",
    intro: "When scorpions invade your home or yard, they aren't just a nuisance—they can present a serious hazard to your family, pets, and property. At Dang Pest Control, we specialize in delivering comprehensive scorpion pest control services designed to identify the root cause of the problem, eliminate scorpions effectively, and provide lasting prevention strategies. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Scorpion Control Process",
    steps: [
      { title: "Step 1", subtitle: "Inspection & Identification", icon: processStep1, description: "Our experienced technicians will carefully inspect your home and yard, identifying scorpions and uncovering the sources of infestation. This critical step allows us to locate hiding spots and entry points, ensuring complete and targeted treatment." },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "Using a science-backed approach, we craft a tailored Integrated Pest Management Plan (IPMP) to address your unique circumstances. Our treatment doesn't end with spraying; rather, we combine eco-conscious pest control solutions with preventative measures for long-term results." },
      { title: "Step 3", subtitle: "Long-Term Elimination", icon: processStep3, description: "We don't stop after treatment. Our team will ensure your home remains free of scorpions. Plus, we provide expert advice to help prevent future infestations." },
      { title: "Step 4", subtitle: "Ongoing Monitoring & Prevention", icon: processStep4, description: "We monitor the effectiveness of the treatment, evaluate the results, and provide preventative care tips to ensure your property remains free of scorpions." },
    ],
    whyChooseIntro: "While scorpion control is our specialty, we're proud to offer a range of pest control services to meet all of your needs. From spiders and ants to wasps, rodents, and termites, our technicians are equipped to handle any challenge.",
    whyChooseUs: [
      { icon: provenResults, title: "Expertise You Can Count On", description: "With experience and membership with the National Pest Management Association (NPMA) and Texas Pest Control Association (TPCA), Dang Pest Control is recognized for excellence in the pest control industry." },
      { icon: comprehensive, title: "Eco-Conscious Methods", description: "Our Integrated Pest Management approach prioritizes environmentally protective strategies, making us the responsible choice for pest control." },
      { icon: safety, title: "Reliable Solutions", description: "We don't believe in temporary fixes. Our tailored treatments ensure long-lasting relief from scorpions and other pest issues." },
      { icon: guarantee, title: "Local Expertise, Trusted Results", description: "Based in Tyler, TX, we proudly serve the surrounding communities." },
    ],
    bottomCTA: {
      title: "Don't Wait—Protect Your Home Today!",
      text: "Located in Tyler, TX, Dang Pest Control serves clients across Longview, Jacksonville, Lindale, Bullard, Whitehouse, and neighboring areas. From identifying scorpions to eliminating and preventing infestations, we deliver results you can trust.",
    },
  },
  "rodent-control": {
    title: "Rodent Control Services",
    subtitle: "Rodents",
    heroImage: rodentHero,
    heroAlt: "Norway Brown Rat Control Services in Tyler TX",
    intro: "When it comes to pests, few are as concerning as rodents. Whether it's roof rats scaling your walls, Norway rats burrowing beneath your property, or house mice nesting near your food supply, the damage they cause can be significant. From property destruction to health hazards, rodent infestations demand immediate, effective action. At Dang Pest Control, our comprehensive rodent control services are designed to eliminate the problem and prevent it from coming back. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Rodent Control Process",
    steps: [
      { title: "Step 1", subtitle: "Thorough Inspection", icon: processStep1, description: "Our technicians carefully inspect your property to identify signs of infestation, entry points, and rodent activity." },
      { title: "Step 2", subtitle: "Integrated Pest Management (IPM) Plan", icon: processStep2, description: "We customize a strategy to address your rodent issue at its root with environmentally protective methods. This includes recommendations for exclusion work and customer-specific action steps." },
      { title: "Step 3", subtitle: "Effective Treatment", icon: processTreatment, description: "We use a combination of exclusion, baiting, trapping, and other advanced methods to remove the infestation." },
      { title: "Step 4", subtitle: "Monitoring & Evaluation", icon: processStep4, description: "Rodent control doesn't stop at eradication. We continuously monitor to ensure successful results and adapt your plan if needed." },
      { title: "Step 5", subtitle: "Preventative Care", icon: processStep3, description: "Our comprehensive service includes guidance on maintaining a rodent-free environment, from sealing up entry points to minimizing attractants." },
    ],
    extraSections: [
      {
        title: "Rodent Habitats & Harborage",
        content: [
          "Mice and rats are experts at finding shelter, especially in human-made structures. These rodents thrive in dark, hidden spaces and can make their homes in attics, crawl spaces, basements, and even within wall voids. Outdoors, they are drawn to areas with dense ground cover, brushy hedges, and woodpiles. Roof rats, in particular, are notorious climbers often entering homes through trees touching rooftops, making attics a preferred nesting site. Norway rats, on the other hand, are burrowers, frequently found in basements, sewer systems, and other damp, dark areas.",
          "Blocking access to these harborage areas is essential for rodent management. At Dang Pest Control, our trained technicians specialize in identifying and sealing entry points, ensuring rodents no longer have easy access to your property.",
        ],
      },
      {
        title: "Health Risks Related to Mice & Rats",
        content: [
          "Rodents pose the possibility of severe health threats to humans, often transmitting dangerous diseases. Here are some of the most critical health risks associated with rodents:",
          "**Hantavirus:** Spread through contact with droppings or urine, this disease can lead to severe respiratory issues and even death.",
          "**Leptospirosis:** This bacterial infection is transmitted through rat urine and causes symptoms like fever and muscle aches.",
          "**Salmonellosis:** Caused by exposure to rodent feces, this bacterial infection results in severe diarrhea and abdominal cramps.",
          "**Rat-bite Fever:** Passed through bites or scratches, this infection leads to fever, joint pain, and chills.",
          "Additionally, rodent allergens such as droppings and urine can aggravate allergies and asthma, posing risks to children and those with respiratory conditions.",
        ],
      },
      {
        title: "Signs of a Rodent Infestation",
        content: [
          "Think you might have unwanted furry visitors? Keep an eye out for these signs of infestation.",
        ],
        bulletPoints: [
          "**Droppings:** Rodent droppings are often shiny black (rats) or small and smooth with pointed ends (mice).",
          "**Chewed Holes:** Look for gnawed holes in walls, floors, wires, or food packaging.",
          "**Noises:** Scampering and scratching behind the walls, often more noticeable shortly after dark.",
          "**Urine Odors & Marks:** Foul smells or greasy marks left along walls and baseboards.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Experienced Professionals", description: "We are members of the National Pest Management Association (NPMA) and the Texas Pest Control Association (TPCA), so you can trust that our technicians meet the highest standards of quality." },
      { icon: comprehensive, title: "Comprehensive Rodent Management", description: "Rodents are more than nuisances—they're destructive and dangerous. That's why we perform a full site evaluation and implement strategies beyond quick fixes, ensuring lasting protection." },
      { icon: safety, title: "Local Expertise", description: "Based in Tyler, TX, we know the common rodent threats in our area (including Roof Rats, Norway Rats, and House Mice) and how to fight them effectively." },
      { icon: guarantee, title: "Commitment to Environmentally Responsible Solutions", description: "Our Integrated Pest Management approach prioritizes environmentally friendly solutions while effectively eliminating pests from your property." },
      { icon: superPowered, title: "Customer Focused", description: "We're not just about extermination—we're here to provide peace of mind. From transparent communication to preventative guidance, your satisfaction is our top priority." },
    ],
    bottomCTA: {
      title: "Protect Your Property Today",
      text: "Don't let rodents wreak havoc in your home or business. With Dang Pest Control, you get tailored solutions that work, delivered by professionals you can trust. Located in Tyler, TX, we proudly serve the surrounding areas, including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.",
    },
    bottomImage: houseMouseImg,
    bottomImageAlt: "Eastern House Mouse and Rodent Control Services Tyler TX",
  },
  "mosquito-control": {
    title: "Mosquito Control Service",
    subtitle: "Mosquitos",
    heroImage: pestControlHero, // mosquito hero was lazy-loaded SVG placeholder
    heroAlt: "Aedes Mosquito Control Service in Tyler TX",
    intro: "At Dang Pest Control, we understand how frustrating mosquitos can be—interrupting your peaceful evenings, ruining family barbecues, and putting your health at risk. That's why we offer professional mosquito control services tailored to your specific needs. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Mosquito Treatment Process",
    processIntro: "Here's what you can expect from our mosquito treatment process:",
    steps: [
      { title: "Step 1", subtitle: "Property Assessment & Identification", icon: processStep1, description: "Our expert technicians will inspect your property to identify mosquito habitats, breeding sites, and entry points. By deeply understanding mosquito behavior, we ensure that our Integrated Pest Management Plan addresses the root cause." },
      { title: "Step 2", subtitle: "Customized Mosquito Treatment", icon: processStep2, description: "We implement a multi-step plan to target mosquitos at every stage of their lifecycle. From outdoor treatments and mechanical barriers to vegetation management, our solutions are comprehensive and effective. You can count on routine treatments every three weeks to keep mosquito populations under control." },
      { title: "Step 3", subtitle: "Long-Term Reduction", icon: processStep3, description: "We don't just spray and leave. We actively monitor the effectiveness of our treatments, adjust our strategies if needed." },
      { title: "Step 4", subtitle: "Ongoing Monitoring & Prevention", icon: processStep4, description: "If mosquitos persist between treatments, we'll come back and retreat for free—guaranteed. We also provide preventative care tips to ensure your property remains mosquito-free." },
    ],
    extraSections: [
      {
        title: "In2Care Stations Mosquito Treatments",
        content: [
          "Our In2Care mosquito stations provide an innovative and eco-friendly solution for long-term mosquito control. These strategically placed stations attract egg-laying mosquitos, which become carriers of a special bio-active treatment. As they move between breeding sites, they spread the treatment, effectively contaminating and eliminating larvae before they can develop into biting adults.",
          "The In2Care system also targets adult mosquitos, reducing their ability to spread diseases like West Nile virus and Zika. Proven friendly for people, pets, and beneficial insects, this low-maintenance solution offers continuous protection, making it a powerful defense against mosquito infestations on your home.",
        ],
      },
      {
        title: "Mosquito Fogging/Misting Treatments",
        content: [
          "Using a professional-grade fogger, we disperse a fine mist of EPA-approved insecticide onto foliage, where mosquitos rest during the day. This treatment provides immediate knockdown of adult mosquitos, making it an ideal solution for quick relief before outdoor events or during peak mosquito season. The fog penetrates dense vegetation and hard-to-reach areas, ensuring maximum coverage.",
          "Environmentally, family and pet friendly when applied by our trained technicians, fogging helps create a more comfortable, bite-free environment for you and your family. Rest assured we will evaluate every property and take all reasonable steps to protect our valuable pollinators.",
        ],
      },
      {
        title: "Protect Your Home & Family from Mosquitos",
        content: [
          "Mosquitos aren't just a nuisance; they're a serious health threat. With 176 mosquito species in the U.S. and over 3,000 worldwide, these pests are responsible for spreading diseases like West Nile virus, encephalitis, dengue, and even malaria. Alarming statistics from the Texas Department of Health and Human Services reveal 154 cases of West Nile disease and 79 cases of dengue in Texas in 2023 alone.",
          "Mosquitos are also a primary cause of heartworm in pets, making year-round prevention essential. At Dang Pest Control, we're here to help you protect your loved ones and reduce the risks associated with these dangerous pests.",
        ],
      },
      {
        title: "Prevention Tips to Reduce Mosquitos",
        content: [
          "While nothing can eliminate mosquitos entirely, adopting effective prevention methods can drastically reduce their presence. Here are our top tips to keep mosquitos at bay:",
          "**Wear Protective Clothing:** Cover as much skin as possible by wearing long sleeves and pants to create a physical barrier against mosquito bites.",
          "**Apply EPA-Approved Repellents:** Use insect repellents containing DEET, picaridin, oil of lemon eucalyptus, or other recommended ingredients to protect yourself outdoors.",
          "**Eliminate Standing Water:** Mosquitos need still water to lay their eggs. Regularly empty items like buckets, trash cans, plant pots, toys, tires, and clogged gutters to deny them breeding grounds.",
          "**Maintain Your Home's Defenses:** Ensure your home is mosquito-proof by repairing any damaged window and door screens and keeping outdoor areas free from clutter. Using air conditioning indoors also helps keep mosquitos away.",
          "At Dang Pest Control, we understand the challenges you face when dealing with mosquitos. Our expert technicians use an Integrated Pest Management (IPM) approach to deliver customized mosquito control treatments that are both effective and environmentally responsible. If mosquitos are still causing trouble between visits, we'll retreat your property at no additional cost.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Expert Knowledge", description: "We're part of the National Pest Management Association and the Texas Pest Control Association, ensuring the highest standards in pest control practices." },
      { icon: comprehensive, title: "Environmentally Conscious", description: "We design eco-friendly solutions that target mosquitos while protecting beneficial insects and the environment." },
      { icon: safety, title: "Guaranteed Results", description: "We promise a noticeable reduction in mosquitos so you can enjoy your yard with peace of mind—or we'll retreat for free." },
      { icon: guarantee, title: "Comprehensive Services", description: "Our technicians are trained to handle all types of pests, not just mosquitos. We also offer services to treat spiders, wasps and hornets, scorpions, rodents, fleas and ticks, cockroaches, bed bugs, and more." },
    ],
    bottomCTA: {
      title: "Get Your Quote Today",
      text: "Mosquitos aren't just an annoyance—they're a threat to your health and well-being. They carry diseases like West Nile virus, Zika virus, and dengue fever. Protect your family, pets, and property today with expert mosquito pest control services that deliver real results. Serving Tyler, TX, and surrounding areas including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.",
    },
  },
  "flea-tick-control": {
    title: "Flea & Tick Control Service",
    subtitle: "Fleas & Ticks",
    heroImage: fleaTickHero,
    heroAlt: "Tick Control Services in Tyler TX",
    intro: "Fleas and ticks are more than just an annoyance—they're a threat to your family's comfort and enjoyment outdoors. At Dang Pest Control, we provide professional flea and tick pest control services that effectively eliminate these pests and help you maintain a healthy, itch-free environment. Our customized treatments will eliminate any existing fleas and ticks and will also prevent future intrusions. We will make sure the interior and exterior of your entire property will be free of these pesky and potentially disease carrying pests! We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Comprehensive Flea & Tick Control Process",
    processIntro: "At Dang Pest Control, our technicians take a thorough, integrated approach to handle flea and tick infestations. Here's how we ensure your family stays protected:",
    steps: [
      { title: "Step 1", subtitle: "Inspection & Identification", icon: processStep1, description: "We begin by pinpointing the source of your flea or tick problem. This includes identifying the pests, where they are harboring, and what factors may be encouraging their presence." },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "Once the issue is assessed, we create a tailored plan for your property using eco-friendly and pet-friendly applications, focusing on long-term solutions, not just short-term fixes." },
      { title: "Step 3", subtitle: "Treatment & Application", icon: processStep3, description: "Our flea and tick treatments target problem areas both indoors and outdoors, creating a barrier against reinfestations. We handle everything from indoor flea treatment to outdoor tick prevention." },
      { title: "Step 4", subtitle: "Monitoring & Evaluation", icon: processStep4, description: "After treatment, we follow up to evaluate the results and make any necessary adjustments to ensure the pests are eliminated for good." },
    ],
    extraSections: [
      {
        title: "Why Flea & Tick Pest Control Is Important",
        content: [],
        bulletPoints: [
          "Fleas are known carriers of diseases like flea-borne typhus and plague.",
          "Ticks can transmit diseases like Lyme disease, anaplasmosis, and Rocky Mountain spotted fever.",
          "Infestations can cause painful itching, allergic reactions, and secondary skin infections for both humans and pets.",
          "Stay ahead of these harmful pests by investing in professional flea treatment for house and outdoor tick prevention. DIY treatments can leave gaps, but our expert services will ensure every corner of your home and yard is pest-free.",
        ],
      },
      {
        title: "Signs You Might Have an Infestation",
        content: [],
        bulletPoints: [
          "Excessive scratching in pets",
          "Black or brown specks (flea dirt) on pet fur, skin, or furniture",
          "Sightings of fleas or ticks on your carpet, furniture, or yard",
          "Presence of wildlife near your property, which can carry ticks",
          "If you notice any of these signs, it's time to call Dang Pest Control.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Expert Technicians", description: "Our skilled technicians have extensive knowledge of flea and tick behaviors, allowing us to provide the most effective solutions." },
      { icon: comprehensive, title: "Comprehensive Approach", description: "We don't believe in \"quick fixes.\" Our Integrated Pest Management Plan ensures long-term results by addressing the root cause of the pest issue." },
      { icon: safety, title: "Eco-Friendly Methods", description: "All treatments are specially formulated to be child, pet, and environmentally friendly." },
      { icon: guarantee, title: "Proven Results", description: "Our treatments are designed to keep fleas and ticks away, reducing the risk of diseases such as Lyme disease and Rocky Mountain spotted fever." },
      { icon: superPowered, title: "Locally Owned & Operated", description: "Based in Tyler, TX, we proudly serve Longview, Jacksonville, Lindale, Bullard, Whitehouse, and surrounding areas." },
    ],
    bottomCTA: {
      title: "Don't Wait—Get Protected Today",
      text: "It's time to protect your family, pets, and property with professional, dependable pest control services. Fleas and ticks don't just go away on their own. Take action now to protect your home and loved ones. Located in Tyler, TX, we proudly serve the surrounding areas, including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.",
    },
    bottomImage: petsFleaImg,
    bottomImageAlt: "Pet and Dog Flea Control Services in Tyler TX",
  },
  "roach-control": {
    title: "Cockroach Pest Control Services",
    subtitle: "Roaches",
    heroImage: roachHero,
    heroAlt: "Cockroach Pest Control Services in Tyler TX",
    intro: "A cockroach infestation can quickly turn into a nightmare, disrupting your comfort, damaging your property, and creating health concerns. At Dang Pest Control, we're here to provide you with effective, long-term solutions for roach control. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Expert Cockroach Treatment Process",
    processIntro: "We use a proven process to target even the most stubborn infestations.",
    steps: [
      { title: "Step 1", subtitle: "Thorough Inspection", icon: processStep1, description: "Our trained technicians identify the species of cockroaches (American, German, or other species) and determine their entry points. We focus on finding the source to provide effective solutions." },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "We implement a customized and environmentally conscious treatment plan tailored to your property's specific needs." },
      { title: "Step 3", subtitle: "Treatment Application", icon: processTreatment, description: "Our treatments are designed to quickly eliminate cockroaches while remaining family and pets friendly." },
      { title: "Step 4", subtitle: "Effectiveness Monitoring", icon: processStep4, description: "Our team monitors the results of the treatment to ensure the infestation is fully resolved." },
      { title: "Step 5", subtitle: "Preventative Care", icon: processStep3, description: "We identify environmental factors and provide tips to prevent future infestations, keeping your property protected for the long term. Whether you're battling a current infestation or looking to prevent one, our cockroach treatment helps you regain peace of mind." },
    ],
    extraSections: [
      {
        title: "About Cockroaches in East Texas",
        content: [
          "Cockroaches are one of the most persistent, resilient, and unsanitary pests in East Texas, thriving in warm, humid environments and invading homes and businesses in search of food, water, and shelter. The most common species in the region—including the American, German, Smoky Brown, Oriental, and Brown-Banded cockroaches—are known for their rapid reproduction and ability to hide in hard-to-reach areas like kitchens, bathrooms, basements, attics and also in cracks, crevices, drains and even appliances.",
          "Cockroaches pose serious health risks, as they carry bacteria, viruses, and allergens that can contaminate food, trigger asthma and allergy symptoms, and spread diseases such as Salmonella and E. coli. Their presence is often a sign of an infestation that can quickly worsen without professional treatment. Because cockroaches are highly adaptable and resistant to many DIY methods, effective extermination requires targeted solutions designed to eliminate the infestation at its source.",
          "At Dang Pest Control, we specialize in comprehensive cockroach control, using industry-leading treatments to eliminate roaches at every stage of their life cycle and prevent them from returning. Whether you're dealing with a minor issue or a full-blown infestation, we are here to help you reclaim your home or business from these unwanted pests.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Experienced Professionals", description: "Our skilled technicians have years of expertise in effectively handling cockroach exterminations. We're members of both the NPMA and the TPCA, ensuring we meet the highest industry standards." },
      { icon: comprehensive, title: "Environmentally Responsible Solutions", description: "We go beyond quick fixes. Using an Integrated Pest Management Plan, we tackle infestations while minimizing environmental impact, giving you long-lasting results you can trust." },
      { icon: safety, title: "Comprehensive Services", description: "Beyond cockroach pest control, we provide solutions for ants, spiders, wasps and hornets, scorpions, rodents, mosquitos, fleas and ticks, bed bugs, termites, and more." },
      { icon: guarantee, title: "Customer-Centered Approach", description: "Your satisfaction and peace of mind are our priority. We tailor our services to fit your needs, ensuring you feel confident and informed every step of the way." },
      { icon: superPowered, title: "Local Expertise", description: "We proudly serve Tyler, TX, and nearby areas including Longview, Jacksonville, Lindale, Bullard, and Whitehouse. We understand the unique challenges of pest control in our region." },
    ],
    bottomCTA: {
      title: "Get Started With Your Quote",
      text: "Dang Pest Control offers solutions designed to protect your home or property from cockroach infestations effectively. Located in Tyler, TX, we proudly serve the surrounding areas including Longview, Jacksonville, Lindale, Bullard, and Whitehouse. Whether it's cockroach extermination or another pest issue, we're here to provide fast, expert service. Don't wait – restore comfort and enjoyment to your property today.",
    },
  },
  "bed-bug-control": {
    title: "Bed Bug Control Services",
    subtitle: "Bed Bugs",
    heroImage: bedBugHero,
    heroAlt: "Bed Bug Pest Control Service in Tyler TX",
    intro: "When it comes to bed bug infestations, you need a reliable partner to restore your peace of mind—and your home. At Dang Pest Control, we specialize in effective, professional bed bug control services that eliminate bed bugs at every stage of their life cycle. Our expert technicians are ready to help you reclaim your home or property with advanced, eco-friendly treatments that deliver long-term results. We serve Tyler, TX, and the surrounding areas.",
    processTitle: "Our Bed Bug Control Process",
    processIntro: "Our bed bug pest control services follow a proven process to ensure your space is protected and pest-free.",
    steps: [
      { title: "Step 1", subtitle: "Inspection & Identification", icon: processStep1, description: "Our skilled technicians conduct a comprehensive inspection to identify bed bugs, locate their hiding spots, and determine how they entered your space." },
      { title: "Step 2", subtitle: "Integrated Pest Management Plan", icon: processStep2, description: "Using our in-depth expertise, we design an Integrated Pest Management Plan tailored to your specific needs. This step-by-step solution effectively eliminates bed bugs while minimizing disruption to your home or property." },
      { title: "Step 3", subtitle: "Thorough Treatment", icon: processStep3, description: "We use environmentally protective methods to eliminate every stage of the bed bug lifecycle—eggs, larvae, and adults. Limited preparation is required from you, and our process ensures long-term results." },
      { title: "Step 4", subtitle: "Monitoring & Follow-Up Care", icon: processStep4, description: "After treatment, we monitor the effectiveness of our solutions and conduct follow-ups if necessary. For your added peace of mind, we protect your space for up to 3 consecutive months post-treatment." },
    ],
    extraSections: [
      {
        title: "Your Solution to Bed Bug Infestations",
        content: [
          "Bed bugs are small, persistent pests that can wreak havoc on your home and peace of mind. Found in bedding, furniture, walls, and even clothing, these bugs spread easily, especially in high-traffic areas like multi-unit buildings or shared accommodations. Bed bug infestations require more than a quick fix—they demand a targeted, expert approach.",
        ],
      },
      {
        title: "Facts About Bed Bugs",
        content: [
          "Bed bugs are a common problem across the United States, impacting approximately 20% of homes and hotels each year. Studies show that one in five Americans has experienced a bed bug infestation or knows someone who has. Understanding these persistent pests is key to effective prevention and treatment.",
          "Our specialized bed bug extermination service includes a thorough inspection by highly trained technicians, followed by a targeted treatment plan that eliminates bed bugs at all stages of life—including eggs, larvae, and adults. With minimal preparation required on your part, our treatments are designed to provide long-lasting relief.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Comprehensive Bed Bug Control Services", description: "From detailed inspections to thorough treatments, we leave nothing to chance. Our experts understand the behavior of bed bugs and use proven techniques for complete eradication." },
      { icon: comprehensive, title: "Certified & Trusted Technicians", description: "Our team is part of the National Pest Management Association (NPMA) and Texas Pest Control Association (TPCA), ensuring you receive industry-leading service and expertise." },
      { icon: safety, title: "Environmentally Friendly Solutions", description: "We prioritize solutions that are effective yet environmentally protective. Bed bugs are no match for our process, and neither is your peace of mind." },
      { icon: guarantee, title: "Expertise Beyond Bed Bugs", description: "While we specialize in bed bug extermination, our services extend to a wide range of pests—including ants, spiders, termites, and more. We're your one-stop solution for pest control needs." },
      { icon: customPlans, title: "Local & Reliable Service", description: "We take pride in serving our neighbors in Tyler, Longview, Jacksonville, Lindale, Bullard, and Whitehouse." },
    ],
    whyChooseIntro: "When it comes to bed bug control, experience and expertise matter. Here's why homeowners, property managers, and business owners in Tyler, TX and surrounding areas trust us:",
    faqs: [
      { question: "How common are bed bugs?", answer: "The Southeast region of the U.S. has the highest concentration of bed bugs, accounting for 29% of the country's infestations. Bed bugs are common in places with a high turnover of people, like hotels and hostels." },
      { question: "How do bed bugs spread?", answer: "Bed bugs spread quickly by hitching a ride on people's clothing or luggage. They can be found in any environment where people are in large groups. Bed bugs can travel between rooms in multi-unit buildings, such as hotels and apartment complexes. They can also be carried by wild animals, such as bats or birds." },
      { question: "What are bed bugs like?", answer: "Bed bugs are small, flat, wingless insects that are reddish-brown in color. They are about the size of a Lincoln penny head. Bed bugs bite people and animals at night while they sleep." },
      { question: "Are bed bugs a sign of poor hygiene?", answer: "No. Bedbugs are attracted to warmth, blood, and carbon dioxide, not dirt." },
      { question: "What are the symptoms or side effects of bed bug bites?", answer: "The primary side effect of bed bug bites is intense itching at the bite site. These bites often appearing as red bumps in a line or cluster, which can lead to secondary skin infections from scratching. In some cases, allergic reactions including hives or swelling may occur. Additionally, severe infestations can cause sleep disturbances and anxiety due to the stress of being bitten repeatedly." },
      { question: "What does bed bug extermination include?", answer: "Our treatments include identifying the source of the infestation, an Integrated Pest Management Plan, and follow-up care to ensure long-term results. We target the full life cycle of bed bugs, including eggs, larvae, and adults." },
      { question: "How much preparation is required before your visit?", answer: "There is some preparation required by the customer prior to bed bug extermination services. House cleaning is suggested if you want to get the most benefit out of your bed bug extermination. These things are optional and can include: stripping and washing all bedding with high heat, washing draperies and clothing in hot water, sealing laundered items in plastic bags, and clearing out closets. Please refrain from vacuuming up bed bug carcasses or droppings, as these help technicians identify and target the infested areas." },
    ],
    bottomCTA: {
      title: "Get Your Free Quote",
      text: "Don't allow bed bugs to disrupt your life. Act now with Dang Pest Control's proven and effective bed bug control services. Located in Tyler, TX, we proudly serve Longview, Jacksonville, Lindale, Bullard, Whitehouse, and surrounding areas.",
    },
  },

  "snake-control": {
    title: "Snake Control & Prevention",
    subtitle: "snake control",
    heroImage: snakeHero,
    heroAlt: "Snake removal and control services in East Texas",
    intro: "East Texas is home to a wide variety of snakes—both venomous and non-venomous. While most snakes are harmless and even beneficial for controlling rodent populations, encountering a copperhead, cottonmouth, or rattlesnake near your home is a serious safety concern. Dang Pest Control provides professional snake identification, removal, and prevention services to keep your family and pets safe. Call us today at (903) 871-0550.",
    processTitle: "Our Snake Control Process",
    processIntro: "Our approach to snake control goes beyond simple removal. We identify the species, eliminate the conditions that attract snakes to your property, and create barriers to prevent their return.",
    steps: [
      {
        title: "Step 1",
        subtitle: "Property Inspection & Snake Identification",
        icon: processStep1,
        description: "Our trained technicians conduct a thorough inspection of your property—including the yard, foundation, crawl spaces, sheds, and woodpiles—to identify snake activity, entry points, and harborage areas. We identify the species involved so we can determine whether the snake is venomous and tailor our approach accordingly.",
      },
      {
        title: "Step 2",
        subtitle: "Habitat Modification & Exclusion",
        icon: processStep2,
        description: "Snakes are attracted to properties that offer food, water, and shelter. We address the root causes by recommending and implementing habitat modifications: clearing debris piles, sealing gaps in foundations, trimming overgrown vegetation, and eliminating rodent populations that serve as a food source for snakes.",
      },
      {
        title: "Step 3",
        subtitle: "Snake Removal & Deterrent Treatment",
        icon: processStep3,
        description: "If snakes are present on your property, our technicians safely remove them. We then apply professional-grade snake deterrent treatments around the perimeter of your home and key areas to discourage snakes from returning.",
      },
      {
        title: "Step 4",
        subtitle: "Ongoing Monitoring & Prevention",
        icon: processStep4,
        description: "Snake activity in East Texas peaks from spring through fall. We offer ongoing seasonal treatments and monitoring to ensure your property stays snake-free year-round. Our preventive approach addresses the conditions that draw snakes in before they become a problem.",
      },
    ],
    extraSections: [
      {
        title: "Venomous Snakes in East Texas",
        content: [
          "East Texas is home to four species of venomous snakes that pose a real danger to families and pets. Knowing which snakes are in your area is the first step to staying safe.",
          "Copperheads are the most commonly encountered venomous snake in East Texas. They have distinctive hourglass-shaped tan and brown bands and are often found in wooded areas, leaf litter, gardens, and near homes. Copperhead bites are painful and require immediate medical attention.",
          "Cottonmouths (Water Moccasins) are semi-aquatic pit vipers found near lakes, creeks, ponds, and drainage ditches throughout the region. They are aggressive when threatened and deliver a potent hemotoxic venom. They're identifiable by their thick, dark bodies and the white interior of their mouth.",
          "Timber Rattlesnakes are found in the wooded, hilly areas of East Texas. They are large, heavy-bodied snakes with distinctive rattles on their tails. While they generally avoid humans, they will strike if stepped on or cornered. Their venom is highly toxic and bites require emergency medical care.",
          "Texas Coral Snakes are less common but extremely dangerous. They have bright red, yellow, and black bands. Remember the rhyme: 'Red touches yellow, kills a fellow; red touches black, friend of Jack.' Coral snakes are reclusive but their neurotoxic venom is the most potent of any North American snake.",
        ],
        image: coralSnakeImg,
        imageAlt: "Texas coral snake with distinctive red, yellow and black bands",
      },
      {
        title: "Common Non-Venomous Snakes in East Texas",
        content: [
          "Not all snakes are dangerous. In fact, many snakes found in East Texas are beneficial because they help control rodent, insect, and other pest populations. However, even non-venomous snakes can be startling and unwelcome around your home.",
          "Texas Rat Snakes are among the most commonly seen snakes in the region. They are large—sometimes exceeding 5 feet—and are excellent climbers. They're often found in attics, barns, and chicken coops where they hunt rodents and eggs.",
          "Coachwhip snakes are fast-moving and can grow up to 6 feet long. They are not aggressive but will flee quickly when encountered. They are commonly seen in open fields and along roadsides.",
          "Rough Green Snakes are small, bright green, and completely harmless. They feed on insects and spiders and are frequently found in trees and shrubs near homes.",
          "While these snakes are harmless, their presence often indicates conditions that could also attract venomous species—such as rodent populations, dense vegetation, or standing water. Our team can assess your property and reduce the factors that attract all snake species.",
        ],
        image: rattlesnakeImg,
        imageAlt: "Snake commonly found in East Texas brush country",
      },
      {
        title: "Why Snakes Are Attracted to Your Property",
        content: [
          "Understanding why snakes show up on your property is key to keeping them away. Snakes don't seek out human contact—they're following food, water, and shelter.",
        ],
        bulletPoints: [
          "Rodent infestations — Mice and rats are a primary food source for many snake species. If you have a rodent problem, snakes will follow.",
          "Overgrown vegetation — Tall grass, dense shrubs, and unmaintained landscaping provide ideal cover for snakes.",
          "Woodpiles and debris — Stacked firewood, rock piles, leaf litter, and construction debris create perfect hiding spots.",
          "Standing water — Ponds, birdbaths, clogged gutters, and drainage issues attract cottonmouths and other water-loving species.",
          "Gaps in foundations and outbuildings — Cracks in foundations, unsealed crawl spaces, and gaps under sheds and porches allow snakes to enter structures.",
          "Chicken coops and pet food — Eggs and pet food left outside attract rodents, which in turn attract snakes.",
        ],
      },
    ],
    whyChooseUs: [
      { icon: provenResults, title: "Proven Snake Removal", description: "Our technicians are trained in safe snake identification and removal, including venomous species common to East Texas." },
      { icon: comprehensive, title: "Comprehensive Prevention", description: "We don't just remove snakes—we eliminate the conditions that attract them, including rodent control and habitat modification." },
      { icon: safety, title: "Family & Pet Safety", description: "All our treatments and methods are designed to protect your family and pets while effectively deterring snakes from your property." },
      { icon: guarantee, title: "Super Powered Guarantee", description: "Pests persist? No problem. We provide free re-treatments between regularly scheduled visits to keep your property protected." },
      { icon: localExperts, title: "Local East Texas Experts", description: "We know the snakes of East Texas. Our team has extensive experience dealing with copperheads, cottonmouths, rattlesnakes, and coral snakes specific to this region." },
      { icon: customPlans, title: "Custom Treatment Plans", description: "Every property is different. We develop tailored snake prevention plans based on your property's unique layout, landscaping, and risk factors." },
    ],
    whyChooseIntro: "Snake control requires specialized knowledge and experience. At Dang Pest Control, we combine expert identification, safe removal, and long-term prevention to give you peace of mind.",
    faqs: [
      { question: "What should I do if I see a snake on my property?", answer: "Do not attempt to handle or kill the snake—even non-venomous snakes can bite when threatened. Keep a safe distance, keep children and pets away, and call Dang Pest Control at (903) 871-0550. If you can safely take a photo from a distance, it can help us identify the species before arrival." },
      { question: "How can I tell if a snake is venomous?", answer: "In East Texas, venomous snakes (copperheads, cottonmouths, and rattlesnakes) are pit vipers with triangular-shaped heads, vertical slit pupils, and heat-sensing pits between their eyes and nostrils. Coral snakes are the exception—they have small, rounded heads but distinctive red, yellow, and black banding. When in doubt, treat every snake as potentially dangerous and call a professional." },
      { question: "Are snake repellents effective?", answer: "Over-the-counter snake repellents like mothballs and sulfur have limited effectiveness and can be toxic to pets and children. Professional-grade deterrent treatments applied strategically around your property are far more effective, especially when combined with habitat modification and rodent control." },
      { question: "What time of year are snakes most active in East Texas?", answer: "Snakes in East Texas are most active from April through October when temperatures are warm. They are especially active in spring when they emerge from brumation (winter dormancy) and in fall when they're seeking shelter. However, warm winter days can also bring snakes out of hiding." },
      { question: "Will removing snakes cause a rodent problem?", answer: "This is a common concern. Our integrated approach addresses both issues simultaneously. We control the rodent population that attracts snakes while also implementing snake prevention measures, so you don't trade one pest problem for another." },
      { question: "Do you kill the snakes you remove?", answer: "We prioritize humane removal and relocation of non-venomous snakes whenever possible, as they play an important role in the local ecosystem. Venomous snakes found in immediate proximity to living areas are handled according to the safety needs of the situation." },
      { question: "How do I snake-proof my yard?", answer: "Key steps include keeping grass mowed short, removing woodpiles and debris, sealing gaps in foundations and outbuildings, eliminating standing water, and addressing any rodent issues. Our technicians provide a detailed property assessment with specific recommendations tailored to your property." },
    ],
    bottomCTA: {
      title: "Keep Your Family Safe from Snakes",
      text: "Don't take chances with venomous snakes on your property. Dang Pest Control provides expert snake identification, removal, and prevention services throughout East Texas—including Tyler, Longview, Jacksonville, Lindale, Bullard, Whitehouse, and surrounding areas.",
    },
  },
};

export const serviceKeys = Object.keys(servicesData);
