async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

function generateImage() {
  var inputText = document.getElementById("input-text").value;
  var loadingMessage = document.getElementById("loading-message");
  loadingMessage.style.display = "block";

  query({ "inputs": inputText }).then((response) => {
    var imageURL = URL.createObjectURL(response);

    var image = document.createElement("img");
    image.src = imageURL;
    image.style.borderRadius = "10px";
    image.style.objectFit = "cover";

    var resultDiv = document.getElementById("result");
    while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
    }
    resultDiv.appendChild(image);

    var downloadButton = document.getElementById("download-button");
    downloadButton.style.display = "block";
    downloadButton.href = imageURL;
    downloadButton.download = "generated_image_lamp_ai.png";

    loadingMessage.style.display = "none";
  });
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    generateImage();
  }
  if ((event.metaKey || event.ctrlKey) && event.keyCode === 83) {
    var downloadButton = document.getElementById("download-button");
    downloadButton.click();
    event.preventDefault();
  }
}

function generateRandomDescription() {
  var descriptions = [
    "panda mad scientist mixing sparkling chemicals, digital art",
    "a stained glass window depicting a peaceful countryside landscape",
    "a futuristic cityscape at night with neon lights and flying cars",
    "a misty forest with tall trees and a flowing river",
    "a vintage carousel with brightly colored horses",
    "a bustling market with vendors selling fresh fruits and vegetables",
    "a peaceful lake surrounded by snow-capped mountains",
    "a close-up of a delicate flower blooming",
    "a majestic castle perched on a hilltop",
    "a group of hikers trekking through a scenic mountain trail",
    "a vibrant street art mural depicting a city skyline",
    "a serene sunset over a calm ocean",
    "a rustic cabin nestled in a picturesque countryside",
    "a flock of birds soaring across a clear blue sky",
    "a close-up of a deliciously prepared gourmet meal",
    "a solitary lighthouse standing tall on a rocky cliff",
    "a mesmerizing fireworks display lighting up the night sky",
    "a cozy reading nook with a comfortable armchair and bookshelf",
    "a picturesque vineyard with rows of lush grapevines",
    "a dramatic sunset over rolling hills and fields",
    "a whimsical hot air balloon floating above a colorful landscape",
    "a vibrant street market with lively music and diverse stalls",
    "a tranquil zen garden with perfectly manicured bonsai trees",
    "a lively concert with a crowd cheering and waving their hands",
    "a dramatic stormy sky with lightning bolts illuminating the clouds",
    "a charming cobblestone street lined with quaint cafes",
    "a playful family of dolphins swimming in crystal clear waters",
    "a grand ballroom filled with elegantly dressed guests dancing",
    "a peaceful countryside cottage surrounded by blooming flowers",
    "a thrilling roller coaster ride with loops and twists",
    "a surreal underwater world with vibrant coral reefs and exotic fish",
    "a majestic snow-capped peak towering over a frozen lake",
    "a bustling city intersection with cars and pedestrians",
    "a beautifully decorated wedding cake with intricate designs",
    "a thrilling ski slope with skiers gliding down the snowy slope",
    "a colorful hot air balloon festival with balloons of all shapes and sizes",
    "a serene yoga studio with soft lighting and calming music",
    "a captivating stage performance with talented actors and elaborate costumes",
    "a vibrant street parade with marching bands and colorful floats",
    "a tranquil boat ride along a winding river",
    "a breathtaking view of the Eiffel Tower at sunset"
  ];

  var randomIndex = Math.floor(Math.random() * descriptions.length);
  var randomDescription = descriptions[randomIndex];

  document.getElementById("input-text").value = randomDescription;
}

// ... Aggiungi altre funzioni se necessario ...
