import './App.css'

function App() {


  return (
    <>
      <div className='bg-[#fcf8f6] w-full h-full p-[1.5rem]'>

        {/* main container */}

        <div>

          {/* Desserts section */}

          <div>

            <h1 className='text-[40px] font-[700] tracking-tight text-left pb-8'>Desserts</h1>

            {/* cards Section */}

            <div className='grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 lg:grid-cols-3'>

              {/* first card */}

              <div className='flex flex-col gap-4'>

                <img src="/assests/card-image1.jpg" alt="image1" className='rounded-[8px]' />

                <div className='flex justify-center items-center mt-[-38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className='flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Waffle</h2>
                  <p className='text-[16px] font-semibold'>Waffle with Berries</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$6.50</p>
                </div>

              </div>


              {/* second card */}

              <div className='flex flex-col gap-4'>

                <img src="/assests/card-image2.jpg" alt="image1" className='rounded-[8px]' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Crème Brûlée</h2>
                  <p className='text-[16px] font-semibold'>Vanilla Bean Crème Brûlée</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$7.00</p>
                </div>

              </div>


              {/* Third Card */}

              <div className='flex flex-col gap-4'>

                <img src="/assests/card-image3.jpg" alt="image1" className='rounded-[8px]' />

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

              <div className='flex flex-col gap-4'>

                <img src="/assests/card-4.jpg" alt="image1" className='rounded-[8px]' />

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

              <div className='flex flex-col gap-4'>

                <img src="/assests/card-5.jpg" alt="image1" className='rounded-[8px]' />

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
              <div className='flex flex-col gap-4'>

                <img src="/assests/card-6.jpg" alt="image1" className='rounded-[8px]' />

                <div className='flex justify-center items-center -mt-[38px] '>
                  <button className='flex  font-semibold text-sm p-[12px]  bg-white border-[#ad8a85] border gap-2 items-center justify-center rounded-full w-40'><img src="/assests/icon-add-to-cart.svg" alt="cart-icon" />Add to Cart </button>
                </div>


                <div className=' flex flex-col gap-1'>
                  <h2 className='text-[14px] text-[#87635a]'>Pie</h2>
                  <p className='text-[16px] font-semibold'>Lemon Meringue Pie</p>
                  <p className='text-[#c73b0f] text-[16px] font-semibold'>$5.00</p>
                </div>

              </div>

            </div>


          </div>


          {/* Cart Section */}

          <div>

          </div>


          {/* ------ */}
        </div>

      </div>
    </>
  )
}

export default App
