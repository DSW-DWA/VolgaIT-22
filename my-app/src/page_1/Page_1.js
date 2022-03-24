import './Page_1.css';
import './Page_1.css.map';

function Page_1() {
  return (
    <div className="page_one-wapper">
  <header className="page_one-wapper_header"><img data-argument="none" className="page_one-wapper_header-arrow prev_page" src={process.env.PUBLIC_URL + "img/left_arrow.svg"}/>
    <div className="page_one-wapper_header-count">1/10</div><img className="page_one-wapper_header-stop stop_poll" src={process.env.PUBLIC_URL + "img/stop.svg"}/>
  </header>
  <div className="page_one-wapper_line">
    <div className="page_one-wapper_line-fuller"></div>
  </div>
  <div className="page_one-wapper_main"> 
    <div className="page_one-wapper_main-title">You are looking for</div>
    <button data-argument="gender" data-value="5" className="page_one-wapper_main-btn-women next_page"><img className="page_one-wapper_main-btn-women-img" src={process.env.PUBLIC_URL+ "img/women_shadow.svg"}/>
      <div className="page_one-wapper_main-btn-women-text">Women's Styles</div>
    </button>
    <button data-argument="gender" data-value="4" className="page_one-wapper_main-btn-men next_page"><img className="page_one-wapper_main-btn-men-img" src={process.env.PUBLIC_URL + "img/men_shadow.svg"}/>
      <div className="page_one-wapper_main-btn-men-text">Men's Styles</div>
    </button>
    <div className="page_one-wapper_main-skip next_page">I'd like to see both</div>
  </div>
</div>
  );
}

export default Page_1;