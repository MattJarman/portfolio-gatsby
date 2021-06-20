import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from './icons'
import ThemeSwitcher from './theme-switcher'
import { navLinks } from '../../config'
import { Transition } from '@headlessui/react'
const { menu } = navLinks

function StyledNav() {
  const [hidden, setHidden] = useState(true)

  function toggleHidden() {
    setHidden(!hidden)
  }

  function hide() {
    setHidden(true)
  }

  return (
    <nav className="relative transition-colors duration-300 dark:bg-rich-black">
      <div>
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-prussian-blue transition-colors duration-300 py-4 md:justify-start md:space-x-4 px-4 h-20">
            <div className="flex mr-2">
              <a className="cursor-pointer" href="/#top">
                <span className="sr-only">Home</span>
                <svg
                  id="Layer_1"
                  className="w-10 h-10 fill-current text-green-500"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                >
                  <title>mj</title>
                  <path
                    className="cls-1"
                    d="M247.08,48.53q-4.62-5.19-12.53-5.2c-.21,0-.41,0-.61,0l-.66,0q-11,0-17.52,12.77L150.13,181.72,84.21,56.1Q77.67,43.34,66.09,43.33q-8.31,0-13.21,5.2T48,62.34v175.8q0,8.31,4.45,13.06T64.61,256q7.71,0,12.32-4.9t4.6-12.91V117.27l50.78,94.14q3.57,6.84,7.72,9.8a16.42,16.42,0,0,0,9.8,3,15.87,15.87,0,0,0,9.8-3.12,29.53,29.53,0,0,0,7.73-9.65l50.3-95.28v79q0,14.55-5.55,21.68t-16.36,7.72l-8.44.59q-7.12.6-10.42,4.31t-3.3,10.84q0,16.64,20.32,15.73l8.44-.59q49.35-4.16,49.35-60.28V62.34Q251.7,53.73,247.08,48.53Z"
                  />
                </svg>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                id="mobile-menu-button"
                type="button"
                onClick={toggleHidden}
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-prussian-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="pointer-events-none h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex lg:flex-1 space-x-6">
              {menu.map(({ name, url }, index) => {
                return (
                  <a
                    key={`main-menu-${index}`}
                    href={url}
                    className="text-2xl text-gray-400 hover:text-gray-500"
                  >
                    {name}
                  </a>
                )
              })}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="https://github.com/MattJarman"
                target="_blank"
                className="w-7 h-7 mr-3 fill-current text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500"
                rel="noreferrer"
              >
                <Icon rel="noreferrer" name="github" />
              </a>
              <ThemeSwitcher className="ext-copy-primary cursor-pointer w-7 h-7 text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500" />
            </div>
          </div>
        </div>
        <Transition
          show={!hidden}
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transform duration-100 ease-in"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
            <div className="transition-colors duration-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-rich-black divide-y-2 divide-gray-100 dark:divide-prussian-blue">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <a className="cursor-pointer" href="/#top">
                    <span className="sr-only">Me</span>
                    <svg
                      id="Layer_1"
                      className="w-10 h-10 fill-current text-green-500"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 300"
                    >
                      <title>mj</title>
                      <path
                        className="cls-1"
                        d="M247.08,48.53q-4.62-5.19-12.53-5.2c-.21,0-.41,0-.61,0l-.66,0q-11,0-17.52,12.77L150.13,181.72,84.21,56.1Q77.67,43.34,66.09,43.33q-8.31,0-13.21,5.2T48,62.34v175.8q0,8.31,4.45,13.06T64.61,256q7.71,0,12.32-4.9t4.6-12.91V117.27l50.78,94.14q3.57,6.84,7.72,9.8a16.42,16.42,0,0,0,9.8,3,15.87,15.87,0,0,0,9.8-3.12,29.53,29.53,0,0,0,7.73-9.65l50.3-95.28v79q0,14.55-5.55,21.68t-16.36,7.72l-8.44.59q-7.12.6-10.42,4.31t-3.3,10.84q0,16.64,20.32,15.73l8.44-.59q49.35-4.16,49.35-60.28V62.34Q251.7,53.73,247.08,48.53Z"
                      />
                    </svg>
                  </a>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={hide}
                      className="bg-white dark:bg-rich-black transition-colors duration-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {menu.map(({ name, url, icon }, index) => {
                      return (
                        <a
                          key={`mobile-menu-${index}`}
                          href={url}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-prussian-blue text-gray-900"
                        >
                          <div className="flex items-center justify-center w-6 text-green-500">
                            <Icon
                              className="text-green-500 dark:text-green-400 text-xl fill-current"
                              name={icon}
                            />
                          </div>
                          <span className="ml-3 text-base text-gray-700 dark:text-gray-200">
                            {name}
                          </span>
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </div>
              <div className="py-4 px-5">
                <div className="flex items-center justify-end">
                  <a
                    href="https://github.com/MattJarman"
                    target="_blank"
                    className="w-6 h-5 mr-3 fill-current text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500"
                    rel="noreferrer"
                  >
                    <Icon name="github" />
                  </a>
                  <ThemeSwitcher className="cursor-pointer w-6 h-6 text-gray-400 hover:text-gray-500 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  )
}

function Header({ siteTitle }) {
  return (
    <header>
      <StyledNav />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
