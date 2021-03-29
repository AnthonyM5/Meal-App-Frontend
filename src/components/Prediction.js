import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'
console.log('Using TensorFlow backend: ', tf.getBackend());


class Prediction{

    async NewPrediction(){
    
    const img = document.getElementById('img');
    
    const model =  await mobilenet.load();
    const predictions =  await model.classify(img);
    return predictions
    }
}

export default Prediction
