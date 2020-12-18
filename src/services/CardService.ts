import { Campaign, LoreCard } from "../types";
import { db } from "./firebase";

async function getCards(campaign: Campaign): Promise<LoreCard[]> {
  const snapshot = await db
    .collection("campaigns")
    .doc(`campaign${campaign.id}`)
    .collection("cards")
    .get();
  return snapshot.docs.map((doc) => doc.data()) as LoreCard[];
}

export { getCards };
