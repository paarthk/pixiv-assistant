import {RootPage} from 'src/pages/root'

export class HomePage extends RootPage {
	protected getTagElements() {
		return [
			'div.tag-name'
		].map(tag => this.jQuery(tag)).concat(super.getTagElements());
	}
}
