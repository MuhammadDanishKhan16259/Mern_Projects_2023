import app from "./FirebaseConfig";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  remove,
  push,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// import {
//   getStorage,
//   uploadBytesResumable,
//   getDownloadURL,
//   ref as sRef,
// } from "firebase/storage";

const auth = getAuth(app);
// const storage = getStorage();
const db = getDatabase();

function createUser({ email, password }) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set(ref(db, "users/" + user.uid), {
          email: email,
          password: password,
        })
          .then(() => {
            resolve("User account is created successfully");
          })
          .catch(() => {
            reject("User account not created");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode, errorMessage);
      });
  });
}

function signInUser({ email, password }) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        resolve("login successfully");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
}

function signOutUser() {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        reject(error);
      });
  });
}

function user_is_signin() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(user);
      } else {
        // User is signed out
        reject("user is signed out");
      }
    });
  });
}

function addItem(obj, rootName) {
  return new Promise((resolve, reject) => {
    obj.key = push(ref(db, rootName)).key;
    let reference = ref(db, `${rootName}/${obj.key}`);

    set(reference, obj)
      .then(() => {
        resolve(obj);
      })
      .catch(() => {
        reject("Something is wrong");
      });
  });
}

function getItem(rootName, id) {
  return new Promise((resolve, reject) => {
    let reference;
    if (id) {
      reference = ref(db, `${rootName}/${id}`);
    } else {
      reference = ref(db, rootName);
    }
    onValue(reference, (snapshort) => {
      if (snapshort.exists) {
        resolve(snapshort.val());
      } else {
        reject("Something is wrong");
      }
    });
  });
}

function updateItem(obj, rootName, id) {
  return new Promise((resolve, reject) => {
    let reference = ref(db, `${rootName}/${id}`);
    update(reference, obj)
      .then(() => {
        resolve("data send successfully");
      })
      .catch(() => {
        reject("data not send");
      });
  });
}

function deleteItem(rootName, id) {
  return new Promise((resolve, reject) => {
    let reference = ref(db, `${rootName}/${id}`);
    remove(reference)
      .then(() => {
        resolve("successfully deleted");
      })
      .catch(() => {
        reject("something is wrong");
      });
  });
}

function deleteAllItem(rootName) {
  return new Promise((resolve, reject) => {
    let reference = ref(db, rootName);
    remove(reference)
      .then(() => {
        resolve("All item is deleted");
      })
      .catch(() => {
        reject("Something is wrong");
      });
  });
}

// function uploadImage(file) {
//   console.log(file)
//   const storageRef = sRef(storage, `images/${file.name}`);

//   const uploadTask = uploadBytesResumable(storageRef, file);

//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//       // switch (snapshot.state) {
//       //   case "paused":
//       //     console.log("Upload is paused");
//       //     break;
//       //   case "running":
//       //     console.log("Upload is running");
//       //     break;
//       // }
//     },
//     (error) => {
//       // Handle unsuccessful uploads
//       console.log(error);
//     },
//     () => {
//       // Handle successful uploads on complete
//       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log("File available at", downloadURL);

//         let keyGenerate = push(ref(db, "images")).key;
//         let reference = ref(db, `images/${keyGenerate}`);

//         set(reference, {
//           image: downloadURL,
//           key: keyGenerate,
//         })
//           .then(() => console.log("successfully set"))
//           .catch(() => console.log("something is wrong"));
//       });
//     }
//   );
// }

export {
  createUser,
  signInUser,
  signOutUser,
  user_is_signin,
  addItem,
  getItem,
  updateItem,
  deleteItem,
  deleteAllItem,
  // uploadImage,
};
