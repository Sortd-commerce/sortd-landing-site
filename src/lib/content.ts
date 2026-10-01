export const ticker = [
  "No to big brands that cut corners",
  "No to fruit lacking sweetness and crunch",
  "No to eggs that skip lab tests",
];

export const gates = [
  { n: "01", q: "Is this worth evaluating?" },
  { n: "02", q: "Does it meet scientific standards?" },
  { n: "03", q: "Can we trust the supplier?" },
  { n: "04", q: "Would our experts recommend it?" },
];

export const categories = [
  { name: "Nut butter", src: "/photos/nut-butter.jpg" },
  { name: "Oats", src: "/photos/oats.jpg" },
  { name: "Porridge", src: "/photos/porridge.jpg" },
  { name: "Chia seeds", src: "/photos/chia.jpg" },
  { name: "Chips & crisps", src: "/photos/crisps.jpg" },
  { name: "Energy bars", src: "/photos/energy-bars.jpg" },
  { name: "Chocolates", src: "/photos/chocolates.jpg" },
  { name: "Protein bars", src: "/photos/protein-bars.jpg" },
  { name: "Peanuts", src: "/photos/peanuts.jpg" },
  { name: "Soda", src: "/photos/soda.jpg" },
  { name: "Juices", src: "/photos/juices.jpg" },
  { name: "Electrolytes", src: "/photos/electrolytes.jpg" },
  { name: "Pulses", src: "/photos/pulses.jpg" },
  { name: "Cooking oil", src: "/photos/cooking-oil.jpg" },
  { name: "Pasta", src: "/photos/pasta.jpg" },
  { name: "Khapli atta", src: "/photos/atta.jpg" },
  { name: "Sauces & spreads", src: "/photos/sauces.jpg" },
];

export const bans = [
  {
    id: "sugars",
    label: "Sugars",
    src: "/photos/ban-0.jpg",
    alt: "Hidden sugars. Maltodextrin, invert syrup, dextrose, and high-fructose corn syrup. Found in cereals, flavoured yoghurt, bars, and sauces.",
  },
  {
    id: "fats",
    label: "Fats",
    src: "/photos/ban-1.jpg",
    alt: "Disguised fats. Palm oil, palm olein, hydrogenated fats, and interesterified fats. Found in biscuits, noodles, spreads, and bakery fats.",
  },
  {
    id: "hormones",
    label: "Hormones",
    src: "/photos/ban-2.jpg",
    alt: "Growth hormones. rBST and rBGH in undeclared or untested dairy.",
  },
  {
    id: "sweeteners",
    label: "Sweeteners",
    src: "/photos/ban-3.jpg",
    alt: "Artificial sweeteners. Aspartame, sucralose, acesulfame K, and saccharin. Found in diet drinks, sugar-free sweets, and protein powders.",
  },
  {
    id: "preservatives",
    label: "Preservatives",
    src: "/photos/ban-4.jpg",
    alt: "Synthetic preservatives. Sodium benzoate, BHA, BHT, and sodium nitrite. Found in soft drinks, bread, cured meats, and sauces.",
  },
  {
    id: "colours",
    label: "Colours",
    src: "/photos/ban-5.jpg",
    alt: "Artificial colours. Tartrazine, Sunset Yellow, Carmoisine, and Ponceau 4R. Found in sweets, soft drinks, icing, and savoury snacks.",
  },
];

export const comparisons = [
  { name: "Sauce", src: "/photos/cmp-sauce.jpg", offset: false },
  { name: "Peanut butter", src: "/photos/cmp-peanut.jpg", offset: true },
  { name: "Dark chocolate", src: "/photos/cmp-chocolate.jpg", offset: false },
  { name: "Crisps", src: "/photos/cmp-crisps.jpg", offset: false },
  { name: "Energy bars", src: "/photos/cmp-energy.jpg", offset: true },
  { name: "Oil", src: "/photos/cmp-oil.jpg", offset: false },
];

export const pillars = [
  {
    src: "/photos/card-choose.jpg",
    alt: "Choose better. What goes in the basket matters. We choose products for what is actually in them, not for what the front of the pack says.",
    href: "#vet",
  },
  {
    src: "/photos/card-know.jpg",
    alt: "Know better. Good food starts with a good label. Every product is checked past the claim — ingredients, nutrition, sourcing and lab results.",
    href: "#bans",
  },
  {
    src: "/photos/card-feel.jpg",
    alt: "Feel better. Less guesswork. More good food. If it is on Sortd, it already passed.",
    href: "#products",
  },
];
