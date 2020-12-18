import { Category } from "../types";
import { db } from "./firebase";

async function getCategories(): Promise<Category[]> {
  const snapshot = await db.collection("categories").get();
  console.log(snapshot.docs);
  return snapshot.docs.map((doc) => doc.data()) as Category[];
}

export { getCategories };
