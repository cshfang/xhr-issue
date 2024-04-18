import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const url = 'http://127.0.0.1:3000';
export default function App() {
  const upload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.upload.addEventListener('progress', event => {
      console.log('Event: Upload progress', event);
    });
    xhr.upload.onprogress = event => {
      console.log('Upload progress', event);
    };
    xhr.onprogress = event => {
      console.log('Progress', event);
    };
    xhr.onload = event => {
      console.log('Completed', event);
    };
    xhr.send('just a string');
  };
  return (
    <View style={styles.container}>
      <Button title="Upload" onPress={upload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//  LOG  Event: Upload progress {"isTrusted": false, "lengthComputable": true, "loaded": 13, "total": 13}
//  LOG  Upload progress {"isTrusted": false, "lengthComputable": true, "loaded": 13, "total": 13}
//  LOG  Progress {"isTrusted": false, "lengthComputable": false, "loaded": 13, "total": -1}
//  LOG  Completed {"isTrusted": false}
