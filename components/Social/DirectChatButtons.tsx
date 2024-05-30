import { Link } from "lucide-react";
import React from "react";

function DirectChatButtons() {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:divide-y text-center text-sm text-gray-600 mx-auto">
        {" "}
        <div className="w-80 mx-auto text-center">
          <Link
            className="w-full bg-gradient-to-tr from-green-600 to-green-500 transition-all duration-300 hover:from-green-600 hover:to-green-600 text-center p-4 text-slate-50 rounded-sm border border-green-700   shadow-md"
            href={"#"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              className="inline-block align-middle mb-1 mr-2"
            >
              <g
                fill="#e6e6e6"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.02289,7.85306 2.96289,11.28906l-2.92578,10.44141c-0.096,0.343 -0.00386,0.70984 0.24414,0.96484c0.191,0.197 0.45175,0.30469 0.71875,0.30469c0.08,0 0.16123,-0.0103 0.24023,-0.0293l10.89648,-2.69922c3.327,1.786 7.07328,2.72852 10.86328,2.72852c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM16.64258,14c0.394,0 0.78586,0.00548 1.13086,0.02148c0.363,0.018 0.85108,-0.138 1.33008,1c0.492,1.168 1.67236,4.03708 1.81836,4.33008c0.148,0.292 0.24678,0.63248 0.05078,1.02148c-0.196,0.389 -0.29384,0.63361 -0.58984,0.97461c-0.296,0.341 -0.62072,0.75948 -0.88672,1.02148c-0.296,0.291 -0.60377,0.60545 -0.25977,1.18945c0.344,0.584 1.52916,2.49306 3.28516,4.03906c2.255,1.986 4.15805,2.60253 4.74805,2.89453c0.59,0.292 0.9353,0.24252 1.2793,-0.14648c0.344,-0.39 1.47614,-1.70216 1.86914,-2.28516c0.393,-0.583 0.78613,-0.48797 1.32813,-0.29297c0.542,0.194 3.44516,1.60448 4.03516,1.89648c0.59,0.292 0.98481,0.43864 1.13281,0.68164c0.148,0.242 0.14825,1.40853 -0.34375,2.76953c-0.492,1.362 -2.85233,2.60644 -3.98633,2.77344c-1.018,0.149 -2.3067,0.21158 -3.7207,-0.23242c-0.857,-0.27 -1.95623,-0.62752 -3.36523,-1.22852c-5.923,-2.526 -9.79189,-8.41569 -10.08789,-8.80469c-0.295,-0.389 -2.41016,-3.1603 -2.41016,-6.0293c0,-2.869 1.52441,-4.27928 2.06641,-4.86328c0.542,-0.584 1.18217,-0.73047 1.57617,-0.73047z"></path>
                </g>
              </g>
            </svg>
            <span className="drop-shadow-md">Chat on WhatsApp</span>
          </Link>
        </div>
        <div className="w-80 mx-auto text-center ">
          <Link
            className="w-full bg-gradient-to-tr from-sky-500 to-sky-400 transition-all duration-300 hover:from-sky-500 hover:to-sky-500 text-center p-4 text-slate-50 rounded-sm border border-green-700   shadow-md"
            href={"#"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="inline-block align-middle mb-1 mr-2"
            >
              <g
                fill="#e6e6e6"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.69922,0 -23,9.60156 -23,21.5c0,6.30078 2.89844,12.19922 8,16.30078v8.80078l8.60156,-4.5c2.09766,0.59766 4.19922,0.79688 6.39844,0.79688c12.69922,0 23,-9.59766 23,-21.5c0,-11.79687 -10.30078,-21.39844 -23,-21.39844zM27.30078,30.60156l-5.80078,-6.20312l-10.80078,6.10156l12,-12.69922l5.90234,5.89844l10.5,-5.89844z"></path>
                </g>
              </g>
            </svg>
            <span className="drop-shadow-md">Chat on Messenger</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DirectChatButtons;
