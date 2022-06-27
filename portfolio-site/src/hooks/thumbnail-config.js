function useThumbnailConfig(props) {
	return props.isNew
		? {
				sources: [
					{
						url: `${props.thumbnailKey}-1024.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey}-640.jpg`,
				},
		  }
		: props.isFeatured
		? {
				sources: [
					{
						url: `${props.thumbnailKey}-640.jpg`,
						minScreenWidth: 1440,
					},
					{
						url: `${props.thumbnailKey}-480.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey}-320.jpg`,
				},
		  }
		: props.isDetail
		? {
				sources: [
					{
						url: `${props.thumbnailKey}-480.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey}-640.jpg`,
				},
		  }
		: {
				sources: [
					{
						url: `${props.thumbnailKey}-480.jpg`,
						minScreenWidth: 1024,
					},
					{
						url: `${props.thumbnailKey}-512.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey}-320.jpg`,
				},
		  };
}

export default useThumbnailConfig;
