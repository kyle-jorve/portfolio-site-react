import React, { useState } from 'react';

const PageContext = React.createContext({
	portfolioItemID: null,
});

export function PageContextProvider(props) {
	const [portfolioItemID, setPortfolioItemID] = useState(null);

	return (
		<PageContext.Provider
			value={{
				portfolioItemID,
				setPortfolioItemID,
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
}

export default PageContext;
