export interface FoodProps {
  img: string;
  alt: string;
  title: string;
  bg: string;
}

export const FOOD: FoodProps[] = [
  {
    img: "rice",
    alt: "rice",
    title: "Breakfast",
    bg: "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);",
  },
  {
    img: "cabbage",
    alt: "healthy tasty cabbage mmm",
    title: "vegan",
    bg: "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);",
  },
  {
    img: "meat",
    alt: "not very healthy",
    title: "Meat",
    bg: "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);",
  },
  {
    img: "cake",
    alt: "be strong enaugh to refuse",
    title: "Deserts",
    bg: "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);",
  },
  {
    img: "sandwitsh",
    alt: "breakfast right here",
    title: "Lunch",
    bg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);",
  },
  {
    img: "chocolate",
    alt: "only dark can be added here :)",
    title: "Chocolate",
    bg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);",
  },
];
