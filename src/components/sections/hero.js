import React from 'react'
import Icon from '../icons'
import { socialMedia } from '../../../config'

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col px-4 pt-32 h-view-minus-nav sm:pt-64"
    >
      <div className="container flex flex-col flex-grow h-full mx-auto mb-16">
        <p className="text-4xl font-bold sm:text-6xl dark:text-green-400">
          Matthew Jarman
        </p>
        <p className="mb-4 text-2xl font-bold text-gray-500 dark:text-gray-300 sm:text-4xl">
          Software Developer
        </p>
        <div className="flex flex-row">
          {socialMedia.map(({ name, icon, url }, index) => {
            return (
              <a
                key={`social-media-${index}`}
                target="_blank"
                rel="noreferrer"
                href={url}
                alt={name}
              >
                <Icon
                  className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 fill-current w-10 h-10 mr-2"
                  name={icon}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
