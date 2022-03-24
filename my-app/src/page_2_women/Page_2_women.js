import './Page_2_women.css';
import './Page_2_women.css.map';

function Page_2_women() {
  return (
    <div class="page_two-women-wapper">
  <header class="page_two-women-wapper_header"><img class="page_two-women-wapper_header-arrow prev_page" src={process.env.PUBLIC_URL + "img/left_arrow.svg"}/>
    <div class="page_two-women-wapper_header-count">2/10</div><img class="page_two-women-wapper_header-stop stop_poll" src={process.env.PUBLIC_URL + "img/stop.svg"}/>
  </header>
  <div class="page_two-women-wapper_line">
    <div class="page_two-women-wapper_line-fuller"></div>
  </div>
  <div class="page_two-women-wapper_main"> 
    <div class="page_two-women-wapper_main-title">What type of glasses are you looking for?</div>
    <button class="page_two-women-wapper_main-btn-women next_page"><img class="page_two-women-wapper_main-btn-women-img" src={process.env.PUBLIC_URL + "img/women_shadow_glasses.svg"}/>
      <div class="page_two-women-wapper_main-btn-women-text">Eyeglasses</div>
    </button>
    <button class="page_two-women-wapper_main-btn-men next_page"><img class="page_two-women-wapper_main-btn-men-img" src={process.env.PUBLIC_URL + "img/women_shadow_sunglasses.svg"}/>
      <div class="page_two-women-wapper_main-btn-men-text">Sunglasses</div>
    </button>
    <div class="page_two-women-wapper_main-skip next_page">I want to see both</div>
  </div>
</div>
  );
}

export default Page_2_women;