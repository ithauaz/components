import FlarumSettingsModal from 'flarum/components/SettingsModal';
import classList from 'flarum/utils/classList';

export default class SettingsModal extends FlarumSettingsModal {
    oninit(vnode) {
        super.oninit(vnode);

        this.settings = {};
        this.setting = this.setting.bind(this);

        if (this.attrs.onsaved) this.onsaved = this.attrs.onsaved.bind(this);

        if (this.attrs.items && typeof this.attrs.items !== 'function') {
            throw new Error(
                '[ithauaz/components] SettingsModal - "items" thuộc tính phải là một hàm chấp nhận phương thức setting() để chuyển cho tất cả các phần tử con của SettingItem.'
            );
        }
    }

    className() {
        return classList([this.attrs.className, this.attrs.size && `Modal--${this.attrs.size}`]);
    }

    title() {
        return this.attrs.title;
    }

    form() {
        return (
            this.attrs.form ||
            [...this.attrs.items(this.setting)].map((c) =>
                c && c.tag !== 'div' && (!c.attrs || !c.attrs.className || !c.attrs.className.contains('Form-group')) ? m('div.Form-group', c) : c
            )
        );
    }
}
