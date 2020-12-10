import * as tf from '@tensorflow/tfjs';
console.log('Using TensorFlow backend: ', tf.getBackend());


class Prediction{
    async Prediction(){
    const mobilenet = require('@tensorflow-models/mobilenet');
    const img = document.getElementById('img');
    console.log(img)    
    const model =  await mobilenet.load();
    const predictions =  await model.classify(img);
    }
}

export default Prediction

