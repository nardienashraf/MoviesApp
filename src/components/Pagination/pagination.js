// import React from 'react'
// import { Button } from 'react-bootstrap';

// function Pagination({movies, moviesPerPage, currentPage, setCurrentPage}) {

//     let pagesNumber = [];
//     for (let i = 1; i <= Math.ceil(movies / moviesPerPage); i++) {
//         pagesNumber.push(i);
//     }

//     return (
//         <div className='d-flex justify-content-center'>
//             {pagesNumber.map((page, index) => {
//                 return <Button className={`bg-danger m-1 ${(page==currentPage)?'bg-dark' : ''}`} key={index} onClick={() => { setCurrentPage(page) }}> 
//                 {page} 
//                 </Button>
//             })}
//         </div>
//     )
// }

// export default Pagination;
