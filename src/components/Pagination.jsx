
import PropTypes  from 'prop-types';

const Pagination = ({pagenums, currentPageNo, pagenohandler, prevBtnHandler, nextBtnHandler}) => {
  return (
    <div className='page_container'>
      <button disabled={currentPageNo == 0} className='button_container' onClick={prevBtnHandler}>◀</button>
        {[...Array(pagenums).keys()].map(num=>{
            return(
              <button key={num} className={`${num == currentPageNo ? "currentPageNum":"button_container"} `} onClick={()=> pagenohandler(num)}>{num}</button>
            )
        })} 
      <button disabled={ currentPageNo == pagenums - 1} className='button_container' onClick={nextBtnHandler}>▶</button>
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