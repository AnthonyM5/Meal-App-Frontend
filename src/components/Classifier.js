import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import * as tf from '@tensorflow/tfjs';
// console.log('Using TensorFlow backend: ', tf.getBackend());


class Classifier {
  async NewPrediction(){
  const img = document.getElementById('img');

  // Load the model.
  const model = await cocoSsd.load();

  // Classify the image.
  const predictions = await model.detect(img);

  // console.log('Predictions: ', predictions[0].class);
  
  return predictions
  }
}

export default Classifier

