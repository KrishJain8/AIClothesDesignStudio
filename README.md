# AI Clothes Design Studio using Azure OpenAI and Dalle Model

This program allows users to design their own custom clothing, by entering a prompt and selecting various parameters such as the article of clothing, material, and colors, and generate the image using Microsoft OpenAI Dall-E.

**Summary:**
This architecture leverages Azure OpenAI's Dall-E model to empower users to design custom clothing through a straightforward web interface. It seamlessly integrates frontend technologies like HTML, CSS, and JavaScript with Azure's powerful AI capabilities, providing a user-friendly and innovative solution for clothing design enthusiasts.
**Sample Prompt Text** Design a vibrant futuristic streetwear jacket inspired by the neon lights of Tokyo at night. Incorporating abstract geometric patterns and a mix of synthetci fabric that gives a subtle glow

![image](https://github.com/user-attachments/assets/54da9357-32ae-4e9b-9879-86a9574d829b)

**Demo Video** https://github.com/KrishJain8/AIClothesDesignStudio/raw/main/AIClothesDesignDemoVide.mp4

**Components**

These are the key technologies used for this technical content review and research:

- Azure OpenAI
- Dall-E3 Azure OpenAI Model
- HTML
- CSS
- JavaScript

**Azure OpenAI and Dall-E AI Model**

- Register for Azure Open AI: https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview
- Once approved, create Azure OpenAI resource in the Azure portal.
- Select the region you live in.
- Once the OpenAI resource is created, go to OpenAI studio.
- Create a Dall-E deployment inside the resource.
- Select the appropriate Dall-E model to use.
- Get the endpoint and key from the Dall-E resource in the OpenAI Studio under Deployments and use that to be called in the code as shown below. Replace _x_ with the endpoint and key.

```
var url = 'https://xx.api.cognitive.microsoft.com/openai/deployments/xx/images/generations?api-version=2024-02-01';
var headers = {
    "api-key": "xxxxxxx",
    "Content-Type": "application/json"
};
```

See here for more information about creating an OpenAI Dall-E resource: https://learn.microsoft.com/en-us/azure/ai-services/openai/dall-e-quickstart?tabs=dalle3%2Ccommand-line&pivots=programming-language-studio

**Process Flow:**

**User Interaction:**
User fills out the HTML form with desired parameters (e.g., article of clothing, material, colors).
User submits the form.

**Backend Process (Azure OpenAI):**
JavaScript captures form data and sends a POST request to the Azure OpenAI Dall-E endpoint.
The Dall-E endpoint interprets the input parameters as a prompt.

**Image Generation:**
Dall-E generates a custom image based on the prompt (e.g., design of the specified clothing).
The generated image URL is included in the JSON response.

**Frontend Display:** 
JavaScript retrieves the image URL from the JSON response. It dynamically updates the <img> tag within the designated <div> on the webpage to display the AI-generated clothing design.


