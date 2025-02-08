import { useState } from "react";
import { PROJECTS } from "../constant";
import { moveFirstToLast, moveLastToFirst } from "../../../../util/ArrayHelper";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import MarkdownRenderer from "../../../../components/MarkdownRenderer";
import { getStyles } from "../util";
import Item from "../Item";

export default function SlideProjects() {
	const [activeSlide, setActiveSlide] = useState(1);

	const [slides, setSlides] = useState(PROJECTS);

	const [isOpen, setIsOpen] = useState();

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleBackSlide = () => {
		if (activeSlide - 1 === 0) {
			setSlides([...moveLastToFirst(slides)]);
		} else {
			setActiveSlide(activeSlide - 1);
		}
	};

	const handleNextSlide = () => {
		if (activeSlide + 1 === slides.length - 1) {
			setSlides([...moveFirstToLast(slides)]);
		} else {
			setActiveSlide(activeSlide + 1);
		}
	};

	const handleClickItem = (currectClickIdx) => {
		if (currectClickIdx > activeSlide) handleNextSlide();
		if (currectClickIdx < activeSlide) handleBackSlide();
		if (currectClickIdx === activeSlide) handleOpenModal();
	};
	return (
    
		<div className="hidden md:flex flex-col w-full h-full mr-[200px]">
			<div className="flex flex-row justify-center mb-28 gap-4">
				<Button
					onClick={() => {
						handleBackSlide();
					}}
					className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
          hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
				>
					<span className="icon-[mdi--navigate-before] w-16 h-16 text-white " />
				</Button>
				<Button
					onClick={() => {
						handleNextSlide();
					}}
					className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
          hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
				>
					<span className="icon-[mdi--navigate-next] w-16 h-16 text-white " />
				</Button>
			</div>
			<div className="flex flex-row mt-46" style={{ perspective: "1000px" }}>
				{slides.map((item, idx) => {
					return (
						<Item
							key={idx}
							style={getStyles(activeSlide, idx)}
							className={
								activeSlide === idx
									? "!backdrop-blur-none !blur-none"
									: "!backdrop-blur-sm"
							}
							data={item}
							onSelectViewItem={() => {
								handleClickItem(idx);
							}}
						/>
					);
				})}
			</div>
			<Modal
				isOpen={isOpen}
				onClose={handleCloseModal}
				title={slides[activeSlide].name}
			>
				<div>
					<MarkdownRenderer>{slides[activeSlide].description}</MarkdownRenderer>
				</div>
			</Modal>
		</div>
	);
}
