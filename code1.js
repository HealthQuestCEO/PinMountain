gdjs.MapCode = {};
gdjs.MapCode.localVariables = [];
gdjs.MapCode.GDMapObjects1= [];
gdjs.MapCode.GDMapObjects2= [];
gdjs.MapCode.GDGameObjects1= [];
gdjs.MapCode.GDGameObjects2= [];
gdjs.MapCode.GDTower_9595peakObjects1= [];
gdjs.MapCode.GDTower_9595peakObjects2= [];
gdjs.MapCode.GDLockClosedObjects1= [];
gdjs.MapCode.GDLockClosedObjects2= [];
gdjs.MapCode.GDOtherObjects1= [];
gdjs.MapCode.GDOtherObjects2= [];
gdjs.MapCode.GDDragonObjects1= [];
gdjs.MapCode.GDDragonObjects2= [];
gdjs.MapCode.GDBG1Objects1= [];
gdjs.MapCode.GDBG1Objects2= [];
gdjs.MapCode.GDSpinObjects1= [];
gdjs.MapCode.GDSpinObjects2= [];
gdjs.MapCode.GDBackObjects1= [];
gdjs.MapCode.GDBackObjects2= [];
gdjs.MapCode.GDAObjects1= [];
gdjs.MapCode.GDAObjects2= [];
gdjs.MapCode.GDBObjects1= [];
gdjs.MapCode.GDBObjects2= [];
gdjs.MapCode.GDCObjects1= [];
gdjs.MapCode.GDCObjects2= [];
gdjs.MapCode.GDDObjects1= [];
gdjs.MapCode.GDDObjects2= [];
gdjs.MapCode.GDRetryObjects1= [];
gdjs.MapCode.GDRetryObjects2= [];


gdjs.MapCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tower_peak"), gdjs.MapCode.GDTower_9595peakObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapCode.GDTower_9595peakObjects1.length;i<l;++i) {
    if ( gdjs.MapCode.GDTower_9595peakObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapCode.GDTower_9595peakObjects1[k] = gdjs.MapCode.GDTower_9595peakObjects1[i];
        ++k;
    }
}
gdjs.MapCode.GDTower_9595peakObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Other"), gdjs.MapCode.GDOtherObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapCode.GDOtherObjects1.length;i<l;++i) {
    if ( gdjs.MapCode.GDOtherObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapCode.GDOtherObjects1[k] = gdjs.MapCode.GDOtherObjects1[i];
        ++k;
    }
}
gdjs.MapCode.GDOtherObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "coming soon", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spin"), gdjs.MapCode.GDSpinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapCode.GDSpinObjects1.length;i<l;++i) {
    if ( gdjs.MapCode.GDSpinObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapCode.GDSpinObjects1[k] = gdjs.MapCode.GDSpinObjects1[i];
        ++k;
    }
}
gdjs.MapCode.GDSpinObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Spin", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


};

gdjs.MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MapCode.GDMapObjects1.length = 0;
gdjs.MapCode.GDMapObjects2.length = 0;
gdjs.MapCode.GDGameObjects1.length = 0;
gdjs.MapCode.GDGameObjects2.length = 0;
gdjs.MapCode.GDTower_9595peakObjects1.length = 0;
gdjs.MapCode.GDTower_9595peakObjects2.length = 0;
gdjs.MapCode.GDLockClosedObjects1.length = 0;
gdjs.MapCode.GDLockClosedObjects2.length = 0;
gdjs.MapCode.GDOtherObjects1.length = 0;
gdjs.MapCode.GDOtherObjects2.length = 0;
gdjs.MapCode.GDDragonObjects1.length = 0;
gdjs.MapCode.GDDragonObjects2.length = 0;
gdjs.MapCode.GDBG1Objects1.length = 0;
gdjs.MapCode.GDBG1Objects2.length = 0;
gdjs.MapCode.GDSpinObjects1.length = 0;
gdjs.MapCode.GDSpinObjects2.length = 0;
gdjs.MapCode.GDBackObjects1.length = 0;
gdjs.MapCode.GDBackObjects2.length = 0;
gdjs.MapCode.GDAObjects1.length = 0;
gdjs.MapCode.GDAObjects2.length = 0;
gdjs.MapCode.GDBObjects1.length = 0;
gdjs.MapCode.GDBObjects2.length = 0;
gdjs.MapCode.GDCObjects1.length = 0;
gdjs.MapCode.GDCObjects2.length = 0;
gdjs.MapCode.GDDObjects1.length = 0;
gdjs.MapCode.GDDObjects2.length = 0;
gdjs.MapCode.GDRetryObjects1.length = 0;
gdjs.MapCode.GDRetryObjects2.length = 0;

gdjs.MapCode.eventsList0(runtimeScene);
gdjs.MapCode.GDMapObjects1.length = 0;
gdjs.MapCode.GDMapObjects2.length = 0;
gdjs.MapCode.GDGameObjects1.length = 0;
gdjs.MapCode.GDGameObjects2.length = 0;
gdjs.MapCode.GDTower_9595peakObjects1.length = 0;
gdjs.MapCode.GDTower_9595peakObjects2.length = 0;
gdjs.MapCode.GDLockClosedObjects1.length = 0;
gdjs.MapCode.GDLockClosedObjects2.length = 0;
gdjs.MapCode.GDOtherObjects1.length = 0;
gdjs.MapCode.GDOtherObjects2.length = 0;
gdjs.MapCode.GDDragonObjects1.length = 0;
gdjs.MapCode.GDDragonObjects2.length = 0;
gdjs.MapCode.GDBG1Objects1.length = 0;
gdjs.MapCode.GDBG1Objects2.length = 0;
gdjs.MapCode.GDSpinObjects1.length = 0;
gdjs.MapCode.GDSpinObjects2.length = 0;
gdjs.MapCode.GDBackObjects1.length = 0;
gdjs.MapCode.GDBackObjects2.length = 0;
gdjs.MapCode.GDAObjects1.length = 0;
gdjs.MapCode.GDAObjects2.length = 0;
gdjs.MapCode.GDBObjects1.length = 0;
gdjs.MapCode.GDBObjects2.length = 0;
gdjs.MapCode.GDCObjects1.length = 0;
gdjs.MapCode.GDCObjects2.length = 0;
gdjs.MapCode.GDDObjects1.length = 0;
gdjs.MapCode.GDDObjects2.length = 0;
gdjs.MapCode.GDRetryObjects1.length = 0;
gdjs.MapCode.GDRetryObjects2.length = 0;


return;

}

gdjs['MapCode'] = gdjs.MapCode;
