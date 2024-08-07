# Generative Pre-Trained Transformer:

## Pre-Training Stage Implementation

A generalized Large Language Model which generates text resembling the syntactic and semantic pattern of the text corpus it is trained on, in this case TinyShakespeare dataset.
Based on the famous research paper _"**Attention is all you need**"_.
Used the OpenAI Decoder architecture to create a **6 layer Decoder** only Transformer based on **Self-Attention**.


The project uses the following concepts from other research papers to increase its perfomance - 
1. Resisual Networks (**Res-Net**) from Convolutional Neural Networks
2. Initialized 0th epoch neural network weights within a standard deviation inspired from **BERT**
3. Used concept of **PreNorm** (Normalising weights before performing Attention) from **Llama**
4. Introduced a **Dropout** of 0.2 to tackle overfitting


   
Link to PPT: https://github.com/scelly01/Shakespeare-GPT/blob/fa47d26955b26825d7cd98d6efd85a678f2efadc/GPT%20PPT.pdf
<img src="https://github.com/user-attachments/assets/204c16b9-7c4e-4b6a-b882-49d0cac231e5" width="400" />
<img src="https://github.com/user-attachments/assets/bf7b9010-944f-4f46-b191-a283948abe96" width="600" />




### Output:
![image](https://github.com/user-attachments/assets/093bad3f-8f28-42d8-bdf4-112cdb62a540)
![image](https://github.com/user-attachments/assets/bc30a9d3-92b0-4315-bfb7-eaadb80b0ee2)



