gdjs.SpinCode = {};
gdjs.SpinCode.localVariables = [];
gdjs.SpinCode.GDSpin_9595wheelObjects1= [];
gdjs.SpinCode.GDSpin_9595wheelObjects2= [];
gdjs.SpinCode.GDSpin_9595wheelObjects3= [];
gdjs.SpinCode.GDBuffArrow2Objects1= [];
gdjs.SpinCode.GDBuffArrow2Objects2= [];
gdjs.SpinCode.GDBuffArrow2Objects3= [];
gdjs.SpinCode.GDComing_9595soonObjects1= [];
gdjs.SpinCode.GDComing_9595soonObjects2= [];
gdjs.SpinCode.GDComing_9595soonObjects3= [];
gdjs.SpinCode.GDtouchObjects1= [];
gdjs.SpinCode.GDtouchObjects2= [];
gdjs.SpinCode.GDtouchObjects3= [];
gdjs.SpinCode.GDDragonObjects1= [];
gdjs.SpinCode.GDDragonObjects2= [];
gdjs.SpinCode.GDDragonObjects3= [];
gdjs.SpinCode.GDBG1Objects1= [];
gdjs.SpinCode.GDBG1Objects2= [];
gdjs.SpinCode.GDBG1Objects3= [];
gdjs.SpinCode.GDSpinObjects1= [];
gdjs.SpinCode.GDSpinObjects2= [];
gdjs.SpinCode.GDSpinObjects3= [];
gdjs.SpinCode.GDBackObjects1= [];
gdjs.SpinCode.GDBackObjects2= [];
gdjs.SpinCode.GDBackObjects3= [];
gdjs.SpinCode.GDAObjects1= [];
gdjs.SpinCode.GDAObjects2= [];
gdjs.SpinCode.GDAObjects3= [];
gdjs.SpinCode.GDBObjects1= [];
gdjs.SpinCode.GDBObjects2= [];
gdjs.SpinCode.GDBObjects3= [];
gdjs.SpinCode.GDCObjects1= [];
gdjs.SpinCode.GDCObjects2= [];
gdjs.SpinCode.GDCObjects3= [];
gdjs.SpinCode.GDDObjects1= [];
gdjs.SpinCode.GDDObjects2= [];
gdjs.SpinCode.GDDObjects3= [];
gdjs.SpinCode.GDRetryObjects1= [];
gdjs.SpinCode.GDRetryObjects2= [];
gdjs.SpinCode.GDRetryObjects3= [];


gdjs.SpinCode.asyncCallback16961508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Coming_soon"), gdjs.SpinCode.GDComing_9595soonObjects2);

{for(var i = 0, len = gdjs.SpinCode.GDComing_9595soonObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDComing_9595soonObjects2[i].getBehavior("Text").setText("Congratulations");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
for (const obj of gdjs.SpinCode.GDComing_9595soonObjects1) asyncObjectsList.addObject("Coming_soon", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SpinCode.asyncCallback16961508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.asyncCallback16966844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Coming_soon"), gdjs.SpinCode.GDComing_9595soonObjects2);

{for(var i = 0, len = gdjs.SpinCode.GDComing_9595soonObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDComing_9595soonObjects2[i].hide();
}
}gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
for (const obj of gdjs.SpinCode.GDComing_9595soonObjects1) asyncObjectsList.addObject("Coming_soon", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.SpinCode.asyncCallback16966844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.SpinCode.GDSpin_9595wheelObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].setAngle(30);
}
}}

}


};gdjs.SpinCode.asyncCallback16968500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects2);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].rotate(0, runtimeScene);
}
}
{ //Subevents
gdjs.SpinCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SpinCode.asyncCallback16968500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.SpinCode.GDSpin_9595wheelObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].setAngle(150);
}
}}

}


};gdjs.SpinCode.asyncCallback16969620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects2);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].rotate(0, runtimeScene);
}
}
{ //Subevents
gdjs.SpinCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SpinCode.asyncCallback16969620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.SpinCode.GDSpin_9595wheelObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].setAngle(212);
}
}}

}


};gdjs.SpinCode.asyncCallback16971876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects2);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].rotate(0, runtimeScene);
}
}
{ //Subevents
gdjs.SpinCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SpinCode.asyncCallback16971876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.SpinCode.GDSpin_9595wheelObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].setAngle(270);
}
}}

}


};gdjs.SpinCode.asyncCallback16973700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects2);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].rotate(0, runtimeScene);
}
}
{ //Subevents
gdjs.SpinCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SpinCode.asyncCallback16973700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.SpinCode.GDSpin_9595wheelObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].setAngle(330);
}
}}

}


};gdjs.SpinCode.asyncCallback16975372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpinCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects2);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects2.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects2[i].rotate(0, runtimeScene);
}
}
{ //Subevents
gdjs.SpinCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SpinCode.localVariables.length = 0;
}
gdjs.SpinCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpinCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SpinCode.asyncCallback16975372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpinCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SpinCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpinCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.SpinCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SpinCode.GDBackObjects1[k] = gdjs.SpinCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.SpinCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("touch"), gdjs.SpinCode.GDtouchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpinCode.GDtouchObjects1.length;i<l;++i) {
    if ( gdjs.SpinCode.GDtouchObjects1[i].isCollidingWithPoint((( gdjs.SpinCode.GDSpin_9595wheelObjects1.length === 0 ) ? 0 :gdjs.SpinCode.GDSpin_9595wheelObjects1[0].getPointX("Tower")), (( gdjs.SpinCode.GDSpin_9595wheelObjects1.length === 0 ) ? 0 :gdjs.SpinCode.GDSpin_9595wheelObjects1[0].getPointY("Tower"))) ) {
        isConditionTrue_0 = true;
        gdjs.SpinCode.GDtouchObjects1[k] = gdjs.SpinCode.GDtouchObjects1[i];
        ++k;
    }
}
gdjs.SpinCode.GDtouchObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coming_soon"), gdjs.SpinCode.GDComing_9595soonObjects1);
{for(var i = 0, len = gdjs.SpinCode.GDComing_9595soonObjects1.length ;i < len;++i) {
    gdjs.SpinCode.GDComing_9595soonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SpinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spin"), gdjs.SpinCode.GDSpinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpinCode.GDSpinObjects1.length;i<l;++i) {
    if ( gdjs.SpinCode.GDSpinObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SpinCode.GDSpinObjects1[k] = gdjs.SpinCode.GDSpinObjects1[i];
        ++k;
    }
}
gdjs.SpinCode.GDSpinObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16964820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, 5));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("touch"), gdjs.SpinCode.GDtouchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpinCode.GDtouchObjects1.length;i<l;++i) {
    if ( !(gdjs.SpinCode.GDtouchObjects1[i].isCollidingWithPoint((( gdjs.SpinCode.GDSpin_9595wheelObjects1.length === 0 ) ? 0 :gdjs.SpinCode.GDSpin_9595wheelObjects1[0].getPointX("Tower")), (( gdjs.SpinCode.GDSpin_9595wheelObjects1.length === 0 ) ? 0 :gdjs.SpinCode.GDSpin_9595wheelObjects1[0].getPointY("Tower")))) ) {
        isConditionTrue_0 = true;
        gdjs.SpinCode.GDtouchObjects1[k] = gdjs.SpinCode.GDtouchObjects1[i];
        ++k;
    }
}
gdjs.SpinCode.GDtouchObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16966084);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coming_soon"), gdjs.SpinCode.GDComing_9595soonObjects1);
{for(var i = 0, len = gdjs.SpinCode.GDComing_9595soonObjects1.length ;i < len;++i) {
    gdjs.SpinCode.GDComing_9595soonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SpinCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spin_wheel"), gdjs.SpinCode.GDSpin_9595wheelObjects1);
{for(var i = 0, len = gdjs.SpinCode.GDSpin_9595wheelObjects1.length ;i < len;++i) {
    gdjs.SpinCode.GDSpin_9595wheelObjects1[i].rotate(100, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16968428);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SpinCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16969748);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SpinCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16971804);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SpinCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16973628);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SpinCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16974924);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SpinCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coming_soon"), gdjs.SpinCode.GDComing_9595soonObjects1);
{for(var i = 0, len = gdjs.SpinCode.GDComing_9595soonObjects1.length ;i < len;++i) {
    gdjs.SpinCode.GDComing_9595soonObjects1[i].hide();
}
}}

}


};

gdjs.SpinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SpinCode.GDSpin_9595wheelObjects1.length = 0;
gdjs.SpinCode.GDSpin_9595wheelObjects2.length = 0;
gdjs.SpinCode.GDSpin_9595wheelObjects3.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects1.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects2.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects3.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects1.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects2.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects3.length = 0;
gdjs.SpinCode.GDtouchObjects1.length = 0;
gdjs.SpinCode.GDtouchObjects2.length = 0;
gdjs.SpinCode.GDtouchObjects3.length = 0;
gdjs.SpinCode.GDDragonObjects1.length = 0;
gdjs.SpinCode.GDDragonObjects2.length = 0;
gdjs.SpinCode.GDDragonObjects3.length = 0;
gdjs.SpinCode.GDBG1Objects1.length = 0;
gdjs.SpinCode.GDBG1Objects2.length = 0;
gdjs.SpinCode.GDBG1Objects3.length = 0;
gdjs.SpinCode.GDSpinObjects1.length = 0;
gdjs.SpinCode.GDSpinObjects2.length = 0;
gdjs.SpinCode.GDSpinObjects3.length = 0;
gdjs.SpinCode.GDBackObjects1.length = 0;
gdjs.SpinCode.GDBackObjects2.length = 0;
gdjs.SpinCode.GDBackObjects3.length = 0;
gdjs.SpinCode.GDAObjects1.length = 0;
gdjs.SpinCode.GDAObjects2.length = 0;
gdjs.SpinCode.GDAObjects3.length = 0;
gdjs.SpinCode.GDBObjects1.length = 0;
gdjs.SpinCode.GDBObjects2.length = 0;
gdjs.SpinCode.GDBObjects3.length = 0;
gdjs.SpinCode.GDCObjects1.length = 0;
gdjs.SpinCode.GDCObjects2.length = 0;
gdjs.SpinCode.GDCObjects3.length = 0;
gdjs.SpinCode.GDDObjects1.length = 0;
gdjs.SpinCode.GDDObjects2.length = 0;
gdjs.SpinCode.GDDObjects3.length = 0;
gdjs.SpinCode.GDRetryObjects1.length = 0;
gdjs.SpinCode.GDRetryObjects2.length = 0;
gdjs.SpinCode.GDRetryObjects3.length = 0;

gdjs.SpinCode.eventsList12(runtimeScene);
gdjs.SpinCode.GDSpin_9595wheelObjects1.length = 0;
gdjs.SpinCode.GDSpin_9595wheelObjects2.length = 0;
gdjs.SpinCode.GDSpin_9595wheelObjects3.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects1.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects2.length = 0;
gdjs.SpinCode.GDBuffArrow2Objects3.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects1.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects2.length = 0;
gdjs.SpinCode.GDComing_9595soonObjects3.length = 0;
gdjs.SpinCode.GDtouchObjects1.length = 0;
gdjs.SpinCode.GDtouchObjects2.length = 0;
gdjs.SpinCode.GDtouchObjects3.length = 0;
gdjs.SpinCode.GDDragonObjects1.length = 0;
gdjs.SpinCode.GDDragonObjects2.length = 0;
gdjs.SpinCode.GDDragonObjects3.length = 0;
gdjs.SpinCode.GDBG1Objects1.length = 0;
gdjs.SpinCode.GDBG1Objects2.length = 0;
gdjs.SpinCode.GDBG1Objects3.length = 0;
gdjs.SpinCode.GDSpinObjects1.length = 0;
gdjs.SpinCode.GDSpinObjects2.length = 0;
gdjs.SpinCode.GDSpinObjects3.length = 0;
gdjs.SpinCode.GDBackObjects1.length = 0;
gdjs.SpinCode.GDBackObjects2.length = 0;
gdjs.SpinCode.GDBackObjects3.length = 0;
gdjs.SpinCode.GDAObjects1.length = 0;
gdjs.SpinCode.GDAObjects2.length = 0;
gdjs.SpinCode.GDAObjects3.length = 0;
gdjs.SpinCode.GDBObjects1.length = 0;
gdjs.SpinCode.GDBObjects2.length = 0;
gdjs.SpinCode.GDBObjects3.length = 0;
gdjs.SpinCode.GDCObjects1.length = 0;
gdjs.SpinCode.GDCObjects2.length = 0;
gdjs.SpinCode.GDCObjects3.length = 0;
gdjs.SpinCode.GDDObjects1.length = 0;
gdjs.SpinCode.GDDObjects2.length = 0;
gdjs.SpinCode.GDDObjects3.length = 0;
gdjs.SpinCode.GDRetryObjects1.length = 0;
gdjs.SpinCode.GDRetryObjects2.length = 0;
gdjs.SpinCode.GDRetryObjects3.length = 0;


return;

}

gdjs['SpinCode'] = gdjs.SpinCode;
