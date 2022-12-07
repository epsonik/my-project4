import React, {Component} from 'react'
import Baner from "./Baner";
import Footer from "./Footer";
import {MdCoffee} from "react-icons/md";
import Organizatorzy from "./Organizatorzy";
import Sponsorzy from "./Sponsorzy";

export default class BalNaukowca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'pl',
    }
  }

  render() {
    const {language} = this.state;
    return (
      <>
        <Baner/>
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
          <label htmlFor="Toggle3"
                 className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
            <input id="Toggle3" type="checkbox" className="hidden peer"/>
            <span className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300"
                  onClick={() => this.setState({language: 'pl'})}>Polish</span>
            <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400"
                  onClick={() => this.setState({language: 'eng'})}>English</span>
          </label>
          <div name="polish" className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video"/>'
              {language == "pl" ?
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">po polsku</span>
                  <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div>
                :
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                  <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div>
              }
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video"/>
              {language == "pl" ?
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                  <h3 className="text-3xl font-bold">po polsku</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div> :
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                  <h3 className="text-3xl font-bold">po angielsku</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div>
              }
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video"/>
              {language == "pl" ?
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                  <h3 className="text-3xl font-bold">polski</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div> :
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                  <h3 className="text-3xl font-bold">angielski</h3>
                  <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    aliquam possimus quas, error esse quos.</p>
                  <button type="button" className="self-start">Action</button>
                </div>
              }
            </div>
          </div>
        </section>
        <Organizatorzy data={this.props.data}/>
        <Sponsorzy data={this.props.data}/>
        <Footer/>
      </>
    )
      ;
  }
}


function Agenda() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-100">
      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-2xl">

        <h3 className="text-2xl  text-gray-700 font-bold mb-6 -ml-3">Agenda</h3>

        <ol className="border-l-2 border-blue-600">
          <li>
            <div className="md:flex flex-start">
              <div className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full -ml-3">
                <MdCoffee color="white" size="60px"/>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">
                    Pierwsza konferencja</a>
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">8:00 -9:00</a>
                </div>
                <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque
                  diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in
                  sodales vehicula.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="md:flex flex-start">
              <div className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full -ml-3">
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">Druga konferencja</a>
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">12:00 -13:00</a>
                </div>
                <p className="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium
                  error
                  architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="md:flex flex-start">
              <div className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full -ml-3">
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">Awesome
                    Employers</a>
                  <a href="#!"
                     className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300
                    transition ease-in-out text-sm">21
                    / 12 / 2021</a>
                </div>
                <p className="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                  natus!
                  Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum
                  molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
    ;
}

function AgendaBal() {
  return (
    <section className="dark:text-gray-600">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div
              className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400">
              <h3 className="text-3xl font-semibold">Bal Naukowca</h3>
              <span
                className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Agenda Balu</span>
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
