import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { getStorage, ref, getDownloadURL, uploadBytes   } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyD-Ap9ghqkbS0p4dArg1w1NR8dyZM7GSUs",
  authDomain: "olx-web-app-3cc0b.firebaseapp.com",
  projectId: "olx-web-app-3cc0b",
  storageBucket: "olx-web-app-3cc0b.appspot.com",
  messagingSenderId: "840429672519",
  appId: "1:840429672519:web:bd63ce3fc083869b513962",
  measurementId: "G-E7F394ZBQ5"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export async function registerApp(user) {
  try {
    const {fullName, age, email, password, image} = user
    await createUserWithEmailAndPassword(auth, email,password,fullName, age,image);
    const storageRef = ref(storage, `users/${image.name}`);
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef)
    
    await addDoc(collection(db, "users"), {
      fullName,
      age,
      email,
      imageURL: url,
    });
    alert("Successfully registered");
    return true;  
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    throw error;
  }
}



export async function loginApp(user) {
  try {
    const {email, password} = user
    await signInWithEmailAndPassword(auth,email,password)
    alert("logged in successfully")
    return true;
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage)
    throw error;
  }
}

export async function  Ads(adsposted) {
  try {
    const {name, rs, title, brand, category, discription, image} = adsposted;
    const storageRef = ref(storage, `Posts/${image.name}`);
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef)
    await addDoc(collection(db, "Posts"), {
      name,
      rs,
      title,
      brand,
      category,
      discription,
      imageUrl:url
    });
    alert("Post added successfully")
    return true;
    
    
  } catch (e) {
    alert("Post added failed")
    throw e
  }

}


export async function getAds(){

  const querySnapshot = await getDocs(collection(db, "Posts"));
  const ads = []
querySnapshot.forEach((doc) => {
  const ad = doc.data()
  ad.id = doc.id
  ads.push(ad)

});

return ads

}


