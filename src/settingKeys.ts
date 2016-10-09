let settingKeys = {
	global: {
		translateTags: 'GLOBAL_TRANSLATE_TAGS',
		directToManga: 'GLOBAL_LINK_THUMBNAIL_DIRECTLY_TO_MANGA',
		injectPagingButtons: 'GLOBAL_INJECT_PAGING_BUTTONS',
		fadeDownloadedImages: 'GLOBAL_FADE_DOWNLOADED_IMAGES',
	},
	pages: {
		illust: {
			inject: {
				openFolder: 'ILLUST_PAGE_INJECT_OPEN_FOLDER_BUTTON',
			},
			autoOpen: 'ILLUST_PAGE_AUTO_OPEN',
			boxImage: 'ILLUST_PAGE_BOX_IMAGE_IN_WINDOW',
		},
		manga: {
			inject: {
				previousButton: 'MANGA_PAGE_PREVIOUS_PAGE_BUTTON',
			},
			loadFullSize: 'MANGA_PAGE_LOAD_FULL_SIZE_IMAGES',
			fitImage: 'MANGA_PAGE_FIT_IMAGE',
		},
		works: {
			inject: {
				openFolder: 'WORKS_PAGE_INJECT_OPEN_FOLDER_BUTTON',
				openInTabs: 'WORKS_PAGE_INJECT_OPEN_IN_TABS'
			},
			autoDarken: 'WORKS_PAGE_AUTO_DARKEN',
			openTabsImagesOnly: 'WORKS_PAGE_OPEN_DIRECT_IMAGES_IN_TABS',
		},
		bookmarkIllustration: {
			inject: {
				viewAll: 'BOOKMARK_ILLUSTRATION_INJECT_VIEW_ALL',
			},
			fadeDownloaded: 'BOOKMARK_ILLUSTRATION_FADE_DOWNLOADED',
			fadeBookmarked: 'BOOKMARK_ILLUSTRATION_FADE_BOOKMARKED',
			skipToDetail: 'BOOKMARK_ILLUSTRATION_SKIP_TO_DETAIL_PAGE',
		},
		artistBookmarks: {
			inject: {
				openFolder: 'ARTIST_BOOKMARKS_INJECT_OPEN_FOLDER_BUTTON',
			},
			fadeDownloaded: 'ARTIST_BOOKMARKS_FADE_DOWNLOADED',
			fadeBookmarked: 'ARTIST_BOOKMARKS_FADE_BOOKMARKED',
		},
		search: {
			fadeDownloaded: 'SEARCH_PAGE_FADE_DOWNLOADED',
			fadeBookmarked: 'SEARCH_PAGE_FADE_BOOKMARKED',
		}
	},
};

export default settingKeys;