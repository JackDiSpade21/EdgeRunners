gdjs.InizioCode = {};
gdjs.InizioCode.GDlogoObjects1= [];
gdjs.InizioCode.GDlogoObjects2= [];
gdjs.InizioCode.GDlogoObjects3= [];
gdjs.InizioCode.GDlogoObjects4= [];
gdjs.InizioCode.GDusrnObjects1= [];
gdjs.InizioCode.GDusrnObjects2= [];
gdjs.InizioCode.GDusrnObjects3= [];
gdjs.InizioCode.GDusrnObjects4= [];
gdjs.InizioCode.GDHOMEObjects1= [];
gdjs.InizioCode.GDHOMEObjects2= [];
gdjs.InizioCode.GDHOMEObjects3= [];
gdjs.InizioCode.GDHOMEObjects4= [];
gdjs.InizioCode.GDIstruzioniObjects1= [];
gdjs.InizioCode.GDIstruzioniObjects2= [];
gdjs.InizioCode.GDIstruzioniObjects3= [];
gdjs.InizioCode.GDIstruzioniObjects4= [];
gdjs.InizioCode.GDbentornatoObjects1= [];
gdjs.InizioCode.GDbentornatoObjects2= [];
gdjs.InizioCode.GDbentornatoObjects3= [];
gdjs.InizioCode.GDbentornatoObjects4= [];
gdjs.InizioCode.GDcambianomeObjects1= [];
gdjs.InizioCode.GDcambianomeObjects2= [];
gdjs.InizioCode.GDcambianomeObjects3= [];
gdjs.InizioCode.GDcambianomeObjects4= [];
gdjs.InizioCode.GDticketObjects1= [];
gdjs.InizioCode.GDticketObjects2= [];
gdjs.InizioCode.GDticketObjects3= [];
gdjs.InizioCode.GDticketObjects4= [];

gdjs.InizioCode.conditionTrue_0 = {val:false};
gdjs.InizioCode.condition0IsTrue_0 = {val:false};
gdjs.InizioCode.condition1IsTrue_0 = {val:false};
gdjs.InizioCode.condition2IsTrue_0 = {val:false};


gdjs.InizioCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

};gdjs.InizioCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("risultato").getChild("empty"), true);
}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).getChild("name").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(0).getChild("score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("players", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().get("ok"));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}}

}


{


const keyIteratorReference3 = runtimeScene.getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getVariables().get("doc");
const iterableReference3 = runtimeScene.getVariables().get("risultato").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("risultato").getChild("empty"), false);
}if (gdjs.InizioCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("data").getChild("name")));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("id")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("doc").getChild("data").getChild("score")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}}
}
}

}


};gdjs.InizioCode.asyncCallback9482084 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.InizioCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.InizioCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.InizioCode.asyncCallback9482084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InizioCode.eventsList3 = function(runtimeScene) {

{


gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InizioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.InizioCode.GDHOMEObjects1);
gdjs.copyArray(runtimeScene.getObjects("Istruzioni"), gdjs.InizioCode.GDIstruzioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.InizioCode.GDbentornatoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.InizioCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "home", "/EdgeRunners/endgame.html", gdjs.evtTools.window.getWindowInnerWidth(), (gdjs.evtTools.window.getWindowInnerHeight() / 2) - 60, 0, (gdjs.evtTools.window.getWindowInnerHeight() / 2) - 20, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{firebase.analytics();
}{firebase.performance();
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDIstruzioniObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDIstruzioniObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDlogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDHOMEObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDHOMEObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDticketObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDticketObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDticketObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDticketObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDticketObjects1[k] = gdjs.InizioCode.GDticketObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDticketObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.google.it", runtimeScene);
}{gdjs.evtTools.firebaseTools.analytics.log("click su ticket", "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.InizioCode.GDHOMEObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDHOMEObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDHOMEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDHOMEObjects1[k] = gdjs.InizioCode.GDHOMEObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDHOMEObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtTools.firebaseTools.analytics.log("avvio da home", "");
}{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "home", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.InizioCode.GDusrnObjects1.length === 0 ) ? "" :gdjs.InizioCode.GDusrnObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__InputValidation__ToAlphanumerical.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.InizioCode.GDHOMEObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDHOMEObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDHOMEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDHOMEObjects1[k] = gdjs.InizioCode.GDHOMEObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDHOMEObjects1.length = k;}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
gdjs.InizioCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "";
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.InizioCode.GDHOMEObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDHOMEObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDHOMEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDHOMEObjects1[k] = gdjs.InizioCode.GDHOMEObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDHOMEObjects1.length = k;}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
gdjs.InizioCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "";
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("ControlloUtente", "players");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("ControlloUtente", "name", "==", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("ControlloUtente", runtimeScene.getVariables().get("risultato"), runtimeScene.getVariables().get("stato"));
}
{ //Subevents
gdjs.InizioCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.InizioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InizioCode.GDlogoObjects1.length = 0;
gdjs.InizioCode.GDlogoObjects2.length = 0;
gdjs.InizioCode.GDlogoObjects3.length = 0;
gdjs.InizioCode.GDlogoObjects4.length = 0;
gdjs.InizioCode.GDusrnObjects1.length = 0;
gdjs.InizioCode.GDusrnObjects2.length = 0;
gdjs.InizioCode.GDusrnObjects3.length = 0;
gdjs.InizioCode.GDusrnObjects4.length = 0;
gdjs.InizioCode.GDHOMEObjects1.length = 0;
gdjs.InizioCode.GDHOMEObjects2.length = 0;
gdjs.InizioCode.GDHOMEObjects3.length = 0;
gdjs.InizioCode.GDHOMEObjects4.length = 0;
gdjs.InizioCode.GDIstruzioniObjects1.length = 0;
gdjs.InizioCode.GDIstruzioniObjects2.length = 0;
gdjs.InizioCode.GDIstruzioniObjects3.length = 0;
gdjs.InizioCode.GDIstruzioniObjects4.length = 0;
gdjs.InizioCode.GDbentornatoObjects1.length = 0;
gdjs.InizioCode.GDbentornatoObjects2.length = 0;
gdjs.InizioCode.GDbentornatoObjects3.length = 0;
gdjs.InizioCode.GDbentornatoObjects4.length = 0;
gdjs.InizioCode.GDcambianomeObjects1.length = 0;
gdjs.InizioCode.GDcambianomeObjects2.length = 0;
gdjs.InizioCode.GDcambianomeObjects3.length = 0;
gdjs.InizioCode.GDcambianomeObjects4.length = 0;
gdjs.InizioCode.GDticketObjects1.length = 0;
gdjs.InizioCode.GDticketObjects2.length = 0;
gdjs.InizioCode.GDticketObjects3.length = 0;
gdjs.InizioCode.GDticketObjects4.length = 0;

gdjs.InizioCode.eventsList3(runtimeScene);

return;

}

gdjs['InizioCode'] = gdjs.InizioCode;