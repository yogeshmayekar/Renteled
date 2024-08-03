import * as React from 'react';
import './pagination.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BasicPagination =({data, itemsPerPage, currentPage, setCurrentPage})=> {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log("total page",totalPages)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
// console.log("current page",currentPage);
    return (
      
      <div className='pagination__container'>
        <span className={currentPage>1?'left__span lefy__style':'left__block'} onClick={() => handlePageChange(currentPage - 1)} ><KeyboardArrowLeftIcon sx={{fontSize:'30px'}}/></span>
        <ul className='list__style'>
        {pageNumbers.map(page => (
          <li className={currentPage === page ? 'active' : ''} onClick={() => handlePageChange(page)}>{page}</li>
          ))}
        </ul>
        <span className={currentPage===totalPages?"left__block":'right__span lefy__style'}  onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} ><KeyboardArrowRightIcon sx={{fontSize:'30px'}}/></span>
      </div>
    );
}

export default BasicPagination;