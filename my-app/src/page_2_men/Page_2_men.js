import './Page_2_men.css';
import './Page_2_men.css.map';

function Page_2_men() {
    return (
        <div className="page_two-man-wapper">
        <header className="page_two-man-wapper_header"><img className="page_two-man-wapper_header-arrow prev_page" src={process.env.PUBLIC_URL + "img/left_arrow.svg"}/>
          <div className="page_two-man-wapper_header-count">2/10</div><img className="page_two-man-wapper_header-stop stop_poll" src={process.env.PUBLIC_URL + "img/stop.svg"}/>
        </header>
        <div className="page_two-man-wapper_line">
          <div className="page_two-man-wapper_line-fuller"></div>
        </div>
        <div className="page_two-man-wapper_main"> 
          <div className="page_two-man-wapper_main-title">What type of glasses are you looking for?</div>
          <button className="page_two-man-wapper_main-btn-women next_page"><img className="page_two-man-wapper_main-btn-women-img" src={process.env.PUBLIC_URL + "img/men_shadow_glasses.svg"}/>
            <div className="page_two-man-wapper_main-btn-women-text">Eyeglasses</div>
          </button>
          <button className="page_two-man-wapper_main-btn-men next_page"><img className="page_two-man-wapper_main-btn-men-img" src={process.env.PUBLIC_URL + "img/men_shadow_sunglasses.svg"}/>
            <div className="page_two-man-wapper_main-btn-men-text">Sunglasses</div>
          </button>
          <div className="page_two-man-wapper_main-skip next_page">I want to see both</div>
        </div>
      </div>
    );
}

export default Page_2_men;