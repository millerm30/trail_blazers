import React from 'react';

const NavBar = () => {
  
  return (
    <div className="navbar justify-between bg-[#023047]">
      <div>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden hover:bg-[#FB8500] rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#023047] rounded-box w-52"
          >
            <li>
              <a
                className="hover:bg-[#FB8500] rounded-lg text-white"
                href="/trail_blazers/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#FB8500] rounded-lg text-white"
                href="/trail_blazers/About"
              >
                About Us
              </a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between hover:bg-[#FB8500] rounded-lg text-white">
                Photos
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#023047]">
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/RedBeachPhotos"
                  >
                    Red Beach
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/NakedBeachPhotos"
                  >
                    Naked Man Beach
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/PlateCoveWestPhotos"  
                  >
                    Plate Cove West
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/PlateCoveEastPhotos"  
                  >
                    Plate Cove East
                  </a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between hover:bg-[#FB8500] rounded-lg text-white">
                Around Town
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#023047]">
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/RedBeachTrail"
                  >
                    Red Beach Trail
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/NakedManTrail"
                  >
                    Naked Man Beach Trail
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/Restaurants"
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-[#FB8500] rounded-lg text-white"
                    href="/trail_blazers/Lodging"
                  >
                    Lodging
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="hover:bg-[#FB8500] rounded-lg text-white"
                href="/trail_blazers/Contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="hover:bg-[#FB8500] rounded-lg text-white"
              href="/trail_blazers/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-[#FB8500] rounded-lg text-white"
              href="/trail_blazers/About"
            >
              About Us
            </a>
          </li>
          <li tabIndex={0}>
            <a className="hover:bg-[#FB8500] rounded-lg text-white">
              Photos
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-[#023047]">
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/RedBeachPhotos"
                >
                  Red Beach
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/NakedBeachPhotos"
                >
                  Naked Man Beach
                </a>
              </li>
              <li>
                <a 
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/PlateCoveWestPhotos"
                >
                  Plate Cove West
                </a>
              </li>
              <li>
                <a 
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/PlateCoveEastPhotos"  
                >
                  Plate Cove East
                </a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className="hover:bg-[#FB8500] rounded-lg text-white">
              Around Town
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-[#023047]">
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/RedBeachTrail"
                >
                  Red Beach Trail
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/NakedManTrail"
                >
                  Naked Man Beach Trail
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/Restaurants"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#FB8500] rounded-lg text-white"
                  href="/trail_blazers/Lodging"
                >
                  Lodging
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:bg-[#FB8500] rounded-lg text-white"
              href="/trail_blazers/Contact"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar