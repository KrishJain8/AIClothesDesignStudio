# DALLE
*screenshot of completed parameters entered + designed clothing*

This program allows users to design their own custom clothing, by entering a prompt and selecting various parameters such as the article of clothing, material, and colors, and generate the image using Microsoft OpenAI Dall-E.

*insert screenshot of parameter choices for one parameter*

**Components**

These are the key technologies used for this technical content review and research:

- Azure OpenAI
- Dall-E 3 AI Model
- HTML
- CSS
- JavaScript

**Process Flow**
- An HTML form captures user-inputted parameters for custom clothing requests.
- Upon submission, the form transmits these parameters to an Azure OpenAI Dall-E endpoint.
- The endpoint interprets the input as a prompt for generating an AI-generated image.
- The JSON response from the endpoint contains the URL of the generated image.
- This URL is extracted and displayed within an <img> container **<div>** element on the web page.

Scenario details

This solution helps users to use AI to explore their imagination and design clothing of any kind.


**Azure OpenAI and Dall-E AI Model**

- Register for Azure Open AI: https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview
- Once approved, create Azure OpenAI resource in the Azure portal.
- Select the region you live in.
- Once the OpenAI resource is created, go to OpenAI studio.
- Create a Dall-E deployment inside the resource.
- Select the appropriate Dall-E model to use.

See here for more information about creating an OpenAI Dall-E resource: https://learn.microsoft.com/en-us/azure/ai-services/openai/dall-e-quickstart?tabs=dalle3%2Ccommand-line&pivots=programming-language-studio
