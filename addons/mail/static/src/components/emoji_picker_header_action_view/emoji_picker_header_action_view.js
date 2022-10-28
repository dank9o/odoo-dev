/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

import { Component } from '@odoo/owl';

export class EmojiPickerHeaderActionView extends Component {

    /**
     * @returns {EmojiPickerHeaderActionView}
     */
    get emojiPickerHeaderActionView() {
        return this.props.record;
    }

}

Object.assign(EmojiPickerHeaderActionView, {
    props: { record: Object },
    template: 'mail.EmojiPickerHeaderActionView',
});

registerMessagingComponent(EmojiPickerHeaderActionView);
