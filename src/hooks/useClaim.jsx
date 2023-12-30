// import the necessary functions from Firebase
import { db, auth } from "../firebase/config";
import { getDoc, updateDoc, setDoc, doc } from "firebase/firestore";

// define the Claim function
const Claim = async (score, type) => {
  try {
    // check for authentication
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not authenticated");
    }

    // access the user's document in Firestore
    const userDocRef = doc(db, "users", user.uid);
    const snapshot = await getDoc(userDocRef);

    // update scores based on existing data and type
    let existingPoints = 0;
    let existingCorrectAnswers = 0;

    if (snapshot.exists()) {
      existingCorrectAnswers = snapshot.data().correctAnswers;
      existingPoints = snapshot.data().points;
      await updateDoc(userDocRef, {
        points: (type === "Basic" ? score * 2 : score) + existingPoints,
        correctAnswers: score + existingCorrectAnswers,
      });
    } else {
      await setDoc(userDocRef, { points: 0, correctAnswers: 0 });
    }

    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error fetching or updating user data:", error.message);
  }
};

// export the function for use in other components
export default Claim;
