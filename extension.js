const Main = imports.ui.main;
const St = imports.gi.St;
const Util = imports.misc.util;

let button;

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'changes-prevent-symbolic',
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', _lockScreen);
}

function _lockScreen () {
	Util.spawn(['/usr/bin/dm-tool', 'lock']);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
