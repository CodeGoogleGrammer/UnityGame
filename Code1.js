
/********************************************************************
*
*
*                                      Galaxian clone GDevelop 5
*
*
*
**********************************************/

//Gdjs object 
gdjs.GalaxianCode = {};
gdjs.GalaxianCode.GDNewSpriteObjects1= [];
gdjs.GalaxianCode.GDNewSpriteObjects2= [];
gdjs.GalaxianCode.GDNewSpriteObjects3= [];
gdjs.GalaxianCode.GDBluePlayerShip1Objects1= [];
gdjs.GalaxianCode.GDBluePlayerShip1Objects2= [];
gdjs.GalaxianCode.GDBluePlayerShip1Objects3= [];
gdjs.GalaxianCode.GDGreenEnemy2Objects1= [];
gdjs.GalaxianCode.GDGreenEnemy2Objects2= [];
gdjs.GalaxianCode.GDGreenEnemy2Objects3= [];
gdjs.GalaxianCode.GDBlueUfoObjects1= [];
gdjs.GalaxianCode.GDBlueUfoObjects2= [];
gdjs.GalaxianCode.GDBlueUfoObjects3= [];


// Member variables

gdjs.GalaxianCode.conditionTrue_0 = {val:false};
gdjs.GalaxianCode.condition0IsTrue_0 = {val:false};
gdjs.GalaxianCode.condition1IsTrue_0 = {val:false};


gdjs.GalaxianCode.eventsList0 = function(runtimeScene) {

{


gdjs.GalaxianCode.condition0IsTrue_0.val = false;
{
gdjs.GalaxianCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GalaxianCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayerShip1"), gdjs.GalaxianCode.GDBluePlayerShip1Objects2);
{for(var i = 0, len = gdjs.GalaxianCode.GDBluePlayerShip1Objects2.length ;i < len;++i) {
    gdjs.GalaxianCode.GDBluePlayerShip1Objects2[i].setPosition(gdjs.GalaxianCode.GDBluePlayerShip1Objects2[i].getX() +2,gdjs.GalaxianCode.GDBluePlayerShip1Objects2[i].getY() +0);
}
}}

}


{


gdjs.GalaxianCode.condition0IsTrue_0.val = false;
{
gdjs.GalaxianCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GalaxianCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayerShip1"), gdjs.GalaxianCode.GDBluePlayerShip1Objects1);
{for(var i = 0, len = gdjs.GalaxianCode.GDBluePlayerShip1Objects1.length ;i < len;++i) {
    gdjs.GalaxianCode.GDBluePlayerShip1Objects1[i].setPosition(gdjs.GalaxianCode.GDBluePlayerShip1Objects1[i].getX() -2,gdjs.GalaxianCode.GDBluePlayerShip1Objects1[i].getY() +0);
}
}}

}


};gdjs.GalaxianCode.mapOfGDgdjs_46GalaxianCode_46GDBlueUfoObjects1Objects = Hashtable.newFrom({"BlueUfo": gdjs.GalaxianCode.GDBlueUfoObjects1});
gdjs.GalaxianCode.eventsList1 = function(runtimeScene) {

{


gdjs.GalaxianCode.condition0IsTrue_0.val = false;
{
gdjs.GalaxianCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GalaxianCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayerShip1"), gdjs.GalaxianCode.GDBluePlayerShip1Objects1);
gdjs.GalaxianCode.GDBlueUfoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GalaxianCode.mapOfGDgdjs_46GalaxianCode_46GDBlueUfoObjects1Objects, (( gdjs.GalaxianCode.GDBluePlayerShip1Objects1.length === 0 ) ? 0 :gdjs.GalaxianCode.GDBluePlayerShip1Objects1[0].getCenterXInScene()), (( gdjs.GalaxianCode.GDBluePlayerShip1Objects1.length === 0 ) ? 0 :gdjs.GalaxianCode.GDBluePlayerShip1Objects1[0].getCenterYInScene()) + 10, "");
}{for(var i = 0, len = gdjs.GalaxianCode.GDBlueUfoObjects1.length ;i < len;++i) {
    gdjs.GalaxianCode.GDBlueUfoObjects1[i].setPosition(gdjs.GalaxianCode.GDBlueUfoObjects1[i].getX() +0,gdjs.GalaxianCode.GDBlueUfoObjects1[i].getY() +2);
}
}}

}


};gdjs.GalaxianCode.eventsList2 = function(runtimeScene) {

{


{
}

}


{


{
}

}


};gdjs.GalaxianCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.GalaxianCode.eventsList0(runtimeScene);
}


{


gdjs.GalaxianCode.eventsList1(runtimeScene);
}


{


gdjs.GalaxianCode.eventsList2(runtimeScene);
}


};

gdjs.GalaxianCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GalaxianCode.GDNewSpriteObjects1.length = 0;
gdjs.GalaxianCode.GDNewSpriteObjects2.length = 0;
gdjs.GalaxianCode.GDNewSpriteObjects3.length = 0;
gdjs.GalaxianCode.GDBluePlayerShip1Objects1.length = 0;
gdjs.GalaxianCode.GDBluePlayerShip1Objects2.length = 0;
gdjs.GalaxianCode.GDBluePlayerShip1Objects3.length = 0;
gdjs.GalaxianCode.GDGreenEnemy2Objects1.length = 0;
gdjs.GalaxianCode.GDGreenEnemy2Objects2.length = 0;
gdjs.GalaxianCode.GDGreenEnemy2Objects3.length = 0;
gdjs.GalaxianCode.GDBlueUfoObjects1.length = 0;
gdjs.GalaxianCode.GDBlueUfoObjects2.length = 0;
gdjs.GalaxianCode.GDBlueUfoObjects3.length = 0;

gdjs.GalaxianCode.eventsList3(runtimeScene);
return;

}

gdjs['GalaxianCode'] = gdjs.GalaxianCode;
