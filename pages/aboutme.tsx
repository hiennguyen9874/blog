import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Layout, SEO } from '@components/common';

const AboutMePage: NextPage = () => (
  <Layout>
    <SEO title="All posts" />
    <div className="py-2 md:py-8">
      <div className="mt-10">
        <p className="text-6xl font-semibold text-gray-800 leading-tight dark:text-white">
          About Me
        </p>
        <p className="mt-4 text-xl font-semibold text-gray-800 leading-tight dark:text-white">
          The future belongs to those who believe in the beauty of their dreams.
        </p>

        <div className="mt-8 flex flex-wrap justify-center">
          <div className="py-4">
            <img
              src="/assets/img/aboutme.jpg"
              alt="aboutme"
              className="shadow rounded-xl max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>

        <div className="flex justify-between container mx-auto mt-10">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between">
              <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                <h2>My Story</h2>
              </div>
            </div>
            
            <div className="mt-10 bg-white dark:border-gray-700 dark:bg-gray-700 rounded-2xl">
              <div className="px-8 py-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ac elit nec felis faucibus pellentesque in sit amet neque.
                </p>
                <p className="mt-4">
                  Nulla est elit, feugiat et lacinia nec, aliquam sit amet est.
                  Ut in consequat ipsum, in sagittis felis.
                </p>
                <p className="mt-4">
                  Phasellus arcu mauris, fermentum ac dui quis, blandit pharetra
                  orci. lacus et eros suscipit malesuada. Suspendisse hendrerit
                  leo vitae. Sed in ipsum porttitor. Pellentesque sollicitudin
                  pharetra.
                </p>
                <p className="mt-4">
                  Sed rutrum odio eu sapien aliquam, quis blandit mi lobortis.
                  Vivamus venenatis sem eu ante laoreet facilisis:
                </p>
                <ul className="list-disc list-inside mx-8 mt-4">
                  <li>Cotidieque reformidans</li>
                  <li>Mucius sensibus</li>
                  <li>Sit primis iudicabit</li>
                </ul>
                <p className="mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Fusce odio dolor,
                  rhoncus ac purus id, bibendum malesuada neque.
                </p>
                <p className="mt-4">
                  At sit consul aperiri omittam ullum. Usu ut option tibique
                  maluisset, ornatus cum ad, pri tale cotidieque reformidans ut.
                </p>
                <p className="mt-4">
                  Eum ludus iudico ne. Vel labitur habemus vituperata vix!
                </p>
              </div>
            </div>
          </div>
          <div className="ml-10 w-1/2 hidden lg:block">
            <div className="flex items-center justify-between" key="label">
              <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                <h2>Art Directing</h2>
              </div>
            </div>

            <div className="mt-10 px-6 py-4 bg-white dark:border-gray-700 dark:bg-gray-700 rounded-2xl">
              <p>
                During the brainstorming process, art directors, co-workers, and
                clients are engaged in imagining what the finished piece or
                scene might look like.
              </p>
            </div>

            <div
              className="flex items-center justify-between mt-10"
              key="label"
            >
              <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                <h2>Digital Marketing</h2>
              </div>
            </div>

            <div className="mt-10 px-6 py-4 bg-white dark:border-gray-700 dark:bg-gray-700 rounded-2xl">
              <p>
                Digital marketing channels are systems based on the Internet
                that can create, accelerate, and transmit product value from
                producer to a consumer terminal, through digital networks
              </p>
            </div>

            <div
              className="flex items-center justify-between mt-10"
              key="label"
            >
              <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                <h2>Creative Designing</h2>
              </div>
            </div>

            <div className="mt-10 px-6 py-4 bg-white dark:border-gray-700 dark:bg-gray-700 rounded-2xl">
              <p>
                A core responsibility of the designer's job is to present
                information in a way that is both accessible and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default AboutMePage;
