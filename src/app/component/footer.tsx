export default function Footer() {
    return (
      <footer className="bg-[#EEEFFB] gap-2 text-[#FB2E86] py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 px-6">
          {/* First column: Sign-up and Contact Info */}
          <div className="flex-col col-span-2">
            <div className="flex-col justify-around px-4">
              <b className="text-lg">Hekto</b>
              <br />
              {/* Email Input and Sign-Up Button */}
              <div className="flex mt-4 items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-[#8A8FB9] border-2 border-[#8A8FB9] p-2 w-full  focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
                <button className="bg-[#FB2E86] text-white px-4 py-2  hover:bg-[#FB2E86] focus:outline-none focus:ring-2 focus:ring-[#FB2E86] w-56">
                  Sign Up
                </button>
              </div>
              <p className="mt-4">Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
  
          {/* Categories 1 */}
          <div className="flex flex-col justify-around">
            <b className="text-lg">Categories</b>
            <p>Laptops & Computers</p>
            <p>Smartphones</p>
            <p>Accessories</p>
            <p>Home Appliances</p>
            <p>Fashion</p>
          </div>
  
          {/* Categories 2 */}
          <div className="flex flex-col justify-around">
            <b className="text-lg">Categories</b>
            <p>Laptops & Computers</p>
            <p>Smartphones</p>
            <p>Accessories</p>
            <p>Home Appliances</p>
            <p>Fashion</p>
          </div>
  
          {/* Categories 3 */}
          <div className="flex flex-col justify-around">
            <b className="text-lg">Categories</b>
            <p>Laptops & Computers</p>
            <p>Smartphones</p>
            <p>Accessories</p>
            <p>Home Appliances</p>
            <p>Fashion</p>
          </div>
        </div>
        <img src="Group 245.png" alt="" className="flex justify-end" />
      </footer>
    );
  }
  