import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, item) {
  try {
    const docRef = await addDoc(collection(db, "items"), {userId, item});
      return docRef.id;
      } catch (error) {
        console.error(error);
        }  
};

export async function getItems(userId) {
  try {
    const itemsQuery = query(collection(db, "items"), where("userId", "==", userId));
    const itemsSnapshot = await getDocs(itemsQuery);
    let shoppingList = [];
    itemsSnapshot.forEach((docSnap) => {
      shoppingList.push(docSnap.data());
      });
      return shoppingList;
      } catch (error) {
        console.error(error);  
}
}

