# office-ui-button
Test of office-ui-fabric-react button using Parcel

```
npm install
npm start
```

1. A browser should open to http://localhost:1234 and you should see the button.
1. Uncomment the theme code in index.tsx and reload the browser. 

Currently getting this error:
```
Uncaught TypeError: Cannot redefine property: ChoiceGroupOption
    at Function.defineProperty (<anonymous>)
    at office-ui-button.f69400ca.js:98379
    at Array.forEach (<anonymous>)
    at Object.parcelRequire.node_modules/office-ui-fabric-react/lib/index.js../ActivityItem (office-ui-button.f69400ca.js:98377)
    at newRequire (office-ui-button.f69400ca.js:49)
    at localRequire (office-ui-button.f69400ca.js:55)
    at Object.parcelRequire.index.tsx.react (office-ui-button.f69400ca.js:99201)
    at newRequire (office-ui-button.f69400ca.js:49)
    at office-ui-button.f69400ca.js:81
    at office-ui-button.f69400ca.js:107
(anonymous) @ office-ui-button.f69400ca.js:98379
parcelRequire.node_modules/office-ui-fabric-react/lib/index.js../ActivityItem @ office-ui-button.f69400ca.js:98377
newRequire @ office-ui-button.f69400ca.js:49
localRequire @ office-ui-button.f69400ca.js:55
parcelRequire.index.tsx.react @ office-ui-button.f69400ca.js:99201
newRequire @ office-ui-button.f69400ca.js:49
(anonymous) @ office-ui-button.f69400ca.js:81
(anonymous) @ office-ui-button.f69400ca.js:107
```
