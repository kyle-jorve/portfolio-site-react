import React, { useState, useContext } from 'react';
import ScreenContext from './screen';

type DetailPageContextType = {
	[prop: string]: any;
};

const DetailPageContext = React.createContext<DetailPageContextType>({
	activeSlideIndex: 0,
});

export function DetailPageContextProvider(props: React.PropsWithChildren) {
	const screenContext = useContext(ScreenContext);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	function goToPrevSlide(slidesLength: number) {
		setActiveSlideIndex(prev => {
			if (prev === 0) return slidesLength - 1;

			return prev - 1;
		});
	}

	function goToNextSlide(slidesLength: number) {
		setActiveSlideIndex(prev => {
			if (prev === slidesLength - 1) return 0;

			return prev + 1;
		});
	}

	function goToSlide(index: number) {
		setActiveSlideIndex(index);
	}

	function resetSlideIndex() {
		if (!screenContext.desktop) {
			setActiveSlideIndex(0);
		} else {
			setTimeout(() => {
				setActiveSlideIndex(0);
			}, screenContext.longTransitionDuration);
		}
	}

	return (
		<DetailPageContext.Provider
			value={{
				activeSlideIndex,
				goToPrevSlide,
				goToNextSlide,
				goToSlide,
				resetSlideIndex,
			}}
		>
			{props.children}
		</DetailPageContext.Provider>
	);
}

export default DetailPageContext;
