import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function NotFound() {
  return (
  <div id="page-wrapper">
    <Navigation />
    <div id="main" class="wrapper style1">
      <div class="container">
        <header className="major blue">
        <h1>페이지를 찾을 수 없습니다.</h1>
        </header>
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default NotFound;