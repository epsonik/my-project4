import React, {Component} from 'react'
import Baner from "./Baner";
import Pricing from "./Pricing";
import Footer from "./Footer";
import {ChipIcon, SupportIcon} from "@heroicons/react/solid";
import {ArrowSmRightIcon, PhoneIcon} from "@heroicons/react/outline";
import Organizatorzy from "./Organizatorzy";
import Sponsorzy from "./Sponsorzy";

export default class Kongres extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <Baner/>
        <Opis/>
        <PaneleTematyczne/>
        <Pricing/>
        <AgendaKongres/>
        <Organizatorzy data={this.props.data}/>
        <Sponsorzy data={this.props.data}/>
        <Footer/>
      </>
    );
  }
}

function Opis() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Opis kongresu</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quando cetero his ne, eum admodum
            sapientem ut.</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Cele</h3>
            <p className="mt-3 text-lg dark:text-gray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro.
              Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Per ei quaeque sensibus</h4>
                  <p className="mt-2 dark:text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem,
                    ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cu imperdiet posidonium sed</h4>
                  <p className="mt-2 dark:text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et,
                    elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Nulla omittam sadipscing mel ne</h4>
                  <p className="mt-2 dark:text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim
                    commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img src="https://source.unsplash.com/random/360x480" alt=""
                 className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"/>
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Postanowienia</h3>
              <p className="mt-3 text-lg dark:text-gray-400">Per odio fabellas consulatu cu. Utroque detracto mel ea,
                quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                           className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cibo augue offendit has ad</h4>
                    <p className="mt-2 dark:text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit,
                      odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                           className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">At eum ferri luptatum lobortis</h4>
                    <p className="mt-2 dark:text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad.
                      Ne has quod periculis. Te sit primis iisque efficiantur.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                           className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Dicunt verterem evertitur eu
                      sea</h4>
                    <p className="mt-2 dark:text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum
                      per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="https://source.unsplash.com/random/361x481" alt=""
                   className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"/>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}


function AgendaKongres() {
  return (
    <section className="dark:text-gray-600">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div
              className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400">
              <h3 className="text-3xl font-semibold">Kongres</h3>
              <span
                className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Agenda Konkresu</span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div
              className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time>
                <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
              <div
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
                <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet
                  tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
              </div>
              <div
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
                <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl,
                  sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula
                  enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaneleTematyczne() {
  return (
    <div name='support' className='w-full my-2'>

      <div className='max-w-[1240px] mx-auto px-2 py-20 '>
        <div className='px-4 py-20'>
          <h3 className='text-5xl font-bold py-6 text-center'>Panele tematyczne</h3>
          <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem
            quisquam unde beatae, minus illo et cum vel?</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Panel A</h3>
              <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Panel B</h3>
              <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Panel C</h3>
              <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative flex items-center justify-center w-full dark:text-gray-50">
    //   <button aria-label="Slide back" type="button"
    //           className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
    //     <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg"
    //          className="w-4 h-4">
    //       <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    //             strokeLinejoin="round"></path>
    //     </svg>
    //   </button>
    //   <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
    //     <div className="relative flex flex-shrink-0 w-full sm:w-auto">
    //       <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
    //            src="https://source.unsplash.com/random/240x360/?1" alt="Image 1"/>
    //     </div>
    //     <div className="relative flex flex-shrink-0 w-full sm:w-auto">
    //       <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
    //            src="https://source.unsplash.com/random/240x360/?2" alt="Image 2"/>
    //     </div>
    //     <div className="relative flex flex-shrink-0 w-full sm:w-auto">
    //       <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
    //            src="https://source.unsplash.com/random/240x360/?3" alt="Image 3"/>
    //     </div>
    //     <div className="relative flex flex-shrink-0 w-full sm:w-auto">
    //       <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
    //            src="https://source.unsplash.com/random/240x360/?4" alt="Image 4"/>
    //     </div>
    //     <div className="relative flex flex-shrink-0 w-full sm:w-auto">
    //       <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
    //            src="https://source.unsplash.com/random/240x360/?5" alt="Image 5"/>
    //     </div>
    //   </div>
    //   <button aria-label="Slide forward" id="next"
    //           className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
    //     <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"
    //          className="w-4 h-4">
    //       <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    //             strokeLinejoin="round"></path>
    //     </svg>
    //   </button>
    // </div>
  );
}
