import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
function Home(){
    return(
        <div>
           <div id="carouselExample" class="carousel carousel-overlay slide">
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <div class="carousel-overlay-controls">
    <div>
      <button class="btn-icon btn-sm btn-subtle theme-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-icon-prev" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="btn-icon btn-sm btn-subtle theme-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-icon-next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Home