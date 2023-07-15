import React from 'react'

const Index = () => {
  return (
    <>
    
     <main>
      <div class="main-content">
        <div class="hero">
          <div class="hero-content">
            <h1>In need of a repair?</h1>
            <p>
              From cracked t.v. screens to water damaged mobile devices, we
              handle it all!
            </p>
            <button class="hero-content-button">
              <img src="assets/imgs/arrow.png" alt="arrow" />
              <p>See more</p>
            </button>
          </div>
        </div>
      </div>

      <h1 class="headings-Home">New Arrivals</h1>
      <div class="carousel-wrap">
        <div class="owl-carousel">
          <div class="item">
            <span class="h-item-row-1">
              <img
                src="assets/imgs/products/sam-oled.jpeg"
                alt="Samsung T.v."
              />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Samsung Neo QLED</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>
          <div class="item">
            <span class="h-item-row-1">
              <img src="assets/imgs/products/iphone13.jpeg" alt="Iphone 13" />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Iphone 13</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>
          <div class="item">
            <span class="h-item-row-1">
              <img src="assets/imgs/products/airmax.jpeg" alt="Airpod Max " />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Airpod Max</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>
          <div class="item">
            <span class="h-item-row-1">
              <img
                src="assets/imgs/products/beats.jpeg"
                alt="Beats Headphones"
              />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Beats by Dre</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>

          <div class="item">
            <span class="h-item-row-1">
              <img src="assets/imgs/products/lenevo.jpeg" alt="Lenevo Laptop" />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Lenevo laptop</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>
          <div class="item">
            <span class="h-item-row-1">
              <img
                src="assets/imgs/products/switch.jpeg"
                alt="Nintendo Switch"
              />
            </span>
            <div class="text-rows">
              <span class="h-item-row-2">
                <h2>Nintentdo Switch</h2>

                <div class="heart-home">
                  <img src="assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span class="greyed-out">
                <p>Multiple colors available</p>
              </span>
              <span>
                <p>$1000</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="categories-container">
      <h1 class="headings-Home cat">Categories</h1>
      <div class="categories">
        <div class="row">
          <img src="assets/imgs/pin-tv.jpg" alt="beats" />
          <img src="assets/imgs/laptop.jpg" alt="beats" />
        </div>

        <div class="row">
          <img src="assets/imgs/s23.jpg" alt="beats" />
          <img src="assets/imgs/headphones.jpg" alt="beats" />
        </div>
      </div>
    </div>

    <div class="slide-container">
      <div class="shop-by-brand">
        <h1 class="section-title brands">Shop by Brands</h1>
        <div
          id="app"
          class="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
        >
          <div class="relative">
            <div
              class="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
            >
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/samsung.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/apple.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/beatslogo.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/hp.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/lenevologo.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/logi.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/samsung.jpeg"
                  alt="mountain_image"
                />
              </div>
              <div
                class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  src="assets/imgs/sony.jpeg"
                  alt="mountain_image"
                />
              </div>
            </div>

            <div
              class="absolute top-0 -left-4 h-full items-center hidden md:flex"
            >
              <button
                role="button"
                class="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                aria-label="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div
              class="absolute top-0 -right-4 h-full items-center hidden md:flex"
            >
              <button
                role="button"
                class="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                aria-label="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index
