import { db } from "../Data/firebase";
import { collection, getDocs } from "firebase/firestore";
//collection ref
const colRef = collection(db, "Events");
//getting collection data
let events = [];
getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      events.push({ ...doc.data(), id: doc.id });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log(events);
export default events;
