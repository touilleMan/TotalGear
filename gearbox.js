var GEARS = [
{ 'acceleration' : 2000.0, 'min_rpm' : 0, 'max_rpm' : 7500, 'coeff': 0.0 },
{ 'acceleration' : 1902.25, 'min_rpm' : 1000, 'max_rpm' : 7500, 'coeff': 8./1000 },
{ 'acceleration' : 2307.69, 'min_rpm' : 3000, 'max_rpm' : 7500, 'coeff': 13.33/1000 },
{ 'acceleration' : 2210.76, 'min_rpm' : 4500, 'max_rpm' : 7500, 'coeff': 16./1000 },
{ 'acceleration' : 1897.53, 'min_rpm' : 5000, 'max_rpm' : 7500, 'coeff': 20./1000 },
{ 'acceleration' : 2400.47, 'min_rpm' : 5200, 'max_rpm' : 7700, 'coeff': 33.33/1000 }
];

var RPM_TOLERANCE = 25
var COOLDOWN = 10.0
var SPEEP_DOWN_COEF = 1.0
var DEFAULT_RPM = 100

var GearBox = {
    accelerate : false,
    desingaged : false,
    gear_level : 0,
    gear_max : 5,
    speed : 0,
    rpm : 0,
    motor_brake : 0,
    state : 'stopped'
};

function gear_change(gear) {
    if (gear < 0 || gear > GearBox.gear_max) {
        // Bad gear number
        return;
    } else if (GearBox.state == 'stopped' || GearBox.rpm < DEFAULT_RPM) {
        // We can move the gearbox if the motor is not running (or too slow)
        GearBox.gear_level = gear;
    } else if (GearBox.desingaged == false) {
        // Trying to move the gearbox without desingaging the motor...
        return;
    } else if (gear != 0) {
        var new_gear = GEARS[gear];
        if (GearBox.gear_level == 0) {
            var new_rpm = GearBox.rpm;
        } else {
            // The speed stay constant during gear change,
            // use it to compute the new rpm
            var new_rpm = (GearBox.rpm * GEARS[GearBox.gear_level]['coeff']) / GEARS[gear]['coeff'];
        }
        if (new_rpm < new_gear['min_rpm']) {
            // The torque is not strong enough, stall the motor !
            GearBox.state = 'stopped';
        } else if (new_rpm > new_gear['max_rpm']) {
            // The rpm is too big, motor brake
            GearBox.motor_brake = new_rpm - new_gear['max_rpm'];
            GearBox.rpm = new_gear['max_rpm'];
            GearBox.state = 'motor_brake';
        } else {
            // Everything is ok, clear previous motor_brake if any
            GearBox.state = 'running';
            GearBox.motor_brake = 0.0;
        }
        GearBox.gear_level = gear;
    } else { // gear == 0
        GearBox.gear_level = gear;
    }
}

function start() {
    if (GearBox.state == 'running'){
        GearBox.state = 'stopped';
    } else if (GearBox.rpm < 100) {
        GearBox.state = 'running';
        GearBox.motor_brake = 0.0;
        GearBox.rpm = DEFAULT_RPM;
    }
}

function update() {
    var dt = 0.125
    if (GearBox.state == 'running' && GearBox.accelerate) {
        if (GearBox.rpm < GEARS[GearBox.gear_level]['min_rpm']) {
            // The current rpm are too low for the current gear
            var speed_down = Math.abs(GearBox.rpm / GEARS[GearBox.gear_level]['min_rpm']) * SPEEP_DOWN_COEF;
        } else {
            var speed_down = 1.0;
            GearBox.rpm += GEARS[GearBox.gear_level]['acceleration'] * dt * speed_down;
            var noise = (Math.random() - 0.5) * RPM_TOLERANCE;
            GearBox.rpm = Math.min(GEARS[GearBox.gear_level]['max_rpm'] + noise, GearBox.rpm);
        }
    } else if (GearBox.state == 'motor_brake') {
        // The torque is too big, the motor has to wait a bit
        GearBox.motor_brake -= COOLDOWN * GearBox.rpm * dt;
        if (GearBox.motor_brake < 0) {
            GearBox.motor_brake = 0.0;
            GearBox.state = 'running';
        }
    } else { // Motor is stopped or gear desingaged
        GearBox.rpm -= GEARS[0]['acceleration'] * dt;
        if (GearBox.state == 'stopped') {
            if (GearBox.rpm < 1) {
                GearBox.rpm = 0.0;
            }
        } else {
            if (GearBox.rpm < DEFAULT_RPM) {
                GearBox.rpm = DEFAULT_RPM;
            }
        }
    }

    // Now update the speed
    if (GearBox.desingaged == false && GearBox.gear_level != 0 && GearBox.accelerate) {
        target_speed = GEARS[GearBox.gear_level]['coeff'] * GearBox.rpm;
        GearBox.speed += GEARS[GearBox.gear_level]['acceleration'] * GEARS[GearBox.gear_level]['coeff'] * dt;
        GearBox.speed = Math.min(GearBox.speed, target_speed);
    } else {
        if (GearBox.gear_level == 0) {
            GearBox.speed -= GEARS[GearBox.gear_level]['acceleration'] * GEARS[1]['coeff'] * dt;
        } else {
            GearBox.speed -= GEARS[GearBox.gear_level]['acceleration'] * GEARS[GearBox.gear_level]['coeff'] * dt;
        }

        if (GearBox.speed < 1) {
            GearBox.speed = 0.0;
        }
    }

    // Finally, update the html page
    $('#gear').html(GearBox.gear_level);
    $('#speed').html(GearBox.speed);
    $('#rpm').html(GearBox.rpm);
    $('#state').html(GearBox.state);
}

$(document).ready(function() {
    Mousetrap.bind('space',
        function() {
            GearBox.accelerate = true;
        }, 'keydown');

    Mousetrap.bind('space',
        function() {
            GearBox.accelerate = false;
        }, 'keyup');

    Mousetrap.bind('enter', function() { start(); }, 'keydown' );

    Mousetrap.bind('up', function() { gear_change(GearBox.gear_level + 1);}, 'keydown' );
    Mousetrap.bind('down', function() { gear_change(GearBox.gear_level - 1);}, 'keydown' );

    Mousetrap.bind('x',
        function() {
            GearBox.desingaged = true;
        }, 'keydown');

    Mousetrap.bind('x',
        function() {
            GearBox.desingaged = false;
        }, 'keyup');

    setInterval(update, 125);
});
