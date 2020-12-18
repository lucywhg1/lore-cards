import { Category } from "../types";
import { db } from "./firebase";

async function getCategories(): Promise<Category[]> {
  const data = db.collection("campaigns").doc("categories").get();
  console.log(data);

  return [];
}

export { getCategories };
