"use strict";(self.webpackChunkClassic95=self.webpackChunkClassic95||[]).push([[492],{5484:function(e,t,n){var a=n(1151),r=n(7294),i=n(4090),c=n(1877);function o(e){const t=Object.assign({p:"p",a:"a",hr:"hr",h2:"h2",span:"span",pre:"pre",code:"code",h3:"h3"},(0,a.a)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Today, let's learn about screen transitions in react-native using react-navigation open source."),"\n",r.createElement(t.p,null,"First, you can follow it more easily if you turn on ",r.createElement(t.a,{href:"https://reactnavigation.org/docs/getting-started/"},"the official Document"),".\nIt's nice that blog posts are simply organized, but it's a good idea to always get into the habit of reading official documents."),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,{id:"1-create-a-project",style:{position:"relative"}},r.createElement(t.a,{href:"#1-create-a-project","aria-label":"1 create a project permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Create a project"),"\n",r.createElement(t.p,null,"First, let's create a project."),"\n",r.createElement(t.p,null,"Open the terminal on Mac or cmd on Windows to create a react-native project."),"\n",r.createElement(t.p,null,"I will create a react-native project named navigation."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"# npx react-native init {your project name}\nnpx react-native init navigation\n")),"\n",r.createElement(t.h2,{id:"2-install-react-navigation",style:{position:"relative"}},r.createElement(t.a,{href:"#2-install-react-navigation","aria-label":"2 install react navigation permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Install react-navigation"),"\n",r.createElement(t.p,null,"Let's install react-navigation along with the dependencies as stated in the official document."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"# cd {your project name}\ncd navigation\n\n# react-navigation/native and react-navigation/stack \n# dependencies(react-native-screens, react-native-safe-area-context) of react-navigation/native\n# dependency(react-native-gesture-handler) of react-navigation/stack\nyarn add @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler\n")),"\n",r.createElement(t.h3,{id:"2-1-ios-additional-actions",style:{position:"relative"}},r.createElement(t.a,{href:"#2-1-ios-additional-actions","aria-label":"2 1 ios additional actions permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-1. ios additional actions"),"\n",r.createElement(t.p,null,"iOS additional work For iOS, you need to perform a pod install to connect the modules you just installed."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"cd ios\npod install\ncd ..\n")),"\n",r.createElement(t.h3,{id:"2-2-android-additional-actions",style:{position:"relative"}},r.createElement(t.a,{href:"#2-2-android-additional-actions","aria-label":"2 2 android additional actions permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-2. android additional actions"),"\n",r.createElement(t.p,null,'For Android, you need to add the code below in "',"android/app/src/main/java/<project name>/MainActivity.java",'".'),"\n",r.createElement(t.p,null,"If you do not add the code below, an abnormal termination may occur when the app switches from the background to the foreground."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java"},"// android/app/src/main/java/<your project name>/MainActivity.java\n\npublic class MainActivity extends ReactActivity {\n  // ...\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(null);\n  }\n  // ...\n}\n")),"\n",r.createElement(t.h3,{id:"2-3-ios-android-common-tasks",style:{position:"relative"}},r.createElement(t.a,{href:"#2-3-ios-android-common-tasks","aria-label":"2 3 ios android common tasks permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-3. ios, android common tasks"),"\n",r.createElement(t.p,null,"Import react-native-gesture-handler, a dependency of @react-navigation/stack, from index.js."),"\n",r.createElement(t.p,null,"Otherwise, errors may occur during building or problems may occur when switching screens."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"// index.js\n\n// ...\n- import 'react-native-gesture-handler';\n// ...\n")),"\n",r.createElement(t.h2,{id:"3-create-a-test-screen",style:{position:"relative"}},r.createElement(t.a,{href:"#3-create-a-test-screen","aria-label":"3 create a test screen permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Create a test screen"),"\n",r.createElement(t.p,null,"The test screen will be structured as follows."),"\n",r.createElement(t.p,null,"After creating the src/screens folder, move App.tsx that was previously in the root directory."),"\n",r.createElement(t.p,null,"Likewise, create Navigator.tsx, Screen1.tsx, and Screen2.tsx files in the src/screens folder."),"\n",r.createElement(t.p,null,"Also, create a Navigation.ts file to declare the type of navigation after creating the types folder."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"📦src\n ┣ 📂screens\n ┃ ┣ 📜App.tsx\n ┃ ┣ 📜Navigator.tsx\n ┃ ┣ 📜Screen1.tsx\n ┃ ┗ 📜Screen2.tsx\n ┗ 📂types\n ┃ ┗ 📜Navigation.ts\n")),"\n",r.createElement(t.h3,{id:"3-1-navigationts",style:{position:"relative"}},r.createElement(t.a,{href:"#3-1-navigationts","aria-label":"3 1 navigationts permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-1. Navigation.ts"),"\n",r.createElement(t.p,null,"Before writing any other code, specify the types of screens that exist in Naivgation."),"\n",r.createElement(t.p,null,"Since we only have Screen1 and Screen2, we set the type as follows."),"\n",r.createElement(t.p,null,"The undefined value of Screen1: and Screen2: means that the type required to display each screen does not exist."),"\n",r.createElement(t.p,null,"I will explain this further in the next post, but will move on for now."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-ts"},"// src/types/Navigation.ts\n\nexport type NaviParamList = {\n\tScreen1: undefined;\n\tScreen2: undefined;\n};\n")),"\n",r.createElement(t.h3,{id:"3-2-screen1tsx",style:{position:"relative"}},r.createElement(t.a,{href:"#3-2-screen1tsx","aria-label":"3 2 screen1tsx permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-2. Screen1.tsx"),"\n",r.createElement(t.p,null,"There is nothing very difficult, but to add an explanation, in ",r.createElement(t.a,{href:"/en/posts/2023/09/react-native-react-navigation-1/#3-1-navigationts"},"3-1 above"),",\ndeclare NavigationProp by specifying the declared NaviParamList and the current screen name."),"\n",r.createElement(t.p,null,"After that, create a navigation variable that uses the NavigationProp type declared through the useNavigation hook."),"\n",r.createElement(t.p,null,"Attach an onPress event to the Move to Screen-2 button to execute the function to move to Screen-2."),"\n",r.createElement("img",{src:i.Z,style:{width:250,margin:"auto",display:"block",marginBottom:20},alt:"react-native navigation screen1"}),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},"// src/screens/Screen1.tsx\n\nimport { StackNavigationProp } from '@react-navigation/stack';\nimport React from 'react';\nimport { StyleSheet, Text, TouchableOpacity, View } from 'react-native';\nimport { NaviParamList } from '../types/Navigation';\nimport { useNavigation } from '@react-navigation/native';\n\nconst styles = StyleSheet.create({\n\tcontainer: {\n\t\tflex: 1,\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t},\n\tbutton: {\n\t\tpadding: 10,\n\t\tbackgroundColor: 'black',\n\t},\n\tbuttonLabel: {\n\t\tcolor: 'white',\n\t},\n});\n\ntype NavigationProp = StackNavigationProp<NaviParamList, 'Screen1'>;\n\nexport default function Screen1() {\n\tconst navigation = useNavigation<NavigationProp>();\n\n\treturn (\n\t\t<View style={styles.container}>\n\t\t\t<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>\n\t\t\t\t<Text style={styles.buttonLabel}>Screen-2로 이동</Text>\n\t\t\t</TouchableOpacity>\n\t\t</View>\n\t);\n}\n\n")),"\n",r.createElement(t.h3,{id:"3-3-screen2tsx",style:{position:"relative"}},r.createElement(t.a,{href:"#3-3-screen2tsx","aria-label":"3 3 screen2tsx permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-3. Screen2.tsx"),"\n",r.createElement(t.p,null,"It is the same as ",r.createElement(t.a,{href:"/en/posts/2023/09/react-native-react-navigation-1/#3-2-screen1tsx"},"Screen")," 1 above."),"\n",r.createElement("img",{src:c.Z,style:{width:250,margin:"auto",display:"block",marginBottom:20},alt:"react-native navigation screen2"}),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},"// src/screens/Screen2.tsx\n\nimport { StackNavigationProp } from '@react-navigation/stack';\nimport React from 'react';\nimport { StyleSheet, Text, TouchableOpacity, View } from 'react-native';\nimport { NaviParamList } from '../types/Navigation';\nimport { useNavigation } from '@react-navigation/native';\n\nconst styles = StyleSheet.create({\n\tcontainer: {\n\t\tflex: 1,\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t},\n\tbutton: {\n\t\tpadding: 10,\n\t\tbackgroundColor: 'black',\n\t},\n\tbuttonLabel: {\n\t\tcolor: 'white',\n\t},\n});\n\ntype NavigationProp = StackNavigationProp<NaviParamList, 'Screen2'>;\n\nexport default function Screen2() {\n\tconst navigation = useNavigation<NavigationProp>();\n\n\treturn (\n\t\t<View style={styles.container}>\n\t\t\t<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen1')}>\n\t\t\t\t<Text style={styles.buttonLabel}>Screen-1로 이동</Text>\n\t\t\t</TouchableOpacity>\n\t\t</View>\n\t);\n}\n")),"\n",r.createElement(t.h3,{id:"3-4-navigatortsx",style:{position:"relative"}},r.createElement(t.a,{href:"#3-4-navigatortsx","aria-label":"3 4 navigatortsx permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-4. Navigator.tsx"),"\n",r.createElement(t.p,null,"Now we need to create a navigator to connect Screen1 and Screen2 created above, right?"),"\n",r.createElement(t.p,null,"First, create a Stack object using createStackNavigator."),"\n",r.createElement(t.p,null,"After that, enter the screens you want to include like the code below."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},"// src/screens/Navigator.tsx\n\nimport React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { NaviParamList } from '../types/Navigation';\nimport Screen1 from './Screen1';\nimport Screen2 from './Screen2';\n\nconst Stack = createStackNavigator<NaviParamList>();\n\nexport default function Navigator() {\n\treturn (\n\t\t<Stack.Navigator>\n\t\t\t<Stack.Screen name=\"Screen1\" component={Screen1} />\n\t\t\t<Stack.Screen name=\"Screen2\" component={Screen2} />\n\t\t</Stack.Navigator>\n\t);\n}\n")),"\n",r.createElement(t.h3,{id:"3-5-edit-apptsx",style:{position:"relative"}},r.createElement(t.a,{href:"#3-5-edit-apptsx","aria-label":"3 5 edit apptsx permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-5. Edit App.tsx"),"\n",r.createElement(t.p,null,"Now, after deleting all the basic codes in App.tsx,\nwrap the Navigator created above with NavigationContainer as shown in the code below."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},"// src/screens/App.tsx\n\nimport { NavigationContainer } from '@react-navigation/native';\nimport React from 'react';\nimport Navigator from './Navigator';\n\nexport default function App() {\n\treturn (\n\t\t<NavigationContainer>\n\t\t\t<Navigator />\n\t\t</NavigationContainer>\n\t);\n}\n")),"\n",r.createElement(t.h3,{id:"3-6-edit-indexjs",style:{position:"relative"}},r.createElement(t.a,{href:"#3-6-edit-indexjs","aria-label":"3 6 edit indexjs permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-6. Edit index.js"),"\n",r.createElement(t.p,null,"Lastly, just edit the App.tsx import path in index.js and you're done!"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-diff"},"// ...\n\n- import App from './App';\n+ import App from './src/screens/App';\n\n// ...\n")),"\n",r.createElement(t.h2,{id:"4-run-proejct",style:{position:"relative"}},r.createElement(t.a,{href:"#4-run-proejct","aria-label":"4 run proejct permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. Run proejct"),"\n",r.createElement(t.p,null,"Now check whether the code written above works well."),"\n",r.createElement(t.p,null,"It'll probably work fine."),"\n",r.createElement(t.p,null,"Since version 0.7 of react-native, an error may occur while running a newly created project."),"\n",r.createElement(t.p,null,'The message "launchPackager.command" can\'t be opened appears.'),"\n",r.createElement(t.p,null,"In this case, please check ",r.createElement(t.a,{href:"/en/posts/2023/09/react-native-launch-packager-command-cant-be-opened"},"this post")," for a solution."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"# ios test\nyarn ios\n\n# android test\nyarn android\n")),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,{id:"whole-code",style:{position:"relative"}},r.createElement(t.a,{href:"#whole-code","aria-label":"whole code permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Whole Code"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://github.com/classic-95/react-navigation-practice/tree/main/navigation-1"},"https://github.com/classic-95/react-navigation-practice/tree/main/navigation-1")),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,{id:"organizing",style:{position:"relative"}},r.createElement(t.a,{href:"#organizing","aria-label":"organizing permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Organizing"),"\n",r.createElement(t.p,null,"Today, we learned how to switch screens using react-navigation by writing simple code."),"\n",r.createElement(t.p,null,"In the next post, what are the situations in which screen transition functions such as navigate, push, and replace of react-navigation are used?\nLet's find out how to use it."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},4888:function(e,t,n){n.a(e,(async function(e,a){try{n.r(t),n.d(t,{Head:function(){return C},default:function(){return k}});var r=n(5484),i=n(7294),c=n(394),o=n(1151),l=n(1006),s=n(4428),d=n(4764),m=n(7526),h=n(9878),p=n(6337),v=e([m]);m=(v.then?(await v)():v)[0];const g=c.default.div.withConfig({displayName:"PostTemplate__Container",componentId:"sc-1y3rc8p-0"})(["width:100%;"]),f=c.default.div.withConfig({displayName:"PostTemplate__BodyContainer",componentId:"sc-1y3rc8p-1"})(["width:100%;"]),S=c.default.div.withConfig({displayName:"PostTemplate__ContentContainer",componentId:"sc-1y3rc8p-2"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],s.Z.custom(1199),s.Z.custom(767)),y=c.default.h1.withConfig({displayName:"PostTemplate__TitleLabel",componentId:"sc-1y3rc8p-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],d.Z.viloet[6]),E=c.default.div.withConfig({displayName:"PostTemplate__DateContainer",componentId:"sc-1y3rc8p-4"})(["margin-bottom:12px;time{display:block;color:",";font-size:0.8em;}"],d.Z.gray[6]),b=c.default.div.withConfig({displayName:"PostTemplate__MdxContainer",componentId:"sc-1y3rc8p-5"})(["width:100%;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor{left:-15px;}}.anchor{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],d.Z.viloet[6],s.Z.custom(767),d.Z.viloet[6],d.Z.gray[5],d.Z.viloet[5],d.Z.viloet[7],d.Z.gray[2]),x=c.default.div.withConfig({displayName:"PostTemplate__FooterContainer",componentId:"sc-1y3rc8p-6"})(["width:100%;"]),w={h2:e=>i.createElement("div",{className:"h2-div"},i.createElement("h2",e)),code:m.Z};function N(e){let{data:t,children:n,location:a}=e;const r=(0,i.useMemo)((()=>a.pathname.includes("/en/")?"en":"ko"),[a.pathname]);return i.createElement(g,null,i.createElement(f,null,i.createElement(S,null,i.createElement(y,null,t.mdx.frontmatter.title),i.createElement(E,null,i.createElement("time",{dateTime:t.mdx.frontmatter.created_at},(0,l.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&i.createElement("time",{dateTime:t.mdx.frontmatter.updated_at},"ko"===r?"수정: ":"edited at ",(0,l.Z)(t.mdx.frontmatter.updated_at))),i.createElement(b,null,i.createElement(o.Z,{components:w},n)))),i.createElement(x,null,i.createElement(p.Z,null)))}function k(e){return i.createElement(N,e,i.createElement(r.Z,e))}const C=e=>{let{data:t}=e;return i.createElement(h.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};a()}catch(u){a(u)}}))},4090:function(e,t,n){t.Z=n.p+"static/navigation-1-0-0fd883f9d47337a6bc9f934dee7a254a.webp"},1877:function(e,t,n){t.Z=n.p+"static/navigation-1-1-70b933a30379aacec9ada47d2fc92da2.webp"}}]);
//# sourceMappingURL=component---src-components-post-post-template-tsx-content-file-path-contents-posts-en-2023-11-react-native-react-navigation-1-mdx-05a532a68c1bac6637be.js.map