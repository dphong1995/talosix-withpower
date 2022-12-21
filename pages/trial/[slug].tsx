import Link from "next/link";
import Image from "next/image";

export default function Search() {
  return (
    <div className="min-h-[80vh]">
      <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-0">
            <div className="grid grid-cols-1 gap-0">
              <div className="h-[92px]" />
              <div id="navbar-wrapper">
                <div
                  className="bg-white fixed top-0 left-0 right-0 z-navbarBackground w-screen md:h-[92px] h-[80px]"
                  id="navbar-background"
                />
                <div
                  className="grid grid-cols-1 gap-0 left-0 top-0 fixed w-full flex flex-col z-navbarContainer py-2"
                  id="navbar"
                >
                  <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
                    <div className="styles_shelf__AuCxB styles_justify___Ki3i styles_fill__KEpzv flex mx-auto">
                      <div className="mr-0">
                        <Link
                          className="link hover:opacity-50 cursor-pointer"
                          href="/"
                        >
                          <div className="flex items-center justify-center">
                            <div className="flex justify-center">
                              <span className="pr-1">
                                <img
                                  style={{ width: "150px" }}
                                  src="https://study.talosix.com/images/talosix-logo.png"
                                />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="flex items-center py-2">
                        <div className="rounded-full bg-white/[0.24] border-neutral100 cursor-pointer flex justify-center items-center border-2">
                          <div className="flex justify-center items-center md:h-[56px] h-[44px] w-24">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="user"
                              className="svg-inline--fa fa-user fa-1x mr-4 black"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                              />
                            </svg>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="bars"
                              className="svg-inline--fa fa-bars fa-1x black"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="z-10 bg-white pb-16 md:pb-0 flex flex-col md:block overflow-y-auto absolute left-0 w-screen transition-all duration-300 md:overflow-hidden h-full md:h-auto opacity-0 md:opacity-100 md:max-h-0 hidden">
                      <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
                        <div className="lg:hidden flex justify-center my-3">
                          <div className="styles_shelf__AuCxB justify-between mr-3 lg:mr-8">
                            <div className="mr-12">
                              <a href="/about-us">
                                <span className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                                  About Us
                                </span>
                              </a>
                            </div>
                            <div className="mr-12">
                              <a href="/for-sponsors">
                                <span className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                                  For Sponsors
                                </span>
                              </a>
                            </div>
                            <a href="/for-research-coordinators">
                              <span className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                                For Researchers
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-4 gap-12 grid-cols-1 max-w-screen-2xl mx-auto pb-5">
                          <div className="mb-2">
                            <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="stethoscope"
                                  className="svg-inline--fa fa-stethoscope fa-1x mr-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M480 128c-35.35 0-64 28.65-64 63.1c0 26.84 16.56 49.75 40 59.25V344c0 66.16-53.83 120-120 120c-64.28 0-116.5-50.93-119.4-114.5C293.1 337.6 352 271.8 352 191.1V57.1c0-9.094-5.141-17.41-13.27-21.47l-68-34C258.9-3.377 244.5 1.404 238.5 13.28C232.6 25.12 237.4 39.53 249.3 45.47L304 72.84V192c0 61.75-50.25 112-112 112S80 253.8 80 192V72.84l54.73-27.38C146.6 39.53 151.4 25.12 145.5 13.28C139.6 1.404 125.2-3.377 113.3 2.529l-68 34C37.14 40.59 32 48.9 32 57.1v134c0 80.2 59.51 146.2 136.6 157.6C171.6 439.6 245.3 512 336 512c92.64 0 168-75.38 168-168V251.3C527.4 241.8 544 218.8 544 192C544 156.7 515.3 128 480 128zM480 208c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S488.8 208 480 208z"
                                  />
                                </svg>
                                Conditions
                              </span>
                            </span>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <a href="/clinical-trials/tinnitus">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Tinnitus
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/adhd">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    ADHD
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/retinitis-pigmentosa">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Retinitis Pigmentosa
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/autism">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Autism
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/osteoarthritis">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Osteoarthritis
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/spinal-cord-injury">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Spinal Cord Injury
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/vitiligo">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Vitiligo
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/ocd">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    OCD
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/lyme-disease">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Lyme Disease
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/hpv">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    HPV
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="suitcase-medical"
                                  className="svg-inline--fa fa-suitcase-medical fa-1x mr-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M176 320H224v48C224 376.8 231.2 384 240 384h32c8.836 0 16-7.164 16-16V320h48c8.836 0 16-7.164 16-16v-32C352 263.2 344.8 256 336 256H288V208C288 199.2 280.8 192 272 192h-32C231.2 192 224 199.2 224 208V256H176C167.2 256 160 263.2 160 272v32C160 312.8 167.2 320 176 320zM448 96h-64V64c0-35.35-28.65-64-64-64H192C156.7 0 128 28.65 128 64v32H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM176 64c0-8.838 7.164-16 16-16h128c8.836 0 16 7.162 16 16v32h-160V64zM80 432H64c-8.801 0-16-7.201-16-16V160c0-8.801 7.199-16 16-16h16V432zM384 432H128v-288h256V432zM464 416c0 8.799-7.199 16-16 16h-16v-288H448c8.801 0 16 7.199 16 16V416z"
                                  />
                                </svg>
                                Treatments
                              </span>
                            </span>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <a href="/clinical-trials/psilocybin">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Psilocybin
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/ivf">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    IVF
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/dental-implant">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Dental Implant
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/weight-loss">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Weight Loss
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/smoking">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Smoking
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/prp">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Platelet-Rich Plasma
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/testosterone">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Testosterone
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/saxenda">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Saxenda
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/melatonin">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Melatonin
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/entresto">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Entresto
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="city"
                                  className="svg-inline--fa fa-city fa-1x mr-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M104 0C117.3 0 128 10.75 128 24V64H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V112H72C58.75 112 48 122.7 48 136V440C48 453.3 58.75 464 72 464H224C224 482 229.1 498.6 239.1 512H72C32.24 512 0 479.8 0 440V136C0 96.24 32.24 64 72 64H80V24C80 10.75 90.75 0 104 0zM352 304C352 295.2 359.2 288 368 288H400C408.8 288 416 295.2 416 304V336C416 344.8 408.8 352 400 352H368C359.2 352 352 344.8 352 336V304zM400 96C408.8 96 416 103.2 416 112V144C416 152.8 408.8 160 400 160H368C359.2 160 352 152.8 352 144V112C352 103.2 359.2 96 368 96H400zM352 208C352 199.2 359.2 192 368 192H400C408.8 192 416 199.2 416 208V240C416 248.8 408.8 256 400 256H368C359.2 256 352 248.8 352 240V208zM496 416C487.2 416 480 408.8 480 400V368C480 359.2 487.2 352 496 352H528C536.8 352 544 359.2 544 368V400C544 408.8 536.8 416 528 416H496zM480 272C480 263.2 487.2 256 496 256H528C536.8 256 544 263.2 544 272V304C544 312.8 536.8 320 528 320H496C487.2 320 480 312.8 480 304V272zM512 160H576C611.3 160 640 188.7 640 224V448C640 483.3 611.3 512 576 512H320C284.7 512 256 483.3 256 448V64C256 28.65 284.7 0 320 0H448C483.3 0 512 28.65 512 64V160zM464 64C464 55.16 456.8 48 448 48H320C311.2 48 304 55.16 304 64V448C304 456.8 311.2 464 320 464H576C584.8 464 592 456.8 592 448V224C592 215.2 584.8 208 576 208H464V64zM112 320C103.2 320 96 312.8 96 304V272C96 263.2 103.2 256 112 256H144C152.8 256 160 263.2 160 272V304C160 312.8 152.8 320 144 320H112zM96 368C96 359.2 103.2 352 112 352H144C152.8 352 160 359.2 160 368V400C160 408.8 152.8 416 144 416H112C103.2 416 96 408.8 96 400V368zM112 224C103.2 224 96 216.8 96 208V176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V208C160 216.8 152.8 224 144 224H112z"
                                  />
                                </svg>
                                Cities
                              </span>
                            </span>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <a href="/clinical-trials/houston-tx-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Houston, TX
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/new-york-city-ny-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    New York City, NY
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/boston-ma-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Boston, MA
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/san-francisco-ca-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    San Francisco, CA
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/dallas-tx-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Dallas, TX
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/san-antonio-tx-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    San Antonio, TX
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/baltimore-md-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Baltimore, MD
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/greensboro-nc-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Greensboro, NC
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/las-vegas-nv-paid-studies">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Las Vegas, NV
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/atlanta-ga">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Atlanta, GA
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="flag-checkered"
                                  className="svg-inline--fa fa-flag-checkered fa-1x mr-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M24 0C37.3 0 48 10.7 48 24V52l85-21.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.4-23.7-122.5-13.4L48 388V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V400 350.5 64 24C0 10.7 10.7 0 24 0zM48 150.7l80-17.4V81.5l-80 20v49.3zm0 49.1v46.9l80-17.4V182.5L48 199.9zm0 96v42.7l68.6-17.2c3.8-.9 7.6-1.8 11.4-2.5V278.5L48 295.9zm128 18.8c33.1 .7 65.9 8.7 96 23.7V288.5l-55.4-16.3c-13.2-3.9-27-5.1-40.6-3.6v46zm144 37c18.7 1.5 37.7-1.1 55.6-7.8l24.4-9.1V288L374.3 294c-17.9 4.1-36.1 5.5-54.3 4.3v53.5zm80-113V192L374.3 198c-17.9 4.1-36.1 5.5-54.3 4.3v47.8c14.5 1.4 29.2 .4 43.5-2.9l36.5-8.4zm0-96V92.9c-25.6 10.4-52.8 15.6-80 15.6v45.5c14.5 1.4 29.2 .4 43.5-2.9l36.5-8.4zM272 103.1c-16.1-3.7-31.9-9.4-47-16.9c-15.3-7.7-32.1-11.8-49-12.3v50.6c18.2-1.3 36.5 .6 54.1 5.8L272 142.5V103.1zm0 89.5l-55.4-16.3c-13.2-3.9-27-5.1-40.6-3.6v47.8c18.2-1.3 36.5 .6 54.1 5.8L272 238.5v-46z"
                                  />
                                </svg>
                                States
                              </span>
                            </span>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <a href="/clinical-trials/florida">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Florida
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/new-jersey">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    New Jersey
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/north-carolina">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    North Carolina
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/texas">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Texas
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/ohio">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Ohio
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/california">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    California
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/pennsylvania">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Pennsylvania
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/kentucky">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Kentucky
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/new-york">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    New York
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href="/clinical-trials/indiana">
                                  <span className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                    Indiana
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-0">
                <div className="relative">
                  <div className="grid grid-cols-1 gap-0 mx-auto my-2">
                    <div className="flex">
                      <Link
                        className="flex items-center leading-[14px] lg:px-0 px-1"
                        href="/clinical-trials/search"
                      >
                        <span className="neutral600 styles_Text-p-tiny__3REA2 inline my-2 styles_block__vwpC6 break-words">
                          All
                        </span>
                        <span className="neutral600 styles_Text-p-small___zIZy inline lg:mx-4 styles_block__vwpC6 break-words">
                          {" "}
                          &gt;{" "}
                        </span>
                      </Link>
                      <Link
                        className="flex items-center leading-[14px] lg:px-0 px-1"
                        href="/clinical-trials/search"
                      >
                        <span className="neutral600 styles_Text-p-tiny__3REA2 inline my-2 styles_block__vwpC6 break-words">
                          Alabama
                        </span>
                        <span className="neutral600 styles_Text-p-small___zIZy inline lg:mx-4 styles_block__vwpC6 break-words">
                          {" "}
                          &gt;{" "}
                        </span>
                      </Link>
                      <Link
                        className="flex items-center leading-[14px] lg:px-0 px-1"
                        href="/trial/phase-3-covid-19-6-2021-a698e"
                      >
                        <span className="neutral600 styles_Text-p-tiny__3REA2 inline my-2 styles_block__vwpC6 break-words">
                          Greensboro
                        </span>
                        <span className="neutral600 styles_Text-p-small___zIZy inline lg:mx-4 styles_block__vwpC6 break-words" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:rounded-2xl rounded-lg bg-organicDawn">
                  <div className="rounded-2xl p-8 flex space-x-6">
                    <div className="w-full md:w-2/3">
                      <h1 className="white styles_Text-h3__MCDgK mb-4 md:text-5xl md:leading-[1.15] styles_block__vwpC6 break-words">
                        BNT162b2 for COVID-19
                      </h1>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col bg-primary900/50 px-3 pt-1 rounded-lg">
                          <div className="flex items-center">
                            <span className="primary300 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                              Phase-Based Progress Estimates
                            </span>
                            <div className="mx-2">
                              <span tabIndex={0}>
                                <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x primary300 text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                            <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                              <div className="mr-2">
                                <div
                                  aria-label="Effectiveness 2 out of 3"
                                  className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green400"
                                  role="group"
                                >
                                  <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                  <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                  <div className="styles_mark__OhNvV bg-green500 mr-0.5 rounded-sm" />
                                  <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                    2
                                  </span>
                                </div>
                              </div>
                              <span className="green300 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                Effectiveness
                              </span>
                            </div>
                            <div className="styles_shelf__AuCxB mr-1 mt-2">
                              <div className="mr-2">
                                <div
                                  aria-label="Safety 3 out of 3"
                                  className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue300"
                                  role="group"
                                >
                                  <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                  <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                  <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                  <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                    3
                                  </span>
                                </div>
                              </div>
                              <span className="blue200 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                Safety
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-4">
                        <span className="white styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="location-dot"
                            className="svg-inline--fa fa-location-dot fa-1x mr-1 inline"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="currentColor"
                              d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                            />
                          </svg>
                          East-West Medical Research Institute, Honolulu, HI
                          (&gt;99 mi)
                        </span>
                        <span className="white styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="stethoscope"
                            className="svg-inline--fa fa-stethoscope fa-1x mr-1 inline"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M480 128c-35.35 0-64 28.65-64 63.1c0 26.84 16.56 49.75 40 59.25V344c0 66.16-53.83 120-120 120c-64.28 0-116.5-50.93-119.4-114.5C293.1 337.6 352 271.8 352 191.1V57.1c0-9.094-5.141-17.41-13.27-21.47l-68-34C258.9-3.377 244.5 1.404 238.5 13.28C232.6 25.12 237.4 39.53 249.3 45.47L304 72.84V192c0 61.75-50.25 112-112 112S80 253.8 80 192V72.84l54.73-27.38C146.6 39.53 151.4 25.12 145.5 13.28C139.6 1.404 125.2-3.377 113.3 2.529l-68 34C37.14 40.59 32 48.9 32 57.1v134c0 80.2 59.51 146.2 136.6 157.6C171.6 439.6 245.3 512 336 512c92.64 0 168-75.38 168-168V251.3C527.4 241.8 544 218.8 544 192C544 156.7 515.3 128 480 128zM480 208c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S488.8 208 480 208z"
                            />
                          </svg>
                          COVID-19
                          <span className="white rounded-xl p-2 px-3 mx-2 bg-white/10">
                            +6 More
                          </span>
                        </span>
                        <span className="white styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="hospital"
                            className="svg-inline--fa fa-hospital fa-1x mr-1 inline"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M296 96C296 87.16 303.2 80 312 80H328C336.8 80 344 87.16 344 96V120H368C376.8 120 384 127.2 384 136V152C384 160.8 376.8 168 368 168H344V192C344 200.8 336.8 208 328 208H312C303.2 208 296 200.8 296 192V168H272C263.2 168 256 160.8 256 152V136C256 127.2 263.2 120 272 120H296V96zM408 0C447.8 0 480 32.24 480 72V80H568C607.8 80 640 112.2 640 152V440C640 479.8 607.8 512 568 512H71.98C32.19 512 0 479.8 0 440V152C0 112.2 32.24 80 72 80H160V72C160 32.24 192.2 0 232 0L408 0zM480 128V464H568C581.3 464 592 453.3 592 440V336H536C522.7 336 512 325.3 512 312C512 298.7 522.7 288 536 288H592V240H536C522.7 240 512 229.3 512 216C512 202.7 522.7 192 536 192H592V152C592 138.7 581.3 128 568 128H480zM48 152V192H104C117.3 192 128 202.7 128 216C128 229.3 117.3 240 104 240H48V288H104C117.3 288 128 298.7 128 312C128 325.3 117.3 336 104 336H48V440C48 453.3 58.74 464 71.98 464H160V128H72C58.75 128 48 138.7 48 152V152zM208 464H272V400C272 373.5 293.5 352 320 352C346.5 352 368 373.5 368 400V464H432V72C432 58.75 421.3 48 408 48H232C218.7 48 208 58.75 208 72V464z"
                            />
                          </svg>
                          BNT162b2 - Biological
                        </span>
                      </div>
                      <div className="bg-primary900/50 rounded-lg mt-16 mr-16 hidden md:block">
                        <div className="p-4">
                          <div className="flex items-baseline">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="triangle-exclamation"
                              className="svg-inline--fa fa-triangle-exclamation fa-1x mr-3 text-base white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.6 32 227.2 39 218.1 53l-213.2 364C-10.59 444.9 9.851 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM52.58 432L255.1 84.8L459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44c0 17.36 14.11 31.44 31.48 31.44s31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96C232 293.3 242.8 304 256 304s24-10.75 24-24v-96C280 170.8 269.3 160 256 160S232 170.8 232 184z"
                              />
                            </svg>
                            <span className="white styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                              You have a chance of qualifying for this trial. We
                              made sure your application will take less than 5
                              minutes.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/3">
                      <div className="rounded-lg bg-white p-6">
                        <span className="neutral900 styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                          Eligibility
                        </span>
                        <div className="flex flex-col items-center">
                          <div className="hidden md:block">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfQuYHEW1/znVM7M7092zj2Q3ySZACMmGN2oA0eAl+EAB8cpVXiqiZMNbrpDdqPggPq5IdoIoPhA2iiDyyJ8ryBUFFCIaoggijwDZLJDIZvLY7Gu6e2Z2prvO/6vZmWWS7GZ3unsmsztd3zcfG6bOqTqn6jd16lTVOQhe8TTgaWBMDaCnG08DngbG1oAHEG92eBrYjwY8gHjTw9OABxBvDngasKcBbwWxpzePqkI04AGkQgbaE9OeBjyA2NObR1UhGvAAUiED7YlpTwMeQOzpzaOqEA14AKmQgfbEtKcBDyD29OZRVYgGPICUeKCJqNowjFrOeS2RrxYkXgvEahlQLRHViu4g4gAHHADkA2CxAURzgDE2IMvyACImS9zlim7OA4jLw09EGIsl3s0YnAiY+RwGhLUAmckvPtUOmxQAGYAMgGiACLoQaQMD+FsoFHoeEckhf488TwMeQBxOh1gyuZBM892M8AQCXIQIiwAg4JCtXfIhANiAiBuI0/Ocp5+vqanpssvMowPwAFLgLND15GkcaBEiLUKCRQQwt0AWJa1OBK8jwrME8DwD/ryiKI+VtAOTvDEPIBMYwFgsvhgYnIVAZwHgkRMgKeMq9AoBPgwcHg6HQ+vLuKNl0TUPIGMMgzY0dDSm+VmEdBYQvKcsRsvtTiBsQMKHyc8eVquqXnab/VTg5wEkbxQTicTBpsnPAgSxUnx4KgzwxGWgR4HgYZ+PPRwMBv89cbqpXdMDCAAM6vqFjFgWGI69TJN9xiQFUDjyh2sU5a7JLozT/lc0QGIx42JgcBkCnuBUkVORnoD+ARxuDYfln09F+SYiU0UCRNcTnyGEy4Bo8USUVPF1ENcjwa2KEvxVpemiogCiafHzQAADYEmlDbRL8q4DgltVNXSfS/zKnk1FAETT4v8FSJcB4IfKfkQmRQfpcSAUQPnfSdFdB52c0gCJxYyzsnuMMxzoyCMdQwME9Eh2j/LwVFXSlARIf39/rd9fdT0BfHGqDlw5yYUAN6fTQ9+sq6sbKKd+udGXKQeQWMz4ODK8HgDe4YaCPB4T1sC/iNM3w2H5wQlTTIKKUwYgk2jVSANAv7iRSwADDLCfgAaAcICQMr/AKG7/ItUiYC0HqsPhW8DiUwcA/nKeV1NtNZkSACm3VYOIYoDwVwD8E3B8BqtYv2RZA7FYbGDmzJmGkwm+Y8cOORwO11qSVEtDvI4YHc8QTgHKeOYy70nKoEyZ1WRSA6RcVg0BCES2ARCeJqQ/hUMH5hKgYRjHm4QnlwtgpsJqMmkBciBXjRwgOPG/AdKGza+99sTxxx8vTKeyKUTk0/XkYmKwmBEsJoDFAFRzADo4qVeTSQmQmK5fhMDuKPlgIzwNyO4FK32fqqq7St6+gwY1TWsEyX8eED8fCN7rgJU9UqIrVFX+qT3iA0c16QCiGcblQPiTEqosRUD3SijdK8vVvy9hu0VryjCSp1tknY+A55f09SPi9aoc/FbRBCsC40kFkJgeb0WA9iLoYRSWuBGQ3+eXpHurq6s3l6bN0raSTCYXpC3rfCB2HgAdVZLWiX6sqvJVJWnLhUYmDUA0I/ENIPqmCzLvnwXCQ0hwnywH762UAAgi0IRhJM4nhPOA4D+LrmOA+1UldF4J2nHcxKQAiG4kOohoqWNp98MAAX5tId1cI8v/KGY75c570DBOkAi/SACfKmpfCdapaujUorbhAvOyB4imx/8EAO93QdZRWRDAM0gQUdXQ2mK1MRn5alr8HEIQJu2Jxes/bVQV+eji8XfOuawBouvxNwjgUOdijsqhlwAjqlwdQUSzSG1MarbCVawZyVYEagWAacUQBgF2KUpoRjF4u8GzbAGi6fHiBUBD7CALI+Fw9SY3lDjVecRiyYUoUSsQtRRLVlUJleVcLMtO6Xp8JwE0uj4YBOsYY+2yXP2I67wrgKFhJM/gnLcBuv/gDAHeVJTQvHJTY9kBRNONlwHQbZfjWzC8z/hhuQ3AZOyPpsWvBgRhdh3kcv+fUJXQB1zm6YhdWQFE0+JPFuHXaR352KXh6upOR5ryiPfQQCw2dDhj1h0E8G43VYOIaxQ5WDRTrtC+lg1AND0u3jmfW6gA49S/J5kwLm1oaNBc5uuxA4BYLDYdmXQ3AJ7mqkLK6MS9LACiacaPAPFKN5WMAKsVJSTMAK8UWQOaEb8fCM5xsxkCaAsroYibPO3wOuAAKcYJOQG0hpXQajsK8WjsaUDTjNsB0V3TCOkKVT6wFxwPKEA0zbgc0N2LhwjwKUUJ3WNvmD0qJxrQ9fiNBLDCCY+9aQn458KK8ks3eRbC64ABJPue4zeFdHbcumSdqqrqunHreRWKpoGYkbgYida42QBxOvtAvXU/IAARLwF9/qon3QysQD620PNUuTkt7fMS6SKQiSfHrpV/memhUw9E1JQDAhBdj3/fzZA8yYQR9jxVrk1GVxgNe7h8Pa4wE4EsAG5WlNA1bvGbKJ+SA8Rt04q42RAOh3dPVGCvXuk00NPTo1YH5ZhbLR4IU6ukAHHbtCIOJ3tZktyafsXhE0smm9Hkbt15K7mpVVKAuGlaEeLSsBys2LD8xZnOxeGqadoSQEnsOR2XUptaJQOIm6YVAqxSlNCXHGvbY1AyDeh6/AIC+LUbDZbS1CoJQFw1rYg6VFVe5oaiPR6l1UBMjy9HADdOx0tmapUEIK6ZVghrVTnk9n2t0s6SCm9N1+MRAljuVA2lMrWKDhCRggAZ/tapQgDoMVWRKyyxpnOtlSMHTY8LU+sCp30jTh8Lh+Wipl4oPkB043cI6Cg/BwL8nXPzo5471+mUKg/6rPtX/Gg6yvQl8pOEFfnMYkpVVIAMZ3aCBxwK8BZx6bRwuOo1h3w88jLSQNb9+0fHj64IPlHMTFfFBYhuPOY47RnBf3svActoZrvYlezLxB84Y0mPq4rs7nuUvA4VDSDZhJn3OhJ+ksROciRjhRO78oqU4PxiJRYtHkD0uDgYcmRjMmRnegEWpjaCMoEgiP/OoZTrVKU4QeiKApBMHnKguxwJjdihykHvvMOREicHsWYkbncaUggBLyxGHveiAEQzEn8FosUOhqeXOFvsxa1yoMFJRJqJu8X4ekfB6RDXq3LwZLfFdh0gsZhxMTJ09GCGAL8SVoLfc1tYj1/5aiCmJ76MQDc46SFxWhoOy67ez3MfILrxDAKeYFdQEStXlYOLvXCgdjU4OemGw5wm1juJBUxA/wgrsquxhF0FyKCuX8iA3eloiAjO9QJJO9LgpCUWAbMB4X4nAnDgn61RFGf732K5eTUtfj+g/fAvIgWBooQ+7URBHu3k1oCux+92lHqBYK2qundfz7UVJJFIHGxaJB7GVNsdIo50YqXn57Cru6lCJ/KTMMJnHMiT9Em4MBgM/tsBjxFS1wCiacaVgPgj251CeEiVQx+3Te8RThkNaEb8QUeZroiuUlX5x24oxD2A6MYfAND2bVsvnpUbwzk1eDh/XEWPqor8ETe04QpAtKGhoyFtvWS/Q7hRkauPqZScgPb1VBmUImeibiRfcpRY1C8do1ZVvexUY64ARNcTXyGg79ruDNI3VFn+tm16j3DKaUAzjK8Doe2U0Qh4naIEHZ2rCKW6AhDNiD8NBO+xOUopv48dPVVTLdvUScWTZVJUm1ysAAFbykDYoMqh99qiddPN6zSKHgHdGVbki5wK4tFPPQ3EdOOXCPhZu5K5ERbK8QoS0+PfQwDbEUYYsjNkufr3dpXg0U1dDRhG8nRO3Ha6PAK4MayEvuxEQ44BounGRgA80lYnEJ5W5ZCTS437bXblypXs3/HgKQHONt4aaduVX3npNTfNB3+6fs2qLznxue+3/Usu+ZnfrB0Y9QJdrk9L21a1Smn/3bfdfM32pa3tZ0lI225rX/HPiehz2fLIFWT6Huj4wRd3Ll1x44lcst78xQ3XjRruc+m1q9+JjB/cEWl76HNtq2b6CS+6PdJ2o2gnn89E2i1lHc2IrwcCm6YSvaIqsqN0fo4Aouv6aQTsUdsKY+xqNVR9i236CRC2tLaLyRbviLSNTNRLVq4McV2OAuGdHatbr54AG1tVLrvmptmmZHUDQHIfBkif62hfcV9LazsR0slr2lesb1keeZgY//Oa9hUTCo3T0to+QIyfJkDe0tq+mwCuXhNpGzX21LLW9ms5wAfXRNrOaLl29UnA+IaOSFtm/PP5XP7lG+rSpu9FZvpOFKC1JbiLRFo8+QXg3HZuSQT2YUWpfsxulxwBJKbHv4QANm/d4iCQ2ayq6h6/7HYFGYvu4mtXH8cY/xcBfGxNpC0TAWNZa3s7AVwViIcafvKTK3W328zxywHEBzBj7xUsVycfIE76MR5A8nnvDZD87z7/le82SGn/LiKcu2Z161YnfXKDVtO0RgK2GRHDdvgR4HVhB94sRwDR9Lh4UnuenY4j4COKEixqRIq8SSgSsHyExcJzWH3fbNP0vUmEy9asbu34/PLIkQzp5wiwSPzSI9IfkbNlt61u3S3MEsb4L26PtL1jjwnW2n4fAvzm9kjbvcta2x8lAKGHpQAwLzhUdegtt1w9JOoXCpCWtlU/I87+Ifol6Jcuj1yEjC8HwiOAcBMgiaxZn++ItP1HFuj/Qku68LbvX/uSAAgA3AWEHwKkhQDQRYSrc7xaWts/DwCLOyJtLXsDZFlre4aPJVmXIcBHAeBgABBXNVIEIHTz2cRQ1bvvvuXqkUDUy5ZHbiQk7Ii0uZowZ7S5pOmJPwCQvUNohAdUOfRJO3NU0DgCSEyLdyHCYXYaJ8SvhuWg/bOTAhq9ZHlkOkfajoTfJKRTAGBuR6S1+bLWSIMJsA0A1hFn30PGFQD4PgBIcxTj0G5dFhPxyZwpkge4TUR465rVrd/PTsxpAPBrQnrwIDn+wMqVK7ktgLS2P41Ij9/evuL6ZcsjpxPSI4T0HUB6GAiXIKHYM+gdkTY1axq9bZ4NA0T04xvE+KPMkk4jpG8T4dlrVrc+2NLa/nUCOHNNpO2kUUysDB8GYBBnRwCSkEUAPgqcvYpILyDh9bevbs0EWPjCF35Ylaga0gHpM8JMLGAobFXVjMT1QLTSDjECbFGU0KF2aB0BZHBwcD6T/JvtNiwGXFWDf7ZNXyCh2AwjYXtGaM4W337T8qeXtravRoCrWSwcuu22S9Piu5xJBoSfAKS+CQLkldyven638vYgYh+SAY0oRHizANcok3wEIC2t7c8C0msd7Ss+k6Nb1tr+fwRwyn4A8nJHpG0kDoBYkYCzxR2rW4+eCEDEPmg0E2tZa/t3CeD8jkjbvOzKdT4B3DWoGPLalStTBQ5FwdUHdf3DDNgfCibM6dvHDg9XV9uKMG97BXF4d39AkYMNpXwUtXLlSl+3Lm8jgOfERjU7OdcBktnRvuKD+cpvaW3XCOlmJPzTRABCSKvWtK9YtfcA5gCCSFcTwGDue25JL/z8puUvjAOQBAIIT9PI+4ilre2Xiti2YwKE8IaO1a0jyUtb2ladAYQPdURaAy2tka+Nt4KMBZCcHJzxE36+6kvPtrS2izR3WzoibZ+zO2kLoXv22Wf9zQuP2G13H8KBX1SjKLbeKdkGiG4kvktEXylE0JG6CA+qcuhsW7QOiFpa2/+KAE/dHmm7Ljs5n0Kk3tvbV+zRl5bW9igC3E1IvwXCp0zTV3fHzdcM5JrObIgJ/ydnYhHh8jWrW/dJNFnwHiTPxGppbU8D4ZUdq1tvG2l3eeQCQLptLIAQwFfXRNp+tlf9X89RDH+3Ln/FLkAyq8byyBPEeNTymdeITTxw9p6Om5b/zcFwFETqaB9C9CNVlb9QUIPZyrYBojkI68MBrqlRQjfb6bATmr0BkvNmdURaQwBIgvfS5ZFDEGmLsLbIkv6CkrU5Z8dnQSXs2TeI8NoiA+RVIOzqWN161siEb1v1KyD8z7EAgkh/yQf70tb2exDgvR2RtkMKNbGEw6Ej0vbmiHnXtuqjRCiSrn4HAC7tiLQ1ORmLQmmdpAsngg1h1d61E1sAGb5tmUgAQFWhgor6DOkEWZaftUPrhGZvgIzsNwC+zRTje8mhQNCf9t+FAO8bAph5V6TNaGltfwsA0kh4JSfcgYyLvcMphQBE7Hk44R7u7Kqhqh3CxbzHOciem/T/JqQIcfaRNTdd+8Sya296DzEuTD5zP3uQGgD4UEekbV1L26r3AeETBPCNNZG2GyYKkOwGPCmcAwfJ8es3bjwS16491xKHrt26LPZkoo2VHZG2bzoZi0JpY/H4YuS2E4OmFDlYbee2uC2AGIbxLk74XKFCZusPqEqoziatI7KW1vanAPEvHe2tX80zl/4TAEQUFuEBEmUXZ/xMYWuLf1zStkrIKg6aMt8jQGbvQAB3dETabm5pbd8JSG0d7Sv2sXEvXnFjE+NMeMlGKxd3RNp+IQCScxoIAAPA47nJ17I88iNAuhQAfJm2CZ8kpBPyAZJHuxMAxJWd3L02EwnvvH11q/BGicPA/XqxcnyydYV+xEoBQNia29e0tEX+B4iuA8YP6lj1JeF4KGmJacag7X2IBe+pqQkVbBLaAohmGFcAob0XWwdo/zHeSArTSvKZdNuNXx7lqSbhJW3t85I+c+DOG67rHY+Xm9+L6ypU199cHQ91JQOpb5E4gY+0zRirDeGM2KopzbqqdznxMH1u5cpqMEK1c+X4rpzbuqW1Xbh539MRaXM1cshE9RVzkinAZoxnWwCJ6XFhhoy4HycqoKh3oPYfhfSxHOpevOLGUxlnV5iKceEdK1cmL15xo8o4ewGQns53/Zaqr1kTa5AIrxrNIVGKfsT0+LUIMOKlK7DNu1UlVPCctQUQzYhvAIKTCuzg8IrN8X3hcNDNJPN2ulH2NC0rbjwCOBP3yMSpvHgXIS51msz0HXwg7khd3LbqNEb4O6YYNbetXBk/EAqMxRInI6O/2Gob4W+qHCr4zZI9gOiJVwHocFsd9UtHq1VVG23RVhjR0mtuqgefeTFyJq5+PJVIBR7Lv+5RSnUIhwZK1qw17StsH9g57a82NHQUpC2bz2jxNVUJHlFoH2wCJC5uec4stDFRX2IwJxQKjbVxtcPSo6kQDcTj8dkWB7vOgR2qEppVqKrsAkS4eG3FvzL0mDJz5kyj0I569T0N7NixQ5aVsN3b10lVCQUL1WLBACGi6uwZSKFtifppVQnZe2NspzWPZsppQNPj4u6X345gihwMIuK+b3P2w6xggOi6PpOA2X1Is0tVQmO6KO0I7dFUlgY0PS7OexrtSI3AZymKsqMQ2oIBEovFDkfme7WQRvLqdqpKSLxV8IqnAVsa0PS4uJXbbIeYuHlEOBwuKBlswQAZHIyfxCTYYKuDAM+EldC77dB6NJ4GhAZievzvdlMkcBun6YUDRNc/woDZikKCgI8qStCVkJDedKlMDeh64g9k83UhB356jaIU5KYuHCBa/HyGcI/N4blPVULn26T1yDwNgJNn3pzggho1VFDm5YIBomnGZYD4U1tjRfgzVQ1eZovWI/I0AACalrg1e4GzcH0QXa6q8q2FEBYMkFhM/zIyZivmqRuBvAoRzqs79TTgJFAhcf6VcFgpKAqPB5CpN4emtERlDxDPxJrS86/shSt7E2vQ26SX/SSayh0s+036oOfmncrzr+xlK383r3dQWPaTaCp3sOwPCr2rJlN5+pW/bGV/1aQcLytOP+SIWZS2rgagaG9087jR4utmNb+PIZxBwJ/si3bZjvwtplOhbZf/FCzvHpb9ZcVyvO5e2zT/nQwyz1Nf6Yt2jpsPoq5pQRsCrgLC7/Rt3/R1J1Oi0LadtOXRgjhJL+/r7mKQND1eVg+mCp2kHkAmJ9QmxYOpLEDK6smtB5DJOeEL7fUkenJbXkEb3ADIjBmHNZp+dmiKpC5t22u9tbOOOEQC613E8GggiCKjl3q7O/dJ1zZe29NmLTgCJAhbnFID0a7n58yZE0xA8FgzzXYN7tz0pjr78GkBst7Jgb0LCYaQ0cuqP7V+y5Yt+3n5tsQ3bc62RcTZ0Qi8GQDfQsZehiQ9t3v3Ji038TIySOZMKWVu2bXrTfHQaI9SP3P+kehDtYobL0Wj0X0ilUyb05yJf5WTe/qs+e8yGbMGtnW+0NTUFEpi6FgktggIwhz5yyawDVq0U6RhKEqZPEEbyizsz3iTdO/RGs3EmtbUfBUB3AIElyDguwhptEuVv5PSvpaenldGXqXtr+1ps5rPJoT/zbb/rb5o5/V59e9ApD8T4S9GmU2djPDTu7dv2ic8a82MBfMkCe8GGDXs0i4i+GT/9s5MaJxpsxd8lQi/g4S39m7fdPme7Szx1TdFRShRkWvk/L5o5x55PupmHHE0StZLItJkX7RTBDvg9U3NIn7xLkZ4Jkf63Sgv+zQivKJ/+6ZfFQMhkybsT7kFjnMVIG+PrIieISaNToBnIdC7sl890Rft/FAu38dYbU+bvfD9RCRi6Yowpbf0RzszuRDz6o+0JCYwAP17OLkP5jIpaX7Lmr9z5+sjMX0b5hyxwOJWZ5ZwFxDcTQw7AeggJPg4AGSSqSLgx3ujmx7Ka0tMchFs2so1Kjx5iPBUtv6ve6ObPp0/qeuaFq5AoBsR6Ke90c1XiO+yAMmvthYJnucMjsi2n0nswxg7dXf3ayJFgqtlEgWOK6/Qo+4DhB6lauu8/jfeGMnpUde04AIEzCTIRICze6OdD+414Uc8aNNnLTyeI/0jOzt+2RftvHgUQImvdzHA/9gd3TSS3GV608KFHGj4WSjB9/u2d147Mqmbmh9EABFLeL3PTH8i32yaO3dudSwVEM8QRM6O7hCLN3d3dyfrm5rFateIDN6dbyJOa1rwPQIcSd/dF+LV0NWVSR2XBYN4NXoScTijf0dn5oFcPkAI6az+bZv/L1c/Y3KBImiOnag3sVD0TJrQo+UWvNptgEjMWtDT/XrX3gNY39QsHoqdL4CS+8Xdu22x5yDEv2dNl9/0RZvOBVhn5njlryCIcFHvts59gl7XzVpwCSKKPB8jv/x7gI7zo/p2dL2yd/+yk1SkLGgkokv7t2++rX72gu8D4RcBIGPijQBgdvPrQDCPiNYh4hIE+lBvdPMfxffTD1rYxC3KxC6rBl3O7U/yAHJHX7RT5Dzco9TNOfwY5PzFzI8I0ZG92zfbjV0wKnYmTfDqckt/4DJA/tYX7Rw1RGX97IWfBKK1ANDZF+3MBJ/Ib5vAPB3BJ1YOEXXjiXAgdebem+18gORPvvwZIQ4fedqKiv8npX2zxJ6nvmnhxQAkotA/3hftPG2sX9/6pmaRy+/63L5jWtOCDxLg4/m/6mJzDoyJ6JZ/AcRbgOh+APxhX3TTfw+vFAs+D4A/B8QH+rZtGkmAmQNIPphG+REZDqpA9Mm+7ZsfKHSVGKv+pEp/IIQopwQ6bgKEEO7q39b52dEGSnhxODKR9kHri3Zm0hLntS28R8L93QwI/2BD+IF8j9IoK4hYHcYKgYT1Tc2ZnIZkScf073z15bdNorcn8mh9rJu18NOI9CuxMvRv33wqzJ9fVR9nGY+YJfH5g291vV7ftKAVANsR6GrTV/0ryRwSm3XRHxEtk+qyphwSfLZ3e+ddI6vO8CYdGODh+WZhfj9ytIR4ef+2TQW93tsfmCZVAh0hSDmlYKubs/BY5CTyduxv0o3ov37Wwm8D0tfyT9LzvFh72P1j/bL3RTszj81G23QT0kf7t20WXp59ykTBXN/UnPkl5gjvEG7VabMW/nTYs0bf7otu/sZYk6luZvPpyOCR/FXubdMQruqNdv64vqlZBA9fbFl02ODOzW/UNzWL6zYfYsQXSTy0KS0lM9EL/ZY1I99JkFtBUpw36ju6ekYFaFPzLQhwlfiIttxaQSZfCjYtfg4gjCSYLFARribxDM85qt7H05m8HWmAhvF88fWzmx8BgtPzf+UmAhBxVpKWpMx5wigA6SSEvyPBhZlfWcT379626cm99VIAQIQJdGQOIPWzFn4RkER2q9v7op2XjKXv+qaFSwFI5Fn/XV+0U+Q8h7qm5vMRMoE2nvCZ6U+ZPr/YuL/YF+08Tnw/ran5SgL4kTDNCOmfSPiwcAT0RTtPzm9nIgDJ7XncBMikTOJZbmmg65uaMxH3ci7OsSbQjBnHymkpKUwhFYAt7ou+9nR2kuTOQcZcQcYBiPBiHVvf1Cw215msTqOtJHYBUjtrwX8wRJE2W0zsdwx7j/ctIysNwU192zuXixr5PyCA0AoEEUD8Rt+2Td8W32fPVl4XvAHhb+IsCBCW923rvKkcADIp00ALxcW0eBciHFbg6pGpTohfDcvB79qhHY2mvqlZHLgJF+euNLIjxWn4GPXEr6uYwJqU9jX19LySMSdcWEFybl42bdbCH+cOGgnggv5o50ioGdsAmTu3lqUC/Rnd5ble95jAs+fPAWIipyIQ8I/1R7vESpAp9U3N4kzm/bl/c+DvEif7ed9nVqzcvxHgiN5o5x5RCA/UCjKoGSsZ4ogHrpA5gwBbFCUkEq/aKgUHbchvxcnzRwR8RFGCZ9rq9ShEjY2HzjB9/s1iZSDAfzJGl+f7/dWm5ukBgG8SQObQiwg/0799kziRzhQXASLYsbqm5h8IM2P41wCW9W3vFMDcw+u1v5vH9U3Ne5hYw30cObvQGGMfyz+Ma5hz2HyLS8JrJM4h/tIX7Twlf5UZkW9Y3O6+aKfIOTKyCuW8X5lvEd7o29a5zw/fgQKIo/0HwgOqHBrxxBU63xwBJKbHv4QABYVRebuDOAhkNququkf210IFyK+ft0HNzkv8JwIJv/xssQnN1RX2dn+0c4+82S4DJDPN6mc1rwaEa7KTLmOy2F1Bsn1n9U3NAtS54HsvIuDLBDQv7+rJLmLsg/3dr4lrIiMlCyDxAyJgMWJ+jfxAzGk+kTiI8xsQJ+i90c1f3nssDgRANE1rJGCb7SbvJMDrwkq83nSOAAAR10lEQVTQVpiqYV04KLqun0bAHrXNgrGr1VD1uA+cCuGfPeQSOdjPGYWuExGu6N3WmbkCkl9GNqqjTJ5cPbEK+QGE92bEzZvnQRvZ9Obxxeyv/oocSAjxj1mP22j1R0hzKwgxPK6/e1Pm8E0UcWKupQKrcythvgwE8FCa82VjeZhGPGNEpwxs35y5ZpJXBPjE3qyRAN7XH+3cJ01eDiBpZNPHNGFnNd8kfhQI4Mr+aOdPChm70epq8eQXgPMf2uWDwD6sKNW2H8U5AojotKYbGwFwxHYtSBCEp1U5JHLvuV+E/1+H+YxJh3G0dllScNPgv1/K2PBTodQcfEydZCUWIkkzkLA7gLFXR7uRO9ll1Yz4eiB4rz056BVVkcd9QLc/3o4B4iSQl+gYQ3aGLFfbCoZtT2ke1WTRgGEkT+fExZmOreJGJE/nAInFFyMD21lrCejOsCJfZEsDHtGU1kBMN36JgKPeapiI4MTh5HA4tH4idceq4xggGTPLiD8NBAWn2M12KuX3saOrq6uHN5Be8TQAAMlkckHa5CKjrb2UfQgbVDlk0zR7ewhcAYiuJ75CQPbPNJC+ocpy5tDKK54Ghn90ja8D4bfsagMBr1MceK9y7boCEG1o6GhIZ16f2Sy4UZGrj0HEUU+HbTL1yCapBoZviydfAiD7G2y/dIxaVWUzp7rLK0gG8brxh7zXcAUPDQJ8SlFCdhPzFNyeR1C+GtD1+AUEkHmcZq/Qo6oiu5LJzJUVJAMQzbgSEMWFN3sF4SFVDolno16pcA1oRvxBoMzLSXuF6CpVlV25SewaQBKJxMGmReKKdrU9qQA40ok1spx7qmqXjUc3iTUwaBgnMMJ9oscUIFLSJ+HCYDD47wJoxqzqGkCGV5H4/YCjnmBPqK8I8GtFCe0RPGBChF6lKaMBXY/fTQCfsi0QwVpVDZ1rm34vQlcBMqjrFzJg+7yxLqizBOeqakg8a/VKhWlAc/bGKKMtDvyzNYoy8grSqQpdBYjoTEw3nkHAE+x2jACeUeXgYkQcCXRgl5dHN3k0QEQ+zUist5sDXUhKQP8IK3Im2J1bxX2AxIyLkaEILmC7WJxfV6PKNwoGa9euHbWP55xzTs4lPOIa9tzEtlV+wAljeuLLCGT71m0GIJyWhsPyz90UxnWAiM5pRuKvQOTkEmJvOmUt6e3dsbmnp4cFAgH0+/0jfU2n06RpGp8zZw6lUinatWsX7+npoSxoyAOKm1Ok+LxiseRCZFxcCZlmuzXE9aoc3OOJsG1eeYRFAYiuJz5DQAXZgURvnxGKvznxO1/d+PI11dXVUiqVYowxFB/OOYmPz+ezUqkUZ4yZwWDQ6uvrs1RVtd544w3uAcWNqVE6HpqRuB2IWpy0iIAXKkrQ9ZCnRQFIZhXR4yJgwZKJCJ0Dh/hv/icRTyzbsWPbes65JEpmGSUSAOHZPUpaxGngnKdM00xxztMCMIFAwMwCJRM6x1tRJjIKB6aOYSTP4MRHjQBTQI/WqUro1ALqT7hq8QCixc8DhJG32KP1aF9gcOBcgIQLexIsy/xXd/dbIjymn4gEQER/xVIjNvBpSZKGLMtKIqLIVxJnjCWSyWSypqYmFQgE0t3d3daSJUsESDyza8JTorQVNS3+JODEfkjH7BnB+aoa2iP4tltSFA0gw6uI8RgAjjx1ze/0MDiGV4wMKLgAR95HgER8Z5m/R8Q3A4HAtEAgUDc0NNSTTCZ3x+PxXYZhiPCYcSLSEVFDxBjnXCeiDFhSqZQAirlo0SIRtNkDiVuzxiU+mha/GhB+4IwdPa4q8piRJp3xdvjkdrzGNS3+X4CwT/jJPUwpzsHKAMMCbom/LZAkBsFgEORQCLKW1ahNmabZo+v6i729vRsGBgZeJaJ+xph4NTiYTqe1UChkpFIpEZA57YFkvNEq7ffZjbkIiXqQo5YJPqGqoVyKCUesRiMu6goiGtw7Inc+OIZXDAssa/gjMQRFUSAUChUsaDwef3n37t2/37Vr19+JaDdjTITTHEylUnogEBChNz2QFKzV4hDEYrFpgL6HEMGJp1PYH4+EFdm1yDgHBiAx4yxk+NvsBns4YhMXHz4CDMs0wR/ww/Rp9WJDbXtUxCZ99+7d/++tt976P8bYTiLqIaKBQCCg6bqeHBoaSi9ZssTyNu22VewKoWbEfwPD+UwcFeL0sXBYHon95YjZGMT2Z2MBvdH1+PcJ4IuZ1SNnUlkWmOJjpkFRZKgJZ2JBu1L6+voe2bJlyz2IuJ1zvsvn8/WZpqnX1NQkn3/+efOcc84RXjDv7Ykr2i6MiRsuXdEiAtysKKHhkEpFLEUHiHj80t3dXVdTW/8EER339sphgpk2oba2BkKhoOsi7ty5897u7u6HOefbxGpimma/qqpGIpEYEvsRRMy4gL1SOg3oevwGAtgn3paNHvzLTA+dWldXN2CDtiCSkgBk3bp10rHHvvMTkk+6d3i/MQwOAYyaGvdWjr0lf+utt368c+fOJxlj28RKkk6nhUIT3d3dKW8VKWieOK4c0+PLESDimNHwlZKzw2E5k+Gr2KUUAGGvvPKKT9O06gULFtzECZcKs4oxBo0N04sqH+c8uXXr1tW9vb3rBUgQUbiHterq6qS3ihRV9Xswj+n6RQjsDjdaLJVpletrUQEizKu1a9eyOXPmBAKBgFxVVTW3oWHGPZZlza+pDWfcuMUuwrv16quv3kBEWxFxRyqV6h8aGor39PSkvVWk2NoHyJ6UPwQAPhdaK5lpVTKAPPfcc75kMlkdCoVU0zQb6+vrz5Fl5bqZM8dKruSCGvdi8frrr39ncHBQXFnpFi7gqqoqra+vb8jzaLmv63yO8Xj8RIuDAIfIXOW4lNK0KhVAMuZVKpUSS0VtOp1uYozNPeyww75XW1s74QMiM82hf3cKeqJJaGiqhoZZhb3qHRgY+FNXV5dIB/ZvsYqYpjng8/kSixYtMj1vluN5OyqDaDQaUsO1IqDgO91oodSmVckAsm7duoCqqoplWfU+n28OEc077rjjvufz+SZ0tfmNVzR4Yb0OWr/YnCEgI5izwAfvODkM9Q1VE9K9OHF/4YUX2hhjbwqvljCzGhoajPnz56c9b9aEVFhwJSc5PUZprOSmVdEBktt/zJs3r8o0TZUxNh0RDwmHw8c3Nzd/cyIa39mdgMfu6Ychww/pJAPOEZhEEKi2oEpJw5Kza2HOPHkirGDTpk1f0zTtGUR8izHWOzg4qIl9yLnnnivuaXnFRQ0YhvFOAvwrEbiyyTwQplVJACLcu/X19VXpdDrMGGu0LGtuQ0PDaYccckgmic3+Sqw/Bb+/ezfEevyQ1ARAJOBWFiAhE4JqGprmE5z+6YntZbq7u2/ZsWPHH4SZZVlWj8/n0954440hb6M+3kgU/r2ux0X6gz3StxXOZZiCgH8urCi/tEvvlK5oXiyxggiANDY2VqfT6RrTNGcQ0aEHHXTQOTNmzDhvvI5v6dThz/+rgdFfBYmYAIgvCxAOgZAFoZoUyHVDcOZF06C+cXxTq6en596tW7fewxjbYlnWLsZYzAPIeKNg73vdiP+WCM6yR51HhXSFKss/dczHAYOSAETTtFq/3z+Dc37o/PnzL6utrf3AeH3e+OwgPPNoIguQAKQSEpBYQXwEgaA5DJD6ITjhQ0E4clHteOxgYGDg8a6urh9LkrRFHBr6/f6Y58kaV222Kmh63PE1HgJoCyshVw4WbQmRJSoJQPZaQc6dMWPGuHGL3nxNh6ce1MHoC0AiNgwQsQeRsgAJhgVAUnD6hXUT8mr19PTct3Xr1l+LFURcYhQ3fb0VxMnUGZtW1xOPEpD9NxqI16ty0HbgajelKjpAxB7EsixhYjUKF29DQ8NHDj744EvHE6InmoDH7u2D+EAAEmIPkvBlN+kcAkELguE0TJttwlmfmwE+PxuPHWzbtu0nO3bseEQcGHp7kHHV5aiCZiS+CkTfscMEEdcoctDR+3Q77Y5FU1SAiFP0nBdLkqSGrBfrpAULFnxtIkJ0vx6HJx4YhCHdN7xJz3qx/NUWVCtpWHymCvOOVCfCCrq6ulYODg5uEF4sceUkmUzq4k6W58WakPoKqqTrydMIuJ3clU+oSmhc87ugzjisXDSAiH7df//9UkNDg1+cgxCROPc4KBAINB911FHtkiRNyAUo9iL/ekoHMyW8WJBx8wYVglM+Xgcz5kzsFjDn3HjxxRevTafTmyRJ2jY0NNTnnYM4nDnjkGt6XERnv2CirSDAm4oSEtl6y6oUFSBExLq6uvyJRCKUSCRqGWOZk/T58+dfFQ6HT5qoJoS5Fdc56DETlLAEdQ0BCNdNPPGQpmnrN2/e/ENhXjHGdnDOB4LBYOLII48UJ+netfeJDkSB9QrZrKtKqKhzscCuj1QvaqeEqzd3F0tRlHDW1XvQ9OnTT5k7d27RH7vkpNy6dWt7T0/POsaYuIvV43mw7E6XwukmcKJetJA9hfd2X4qiAyS3D2GMyZxzYWbNQsS5CxcuXCHL8uFuCLE/HvF4/JXXXntNhLTcCgDbxcOpeDxueLd5i635t/nrekJE7P8wAT8OAI8FoBcB8CVO1FWjyitL15PCWyoqQER3cmbW4OCguGFYI07UOedzZs6cedrs2bMvL7zLBVFYW7ZsifT29v5F3MEKBAIiZJCmqmrSM68K0mPFVi4FQDIn6qqqBvx+v5JKpeokSRKn6gctWLDgclVVHUW22N/IRaPRO3bs2PF7y7K6JUnaJVYPy7LiXvCGip3vBQteEoCIN/Zis97b21tVXV2tWpY1jYhmIuLsY489tn2iN3sLkW5wcHDd5s2bf46I3eJNOue8X7h26+rqhrzVoxBNVnbdogMka2ZlVpGqqio/gIgJFwyL6+9ZkDQdc8wxXwsEAoe4NRRi3/Hqq6+uIqJoduXo8/v92sDAQNLbe7il5crgUzKAiFXkueeeE/F1BUhCRBSWJKnesqxG8eLs4IMP/mhjY+PZTtU+MDDwx66urjsRMRMXS5KkPrHvEMEasqaVCPnjuXadKrpC6EsCkNwqIkAiXhgCQGBoaChoWZaKiOKmoXgr0jB9+vTjp02b9hE73i3DMF7p7e394+7du58GgB5E7AWAgXQ6rYsgDel0OuWFH62QWe2imCUDSA4kwu171FFHiZUkkEgkqiVJUjjnYQEUy7LqGGP19fX1x0ybNu2kUCh03P5O3E3T3K1p2kv9/f1/6+vre03E5eWc94loiiLqqQhi7YHDxdlSgaxKCpC9QWKapt8wjKpQKBRMp9OKJEkq51wV5hdjTPH5fDWyLM+qqqpqzEZ3r81Gd+8bGhraqWlalIgMxphuWVZMRHf3+Xzib12SpIRlWSkvJm8FzmoXRS45QPLNLbEnSaVSPsaYPxAIVHHOg0QkLliJe1ohSZKqLcuqQsRALj8IY0zkzxHPZEXaqSGRG8Q0zYRYLcTH5xNBVJJD6XQ6LTJOeWaVi7OlAlkdEIDkg2TdunWssbGRJRIJsTfxM8YC4jM0NJT5bzZ5jgARQxGCJJthSqwMRJQOBAIpIhLZpTJZpnw+n0jJZm7cuNHyUrFV4Ix2WeQDBpA8kIg/hRs4A5TBwUGJc+6TZVmyLMtnmqbk8/mY+ORkN02Ti49IwxYIBCyRJGdwcNCqqamxRELPXFapDGMvSLXLU6ay2B1QgORULS41Zv8WkRhx3rx5rKamhnV3d6OqqkxkuPX5fCN9NU2TcpluGxsbeSKRoPzknR4wKmsSF1PasgBIvoB7g0V819DQsE8/89I+ZxYjDxTFnCaVy7vsADLaUOSBZuRrz3Sq3ElbSsknBUBKqRCvLU8D+RrwAOLNB08D+9GABxBvenga8ADizQFPA/Y04K0g9vTmUVWIBjyAVMhAe2La04AHEHt686gqRAMeQCpkoD0x7WnAA4g9vXlUFaIBDyAVMtCemPY04AHEnt48qgrRgAeQChloT0x7GvAAYk9vHlWFaMADSIUMtCemPQ14ALGnN4+qQjTgAaRCBtoT054GPIDY05tHVSEa8ABSIQPtiWlPAx5A7OnNo6oQDXgAqZCB9sS0pwEPIPb05lFViAY8gFTIQHti2tPA/wehCHBA3/eT0gAAAABJRU5ErkJggg=="
                              style={{ width: "200px", height: "200px" }}
                            />
                          </div>
                          <div className="flex mb-4">
                            <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="address-card"
                                className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                />
                              </svg>
                              Any Age
                            </div>
                            <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="venus-mars"
                                className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                />
                              </svg>
                              All Sexes
                            </div>
                          </div>
                          <div className="flex p-1 bg-white rounded-lg bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300 w-full mb-4">
                            <div className="w-full pr-1 pl-2">
                              <span className="neutral500 styles_Text-p-tiny__3REA2 mt-1.5 ml-1 styles_block__vwpC6 break-words">
                                What conditions do you have?
                              </span>
                              <div className="flex items-center">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="stethoscope"
                                  className="svg-inline--fa fa-stethoscope fa-1x neutral500 text-base ml-1 mr-1"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M480 128c-35.35 0-64 28.65-64 63.1c0 26.84 16.56 49.75 40 59.25V344c0 66.16-53.83 120-120 120c-64.28 0-116.5-50.93-119.4-114.5C293.1 337.6 352 271.8 352 191.1V57.1c0-9.094-5.141-17.41-13.27-21.47l-68-34C258.9-3.377 244.5 1.404 238.5 13.28C232.6 25.12 237.4 39.53 249.3 45.47L304 72.84V192c0 61.75-50.25 112-112 112S80 253.8 80 192V72.84l54.73-27.38C146.6 39.53 151.4 25.12 145.5 13.28C139.6 1.404 125.2-3.377 113.3 2.529l-68 34C37.14 40.59 32 48.9 32 57.1v134c0 80.2 59.51 146.2 136.6 157.6C171.6 439.6 245.3 512 336 512c92.64 0 168-75.38 168-168V251.3C527.4 241.8 544 218.8 544 192C544 156.7 515.3 128 480 128zM480 208c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S488.8 208 480 208z"
                                  />
                                </svg>
                                <div className="styles_selectBox__RcjOM w-full css-b62m3t-container">
                                  <span
                                    id="react-select-eligibility-select-live-region"
                                    className="css-7pg0cj-a11yText"
                                  />
                                  <span
                                    aria-live="polite"
                                    aria-atomic="false"
                                    aria-relevant="additions text"
                                    className="css-7pg0cj-a11yText"
                                  />
                                  <div className=" css-12kxklp-control">
                                    <div className=" css-1uzcsaf">
                                      <div
                                        className=" css-1dmyjc4-placeholder"
                                        id="react-select-eligibility-select-placeholder"
                                      >
                                        <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                          Select
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full">
                            <a href="/p/apply/phase-3-covid-19-6-2021-a698e?nct_id=NCT04955626&overall_status=ActiveNotRecruiting&segment_anonymous_id=d1205c7f-cfb4-4f1d-a5c9-0554d66ba27b&url_params=&latitude=10.8326&longitude=106.6581">
                              <button
                                className="h-12 bg-black rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                tabIndex={0}
                                type="button"
                              >
                                <span
                                  className="white styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                  id="undefined-text"
                                >
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x pr-1 motion-safe:animate-none"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  Get Started
                                </span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden border-2 lg:mt-4 mt-2 border-neutral100 rounded-lg bg-white p-6">
                <span className="neutral900 styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                  Eligibility
                </span>
                <div className="flex flex-col items-center">
                  <div className="hidden md:block">
                    <canvas
                      height={0}
                      width={0}
                      style={{ width: "0px", height: "0px" }}
                    />
                  </div>
                  <div className="flex mb-4">
                    <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="address-card"
                        className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                        />
                      </svg>
                      Any Age
                    </div>
                    <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="venus-mars"
                        className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                        />
                      </svg>
                      All Sexes
                    </div>
                  </div>
                  <div className="flex p-1 bg-white rounded-lg bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300 w-full mb-4">
                    <div className="w-full pr-1 pl-2">
                      <span className="neutral500 styles_Text-p-tiny__3REA2 mt-1.5 ml-1 styles_block__vwpC6 break-words">
                        What conditions do you have?
                      </span>
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="stethoscope"
                          className="svg-inline--fa fa-stethoscope fa-1x neutral500 text-base ml-1 mr-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M480 128c-35.35 0-64 28.65-64 63.1c0 26.84 16.56 49.75 40 59.25V344c0 66.16-53.83 120-120 120c-64.28 0-116.5-50.93-119.4-114.5C293.1 337.6 352 271.8 352 191.1V57.1c0-9.094-5.141-17.41-13.27-21.47l-68-34C258.9-3.377 244.5 1.404 238.5 13.28C232.6 25.12 237.4 39.53 249.3 45.47L304 72.84V192c0 61.75-50.25 112-112 112S80 253.8 80 192V72.84l54.73-27.38C146.6 39.53 151.4 25.12 145.5 13.28C139.6 1.404 125.2-3.377 113.3 2.529l-68 34C37.14 40.59 32 48.9 32 57.1v134c0 80.2 59.51 146.2 136.6 157.6C171.6 439.6 245.3 512 336 512c92.64 0 168-75.38 168-168V251.3C527.4 241.8 544 218.8 544 192C544 156.7 515.3 128 480 128zM480 208c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S488.8 208 480 208z"
                          />
                        </svg>
                        <div className="styles_selectBox__RcjOM w-full css-b62m3t-container">
                          <span
                            id="react-select-eligibility-select-live-region"
                            className="css-7pg0cj-a11yText"
                          />
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          />
                          <div className=" css-12kxklp-control">
                            <div className=" css-1uzcsaf">
                              <div
                                className=" css-1dmyjc4-placeholder"
                                id="react-select-eligibility-select-placeholder"
                              >
                                <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Select
                                </span>
                              </div>
                            </div>
                            <div className=" css-1wy0on6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <a href="/p/apply/phase-3-covid-19-6-2021-a698e?nct_id=NCT04955626&overall_status=ActiveNotRecruiting&segment_anonymous_id=d1205c7f-cfb4-4f1d-a5c9-0554d66ba27b&url_params=&latitude=10.8326&longitude=106.6581">
                      <button
                        className="h-12 bg-black rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className="white styles_Text-button__u2R08 no-underline justify-center flex break-words"
                          id="undefined-text"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="microscope"
                            className="svg-inline--fa fa-microscope fa-1x pr-1 motion-safe:animate-none"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                            />
                          </svg>
                          Get Started
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex mt-12 lg:space-x-8 w-full">
                <div className="hidden lg:flex-none lg:block lg:w-[256px]">
                  <nav className="hidden sticky top-24 lg:block p-6 border-2 border-neutral100 rounded-2xl">
                    <div className="flex flex-col space-y-1 mb-4">
                      <a href="#summary">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Summary
                        </span>
                      </a>
                      <a href="#effectiveness">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Effectiveness
                        </span>
                      </a>
                      <a href="#studyObjectives">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Study Objectives
                        </span>
                      </a>
                      <a href="#safety">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Safety
                        </span>
                      </a>
                      <a href="#design">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Trial Design
                        </span>
                      </a>
                      <a href="#logistics">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Logistics
                        </span>
                      </a>
                      <a href="#eligibilityCriteria">
                        <span className="neutral500 styles_Text-p-strong__3Pn_k hover:text-neutral600 styles_block__vwpC6 break-words">
                          Eligibility Criteria
                        </span>
                      </a>
                    </div>
                    <a href="/p/apply/phase-3-covid-19-6-2021-a698e?nct_id=NCT04955626&overall_status=ActiveNotRecruiting&segment_anonymous_id=d1205c7f-cfb4-4f1d-a5c9-0554d66ba27b&url_params=&latitude=10.8326&longitude=106.6581">
                      <button
                        className="h-12 bg-lightGrey500 border-4 border-neutral100 mt-2 rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className="black styles_Text-button__u2R08 no-underline justify-center flex break-words"
                          id="undefined-text"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="microscope"
                            className="svg-inline--fa fa-microscope fa-1x pr-1 motion-safe:animate-none"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                            />
                          </svg>
                          Get Started
                        </span>
                      </button>
                    </a>
                    <a href="#relatedTrials">
                      <button
                        aria-label="Other Trials"
                        className="h-12 bg-lightGrey500 border-4 border-neutral100 mt-2 rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className="black styles_Text-button__u2R08 no-underline justify-center flex break-words"
                          id="undefined-text"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="eye"
                            className="svg-inline--fa fa-eye fa-1x mr-1 inline"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                            />
                          </svg>
                          Other Trials
                        </span>
                      </button>
                    </a>
                  </nav>
                </div>
                <div className="w-full lg:w-3/4 ml-auto flex flex-col lg:space-y-16 space-y-12">
                  <section aria-label="Study Summary" id="summary">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Study Summary
                    </h3>
                    <p className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 styles_preLine__Zqlxm break-words">
                      This trial will assess the safety and efficacy of a
                      booster dose of the BNT162b2 vaccine in adults who have
                      received 2 doses of the vaccine at least 6 months prior.
                      The trial will also assess the safety and tolerability of
                      a single dose of the BNT162b2 vaccine in adolescents 12-17
                      years of age, as compared to a placebo control.
                    </p>
                    <div>
                      <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                        See full description
                      </span>
                    </div>
                    <div className="mt-4 lg:mt-8">
                      <div className="styles_shelf__AuCxB mb-2">
                        <div className="mr-2">
                          <span className="neutral900 styles_Text-h4__mnk_t styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Eligible Conditions
                          </span>
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="stethoscope"
                          className="svg-inline--fa fa-stethoscope fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"
                          />
                        </svg>
                      </div>
                      <ul className="ml-4 list-disc neutral600">
                        <li>
                          <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            COVID-19
                          </span>
                        </li>
                        <li>
                          <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            COVID19 (disease)
                          </span>
                        </li>
                        <li>
                          <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            Coronavirus Disease 2019 (COVID‑19)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section aria-label="Video Summary" id="summary">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Video Summary
                    </h3>
                    <div className="bg-neutral50 rounded-xl p-4">
                      <div className="max-w-[600px] mx-auto">
                        <div className="styles_responsiveYoutube__GVzaq">
                          <iframe
                            frameBorder={0}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="New COVID-19 Clinical Trial: BNT162b2 for COVID-19"
                            width={640}
                            height={360}
                            src="https://www.youtube.com/embed/_jlgym2DHEo?enablejsapi=1&origin=https%3A%2F%2Fwww.withpower.com&widgetid=3"
                            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                            id="widget4"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-label="Treatment Effectiveness"
                    id="effectiveness"
                  >
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Treatment Effectiveness
                    </h3>
                    <div className="flex lg:flex-row lg:space-x-2 lg:space-y-0 flex-col space-y-2">
                      <div className="basis-1/2 lg:rounded-2xl rounded-xl lg:p-6 p-4 bg-neutral50 border border-neutral200">
                        <div className="flex justify-between">
                          <h4 className="neutral900 styles_Text-h4__mnk_t mb-4 styles_block__vwpC6 break-words">
                            Effectiveness Progress
                          </h4>
                          <div>
                            <span tabIndex={0}>
                              <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="circle-info"
                                  className="svg-inline--fa fa-circle-info fa-1x neutral600 text-lg"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                  />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="styles_shelf__AuCxB">
                          <div
                            aria-label="2 out of 3"
                            className="rounded flex items-center styles_rating__MdOXd styles_large__wDQzK bg-green100"
                            role="group"
                          >
                            <div className="styles_mark__OhNvV bg-green800 mr-1 rounded-md" />
                            <div className="styles_mark__OhNvV bg-green800 mr-1 rounded-md" />
                            <div className="styles_mark__OhNvV bg-green300 mr-1 rounded-md" />
                            <span className="green800 styles_Text-h5__PoarS ml-1 mr-2 styles_block__vwpC6 break-words">
                              2 of 3
                            </span>
                          </div>
                        </div>
                        <span className="neutral600 styles_Text-p__oN__e mt-2 styles_block__vwpC6 break-words">
                          This is further along than 85% of similar trials
                        </span>
                      </div>
                      <div className="basis-1/2 lg:rounded-2xl rounded-xl lg:p-6 p-4 bg-neutral50 border border-neutral200">
                        <h4 className="neutral900 styles_Text-h4__mnk_t mb-4 styles_block__vwpC6 break-words">
                          Similar Trials
                        </h4>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="1 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                1
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-1-covid-19-2-2022-268cd"
                          >
                            <span className="green700 styles_Text-p__oN__e underline hover:text-green800 styles_block__vwpC6 break-words">
                              CV2CoV (2 µg)
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="1 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                1
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-1-covid-19-6-2022-56229"
                          >
                            <span className="green700 styles_Text-p__oN__e underline hover:text-green800 styles_block__vwpC6 break-words">
                              CV0501 (6 μg)
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="1 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                1
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-2-and-3-coronavirus-disease-2019-covid19-6-2021-8b296"
                          >
                            <span className="green700 styles_Text-p__oN__e underline hover:text-green800 styles_block__vwpC6 break-words">
                              Pfizer/BioNTech (BNT162b2)
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section aria-label="Study Objectives" id="studyObjectives">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Study Objectives
                    </h3>
                    <div>
                      <div>
                        <p className="neutral600 styles_Text-p__oN__e mb-4 styles_block__vwpC6 break-words">
                          71 Primary · 27 Secondary · Reporting Duration: Before
                          and 3 days after study vaccination
                        </p>
                        <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row gap-2">
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  {`SSD - The "super" superiority of the
                                    anti-Omicron immune response after 1 dose of
                                    BNT162b2 OMI compared to after 1 dose of
                                    BNT162b2 given as the fourth dose in
                                    BNT162b2-experienced participants`}
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  {`SSD - The "super" superiority of the
                                    anti-Omicron immune response after 1 dose of
                                    BNT162b2 OMI compared to after 1 dose of
                                    BNT162b2 given as the third dose in
                                    BNT162b2-experienced participants`}
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SARS-CoV-2 (COVID-19) vaccine, mRNA-BNT162b2
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SARS-CoV-2 (COVID-19) vaccine, mRNA-BNT162b2
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <span className="black styles_Text-p__oN__e underline ml-6 styles_block__vwpC6 cursor-pointer break-words">
                                +2 more
                              </span>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Noninferiority of anti-Omicron immune
                                  response after 1 dose of BNT162b2 OMI at 30 µg
                                  compared to after 1 dose of BNT162b2 at 30 µg
                                  given as a fourth dose in BNT162b2-experienced
                                  participants &gt;55 years of age
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Noninferiority of anti-Omicron immune
                                  response after 1 dose of BNT162b2 OMI at 60 µg
                                  compared to after 1 dose of BNT162b2 at 30 µg
                                  given as a fourth dose in BNT162b2-experienced
                                  participants &gt;55 years of age
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Noninferiority of anti-Omicron immune
                                  response after 1 dose of a combination of
                                  BNT162b2 and BNT162b2 OMI at 60 µg compared to
                                  after 1 dose of BNT162b2 OMI at 30 µg given as
                                  a fourth dose in BNT162b2-experienced
                                  participants
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Noninferiority of anti-Omicron immune
                                  response after 1 dose of bivalent BNT162b2 and
                                  BNT162b2 OMI at 30 µg compared to after 1 dose
                                  of BNT162b2 at 30 µg given as a fourth dose in
                                  BNT162b2-experienced participants &gt;55 years
                                  of age
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <span className="black styles_Text-p__oN__e underline ml-6 styles_block__vwpC6 cursor-pointer break-words">
                                +24 more
                              </span>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  {`SSD - The "super" superiority of the
                                    anti-Omicron immune response after 2 doses of
                                    BNT162b2 OMI given as the third and fourth
                                    doses compared to after 1 dose of BNT162b2
                                    given as the third dose in
                                    BNT162b2-experienced participants`}
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SARS-CoV-2 (COVID-19) vaccine, mRNA-BNT162b2
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD-Superiority with respect to neutralizing
                                  titers and noninferiority with respect to
                                  seroresponse of anti-Omi immune response after
                                  2 doses BNT162b2 OMI given as D3+D4 compared
                                  to after 1 dose BNT162b2 given as D3 in
                                  BNT162b2-experienced participants
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  {`SSD - The "super" superiority of the
                                    anti-Omicron immune response after 2 doses of
                                    BNT162b2 OMI compared to after 2 doses of
                                    BNT162b2 in age-matched participants randomly
                                    selected from the C4591001 study`}
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  {`SSD - The "super" superiority of the
                                    anti-Omicron immune response after 2 doses of
                                    BNT162b2 OMI compared to after 2 doses of
                                    BNT162b2 in participants selected from the
                                    C4591001 study`}
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD - The noninferiority of the anti-Omicron
                                  immune response after 2 doses of BNT162b2 OMI
                                  compared to the anti-reference-strain immune
                                  response after 2 doses of BNT162b2 in
                                  age-matched participants randomly selected
                                  from the C4591001 study
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  BCG Vaccine
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <span className="black styles_Text-p__oN__e underline ml-6 styles_block__vwpC6 cursor-pointer break-words">
                                +3 more
                              </span>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Demonstrate immunobridging of immune
                                  response of a booster (third) dose of BNT162b2
                                  at 10 µg compared to after the second dose in
                                  the same set of participants 12 through 17
                                  years of age without evidence of SARS-CoV-2
                                  infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Severe Acute Respiratory Syndrome
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Demonstrate immunobridging of immune
                                  response of a third dose of BNT162b2 at 10 µg
                                  in participants 18 to 30 years of age compared
                                  to after the second dose in age-matched
                                  participants from the C4591001 study, without
                                  evidence of SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Demonstrate immunobridging of immune
                                  response of a third dose of BNT162b2 at 10 µg
                                  in participants 31 to 55 years of age compared
                                  to after the second dose in age-matched
                                  participants from the C4591001 study, without
                                  evidence of SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Demonstrate immunobridging of immune
                                  response of a third dose of BNT162b2 at 10 µg
                                  in participants ≥56 years of age compared to
                                  after the second dose in age-matched
                                  participants from the C4591001 study, without
                                  evidence of SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Demonstrate immunobridging of immune
                                  response of a third dose of BNT162b2 at 30 µg
                                  in participants ≥56 years of age compared to
                                  after the second dose in age-matched
                                  participants from the C4591001 study, without
                                  evidence of SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <span className="black styles_Text-p__oN__e underline ml-6 styles_block__vwpC6 cursor-pointer break-words">
                                +2 more
                              </span>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Day 7
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Immune responses to BNT162b2 10 µg and
                                  30 µg given as the third dose in participants
                                  12 through 17 years of age
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 6
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SARS-CoV-2 (COVID-19) vaccine, mRNA-BNT162b2
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                At each time point
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSF - To describe the immune response to
                                  BNT162b2 (30 µg or 60 µg), BNT162b2 OMI (30 µg
                                  or 60 µg), and a combination of BNT162b2 and
                                  BNT162b2 OMI (30 µg or 60 µg) given as a
                                  fourth dose in BNT162b2-experienced
                                  participants
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Day 3
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Percentage of participants with elevated
                                  troponin I levels (18-55 years of age,
                                  sentinel cohort only)
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Day 7
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSB - Percentage of participants reporting
                                  local reactions
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSB - Percentage of participants reporting
                                  systemic events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD - Percentage of participants reporting
                                  local reactions
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD - Percentage of participants reporting
                                  systemic events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Day 7
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Percentage of participants reporting
                                  local reactions
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Percentage of participants reporting
                                  systemic events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Day 7
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Percentage of participants reporting
                                  local reactions
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Percentage of participants reporting
                                  systemic events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSF - Percentage of participants reporting
                                  local reactions
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSF - Percentage of participants reporting
                                  systemic events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 12
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Incidence of asymptomatic SARS-CoV-2 infection
                                  based on N-binding antibody in participants
                                  without evidence of past SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSA - Incidence of asymptomatic SARS-CoV-2
                                  infection based on N-binding antibody in
                                  participants without evidence of past
                                  SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Year 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - GMFRs in SARS-CoV-2 serum neutralizing
                                  titers from before vaccination to each
                                  subsequent time point, for each vaccine and
                                  age group
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Immune responses induced by a booster
                                  (third) dose of BNT162b2 at 10 µg and 30 µg
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - SARS-CoV-2 serum neutralizing antibody
                                  levels, expressed as GMTs, for each vaccine
                                  and age group
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 12
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Confirmed COVID-19 incidence in participants
                                  with and without evidence of past SARS-CoV-2
                                  infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Severe Acute Respiratory Syndrome
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Confirmed severe COVID-19 (based on CDC
                                  definition) in participants with and without
                                  evidence of past SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Confirmed severe COVID-19 (based on CDC
                                  definition) in participants without evidence
                                  of past SARS-CoV-2 infection
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <span className="black styles_Text-p__oN__e underline ml-6 styles_block__vwpC6 cursor-pointer break-words">
                                +8 more
                              </span>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Percentage of participants reporting adverse
                                  events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSA - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 6
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  Percentage of participants reporting serious
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSA - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSC - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 6
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSD - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSF - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 6
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSE - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSF - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSB - Percentage of participants with elevated
                                  troponin I levels
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:rounded-2xl rounded-xl bg-neutral50 border border-neutral200 lg:p-6 p-4 w-[90%] lg:w-[48%] flex-none">
                            <div className="flex">
                              <span className="neutral900 styles_Text-h4__mnk_t mb-2 styles_block__vwpC6 break-words">
                                Month 1
                              </span>
                              <span tabIndex={0}>
                                <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSB - Percentage of participants reporting
                                  adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div className="pt-1">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-right"
                                    className="svg-inline--fa fa-circle-right fa-1x mr-2 green600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                    />
                                  </svg>
                                </div>
                                <span className="neutral600 styles_Text-p-small___zIZy no-underline w-full styles_block__vwpC6 break-words">
                                  SSB - Percentage of participants reporting
                                  serious adverse events
                                </span>
                                <span tabIndex={0}>
                                  <span className="neutral600 styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="circle-info"
                                      className="svg-inline--fa fa-circle-info fa-1x ml-2 cursor-pointer"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section aria-label="Trial Safety" id="safety">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Trial Safety
                    </h3>
                    <div className="flex lg:flex-row lg:space-x-2 lg:space-y-0 flex-col space-y-2">
                      <div className="basis-1/2 lg:rounded-2xl rounded-xl lg:p-6 p-4 bg-neutral50 border border-neutral200">
                        <div className="flex justify-between">
                          <h4 className="neutral900 styles_Text-h4__mnk_t mb-4 styles_block__vwpC6 break-words">
                            Safety Progress
                          </h4>
                          <div>
                            <span tabIndex={0}>
                              <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="circle-info"
                                  className="svg-inline--fa fa-circle-info fa-1x neutral600 text-lg"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                  />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="styles_shelf__AuCxB">
                          <div
                            aria-label="3 out of 3"
                            className="rounded flex items-center styles_rating__MdOXd styles_large__wDQzK bg-blue100"
                            role="group"
                          >
                            <div className="styles_mark__OhNvV bg-blue800 mr-1 rounded-md" />
                            <div className="styles_mark__OhNvV bg-blue800 mr-1 rounded-md" />
                            <div className="styles_mark__OhNvV bg-blue800 mr-1 rounded-md" />
                            <span className="blue800 styles_Text-h5__PoarS ml-1 mr-2 styles_block__vwpC6 break-words">
                              3 of 3
                            </span>
                          </div>
                        </div>
                        <span className="neutral600 styles_Text-p__oN__e mt-2 styles_block__vwpC6 break-words">
                          This is further along than 85% of similar trials
                        </span>
                      </div>
                      <div className="basis-1/2 lg:rounded-2xl rounded-xl lg:p-6 p-4 bg-neutral50 border border-neutral200">
                        <h4 className="neutral900 styles_Text-h4__mnk_t mb-4 styles_block__vwpC6 break-words">
                          Similar Trials
                        </h4>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="1 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                1
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-1-covid-19-2-2022-268cd"
                          >
                            <span className="blue600 styles_Text-p__oN__e underline hover:text-blue700 styles_block__vwpC6 break-words">
                              CV2CoV (2 µg)
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="1 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                1
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-1-covid-19-6-2022-56229"
                          >
                            <span className="blue600 styles_Text-p__oN__e underline hover:text-blue700 styles_block__vwpC6 break-words">
                              CV0501 (6 μg)
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-baseline">
                          <div className="styles_shelf__AuCxB">
                            <div
                              aria-label="2 out of 3"
                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                              role="group"
                            >
                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                2
                              </span>
                            </div>
                          </div>
                          <Link
                            className="ml-3"
                            href="/trial/phase-2-and-3-coronavirus-disease-2019-covid19-6-2021-8b296"
                          >
                            <span className="blue600 styles_Text-p__oN__e underline hover:text-blue700 styles_block__vwpC6 break-words">
                              Pfizer/BioNTech (BNT162b2)
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral50 border border-neutral200 mt-2 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                      <div className="flex flex-wrap items-center w-full md:w-3/4">
                        <h4 className="neutral900 styles_Text-h4__mnk_t mr-3 styles_block__vwpC6 break-words">
                          Side Effects
                        </h4>
                      </div>
                      <div
                        aria-describedby="Drug-side-effect-histogram."
                        aria-label="Drug side effect histogram."
                        role="img"
                      >
                        <span className="overflow-auto items-end flex mt-4 mx-auto">
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "300px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  78%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Injection site pain (PAIN)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "203.846px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  53%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Fatigue (FATIGUE)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "141.026px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  32%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Myalgia (MUSCLE PAIN)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "138.462px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  30%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Headache (HEADACHE)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "133.333px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  26%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Chills (CHILLS)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "133.333px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  26%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Arthralgia (JOINT PAIN)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "117.949px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  14%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Injection site swelling (SWELLING)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "117.949px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  14%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Injection site erythema (REDNESS)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "116.667px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  13%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Pyrexia (FEVER)
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "101.282px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  1%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Duodenal perforation
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "101.282px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  1%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Dizziness
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                          <div className="p-2 text-center first:ml-auto last:mr-auto">
                            <div
                              className="flex items-end justify-center mb-2 w4 rounded-t-lg white bg-blue400"
                              style={{ height: "101.282px" }}
                            >
                              <div className="w-36 sm:w-48 pb-4">
                                <span className="white styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                  1%
                                </span>
                                <span className="white styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                  Urinary tract infection
                                </span>
                              </div>
                            </div>
                            <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words" />
                          </div>
                        </span>
                        <span
                          className="neutral600 styles_Text-p-tiny__3REA2 rounded-md pt-4 border-t border-neutral200 styles_block__vwpC6 break-words"
                          id="Drug-side-effect-histogram."
                        >
                          This histogram enumerates side effects from a
                          completed 2021 Phase 3 trial (NCT04887948) in the
                          Coadministration Group: 20vPnC+BNT162b2 ARM group.
                          Side effects include: Injection site pain (PAIN) with
                          78%, Fatigue (FATIGUE) with 53%, Myalgia (MUSCLE PAIN)
                          with 32%, Headache (HEADACHE) with 30%, Chills
                          (CHILLS) with 26%.
                        </span>
                      </div>
                    </div>
                  </section>
                  <section aria-label="Trial Design" id="design">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Trial Design
                    </h3>
                    <div className="flex flex-wrap">
                      <div className="w-full mb-2 bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                        <div className="flex flex-col flex-1">
                          <h4 className="black styles_Text-h4__mnk_t neutral900 text-center mb-6 styles_block__vwpC6 break-words">
                            5 Treatment Groups
                          </h4>
                          <div className="flex justify-center flex-col sm:flex-row">
                            <div className="p-6 text-center">
                              <div className='inline-block relative w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem] overflow-hidden before:block before:content[""] before:pt-[100%] border rounded-full text-xs lg:text-sm -mt-4 -ml-4 border border-4 bg-hope800 white border-hope800'>
                                <div className="absolute w-full h-full text-center top-0 left-0 flex flex-col justify-center items-center p-2">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <h5 className="text-center font-semibold mt-2">
                                    60 µg dose
                                  </h5>
                                  <h5 className="text-center font-semibold mt-1">
                                    1 of 5
                                  </h5>
                                </div>
                              </div>
                              <div className='inline-block relative w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem] overflow-hidden before:block before:content[""] before:pt-[100%] border rounded-full text-xs lg:text-sm -mt-4 -ml-4 border border-4 bg-hope800 white border-hope800'>
                                <div className="absolute w-full h-full text-center top-0 left-0 flex flex-col justify-center items-center p-2">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <h5 className="text-center font-semibold mt-2">
                                    BNT162b2
                                  </h5>
                                  <h5 className="text-center font-semibold mt-1">
                                    1 of 5
                                  </h5>
                                </div>
                              </div>
                              <div className='inline-block relative w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem] overflow-hidden before:block before:content[""] before:pt-[100%] border rounded-full text-xs lg:text-sm -mt-4 -ml-4 border border-4 bg-hope800 white border-hope800'>
                                <div className="absolute w-full h-full text-center top-0 left-0 flex flex-col justify-center items-center p-2">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <h5 className="text-center font-semibold mt-2">
                                    10 µg dose
                                  </h5>
                                  <h5 className="text-center font-semibold mt-1">
                                    1 of 5
                                  </h5>
                                </div>
                              </div>
                              <div className='inline-block relative w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem] overflow-hidden before:block before:content[""] before:pt-[100%] border rounded-full text-xs lg:text-sm -mt-4 -ml-4 border border-4 bg-hope800 white border-hope800'>
                                <div className="absolute w-full h-full text-center top-0 left-0 flex flex-col justify-center items-center p-2">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <h5 className="text-center font-semibold mt-2">
                                    30 µg dose
                                  </h5>
                                  <h5 className="text-center font-semibold mt-1">
                                    1 of 5
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="p-6 text-center">
                              <div className='inline-block relative w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem] overflow-hidden before:block before:content[""] before:pt-[100%] border rounded-full text-xs lg:text-sm -mt-4 -ml-4 bg-white hope900 border-4 border-hope500'>
                                <div className="absolute w-full h-full text-center top-0 left-0 flex flex-col justify-center items-center p-2">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x text-lg"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <h5 className="text-center font-semibold mt-2">
                                    Placebo
                                  </h5>
                                  <h5 className="text-center font-semibold mt-1">
                                    1 of 5
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" lg:flex-row text-center w-full">
                            <div className="inline-block lg:flex lg:justify-between">
                              <div className="netrual900 flex items-center my-3">
                                <div className="border-4 border-hope800 rounded-full w-[32px] h-[32px] bg-hope800 mr-2" />
                                <p className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Experimental Treatment
                                </p>
                              </div>
                              <div className="neutral900 flex items-center my-3">
                                <div className="rounded-full w-[32px] h-[32px] bg-white border-4 border-hope500 mr-2" />
                                <p className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Non-Treatment Group
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-neutral200 mt-2 pt-4 rounded-lg">
                            <p className="neutral900 styles_Text-p-strong__3Pn_k styles_center__2XyIX styles_block__vwpC6 break-words">
                              16341 Total Participants · 5 Treatment Groups
                            </p>
                            <p className="neutral600 styles_Text-p__oN__e styles_center__2XyIX styles_block__vwpC6 break-words">
                              Primary Treatment: BNT162b2 · Has Placebo Group ·
                              Phase 3
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <span className="neutral900 styles_Text-p-strong__3Pn_k di break-words">
                                60 µg dose
                              </span>
                              <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                Experimental Group · 4 Interventions: BNT162b2,
                                Combination BNT162b2 and BNT162b2 OMI,
                                Combination (Bivalent) BNT162b2 and BNT162b2
                                OMI, BNT162b2 OMI · Intervention Types:
                                Biological, Biological, Biological, Biological
                              </span>
                              <div>
                                <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                                  View more
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="neutral900 styles_Text-p-strong__3Pn_k di break-words">
                                BNT162b2
                              </span>
                              <div className="bg-neutral100 neutral600 rounded-md px-3 py-1 ml-2 inline">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="microscope"
                                  className="svg-inline--fa fa-microscope fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                  />
                                </svg>
                                <span className="neutral600 styles_Text-p-tiny-strong__OmHuk di break-words">
                                  Biological
                                </span>
                              </div>
                              <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                Experimental Group · 1 Intervention: BNT162b2 ·
                                Intervention Types: Biological
                              </span>
                              <div>
                                <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                                  View more
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="neutral900 styles_Text-p-strong__3Pn_k di break-words">
                                10 µg dose
                              </span>
                              <div className="bg-neutral100 neutral600 rounded-md px-3 py-1 ml-2 inline">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="microscope"
                                  className="svg-inline--fa fa-microscope fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                  />
                                </svg>
                                <span className="neutral600 styles_Text-p-tiny-strong__OmHuk di break-words">
                                  Biological
                                </span>
                              </div>
                              <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                Experimental Group · 1 Intervention: BNT162b2 ·
                                Intervention Types: Biological
                              </span>
                              <div>
                                <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                                  View more
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="neutral900 styles_Text-p-strong__3Pn_k di break-words">
                                30 µg dose
                              </span>
                              <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                Experimental Group · 4 Interventions: BNT162b2,
                                Combination BNT162b2 and BNT162b2 OMI,
                                Combination (Bivalent) BNT162b2 and BNT162b2
                                OMI, BNT162b2 OMI · Intervention Types:
                                Biological, Biological, Biological, Biological
                              </span>
                              <div>
                                <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                                  View more
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="neutral900 styles_Text-p-strong__3Pn_k di break-words">
                                Placebo
                              </span>
                              <div className="bg-neutral100 neutral600 rounded-md px-3 py-1 ml-2 inline">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="microscope"
                                  className="svg-inline--fa fa-microscope fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                  />
                                </svg>
                                <span className="neutral600 styles_Text-p-tiny-strong__OmHuk di break-words">
                                  Other
                                </span>
                              </div>
                              <span className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                PlaceboComparator Group · 1 Intervention:
                                Placebo · Intervention Types: Other
                              </span>
                              <div>
                                <span className="neutral500 styles_Text-p-small-strong__stbwa underline hover:text-neutral600 styles_block__vwpC6 cursor-pointer break-words">
                                  View more
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-white border border-neutral200 rounded-2xl overflow-hidden">
                        <div className="md:overflow-visible overflow-auto">
                          <div className="flex justify-between items-center w-full p-4 border-b border-neutral200 neutral600 bg-neutral50 min-w-[620px]">
                            <div className="w-1/4">
                              <span className="neutral600 styles_Text-p-small-strong__stbwa styles_center__2XyIX styles_block__vwpC6 break-words">
                                Treatment
                              </span>
                            </div>
                            <div className="w-1/4">
                              <span className="neutral600 styles_Text-p-small-strong__stbwa styles_center__2XyIX styles_block__vwpC6 break-words">
                                First Studied
                              </span>
                            </div>
                            <div className="w-1/4">
                              <span className="neutral600 styles_Text-p-small-strong__stbwa styles_center__2XyIX styles_block__vwpC6 break-words">
                                Drug Approval Stage
                              </span>
                            </div>
                            <div className="w-1/4">
                              <span className="neutral600 styles_Text-p-small-strong__stbwa pr-4 styles_center__2XyIX styles_block__vwpC6 break-words">
                                How many patients have taken this drug
                              </span>
                            </div>
                          </div>
                          <div className="md:overflow-auto overflow-visible max-h-[400px]">
                            <div className="flex w-full p-4 justify-between min-w-[620px]">
                              <div className="w-1/4">
                                <span className="black styles_Text-p__oN__e styles_center__2XyIX styles_block__vwpC6 styles_preLine__Zqlxm break-words">
                                  <span tabIndex={0}>
                                    <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                      Pfizer-BioNTech COVID-19 Vaccine
                                    </span>
                                  </span>
                                </span>
                              </div>
                              <div className="w-1/4">
                                <span className="black styles_Text-p__oN__e styles_center__2XyIX styles_block__vwpC6 styles_preLine__Zqlxm break-words" />
                              </div>
                              <div className="w-1/4">
                                <span className="black styles_Text-p__oN__e styles_center__2XyIX styles_block__vwpC6 styles_preLine__Zqlxm break-words">
                                  FDA approved
                                </span>
                              </div>
                              <div className="w-1/4">
                                <span className="black styles_Text-p__oN__e pr-4 styles_center__2XyIX styles_block__vwpC6 styles_preLine__Zqlxm break-words" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section aria-label="Trial Logistics" id="logistics">
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Trial Logistics
                    </h3>
                    <div className="w-full flex flex-col space-y-8">
                      <div className="grid grid-cols-1 gap-0">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="neutral900 styles_Text-h4__mnk_t styles_block__vwpC6 break-words">
                              Trial Timeline
                            </h4>
                          </div>
                          <div
                            aria-describedby="Screening,-treatment,-and-reporting-timeline-for-the-trial."
                            aria-label="Screening, treatment, and reporting timeline for the trial."
                            role="img"
                          >
                            <div className="lg:rounded-2xl rounded-xl lg:p-6 p-4 bg-neutral50 border border-neutral200">
                              <div className="lg:flex lg:flex-col">
                                <div className="w-fit min-w-[60%] max-w-[80%]">
                                  <div className="rounded-lg my-2 py-2 px-2 bg-seaGreen800">
                                    <span className="white styles_Text-p-small___zIZy inline-block text-sm lg:text-lg styles_block__vwpC6 break-words">
                                      <span>
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="map-pin"
                                          className="svg-inline--fa fa-map-pin fa-1x px-2"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 320 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M200 488C200 501.3 189.3 512 176 512C162.7 512 152 501.3 152 488V286C83.9 274.6 32 215.4 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144C320 215.4 268.1 274.6 200 286V488zM176 48C122.1 48 80 90.98 80 144C80 197 122.1 240 176 240C229 240 272 197 272 144C272 90.98 229 48 176 48z"
                                          />
                                        </svg>
                                        Screening: ~3 weeks
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-fit min-w-[60%] max-w-[80%] ml-[15%]">
                                  <div className="rounded-lg my-2 py-2 px-2 bg-seaGreen400">
                                    <span className="seaGreen900 styles_Text-p-small___zIZy inline-block text-sm lg:text-lg styles_block__vwpC6 break-words">
                                      <span>
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="flask"
                                          className="svg-inline--fa fa-flask fa-1x px-2"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M437.2 403.5L319.1 215L319.1 48h7.998c13.25 0 23.1-10.75 23.1-24S341.2 0 327.1 0H120C106.8 0 96.01 10.75 96.01 24S106.8 48 120 48h7.998L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5zM119.2 320l56.78-91.29V48h95.98v180.7L328.8 320H119.2z"
                                          />
                                        </svg>
                                        Treatment: Varies
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-fit min-w-[60%] max-w-[80%] ml-[25%]">
                                  <div
                                    className="rounded-lg my-2 py-2 px-2"
                                    style={{
                                      background:
                                        "linear-gradient(90deg, rgb(161, 232, 255) 50%, rgba(245, 253, 255, 0) 88.4%)",
                                    }}
                                  >
                                    <span className="seaGreen900 styles_Text-p-small___zIZy inline-block text-sm lg:text-lg styles_block__vwpC6 break-words">
                                      <span>
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="newspaper"
                                          className="svg-inline--fa fa-newspaper fa-1x px-2"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M456 32h-304C121.1 32 96 57.13 96 88v320c0 13.22-10.77 24-24 24S48 421.2 48 408V112c0-13.25-10.75-24-24-24S0 98.75 0 112v296C0 447.7 32.3 480 72 480h352c48.53 0 88-39.47 88-88v-304C512 57.13 486.9 32 456 32zM464 392c0 22.06-17.94 40-40 40H139.9C142.5 424.5 144 416.4 144 408v-320c0-4.406 3.594-8 8-8h304c4.406 0 8 3.594 8 8V392zM264 272h-64C186.8 272 176 282.8 176 296S186.8 320 200 320h64C277.3 320 288 309.3 288 296S277.3 272 264 272zM408 272h-64C330.8 272 320 282.8 320 296S330.8 320 344 320h64c13.25 0 24-10.75 24-24S421.3 272 408 272zM264 352h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S277.3 352 264 352zM408 352h-64C330.8 352 320 362.8 320 376s10.75 24 24 24h64c13.25 0 24-10.75 24-24S421.3 352 408 352zM400 112h-192c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64C432 126.3 417.7 112 400 112z"
                                          />
                                        </svg>
                                        Reporting: before and 3 days after study
                                        vaccination
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span
                              className="neutral600 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words"
                              id="Screening,-treatment,-and-reporting-timeline-for-the-trial."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-baseline space-x-2">
                          <h4 className="neutral900 styles_Text-h4__mnk_t styles_block__vwpC6 break-words">
                            Closest Location
                          </h4>
                          <span className="neutral600 styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                            East-West Medical Research Institute · Honolulu, HI
                          </span>
                          <span className="black styles_Text-p__oN__e di break-words">
                            {" "}
                            · 6303 miles
                          </span>
                        </div>
                        <div className="flex w-full rounded-xl overflow-hidden gap-2">
                          <img
                            alt="Image of East-West Medical Research Institute in Honolulu, United States."
                            src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/7cf153c7-1c6e-45a2-3b22-e0895b09e100/fit=cover,format=auto,h=500,onerror=redirect,w=500"
                            width={500}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="w-1/2 object-cover"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <img
                            alt="Image of East-West Medical Research Institute in Honolulu, United States."
                            src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/e70aefe2-185c-4ee5-aa14-28a9c3ec8800/fit=cover,format=auto,h=500,onerror=redirect,w=500"
                            width={500}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="w-1/4 object-cover"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <img
                            alt="Image of East-West Medical Research Institute in Honolulu, United States."
                            src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/7f3a6d82-4305-47d7-f499-a3f2019a4500/fit=cover,format=auto,h=500,onerror=redirect,w=500"
                            width={500}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="w-1/4 object-cover"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex items-center p-4 rounded-xl w-full bg-neutral50 border border-neutral200">
                          <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row items-center w-full lg:grid lg:grid-cols-3 divide-x divide-neutral200 my-3 gap-y-8">
                            <div className="flex flex-col p-2 px-4 text-center min-w-fit">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="briefcase"
                                className="svg-inline--fa fa-briefcase fa-1x my-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M448 96h-64V64c0-35.35-28.65-64-64-64H192C156.7 0 128 28.65 128 64v32H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM192 48h128c8.837 0 16 7.163 16 16v32h-160V64C176 55.16 183.2 48 192 48zM64 144h384c8.8 0 16 7.2 16 16v96h-416V160C48 151.2 55.2 144 64 144zM448 432H64c-8.8 0-16-7.2-16-16V304H192V320c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V304h144V416C464 424.8 456.8 432 448 432z"
                                />
                              </svg>
                              <span className="neutral900 styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                2003
                              </span>
                              <span className="neutral600 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                First Recorded Clinical Trial
                              </span>
                            </div>
                            <div className="flex flex-col p-2 px-4 text-center min-w-fit">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart-pulse"
                                className="svg-inline--fa fa-heart-pulse fa-1x my-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M287.1 424.9L186.5 320h-66.78l145.2 150.2C271.3 476.7 279.6 480 287.1 480c8.332 0 16.69-3.268 23.01-9.805L456.2 320h-66.78L287.1 424.9zM495.2 62.86C471 41.92 440.1 31.1 410.8 32c-37.49 0-75.41 15.34-103.1 43.92L288 96.25L268.3 75.92C240.6 47.34 202.7 32 165.2 32C135.1 32 104.1 41.92 80.81 62.86C18.66 116.7 15.8 212.5 71.82 270.5l16.73 17.53l97.16 .0313l29.88-71.75l56.88 126.4c5.5 12.25 22.88 12.62 28.88 .625l49.75-99.5l22.12 44.25l114.2-.0313l16.73-17.53C560.2 212.5 557.4 116.6 495.2 62.86zM469.6 237.1l-18.31 18.93h-58.33l-27.62-55.25c-5.875-11.75-22.62-11.75-28.5 0l-49 98L229.7 169.4c-5.75-12.75-24-12.5-29.38 .375l-36 86.25H124.6L106.3 237.1C74.1 203.8 66.46 138.1 112.5 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C509.1 138.6 502.5 203.1 469.6 237.1z"
                                />
                              </svg>
                              <span className="neutral900 styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                6 Trials
                              </span>
                              <span className="neutral600 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                Researching COVID-19
                              </span>
                            </div>
                            <div className="flex flex-col p-2 px-4 text-center min-w-fit">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="file-certificate"
                                className="svg-inline--fa fa-file-certificate fa-1x my-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                />
                              </svg>
                              <span className="neutral900 styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                                51 Completed
                              </span>
                              <span className="neutral600 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                Clinical Trials
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="grid grid-cols-1 gap-0">
                    <h3 className="neutral900 styles_Text-h3__MCDgK mb-4 styles_block__vwpC6 break-words">
                      Who is running the clinical trial?
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                        <div className="flex items-center gap-8">
                          <div className="hidden md:inline-block ">
                            <svg
                              fill="none"
                              height={124}
                              width={124}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#pi-profile_svg__a)">
                                <rect
                                  fill="#DBD8E5"
                                  height={120}
                                  rx={60}
                                  width={120}
                                  x={2}
                                  y={2}
                                />
                                <path
                                  d="M62 65.107c10.77 0 19.5-8.73 19.5-19.5s-8.73-19.5-19.5-19.5-19.5 8.73-19.5 19.5 8.73 19.5 19.5 19.5zm-45.5 58.5c0-25.129 20.371-45.5 45.5-45.5s45.5 20.371 45.5 45.5h-91z"
                                  fill="#616066"
                                />
                              </g>
                              <rect
                                height="121.5"
                                rx="60.75"
                                stroke="#fff"
                                strokeWidth="1.5"
                                width="121.5"
                                x="1.25"
                                y="1.25"
                              />
                              <defs>
                                <clipPath id="pi-profile_svg__a">
                                  <rect
                                    fill="#fff"
                                    height={120}
                                    rx={60}
                                    width={120}
                                    x={2}
                                    y={2}
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <span className="black styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                              BioNTech SE
                            </span>
                            <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              Lead Sponsor
                            </span>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  51 Previous Clinical Trials
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  74,926 Total Patients Enrolled
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  19 Trials studying COVID-19
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  69,398 Patients Enrolled for COVID-19
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                        <div className="flex items-center gap-8">
                          <div className="hidden md:inline-block ">
                            <div className="w-[200px] h-[200px] m-auto p-2 rounded-xl bg-mediumGrey800">
                              <img
                                alt="Pfizer"
                                src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/2b5147ef-3143-4dfa-fa0b-fdcc05d8e600/format=auto,h=200,onerror=redirect,w=200"
                                width={200}
                                height={200}
                                decoding="async"
                                data-nimg={1}
                                className="relative top-1/2 transform -translate-y-1/2 object-cover"
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div>
                            <span className="black styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                              Pfizer
                            </span>
                            <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              Industry Sponsor
                            </span>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  4,274 Previous Clinical Trials
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  7,106,355 Total Patients Enrolled
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  46 Trials studying COVID-19
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  108,361 Patients Enrolled for COVID-19
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                        <div className="flex items-center gap-8">
                          <div className="hidden md:inline-block ">
                            <svg
                              fill="none"
                              height={124}
                              width={124}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#pi-profile_svg__a)">
                                <rect
                                  fill="#DBD8E5"
                                  height={120}
                                  rx={60}
                                  width={120}
                                  x={2}
                                  y={2}
                                />
                                <path
                                  d="M62 65.107c10.77 0 19.5-8.73 19.5-19.5s-8.73-19.5-19.5-19.5-19.5 8.73-19.5 19.5 8.73 19.5 19.5 19.5zm-45.5 58.5c0-25.129 20.371-45.5 45.5-45.5s45.5 20.371 45.5 45.5h-91z"
                                  fill="#616066"
                                />
                              </g>
                              <rect
                                height="121.5"
                                rx="60.75"
                                stroke="#fff"
                                strokeWidth="1.5"
                                width="121.5"
                                x="1.25"
                                y="1.25"
                              />
                              <defs>
                                <clipPath id="pi-profile_svg__a">
                                  <rect
                                    fill="#fff"
                                    height={120}
                                    rx={60}
                                    width={120}
                                    x={2}
                                    y={2}
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <span className="black styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                              Pfizer CT.gov Call Center
                            </span>
                            <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              Study Director
                            </span>
                            <span className="neutral500 styles_Text-p__oN__e line-clamp-1 styles_block__vwpC6 break-words">
                              Pfizer
                            </span>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  3,259 Previous Clinical Trials
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  4,821,960 Total Patients Enrolled
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  32 Trials studying COVID-19
                                </span>
                              </div>
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="file-certificate"
                                  className="svg-inline--fa fa-file-certificate fa-1x mr-1 inline"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M247.4 338.3c7.5-7.5 10.37-18.5 7.625-28.75c-5.375-20.62-5.5-17.75 0-38.38c2.748-10.38-.125-21.38-7.625-28.88C232.5 227.1 233.1 229.6 228.5 209C225.9 198.8 217.1 190.8 207.9 188C187.5 182.4 190 183.9 175.1 168.8C167.8 161.3 156.1 158.3 146.9 161c-20.37 5.5-17.49 5.5-37.74 0C99.01 158.3 88.26 161.3 80.89 168.8C65.89 183.9 68.39 182.4 48.14 188C38.02 190.8 30.23 198.8 27.48 209c-5.375 20.75-4 18.12-18.87 33.25c-7.375 7.5-10.33 18.5-7.582 28.88c5.375 20.62 5.375 17.75 0 38.38c-2.75 10.25 .207 21.25 7.582 28.75c14.87 15.12 13.5 12.62 18.87 33.25c2.75 10.38 10.54 18.38 20.67 21.12c14.37 3.875 11.5 3 15.87 5V512l63.99-32l63.99 32v-114.4c4.25-2 1.499-1.125 15.87-5c9.998-2.75 17.1-10.75 20.62-21.12C233.1 350.8 232.5 353.4 247.4 338.3zM128 352c-35.37 0-63.99-28.62-63.99-64S92.64 224 128 224s63.99 28.62 63.99 64S163.4 352 128 352zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0L191.1-.0001c-35.35 0-64 28.65-64 64l.0105 68.94c0 0 22.02-10.7 48-.7539L176 64.13c0-8.836 7.164-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H224L223.1 512l224-.0001c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"
                                  />
                                </svg>
                                <span className="black styles_Text-p-small___zIZy di break-words">
                                  98,246 Patients Enrolled for COVID-19
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section
                    aria-label="Eligibility Criteria"
                    id="eligibilityCriteria"
                  >
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words">
                      Eligibility Criteria
                    </h3>
                    <div>
                      <p className="neutral600 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                        Age Any Age · All Participants · 6 Total Inclusion
                        Criteria
                      </p>
                      <span className="neutral900 styles_Text-p-strong__3Pn_k mt-2 mb-2 styles_block__vwpC6 break-words">
                        Mark “Yes” if the following statements are true for you:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Substudy A
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Male or female participants ≥16 years of age
                                  at Visit 1 (Day 1) who participated in
                                  C4591001.
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Participants who are willing and able to
                                  comply with all scheduled visits, vaccination
                                  plan, laboratory tests, lifestyle
                                  considerations, and other study procedures.
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Healthy participants who are determined by
                                  medical history, physical examination (if
                                  required), and clinical judgment of the
                                  investigator to be eligible for inclusion in
                                  the study.
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Capable of giving signed informed consent.
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                              <div className="mb-4">
                                <span className="neutral900 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                  Participants who have received 2 prior doses
                                  of 30 µg BNT162b2 19-42 days apart, with the
                                  second dose being at least 175 days before
                                  Visit 1 (Day 1).
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Yes"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Yes
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-No"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div
                                    aria-label="checkbox-Unsure"
                                    className="flex justify-center items-center border-2 rounded-lg h-[40px] min-w-[80px] cursor-pointer border-black"
                                    tabIndex={0}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="check"
                                      className="svg-inline--fa fa-check fa-1x mr-2 text-base black"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                      />
                                    </svg>
                                    <label className="cursor-pointer">
                                      <span className="black styles_Text-p-tiny-strong__OmHuk styles_block__vwpC6 break-words">
                                        Unsure
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-label="about-the-author"
                    className="my-10 lg:my-20"
                    id="about-the-author-michael-gill"
                  >
                    <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-0 mt-4 styles_block__vwpC6 break-words">
                      About The Reviewer
                    </h3>
                    <div className="inline-block h-auto w-full border border-neutral200 lg:rounded-2xl rounded-xl mb-4 lg:p-6 p-4 bg-neutral50">
                      <div className="styles_shelf__AuCxB">
                        <div className="mr-4">
                          <img
                            alt="Michael Gill preview"
                            src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/92e8d147-4bd2-42ec-2760-8c2c2ff60500/fit=cover,format=auto,h=80,onerror=redirect,w=80"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="lg:mt-0 mt-4 lg:scale-100 scale-75 rounded-full object-cover"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <a href="https://www.withpower.com/about/michael-gill">
                            <span className="black styles_Text-p-small-strong__stbwa styles_block__vwpC6 break-words">
                              <p>Michael Gill - B. Sc.</p>
                            </span>
                          </a>
                          <div className="lg:flex lg:space-x-4 lg:space-y-0 flex-col">
                            <span className="neutral600 styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                              <p>First Published: October 23rd, 2021</p>
                            </span>
                            <span className="neutral600 styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                              <p>Last Reviewed: November 22nd, 2022</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="neutral600 styles_Text-p-small___zIZy pt-2 styles_block__vwpC6 break-words">
                        <div className="grid grid-cols-1 gap-4">
                          <p className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                            Michael Gill holds a Bachelors of Science in
                            Integrated Science and Mathematics from McMaster
                            University. During his degree he devoted
                            considerable time modeling the pharmacodynamics of
                            promising drug candidates. Since then, he has
                            leveraged this knowledge of the investigational new
                            drug ecosystem to help his father navigate clinical
                            trials for multiple myeloma, an experience which
                            prompted him to co-found Power Life Sciences: a
                            company that helps patients access randomized
                            controlled trials.
                          </p>
                        </div>
                      </span>
                    </div>
                  </section>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 my-8">
                <div className="my-8">
                  <h4 className="neutral500 styles_Text-h3__MCDgK mb-4 styles_block__vwpC6 break-words">
                    Who else is applying?
                  </h4>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 my-4">
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        What state do they live in?
                      </h5>
                      <table className="table-auto border-none w-full">
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Texas
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                25.0%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Florida
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                18.8%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "18.75%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Massachusetts
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                6.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "6.25%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Other
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                50.0%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "50%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        How old are they?
                      </h5>
                      <table className="table-auto border-none w-full">
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                18 - 65
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                93.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "93.3333%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                65+
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                6.7%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "6.66667%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        What site did they apply to?
                      </h5>
                      <table className="table-auto border-none w-full">
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Clinical Research Consulting
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                8.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "8.33333%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Clinical Neuroscience Solutions, Inc. dba CNS
                                Healthcare
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                8.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "8.33333%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Texas Center for Drug Development, Inc.
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                25.0%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Other
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                58.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "58.3333%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        What portion of applicants met pre-screening criteria?
                      </h5>
                      <table className="table-auto border-none w-full">
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Did not meet criteria
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                18.8%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "18.75%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Met criteria
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                81.3%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "81.25%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="my-8">
                  <h4 className="neutral500 styles_Text-h3__MCDgK mb-4 styles_block__vwpC6 break-words">
                    How responsive is this trial?
                  </h4>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 my-4">
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        Typically responds via
                      </h5>
                      <table className="table-auto border-none w-full">
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Phone Call
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                50.0%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "50%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Email
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                50.0%
                              </span>
                            </td>
                          </tr>
                          <tr className="border-y-8 border-white">
                            <td colSpan={2}>
                              <div className="bg-light h-2 rounded-lg w-full">
                                <div
                                  className="bg-primary500 h-2 rounded-lg"
                                  style={{ width: "50%" }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        Average response time
                      </h5>
                      <ul>
                        <li>
                          <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            &lt; 1 Day
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-4 border border-light rounded-2xl p-8">
                      <h5 className="black styles_Text-h5__PoarS styles_block__vwpC6 break-words">
                        Most responsive sites:
                      </h5>
                      <ol className="list-decimal ml-4">
                        <li>
                          <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            Alliance for Multispecialty Research, LLC: &lt; 24
                            hours
                          </span>
                        </li>
                        <li>
                          <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            Meridian Clinical Research, LLC: &lt; 24 hours
                          </span>
                        </li>
                        <li>
                          <span className="black styles_Text-p__oN__e styles_block__vwpC6 break-words">
                            Texas Center for Drug Development, Inc.: &lt; 24
                            hours
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 bg-neutral50 border border-neutral200 lg:rounded-2xl rounded-xl lg:p-6 p-4">
                <div className="mb-4 flex justify-between items-center">
                  <span className="neutral900 styles_Text-h4__mnk_t styles_block__vwpC6 break-words">
                    References
                  </span>
                </div>
                <ul className="list-decimal px-4 text-left">
                  <li>
                    <a
                      className="underline hover:no-underline"
                      href="https://pubmed.ncbi.nlm.nih.gov/35320659"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                        Moreira, Edson D., Jr., Nicholas Kitchin, Xia Xu, Samuel
                        S. Dychter, Stephen Lockhart, Alejandra Gurtman, John L.
                        Perez, et al.. 2022. “Safety and Efficacy of a Third
                        Dose of Bnt162b2 Covid-19 Vaccine”. New England Journal
                        of Medicine. Massachusetts Medical Society.
                        doi:10.1056/nejmoa2200674.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline hover:no-underline"
                      href="https://pubmed.ncbi.nlm.nih.gov/35320659"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                        Moreira, Edson D., Jr., Nicholas Kitchin, Xia Xu, Samuel
                        S. Dychter, Stephen Lockhart, Alejandra Gurtman, John L.
                        Perez, et al.. 2022. “Safety and Efficacy of a Third
                        Dose of Bnt162b2 Covid-19 Vaccine”. New England Journal
                        of Medicine. Massachusetts Medical Society.
                        doi:10.1056/nejmoa2200674.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline hover:no-underline"
                      href="https://pubmed.ncbi.nlm.nih.gov/35320659"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                        Moreira ED Jr, Kitchin N, Xu X, Dychter SS, Lockhart S,
                        Gurtman A, Perez JL, Zerbini C, Dever ME, Jennings TW,
                        Brandon DM, Cannon KD, Koren MJ, Denham DS, Berhe M,
                        Fitz-Patrick D, Hammitt LL, Klein NP, Nell H, Keep G,
                        Wang X, Koury K, Swanson KA, Cooper D, Lu C, Tureci O,
                        Lagkadinou E, Tresnan DB, Dormitzer PR, Sahin U, Gruber
                        WC, Jansen KU; C4591031 Clinical Trial Group. Safety and
                        Efficacy of a Third Dose of BNT162b2 Covid-19 Vaccine. N
                        Engl J Med. 2022 May 19;386(20):1910-1921. doi:
                        10.1056/NEJMoa2200674. Epub 2022 Mar 23.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline hover:no-underline"
                      href="https://clinicaltrials.gov/ct2/show/NCT04955626"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                        {`2021. "To Evaluate the Safety, Tolerability, Efficacy
                          and Immunogenicity of BNT162b2 Boosting Strategies
                          Against COVID-19 in Participants ≥12 Years of Age.".
                          ClinicalTrials.gov.
                          https://clinicaltrials.gov/ct2/show/NCT04955626.`}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <section aria-label="relatedTrials" id="relatedTrials">
                <h3 className="neutral900 styles_Text-h3__MCDgK lg:mb-4 mb-2 styles_block__vwpC6 break-words" />
                <section id="related-trials">
                  <div className="grid grid-cols-1 gap-4 mx-auto py-4">
                    <div className="styles_shelf__AuCxB mb-16 w-full">
                      <div className="grid grid-cols-1 gap-4 w-full">
                        <h3 className="neutral900 styles_Text-h3__MCDgK styles_block__vwpC6 break-words">
                          Other Trials to Consider
                        </h3>
                        <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row items-top h-84 gap-8 pl-2">
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-1-covid-19-2-2022-268cd"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="CV2CoV (2 µg) for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      CV2CoV (2 Μg)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 1
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        West Jordan, UT
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-1-covid-19-6-2022-56229"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="CV0501 (6 μg) for Coronavirus Disease 2019 (COVID‑19)"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      CV0501 (6 Μg)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for Coronavirus Disease 2019 (COVID‑19)
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 1
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Sacramento, CA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-2-and-3-coronavirus-disease-2019-covid19-6-2021-8b296"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="Pfizer/BioNTech (BNT162b2) for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      Pfizer/BioNTech (BNT162b2)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 2 &amp; 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Rio Grande City, TX
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-2-and-3-covid-19-8-2022-a9253"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="10 microgram dose, 5 to <12 Years (Substudy D, Group 1) for COVID19 (disease)"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      10 Microgram Dose, 5 To &lt;12 Years
                                      (Substudy D, Group 1)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID19 (disease)
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 2 &amp; 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Seattle, WA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        6 - 11
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-2-covid-19-2-2022-9f214"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="CoV2 preS dTM/D614 for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      CoV2 PreS DTM/D614
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 1 &amp; 2
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-blue100 mr-1 lg:mr-2 rounded-lg blue800">
                                      <span className="blue800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="stopwatch"
                                          className="svg-inline--fa fa-stopwatch fa-1x mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 320C248 333.3 237.3 344 224 344C210.7 344 200 333.3 200 320V216C200 202.7 210.7 192 224 192C237.3 192 248 202.7 248 216V320zM144 24C144 10.75 154.7 0 168 0H280C293.3 0 304 10.75 304 24C304 37.25 293.3 48 280 48H248V97.37C291.4 102.4 330.8 120.7 361.8 148.2L391 119C400.4 109.7 415.6 109.7 424.1 119C434.3 128.4 434.3 143.6 424.1 152.1L393.9 184C417.9 217.9 432 259.3 432 304C432 418.9 338.9 512 224 512C109.1 512 16 418.9 16 304C16 197.2 96.43 109.3 200 97.37V48H168C154.7 48 144 37.25 144 24V24zM224 464C312.4 464 384 392.4 384 304C384 215.6 312.4 144 224 144C135.6 144 64 215.6 64 304C64 392.4 135.6 464 224 464z"
                                          />
                                        </svg>
                                        Quick Reply
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        San Francisco, CA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-2-covid-19-6-2022-0535d"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="BNT162b2 Bivalent (WT/OMI BA.1) for COVID19 (disease)"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      BNT162b2 Bivalent (WT/OMI BA.1)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID19 (disease)
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 2 &amp; 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Honolulu, HI
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        12 - 55
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-2-pneumonia-10-2021-3ea6e"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="SP16 (6mg) for Pneumonia"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      SP16 (6mg)
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for Pneumonia
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 1 &amp; 2
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        No Cost For Treatment
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Charlottesville, VA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-coronavirus-disease-2019-covid19-5-2022-1551d"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="ABNCoV2 for Coronavirus Disease 2019 (COVID‑19)"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      ABNCoV2
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for Coronavirus Disease 2019 (COVID‑19)
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 3 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                3
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Oxnard, CA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-covid-19-10-2020-fc11f"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="AZD7442 for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      AZD7442
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 3 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                3
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Drug
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Modesto, CA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18 - 120
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-covid-19-5-2021-84a8d"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="RSLV-132 for Atrial Premature Complexes"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      RSLV-132
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for Atrial Premature Complexes
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 2
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        FDA Approved Drug
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Seattle, WA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18 - 75
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-covid-19-7-2020-b4e27"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="AZD1222 for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      AZD1222
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 3 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                3
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        FDA Approved Drug
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Honolulu, HI
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18 - 130
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-covid-19-7-2021-0a77b"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="Molnupiravir for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      Molnupiravir
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 3 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                3
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 3
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Drug
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Oakland, CA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        18+
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-3-covid-19-9-2021-75847"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="BNT162b2 for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      BNT162b2
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 2 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                2
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                      <span className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Phase 2
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Recruiting
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        FDA Approved Drug
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Seattle, WA
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        Any Age
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="flex-none max-w-md min-w-[384px]">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/trial/phase-covid-19-3-2020-b7287"
                            >
                              <div className="h-auto flex flex-col rounded-2xl border-2 border-neutral100 hover:border-neutral500">
                                <div className="bg-neutral100 w-full p-5 flex flex-col justify-around rounded-t-2xl">
                                  <h4
                                    className="mb-4"
                                    title="Biospecimen Collection for COVID-19"
                                  >
                                    <span className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-1">
                                      Biospecimen Collection
                                    </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                      for COVID-19
                                    </span>
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <span className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                          Phase-Based Progress Estimates
                                        </span>
                                        <div className="mx-2">
                                          <span tabIndex={0}>
                                            <span className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="circle-info"
                                                className="svg-inline--fa fa-circle-info fa-1x neutral500 text-lg"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"
                                                />
                                              </svg>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap flex-row items-center pb-3 -mt-2">
                                        <div className="styles_shelf__AuCxB mr-1 md:mr-4 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Effectiveness 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm" />
                                              <span className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Effectiveness
                                          </span>
                                        </div>
                                        <div className="styles_shelf__AuCxB mr-1 mt-2">
                                          <div className="mr-2">
                                            <div
                                              aria-label="Safety 1 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-blue100"
                                              role="group"
                                            >
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm" />
                                              <span className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                                1
                                              </span>
                                            </div>
                                          </div>
                                          <span className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                            Safety
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white w-full p-5 flex flex-col justify-around rounded-b-2xl">
                                  <div className="flex mb-4 overflow-y-auto">
                                    <div className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                      <span className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        <span tabIndex={0}>
                                          <span className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                            Waitlist Available
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 rounded-lg neutral800">
                                      <span className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                        Has No Placebo
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-full flex flex-row justify-between">
                                      <div className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="location-dot"
                                          className="svg-inline--fa fa-location-dot fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"
                                          />
                                        </svg>
                                        Houston, TX
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="address-card"
                                          className="svg-inline--fa fa-address-card fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                                          />
                                        </svg>
                                        Any Age
                                      </div>
                                      <div className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="venus-mars"
                                          className="svg-inline--fa fa-venus-mars fa-lg mr-1 inline"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 640 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M248 392h-48v-41.82C285.8 338.4 352 265 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48v48C152 501.3 162.8 512 176 512s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24S261.3 392 248 392zM176 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S246.6 304 176 304zM616 0h-112C490.8 0 480 10.75 480 24s10.75 24 24 24h54.06l-52.29 52.29c-31.3-23.72-68.42-36.26-105.8-36.26c-15.19 0-30.15 2.657-44.93 6.565c8.125 13.74 14.89 28.38 19.71 43.9C382.9 112.9 391.4 112 400 112c34.19 0 66.33 13.31 90.51 37.49c49.91 49.91 49.91 131.1 0 181C466.3 354.7 434.2 368 400 368c-32.98 0-63.89-12.64-87.75-35.22c-12.23 10.64-25.65 19.9-40.12 27.49c1.252 1.33 2.115 2.881 3.416 4.182C309.9 398.8 354.1 416 400 416c45.04 0 90.09-17.18 124.5-51.55c62.92-62.92 67.54-161.2 15.26-230.2L592 81.94V136C592 149.3 602.8 160 616 160S640 149.3 640 136v-112C640 10.75 629.3 0 616 0z"
                                          />
                                        </svg>
                                        All Sexes
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section id="related-directories">
                <div className="grid grid-cols-1 gap-4 mx-auto py-4">
                  <div className="styles_shelf__AuCxB mb-16 w-full max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 w-full">
                      <h3 className="neutral900 styles_Text-h3__MCDgK styles_block__vwpC6 break-words">
                        Popular Categories
                      </h3>
                      <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row items-top h-80 gap-8 pl-2">
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/covid">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearBlush-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 COVID Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    COVID Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/coronavirus">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Coronavirus Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Coronavirus Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/miami-fl">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearDarkCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Best 10 Miami Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Miami, FL
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/omaha-ne">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearDarkGarden-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Best 10 Omaha Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Omaha, NE
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/atlanta-ga">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearGreen-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Best 10 Atlanta Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Atlanta, GA
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/austin-tx">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Best 10 Austin Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Austin, TX
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/anaheim-ca">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffPrimary-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Best 10 Anaheim Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Anaheim, CA
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/georgia">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffWarm-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Georgia Clinical Trials Paid Clinical
                                  Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Clinical Trials in Georgia
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/omaha-ne-paid-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearPrimary-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Omaha Paid Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Paid Clinical Trials in Omaha, NE
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/austin-tx-paid-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearWarm-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Austin Paid Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Paid Clinical Trials in Austin, TX
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/anaheim-ca-paid-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Anaheim Paid Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Paid Clinical Trials in Anaheim, CA
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/vaccine">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicDawn-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Vaccine Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Vaccine Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/polio">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearBlush-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Polio Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Polio Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/dengue-fever">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Dengue Fever Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Dengue Fever Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/clinical-trials/covid19">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearDarkCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Top 10 Covid19 Clinical Trials
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="microscope"
                                    className="svg-inline--fa fa-microscope fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Covid19 Clinical Trials 2022
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="related-articles">
                <div className="grid grid-cols-1 gap-4 mx-auto py-4">
                  <div className="styles_shelf__AuCxB mb-16 w-full max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 w-full">
                      <h3 className="neutral900 styles_Text-h3__MCDgK styles_block__vwpC6 break-words">
                        Popular Guides
                      </h3>
                      <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row items-center items-top h-80 gap-8 pl-2">
                        <div className="flex-none max-w-md min-w-[384px]">
                          <a href="https://www.withpower.com/guides/vaccine-research-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearPrimary-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words" />
                                <span className="flex items-center">
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Learn More About Vaccine Research Studies
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md min-w-[384px]">
                          <a href="https://www.withpower.com/guides/covid-research-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearWarm-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words" />
                                <span className="flex items-center">
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Learn More About Covid Research Studies
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md min-w-[384px]">
                          <a href="https://www.withpower.com/guides/gut-health">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words" />
                                <span className="flex items-center">
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    The Complete Guide To Gut Health
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md min-w-[384px]">
                          <a href="https://www.withpower.com/guides/depression-research-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicDawn-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words" />
                                <span className="flex items-center">
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Learn About Depression Research Studies
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md min-w-[384px]">
                          <a href="https://www.withpower.com/guides/mental-health-research-studies">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearBlush-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words" />
                                <span className="flex items-center">
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    Learn More About Mental Health Research
                                    Studies
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="related-treatment-topics">
                <div className="grid grid-cols-1 gap-4 mx-auto py-4">
                  <div className="styles_shelf__AuCxB mb-16 w-full max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 w-full">
                      <h3 className="neutral900 styles_Text-h3__MCDgK styles_block__vwpC6 break-words">
                        Learn More About These Treatments
                      </h3>
                      <div className="relative w-full overflow-x-auto overflow-y-visible flex flex-row items-top h-80 gap-8 pl-2">
                        <div className="flex-none max-w-md">
                          <a href="/t/trelegy-ellipta">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearGreen-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Trelegy Ellipta
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Trelegy Ellipta? Uses, Side Effects,
                                    &amp; Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/prednisolone-sodium-phosphate">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Prednisolone Sodium Phosphate
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Prednisolone Sodium Phosphate? Uses,
                                    Side Effects, &amp; Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/fingolimod-hydrochloride">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffPrimary-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Fingolimod Hydrochloride
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Fingolimod Hydrochloride? Uses, Side
                                    Effects, &amp; Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/atovaquone">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearOffWarm-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Atovaquone
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Atovaquone? Uses, Side Effects,
                                    &amp; Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/kaletra">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearPrimary-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Kaletra
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Kaletra? Uses, Side Effects, &amp;
                                    Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/prezista">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearWarm-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Prezista
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Prezista? Uses, Side Effects, &amp;
                                    Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/darunavir">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Darunavir
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Darunavir? Uses, Side Effects, &amp;
                                    Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/piroxicam">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-organicDawn-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Piroxicam
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Piroxicam? Uses, Side Effects, &amp;
                                    Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/famciclovir">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearBlush-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Famciclovir
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Famciclovir? Uses, Side Effects,
                                    &amp; Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex-none max-w-md">
                          <a href="/t/ramipril">
                            <div className="shadow-md hover:shadow-lg rounded-lg">
                              <div className="rounded-lg rounded-b-none  bg-linearCool-grainy h-[200px]" />
                              <div className="p-2 lg:p-4 bg-white rounded-lg">
                                <h4 className="black styles_Text-h4__mnk_t w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                  Ramipril
                                </h4>
                                <span className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="prescription-bottle-medical"
                                    className="svg-inline--fa fa-prescription-bottle-medical fa-1x mr-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M48 48H336V80H48V48zM32 0C14.3 0 0 14.3 0 32V96c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32zm0 160V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V160H304V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160H32zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16V330.7H256c8.8 0 16-7.2 16-16V293.3c0-8.8-7.2-16-16-16l-37.3 0V240c0-8.8-7.2-16-16-16H181.3c-8.8 0-16 7.2-16 16z"
                                    />
                                  </svg>
                                  <span className="black styles_Text-p__oN__e neutral500 w-full cursor-pointer no-underline line-clamp-1 styles_block__vwpC6 break-words">
                                    What is Ramipril? Uses, Side Effects, &amp;
                                    Dosage
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <div className="styles_background-gradient__84erZ absolute left-0 w-full">
                <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
                  <div className="pb-8 pt-4 lg:pt-8 lg:pt-8">
                    <div className="flex flex-col items-center mx-auto lg:flex-row lg:items-stretch justify-between gap-4">
                      <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                        <div className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8" />
                        <div
                          className="relative flex justify-center items-center mr-4"
                          style={{ height: "60px", minWidth: "60px" }}
                        >
                          <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply" />
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="scale-balanced"
                            className="svg-inline--fa fa-scale-balanced fa-1x absolute text-xl white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zM125.8 177.3L51.1 320H204.9L130.2 177.3c-.4-.8-1.3-1.3-2.2-1.3s-1.7 .5-2.2 1.3zM128 128c18.8 0 36 10.4 44.7 27l77.8 148.5c3.1 5.8 6.1 14 5.5 23.8c-.7 12.1-4.8 35.2-24.8 55.1C210.9 402.6 178.2 416 128 416s-82.9-13.4-103.2-33.5c-20-20-24.2-43-24.8-55.1c-.6-9.8 2.5-18 5.5-23.8L83.3 155c8.7-16.6 25.9-27 44.7-27zm384 48c-.9 0-1.7 .5-2.2 1.3L435.1 320H588.9L514.2 177.3c-.4-.8-1.3-1.3-2.2-1.3zm-44.7-21c8.7-16.6 25.9-27 44.7-27s36 10.4 44.7 27l77.8 148.5c3.1 5.8 6.1 14 5.5 23.8c-.7 12.1-4.8 35.2-24.8 55.1C594.9 402.6 562.2 416 512 416s-82.9-13.4-103.2-33.5c-20-20-24.2-43-24.8-55.1c-.6-9.8 2.5-18 5.5-23.8L467.3 155z"
                            />
                          </svg>
                        </div>
                        <div className="grid grid-cols-1 gap-0 relative">
                          <span className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Unbiased Results
                          </span>
                          <span className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
                            We believe in providing patients with all the
                            options.
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                        <div className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8" />
                        <div
                          className="relative flex justify-center items-center mr-4"
                          style={{ height: "60px", minWidth: "60px" }}
                        >
                          <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply" />
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="shield-halved"
                            className="svg-inline--fa fa-shield-halved fa-1x absolute text-xl white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
                            />
                          </svg>
                        </div>
                        <div className="grid grid-cols-1 gap-0 relative">
                          <span className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Your Data Stays Your Data
                          </span>
                          <span className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
                            {`We only share your information with the clinical trials you're trying to access.`}
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                        <div className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8" />
                        <div
                          className="relative flex justify-center items-center mr-4"
                          style={{ height: "60px", minWidth: "60px" }}
                        >
                          <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply" />
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="badge-check"
                            className="svg-inline--fa fa-badge-check fa-1x absolute text-xl white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zm97 225c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56 56c9.4 9.4 24.6 9.4 33.9 0L353 225z"
                            />
                          </svg>
                        </div>
                        <div className="grid grid-cols-1 gap-0 relative">
                          <span className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Verified Trials Only
                          </span>
                          <span className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
                            All of our trials are run by licensed doctors,
                            researchers, and healthcare companies.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex w-full mt-4 justify-between flex-row"
                      id="logoBack2top"
                    >
                      <div className="flex items-center" />
                      <div className="flex justify-center items-center cursor-pointer">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="up-to-line"
                          className="svg-inline--fa fa-up-to-line fa-1x mr-2 white"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM209.4 135.5c-4.5-4.8-10.8-7.5-17.4-7.5s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h72V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V320h72c9.6 0 18.2-5.7 22-14.5s2-19-4.6-26l-136-144z"
                          />
                        </svg>
                        <span className="white styles_Text-p__oN__e styles_block__vwpC6 break-words">
                          Back to top
                        </span>
                      </div>
                    </div>
                    <div
                      className="mx-auto my-8 flex flex-wrap w-full lg:flex-row justify-between lg:flex-nowrap"
                      id="extraInfo"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        <div className="mr-32" id="companyInfo">
                          <div className="grid grid-cols-1 gap-4">
                            <address className="not-italic flex-col">
                              <div className="flex items-center">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="map-pin"
                                  className="svg-inline--fa fa-map-pin fa-1x mr-2 primary200"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 320 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M200 488C200 501.3 189.3 512 176 512C162.7 512 152 501.3 152 488V286C83.9 274.6 32 215.4 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144C320 215.4 268.1 274.6 200 286V488zM176 48C122.1 48 80 90.98 80 144C80 197 122.1 240 176 240C229 240 272 197 272 144C272 90.98 229 48 176 48z"
                                  />
                                </svg>
                                <span className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  111 S Jackson St, Seattle, Washington 98104,
                                  US
                                </span>
                              </div>
                              <a
                                className="flex items-center py-8"
                                href="mailto:support@talosix.com"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="envelope"
                                  className="svg-inline--fa fa-envelope fa-1x mr-2 primary200"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                                  />
                                </svg>
                                <span className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  support@talosix.com
                                </span>
                              </a>
                              <a
                                className="flex items-center"
                                href="tel:4159004227"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="phone"
                                  className="svg-inline--fa fa-phone fa-1x mr-2 primary200"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M480.3 320.3L382.1 278.2c-21.41-9.281-46.64-3.109-61.2 14.95l-27.44 33.5c-44.78-25.75-82.29-63.25-108-107.1l33.55-27.48c17.91-14.62 24.09-39.7 15.02-61.05L191.7 31.53c-10.16-23.2-35.34-35.86-59.87-30.19l-91.25 21.06C16.7 27.86 0 48.83 0 73.39c0 241.9 196.7 438.6 438.6 438.6c24.56 0 45.53-16.69 50.1-40.53l21.06-91.34C516.4 355.5 503.6 330.3 480.3 320.3zM463.9 369.3l-21.09 91.41c-.4687 1.1-2.109 3.281-4.219 3.281c-215.4 0-390.6-175.2-390.6-390.6c0-2.094 1.297-3.734 3.344-4.203l91.34-21.08c.3125-.0781 .6406-.1094 .9531-.1094c1.734 0 3.359 1.047 4.047 2.609l42.14 98.33c.75 1.766 .25 3.828-1.25 5.062L139.8 193.1c-8.625 7.062-11.25 19.14-6.344 29.14c33.01 67.23 88.26 122.5 155.5 155.5c9.1 4.906 22.09 2.281 29.16-6.344l40.01-48.87c1.109-1.406 3.187-1.938 4.922-1.125l98.26 42.09C463.2 365.2 464.3 367.3 463.9 369.3z"
                                  />
                                </svg>
                                <span className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  (415) 900-4227
                                </span>
                              </a>
                            </address>
                          </div>
                          <div className="grid grid-cols-1 gap-4 my-4 py-8">
                            <a href="/about-us">
                              <span className="white styles_Text-p-tiny__3REA2 fw5 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                About Us
                              </span>
                            </a>
                            <a
                              rel="nofollow"
                              href="https://trypower.notion.site/Careers-at-Power-f885aa53d8d14a288dd154f13b644e4a"
                            >
                              <span className="white styles_Text-p-tiny__3REA2 fw5 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                Join The Team!
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="grid grid-cols-1 md:grid-cols-5 gap-4"
                        id="links"
                      >
                        <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-0">
                          <span className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Conditions
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <a href="/clinical-trials/tinnitus">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Tinnitus
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/adhd">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  ADHD
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/retinitis-pigmentosa">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Retinitis Pigmentosa
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/autism">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Autism
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/osteoarthritis">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Osteoarthritis
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/spinal-cord-injury">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Spinal Cord Injury
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/vitiligo">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Vitiligo
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/ocd">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  OCD
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/lyme-disease">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Lyme Disease
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/hpv">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  HPV
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Locations
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <a href="/clinical-trials/florida">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Florida
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/new-jersey">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New Jersey
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/north-carolina">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  North Carolina
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/texas">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Texas
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/ohio">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Ohio
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/california">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  California
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/pennsylvania">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Pennsylvania
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/kentucky">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Kentucky
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/new-york">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/indiana">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Indiana
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Cancer Related
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <a href="/clinical-trials/glioblastoma">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Glioblastoma
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/pancreatic-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Pancreatic Cancer
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/ovarian-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Ovarian Cancer
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/prostate-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Prostate Cancer
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/lung-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Lung Cancer
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/melanoma">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Melanoma
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/leiomyosarcoma">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Leiomyosarcoma
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/colon-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Colon Cancer
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/multiple-myeloma">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Multiple Myeloma
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/breast-cancer">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Breast Cancer
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Treatments
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <a href="/clinical-trials/psilocybin">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Psilocybin
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/ivf">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  IVF
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/dental-implant">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dental Implant
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/weight-loss">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Weight Loss
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/smoking">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Smoking
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/prp">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Platelet-Rich Plasma
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/testosterone">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Testosterone
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/saxenda">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Saxenda
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/melatonin">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Melatonin
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/entresto">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Entresto
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Cities
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <a href="/clinical-trials/houston-tx-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Houston, TX
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/new-york-city-ny-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York City, NY
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/boston-ma-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Boston, MA
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/san-francisco-ca-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Francisco, CA
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/dallas-tx-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dallas, TX
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/san-antonio-tx-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Antonio, TX
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/baltimore-md-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Baltimore, MD
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/greensboro-nc-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Greensboro, NC
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/las-vegas-nv-paid-studies">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Las Vegas, NV
                                </span>
                              </a>
                            </div>
                            <div>
                              <a href="/clinical-trials/atlanta-ga">
                                <span className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Atlanta, GA
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex" id="termsOfService">
                      <a href="/terms-of-service">
                        <span className="white styles_Text-p-tiny__3REA2 mr-8 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Terms of Service
                        </span>
                      </a>
                      <a href="/privacy-policy">
                        <span className="white styles_Text-p-tiny__3REA2 mr-8 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Privacy Policy
                        </span>
                      </a>
                      <a href="/security">
                        <span className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Security
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
