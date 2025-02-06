
import PropTypes  from 'prop-types';

const Pagination = ({pagenums, currentPageNo, pagenohandler, prevBtnHandler, nextBtnHandler}) => {
  return (
    <div className=''>
      <button disabled={currentPageNo == 0} className={`border m-1 px-3 rounded-full font-medium ${currentPageNo == 0 ? " bg-gray-400": " bg-blue-400"}`} onClick={prevBtnHandler}><i className="fa-solid fa-chevron-left"></i></button>
        {[...Array(pagenums).keys()].map(num=>{
            return(
              <button key={num} className={`${num == currentPageNo ? "border m-1 px-3 rounded-full bg-blue-400":"border m-1 px-3 rounded-full font-medium"} `} onClick={()=> pagenohandler(num)}>{num + 1}</button>
            )
        })} 
      <button disabled={ currentPageNo == pagenums - 1} className={`border m-1 px-3 rounded-full font-medium ${currentPageNo == pagenums - 1 ? " bg-gray-400": " bg-blue-400"}`} onClick={nextBtnHandler}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

Pagination.propTypes = {
    pagenums : PropTypes.number,
    pagenohandler : PropTypes.func,
    prevBtnHandler : PropTypes.func,
    nextBtnHandler : PropTypes.func,
    currentPageNo : PropTypes.number
}

export default Pagination;