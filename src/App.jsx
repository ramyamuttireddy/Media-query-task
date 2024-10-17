import './App.css'

function App() {


  return (
    <>
      <div className='bg-[#fcf8f6] w-full h-full p-[1.5rem] lg:p-[0]'>

        {/* main container */}

        <div className=' flex flex-col-reverse gap-[32px] lg:flex-row lg:p-[88px_0] lg:w-[90%] lg:m-auto 2xl:w-[1216px] 2xl:m-auto'>

          {/* Desserts section */}

          <div>

            <h1 className='text-[40px] font-[700] tracking-tight text-left pb-8 lg:text-center'>Desserts</h1>

            {/* cards Section */}

            <div className=' grid grid-cols-1 gap-[1.5rem]  md:grid-cols-2 lg:grid-cols-2 lg:gap-y-[32px] lg:gap-x-[14px] lg:w-[100%] xl:grid-cols-3 '>

              {/* first card */}

              <div className='flex flex-col p-[5px_10px_10px_10px] gap-5 lg:gap-[16px] hover:shadow-xl hover:bg-pink-200 relative'>
              <div className='bg-[#c73b0f] absolute -top-3 right-0 w-[70px] h-[70px] rounded-full shadow-lg shadow-white text-white text-center flex justify-center items-center'>50% <br></br> off</div>

                <img src="/assests/card-image1.jpg" alt="image1" className='rounded-[8px] lg:h-[230px] lg:object-cover' />

                <div className='flex justify-center items-center mt-[-38px] animate-pulse'>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className='flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Waffle</h2>
                  <p className='text-[16px] font-semibold'>Waffle with Berries</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$6.50</p>
                </div>

              </div>


              {/* second card */}

              <div className='flex flex-col  gap-4 lg:gap-[16px] p-[5px_10px_10px_10px] hover:shadow-xl hover:bg-pink-200 relative'>

                <img src="/assests/card-image2.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover  ' />
                <div className='bg-[#c73b0f] absolute -top-2 right-0 p-3 rounded-sm shadow-lg shadow-white text-center text-white '>50% <br></br> off</div>

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40 hover:bg-blue-200 hover:border-pink-400 hover:scale-95 duration-700 hover:transition hover:ease-in-out'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" className='animate-pulse'/>Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Crème Brûlée</h2>
                  <p className='text-[16px] font-semibold'>Vanilla Bean Crème Brûlée</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$7.00</p>
                </div>

              </div>


              {/* Third Card */}

              <div className='flex flex-col gap-4 lg:gap-[16px] relative'>

                <img src="/assests/card-image3.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover ' />
                <div className='bg-[#c73b0f] absolute -top-1 right-2 p-3 rounded-b-full shadow-lg shadow-white text-center text-white animate-pulse' >50% <br></br> off</div>

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Macaron</h2>
                  <p className='text-[16px] font-semibold'>Macaron Mix of Five</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$8.00</p>
                </div>

              </div>

              {/* fourth card */}

              <div className='flex flex-col gap-4 lg:gap-[16px] relative'>

                <img src="/assests/card-4.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover ' />
                <div className='bg-[#c73b0f] absolute -top-5 -right-2 w-[70px] h-[70px] rounded-full shadow-lg shadow-white text-white text-center flex justify-center items-center skew-y-16'>50% <br></br> off</div>

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Tiramisu</h2>
                  <p className='text-[16px] font-semibold'>Classic Tiramisu</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$5.50</p>
                </div>

              </div>

              {/* fifth card */}

              <div className='flex flex-col gap-4 lg:gap-[16px] relative'>
              <div className='bg-[#c73b0f] absolute -top-1 right-0 p-3 rounded-b-full shadow-lg shadow-white text-white text-center flex justify-center items-center skew-x-8'>50% <br></br> off</div>

                <img src="/assests/card-5.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Baklava</h2>
                  <p className='text-[16px] font-semibold'>Pistachio Baklava</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$4.00</p>
                </div>

              </div>

              {/* sixth card */}
              <div className='flex flex-col gap-4 lg:gap-[16px]'>

                <img src="/assests/card-6.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Pie</h2>
                  <p className='text-[16px] font-semibold'>Lemon Meringue Pie</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$5.00</p>
                </div>

              </div>

              {/* seven Card */}

              <div className='flex flex-col gap-4 lg:gap-[16px]'>

                <img src="/assests/card7.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Cake</h2>
                  <p className='text-[16px] font-semibold'>Red Velvet Cake</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$4.50</p>
                </div>

              </div>


              {/* Eight Card */}

              <div className='flex flex-col gap-4 lg:gap-[16px]'>

                <img src="/assests/card8.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Brownie</h2>
                  <p className='text-[16px] font-semibold'>Salted Caramel Brownie</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$4.50</p>
                </div>

              </div>


              {/* ninght Card */}

              <div className='flex flex-col gap-4 lg:gap-[16px]'>

                <img src="/assests/card9.jpg" alt="image1" className='rounded-[8px] lg:h-[232px] lg:object-cover' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Panna Cotta</h2>
                  <p className='text-[16px] font-semibold'>Vanilla Panna Cotta</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$6.50</p>
                </div>

              </div>

            </div>


          </div>


          {/* Cart Section */}

          <div className=' p-[24px] bg-white rounded-[12px] lg:max-w-fit lg:h-fit hover:bg-[#fcf8f6]  hover:shadow-xl'>
            <div className='flex flex-col gap-[24px] w-[100%] lg:w-[350px]'>
              <h1 className='text-[24px] text-[#C73B0F] font-[700]'>Your Cart (0)</h1>
              <div className='flex flex-col gap-4 justify-center items-center p-[16px_0]'>
                <img src="/assests/cartimagecake.svg" alt=""  className=' transition delay-100 animate-bounce'/>
                <p className='text-[#87635A] text-[14px] font-[600] '>Your added items will appear here</p>
              </div>
            </div>
          </div>


          {/* ------ */}
        </div>

      </div>
    </>
  )
}

export default App
