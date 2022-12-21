import Link from "next/link";

export default function Search() {
  return (
      <div className="min-h-[80vh]">
        <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-0">
              <div className="h-[92px]"/>
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
                                  style={{width: "150px"}}
                                  src="https://study.talosix.com/images/talosix-logo.png"
                              />
                            </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="flex items-center py-2">
                        <div
                            className="rounded-full bg-white/[0.24] border-neutral100 cursor-pointer flex justify-center items-center border-2">
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
                    <div
                        className="z-10 bg-white pb-16 md:pb-0 flex flex-col md:block overflow-y-auto absolute left-0 w-screen transition-all duration-300 md:overflow-hidden h-full md:h-auto opacity-0 md:opacity-100 md:max-h-0 hidden">
                      <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
                        <div className="lg:hidden flex justify-center my-3">
                          <div className="styles_shelf__AuCxB justify-between mr-3 lg:mr-8">
                            <div className="mr-12">
                              <Link href="/about-us">
                              <span
                                  className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                                About Us
                              </span>
                              </Link>
                            </div>
                            <div className="mr-12">
                              <Link href="/for-sponsors">
                              <span
                                  className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                                For Sponsors
                              </span>
                              </Link>
                            </div>
                            <Link href="/for-research-coordinators">
                            <span
                                className="black styles_Text-p__oN__e lg:text-base text-xs styles_block__vwpC6 break-words">
                              For Researchers
                            </span>
                            </Link>
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
                                <Link href="/clinical-trials/tinnitus">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Tinnitus
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/adhd">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  ADHD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/retinitis-pigmentosa">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Retinitis Pigmentosa
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/autism">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Autism
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/osteoarthritis">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Osteoarthritis
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/spinal-cord-injury">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Spinal Cord Injury
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/vitiligo">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Vitiligo
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ocd">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  OCD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/lyme-disease">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Lyme Disease
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/hpv">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  HPV
                                </span>
                                </Link>
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
                                <Link href="/clinical-trials/psilocybin">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Psilocybin
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ivf">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  IVF
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/dental-implant">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dental Implant
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/weight-loss">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Weight Loss
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/smoking">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Smoking
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/prp">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Platelet-Rich Plasma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/testosterone">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Testosterone
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/saxenda">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Saxenda
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/melatonin">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Melatonin
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/entresto">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Entresto
                                </span>
                                </Link>
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
                                <Link href="/clinical-trials/houston-tx-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Houston, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-york-city-ny-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York City, NY
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/boston-ma-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Boston, MA
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/san-francisco-ca-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Francisco, CA
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/dallas-tx-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dallas, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/san-antonio-tx-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Antonio, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/baltimore-md-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Baltimore, MD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/greensboro-nc-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Greensboro, NC
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/las-vegas-nv-paid-studies">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Las Vegas, NV
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/atlanta-ga">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Atlanta, GA
                                </span>
                                </Link>
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
                                <Link href="/clinical-trials/florida">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Florida
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-jersey">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New Jersey
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/north-carolina">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  North Carolina
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/texas">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Texas
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ohio">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Ohio
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/california">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  California
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/pennsylvania">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Pennsylvania
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/kentucky">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Kentucky
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-york">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/indiana">
                                <span
                                    className="black styles_Text-p__oN__e text-xs lg:text-base my-1 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Indiana
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <section className="sticky top-0 z-filterBar bg-white">
                  <div className="py-4 w-full mx-auto z-filterBar ">
                    <div className="hidden md:block">
                      <div
                          className="max-w-5xl mx-auto bg-white border-2 border-neutral50 rounded-full p-4 flex flex-row items-center shadow-xl shadow-baby600/50 hover:shadow-baby700/50 transition-shadow ease-in-out">
                        <div className="w-10/12 md:w-3/12 h-14 px-4 border-r-0 md:border-r-2 border-neutral100">
                          <div className="grid grid-cols-1 gap-0">
                            <label
                                className="pb-2 text-sm font-normal leading-[140%]"
                                htmlFor="search-bar-condition-input"
                            >
                              Condition
                            </label>
                            <div className="static">
                              <input
                                  className="leading-[180%] focus:outline-none text-ellipsis text-lg w-full placeholder:neutral500 font-semibold"
                                  placeholder="COVID-19"
                                  type="text"
                                  defaultValue="COVID-19"
                              />
                              <ul
                                  className="absolute bg-white w-72 md:w-96 rounded-2xl border-2 border-neutral200 my-4 mx-auto py-2 z-modalSearchPanel"
                                  hidden
                              >
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">COVID-19</div>
                                </li>
                                <li className="bg-neutral50 hover:bg-neutral100 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">COVID-19</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    174
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Pathologic Processes
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Nervous System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Immune System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Respiratory Tract Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Mental Disorders</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Digestive System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    983
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Cardiovascular Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    964
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Lung Diseases</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    865
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Skin Diseases</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    859
                                  </div>
                                </li>
                              </ul>
                              <div
                                  className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                  hidden
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-3/12 h-14 px-4 border-r-2 border-neutral100 hidden md:block">
                          <div className="grid grid-cols-1 gap-0">
                            <label
                                className="pb-2 text-sm font-normal leading-[140%]"
                                htmlFor="search-bar-location-input"
                            >
                              Location
                            </label>
                            <div className="relative">
                              <div className="flex flex-row items-start justify-start">
                                <div className="w-6 pt-1">
                                  <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="location-crosshairs"
                                      className="svg-inline--fa fa-location-crosshairs fa-1x pr-2"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                  >
                                    <path
                                        fill="currentColor"
                                        d="M352 256C352 309 309 352 256 352C202.1 352 160 309 160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256zM256 208C229.5 208 208 229.5 208 256C208 282.5 229.5 304 256 304C282.5 304 304 282.5 304 256C304 229.5 282.5 208 256 208zM256 0C269.3 0 280 10.75 280 24V65.49C366.8 76.32 435.7 145.2 446.5 232H488C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H446.5C435.7 366.8 366.8 435.7 280 446.5V488C280 501.3 269.3 512 256 512C242.7 512 232 501.3 232 488V446.5C145.2 435.7 76.32 366.8 65.49 280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H65.49C76.32 145.2 145.2 76.32 232 65.49V24C232 10.75 242.7 0 256 0V0zM112 256C112 335.5 176.5 400 256 400C335.5 400 400 335.5 400 256C400 176.5 335.5 112 256 112C176.5 112 112 176.5 112 256z"
                                    />
                                  </svg>
                                </div>
                                <div className="w-9/10">
                                  <div className="static">
                                    <input
                                        className="leading-[180%] focus:outline-none text-ellipsis text-lg w-full font-semibold"
                                        placeholder="Nearest City"
                                        type="text"
                                    />
                                    <ul
                                        className="absolute bg-white w-96 rounded-2xl border-2 border-neutral200 my-4 mx-auto py-2 z-modalSearchPanel"
                                        hidden
                                    />
                                    <div
                                        className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                        hidden
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-2/12 h-14 px-4 border-r-2 border-neutral100 hidden md:block">
                          <div className="grid grid-cols-1 gap-0">
                            <label
                                className="pb-2 text-sm font-normal leading-[140%]"
                                htmlFor="search-bar-distance-input"
                            >
                              Distance
                            </label>
                            <div className="flex items-center">
                              <input
                                  className="leading-[180%] focus:outline-none text-lg w-full placeholder:text-black font-semibold"
                                  id="search-bar-distance-input"
                                  placeholder="50 Miles"
                                  type="text"
                                  defaultValue="Any"
                              />
                              <div className="cursor-pointer">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="chevron-down"
                                    className="svg-inline--fa fa-chevron-down fa-1x "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                  <path
                                      fill="currentColor"
                                      d="M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div
                                className="relative bg-white w-[190px] rounded-2xl border-2 border-neutral200 my-2 mx-auto py-2 z-modalSearchPanel ml-[-18px]"
                                hidden
                            >
                              <div className="w-full mt-3 mx-auto px-4 flex flex-col">
                                <div
                                    className="w-full h-1 bg-primary700"
                                    style={{
                                      transform: "scale(1)",
                                      cursor: "pointer",
                                    }}
                                >
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "0px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "13px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "25px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "38px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "50px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "63px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "75px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "88px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      style={{
                                        position: "absolute",
                                        left: "100px",
                                        marginTop: "2px",
                                      }}
                                  />
                                  <div
                                      tabIndex={0}
                                      aria-valuemax={90}
                                      aria-valuemin={10}
                                      aria-valuenow={90}
                                      draggable="false"
                                      role="slider"
                                      className="rounded-2xl bg-white border-primary700 border-2 w-5 h-5"
                                      style={{
                                        position: "absolute",
                                        zIndex: 0,
                                        cursor: "grab",
                                        userSelect: "none",
                                        touchAction: "none",
                                        transform: "translate(0px, 0px)",
                                      }}
                                  />
                                </div>
                                <div className="w-full grid grid-cols-3 mt-4 text-center">
                                <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                  10 Miles
                                </span>
                                  <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                  50 Miles
                                </span>
                                  <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                  Any
                                </span>
                                </div>
                              </div>
                            </div>
                            <div
                                className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                hidden
                            />
                          </div>
                        </div>
                        <div className="w-2/12 h-14 px-4 hidden md:block">
                          <div className="grid grid-cols-1 gap-0">
                            <label
                                className="pb-2 text-sm font-normal leading-[140%]"
                                htmlFor="search-bar-age-input"
                            >
                              Age
                            </label>
                            <div className="styles_no-input-arrows__D4SNG">
                              <input
                                  className="leading-[180%] focus:outline-none text-lg w-full placeholder:neutral500 font-semibold"
                                  placeholder="Type Age..."
                                  type="number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-2/12 h-14 pl-0 md:pl-4 pr-0 text-right">
                          <Link href="/clinical-trials/search">
                            <button
                                aria-label="Search"
                                className="h-14 bg-warm500 rounded-full rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                tabIndex={0}
                                type="button"
                            >
                            <span
                                className="black styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                id="undefined-text"
                            >
                              <div className="flex flex-row items-center">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="magnifying-glass"
                                    className="svg-inline--fa fa-magnifying-glass fa-1x pr-0 md:pr-2 block md:hidden lg:block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                  <path
                                      fill="currentColor"
                                      d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"
                                  />
                                </svg>
                                <span className="hidden md:block text-lg">
                                  Search
                                </span>
                              </div>
                            </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="md:flex md:flex-wrap gap-4 mt-10 items-end justify-between hidden">
                        <div className="flex-none">
                          <div className="inline-block">
                            <div className="flex items-center justify-between">
                            <span className="neutral500 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                              Effectiveness Progress
                            </span>
                              <span tabIndex={0}>
                              <span
                                  className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x primary500 text-lg"
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
                            <div
                                aria-label="Selected "
                                className="flex items-center"
                            >
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={1}
                              >
                                1
                              </button>
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={2}
                              >
                                2
                              </button>
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={3}
                              >
                                3
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex-none">
                          <div className="inline-block">
                            <div className="flex items-center justify-between">
                            <span className="neutral500 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                              Safety Progress
                            </span>
                              <span tabIndex={0}>
                              <span
                                  className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="circle-info"
                                    className="svg-inline--fa fa-circle-info fa-1x primary500 text-lg"
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
                            <div
                                aria-label="Selected "
                                className="flex items-center"
                            >
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={1}
                              >
                                1
                              </button>
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={2}
                              >
                                2
                              </button>
                              <button
                                  className="cursor-pointer mt-2 mb-0 text-base styles_button-bar__H3I7V"
                                  tabIndex={0}
                                  value={3}
                              >
                                3
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex-none">
                          <div
                              aria-checked="false"
                              className="inline-block cursor-pointer"
                              role="switch"
                          >
                            <div className="flex justify-between">
                              <label
                                  className="neutral500 styles_Text-h6__MGoxo mr-2 pb-[0.8rem] hover:cursor-pointer styles_block__vwpC6 break-words">
                                No Placebo
                              </label>
                            </div>
                            <div className="flex justify-left hover:cursor-pointer">
                              <div className="flex">
                                <div className="relative inline-block cursor-pointer">
                                  <input
                                      className="absolute left-1/3 -translate-x-1/2 w-full h-full peer appearance-none rounded-md hover:cursor-pointer"
                                      type="checkbox"
                                  />
                                  <span
                                      className="w-20 h-8 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out hover:cursor-pointer after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-12 group-hover:after:translate-x-1 bg-neutral500"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-none">
                          <button
                              aria-label="Trial Details"
                              className="h-12 bg-neutral100 rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                              tabIndex={0}
                              type="button"
                          >
                          <span
                              className="black styles_Text-button__u2R08 no-underline justify-center flex break-words"
                              id="undefined-text"
                          >
                            Trial Details
                          </span>
                          </button>
                          <div
                              className="fixed w-screen inset-0 overflow-hidden z-modal bg-neutral400/75"
                              hidden
                          >
                            <div
                                aria-label="Trial Details"
                                aria-modal="true"
                                className="flex flex-col border rounded-2xl h-auto max-h-[90vh] border-neutral100 relative mx-auto my-[8%] md:my-[5%] lg:my-[2%] bg-white overscroll-none overflow-hidden max-w-4xl w-full md:w-3/5"
                                data-testid="modal-content"
                                hidden
                                role="dialog"
                                tabIndex={0}
                            >
                              <section>
                                <div className="flex flex-row items-center px-4 py-4 min-h-[48px]">
                                  <div
                                      aria-label="Close"
                                      className="hover:cursor-pointer absolute left-6 top-6"
                                      data-testid="modal-close"
                                      tabIndex={0}
                                  >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="xmark"
                                        className="svg-inline--fa fa-xmark fa-1x dark"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                      />
                                    </svg>
                                  </div>
                                  <div className="text-center w-full -ml-4">
                                  <span className="dark styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                    Trial Details
                                  </span>
                                  </div>
                                </div>
                              </section>
                              <section className="relative overflow-auto">
                                <div
                                    className="border-x-0 border-lightGrey500 border-solid rounded-none px-4 pb-12 overflow-auto border-b border-t">
                                  <div className="grid grid-cols-1 divide-y-2 divide-neutral100 mx-8 gap-y-8">
                                    <div className="grid grid-cols-1">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Trial Phase
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-6">
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Phase 1"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Phase 1
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials have a treatment
                                            showing promising results in animals
                                            and are now beginning to test with
                                            people.
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Phase 2"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Phase 2
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials have a treatment that
                                            is safe for people. The trials are
                                            now testing how effective it is for
                                            treating the condition.
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Phase 3"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Phase 3
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials have a treatment that
                                            is safe for people and shows early
                                            promising results for treating the
                                            condition. The trials are now
                                            testing whether it outperforms the
                                            best existing treatment for this
                                            condition.
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Phase 4"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Phase 4
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials have a treatment the US
                                            Government has approved as a safe,
                                            effective drug which doctors can
                                            prescribe. The trials are now
                                            watching to see if there are any
                                            long term side effects.
                                          </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="py-6">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Trial Status
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-6">
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Recruiting"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Recruiting
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials are actively enrolling
                                            patients.
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Waitlist"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Waitlist
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            These trials have a waitlist to
                                            enroll.
                                          </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="py-6">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Treatment Administration
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-6">
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Behavioral Therapy"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Behavioral Therapy
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            The treatment for this trial is
                                            administered as behavioral therapies
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Medical Device"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Medical Device
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            The treatment for this trial is a
                                            medical device.
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Dietary Supplement"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Dietary Supplement
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            The treatment for this trial is
                                            administered via a dietary
                                            supplement
                                          </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <div className="relative inline-block pt-1 cursor-pointer">
                                            <div
                                                aria-checked="false"
                                                aria-label="Drug"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="black styles_Text-p-tiny-strong__OmHuk pb-2 styles_block__vwpC6 cursor-pointer break-words">
                                            Drug
                                          </span>
                                            <span
                                                className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            The treatment for this trial is
                                            administered as a drug
                                          </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section>
                                <div
                                    className="flex flex-row items-center justify-between py-4 border-t-2 border-t-neutral100">
                                  <div className="pl-4"/>
                                  <div className="pr-4">
                                    <button
                                        className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                        tabIndex={0}
                                        type="button"
                                    >
                                    <span
                                        className="white styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                        id="undefined-text"
                                    >
                                      View 174 Trials
                                    </span>
                                    </button>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="flex-none">
                          <button
                              aria-label="Patient Details"
                              className="h-12 bg-neutral100 rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                              tabIndex={0}
                              type="button"
                          >
                          <span
                              className="black styles_Text-button__u2R08 no-underline justify-center flex break-words"
                              id="undefined-text"
                          >
                            Patient Details
                          </span>
                          </button>
                          <div
                              className="fixed w-screen inset-0 overflow-hidden z-modal bg-neutral400/75"
                              hidden
                          >
                            <div
                                aria-label="More filters"
                                aria-modal="true"
                                className="flex flex-col border rounded-2xl h-auto max-h-[90vh] border-neutral100 relative mx-auto my-[8%] md:my-[5%] lg:my-[2%] bg-white overscroll-none overflow-hidden max-w-4xl w-full md:w-3/5"
                                data-testid="modal-content"
                                hidden
                                role="dialog"
                                tabIndex={0}
                            >
                              <section>
                                <div className="flex flex-row items-center px-4 py-4 min-h-[48px]">
                                  <div
                                      aria-label="Close"
                                      className="hover:cursor-pointer absolute left-6 top-6"
                                      data-testid="modal-close"
                                      tabIndex={0}
                                  >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="xmark"
                                        className="svg-inline--fa fa-xmark fa-1x dark"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                      />
                                    </svg>
                                  </div>
                                  <div className="text-center w-full -ml-4">
                                  <span className="dark styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                    More filters
                                  </span>
                                  </div>
                                </div>
                              </section>
                              <section className="relative overflow-auto">
                                <div
                                    className="border-x-0 border-lightGrey500 border-solid rounded-none px-4 pb-12 overflow-auto border-b border-t">
                                  <div className="grid grid-cols-1 divide-y-2 divide-neutral100 mx-8 gap-y-8">
                                    <div className="grid grid-cols-1">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Patient Details
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-6 items-center">
                                      <span
                                          className="neutral900 styles_Text-p-small___zIZy pb-2 styles_block__vwpC6 break-words">
                                        What stage is the condition?
                                      </span>
                                        <div
                                            className="flex p-1 bg-white rounded-lg bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300">
                                          <div className="w-full pr-1 pl-2">
                                            <div className="flex items-center">
                                              <div
                                                  className="styles_selectBox__RcjOM w-full pr-px css-b62m3t-container">
                                              <span
                                                  id="react-select-stagesOfDisease-algolia-multi-select-dropdown-live-region"
                                                  className="css-7pg0cj-a11yText"
                                              />
                                                <span
                                                    aria-live="polite"
                                                    aria-atomic="false"
                                                    aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"
                                                />
                                                <div className=" css-1gxfbx6-control">
                                                  <div className=" css-hlgwow">
                                                    <div
                                                        className=" css-1jqq78o-placeholder"
                                                        id="react-select-stagesOfDisease-algolia-multi-select-dropdown-placeholder"
                                                    >
                                                    <span
                                                        className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                                      Select
                                                    </span>
                                                    </div>
                                                    <div
                                                        className=" css-1gp2gtk"
                                                        data-value
                                                    >
                                                      <input
                                                          autoCapitalize="none"
                                                          autoComplete="off"
                                                          autoCorrect="off"
                                                          id="react-select-stagesOfDisease-algolia-multi-select-dropdown-input"
                                                          spellCheck="false"
                                                          tabIndex={0}
                                                          type="text"
                                                          aria-autocomplete="list"
                                                          aria-expanded="false"
                                                          aria-haspopup="true"
                                                          role="combobox"
                                                          aria-describedby="react-select-stagesOfDisease-algolia-multi-select-dropdown-placeholder"
                                                          style={{
                                                            color: "inherit",
                                                            background:
                                                                "0px center",
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea:
                                                                "1 / 2 / auto / auto",
                                                            font: "inherit",
                                                            minWidth: "2px",
                                                            border: "0px",
                                                            margin: "0px",
                                                            outline: "0px",
                                                            padding: "0px",
                                                          }}
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className=" css-1wy0on6">
                                                    <div
                                                        className=" css-1xc3v61-indicatorContainer"
                                                        aria-hidden="true"
                                                    >
                                                      <svg
                                                          height={20}
                                                          width={20}
                                                          viewBox="0 0 20 20"
                                                          aria-hidden="true"
                                                          focusable="false"
                                                          className="css-8mmkcg"
                                                      >
                                                        <path
                                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <span
                                            className="neutral900 styles_Text-p-small___zIZy pb-2 styles_block__vwpC6 break-words">
                                        How many previous treatments received?
                                      </span>
                                        <div
                                            className="flex p-1 bg-white rounded-lg bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300">
                                          <div className="w-full pr-1 pl-2">
                                            <div className="flex items-center">
                                              <div
                                                  className="styles_selectBox__RcjOM w-full pr-px css-b62m3t-container">
                                              <span
                                                  id="react-select-stageOfTreatment-algolia-multi-select-dropdown-live-region"
                                                  className="css-7pg0cj-a11yText"
                                              />
                                                <span
                                                    aria-live="polite"
                                                    aria-atomic="false"
                                                    aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"
                                                />
                                                <div className=" css-1gxfbx6-control">
                                                  <div className=" css-hlgwow">
                                                    <div
                                                        className=" css-1jqq78o-placeholder"
                                                        id="react-select-stageOfTreatment-algolia-multi-select-dropdown-placeholder"
                                                    >
                                                    <span
                                                        className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                                      Select
                                                    </span>
                                                    </div>
                                                    <div
                                                        className=" css-1gp2gtk"
                                                        data-value
                                                    >
                                                      <input
                                                          autoCapitalize="none"
                                                          autoComplete="off"
                                                          autoCorrect="off"
                                                          id="react-select-stageOfTreatment-algolia-multi-select-dropdown-input"
                                                          spellCheck="false"
                                                          tabIndex={0}
                                                          type="text"
                                                          aria-autocomplete="list"
                                                          aria-expanded="false"
                                                          aria-haspopup="true"
                                                          role="combobox"
                                                          aria-describedby="react-select-stageOfTreatment-algolia-multi-select-dropdown-placeholder"
                                                          style={{
                                                            color: "inherit",
                                                            background:
                                                                "0px center",
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea:
                                                                "1 / 2 / auto / auto",
                                                            font: "inherit",
                                                            minWidth: "2px",
                                                            border: "0px",
                                                            margin: "0px",
                                                            outline: "0px",
                                                            padding: "0px",
                                                          }}
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className=" css-1wy0on6">
                                                    <div
                                                        className=" css-1xc3v61-indicatorContainer"
                                                        aria-hidden="true"
                                                    >
                                                      <svg
                                                          height={20}
                                                          width={20}
                                                          viewBox="0 0 20 20"
                                                          aria-hidden="true"
                                                          focusable="false"
                                                          className="css-8mmkcg"
                                                      >
                                                        <path
                                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Patient Mobility (ECOG score)
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-6 items-center">
                                        <div
                                            className="flex p-1 bg-white rounded-lg bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300">
                                          <div className="w-full pr-1 pl-2">
                                            <div className="flex items-center">
                                              <div
                                                  className="styles_selectBox__RcjOM w-full pr-px css-b62m3t-container">
                                              <span
                                                  id="react-select-ecogScore-algolia-multi-select-dropdown-live-region"
                                                  className="css-7pg0cj-a11yText"
                                              />
                                                <span
                                                    aria-live="polite"
                                                    aria-atomic="false"
                                                    aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"
                                                />
                                                <div className=" css-1gxfbx6-control">
                                                  <div className=" css-hlgwow">
                                                    <div
                                                        className=" css-1jqq78o-placeholder"
                                                        id="react-select-ecogScore-algolia-multi-select-dropdown-placeholder"
                                                    >
                                                    <span
                                                        className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                                                      Select
                                                    </span>
                                                    </div>
                                                    <div
                                                        className=" css-1gp2gtk"
                                                        data-value
                                                    >
                                                      <input
                                                          autoCapitalize="none"
                                                          autoComplete="off"
                                                          autoCorrect="off"
                                                          id="react-select-ecogScore-algolia-multi-select-dropdown-input"
                                                          spellCheck="false"
                                                          tabIndex={0}
                                                          type="text"
                                                          aria-autocomplete="list"
                                                          aria-expanded="false"
                                                          aria-haspopup="true"
                                                          role="combobox"
                                                          aria-describedby="react-select-ecogScore-algolia-multi-select-dropdown-placeholder"
                                                          style={{
                                                            color: "inherit",
                                                            background:
                                                                "0px center",
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea:
                                                                "1 / 2 / auto / auto",
                                                            font: "inherit",
                                                            minWidth: "2px",
                                                            border: "0px",
                                                            margin: "0px",
                                                            outline: "0px",
                                                            padding: "0px",
                                                          }}
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className=" css-1wy0on6">
                                                    <div
                                                        className=" css-1xc3v61-indicatorContainer"
                                                        aria-hidden="true"
                                                    >
                                                      <svg
                                                          height={20}
                                                          width={20}
                                                          viewBox="0 0 20 20"
                                                          aria-hidden="true"
                                                          focusable="false"
                                                          className="css-8mmkcg"
                                                      >
                                                        <path
                                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                      <div className="my-2">
                                      <span
                                          className="neutral900 styles_Text-p-strong__3Pn_k pb-2 styles_block__vwpC6 break-words">
                                        Genetic Markers
                                      </span>
                                      </div>
                                      <div className="grid grid-cols-3 gap-4 items-center">
                                        <div className="flex items-center">
                                          <div className="relative inline-block pt-1 cursor-pointer pt-0">
                                            <div
                                                aria-checked="false"
                                                className="rounded h-6 w-6 border-[1px] border-primary500"
                                                role="checkbox"
                                            />
                                          </div>
                                          <div className="ml-4 grow">
                                          <span
                                              className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 cursor-pointer break-words">
                                            <div className="w-full flex items-center justify-between">
                                              <div className="m-0 p-2">
                                                ALK-positive
                                              </div>
                                              <div
                                                  className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                                &lt;100
                                              </div>
                                            </div>
                                          </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section>
                                <div
                                    className="flex flex-row items-center justify-between py-4 border-t-2 border-t-neutral100">
                                  <div className="pl-4"/>
                                  <div className="pr-4">
                                    <button
                                        className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                        tabIndex={0}
                                        type="button"
                                    >
                                    <span
                                        className="white styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                        id="undefined-text"
                                    >
                                      View 174 Trials
                                    </span>
                                    </button>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="inline-block grow">
                          <input
                              autoComplete="off"
                              className="rounded-full py-0 w-full h-16 bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300 px-6 placeholder:border-neutral200 h-12"
                              placeholder="Filter results"
                              type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="block md:hidden">
                      <div
                          className="max-w-5xl mx-auto bg-white border-2 border-neutral50 rounded-full p-4 flex flex-row items-center shadow-xl shadow-baby600/50 hover:shadow-baby700/50 transition-shadow ease-in-out">
                        <div className="w-10/12 md:w-3/12 h-14 px-4 border-r-0 md:border-r-2 border-neutral100">
                          <div className="grid grid-cols-1 gap-0">
                            <label
                                className="pb-2 text-sm font-normal leading-[140%]"
                                htmlFor="search-bar-condition-input"
                            >
                              Condition
                            </label>
                            <div className="static">
                              <input
                                  className="leading-[180%] focus:outline-none text-ellipsis text-lg w-full placeholder:neutral500 font-semibold"
                                  placeholder="COVID-19"
                                  type="text"
                                  defaultValue="COVID-19"
                              />
                              <ul
                                  className="absolute bg-white w-72 md:w-96 rounded-2xl border-2 border-neutral200 my-4 mx-auto py-2 z-modalSearchPanel"
                                  hidden
                              >
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">COVID-19</div>
                                </li>
                                <li className="bg-neutral50 hover:bg-neutral100 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">COVID-19</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    174
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Pathologic Processes
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Nervous System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Immune System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Respiratory Tract Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Mental Disorders</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    1000+
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Digestive System Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    983
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">
                                    Cardiovascular Diseases
                                  </div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    964
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Lung Diseases</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    865
                                  </div>
                                </li>
                                <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                  <div className="m-0 p-2">Skin Diseases</div>
                                  <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                    859
                                  </div>
                                </li>
                              </ul>
                              <div
                                  className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                  hidden
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-2/12 h-14 pl-0 md:pl-4 pr-0 text-right">
                          <button
                              className="h-14 bg-mediumGrey500 rounded-full rounded-full w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
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
                                data-icon="sliders"
                                className="svg-inline--fa fa-sliders fa-1x pr-0 block"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                              <path
                                  fill="currentColor"
                                  d="M0 416C0 402.7 10.75 392 24 392H83.66C93.86 359.5 124.2 336 160 336C195.8 336 226.1 359.5 236.3 392H488C501.3 392 512 402.7 512 416C512 429.3 501.3 440 488 440H236.3C226.1 472.5 195.8 496 160 496C124.2 496 93.86 472.5 83.66 440H24C10.75 440 0 429.3 0 416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C387.8 176 418.1 199.5 428.3 232H488C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H428.3C418.1 312.5 387.8 336 352 336C316.2 336 285.9 312.5 275.7 280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H275.7C285.9 199.5 316.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM488 72C501.3 72 512 82.75 512 96C512 109.3 501.3 120 488 120H268.3C258.1 152.5 227.8 176 192 176C156.2 176 125.9 152.5 115.7 120H24C10.75 120 0 109.3 0 96C0 82.75 10.75 72 24 72H115.7C125.9 39.54 156.2 16 192 16C227.8 16 258.1 39.54 268.3 72H488zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"
                              />
                            </svg>
                          </span>
                          </button>
                        </div>
                      </div>
                      <div
                          className="fixed w-screen inset-0 overflow-hidden z-modal bg-neutral400/75"
                          hidden
                      >
                        <div
                            aria-label="Filter Results"
                            aria-modal="true"
                            className="flex flex-col border rounded-2xl h-auto max-h-[90vh] border-neutral100 relative mx-auto my-[8%] md:my-[5%] lg:my-[2%] bg-white overscroll-none overflow-hidden max-w-4xl w-full md:w-3/5 overflow-visible"
                            data-testid="modal-content"
                            hidden
                            role="dialog"
                            tabIndex={0}
                        >
                          <section>
                            <div className="flex flex-row items-center px-4 py-4 min-h-[48px]">
                              <div
                                  aria-label="Close"
                                  className="hover:cursor-pointer absolute left-6 top-6"
                                  data-testid="modal-close"
                                  tabIndex={0}
                              >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="xmark"
                                    className="svg-inline--fa fa-xmark fa-1x dark"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                  <path
                                      fill="currentColor"
                                      d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                  />
                                </svg>
                              </div>
                              <div className="text-center w-full -ml-4">
                              <span className="dark styles_Text-p-strong__3Pn_k styles_block__vwpC6 break-words">
                                Filter Results
                              </span>
                              </div>
                            </div>
                          </section>
                          <section className="relative overflow-auto">
                            <div
                                className="border-x-0 border-lightGrey500 border-solid rounded-none px-4 pb-12 overflow-auto border-b-0 border-t">
                              <div className="mb-4">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Condition
                              </span>
                                <div className="p-4 mb-4 border-neutral100 border-2 w-full rounded-full">
                                  <div className="static">
                                    <input
                                        className="leading-[180%] focus:outline-none text-ellipsis text-lg w-full placeholder:neutral500 font-semibold"
                                        placeholder="COVID-19"
                                        type="text"
                                        defaultValue="COVID-19"
                                    />
                                    <ul
                                        className="absolute bg-white w-72 md:w-96 rounded-2xl border-2 border-neutral200 my-4 mx-auto py-2 z-modalSearchPanel"
                                        hidden
                                    >
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">COVID-19</div>
                                      </li>
                                      <li className="bg-neutral50 hover:bg-neutral100 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">COVID-19</div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          174
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Pathologic Processes
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          1000+
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Nervous System Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          1000+
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Immune System Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          1000+
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Respiratory Tract Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          1000+
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Mental Disorders
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          1000+
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Digestive System Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          983
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Cardiovascular Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          964
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Lung Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          865
                                        </div>
                                      </li>
                                      <li className="bg-white hover:bg-neutral50 mx-2 my-0 px-2 py-0 rounded-2xl flex flex-row items-center justify-between hover:cursor-pointer">
                                        <div className="m-0 p-2">
                                          Skin Diseases
                                        </div>
                                        <div className="bg-neutral100 hover:bg-neutral200 m-2 px-2 py-2 rounded-2xl">
                                          859
                                        </div>
                                      </li>
                                    </ul>
                                    <div
                                        className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                        hidden
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                Where are you looking?
                              </span>
                                <div className="p-4 mb-4 border-neutral100 border-2 w-full rounded-full">
                                  <div className="relative">
                                    <div className="flex flex-row items-start justify-start">
                                      <div className="w-6 pt-1">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="location-crosshairs"
                                            className="svg-inline--fa fa-location-crosshairs fa-1x pr-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                          <path
                                              fill="currentColor"
                                              d="M352 256C352 309 309 352 256 352C202.1 352 160 309 160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256zM256 208C229.5 208 208 229.5 208 256C208 282.5 229.5 304 256 304C282.5 304 304 282.5 304 256C304 229.5 282.5 208 256 208zM256 0C269.3 0 280 10.75 280 24V65.49C366.8 76.32 435.7 145.2 446.5 232H488C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H446.5C435.7 366.8 366.8 435.7 280 446.5V488C280 501.3 269.3 512 256 512C242.7 512 232 501.3 232 488V446.5C145.2 435.7 76.32 366.8 65.49 280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H65.49C76.32 145.2 145.2 76.32 232 65.49V24C232 10.75 242.7 0 256 0V0zM112 256C112 335.5 176.5 400 256 400C335.5 400 400 335.5 400 256C400 176.5 335.5 112 256 112C176.5 112 112 176.5 112 256z"
                                          />
                                        </svg>
                                      </div>
                                      <div className="w-9/10">
                                        <div className="static">
                                          <input
                                              className="leading-[180%] focus:outline-none text-ellipsis text-lg w-full font-semibold"
                                              placeholder="Nearest City"
                                              type="text"
                                          />
                                          <ul
                                              className="absolute bg-white w-96 rounded-2xl border-2 border-neutral200 my-4 mx-auto py-2 z-modalSearchPanel"
                                              hidden
                                          />
                                          <div
                                              className="fixed w-screen h-screen top-0 left-0 inset-0 overflow-hidden z-modal"
                                              hidden
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                How far are you willing to travel?
                              </span>
                                <div>
                                  <div
                                      className="w-full h-1 bg-primary700"
                                      style={{
                                        transform: "scale(1)",
                                        cursor: "pointer",
                                      }}
                                  >
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "0px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "13px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "25px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "38px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "50px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "63px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "75px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "88px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        style={{
                                          position: "absolute",
                                          left: "100px",
                                          marginTop: "2px",
                                        }}
                                    />
                                    <div
                                        tabIndex={0}
                                        aria-valuemax={90}
                                        aria-valuemin={10}
                                        aria-valuenow={90}
                                        draggable="false"
                                        role="slider"
                                        className="rounded-2xl bg-white border-primary700 border-2 w-5 h-5"
                                        style={{
                                          position: "absolute",
                                          zIndex: 0,
                                          cursor: "grab",
                                          userSelect: "none",
                                          touchAction: "none",
                                          transform: "translate(0px, 0px)",
                                        }}
                                    />
                                  </div>
                                  <div className="w-full grid grid-cols-3 mt-4 text-center">
                                  <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                    10 Miles
                                  </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                    50 Miles
                                  </span>
                                    <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                    Any
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                              <span className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words">
                                How old are you?
                              </span>
                                <div className="p-4 mb-4 border-neutral100 border-2 w-full rounded-full">
                                  <div className="styles_no-input-arrows__D4SNG">
                                    <input
                                        className="leading-[180%] focus:outline-none text-lg w-full placeholder:neutral500 font-semibold"
                                        placeholder="Type Age..."
                                        type="number"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <button
                                    className="h-12 bg-black rounded-md styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                    tabIndex={0}
                                    type="button"
                                >
                                <span
                                    className="white styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                    id="undefined-text"
                                >
                                  View 174 Trials
                                </span>
                                </button>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                  <span className="neutral500 styles_Text-p__oN__e styles_block__vwpC6 break-words">
                    174 trials
                  </span>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-6-2021-a698e"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of East-West Medical Research Institute in Honolulu, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/7cf153c7-1c6e-45a2-3b22-e0895b09e100/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="BNT162b2 for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  BNT162b2
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div className="px-4 py-2 whitespace-nowrap bg-blue100 mr-1 lg:mr-2 rounded-lg blue800">
                                <span
                                    className="blue800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
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
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will assess the safety and efficacy
                                  of a booster dose of the BNT162b2 vaccine in
                                  adults who have received 2 doses of the
                                  vaccine at least 6 months prior. The trial
                                  will also assess the safety and tolerability
                                  of a single dose of the BNT162b2 vaccine in
                                  adolescents 12-17 years of age, as compared to
                                  a placebo control.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div className="px-4 py-2 whitespace-nowrap bg-blue100 mr-1 lg:mr-2 rounded-lg blue800">
                                <span
                                    className="blue800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
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
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-7-2020-b4e27"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Research Site in Honolulu, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/dff58e0e-ffbc-4d19-c189-4113e51c0d00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3 className="mb-4" title="AZD1222 for COVID-19">
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  AZD1222
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a vaccine to see if it
                                  is safe and effective at preventing COVID-19.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-2-2020-22593"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Island Health - Nanaimo Regional General Hospital in Victoria, Canada."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/805f23fe-80f4-4c59-7306-bfc37da8d400/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3 className="mb-4" title="ARBs for COVID-19">
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  ARBs
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    Victoria, Canada
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a new way to do clinical
                                  trials that is faster and cheaper.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-4-2021-8d332"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of BC Children's Hospital Research Institute in Vancouver, Canada."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/df4777a0-4d2f-4975-bb6e-7ff667d95000/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Group 4: Moderna, Pfizer/BioNTech - 112 days apart for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Group 4: Moderna, Pfizer/BioNTech - 112 Days
                                  Apart
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    Vancouver, Canada
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    18 - 99
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing two different vaccines
                                  for safety and efficacy.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-covid-19-9-2021-cad90"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Stollery Children's Hospital in Edmonton, Canada."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/ef9667c5-2539-407a-c568-f626f98d8e00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Standard of Care COVID-19 swab for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Standard Of Care COVID-19 Swab
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    Edmonton, Canada
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    &lt; 18
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will compare how well a swab from
                                  inside the cheek detects the coronavirus in
                                  kids, to the standard nose and throat swab.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-2-2021-25bc6"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of University of Alberta in Edmonton, Canada."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/49999aae-d5c8-41bd-8e96-dd336d4daa00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Ddrops® products, 50,000 IU, Oral for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Ddrops® Products, 50,000 IU, Oral
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    Edmonton, Canada
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will help determine if vitamin D
                                  supplementation could be an effective adjuvant
                                  therapeutic intervention for COVID-19.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-5-2021-211a8"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Investigative Site in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b9ac96cb-d568-4d41-ea92-da54c1461a00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="VIR-7831 sotrovimab for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  VIR-7831 Sotrovimab
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a new antibody drug to
                                  see if it is effective and safe for treating
                                  mild to moderate COVID-19 in non-hospitalized
                                  high-risk patients. There is also a safety
                                  substudy to assess the safety and tolerability
                                  of a single dose of the drug.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-2-and-3-covid-19-2-2021-8b2c4"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Seattle Children's Hospital in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/bcccfd6e-d0d1-4987-2d8a-c176bcb7ec00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Biological/Vaccine: BNT162b2 3mcg for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Biological/Vaccine: BNT162b2 3mcg
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    6 - 18
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2 &amp; 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a new vaccine in
                                  children and young adults to see if it is safe
                                  and effective. If it is, then they will test
                                  it in infants.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2 &amp; 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <div className="mb-4">
                          <div className="rounded-xl lg:p-16 px-2 py-6 bg-organicDawn-grainy">
                            <div className="px-4">
                            <span className="white styles_Text-blockquote-small__g8poV styles_block__vwpC6 break-words">
                              Get notified when new COVID-19 trials are posted
                            </span>
                              <span className="white styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              {`We'll send you an email whenever new trials are posted`}
                            </span>
                              <div className="flex flex-wrap items-center mt-4">
                                <div className="lg:w-1/2 w-full lg:mr-20 mb-2 lg:mb-0">
                                  <input
                                      autoComplete="email"
                                      className="rounded-full py-0 w-full h-16 bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300 px-6"
                                      placeholder="Enter your email"
                                      type="email"
                                  />
                                </div>
                                <div className="lg:w-1/3 w-full">
                                  <button
                                      aria-label="Turn On Alerts"
                                      className="h-12 bg-primary100 rounded-md w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      disabled
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span
                                      className="primary800 styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                      id="undefined-text"
                                  >
                                    Turn On Alerts
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link
                              rel="noreferrer"
                              href="/trial/phase-3-covid-19-3-2021-2cdde"
                          >
                            <div
                                className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                              <div
                                  className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                                <div className="w-full h-[227px] md:h-[168px]">
                                  <img
                                      alt="Image of University of Washington Medical Center in Seattle, United States."
                                      src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/a1c1bbb5-ddc3-4a50-79ea-ac53e0bdd400/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                      width={341}
                                      height={227}
                                      decoding="async"
                                      data-nimg={1}
                                      className="w-full h-[227px] md:h-[168px] object-cover"
                                      loading="lazy"
                                      style={{color: "transparent"}}
                                  />
                                </div>
                                <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                      <span
                                          className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                        Phase-Based Progress Estimates
                                      </span>
                                        <div className="mx-2">
                                        <span tabIndex={0}>
                                          <span
                                              className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                              <span
                                                  className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                              2
                                            </span>
                                            </div>
                                          </div>
                                          <span
                                              className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <span
                                                  className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                              3
                                            </span>
                                            </div>
                                          </div>
                                          <span
                                              className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                          Safety
                                        </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <h3
                                      className="mb-4"
                                      title="mRNA-1273 for COVID-19"
                                  >
                                  <span
                                      className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                    MRNA-1273
                                  </span>
                                    <span
                                        className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                    for COVID-19
                                  </span>
                                  </h3>
                                  <div className="w-full flex flex-row justify-between">
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                              <div
                                  className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                                <div className="lg:flex lg:mb-4 hidden">
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                  <span
                                      className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Phase 3
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                  <span
                                      className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Waitlist Available
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                  <span
                                      className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    FDA Approved Drug
                                  </span>
                                  </div>
                                </div>
                                <div className="mb-4 grow">
                                <span className="ais-Highlight">
                                  <span className="ais-Highlight-nonHighlighted">
                                    This trial is testing a vaccine for safety
                                    in adults who have had a kidney or liver
                                    transplant, as well as in healthy adults.
                                    The goal is to see if the vaccine is safe
                                    and if it produces an immune response.
                                  </span>
                                </span>
                                </div>
                                <div className="flex lg:hidden">
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                  <span
                                      className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Phase 3
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                  <span
                                      className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Waitlist Available
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                  <span
                                      className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    FDA Approved Drug
                                  </span>
                                  </div>
                                </div>
                                <div className="flex-col-reverse lg:flex-col flex">
                                  <div className="my-8 mx-auto md:mx-0 mb-4">
                                    <button
                                        className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                        tabIndex={0}
                                        type="button"
                                    >
                                    <span className="white font-bold">
                                      <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="microscope"
                                          className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                      >
                                        <path
                                            fill="currentColor"
                                            d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                        />
                                      </svg>
                                      Learn More
                                    </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-9-2021-75847"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Seattle Children's Hospital in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b3a6068c-a32c-4b35-e676-9971f91a6200/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="BNT162b2 for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  BNT162b2
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will test a new 4-dose immunization
                                  schedule for people with weakened immune
                                  systems. 420 people will be enrolled from the
                                  US, Brazil, and Germany, and followed for 6
                                  months after the 4th dose. Each participant is
                                  expected to be in the trial for about 15
                                  months total.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-1-covid-19-7-2021-03c53"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Fred Hutch/University of Washington Medical Center in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b9ac96cb-d568-4d41-ea92-da54c1461a00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3 className="mb-4" title="DVX201 for COVID-19">
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  DVX201
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    18 - 80
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing an NK cell therapy to
                                  see if it can help people with COVID-19. NK
                                  cells are a part of the immune system that can
                                  kill cells infected by viruses. This study
                                  will look at the safety and tolerability of
                                  the therapy in patients with COVID-19.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-2-and-3-covid-19-5-2020-e098d"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Evergreen Health Research in Kirkland, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b7a2f975-5314-41a2-b3e7-633a11c20500/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="LY3819253 for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  LY3819253
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    Kirkland, WA
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2 &amp; 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will test two drugs, LY3819253 and
                                  LY3832479, to see how effective they are
                                  against the virus that causes COVID-19. The
                                  drugs will be given to participants with early
                                  symptoms of COVID-19, and samples will be
                                  taken to determine how much virus is in the
                                  body at various times. Participation could
                                  last about 12 weeks.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 2 &amp; 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-11-2020-8bacb"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of University of Washington VTEU (Adult Site) in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/f9ebe0ab-d3de-41d9-6d36-825d0504ff00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="SARS-CoV-2 rS/Matrix-M1 Adjuvant (Crossover Vaccination period) for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  SARS-CoV-2 RS/Matrix-M1 Adjuvant (Crossover
                                  Vaccination Period)
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a new vaccine for adults
                                  and adolescents. It will compare the new
                                  vaccine to a placebo vaccine to see if it is
                                  effective, safe, and causes an immune
                                  response. There will also be a substudy to
                                  test a fourth dose of the new vaccine in
                                  adults who have already received three doses.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-3-covid-19-6-2020-6f0f1"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Kaiser Permanente - Seattle in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/f9ebe0ab-d3de-41d9-6d36-825d0504ff00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            2
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="mRNA-1273 for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  MRNA-1273
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a vaccine to prevent
                                  COVID-19. It will look at how well it works,
                                  how safe it is, and how long the immunity
                                  lasts.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 3
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-2-covid-19-4-2021-72e01"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of The University of Washington - Virology Research Clinic in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/f9ebe0ab-d3de-41d9-6d36-825d0504ff00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Ad26.COV2.S for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Ad26.COV2.S
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    18 - 99
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1 &amp; 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing the safety and
                                  effectiveness of different booster shots for
                                  people who have already received a Covid-19
                                  vaccine under emergency use authorization.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1 &amp; 2
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-1-covid-19-2-2021-beae9"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of The University of Washington - Virology Research Clinic in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b9ac96cb-d568-4d41-ea92-da54c1461a00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="SAM-LNP-S for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  SAM-LNP-S
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    18 - 99
                                  </div>
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is a phase 1 study to test the
                                  safety, tolerability, and immunogenicity of
                                  two investigational ChAd vaccines and two
                                  investigational SAM vaccines for COVID-19 in
                                  healthy adults in the US. The study will
                                  enroll 17 subjects in Stage 1 and up to 118
                                  subjects in Stage 2. Subjects will be
                                  monitored for exposure and infection to
                                  SARS-CoV-2 throughout the study and followed
                                  for 12 months after their last vaccination.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 1
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-covid-19-7-2021-1c9b4"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of Kaiser Permanente Washington Health Research Institute in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b9ac96cb-d568-4d41-ea92-da54c1461a00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            1
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue300 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Full Intervention for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Full Intervention
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial is testing a communication and
                                  engagement strategy to see if it increases
                                  COVID-19 booster vaccination rates among
                                  facility staff. The strategy being tested
                                  includes developing materials tailored to
                                  staff whose primary language is not English or
                                  who are from certain cultural affinity groups,
                                  and distributing these materials by members of
                                  the same language/cultural affinity groups.
                                  The trial is being conducted in Washington
                                  state and Georgia.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Recruiting
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  Has No Placebo
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <div className="mb-4">
                          <div className="rounded-xl lg:p-16 px-2 py-6 bg-organicDawn-grainy">
                            <div className="px-4">
                            <span className="white styles_Text-blockquote-small__g8poV styles_block__vwpC6 break-words">
                              Get notified when new COVID-19 trials are posted
                            </span>
                              <span className="white styles_Text-p__oN__e styles_block__vwpC6 break-words">
                              {`We'll send you an email whenever new trials are posted`}
                            </span>
                              <div className="flex flex-wrap items-center mt-4">
                                <div className="lg:w-1/2 w-full lg:mr-20 mb-2 lg:mb-0">
                                  <input
                                      autoComplete="email"
                                      className="rounded-full py-0 w-full h-16 bg-neutral-100 border-2 focus:outline-none border-neutral200 focus:border-success300 px-6"
                                      placeholder="Enter your email"
                                      type="email"
                                  />
                                </div>
                                <div className="lg:w-1/3 w-full">
                                  <button
                                      aria-label="Turn On Alerts"
                                      className="h-12 bg-primary100 rounded-md w-full styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      disabled
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span
                                      className="primary800 styles_Text-button__u2R08 no-underline justify-center flex break-words"
                                      id="undefined-text"
                                  >
                                    Turn On Alerts
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link
                              rel="noreferrer"
                              href="/trial/phase-3-covid-19-7-2020-f4c23"
                          >
                            <div
                                className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                              <div
                                  className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                                <div className="w-full h-[227px] md:h-[168px]">
                                  <img
                                      alt="Image of Swedish Hospital First Hill (Site 208-005), 747 Broadway in Seattle, United States."
                                      src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/f9ebe0ab-d3de-41d9-6d36-825d0504ff00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                      width={341}
                                      height={227}
                                      decoding="async"
                                      data-nimg={1}
                                      className="w-full h-[227px] md:h-[168px] object-cover"
                                      loading="lazy"
                                      style={{color: "transparent"}}
                                  />
                                </div>
                                <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                      <span
                                          className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                        Phase-Based Progress Estimates
                                      </span>
                                        <div className="mx-2">
                                        <span tabIndex={0}>
                                          <span
                                              className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-green300 mr-0.5 rounded-sm"/>
                                              <span
                                                  className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                              2
                                            </span>
                                            </div>
                                          </div>
                                          <span
                                              className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                              <span
                                                  className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                              3
                                            </span>
                                            </div>
                                          </div>
                                          <span
                                              className="blue600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
                                          Safety
                                        </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <h3
                                      className="mb-4"
                                      title="BRII-196/BRII-198 for COVID-19"
                                  >
                                  <span
                                      className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                    BRII-196/BRII-198
                                  </span>
                                    <span
                                        className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                    for COVID-19
                                  </span>
                                  </h3>
                                  <div className="w-full flex flex-row justify-between">
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                    <div
                                        className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                              <div
                                  className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                                <div className="lg:flex lg:mb-4 hidden">
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                  <span
                                      className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Phase 3
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                  <span
                                      className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Waitlist Available
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                  <span
                                      className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    FDA Approved Drug
                                  </span>
                                  </div>
                                </div>
                                <div className="mb-4 grow">
                                <span className="ais-Highlight">
                                  <span className="ais-Highlight-nonHighlighted">
                                    This trial looks at the safety and
                                    effectiveness of different drugs in treating
                                    COVID-19 in hospitalized patients.
                                  </span>
                                </span>
                                </div>
                                <div className="flex lg:hidden">
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                  <span
                                      className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Phase 3
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                  <span
                                      className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    <span tabIndex={0}>
                                      <span
                                          className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                        Waitlist Available
                                      </span>
                                    </span>
                                  </span>
                                  </div>
                                  <div
                                      className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                  <span
                                      className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                    FDA Approved Drug
                                  </span>
                                  </div>
                                </div>
                                <div className="flex-col-reverse lg:flex-col flex">
                                  <div className="my-8 mx-auto md:mx-0 mb-4">
                                    <button
                                        className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                        tabIndex={0}
                                        type="button"
                                    >
                                    <span className="white font-bold">
                                      <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="microscope"
                                          className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                      >
                                        <path
                                            fill="currentColor"
                                            d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                        />
                                      </svg>
                                      Learn More
                                    </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link
                            rel="noreferrer"
                            href="/trial/phase-4-covid-19-6-2021-1f14b"
                        >
                          <div
                              className="flex-col md:flex md:flex-row border-2 border-neutral100 hover:border-neutral500 rounded-2xl bg-neutral100 overflow-hidden">
                            <div
                                className="bg-neutral100 lg:w-1/3 w-full flex flex-col justify-start rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-br-none">
                              <div className="w-full h-[227px] md:h-[168px]">
                                <img
                                    alt="Image of University of Washington AIDS CRS in Seattle, United States."
                                    src="https://imagedelivery.net/BywPZfhqd_-_A1zCYqpnww/b9ac96cb-d568-4d41-ea92-da54c1461a00/fit=cover,format=auto,h=227,onerror=redirect,w=341"
                                    width={341}
                                    height={227}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-[227px] md:h-[168px] object-cover"
                                    loading="lazy"
                                    style={{color: "transparent"}}
                                />
                              </div>
                              <div className="px-4 pb-4 pt-0 md:p-6 md:pt-0 ">
                                <div className="flex justify-between items-center">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                    <span
                                        className="neutral500 styles_Text-p-tiny__3REA2 styles_block__vwpC6 break-words">
                                      Phase-Based Progress Estimates
                                    </span>
                                      <div className="mx-2">
                                      <span tabIndex={0}>
                                        <span
                                            className="black styles_Text-p__oN__e relative cursor-pointer underline styles_block__vwpC6 break-words">
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
                                              aria-label="Effectiveness 3 out of 3"
                                              className="rounded flex items-center styles_rating__MdOXd styles_small__7q_Hp bg-green100"
                                              role="group"
                                          >
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-green800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="green800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
                                            3
                                          </span>
                                          </div>
                                        </div>
                                        <span
                                            className="green600 styles_Text-h6__MGoxo styles_block__vwpC6 break-words">
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
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <div className="styles_mark__OhNvV bg-blue800 mr-0.5 rounded-sm"/>
                                            <span
                                                className="blue800 styles_Text-h6__MGoxo ml-1 mr-2 styles_block__vwpC6 break-words">
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
                                <h3
                                    className="mb-4"
                                    title="Moderna mRNA-1273 COVID-19 vaccine for COVID-19"
                                >
                                <span
                                    className="black styles_Text-h3__MCDgK styles_block__vwpC6 break-words line-clamp-2">
                                  Moderna MRNA-1273 COVID-19 Vaccine
                                </span>
                                  <span
                                      className="black styles_Text-p-small___zIZy styles_block__vwpC6 break-words line-clamp">
                                  for COVID-19
                                </span>
                                </h3>
                                <div className="w-full flex flex-row justify-between">
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 mr-1 grow truncate text-sm styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 ml-1 flex-none text-sm mr-4 styles_block__vwpC6 break-words">
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
                                  <div
                                      className="black styles_Text-p-tiny__3REA2 flex-none text-sm styles_block__vwpC6 break-words">
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
                            <div
                                className="bg-white lg:w-2/3 w-full px-4 md:px-8 py-4 rounded-b-2xl md:py-8 md:rounded-bl-none md:rounded-tr-2xl flex flex-col">
                              <div className="lg:flex lg:mb-4 hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 4
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="mb-4 grow">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  This trial will test if the vaccine can help
                                  prevent COVID-19 in people who have never had
                                  it before and in people who have had it
                                  before.
                                </span>
                              </span>
                              </div>
                              <div className="flex lg:hidden">
                                <div className="px-4 py-2 whitespace-nowrap bg-hope100 mr-1 lg:mr-2 rounded-lg hope800">
                                <span
                                    className="hope800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="hope800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Phase 4
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-green100 mr-1 lg:mr-2 rounded-lg green800">
                                <span
                                    className="green800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  <span tabIndex={0}>
                                    <span
                                        className="green800 styles_Text-p-tiny-strong__OmHuk relative cursor-pointer styles_block__vwpC6 break-words">
                                      Waitlist Available
                                    </span>
                                  </span>
                                </span>
                                </div>
                                <div
                                    className="px-4 py-2 whitespace-nowrap bg-neutral100 mr-1 lg:mr-2 hidden lg:block rounded-lg neutral800">
                                <span
                                    className="neutral800 styles_Text-p-tiny-strong__OmHuk text-center flex-nowrap no-underline styles_center__2XyIX styles_block__vwpC6 break-words">
                                  FDA Approved Drug
                                </span>
                                </div>
                              </div>
                              <div className="flex-col-reverse lg:flex-col flex">
                                <div className="my-8 mx-auto md:mx-0 mb-4">
                                  <button
                                      className="h-12 bg-black rounded-full styles_defaultSize__vvnb8 styles_button-container__DwLl_ styles_button-container-with-shadow__vnIkm"
                                      tabIndex={0}
                                      type="button"
                                  >
                                  <span className="white font-bold">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="microscope"
                                        className="svg-inline--fa fa-microscope fa-1x mr-3 white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                      <path
                                          fill="currentColor"
                                          d="M488 464h-41.42C486.6 428.8 512 377.4 512 320c0-105.9-86.13-192-192-192v48c79.41 0 144 64.59 144 144s-64.59 144-144 144H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h464c13.25 0 24-10.75 24-24C512 474.7 501.3 464 488 464zM120 432h176c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24h-176C106.7 384 96 394.7 96 408C96 421.3 106.7 432 120 432zM160 320h16v16C176 344.8 183.2 352 192 352h32c8.836 0 16-7.164 16-16V320H256c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32c0-17.67-14.33-32-32-32H192C174.3 0 160 14.33 160 32C142.3 32 128 46.33 128 64v224C128 305.7 142.3 320 160 320zM176 80h64v192h-64V80z"
                                      />
                                    </svg>
                                    Learn More
                                  </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full bg-neutral50 flex flex-row items-center justify-center overflow-x-scroll">
                      <div
                          className="black styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center hover:cursor-not-allowed opacity-30 styles_block__vwpC6 break-words">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="square-arrow-left"
                            className="svg-inline--fa fa-square-arrow-left fa-1x "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                          <path
                              fill="currentColor"
                              d="M328 232H181.1l67.21-62.41c9.719-9.062 10.25-24.22 1.25-33.94c-9.031-9.688-24.22-10.25-33.94-1.25l-112 104C98.78 242.1 96 249.3 96 256s2.781 13.04 7.656 17.6l112 104c9.719 9 24.91 8.438 33.94-1.25c9-9.719 8.469-24.88-1.25-33.94L181.1 280H328c13.25 0 24-10.76 24-24.01C352 242.8 341.3 232 328 232zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16V416z"
                          />
                        </svg>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        1
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        2
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        3
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        4
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center styles_block__vwpC6 break-words">
                        …
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        9
                      </span>
                      </div>
                      <div>
                      <span
                          className="neutral900 styles_Text-p__oN__e w-11 h-11 mx-2 my-4 p-2 bg-neutral100 text-center cursor-pointer styles_block__vwpC6 break-words">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="square-arrow-right"
                            className="svg-inline--fa fa-square-arrow-right fa-1x "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                          <path
                              fill="currentColor"
                              d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16V416zM232.3 134.4c-9.719-9-24.91-8.438-33.94 1.25c-9 9.719-8.469 24.88 1.25 33.94l67.21 62.41H120c-13.25 0-24 10.76-24 24.01c0 13.25 10.75 23.99 24 23.99h146.9l-67.21 62.41c-9.719 9.062-10.25 24.22-1.25 33.94c9.031 9.688 24.22 10.25 33.94 1.25l112-104C349.2 269 352 262.7 352 255.1s-2.781-13.04-7.656-17.6L232.3 134.4z"
                          />
                        </svg>
                      </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <div className="styles_background-gradient__84erZ absolute left-0 w-full">
                  <div className="px-4 md:px-8 mx-auto w-full max-w-screen-xl">
                    <div className="pb-8 pt-4 lg:pt-8 lg:pt-8">
                      <div
                          className="flex flex-col items-center mx-auto lg:flex-row lg:items-stretch justify-between gap-4">
                        <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                          <div
                              className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8"/>
                          <div
                              className="relative flex justify-center items-center mr-4"
                              style={{height: "60px", minWidth: "60px"}}
                          >
                            <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply"/>
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
                          <span
                              className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Unbiased Results
                          </span>
                            <span
                                className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
                            We believe in providing patients with all the
                            options.
                          </span>
                          </div>
                        </div>
                        <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                          <div
                              className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8"/>
                          <div
                              className="relative flex justify-center items-center mr-4"
                              style={{height: "60px", minWidth: "60px"}}
                          >
                            <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply"/>
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
                          <span
                              className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Your Data Stays Your Data
                          </span>
                            <span
                                className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
                            {`We only share your information with the clinical trials you're trying to access.`}
                          </span>
                          </div>
                        </div>
                        <div className="relative w-full flex flex-1 items-center p-8 my-4 md:max-w-2xl lg:max-w-4xl">
                          <div
                              className="absolute top-0 left-0 bg-primary300 mix-blend-multiply rounded-lg w-full h-full p-8"/>
                          <div
                              className="relative flex justify-center items-center mr-4"
                              style={{height: "60px", minWidth: "60px"}}
                          >
                            <div className="absolute w-full h-full rounded-md p-4 bg-primary400 mix-blend-multiply"/>
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
                          <span
                              className="white styles_Text-p-small___zIZy leading-[160%] styles_block__vwpC6 break-words">
                            Verified Trials Only
                          </span>
                            <span
                                className="primary100 styles_Text-p-tiny__3REA2 leading-[140%] styles_block__vwpC6 break-words">
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
                        <div className="flex items-center"/>
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
                                  <span
                                      className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  111 S Jackson St, Seattle, Washington 98104, US
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
                                  <span
                                      className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
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
                                  <span
                                      className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  (415) 900-4227
                                </span>
                                </a>
                              </address>
                            </div>
                            <div className="grid grid-cols-1 gap-4 my-4 py-8">
                              <Link href="/about-us">
                              <span
                                  className="white styles_Text-p-tiny__3REA2 fw5 styles_left__Ms_61 styles_block__vwpC6 break-words">
                                About Us
                              </span>
                              </Link>
                              <a
                                  rel="nofollow"
                                  href="https://trypower.notion.site/Careers-at-Power-f885aa53d8d14a288dd154f13b644e4a"
                              >
                              <span
                                  className="white styles_Text-p-tiny__3REA2 fw5 styles_left__Ms_61 styles_block__vwpC6 break-words">
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
                          <span
                              className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Conditions
                          </span>
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <Link href="/clinical-trials/tinnitus">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Tinnitus
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/adhd">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  ADHD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/retinitis-pigmentosa">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Retinitis Pigmentosa
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/autism">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Autism
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/osteoarthritis">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Osteoarthritis
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/spinal-cord-injury">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Spinal Cord Injury
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/vitiligo">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Vitiligo
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ocd">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  OCD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/lyme-disease">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Lyme Disease
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/hpv">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  HPV
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span
                              className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Locations
                          </span>
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <Link href="/clinical-trials/florida">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Florida
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-jersey">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New Jersey
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/north-carolina">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  North Carolina
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/texas">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Texas
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ohio">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Ohio
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/california">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  California
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/pennsylvania">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Pennsylvania
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/kentucky">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Kentucky
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-york">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/indiana">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Indiana
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span
                              className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Cancer Related
                          </span>
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <Link href="/clinical-trials/glioblastoma">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Glioblastoma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/pancreatic-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Pancreatic Cancer
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ovarian-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Ovarian Cancer
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/prostate-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Prostate Cancer
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/lung-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Lung Cancer
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/melanoma">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Melanoma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/leiomyosarcoma">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Leiomyosarcoma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/colon-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Colon Cancer
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/multiple-myeloma">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Multiple Myeloma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/breast-cancer">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Breast Cancer
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span
                              className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Treatments
                          </span>
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <Link href="/clinical-trials/psilocybin">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Psilocybin
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/ivf">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  IVF
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/dental-implant">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dental Implant
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/weight-loss">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Weight Loss
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/smoking">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Smoking
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/prp">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Platelet-Rich Plasma
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/testosterone">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Testosterone
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/saxenda">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Saxenda
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/melatonin">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Melatonin
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/entresto">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Entresto
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
                          <span
                              className="primary200 styles_Text-p-tiny-strong__OmHuk styles_left__Ms_61 styles_block__vwpC6 break-words">
                            Cities
                          </span>
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <Link href="/clinical-trials/houston-tx-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Houston, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/new-york-city-ny-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  New York City, NY
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/boston-ma-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Boston, MA
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/san-francisco-ca-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Francisco, CA
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/dallas-tx-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Dallas, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/san-antonio-tx-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  San Antonio, TX
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/baltimore-md-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Baltimore, MD
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/greensboro-nc-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Greensboro, NC
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/las-vegas-nv-paid-studies">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Las Vegas, NV
                                </span>
                                </Link>
                              </div>
                              <div>
                                <Link href="/clinical-trials/atlanta-ga">
                                <span
                                    className="white styles_Text-p__oN__e styles_left__Ms_61 styles_block__vwpC6 break-words">
                                  Atlanta, GA
                                </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex" id="termsOfService">
                        <Link href="/terms-of-service">
                        <span
                            className="white styles_Text-p-tiny__3REA2 mr-8 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Terms of Service
                        </span>
                        </Link>
                        <Link href="/privacy-policy">
                        <span
                            className="white styles_Text-p-tiny__3REA2 mr-8 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Privacy Policy
                        </span>
                        </Link>
                        <Link href="/security">
                        <span
                            className="white styles_Text-p-tiny__3REA2 styles_left__Ms_61 styles_block__vwpC6 break-words">
                          Security
                        </span>
                        </Link>
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
