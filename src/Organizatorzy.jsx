import React, {Component} from "react";
import IMAGES from "./assets/data";

export default class Organizatorzy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="flex flex-col text-left w-full mb-5">
            <p className="lg:w-2/3  leading-relaxed text-base">Organizatorzy</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 sm:grid-cols-2">
            {IMAGES.organizatorzy ? IMAGES.organizatorzy.map((d, i) => (
              <img className="object-cover w-full dark:bg-gray-500 aspect-square"
                   src={d.path}/>
            )) : 'Loading'}

          </div>
        </div>
      </section>
    )
      ;
  }
}
