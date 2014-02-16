/*-------- Globals & Setup --------*/

Array.prototype.clear = function() {
  while (this.length > 0) {
    this.pop();
  }
};

powerups = [];
tanks = [];
projectiles = [];
destructibles = [];
startingpoints = [];
maps = [];
bots = []; // [tank, movequeue, movelist_status, state] where movelist_status pertains to readiness to execute the movelist, state refers to bot state 'patrolling', 'chasing', 'running'
curr_cmd = 0; // 0 - none, 1 - turnleft, 2 - turnright, 3 - forward

current_map = null;

mainAnimation = null;
editorAnimation = null;

ui_location = null; // menu, game, editor

mousePos = {};
mouseDownLeft = false; // left mouse
mouseDownRight = false; // right mouse
cycles = 0;
logNum = 0;
keysDown = {};
then = Date.now();


/* map editor */
cs_placement_ok = true;
cspo_timeout = null; // timeout for cs_placement_ok

cs_asset_select_ok = true;
csas_timeout = null;

cs_movement_ok = true;
csmv_timeout = null;

cLog = document.getElementById('combat-log');
hNum = document.getElementById('hNum');
hp = document.getElementById('current-health');