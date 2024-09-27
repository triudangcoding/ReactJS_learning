import './index.css'
// import { StarIcon } from "@heroicons/react/20/solid";





//EX 4:
// const review = {
//   rating: 4,
//   content:
//     "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
//   author: 'Emily Selman',
//   avatarSrc:
//     'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
// };

// function GoodReview() {
//   const isGoodReview = review.rating >= 4;

//   if (!review.author) return null;
//   else {
//     return (
//       <div className="review">
//         <div className="review-wrapper">
//           <img src={review.avatarSrc} alt={review.author} className="review-avatar" />
//           <div className="review-left">
//             <h4 className="review-author">{review.author}</h4>
//             {isGoodReview && <ReviewRating review={review} />}
//           </div>
//         </div>
//         <div className="review-content">{review.content}</div>
//       </div>
//     );
//   }
// }

// export function ReviewRating() {
//   return (
//     <div className="review-rating">
//       {[0, 1, 2, 3, 4].map((rating) => (
//         <StarIcon key={rating} className="review-star" />
//       ))}
//     </div>
//   );
// }

// export default GoodReview;


  // import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'


// EX 2:
// function Calluot()
// {
//   const saleOpen = {
//     heading: "Get 25% off during our one-time sale",
//     description:
//       "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
//     href: "/one-time-sale",
//   };
  
  
//   const saleClosed = {
//     heading: "Oops, you just missed out on our big sale!",
//     description: "Now everything you like is back at full price. Sorry!",
//   };
    
//   const isSaleOpen = true;

//   if (isSaleOpen) {
//     return (
//       <section className="section">
//         <div className="section-wrapper">
//           <h2 className="section-heading">{saleOpen.heading}</h2>
//           <p className="section-description">{saleOpen.description}</p>
//           <a href={saleOpen.href} className="section-link">
//             Get access to our one-time sale
//           </a>
//         </div>
//       </section>
//     );
//   } else {
//     return (
//       <section className="section">
//         <div className="section-wrapper">
//           <h2 className="section-heading">{saleClosed.heading}</h2>
//           <p className="section-description">{saleClosed.description}</p>
//         </div>
//       </section>
//     );
//   }
// }

// export default Calluot;


// EX 1: 
// function App() {
//   const bannerData = {
//     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
//     </svg>,

//     version: 5,
//     href: '/details',
//   };

//   return (
//     <div className="banner-wrapper">
//       <div className="flex">
//         <div className="flex-shrink-0">{bannerData.icon}</div>
//         <div className="banner-content">
//           <p className="banner-text">
//             A new software update is available. See what’s new in version {bannerData.version}
//           </p>
//           <p className="banner-details">
//             <a href={bannerData.href} className="banner-details-link">
//               Details
//               <span aria-hidden="true"> &rarr;</span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App