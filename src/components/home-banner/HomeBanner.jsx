import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles/Banner.css";

const slides = [
	{
		title: "",
		img: "https://defood.crapps.ru/admin/images/maxi/banners/11396407196072ebd9ae5f61.97278327.jpg",
	},
	{
		title: "",
		img: "https://defood.crapps.ru/admin/images/maxi/banners/2766374516072ef68a405b3.40025422.jpg",
	},
	{
		title: "",
		img: "https://defood.crapps.ru/admin/images/maxi/banners/16866015876072ebda274282.60935632.jpg",
	},
];

const HomeBanner = () => {
	return (
		<>
			<Swiper
				style={{ paddingTop: 23 }}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 6800,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
				loop={true}>
				{slides.map((item, i) => (
					<SwiperSlide key={i}>
						<img className='swiper-img' src={item.img} width={"100%"} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default HomeBanner;
