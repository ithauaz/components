import Component from 'flarum/Component';

export default class SettingItem extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.cast = this.attrs.cast || ((a) => a);

        if (typeof this.attrs.setting !== 'function') {
            throw new Error(
                '[ithauaz/components] SettingsModal - thuộc tính "setting" phải là một hàm, cụ thể hơn là phương thức SettingsModal setting() được truyền cho thuộc tính modal \'s items.'
            );
        }
    }

    setting() {
        return this.attrs.setting(this.attrs.name);
    }

    getValue() {
        return this.cast(this.setting()());
    }
}
