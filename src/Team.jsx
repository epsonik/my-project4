import React, {Component} from 'react';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: props.data.team,
    }
  }

  render() {
    const {team} = this.state
    return (
      <>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the
              scenes</h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
              {team ? team.map((d, i) => (
                <div
                  className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96
             lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                  <img alt=""
                       className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                       src={d.path}/>
                  <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-snug">{d.name}</p>
                    <p>{d.title}</p>
                  </div>
                  <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <a rel="noopener noreferrer" href="#" title="Email"
                       className="dark:text-gray-900 hover:dark:text-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                           className="w-5 h-5">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </a>

                  </div>
                </div>
              )) : 'Loading'}
            </div>
          </div>
        </section>
      </>
    );
  }
  ;
}
