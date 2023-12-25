import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";

import { db } from "./config";

export const createUserDocumentGithub = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const { docs } = await getDocs(q);

  if (docs.length === 0) {
    const { uid, displayName, email, photoURL, reloadUserInfo } = user;

    const docRef = doc(db, `users/${uid}`);
    await setDoc(docRef, {
      displayName,
      email,
      photoURL,
      uid: uid,
      username: reloadUserInfo.screenName,
      createdAt: serverTimestamp(),
    });
  }
};

export const createUserDocumentEmail = async (user, username, displayName) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const { docs } = await getDocs(q);

  if (docs.length === 0) {
    const { uid, email } = user;
    console.log(username);
    const docRef = doc(db, `users/${uid}`);
    await setDoc(docRef, {
      displayName: displayName,
      email,
      uid: uid,
      username: username,
      createdAt: serverTimestamp(),
    });
  }
};