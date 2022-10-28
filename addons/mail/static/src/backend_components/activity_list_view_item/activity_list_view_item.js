/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

import { Component } from '@odoo/owl';

export class ActivityListViewItem extends Component {

    get activityListViewItem() {
        return this.props.record;
    }

}

Object.assign(ActivityListViewItem, {
    props: { record: Object },
    template: 'mail.ActivityListViewItem',
});

registerMessagingComponent(ActivityListViewItem);
