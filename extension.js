
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Clutter = imports.gi.Clutter;

let text, button, label;

function init() {
    Clutter.init(null);

    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });

    label = new St.Label({text: "nothing"});


    button.set_child(label);
    // button.connect('button-press-event', _showHello);
}

function _buttonPressed(event) {
    label.set_text("" + event.get_button());
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
    global.window_group.set_reactive(true);
    global.window_group.connect('button-press-event', _buttonPressed);

}

function disable() {
    Main.panel._rightBox.remove_child(button);
    global.window_group.set_reactive(false);
    global.window_group.disconnect('button-press-event', _buttonPressed);
}
