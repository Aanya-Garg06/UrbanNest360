// // // src/hooks/useFavorites.js
// // import { useState, useEffect } from "react";
// // import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
// // import { db } from "../firebase";
// // import { useAuth } from "../context/AuthProvider";

// // export function useFavorites() {
// //   const { user } = useAuth();
// //   const [favorites, setFavorites] = useState([]);

// //   useEffect(() => {
// //     if (!user) {
// //       setFavorites([]);
// //       return;
// //     }

// //     const fetchFavorites = async () => {
// //       const docRef = doc(db, "users", user.uid);
// //       const docSnap = await getDoc(docRef);
// //       setFavorites(docSnap.exists() ? docSnap.data().favorites || [] : []);
// //     };
// //     fetchFavorites();
// //   }, [user]);

// //   const toggleFavorite = async (propertyId) => {
// //     if (!user) return;

// //     const docRef = doc(db, "users", user.uid);
// //     const isFav = favorites.includes(propertyId);

// //     try {
// //       if (isFav) {
// //         await updateDoc(docRef, { favorites: arrayRemove(propertyId) });
// //         setFavorites(prev => prev.filter(id => id !== propertyId));
// //       } else {
// //         const docSnap = await getDoc(docRef);
// //         if (docSnap.exists()) {
// //           await updateDoc(docRef, { favorites: arrayUnion(propertyId) });
// //         } else {
// //           await setDoc(docRef, { favorites: [propertyId] });
// //         }
// //         setFavorites(prev => [...prev, propertyId]);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   const isFavorite = (id) => favorites.includes(id);

// //   return { favorites, isFavorite, toggleFavorite };
// // }

// // src/hooks/useFavorites.js
// import { useState, useEffect } from "react";

// export function useFavorites() {
//   const [favorites, setFavorites] = useState([]);

//   const getToken = () => localStorage.getItem('token');

//   useEffect(() => {
//     const token = getToken();
//     if (!token) return;

//     fetch('http://localhost:5000/api/favorites', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => setFavorites(data.favorites || []))
//       .catch(err => console.error('Failed to fetch favorites:', err));
//   }, []);

//   const toggleFavorite = async (propertyId) => {
//     const token = getToken();
//     if (!token) return;

//     try {
//       const res = await fetch('http://localhost:5000/api/favorites/toggle', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ propertyId })
//       });
//       const data = await res.json();
//       setFavorites(data.favorites || []);
//     } catch (err) {
//       console.error('Failed to toggle favorite:', err);
//     }
//   };

//   const isFavorite = (id) => favorites.includes(id);

//   return { favorites, isFavorite, toggleFavorite };
// }

// src/hooks/useFavorites.js
import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const getToken = () => localStorage.getItem('token');

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    fetch('http://localhost:5000/api/favorites', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        
        setFavorites((data.favorites || []).map(id => String(id)));
      })
      .catch(err => console.error('Failed to fetch favorites:', err));
  }, []);

  const toggleFavorite = async (propertyId) => {
    const token = getToken();
    if (!token) return;

    
    const id = String(propertyId);

    try {
      const res = await fetch('http://localhost:5000/api/favorites/toggle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ propertyId: id })
      });
      const data = await res.json();
      
      setFavorites((data.favorites || []).map(id => String(id)));
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  
  const isFavorite = (id) => favorites.includes(String(id));

  return { favorites, isFavorite, toggleFavorite };
}