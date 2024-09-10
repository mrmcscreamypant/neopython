gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGhostObjects1= [];
gdjs.Untitled_32sceneCode.GDGhostObjects2= [];
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1= [];
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects2= [];
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1= [];
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Untitled_32sceneCode.GDGroundObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1120, 1120, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGroundObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("GhostSpawner"), gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGhostObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").getAnimationName() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGhostObjects1[k] = gdjs.Untitled_32sceneCode.GDGhostObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGhostObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(10, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").setAnimationName("Desappear");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].activateBehavior("Pathfinding", false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PixelHeartBar"), gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1[i].SetValue((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGhostObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGhostObjects1[k] = gdjs.Untitled_32sceneCode.GDGhostObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGhostObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").getAnimationName() == "Desappear" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGhostObjects1[k] = gdjs.Untitled_32sceneCode.GDGhostObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGhostObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPixelHeartBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostSpawnerObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
