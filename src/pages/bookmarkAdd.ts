import {RootPage} from 'src/pages/root'

export class BookmarkAddPage extends RootPage {
	protected getTagElements() {
		return [
			'ul.tag-cloud li span'
		].map(tag => this.jQuery(tag)).concat(super.getTagElements());
	}
}