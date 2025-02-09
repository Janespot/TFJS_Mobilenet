const PredictImg = async () => {
    // const img = document.getElementById('img');

    try {
        const img = document.getElementById('img');

        // Load the model.
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {

                let html = '<ul>';

                predictions.map(p => {
                    html += `
                    <li>
                        <p>Prediction: <b>${p.className}</b> - <b>${(p.probability*100).toFixed(2)}%</b></p>
                    </li>`;
                });

                html += '</ul>';

                document.getElementById("predict").innerHTML = html;
            });
        });
    } catch(error) {
        console.error(error);
    }
}

PredictImg();