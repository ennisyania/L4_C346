
// Exercise 1
// import React from 'react';
// import {View, Text} from 'react-native';
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style={{fontSize:24}}>
//           RP Values
//         </Text>
//         <Text style={{color: 'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{textAlign:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black', color:'white'}}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default Exercise1;

//Exercise 2
// import React from 'react';
// import {View,Text,StyleSheet} from 'react-native';
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black'
//   },
//
//   boxText: {
//     textAlign:'center',
//     color:'white',
//   },
//
//   title: {
//     fontWeight:'bold',
//   }
// })
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>
//             Who we are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our people</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our Campus</Text>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise2;

// Exercise 3A
// import React from 'react';
// import {StyleSheet,Text,View} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor:'powderblue'}]}>
//           Child One</Text>
//         <Text style={[styles.child, {backgroundColor:'skyblue'}]}>
//           Child Two</Text>
//         <Text style={[styles.child, {backgroundColor:'steelblue'}]}>
//           Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// Exercise 3B
// import React from 'react';
// import {StyleSheet,Text,View} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//   },
//
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1,
//   }
// })
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor:'powderblue'}]}>
//           Child One</Text>
//         <Text style={[styles.child, {backgroundColor:'skyblue'}]}>
//           Child Two</Text>
//         <Text style={[styles.child, {backgroundColor:'steelblue'}]}>
//           Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// Exercise 3C
// import React from 'react';
// import {StyleSheet,Text,View} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//   },
//
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1,
//   }
// })
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor:'powderblue'},{maxWidth:90}]}>
//           Child One</Text>
//         <Text style={[styles.child, {backgroundColor:'skyblue'}]}>
//           Child Two</Text>
//         <Text style={[styles.child, {backgroundColor:'steelblue'},{maxHeight:120}]}>
//           Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// Exercise 3D
// import React from 'react';
// import {StyleSheet,Text,View} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor:'powderblue', flex:1}]}>
//           Child One</Text>
//         <Text style={[styles.child, {backgroundColor:'skyblue', flex:2}]}>
//           Child Two</Text>
//         <Text style={[styles.child, {backgroundColor:'steelblue', flex:3}]}>
//           Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

//Exercise 3E
// import React from 'react';
// import {StyleSheet,Text,View} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//   },
//
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor:'powderblue'}]}>
//           Child One</Text>
//         <Text style={[styles.child, {backgroundColor:'skyblue'}]}>
//           Child Two</Text>
//         <Text style={[styles.child, {backgroundColor:'steelblue'}]}>
//           Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// Exercise 4
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const styles = StyleSheet.create({
  parent: {
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      marginTop:30,
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",

  },

  child: {
      width:80,
      height:80,
      marginTop: 30,
      justifyContent: "space-evenly",
      alignItems: "center",

  }
})

const Exercise4 = () => {
    return (
        <View style={[styles.parent,{marginTop: 50}]}>
            <View style={[styles.child, {backgroundColor: 'lightblue'}]}>
                <Text>
                    Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'teal'}]}>
                <Text>
                    Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'red'}]}>
                <Text>
                    Square 3</Text>
            </View>
        </View>
    )
}

export default Exercise4




