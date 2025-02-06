
import PropTypes  from 'prop-types';

const Pagination = ({pagenums, currentPageNo, pagenohandler, prevBtnHandler, nextBtnHandler}) => {
  return (
    <div className=''>
      <button disabled={currentPageNo == 0} className={` m-1 `} onClick={prevBtnHandler}><i className={`${currentPageNo == 0 ? " text-gray-400": " text-blue-400"} fa-solid fa-xl fa-circle-chevron-left`}></i></button>
        {[...Array(pagenums).keys()].map(num=>{
            return(
              <button key={num} className={`${num == currentPageNo ? "border m-1 px-3 rounded-full bg-blue-400":"border m-1 px-3 rounded-full font-medium"} `} onClick={()=> pagenohandler(num)}>{num + 1}</button>
            )
        })} 
      <button disabled={ currentPageNo == pagenums - 1} className={`m-1`} onClick={nextBtnHandler}><i className={`${currentPageNo == pagenums - 1 ? " text-gray-400": " text-blue-400"} fa-solid fa-xl fa-circle-chevron-right `}></i></button>
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