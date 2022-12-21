
if (typeof gdjs.evtsExt__InputValidation__CountNewLines !== "undefined") {
  gdjs.evtsExt__InputValidation__CountNewLines.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InputValidation__CountNewLines = {};

gdjs.evtsExt__InputValidation__CountNewLines.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputValidation__CountNewLines.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputValidation__CountNewLines.userFunc0xa3f5f0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("text").split(/\r\n|\r|\n/).length;
};
gdjs.evtsExt__InputValidation__CountNewLines.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputValidation__CountNewLines.userFunc0xa3f5f0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputValidation__CountNewLines.func = function(runtimeScene, text, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
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
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InputValidation__CountNewLines.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__InputValidation__CountNewLines.registeredGdjsCallbacks = [];