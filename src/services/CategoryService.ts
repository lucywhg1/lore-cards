import { Campaign, Category } from "../types";
import { db } from "./firebase";

async function getCategories(campaign: Campaign): Promise<Category[]> {
  const snapshot = await db
    .collection("campaigns")
    .doc(`campaign${campaign.id}`)
    .collection("categories")
    .get();

  return snapshot.docs.map((doc) => doc.data()) as Category[];
}

export { getCategories };
