const CLASSES = {
  0: 'L',
  1: 'M',
  2: 'S',
  3: 'XL',
  4: 'XS'
};

const MODEL_PATH = 'model.json';
const TOPK_PREDICTIONS = 5;

let my_model;

const demo = async () => {
  status('Loading model...');
  // Load the pre-trained model
  my_model = await tf.loadLayersModel(MODEL_PATH);
  status('');

  // Make a prediction through the locally hosted cat.jpg.
  const catElement = document.getElementById('cat');
  if (catElement.complete && catElement.naturalHeight !== 0) {
    predict(catElement);
    catElement.style.display = '';
  } else {
    catElement.onload = () => {
      predict(catElement);
      catElement.style.display = '';
    }
  }

  document.getElementById('file-container').style.display = '';
};

/**
 * Given an image element, makes a prediction through my_model returning the
 * probabilities of the top K classes.
 */
async function predict(imgElement) {
  status('Predicting...');
  // The first start time includes the time it takes to extract the image
  // from the HTML and preprocess it, in addition to the predict() call.
  const startTime1 = performance.now();

  // The second start time excludes the extraction and preprocessing and
  // includes only the predict() call.
  let startTime2;
  const logits = tf.tidy(() => {
    // Resize and preprocess the image
    const resizedImg = tf.image.resizeBilinear(tf.browser.fromPixels(imgElement), [336, 224]);
    const normalized = resizedImg.toFloat().div(tf.scalar(255.0));
    const batched = normalized.reshape([1, 336, 224, 3]);

    startTime2 = performance.now();
    // Make a prediction through my_model
    return my_model.predict(batched);
  });

  // Convert logits to probabilities and class names
  const classes = await getTopKClasses(logits, TOPK_PREDICTIONS);
  const totalTime1 = performance.now() - startTime1;
  const totalTime2 = performance.now() - startTime2;
  status(`Done in ${Math.floor(totalTime1)} ms ` +
      `(not including preprocessing: ${Math.floor(totalTime2)} ms)`);

  // Show the classes in the DOM
  showResults(imgElement, classes);
}

/**
 * Computes the probabilities of the topK classes given logits by computing
 * softmax to get probabilities and then sorting the probabilities.
 * @param logits Tensor representing the logits from my_model.
 * @param topK The number of top predictions to show.
 */
async function getTopKClasses(logits, topK) {
  const values = await logits.data();

  // Get the indices of the top K values
  const topkIndices = Array.from({ length: topK }, (_, i) => i)
    .sort((a, b) => values[b] - values[a]);

  // Extract class names and probabilities for the top K predictions
  const topClassesAndProbs = topkIndices.map(index => ({
    className: CLASSES[index],
    probability: values[index]
  }));

  return topClassesAndProbs;
}

//
// UI
//

function showResults(imgElement, classes) {
  const predictionContainer = document.createElement('div');
  predictionContainer.className = 'pred-container';

  const imgContainer = document.createElement('div');
  imgContainer.appendChild(imgElement);
  predictionContainer.appendChild(imgContainer);

  const probsContainer = document.createElement('div');
  classes.forEach(prediction => {
    const row = document.createElement('div');
    row.className = 'row';

    const classElement = document.createElement('div');
    classElement.className = 'cell';
    classElement.innerText = prediction.className;
    row.appendChild(classElement);

    const probsElement = document.createElement('div');
    probsElement.className = 'cell';
    probsElement.innerText = prediction.probability.toFixed(5);
    row.appendChild(probsElement);

    probsContainer.appendChild(row);
  });
  predictionContainer.appendChild(probsContainer);

  predictionsElement.insertBefore(predictionContainer, predictionsElement.firstChild);
}

// Event listener for file input
const filesElement = document.getElementById('files');
filesElement.addEventListener('change', evt => {
  let files = evt.target.files;
  // Display thumbnails & issue call to predict each image.
  for (let i = 0, f; f = files[i]; i++) {
    // Only process image files (skip non-image files)
    if (!f.type.match('image.*')) {
      continue;
    }
    let reader = new FileReader();
    // Closure to capture the file information
    reader.onload = e => {
      // Fill the image & call predict
      let img = document.createElement('img');
      img.src = e.target.result;
      img.width = 224;
      img.height = 336;
      img.onload = () => predict(img);
    };
    // Read in the image file as a data URL
    reader.readAsDataURL(f);
  }
});

// Display status messages
const demoStatusElement = document.getElementById('status');
const status = msg => demoStatusElement.innerText = msg;

// Display predictions
const predictionsElement = document.getElementById('predictions');

// Initialize the demo
demo(); 
