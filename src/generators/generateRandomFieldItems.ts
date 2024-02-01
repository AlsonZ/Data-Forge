import { itemTypes } from "~/constants/words";

const generateRandomFieldItem = (type: string, min = 1, max = 20) => {
  let generatedItem = "";
  let count = 0;
  const maxLoop = 20;
  const itemType = itemTypes[type];
  if (itemType !== undefined) {
    while (
      !(generatedItem.length >= min && generatedItem.length <= max) &&
      count <= maxLoop
    ) {
      generatedItem = itemType[Math.floor(Math.random() * itemType.length)]!;
      count++;
    }
  }
  // Todo
  // Inform user about not enough names within proided range
  // Or return empty string
  return generatedItem;
};

export { generateRandomFieldItem };
