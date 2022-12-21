
if (typeof gdjs.evtsExt__InputValidation__IsValidPhoneNumber !== "undefined") {
  gdjs.evtsExt__InputValidation__IsValidPhoneNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InputValidation__IsValidPhoneNumber = {};

gdjs.evtsExt__InputValidation__IsValidPhoneNumber.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputValidation__IsValidPhoneNumber.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputValidation__IsValidPhoneNumber.userFunc0x7bfd58 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const phone = eventsFunctionContext.getArgument("phone");
const n = /[0-9 -()+]+$/;

eventsFunctionContext.returnValue = n.test(phone);
};
gdjs.evtsExt__InputValidation__IsValidPhoneNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputValidation__IsValidPhoneNumber.userFunc0x7bfd58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputValidation__IsValidPhoneNumber.func = function(runtimeScene, phone, parentEventsFunctionContext) {
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
if (argName === "phone") return phone;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InputValidation__IsValidPhoneNumber.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InputValidation__IsValidPhoneNumber.registeredGdjsCallbacks = [];