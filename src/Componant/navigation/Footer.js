import React from 'react'
// import { alignPropType } from 'react-bootstrap/esm/types';

export default function Footer() {
  return (
    <h1>

      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-dark text-muted border-bottom">
        {/* <!-- Section: Social media --> */}
        <section class="border-bottom"></section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3 ">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase  fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p className='text-light'>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-light">
                  Products
                </h6>
                <p className='text-light'>
                  <a href="#!" class="text-reset text-light text-decoration">Angular</a>
                </p>
                <p className='text-light'>
                  <a href="#!" class="text-reset text-light text-decoration">React</a>
                </p>
                <p className='text-light'>
                  <a href="#!" class="text-reset text-light text-decoration">Vue</a>
                </p>
                <p className='text-light'>
                  <a href="#!" class="text-reset text-light text-decoration">Laravel</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-light">
                  Useful links
                </h6>
                <p>
                  <a href="#!" class="text-light text-decoration">Pricing</a>
                </p>
                <p>
                  <a href="#!" class="text-light text-decoration">Settings</a>
                </p>
                <p>
                  <a href="#!" class="text-light text-decoration">Orders</a>
                </p>
                <p>
                  <a href="#!" class="text-light text-decoration">Help</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                <p className='text-light'><i class="fas fa-home me-3"></i> Galle, Sri Lanka</p>
                <p className='text-light'>
                  <i class="fas fa-envelope me-3"></i>
                  sandamalsupun18@gmail.com
                </p>
                <p className='text-light'><i class="fas fa-phone me-3 "></i> + 94 733 439 76</p>
                <p className='text-light'><i class="fas fa-phone me-3"></i> + 01 234 567 89</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-4 text-light">
          © 2023 Create by:
          <a class="text-reset fw-bold text-decoration text-light" href="https://www.linkedin.com/in/supunsandamal/"> Supun Sandamal</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}

    </h1>
  )
}
