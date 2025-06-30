gdjs.coming_32soonCode = {};
gdjs.coming_32soonCode.localVariables = [];
gdjs.coming_32soonCode.GDcoming_9595soonObjects1= [];
gdjs.coming_32soonCode.GDcoming_9595soonObjects2= [];
gdjs.coming_32soonCode.GDDragonObjects1= [];
gdjs.coming_32soonCode.GDDragonObjects2= [];
gdjs.coming_32soonCode.GDBG1Objects1= [];
gdjs.coming_32soonCode.GDBG1Objects2= [];
gdjs.coming_32soonCode.GDSpinObjects1= [];
gdjs.coming_32soonCode.GDSpinObjects2= [];
gdjs.coming_32soonCode.GDBackObjects1= [];
gdjs.coming_32soonCode.GDBackObjects2= [];
gdjs.coming_32soonCode.GDAObjects1= [];
gdjs.coming_32soonCode.GDAObjects2= [];
gdjs.coming_32soonCode.GDBObjects1= [];
gdjs.coming_32soonCode.GDBObjects2= [];
gdjs.coming_32soonCode.GDCObjects1= [];
gdjs.coming_32soonCode.GDCObjects2= [];
gdjs.coming_32soonCode.GDDObjects1= [];
gdjs.coming_32soonCode.GDDObjects2= [];
gdjs.coming_32soonCode.GDRetryObjects1= [];
gdjs.coming_32soonCode.GDRetryObjects2= [];


gdjs.coming_32soonCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.coming_32soonCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.coming_32soonCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.coming_32soonCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.coming_32soonCode.GDBackObjects1[k] = gdjs.coming_32soonCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.coming_32soonCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coming_soon"), gdjs.coming_32soonCode.GDcoming_9595soonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.coming_32soonCode.GDcoming_9595soonObjects1.length;i<l;++i) {
    if ( gdjs.coming_32soonCode.GDcoming_9595soonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.coming_32soonCode.GDcoming_9595soonObjects1[k] = gdjs.coming_32soonCode.GDcoming_9595soonObjects1[i];
        ++k;
    }
}
gdjs.coming_32soonCode.GDcoming_9595soonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


};

gdjs.coming_32soonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.coming_32soonCode.GDcoming_9595soonObjects1.length = 0;
gdjs.coming_32soonCode.GDcoming_9595soonObjects2.length = 0;
gdjs.coming_32soonCode.GDDragonObjects1.length = 0;
gdjs.coming_32soonCode.GDDragonObjects2.length = 0;
gdjs.coming_32soonCode.GDBG1Objects1.length = 0;
gdjs.coming_32soonCode.GDBG1Objects2.length = 0;
gdjs.coming_32soonCode.GDSpinObjects1.length = 0;
gdjs.coming_32soonCode.GDSpinObjects2.length = 0;
gdjs.coming_32soonCode.GDBackObjects1.length = 0;
gdjs.coming_32soonCode.GDBackObjects2.length = 0;
gdjs.coming_32soonCode.GDAObjects1.length = 0;
gdjs.coming_32soonCode.GDAObjects2.length = 0;
gdjs.coming_32soonCode.GDBObjects1.length = 0;
gdjs.coming_32soonCode.GDBObjects2.length = 0;
gdjs.coming_32soonCode.GDCObjects1.length = 0;
gdjs.coming_32soonCode.GDCObjects2.length = 0;
gdjs.coming_32soonCode.GDDObjects1.length = 0;
gdjs.coming_32soonCode.GDDObjects2.length = 0;
gdjs.coming_32soonCode.GDRetryObjects1.length = 0;
gdjs.coming_32soonCode.GDRetryObjects2.length = 0;

gdjs.coming_32soonCode.eventsList0(runtimeScene);
gdjs.coming_32soonCode.GDcoming_9595soonObjects1.length = 0;
gdjs.coming_32soonCode.GDcoming_9595soonObjects2.length = 0;
gdjs.coming_32soonCode.GDDragonObjects1.length = 0;
gdjs.coming_32soonCode.GDDragonObjects2.length = 0;
gdjs.coming_32soonCode.GDBG1Objects1.length = 0;
gdjs.coming_32soonCode.GDBG1Objects2.length = 0;
gdjs.coming_32soonCode.GDSpinObjects1.length = 0;
gdjs.coming_32soonCode.GDSpinObjects2.length = 0;
gdjs.coming_32soonCode.GDBackObjects1.length = 0;
gdjs.coming_32soonCode.GDBackObjects2.length = 0;
gdjs.coming_32soonCode.GDAObjects1.length = 0;
gdjs.coming_32soonCode.GDAObjects2.length = 0;
gdjs.coming_32soonCode.GDBObjects1.length = 0;
gdjs.coming_32soonCode.GDBObjects2.length = 0;
gdjs.coming_32soonCode.GDCObjects1.length = 0;
gdjs.coming_32soonCode.GDCObjects2.length = 0;
gdjs.coming_32soonCode.GDDObjects1.length = 0;
gdjs.coming_32soonCode.GDDObjects2.length = 0;
gdjs.coming_32soonCode.GDRetryObjects1.length = 0;
gdjs.coming_32soonCode.GDRetryObjects2.length = 0;


return;

}

gdjs['coming_32soonCode'] = gdjs.coming_32soonCode;
