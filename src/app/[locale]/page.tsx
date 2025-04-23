import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";




const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm5 11H9v-2h6v2zm-3-5h-2V8h2v2zm-2 8h2v-2H10v2zm8-8h-2V8h2v2zm-2 8h2v-2h-2v2z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
        <path d="m7 16.5-4.74-2.85M7 16.5l5-3M7 16.5V19M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
        <path d="m17 16.5-5-3M17 16.5l4.74-2.85M17 16.5V19M15.97 5.88A2 2 0 0 0 15 4.17V2.83a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8A2 2 0 0 0 5 2.83v1.34a2 2 0 0 0 .97 1.71L9 7.5l5-3 1.97-1.62Z" />
        <path d="m10 4.5-5.74 3.45M14 4.5l5.74 3.45M12 10.5 7 7.5l-2-1.5M12 10.5 17 7.5l2-1.5M7 7.5v9M17 7.5v9" />
      </svg>
    ),
  },
];


export default function Home() {

const t = useTranslations()


  return (
    <div className="flex flex-col">
      <section id="home" className="bg-blue-gradient flex items-center pt-20 min-h-screen">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                { t('home.header')}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                { t('home.desc') }
              </p>
              <button className="gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center">
                { t('home.btn_text') }
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="feature-card p-10 rounded-2xl text-left bg-white bg-opacity-5">
                <ul className="space-y-5 text-xl text-white">
                  {[...Array(4)].map((_, index) => (
                    <li className="flex items-center" key={index}>
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-4"></div>
                      <span>{ t(`home.content-${index+1}`) }</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-right mt-4 mr-6">
                <h2 className="text-3xl font-bold text-white">TechFlow</h2>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="about" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              { t('about.header') }
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              { t('about.desc') }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{ t('about.content-title') }</h3>
              <p className="text-gray-300 mb-6">
                { t('about.content-description-1') }
              </p>
              <p className="text-gray-300">
              { t('about.content-description-2') }
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0a1a35] to-blue-600 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">98%</div>
                  <p className="text-gray-300">{ t('about.stat-label-1') }</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">85%</div>
                  <p className="text-gray-300">{ t('about.stat-label-2') }</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">50%</div>
                  <p className="text-gray-300">{ t('about.stat-label-3') }</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">3.5x</div>
                  <p className="text-gray-300">{ t('about.stat-label-4') }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="bg-blue-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              { t('features.header') }
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              { t('features.desc') }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-20 p-8 rounded-xl backdrop-blur-sm"
              >
                <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{ t(`features.card-${index+1}-title`) }</h3>
                <p className="text-gray-300">{ t(`features.card-${index+1}-desc`) }</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center">
              { t('features.btn_text') }
            </button>
          </div>
        </div>
      </section>



      <section id="intelligence" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              { t('maintenance.header') }
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              { t('maintenance.desc') }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 p-8 rounded-2xl order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { percent: '43%' },
                  { percent: '87%' },
                  { percent: '62%' },
                  { percent: '35%' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-black bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold text-blue-300 mb-2">{item.percent}</div>
                    <h3 className="text-xl font-medium mb-3 text-white">{ t(`maintenance.card-${idx+1}-title`) }</h3>
                    <p className="text-gray-300">{ t(`maintenance.card-${idx+1}-desc`) }</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{ t('maintenance.content-title') }</h3>
              <p className="text-gray-300 mb-6"> 
                { t('maintenance.content_desc') }
              </p>

              <ul className="space-y-4 mb-8">
                {[...Array(4)].map((_, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{ t(`maintenance.content-item-${idx+1}`) }</p>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center justify-center gap-2 h-10 px-8 py-3 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                { t('maintenance.btn_text') }
              </button>
            </div>
          </div>
        </div>
      </section>


      <section id="get-started" className="bg-blue-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="bg-black bg-opacity-20 rounded-2xl p-12 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                { t('operations.header') }
              </h2>
              <p className="text-xl text-gray-200">
                { t('operations.desc') }
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {i+1}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">{ t(`operations.step-${i+1}-title`) }</h3>
                  <p className="text-gray-300">{ t(`operations.step-${i+1}-desc`) }</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="gap-2 h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center mx-2 mb-3 md:mb-0">

                { t('operations.btn_schedule') }
              </button>
              <button className="gap-2 h-10 bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-all inline-flex items-center justify-center mx-2">
                { t('operations.btn_pricing') }
              </button>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                { t('contact.title') }
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                { t('contact.desc') }
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-white">{ t('contact.email') }</h3>
                    <p className="text-gray-300">info@techflow.example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-white">{ t('contact.phone') }</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-white">{ t('contact.address') }</h3>
                    <p className="text-gray-300">
                      123 Tech Lane, Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">{ t('contact.form-label') }</h3>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">{ t('contact.name-label') }</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">{ t('contact.email-label') }</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-300 mb-2">{ t('contact.company-label') }</label>
                  <input type="text" id="company" name="company" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">{ t('contact.message-label') }</label>
                  <textarea id="message" name="message" rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
                  { t('contact.send-message') }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
