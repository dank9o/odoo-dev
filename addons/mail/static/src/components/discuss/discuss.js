/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

import { Component } from '@odoo/owl';

export class Discuss extends Component {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * @returns {DiscussView}
     */
    get discussView() {
        return this.props.record;
    }
}

Object.assign(Discuss, {
    props: { record: Object },
    template: 'mail.Discuss',
});

registerMessagingComponent(Discuss);
