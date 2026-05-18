

// // // import React, { useEffect, useState } from "react";

// // // export default function PostHistoryPage() {
// // //   const [properties, setProperties] = useState([]);
// // //   const [currentImages, setCurrentImages] = useState([]);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [modalOpen, setModalOpen] = useState(false);

// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/user-properties")
// // //       .then(res => res.json())
// // //       .then(data => setProperties(data.properties || data))
// // //       .catch(() => setProperties([]));
// // //   }, []);

// // //   const formatPrice = (price) => {
// // //     const num = parseFloat(price);
// // //     return isNaN(num) ? `₹${price}` : `₹${num.toLocaleString("en-IN")}`;
// // //   };

// // //   const openImageGallery = (images = [], index = 0) => {
// // //     setCurrentImages(images);
// // //     setCurrentIndex(index);
// // //     setModalOpen(true);
// // //     document.body.style.overflow = "hidden";
// // //   };

// // //   const closeModal = () => {
// // //     setModalOpen(false);
// // //     document.body.style.overflow = "auto";
// // //   };

// // //   const nextImage = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % currentImages.length);
// // //   };

// // //   const prevImage = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
// // //   };

// // //   const deleteProperty = async (id) => {
// // //     if (!window.confirm("Delete this property?")) return;

// // //     try {
// // //       await fetch(`http://localhost:5000/api/user-properties/${id}`, { method: "DELETE" });
// // //       setProperties(prev => prev.filter(p => p.id !== id));
// // //       alert("Deleted!");
// // //     }catch {
// // //       alert("Delete failed.");
// // //     }

// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#DDA15E]/20 to-gray-50">
// // //       <div className="container mx-auto px-4 py-8 md:py-12">
// // //         <div className="mb-8 md:mb-12 text-center">
// // //           <h1 className="text-3xl md:text-4xl font-bold text-[#BC6C25] mb-3">
// // //             Your Posted Properties
// // //           </h1>
// // //           <p className="text-gray-600">
// // //             {properties.length === 0 ? "No properties posted yet" : `${properties.length} listed`}
// // //           </p>
// // //         </div>

// // //         {properties.length === 0 ? (
// // //           <div className="flex flex-col items-center justify-center py-24 bg-gray-100 rounded-xl max-w-2xl mx-auto text-center">
// // //             <svg className="w-20 h-20 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
// // //             </svg>
// // //             <h2 className="text-2xl font-semibold text-gray-800 mb-2">No properties yet</h2>
// // //             <p className="text-gray-600">Post your first property to see it here</p>
// // //           </div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
// // //             {properties.map((p) => {
// // //               const images = p.images || [];

// // //               return (
// // //                 <div key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
// // //                   <div
// // //                     className="relative h-56 bg-gray-200 overflow-hidden cursor-pointer"
// // //                     onClick={() => openImageGallery(images, 0)}
// // //                   >
// // //                     {images.length > 0 ? (
// // //                       <>
// // //                         <img src={images[0]} alt={p.title} className="w-full h-full object-cover" />
// // //                         {images.length > 1 && (
// // //                           <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
// // //                             +{images.length - 1}
// // //                           </span>
// // //                         )}
// // //                       </>
// // //                     ) : (
// // //                       <div className="w-full h-full flex items-center justify-center bg-[#DDA15E]/20">
// // //                         <svg className="w-16 h-16 text-[#BC6C25]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
// // //                         </svg>
// // //                       </div>
// // //                     )}
// // //                   </div>

// // //                   <div className="p-5">
// // //                     <div className="mb-3">
// // //                       <div className="flex items-start justify-between gap-2 mb-2">
// // //                         <h2 className="text-lg font-bold text-gray-800 flex-1 line-clamp-1">{p.title}</h2>
// // //                         <span className="bg-[#BC6C25]/10 text-[#BC6C25] border border-[#BC6C25]/20 text-sm px-3 py-1 rounded-full flex-shrink-0">
// // //                           {p.category === "sell" ? "For Sale" : "For Rent"}
// // //                         </span>
// // //                       </div>

// // //                       <p className="text-xl font-bold text-[#BC6C25] mb-3">
// // //                         {formatPrice(p.price)} {p.category === "sell" ? "" : "/ month"}
// // //                       </p>

// // //                       <div className="flex items-start gap-2 mb-3">
// // //                         <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                         </svg>
// // //                         <p className="text-sm text-gray-700">{p.location}</p>
// // //                       </div>

// // //                       {p.amenities && p.amenities.length > 0 && (
// // //                         <p className="text-sm text-gray-500 truncate">{p.amenities.join(", ")}</p>
// // //                       )}
// // //                     </div>

// // //                     <div className="pt-4 border-t border-gray-200 flex justify-end">
// // //                       <button
// // //                         onClick={() => deleteProperty(p.id)}
// // //                         className="border border-red-500/50 text-red-500 hover:bg-red-50 text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
// // //                       >
// // //                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // //                         </svg>
// // //                         Delete
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {modalOpen && (
// // //         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
// // //           <button onClick={closeModal} className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300">&times;</button>
// // //           <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300">&#8249;</button>
// // //           <div className="max-w-4xl max-h-screen p-4">
// // //             <img src={currentImages[currentIndex]} alt="" className="max-w-full max-h-[90vh] object-contain" />
// // //             <p className="text-white text-center mt-4 text-lg">
// // //               {currentIndex + 1} / {currentImages.length}
// // //             </p>
// // //           </div>
// // //           <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300">&#8250;</button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // src/components/PostHistoryPage.jsx
// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function PostHistoryPage() {
// //   const navigate = useNavigate();
// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentImages, setCurrentImages] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [deletingId, setDeletingId] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       alert("Please login to view your properties");
// //       navigate("/login");
// //       return;
// //     }

// //     // ✅ FIXED: Send auth token → backend returns only THIS user's properties
// //     fetch("http://localhost:5000/api/user-properties", {
// //       headers: { "Authorization": `Bearer ${token}` }
// //     })
// //       .then(res => {
// //         if (!res.ok) throw new Error(`Server error: ${res.status}`);
// //         return res.json();
// //       })
// //       .then(data => {
// //         const list = Array.isArray(data) ? data : (data.properties || []);
// //         setProperties(list);
// //         setLoading(false);
// //       })
// //       .catch(err => {
// //         console.error("Fetch error:", err);
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //   }, [navigate]);

// //   const formatPrice = (price, forType) => {
// //     const num = parseFloat(price);
// //     const formatted = isNaN(num) ? price : num.toLocaleString("en-IN");
// //     return `₹${formatted}${forType === 'rent' ? ' / month' : ''}`;
// //   };

// //   const openImageGallery = (images = [], index = 0) => {
// //     if (images.length === 0) return;
// //     setCurrentImages(images);
// //     setCurrentIndex(index);
// //     setModalOpen(true);
// //     document.body.style.overflow = "hidden";
// //   };

// //   const closeModal = () => {
// //     setModalOpen(false);
// //     document.body.style.overflow = "auto";
// //   };

// //   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % currentImages.length);
// //   const prevImage = () => setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

// //   const deleteProperty = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this property?")) return;
// //     setDeletingId(id);
// //     const token = localStorage.getItem('token');
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/user-properties/${id}`, {
// //         method: "DELETE",
// //         headers: { "Authorization": `Bearer ${token}` }
// //       });
// //       if (!res.ok) throw new Error("Delete failed");
// //       setProperties(prev => prev.filter(p => p.id !== id));
// //     } catch {
// //       alert("Delete failed. Please try again.");
// //     } finally {
// //       setDeletingId(null);
// //     }
// //   };

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (!modalOpen) return;
// //       if (e.key === 'ArrowRight') nextImage();
// //       if (e.key === 'ArrowLeft') prevImage();
// //       if (e.key === 'Escape') closeModal();
// //     };
// //     window.addEventListener('keydown', handler);
// //     return () => window.removeEventListener('keydown', handler);
// //   }, [modalOpen, currentImages.length]);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
// //         .history-page { font-family: 'DM Sans', sans-serif; }
// //         .playfair { font-family: 'Playfair Display', serif; }
// //         .prop-card {
// //           background: white; border-radius: 20px;
// //           box-shadow: 0 2px 16px rgba(0,0,0,0.07);
// //           overflow: hidden; transition: all 0.3s;
// //           border: 1px solid #f0e6dc;
// //         }
// //         .prop-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
// //         .delete-btn {
// //           display: flex; align-items: center; gap: 8px;
// //           padding: 11px 20px; border-radius: 10px;
// //           border: 2px solid #fecaca; background: white;
// //           color: #ef4444; font-weight: 600; font-size: 15px;
// //           cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
// //         }
// //         .delete-btn:hover:not(:disabled) { background: #fef2f2; border-color: #ef4444; }
// //         .delete-btn:disabled { opacity: 0.5; cursor: not-allowed; }
// //         .view-btn {
// //           display: flex; align-items: center; gap: 8px;
// //           padding: 11px 20px; border-radius: 10px;
// //           border: 2px solid #e8d5c0; background: white;
// //           color: #BC6C25; font-weight: 600; font-size: 15px;
// //           cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
// //         }
// //         .view-btn:hover { background: #fff8f2; border-color: #BC6C25; }
// //         .stat-pill {
// //           display: inline-flex; align-items: center; gap: 5px;
// //           padding: 6px 12px; background: #fffaf5;
// //           border: 1.5px solid #f0e6dc; border-radius: 8px;
// //           font-size: 14px; font-weight: 500; color: #5c3d1e;
// //         }
// //         .post-btn {
// //           display: inline-flex; align-items: center; gap: 10px;
// //           padding: 14px 32px; background: #BC6C25; color: white;
// //           border-radius: 12px; font-weight: 700; font-size: 16px;
// //           cursor: pointer; border: none; transition: all 0.2s;
// //           font-family: 'DM Sans', sans-serif;
// //         }
// //         .post-btn:hover { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(188,108,37,0.35); }
// //         .modal-arrow {
// //           position: absolute; top: 50%; transform: translateY(-50%);
// //           width: 52px; height: 52px; border-radius: 50%;
// //           background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3);
// //           color: white; font-size: 26px; display: flex; align-items: center;
// //           justify-content: center; cursor: pointer; transition: all 0.2s;
// //         }
// //         .modal-arrow:hover { background: rgba(255,255,255,0.28); }
// //         @keyframes spin { to { transform: rotate(360deg); } }
// //         @media (max-width: 600px) {
// //           .card-actions { flex-direction: column !important; }
// //           .card-actions button { width: 100%; justify-content: center; }
// //         }
// //       `}</style>

// //       <div className="history-page min-h-screen" style={{background: 'linear-gradient(180deg, #fdf6ee 0%, #f5ece0 100%)'}}>

// //         {/* Header */}
// //         <div style={{background: 'linear-gradient(135deg, #3d1f08 0%, #6b3410 50%, #BC6C25 100%)', padding: '40px 20px 80px', position: 'relative', overflow: 'hidden'}}>
// //           <div style={{position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)'}}/>
// //           <div style={{position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)'}}/>
// //           <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
// //             <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20}}>
// //               <div>
// //                 <p style={{color: '#DDA15E', fontWeight: 600, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10}}>My Dashboard</p>
// //                 <h1 className="playfair" style={{color: 'white', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 8}}>
// //                   Your Listed Properties
// //                 </h1>
// //                 {!loading && !error && (
// //                   <p style={{color: '#e8c9a0', fontSize: 16}}>
// //                     {properties.length === 0 ? "No properties listed yet" : `${properties.length} active listing${properties.length > 1 ? 's' : ''}`}
// //                   </p>
// //                 )}
// //               </div>
// //               <button className="post-btn" onClick={() => navigate('/post-property')}>
// //                 + Post New Property
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Content */}
// //         <div style={{maxWidth: 1100, margin: '-44px auto 60px', padding: '0 20px', position: 'relative', zIndex: 2}}>

// //           {/* Loading */}
// //           {loading && (
// //             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', gap: 20}}>
// //               <div style={{width: 52, height: 52, border: '4px solid #f0e6dc', borderTopColor: '#BC6C25', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/>
// //               <p style={{color: '#BC6C25', fontWeight: 600, fontSize: 17}}>Loading your listings...</p>
// //             </div>
// //           )}

// //           {/* Error */}
// //           {!loading && error && (
// //             <div style={{background: 'white', borderRadius: 24, padding: 40, textAlign: 'center', boxShadow: '0 4px 30px rgba(0,0,0,0.08)'}}>
// //               <div style={{fontSize: 48, marginBottom: 16}}>⚠️</div>
// //               <h3 style={{fontSize: 22, fontWeight: 700, color: '#3d1f08', marginBottom: 8}}>Could not load listings</h3>
// //               <p style={{color: '#8a6a54', fontSize: 16, marginBottom: 24}}>{error}</p>
// //               <button className="post-btn" onClick={() => window.location.reload()}>Try Again</button>
// //             </div>
// //           )}

// //           {/* Empty */}
// //           {!loading && !error && properties.length === 0 && (
// //             <div style={{background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', textAlign: 'center'}}>
// //               <div style={{width: 120, height: 120, background: '#fff8f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, marginBottom: 24}}>🏠</div>
// //               <h2 className="playfair" style={{fontSize: 28, fontWeight: 700, color: '#3d1f08', marginBottom: 10}}>No listings yet</h2>
// //               <p style={{color: '#8a6a54', fontSize: 17, marginBottom: 32, maxWidth: 400}}>Post your first property and start connecting with buyers and renters across India.</p>
// //               <button className="post-btn" onClick={() => navigate('/post-property')}>🚀 Post Your First Property</button>
// //             </div>
// //           )}

// //           {/* Grid */}
// //           {!loading && !error && properties.length > 0 && (
// //             <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24}}>
// //               {properties.map((p) => {
// //                 // ✅ FIXED: reads p.for from DB correctly; falls back if needed
// //                 const forType = p.for || (p.category === 'sell' ? 'buy' : 'rent');
// //                 const images = p.images || [];
// //                 const coverImg = images[0] || p.img || null;

// //                 return (
// //                   <div key={p.id} className="prop-card">

// //                     {/* Image */}
// //                     <div style={{position: 'relative', height: 220, background: '#f5ece0', cursor: images.length > 0 ? 'pointer' : 'default', overflow: 'hidden'}}
// //                       onClick={() => openImageGallery(images, 0)}>
// //                       {coverImg ? (
// //                         <img src={coverImg} alt={p.title}
// //                           style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s'}}
// //                           onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
// //                           onMouseOut={e => e.target.style.transform = 'scale(1)'}
// //                         />
// //                       ) : (
// //                         <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8}}>
// //                           <span style={{fontSize: 48}}>🏠</span>
// //                           <p style={{color: '#b59a85', fontSize: 15}}>No photos uploaded</p>
// //                         </div>
// //                       )}

// //                       {/* Badge */}
// //                       <div style={{position: 'absolute', top: 14, left: 14}}>
// //                         <span style={{
// //                           display: 'inline-flex', alignItems: 'center', gap: 5,
// //                           padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700,
// //                           background: forType === 'rent' ? '#eff6ff' : '#f0fdf4',
// //                           color: forType === 'rent' ? '#2563eb' : '#16a34a',
// //                           border: `1.5px solid ${forType === 'rent' ? '#bfdbfe' : '#bbf7d0'}`,
// //                         }}>
// //                           {forType === 'rent' ? '🔑 For Rent' : '🏷️ For Sale'}
// //                         </span>
// //                       </div>

// //                       {images.length > 1 && (
// //                         <div style={{position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.65)', color: 'white', fontSize: 13, fontWeight: 600, padding: '4px 10px', borderRadius: 20, backdropFilter: 'blur(4px)'}}>
// //                           📷 {images.length}
// //                         </div>
// //                       )}
// //                     </div>

// //                     {/* Content */}
// //                     <div style={{padding: '20px 22px'}}>
// //                       <h2 style={{fontSize: 18, fontWeight: 700, color: '#3d1f08', marginBottom: 6, lineHeight: 1.35,
// //                         overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
// //                         {p.title}
// //                       </h2>

// //                       <p style={{fontSize: 22, fontWeight: 800, color: '#BC6C25', marginBottom: 14, fontFamily: 'Playfair Display, serif'}}>
// //                         {formatPrice(p.price, forType)}
// //                       </p>

// //                       {(p.location || p.city) && (
// //                         <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, color: '#6b4c30', fontSize: 15}}>
// //                           <span>📍</span>
// //                           <span style={{fontWeight: 500}}>{p.location || `${p.city}${p.state ? ', ' + p.state : ''}`}</span>
// //                         </div>
// //                       )}

// //                       <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14}}>
// //                         {p.type && <span className="stat-pill">🏗️ {p.type}</span>}
// //                         {p.beds && <span className="stat-pill">🛏️ {p.beds} BHK</span>}
// //                         {p.area && <span className="stat-pill">📐 {parseInt(p.area).toLocaleString()} sqft</span>}
// //                       </div>

// //                       {p.amenities?.length > 0 && (
// //                         <p style={{fontSize: 14, color: '#9a7a64', marginBottom: 16, lineHeight: 1.5}}>
// //                           ✨ {p.amenities.slice(0, 4).join(' • ')}{p.amenities.length > 4 ? ` +${p.amenities.length - 4} more` : ''}
// //                         </p>
// //                       )}

// //                       <div className="card-actions" style={{display: 'flex', gap: 10, paddingTop: 14, borderTop: '1.5px solid #f0e6dc'}}>
// //                         {images.length > 0 && (
// //                           <button className="view-btn" style={{flex: 1}} onClick={() => openImageGallery(images, 0)}>
// //                             🖼️ View Photos
// //                           </button>
// //                         )}
// //                         <button className="delete-btn" disabled={deletingId === p.id} onClick={() => deleteProperty(p.id)}>
// //                           {deletingId === p.id ? (
// //                             <><div style={{width: 16, height: 16, border: '2px solid #fecaca', borderTopColor: '#ef4444', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/> Deleting...</>
// //                           ) : (
// //                             <><svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg> Delete</>
// //                           )}
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       {modalOpen && (
// //         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20}}
// //           onClick={closeModal}>
// //           <div style={{position: 'relative', maxWidth: 900, width: '100%'}} onClick={e => e.stopPropagation()}>

// //             <button onClick={closeModal} style={{position: 'absolute', top: -52, right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: 40, cursor: 'pointer', lineHeight: 1}}>×</button>

// //             <img src={currentImages[currentIndex]} alt="" style={{width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 12, display: 'block'}} />

// //             <p style={{color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: 14, fontSize: 14}}>
// //               {currentIndex + 1} / {currentImages.length} &nbsp;·&nbsp; ← → to navigate &nbsp;·&nbsp; Esc to close
// //             </p>

// //             {currentImages.length > 1 && (
// //               <>
// //                 <button className="modal-arrow" style={{left: -68}} onClick={prevImage}>‹</button>
// //                 <button className="modal-arrow" style={{right: -68}} onClick={nextImage}>›</button>
// //               </>
// //             )}

// //             {currentImages.length > 1 && (
// //               <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14, flexWrap: 'wrap'}}>
// //                 {currentImages.map((src, i) => (
// //                   <img key={i} src={src} onClick={() => setCurrentIndex(i)}
// //                     style={{width: 56, height: 44, objectFit: 'cover', borderRadius: 8, cursor: 'pointer',
// //                       border: `2px solid ${i === currentIndex ? '#BC6C25' : 'transparent'}`,
// //                       opacity: i === currentIndex ? 1 : 0.55, transition: 'all 0.2s'}} />
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PostHistoryPage() {
//   const navigate = useNavigate();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [deletingId, setDeletingId] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert("Please login to view your properties");
//       navigate("/login");
//       return;
//     }

//     fetch("http://localhost:5000/api/user-properties", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//       .then(res => {
//         if (!res.ok) throw new Error(`Server error: ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         const list = Array.isArray(data) ? data : (data.properties || []);
//         setProperties(list);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [navigate]);

//   const formatPrice = (price, forType) => {
//     const num = parseFloat(price);
//     const formatted = isNaN(num) ? price : num.toLocaleString("en-IN");
//     return `₹${formatted}${forType === 'rent' ? ' / month' : ''}`;
//   };

//   const openImageGallery = (images = [], index = 0) => {
//     if (images.length === 0) return;
//     setCurrentImages(images);
//     setCurrentIndex(index);
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % currentImages.length);
//   const prevImage = () => setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

//   const deleteProperty = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this property?")) return;
//     setDeletingId(id);
//     const token = localStorage.getItem('token');
//     try {
//       const res = await fetch(`http://localhost:5000/api/user-properties/${id}`, {
//         method: "DELETE",
//         headers: { "Authorization": `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Delete failed");
//       setProperties(prev => prev.filter(p => String(p._id) !== String(id)));
//     } catch {
//       alert("Delete failed. Please try again.");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       if (!modalOpen) return;
//       if (e.key === 'ArrowRight') nextImage();
//       if (e.key === 'ArrowLeft') prevImage();
//       if (e.key === 'Escape') closeModal();
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, [modalOpen, currentImages.length]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
//         .history-page { font-family: 'DM Sans', sans-serif; }
//         .playfair { font-family: 'Playfair Display', serif; }
//         .prop-card { background: white; border-radius: 20px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); overflow: hidden; transition: all 0.3s; border: 1px solid #f0e6dc; }
//         .prop-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
//         .delete-btn { display: flex; align-items: center; gap: 8px; padding: 11px 20px; border-radius: 10px; border: 2px solid #fecaca; background: white; color: #ef4444; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .delete-btn:hover:not(:disabled) { background: #fef2f2; border-color: #ef4444; }
//         .delete-btn:disabled { opacity: 0.5; cursor: not-allowed; }
//         .view-btn { display: flex; align-items: center; gap: 8px; padding: 11px 20px; border-radius: 10px; border: 2px solid #e8d5c0; background: white; color: #BC6C25; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .view-btn:hover { background: #fff8f2; border-color: #BC6C25; }
//         .stat-pill { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; background: #fffaf5; border: 1.5px solid #f0e6dc; border-radius: 8px; font-size: 14px; font-weight: 500; color: #5c3d1e; }
//         .post-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; background: #BC6C25; color: white; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; border: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .post-btn:hover { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(188,108,37,0.35); }
//         .modal-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); color: white; font-size: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
//         .modal-arrow:hover { background: rgba(255,255,255,0.28); }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @media (max-width: 600px) { .card-actions { flex-direction: column !important; } .card-actions button { width: 100%; justify-content: center; } }
//       `}</style>

//       <div className="history-page min-h-screen" style={{background: 'linear-gradient(180deg, #fdf6ee 0%, #f5ece0 100%)'}}>

//         {/* Header */}
//         <div style={{background: 'linear-gradient(135deg, #3d1f08 0%, #6b3410 50%, #BC6C25 100%)', padding: '40px 20px 80px', position: 'relative', overflow: 'hidden'}}>
//           <div style={{position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)'}}/>
//           <div style={{position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)'}}/>
//           <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
//             <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20}}>
//               <div>
//                 <p style={{color: '#DDA15E', fontWeight: 600, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10}}>My Dashboard</p>
//                 <h1 className="playfair" style={{color: 'white', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 8}}>
//                   Your Listed Properties
//                 </h1>
//                 {!loading && !error && (
//                   <p style={{color: '#e8c9a0', fontSize: 16}}>
//                     {properties.length === 0 ? "No properties listed yet" : `${properties.length} active listing${properties.length > 1 ? 's' : ''}`}
//                   </p>
//                 )}
//               </div>
//               <button className="post-btn" onClick={() => navigate('/post-property')}>
//                 + Post New Property
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div style={{maxWidth: 1100, margin: '-44px auto 60px', padding: '0 20px', position: 'relative', zIndex: 2}}>

//           {loading && (
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', gap: 20}}>
//               <div style={{width: 52, height: 52, border: '4px solid #f0e6dc', borderTopColor: '#BC6C25', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/>
//               <p style={{color: '#BC6C25', fontWeight: 600, fontSize: 17}}>Loading your listings...</p>
//             </div>
//           )}

//           {!loading && error && (
//             <div style={{background: 'white', borderRadius: 24, padding: 40, textAlign: 'center', boxShadow: '0 4px 30px rgba(0,0,0,0.08)'}}>
//               <div style={{fontSize: 48, marginBottom: 16}}>⚠️</div>
//               <h3 style={{fontSize: 22, fontWeight: 700, color: '#3d1f08', marginBottom: 8}}>Could not load listings</h3>
//               <p style={{color: '#8a6a54', fontSize: 16, marginBottom: 24}}>{error}</p>
//               <button className="post-btn" onClick={() => window.location.reload()}>Try Again</button>
//             </div>
//           )}

//           {!loading && !error && properties.length === 0 && (
//             <div style={{background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', textAlign: 'center'}}>
//               <div style={{width: 120, height: 120, background: '#fff8f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, marginBottom: 24}}>🏠</div>
//               <h2 className="playfair" style={{fontSize: 28, fontWeight: 700, color: '#3d1f08', marginBottom: 10}}>No listings yet</h2>
//               <p style={{color: '#8a6a54', fontSize: 17, marginBottom: 32, maxWidth: 400}}>Post your first property and start connecting with buyers and renters across India.</p>
//               <button className="post-btn" onClick={() => navigate('/post-property')}>🚀 Post Your First Property</button>
//             </div>
//           )}

//           {!loading && !error && properties.length > 0 && (
//             <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24}}>
//               {properties.map((p) => {
//                 const forType = p.for || (p.category === 'sell' ? 'buy' : 'rent');
//                 const images = p.images || [];
//                 const coverImg = images[0] || p.img || null;
//                 return (
//                   <div key={String(p._id)} className="prop-card">

//                     {/* Image */}
//                     <div style={{position: 'relative', height: 220, background: '#f5ece0', cursor: images.length > 0 ? 'pointer' : 'default', overflow: 'hidden'}}
//                       onClick={() => openImageGallery(images, 0)}>
//                       {coverImg ? (
//                         <img src={coverImg} alt={p.title}
//                           style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s'}}
//                           onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
//                           onMouseOut={e => e.target.style.transform = 'scale(1)'}
//                         />
//                       ) : (
//                         <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8}}>
//                           <span style={{fontSize: 48}}>🏠</span>
//                           <p style={{color: '#b59a85', fontSize: 15}}>No photos uploaded</p>
//                         </div>
//                       )}
//                       <div style={{position: 'absolute', top: 14, left: 14}}>
//                         <span style={{
//                           display: 'inline-flex', alignItems: 'center', gap: 5,
//                           padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700,
//                           background: forType === 'rent' ? '#eff6ff' : '#f0fdf4',
//                           color: forType === 'rent' ? '#2563eb' : '#16a34a',
//                           border: `1.5px solid ${forType === 'rent' ? '#bfdbfe' : '#bbf7d0'}`,
//                         }}>
//                           {forType === 'rent' ? '🔑 For Rent' : '🏷️ For Sale'}
//                         </span>
//                       </div>
//                       {images.length > 1 && (
//                         <div style={{position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.65)', color: 'white', fontSize: 13, fontWeight: 600, padding: '4px 10px', borderRadius: 20, backdropFilter: 'blur(4px)'}}>
//                           📷 {images.length}
//                         </div>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div style={{padding: '20px 22px'}}>
//                       <h2 style={{fontSize: 18, fontWeight: 700, color: '#3d1f08', marginBottom: 6, lineHeight: 1.35,
//                         overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
//                         {p.title}
//                       </h2>
//                       <p style={{fontSize: 22, fontWeight: 800, color: '#BC6C25', marginBottom: 14, fontFamily: 'Playfair Display, serif'}}>
//                         {formatPrice(p.price, forType)}
//                       </p>
//                       {(p.location || p.city) && (
//                         <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, color: '#6b4c30', fontSize: 15}}>
//                           📍 <span style={{fontWeight: 500}}>{p.location || `${p.city}${p.state ? ', ' + p.state : ''}`}</span>
//                         </div>
//                       )}
//                       <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14}}>
//                         {p.type && <span className="stat-pill">🏗️ {p.type}</span>}
//                         {p.beds && <span className="stat-pill">🛏️ {p.beds} BHK</span>}
//                         {p.area && <span className="stat-pill">📐 {parseInt(p.area).toLocaleString()} sqft</span>}
//                       </div>
//                       {p.amenities?.length > 0 && (
//                         <p style={{fontSize: 14, color: '#9a7a64', marginBottom: 16, lineHeight: 1.5}}>
//                           ✨ {p.amenities.slice(0, 4).join(' • ')}{p.amenities.length > 4 ? ` +${p.amenities.length - 4} more` : ''}
//                         </p>
//                       )}
//                       <div className="card-actions" style={{display: 'flex', gap: 10, paddingTop: 14, borderTop: '1.5px solid #f0e6dc'}}>
//                         {images.length > 0 && (
//                           <button className="view-btn" style={{flex: 1}} onClick={() => openImageGallery(images, 0)}>
//                             🖼️ View Photos
//                           </button>
//                         )}
//                         <button className="delete-btn" disabled={deletingId === String(p._id)} onClick={() => deleteProperty(String(p._id))}>
//                           {deletingId === String(p._id) ? (
//                             <><div style={{width: 16, height: 16, border: '2px solid #fecaca', borderTopColor: '#ef4444', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/> Deleting...</>
//                           ) : <>🗑️ Delete</>}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20}}
//           onClick={closeModal}>
//           <div style={{position: 'relative', maxWidth: 900, width: '100%'}} onClick={e => e.stopPropagation()}>
//             <button onClick={closeModal} style={{position: 'absolute', top: -52, right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: 40, cursor: 'pointer', lineHeight: 1}}>×</button>
//             <img src={currentImages[currentIndex]} alt="" style={{width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 12, display: 'block'}} />
//             <p style={{color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: 14, fontSize: 14}}>
//               {currentIndex + 1} / {currentImages.length} · ← → to navigate · Esc to close
//             </p>
//             {currentImages.length > 1 && (
//               <>
//                 <button className="modal-arrow" style={{left: -68}} onClick={prevImage}>‹</button>
//                 <button className="modal-arrow" style={{right: -68}} onClick={nextImage}>›</button>
//               </>
//             )}
//             {currentImages.length > 1 && (
//               <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14, flexWrap: 'wrap'}}>
//                 {currentImages.map((src, i) => (
//                   <img key={i} src={src} onClick={() => setCurrentIndex(i)}
//                     style={{width: 56, height: 44, objectFit: 'cover', borderRadius: 8, cursor: 'pointer',
//                       border: `2px solid ${i === currentIndex ? '#BC6C25' : 'transparent'}`,
//                       opacity: i === currentIndex ? 1 : 0.55, transition: 'all 0.2s'}} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// // }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function PostHistoryPage() {
//   const navigate = useNavigate();
//   const { user, token } = useAuth();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [deletingId, setDeletingId] = useState(null);

//   useEffect(() => {
//     if (!token) {
//       alert("Please login to view your properties");
//       navigate("/login");
//       return;
//     }
//     fetch("http://localhost:5000/api/user-properties", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//       .then(res => {
//         if (!res.ok) throw new Error(`Server error: ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         setProperties(Array.isArray(data) ? data : []);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [token, navigate]);

//   const formatPrice = (price, forType) => {
//     const num = parseFloat(price);
//     const formatted = isNaN(num) ? price : num.toLocaleString("en-IN");
//     return `₹${formatted}${forType === 'rent' ? ' / month' : ''}`;
//   };

//   const openModal = (images = [], index = 0) => {
//     if (!images.length) return;
//     setCurrentImages(images);
//     setCurrentIndex(index);
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const nextImage = () => setCurrentIndex(p => (p + 1) % currentImages.length);
//   const prevImage = () => setCurrentIndex(p => (p - 1 + currentImages.length) % currentImages.length);

//   const deleteProperty = async (id) => {
//     if (!window.confirm("Delete this property? It will be removed from everywhere — Buy/Rent pages too.")) return;
//     setDeletingId(id);
//     try {
//       const res = await fetch(`http://localhost:5000/api/user-properties/${id}`, {
//         method: "DELETE",
//         headers: { "Authorization": `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Delete failed");
//       setProperties(prev => prev.filter(p => String(p._id) !== String(id)));
//     } catch {
//       alert("Delete failed. Please try again.");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       if (!modalOpen) return;
//       if (e.key === 'ArrowRight') nextImage();
//       if (e.key === 'ArrowLeft') prevImage();
//       if (e.key === 'Escape') closeModal();
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, [modalOpen, currentImages.length]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
//         .history-page { font-family: 'DM Sans', sans-serif; }
//         .playfair { font-family: 'Playfair Display', serif; }
//         .prop-card { background: white; border-radius: 20px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); overflow: hidden; transition: all 0.3s; border: 1px solid #f0e6dc; }
//         .prop-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
//         .delete-btn { display: flex; align-items: center; gap: 8px; padding: 11px 20px; border-radius: 10px; border: 2px solid #fecaca; background: white; color: #ef4444; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .delete-btn:hover:not(:disabled) { background: #fef2f2; border-color: #ef4444; }
//         .delete-btn:disabled { opacity: 0.5; cursor: not-allowed; }
//         .view-btn { display: flex; align-items: center; gap: 8px; padding: 11px 20px; border-radius: 10px; border: 2px solid #e8d5c0; background: white; color: #BC6C25; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .view-btn:hover { background: #fff8f2; border-color: #BC6C25; }
//         .stat-pill { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; background: #fffaf5; border: 1.5px solid #f0e6dc; border-radius: 8px; font-size: 13px; font-weight: 500; color: #5c3d1e; }
//         .post-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; background: #BC6C25; color: white; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; border: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .post-btn:hover { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(188,108,37,0.35); }
//         .modal-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); color: white; font-size: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
//         .modal-arrow:hover { background: rgba(255,255,255,0.28); }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @media (max-width: 600px) { .card-actions { flex-direction: column !important; } .card-actions button { width: 100%; justify-content: center; } }
//       `}</style>

//       <div className="history-page min-h-screen" style={{background: 'linear-gradient(180deg, #fdf6ee 0%, #f5ece0 100%)'}}>

//         {/* Header */}
//         <div style={{background: 'linear-gradient(135deg, #3d1f08 0%, #6b3410 50%, #BC6C25 100%)', padding: '40px 20px 80px', position: 'relative', overflow: 'hidden'}}>
//           <div style={{position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)'}}/>
//           <div style={{position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)'}}/>
//           <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
//             <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20}}>
//               <div>
//                 <p style={{color: '#DDA15E', fontWeight: 600, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10}}>My Dashboard</p>
//                 <h1 className="playfair" style={{color: 'white', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 8}}>
//                   Post History
//                 </h1>
//                 {!loading && !error && (
//                   <p style={{color: '#e8c9a0', fontSize: 16}}>
//                     {properties.length === 0
//                       ? "No properties posted yet"
//                       : `${properties.length} listing${properties.length > 1 ? 's' : ''} — deleting removes from everywhere`}
//                   </p>
//                 )}
//               </div>
//               <button className="post-btn" onClick={() => navigate('/post-property')}>
//                 + Post New Property
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div style={{maxWidth: 1100, margin: '-44px auto 60px', padding: '0 20px', position: 'relative', zIndex: 2}}>

//           {loading && (
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', gap: 20}}>
//               <div style={{width: 52, height: 52, border: '4px solid #f0e6dc', borderTopColor: '#BC6C25', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/>
//               <p style={{color: '#BC6C25', fontWeight: 600, fontSize: 17}}>Loading your listings...</p>
//             </div>
//           )}

//           {!loading && error && (
//             <div style={{background: 'white', borderRadius: 24, padding: 40, textAlign: 'center', boxShadow: '0 4px 30px rgba(0,0,0,0.08)'}}>
//               <div style={{fontSize: 48, marginBottom: 16}}>⚠️</div>
//               <h3 style={{fontSize: 22, fontWeight: 700, color: '#3d1f08', marginBottom: 8}}>Could not load listings</h3>
//               <p style={{color: '#8a6a54', fontSize: 16, marginBottom: 24}}>{error}</p>
//               <button className="post-btn" onClick={() => window.location.reload()}>Try Again</button>
//             </div>
//           )}

//           {!loading && !error && properties.length === 0 && (
//             <div style={{background: 'white', borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', textAlign: 'center'}}>
//               <div style={{width: 120, height: 120, background: '#fff8f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, marginBottom: 24}}>🏠</div>
//               <h2 className="playfair" style={{fontSize: 28, fontWeight: 700, color: '#3d1f08', marginBottom: 10}}>No listings yet</h2>
//               <p style={{color: '#8a6a54', fontSize: 17, marginBottom: 32, maxWidth: 400}}>Post your first property and it will appear here.</p>
//               <button className="post-btn" onClick={() => navigate('/post-property')}>🚀 Post Your First Property</button>
//             </div>
//           )}

//           {!loading && !error && properties.length > 0 && (
//             <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24}}>
//               {properties.map((p) => {
//                 const forType = p.for || (p.category === 'sell' ? 'buy' : 'rent');
//                 const images = p.images || [];
//                 const coverImg = images[0] || p.img || null;
//                 const pid = String(p._id);
//                 return (
//                   <div key={pid} className="prop-card">

//                     {/* Image */}
//                     <div style={{position: 'relative', height: 220, background: '#f5ece0', cursor: images.length > 0 ? 'pointer' : 'default', overflow: 'hidden'}}
//                       onClick={() => openModal(images, 0)}>
//                       {coverImg ? (
//                         <img src={coverImg} alt={p.title}
//                           style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s'}}
//                           onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
//                           onMouseOut={e => e.target.style.transform = 'scale(1)'}
//                         />
//                       ) : (
//                         <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8}}>
//                           <span style={{fontSize: 48}}>🏠</span>
//                           <p style={{color: '#b59a85', fontSize: 15}}>No photos</p>
//                         </div>
//                       )}
//                       <div style={{position: 'absolute', top: 14, left: 14}}>
//                         <span style={{
//                           display: 'inline-flex', alignItems: 'center', gap: 5,
//                           padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700,
//                           background: forType === 'rent' ? '#eff6ff' : '#f0fdf4',
//                           color: forType === 'rent' ? '#2563eb' : '#16a34a',
//                           border: `1.5px solid ${forType === 'rent' ? '#bfdbfe' : '#bbf7d0'}`,
//                         }}>
//                           {forType === 'rent' ? '🔑 For Rent' : '🏷️ For Sale'}
//                         </span>
//                       </div>
//                       {images.length > 1 && (
//                         <div style={{position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.65)', color: 'white', fontSize: 13, fontWeight: 600, padding: '4px 10px', borderRadius: 20}}>
//                           📷 {images.length}
//                         </div>
//                       )}
//                     </div>

//                     {/* Info */}
//                     <div style={{padding: '20px 22px'}}>
//                       <h2 style={{fontSize: 18, fontWeight: 700, color: '#3d1f08', marginBottom: 6, lineHeight: 1.35, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
//                         {p.title}
//                       </h2>
//                       <p style={{fontSize: 22, fontWeight: 800, color: '#BC6C25', marginBottom: 14, fontFamily: 'Playfair Display, serif'}}>
//                         {formatPrice(p.price, forType)}
//                       </p>
//                       {(p.location || p.city) && (
//                         <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, color: '#6b4c30', fontSize: 15}}>
//                           📍 <span style={{fontWeight: 500}}>{p.location || `${p.city}${p.state ? ', ' + p.state : ''}`}</span>
//                         </div>
//                       )}
//                       <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14}}>
//                         {p.type && <span className="stat-pill">🏗️ {p.type}</span>}
//                         {p.beds && <span className="stat-pill">🛏️ {p.beds} BHK</span>}
//                         {p.area && <span className="stat-pill">📐 {parseInt(p.area).toLocaleString()} sqft</span>}
//                       </div>
//                       {p.amenities?.length > 0 && (
//                         <p style={{fontSize: 13, color: '#9a7a64', marginBottom: 16}}>
//                           ✨ {p.amenities.slice(0, 4).join(' • ')}{p.amenities.length > 4 ? ` +${p.amenities.length - 4} more` : ''}
//                         </p>
//                       )}

//                       {/* Posted date */}
//                       {p.createdAt && (
//                         <p style={{fontSize: 12, color: '#b59a85', marginBottom: 14}}>
//                           📅 Posted on {new Date(p.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
//                         </p>
//                       )}

//                       <div className="card-actions" style={{display: 'flex', gap: 10, paddingTop: 14, borderTop: '1.5px solid #f0e6dc'}}>
//                         {images.length > 0 && (
//                           <button className="view-btn" style={{flex: 1}} onClick={() => openModal(images, 0)}>
//                             🖼️ Photos
//                           </button>
//                         )}
//                         <button className="delete-btn" disabled={deletingId === pid} onClick={() => deleteProperty(pid)}>
//                           {deletingId === pid ? (
//                             <><div style={{width: 14, height: 14, border: '2px solid #fecaca', borderTopColor: '#ef4444', borderRadius: '50%', animation: 'spin 0.8s linear infinite'}}/> Deleting...</>
//                           ) : <>🗑️ Delete Everywhere</>}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Image Modal */}
//       {modalOpen && (
//         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20}}
//           onClick={closeModal}>
//           <div style={{position: 'relative', maxWidth: 900, width: '100%'}} onClick={e => e.stopPropagation()}>
//             <button onClick={closeModal} style={{position: 'absolute', top: -52, right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: 40, cursor: 'pointer', lineHeight: 1}}>×</button>
//             <img src={currentImages[currentIndex]} alt="" style={{width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 12, display: 'block'}} />
//             <p style={{color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: 14, fontSize: 14}}>
//               {currentIndex + 1} / {currentImages.length} · ← → to navigate · Esc to close
//             </p>
//             {currentImages.length > 1 && (
//               <>
//                 <button className="modal-arrow" style={{left: -68}} onClick={prevImage}>‹</button>
//                 <button className="modal-arrow" style={{right: -68}} onClick={nextImage}>›</button>
//               </>
//             )}
//             {currentImages.length > 1 && (
//               <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14, flexWrap: 'wrap'}}>
//                 {currentImages.map((src, i) => (
//                   <img key={i} src={src} onClick={() => setCurrentIndex(i)}
//                     style={{width: 56, height: 44, objectFit: 'cover', borderRadius: 8, cursor: 'pointer',
//                       border: `2px solid ${i === currentIndex ? '#BC6C25' : 'transparent'}`,
//                       opacity: i === currentIndex ? 1 : 0.55, transition: 'all 0.2s'}} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PostHistoryPage() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!token) { alert("Please login to view your properties"); navigate("/login"); return; }
    fetch("http://localhost:5000/api/user-properties", { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => { if (!res.ok) throw new Error(`Server error: ${res.status}`); return res.json(); })
      .then(data => { setProperties(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [token, navigate]);

  const formatPrice = (price, forType) => {
    const num = parseFloat(price);
    const formatted = isNaN(num) ? price : num.toLocaleString("en-IN");
    return `₹${formatted}${forType === 'rent' ? ' / month' : ''}`;
  };

  const openModal = (images = [], index = 0) => {
    if (!images.length) return;
    setCurrentImages(images); setCurrentIndex(index); setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => { setModalOpen(false); document.body.style.overflow = "auto"; };
  const nextImage = () => setCurrentIndex(p => (p + 1) % currentImages.length);
  const prevImage = () => setCurrentIndex(p => (p - 1 + currentImages.length) % currentImages.length);

  const deleteProperty = async (id) => {
    if (!window.confirm("Delete this property? It will be removed from everywhere — Buy/Rent pages too.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:5000/api/user-properties/${id}`, {
        method: "DELETE", headers: { "Authorization": `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Delete failed");
      setProperties(prev => prev.filter(p => String(p._id) !== String(id)));
    } catch { alert("Delete failed. Please try again."); }
    finally { setDeletingId(null); }
  };

  useEffect(() => {
    const handler = (e) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalOpen, currentImages.length]);

  // ── SVG Icons ──────────────────────────────────────────────
  const IcoBed = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 16h20"/><path d="M6 8V4"/>
    </svg>
  );
  const IcoArea = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  );
  const IcoBuilding = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="7" height="20"/><rect x="14" y="8" width="7" height="14"/><rect x="6" y="6" width="2" height="2"/><rect x="6" y="10" width="2" height="2"/><rect x="6" y="14" width="2" height="2"/>
    </svg>
  );
  const IcoPin = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
  const IcoCal = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
  const IcoStar = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
  const IcoPhoto = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  );
  const IcoTrash = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/>
    </svg>
  );
  const IcoKey = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/>
    </svg>
  );
  const IcoTag = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
  const IcoPlus = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
  const IcoHome = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#BC6C25" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
  const IcoWarn = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#BC6C25" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
  const IcoBack = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  );
  // ────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Jost:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .hist-page { font-family: 'Jost', sans-serif; min-height: 100vh; background: #f7f3ee; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }

        .hist-card {
          background: white; border-radius: 20px;
          border: 1px solid #ede5da;
          box-shadow: 0 2px 16px rgba(61,31,8,0.07);
          overflow: hidden; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          animation: fadeUp 0.4s ease both;
          display: flex; flex-direction: column;
        }
        .hist-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(61,31,8,0.13); border-color: #d4b896; }

        .hist-delete-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 10px 16px; border-radius: 10px;
          border: 1.5px solid #fecaca; background: #fff5f5;
          color: #dc2626; font-weight: 600; font-size: 13px;
          cursor: pointer; transition: all 0.2s;
          font-family: 'Jost', sans-serif;
        }
        .hist-delete-btn:hover:not(:disabled) { background: #fef2f2; border-color: #dc2626; box-shadow: 0 4px 12px rgba(220,38,38,0.12); }
        .hist-delete-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .hist-view-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 10px 16px; border-radius: 10px;
          border: 1.5px solid #e0d5c8; background: #faf8f5;
          color: #BC6C25; font-weight: 600; font-size: 13px;
          cursor: pointer; transition: all 0.2s;
          font-family: 'Jost', sans-serif; flex: 1;
        }
        .hist-view-btn:hover { background: #fff3e8; border-color: #BC6C25; box-shadow: 0 4px 12px rgba(188,108,37,0.12); }

        .hist-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 11px; background: #faf8f5;
          border: 1.5px solid #e8d5c0; border-radius: 8px;
          font-size: 12px; font-weight: 600; color: #5c3d1e;
        }

        .hist-post-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 26px; background: #BC6C25; color: white;
          border-radius: 12px; font-weight: 700; font-size: 15px;
          cursor: pointer; border: none; transition: all 0.25s;
          font-family: 'Jost', sans-serif;
        }
        .hist-post-btn:hover { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(188,108,37,0.35); }

        @media (max-width: 640px) {
          .hist-inner { padding: 0 14px !important; }
          .hist-header-inner { flex-direction: column !important; align-items: flex-start !important; }
          .hist-card-actions { flex-direction: column !important; }
          .hist-card-actions button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>

      <div className="hist-page">

        {/* Hero Header */}
        <div style={{background:'linear-gradient(135deg,#1a0e05 0%,#3d1f08 50%,#6b3410 100%)',padding:'52px 24px 100px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-80,right:-80,width:360,height:360,borderRadius:'50%',background:'rgba(188,108,37,0.07)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:-100,left:-60,width:280,height:280,borderRadius:'50%',background:'rgba(255,255,255,0.03)',pointerEvents:'none'}}/>
          <div style={{maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1}}>
            <button onClick={() => navigate('/')} style={{
              display:'inline-flex',alignItems:'center',gap:7,
              background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',
              color:'rgba(255,255,255,0.65)',padding:'8px 18px',borderRadius:20,
              fontSize:13,fontWeight:500,cursor:'pointer',marginBottom:28,
              fontFamily:'Jost,sans-serif',transition:'all 0.2s',
            }}
              onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.15)'}
              onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}
            ><IcoBack/> Back to Home</button>

            <div className="hist-header-inner" style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}>
              <div>
                <p style={{color:'#DDA15E',fontWeight:700,fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:12}}>My Dashboard</p>
                <h1 style={{fontFamily:'Cormorant Garamond,serif',color:'white',fontSize:'clamp(28px,4vw,44px)',fontWeight:800,lineHeight:1.15,marginBottom:10}}>
                  Post History
                </h1>
                {!loading && !error && (
                  <p style={{color:'rgba(255,255,255,0.5)',fontSize:14,fontWeight:400}}>
                    {properties.length === 0 ? "No properties posted yet" : `${properties.length} listing${properties.length > 1 ? 's' : ''} — deleting removes from everywhere`}
                  </p>
                )}
              </div>
              <button className="hist-post-btn" onClick={() => navigate('/post-property')}>
                <IcoPlus/> Post New Property
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="hist-inner" style={{maxWidth:1100,margin:'-48px auto 80px',padding:'0 24px',position:'relative',zIndex:2}}>

          {loading && (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:300,background:'white',borderRadius:20,boxShadow:'0 4px 32px rgba(0,0,0,0.08)',border:'1px solid #ede5da',gap:18}}>
              <div style={{width:46,height:46,border:'3px solid #f0e6dc',borderTopColor:'#BC6C25',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
              <p style={{color:'#BC6C25',fontWeight:600,fontSize:15}}>Loading your listings...</p>
            </div>
          )}

          {!loading && error && (
            <div style={{background:'white',borderRadius:20,padding:48,textAlign:'center',boxShadow:'0 4px 32px rgba(0,0,0,0.08)',border:'1px solid #ede5da'}}>
              <div style={{display:'flex',justifyContent:'center',marginBottom:16}}><IcoWarn/></div>
              <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:26,fontWeight:700,color:'#1a0e05',marginBottom:8}}>Could not load listings</h3>
              <p style={{color:'#9a7a64',fontSize:15,marginBottom:24}}>{error}</p>
              <button className="hist-post-btn" onClick={() => window.location.reload()}>Try Again</button>
            </div>
          )}

          {!loading && !error && properties.length === 0 && (
            <div style={{background:'white',borderRadius:20,boxShadow:'0 4px 32px rgba(0,0,0,0.08)',border:'1px solid #ede5da',display:'flex',flexDirection:'column',alignItems:'center',padding:'80px 24px',textAlign:'center'}}>
              <div style={{width:100,height:100,background:'linear-gradient(135deg,#fff8f2,#f5ece0)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:24}}>
                <IcoHome/>
              </div>
              <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:30,fontWeight:700,color:'#1a0e05',marginBottom:10}}>No listings yet</h2>
              <p style={{color:'#9a7a64',fontSize:16,marginBottom:32,maxWidth:380,lineHeight:1.6}}>Post your first property and it will appear here.</p>
              <button className="hist-post-btn" onClick={() => navigate('/post-property')}><IcoPlus/> Post Your First Property</button>
            </div>
          )}

          {!loading && !error && properties.length > 0 && (
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:22}}>
              {properties.map((p, idx) => {
                const forType = p.for || (p.category === 'sell' ? 'buy' : 'rent');
                const images = p.images || [];
                const coverImg = images[0] || p.img || null;
                const pid = String(p._id);
                const isRent = forType === 'rent';
                return (
                  <div key={pid} className="hist-card" style={{animationDelay:`${idx*0.05}s`}}>

                    {/* Image */}
                    <div style={{position:'relative',height:215,background:'linear-gradient(135deg,#f5ece0,#e8d5c0)',cursor:images.length>0?'pointer':'default',overflow:'hidden',flexShrink:0}}
                      onClick={() => openModal(images, 0)}>
                      {coverImg ? (
                        <img src={coverImg} alt={p.title}
                          style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.45s cubic-bezier(0.4,0,0.2,1)'}}
                          onMouseOver={e=>e.target.style.transform='scale(1.06)'}
                          onMouseOut={e=>e.target.style.transform='scale(1)'}/>
                      ) : (
                        <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:10,color:'#b59a85'}}>
                          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          <p style={{fontSize:13,fontWeight:500}}>No photos</p>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(26,14,5,0.55) 0%,transparent 55%)',pointerEvents:'none'}}/>

                      {/* For Sale / Rent badge */}
                      <div style={{position:'absolute',top:14,left:14}}>
                        <span style={{
                          display:'inline-flex',alignItems:'center',gap:5,
                          padding:'5px 12px',borderRadius:20,fontSize:12,fontWeight:700,
                          background:isRent?'rgba(219,234,254,0.97)':'rgba(220,252,231,0.97)',
                          color:isRent?'#1d4ed8':'#15803d',
                          border:`1.5px solid ${isRent?'#93c5fd':'#86efac'}`,
                          backdropFilter:'blur(4px)',
                        }}>
                          {isRent ? <IcoKey/> : <IcoTag/>}
                          {isRent ? 'For Rent' : 'For Sale'}
                        </span>
                      </div>

                      {/* Photo count badge */}
                      {images.length > 1 && (
                        <div style={{position:'absolute',bottom:12,right:12,background:'rgba(0,0,0,0.55)',backdropFilter:'blur(6px)',color:'white',fontSize:12,fontWeight:600,padding:'4px 10px',borderRadius:20,display:'flex',alignItems:'center',gap:5,border:'1px solid rgba(255,255,255,0.12)'}}>
                          <IcoPhoto/> {images.length}
                        </div>
                      )}

                      {/* Price on image */}
                      <div style={{position:'absolute',bottom:14,left:16}}>
                        <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:22,fontWeight:700,color:'white',textShadow:'0 2px 8px rgba(0,0,0,0.5)'}}>
                          {formatPrice(p.price, forType)}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{padding:'18px 20px 20px',display:'flex',flexDirection:'column',gap:11,flex:1}}>

                      <h2 style={{fontSize:16,fontWeight:700,color:'#1a0e05',lineHeight:1.4,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>
                        {p.title}
                      </h2>

                      {(p.location || p.city) && (
                        <div style={{display:'flex',alignItems:'center',gap:6,color:'#7a5c3e',fontSize:13,fontWeight:500}}>
                          <span style={{color:'#BC6C25',flexShrink:0}}><IcoPin/></span>
                          <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                            {p.location || `${p.city}${p.state?', '+p.state:''}`}
                          </span>
                        </div>
                      )}

                      <div style={{display:'flex',flexWrap:'wrap',gap:7}}>
                        {p.type && <span className="hist-pill"><IcoBuilding/> {p.type}</span>}
                        {p.beds && <span className="hist-pill"><IcoBed/> {p.beds} BHK</span>}
                        {p.area && <span className="hist-pill"><IcoArea/> {parseInt(p.area).toLocaleString()} sqft</span>}
                      </div>

                      {p.amenities?.length > 0 && (
                        <div style={{display:'flex',alignItems:'flex-start',gap:6,color:'#9a7a64',fontSize:12,lineHeight:1.5}}>
                          <span style={{color:'#BC6C25',marginTop:1,flexShrink:0}}><IcoStar/></span>
                          <span>{p.amenities.slice(0,4).join(' · ')}{p.amenities.length>4?` +${p.amenities.length-4} more`:''}</span>
                        </div>
                      )}

                      {p.createdAt && (
                        <div style={{display:'flex',alignItems:'center',gap:6,color:'#b59a85',fontSize:12,fontWeight:500}}>
                          <IcoCal/>
                          {new Date(p.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
                        </div>
                      )}

                      <div className="hist-card-actions" style={{display:'flex',gap:10,paddingTop:12,borderTop:'1.5px solid #f5efe8',marginTop:'auto'}}>
                        {images.length > 0 && (
                          <button className="hist-view-btn" onClick={() => openModal(images, 0)}>
                            <IcoPhoto/> View Photos ({images.length})
                          </button>
                        )}
                        <button className="hist-delete-btn" disabled={deletingId===pid} onClick={() => deleteProperty(pid)}>
                          {deletingId===pid ? (
                            <><div style={{width:13,height:13,border:'2px solid #fecaca',borderTopColor:'#dc2626',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/> Deleting...</>
                          ) : <><IcoTrash/> Delete</>}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal — unchanged, working as before */}
      {modalOpen && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:20}}
          onClick={closeModal}>
          <div style={{position:'relative',maxWidth:900,width:'100%'}} onClick={e=>e.stopPropagation()}>
            <button onClick={closeModal} style={{position:'absolute',top:-52,right:0,background:'none',border:'none',color:'rgba(255,255,255,0.7)',fontSize:42,cursor:'pointer',lineHeight:1}}>×</button>
            <img src={currentImages[currentIndex]} alt="" style={{width:'100%',maxHeight:'78vh',objectFit:'contain',borderRadius:14,display:'block'}}/>
            <p style={{color:'rgba(255,255,255,0.4)',textAlign:'center',marginTop:12,fontSize:13,fontWeight:500}}>
              {currentIndex+1} / {currentImages.length} · ← → to navigate · Esc to close
            </p>
            {currentImages.length > 1 && (
              <>
                <button style={{position:'absolute',left:-64,top:'40%',transform:'translateY(-50%)',width:48,height:48,borderRadius:'50%',background:'rgba(255,255,255,0.1)',border:'1.5px solid rgba(255,255,255,0.2)',color:'white',fontSize:24,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'background 0.2s'}}
                  onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                  onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}
                  onClick={prevImage}>‹</button>
                <button style={{position:'absolute',right:-64,top:'40%',transform:'translateY(-50%)',width:48,height:48,borderRadius:'50%',background:'rgba(255,255,255,0.1)',border:'1.5px solid rgba(255,255,255,0.2)',color:'white',fontSize:24,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'background 0.2s'}}
                  onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                  onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}
                  onClick={nextImage}>›</button>
              </>
            )}
            {currentImages.length > 1 && (
              <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:14,flexWrap:'wrap'}}>
                {currentImages.map((src,i) => (
                  <img key={i} src={src} onClick={() => setCurrentIndex(i)}
                    style={{width:54,height:42,objectFit:'cover',borderRadius:7,cursor:'pointer',
                      border:`2px solid ${i===currentIndex?'#BC6C25':'transparent'}`,
                      opacity:i===currentIndex?1:0.45,transition:'all 0.2s'}}/>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}