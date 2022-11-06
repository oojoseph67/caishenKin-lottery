import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="bg-[#0B0D17] text-gray-100">
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="flex flex-col sm:flex-row items-start justify-between">
					<div className="md:max-w-md mb-10 sm:mb-0 overflow-hidden flex flex-col items-start justify-start gap-[40px]">
						<a
							href="/"
							aria-label="Company Logo"
							title="Company"
							className="inline-flex items-c enter"
						>
							<Image
								src="/logo/qroniswap.png"
								alt="Qroniswap logo"
								width={120}
								height={120}
							/>
						</a>
						<div className="mt-4 lg:max-w-sm">
							<p className="text-base text-gray-100">
								Copyright © 2022 Qroniswap Inc.
							</p>
							<p className="mt-4 text-base text-gray-100">
								All rights reserved
							</p>
						</div>
						<div className="mt-5 inline-flex items-start justify-center">
							<a
								href=""
								className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 17 17"
									className="h-7 w-7"
								>
									<path
										fill="#fff"
										d="M8.5 1.063a7.438 7.438 0 1 0 .001 14.876A7.438 7.438 0 0 0 8.5 1.062Zm2.29 10.975s-.185.464-.697.241l-1.896-1.453-1.164-.912.005-.042s3.4-3.057 3.54-3.186l.093-.158c.008-.158-.252 0-.252 0L5.914 9.389l-1.877-.632s-.288-.102-.316-.325c-.027-.223.325-.343.325-.343l7.46-2.926s.613-.269.613.177l-1.33 6.698Z"
									/>
								</svg>
							</a>
							<a
								href=""
								className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 17"
									className="h-6 w-6"
								>
									<path
										fill="#fff"
										d="M15.406 2.209A1.66 1.66 0 0 0 13.75.564L3.242.531a1.649 1.649 0 0 0-1.648 1.644v10.84c0 .907.74 1.594 1.648 1.594h8.977l-.432-1.46 3.62 3.32V2.209ZM10.78 10.95s-.29-.345-.53-.642c1.053-.297 1.455-.946 1.455-.946-.29.192-.6.351-.925.473a5.645 5.645 0 0 1-3.248.337c-.404-.075-.8-.19-1.182-.345a4.698 4.698 0 0 1-.587-.272c-.024-.016-.048-.024-.072-.04-.016-.009-.024-.017-.033-.017a2.84 2.84 0 0 1-.225-.136s.386.634 1.407.938c-.242.305-.539.658-.539.658-1.777-.056-2.452-1.21-2.452-1.21 0-2.56 1.158-4.637 1.158-4.637 1.157-.858 2.25-.834 2.25-.834l.081.097c-1.447.409-2.106 1.042-2.106 1.042s.176-.096.474-.225a6.303 6.303 0 0 1 1.826-.505.797.797 0 0 1 .137-.016 6.827 6.827 0 0 1 1.624-.016 6.68 6.68 0 0 1 2.42.762s-.635-.603-2.002-1.011l.112-.128s1.102-.024 2.252.835c0 0 1.158 2.077 1.158 4.636 0-.01-.676 1.146-2.453 1.202Z"
									/>
									<path
										fill="#fff"
										d="M7.04 7.238c-.457 0-.82.393-.82.882 0 .49.37.883.82.883.459 0 .82-.393.82-.883.01-.49-.361-.882-.82-.882Zm2.935 0c-.458 0-.82.393-.82.882 0 .49.37.883.82.883.459 0 .82-.393.82-.883 0-.489-.37-.882-.82-.882Z"
									/>
								</svg>
							</a>
							<a
								href=""
								className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 32 33"
									className="h-7 w-7"
								>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="M0 16.287c0-8.836 7.163-16 16-16s16 7.164 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16Z"
										clip-rule="evenodd"
										opacity=".1"
									/>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="m15.52 13.292.034.554-.56-.068c-2.036-.26-3.816-1.141-5.326-2.621l-.74-.735-.19.543c-.402 1.209-.145 2.485.695 3.344.447.475.346.542-.426.26-.268-.09-.503-.158-.526-.124-.078.079.19 1.107.403 1.514.291.565.884 1.118 1.533 1.446l.549.26-.65.011c-.626 0-.648.011-.581.249.224.734 1.108 1.514 2.093 1.853l.693.237-.604.361a6.302 6.302 0 0 1-3 .837c-.503.01-.917.056-.917.09 0 .113 1.365.746 2.16.994 2.384.735 5.215.418 7.342-.836 1.51-.892 3.021-2.666 3.727-4.384.38-.915.76-2.587.76-3.39 0-.52.034-.587.66-1.208.37-.362.717-.757.784-.87.112-.215.101-.215-.47-.023-.951.34-1.085.294-.615-.215.347-.361.76-1.017.76-1.209 0-.033-.167.023-.357.125-.202.113-.65.282-.985.384l-.605.192-.548-.373c-.302-.203-.727-.43-.951-.497-.571-.158-1.444-.136-1.959.045-1.399.509-2.283 1.82-2.182 3.254Z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a
								href=""
								className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 32 33"
									className="w-7 h-7"
								>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="M0 16.287c0-8.836 7.163-16 16-16s16 7.164 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16Z"
										clip-rule="evenodd"
										opacity=".1"
									/>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="M22.668 10.787a2.167 2.167 0 0 1 1.509 1.549c.357 1.366.357 4.218.357 4.218s0 2.851-.357 4.218a2.167 2.167 0 0 1-1.51 1.549c-1.33.366-6.667.366-6.667.366s-5.337 0-6.668-.366a2.167 2.167 0 0 1-1.509-1.55c-.356-1.366-.356-4.217-.356-4.217s0-2.852.356-4.218a2.167 2.167 0 0 1 1.51-1.55C10.662 10.42 16 10.42 16 10.42s5.337 0 6.668.367ZM14.4 14.154v5.333l4.267-2.666-4.267-2.667Z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a
								href=""
								className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 32 33"
									className="w-7 h-7"
								>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="M0 16.287c0-8.836 7.163-16 16-16s16 7.164 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16Z"
										clip-rule="evenodd"
										opacity=".1"
									/>
									<path
										fill="#fff"
										fill-rule="evenodd"
										d="M16 7.754c-2.317 0-2.608.01-3.518.051-.908.042-1.528.186-2.071.397a4.179 4.179 0 0 0-1.512.984c-.474.474-.766.95-.985 1.511-.211.543-.355 1.163-.396 2.072-.04.91-.051 1.2-.051 3.518 0 2.318.01 2.608.051 3.518.042.909.186 1.529.397 2.071.218.561.51 1.037.984 1.512.474.474.95.767 1.51.985.544.21 1.164.355 2.072.396.91.042 1.201.052 3.519.052 2.317 0 2.607-.01 3.517-.052.909-.041 1.53-.185 2.073-.396a4.173 4.173 0 0 0 1.51-.985 4.19 4.19 0 0 0 .985-1.512c.21-.542.354-1.163.397-2.07.04-.911.051-1.201.051-3.519 0-2.317-.01-2.608-.051-3.518-.043-.909-.187-1.529-.397-2.071a4.188 4.188 0 0 0-.985-1.512 4.17 4.17 0 0 0-1.51-.984c-.545-.211-1.165-.355-2.074-.397-.91-.041-1.2-.051-3.518-.051h.003Zm-.765 1.538h.766c2.278 0 2.548.008 3.448.049.832.038 1.283.177 1.584.294.398.154.682.34.98.638.3.299.484.583.64.981.116.3.256.752.293 1.584.041.9.05 1.17.05 3.447 0 2.278-.009 2.548-.05 3.448-.038.831-.177 1.283-.294 1.584a2.64 2.64 0 0 1-.638.98 2.638 2.638 0 0 1-.98.638c-.301.117-.753.256-1.585.294-.9.041-1.17.05-3.448.05-2.279 0-2.549-.009-3.449-.05-.832-.038-1.283-.177-1.584-.294a2.642 2.642 0 0 1-.981-.638 2.645 2.645 0 0 1-.639-.981c-.117-.3-.256-.752-.294-1.584-.04-.9-.049-1.17-.049-3.449s.008-2.547.05-3.447c.037-.832.176-1.284.293-1.584.155-.399.34-.683.639-.982.298-.298.583-.483.98-.638.302-.118.753-.256 1.585-.294.788-.036 1.093-.047 2.683-.048v.002Zm5.32 1.417a1.024 1.024 0 1 0 0 2.047 1.024 1.024 0 0 0 0-2.047Zm-4.554 1.196a4.383 4.383 0 1 0 0 8.765 4.383 4.383 0 0 0 0-8.765Zm0 1.538a2.845 2.845 0 1 1 0 5.689 2.845 2.845 0 0 1 0-5.69Z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div className="overflow-hidden flex flex-col flex-wrap sm:flex-row items-start justify-between gap-[50px]  text-white">
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold text-lg tracking-wide text-gray-100">
								Product
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Swap
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Staking
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Farming
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Liquidity
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										NFT
									</a>
								</li>
							</ul>
						</div>
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold tracking-wide text-lg text-gray-100">
								Support
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Discord
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Tokenomics
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Audits
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Apply for listing
									</a>
								</li>
							</ul>
						</div>
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold tracking-wide text-lg text-gray-100">
								Stay up to date
							</p>
							<div className="mt-2 space-y-2">
								<form className="block relative">
									<input
										placeholder="Email"
										required
										type="text"
										className="flex-grow w-full h-10 text-sm px-4 mb-3 transition duration-200 bg-gray-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-primary focus:outline-none focus:shadow-outline"
									/>
									<div className="absolute top-3 -right-3">
										<button
											type="submit"
											className="inline-flex items-center justify-center px-6 "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 18"
												className="w-5 h-5"
											>
												<g clip-path="url(#a)">
													<path
														fill="#fff"
														fill-rule="evenodd"
														d="M17.03.97a.75.75 0 0 1 .178.778l-5.25 15a.75.75 0 0 1-1.393.057l-2.883-6.487-6.487-2.883a.75.75 0 0 1 .057-1.393l15-5.25a.75.75 0 0 1 .778.178ZM9.145 9.916l2.022 4.55 3.54-10.112-5.562 5.562Zm4.5-6.622L3.534 6.833l4.55 2.022 5.563-5.561Z"
														clip-rule="evenodd"
													/>
												</g>
												<defs>
													<clipPath id="a">
														<path fill="#fff" d="M0 0h18v18H0z" />
													</clipPath>
												</defs>
											</svg>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
