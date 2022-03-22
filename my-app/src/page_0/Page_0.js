import './page_0.css';
import './page_0.css.map'

function Page_0() {
  return (
    <div className="page_zero-wapper">
  <header className="page_zero-wapper_header"><img className="page_zero-wapper_header-logo" src={process.env.PUBLIC_URL + 'img/Otimax_Dev_logo_3.png'}/><img className="page_zero-wapper_header-arrow next_page" src={process.env.PUBLIC_URL + 'img/arrow_right.svg'}/></header>
  <div className="page_zero-wapper_main"><img className="page_zero-wapper_main-img" src={process.env.PUBLIC_URL + 'img/zs.png'}/>
    <div className="page_zero-wapper_main-title">Let’s find your perfect pair!</div>
    <div className="page_zero-wapper_main-text">Take the quiz to easily discover your perfect fit from thousands of styles</div>
    <button className="page_zero-wapper_main-btn next_page">Start Now</button>
  </div>
</div>
  );
}

export default Page_0;

