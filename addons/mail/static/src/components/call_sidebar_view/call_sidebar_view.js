/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

import { Component } from '@odoo/owl';

export class CallSidebarView extends Component {

    //--------------------------------------------------------------------------
    // Getters / Setters
    //--------------------------------------------------------------------------

    /**
     * @returns {CallSidebarView}
     */
    get callSidebarView() {
        return this.props.record;
    }
}

Object.assign(CallSidebarView, {
    props: { record: Object },
    template: 'mail.CallSidebarView',
});

registerMessagingComponent(CallSidebarView);
