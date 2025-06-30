gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDTitle_9595txtObjects1= [];
gdjs.StartCode.GDTitle_9595txtObjects2= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDBGObjects1= [];
gdjs.StartCode.GDBGObjects2= [];
gdjs.StartCode.GDLoadObjects1= [];
gdjs.StartCode.GDLoadObjects2= [];
gdjs.StartCode.GDDragonObjects1= [];
gdjs.StartCode.GDDragonObjects2= [];
gdjs.StartCode.GDBG1Objects1= [];
gdjs.StartCode.GDBG1Objects2= [];
gdjs.StartCode.GDSpinObjects1= [];
gdjs.StartCode.GDSpinObjects2= [];
gdjs.StartCode.GDBackObjects1= [];
gdjs.StartCode.GDBackObjects2= [];
gdjs.StartCode.GDAObjects1= [];
gdjs.StartCode.GDAObjects2= [];
gdjs.StartCode.GDBObjects1= [];
gdjs.StartCode.GDBObjects2= [];
gdjs.StartCode.GDCObjects1= [];
gdjs.StartCode.GDCObjects2= [];
gdjs.StartCode.GDDObjects1= [];
gdjs.StartCode.GDDObjects2= [];
gdjs.StartCode.GDRetryObjects1= [];
gdjs.StartCode.GDRetryObjects2= [];


gdjs.StartCode.asyncCallback16818628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dragon"), gdjs.StartCode.GDDragonObjects2);
{for(var i = 0, len = gdjs.StartCode.GDDragonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDDragonObjects2[i].getBehavior("Animation").setAnimationName("Sitting");
}
}gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.StartCode.asyncCallback16818628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.asyncCallback16822492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.StartCode.asyncCallback16822492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.StartCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Load"), gdjs.StartCode.GDLoadObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "background-music-soft-corporate-345945.mp3", true, 40, 1);
}{for(var i = 0, len = gdjs.StartCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDBGObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.StartCode.GDLoadObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDLoadObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDStartObjects1[k] = gdjs.StartCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dragon"), gdjs.StartCode.GDDragonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartCode.GDStartObjects1);
{for(var i = 0, len = gdjs.StartCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartObjects1[i].getBehavior("Opacity").setOpacity(gdjs.StartCode.GDStartObjects1[i].getBehavior("Opacity").getOpacity() - (1));
}
}{for(var i = 0, len = gdjs.StartCode.GDDragonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDDragonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.StartCode.GDDragonObjects1[i].getBehavior("Opacity").getOpacity() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dragon"), gdjs.StartCode.GDDragonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDDragonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDDragonObjects1[i].getBehavior("Opacity").getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDDragonObjects1[k] = gdjs.StartCode.GDDragonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDDragonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.StartCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Load"), gdjs.StartCode.GDLoadObjects1);
{for(var i = 0, len = gdjs.StartCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.StartCode.GDBGObjects1[i].getBehavior("Opacity").getOpacity() + (1));
}
}{for(var i = 0, len = gdjs.StartCode.GDLoadObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDLoadObjects1[i].getBehavior("Opacity").setOpacity(gdjs.StartCode.GDLoadObjects1[i].getBehavior("Opacity").getOpacity() + (1));
}
}
{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDTitle_9595txtObjects1.length = 0;
gdjs.StartCode.GDTitle_9595txtObjects2.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDBGObjects1.length = 0;
gdjs.StartCode.GDBGObjects2.length = 0;
gdjs.StartCode.GDLoadObjects1.length = 0;
gdjs.StartCode.GDLoadObjects2.length = 0;
gdjs.StartCode.GDDragonObjects1.length = 0;
gdjs.StartCode.GDDragonObjects2.length = 0;
gdjs.StartCode.GDBG1Objects1.length = 0;
gdjs.StartCode.GDBG1Objects2.length = 0;
gdjs.StartCode.GDSpinObjects1.length = 0;
gdjs.StartCode.GDSpinObjects2.length = 0;
gdjs.StartCode.GDBackObjects1.length = 0;
gdjs.StartCode.GDBackObjects2.length = 0;
gdjs.StartCode.GDAObjects1.length = 0;
gdjs.StartCode.GDAObjects2.length = 0;
gdjs.StartCode.GDBObjects1.length = 0;
gdjs.StartCode.GDBObjects2.length = 0;
gdjs.StartCode.GDCObjects1.length = 0;
gdjs.StartCode.GDCObjects2.length = 0;
gdjs.StartCode.GDDObjects1.length = 0;
gdjs.StartCode.GDDObjects2.length = 0;
gdjs.StartCode.GDRetryObjects1.length = 0;
gdjs.StartCode.GDRetryObjects2.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDTitle_9595txtObjects1.length = 0;
gdjs.StartCode.GDTitle_9595txtObjects2.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDBGObjects1.length = 0;
gdjs.StartCode.GDBGObjects2.length = 0;
gdjs.StartCode.GDLoadObjects1.length = 0;
gdjs.StartCode.GDLoadObjects2.length = 0;
gdjs.StartCode.GDDragonObjects1.length = 0;
gdjs.StartCode.GDDragonObjects2.length = 0;
gdjs.StartCode.GDBG1Objects1.length = 0;
gdjs.StartCode.GDBG1Objects2.length = 0;
gdjs.StartCode.GDSpinObjects1.length = 0;
gdjs.StartCode.GDSpinObjects2.length = 0;
gdjs.StartCode.GDBackObjects1.length = 0;
gdjs.StartCode.GDBackObjects2.length = 0;
gdjs.StartCode.GDAObjects1.length = 0;
gdjs.StartCode.GDAObjects2.length = 0;
gdjs.StartCode.GDBObjects1.length = 0;
gdjs.StartCode.GDBObjects2.length = 0;
gdjs.StartCode.GDCObjects1.length = 0;
gdjs.StartCode.GDCObjects2.length = 0;
gdjs.StartCode.GDDObjects1.length = 0;
gdjs.StartCode.GDDObjects2.length = 0;
gdjs.StartCode.GDRetryObjects1.length = 0;
gdjs.StartCode.GDRetryObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
