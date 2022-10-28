/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

import { Component } from '@odoo/owl';

class LinkPreviewListView extends Component {

    /**
     * @returns {LinkPreviewListView}
     */
    get linkPreviewListView() {
        return this.props.record;
    }

}

Object.assign(LinkPreviewListView, {
    props: { record: Object },
    template: 'mail.LinkPreviewListView',
});

registerMessagingComponent(LinkPreviewListView);
