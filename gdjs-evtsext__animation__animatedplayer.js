
gdjs.evtsExt__Animation__AnimatedPlayer = gdjs.evtsExt__Animation__AnimatedPlayer || {};

/**
 * Behavior generated from Animated Player
 */
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer = class AnimatedPlayer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Top_down_Movement = behaviorData.Top_down_Movement !== undefined ? behaviorData.Top_down_Movement : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Top_down_Movement !== newBehaviorData.Top_down_Movement)
      this._behaviorData.Top_down_Movement = newBehaviorData.Top_down_Movement;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Top_down_Movement: this._behaviorData.Top_down_Movement,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Top_down_Movement !== undefined)
      this._behaviorData.Top_down_Movement = networkSyncData.props.Top_down_Movement;
  }

  // Properties:
  
  _getTop_down_Movement() {
    return this._behaviorData.Top_down_Movement !== undefined ? this._behaviorData.Top_down_Movement : "";
  }
  _setTop_down_Movement(newValue) {
    this._behaviorData.Top_down_Movement = newValue;
  }
}

/**
 * Shared data generated from Animated Player
 */
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.SharedData = class AnimatedPlayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Animation_AnimatedPlayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Animation_AnimatedPlayerSharedData = new gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.SharedData(
      initialData
    );
  }
  return instanceContainer._Animation_AnimatedPlayerSharedData;
}

// Methods:
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getXVelocity() > 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getXVelocity() < -(5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getYVelocity() > 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Walking Down");
}
}}

}


{

/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getYVelocity() < -(5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Walking Up");
}
}}

}


};gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getSpeed() >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}
{ //Subevents
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Top_down_Movement")).getSpeed() < 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Walking Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}}

}


};

gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Top_down_Movement": this._getTop_down_Movement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Animation"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Animation"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Animation::AnimatedPlayer", gdjs.evtsExt__Animation__AnimatedPlayer.AnimatedPlayer);
