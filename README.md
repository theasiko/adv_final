# Body size estimation
YouTube - https://youtu.be/iC6uVhEEwoQ?si=Ui_44xKsi_cohIvz

Introduction 

Problem 

In the fashion industry, accurate assessment of body size estimation is of paramount importance to both consumers and retailers. With the growing popularity of online shopping, people are often faced with the challenge of finding clothing that fits well and matches their figure. Inappropriate clothing not only causes customer dissatisfaction, but also contributes to a high rate of returns, which creates additional logistical and financial challenges for retailers. Moreover, the fashion industry's impact on the environment is significant, with textile production, manufacturing, and waste contributing to pollution and resource depletion.  

Literature review with links (another solutions) 

1. Guo, Z., Zhu, Z., Li, Y., Cao, S., Chen, H., & Wang, G. (2023). AI Assisted Fashion Design: A Review. IEEE Access. 

Recent advancements in AI and machine learning have revolutionized the fashion industry. Computer vision algorithms accurately detect fashion items, aiding trend analysis and consumer understanding. GAN-based models enable efficient generation of new clothing designs, while recommendation systems offer personalized suggestions based on user preferences. Multimodal integration facilitates efficient garment creation, with models utilizing text and visuals. 

To address challenges in the fashion industry, focus on enhancing data accessibility by developing open-source, diverse fashion datasets. Additionally, continuously optimize algorithms for faster synthesis and leverage hardware advancements. Strengthen research efforts to integrate multimodal inputs effectively, prioritize developing interpretable AI systems, and foster collaboration between designers and AI to enhance creativity and user trust. 

2. Khanna, A. (2023, November 7). Council post: Why the fashion industry can’t ignore AI: Five key trends to watch. Forbes. https://www.forbes.com/sites/forbestechcouncil/2023/11/06/why-the-fashion-industry-cant-ignore-ai-five-key-trends-to-watch/?sh=6a334f2e6475 

The integration of AI into the fashion industry has revolutionized various aspects, including personalized styling, sustainability efforts, design creativity, trend forecasting, and customer experience enhancement. Solutions encompass leveraging AI for personalized recommendations, optimizing supply chains to reduce waste, utilizing AI in trend analysis for informed decision-making, and addressing virtual sizing issues through AI-powered tools. As demonstrated by recent innovations like AI Fashion Week and AI smart glasses, the future of fashion lies in embracing AI to cater to evolving consumer preferences and drive creative and sustainable practices. 

3. Balani, A. (2023, July 18). Artificial intelligence can assist fashion industry in cutting down fashion waste. Times of India Blog. https://timesofindia.indiatimes.com/blogs/voices/artificial-intelligence-can-assist-fashion-industry-in-cutting-down-fashion-waste/ 

The apparel industry's environmental impact is significant, but AI offers solutions. AI enables demand forecasting, production optimization, and virtual sampling to reduce material waste. It supports circular fashion by repurposing textile waste and enhances personalized recommendations, virtual try-ons, and design assistance. Additionally, AI aids in inventory management, sustainable materials selection, and supply chain optimization, all contributing to waste reduction. Open-source AI tools like Stability AI make implementation affordable, but success requires a nimble supply chain. However, meaningful impact relies on combining AI with sustainable practices and responsible decision-making. 

4. Sachdeva, N. (2023a, November 22). The future of personalized shopping: Virtual clothes try-on using ai. Custom Software Engineering Services. https://insights.daffodilsw.com/blog/virtual-clothes-try-on-using-ai 

Virtual Try-On (VTO) technology revolutionizes online shopping by providing users with a realistic preview of clothing and accessories before purchase, addressing uncertainties and enhancing the overall shopping experience. By leveraging AI, computer vision, and augmented reality, VTO offers personalized virtual try-on experiences, reducing purchase uncertainty, mitigating returns, and increasing customer engagement and satisfaction. Integrated seamlessly into e-commerce platforms, VTO also provides valuable data insights for brands, leading to higher conversion rates and positive brand perception. Looking ahead, the future of VTO promises expanded product choices, realistic previews, social shopping experiences, improved size and fit confidence, and in-home trials with AR, empowering brands to redefine the digital retail experience and build stronger connections with customers. 

Current work (description of the work) 

Accurately estimating body sizes is crucial in both online fashion retail and traditional retail settings, as it aids in reducing returns and enhancing customer satisfaction. Our ongoing project aims to develop a specialized body size estimation system tailored for fashion purposes. To achieve this, we are collecting diverse and qualitative data by analyzing customer reviews from a variety of online stores. Our solution utilizes Convolutional Neural Networks (CNNs), a powerful deep learning architecture, trained on labeled datasets to precisely estimate body sizes based on the information provided in customer reviews. 

Data and Methods 

Information about the data 

For this research, a comprehensive dataset was meticulously compiled from diverse online retail platforms, encompassing a spectrum of consumer reviews. Specifically, the dataset comprises photographs depicting women's reviews across a range of apparel sizes, including XS, S, M, L, and XL. Each size category was systematically represented by a collection of 50 meticulously curated photographs, meticulously selected to ensure a balanced and representative sample. Hence, we have collected 250 photos in total. Moreover, to standardize the dataset and facilitate consistent analysis, all images were uniformly cropped to adhere to a 3:4 aspect ratio. 

![(Pic 1-2. Example of data for training)](https://github.com/theasiko/adv_final/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-06%20205034.png)

Description of the ML/DL models 

In our project, we used convolutional neural networks (CNNs), a powerful class of deep learning models, to solve the problem of body size estimation for online shopping. CNNs are particularly well suited for image analysis tasks due to their ability to automatically learn hierarchical representations of visual features. 

 
Conv2D layers perform convolution operations on input images, applying learnable filters to extract spatial features. We used multiple Conv2D layers to progressively capture increasingly abstract features from the input images.     

 MaxPooling2D, following each Conv2D layer, we incorporated MaxPooling2D layers to down sample the feature maps, reducing spatial dimensions while retaining the most relevant information. 

Once the feature maps were sufficiently processed, we flattened them into a vector format using the Flatten layer, preparing the data for input into densely connected layers. 

Fully connected layers received the flattened feature vectors as input and performed classification based on the learned features. We utilized Dense layers with activation functions to produce the final output predictions. 

During the training process, we monitored the performance of our model on both the training and validation datasets. We recorded training and validation metrics, such as loss and accuracy, and stored them in log files for analysis. This allowed us to track the progress of the model's training and identify potential issues, such as overfitting. 

To prevent overfitting, we employed early stopping, a technique where training is halted if the performance on the validation dataset fails to improve for a certain number of epochs. This helps ensure that the model generalizes well to unseen data and avoids memorizing the training examples. 

Furthermore, we organized our data into batches and split them into training, validation, and test sets. This allowed us to efficiently train the model on mini-batches of data, validate its performance on unseen data, and finally evaluate its effectiveness on a separate test set, ensuring the robustness of our approach. Our neural network was specifically used in the process of analyzing uploaded data to website: when uploading photo, when network analyze it, and giving back results with the most suitable size. 

![(Pic 3-4. Plots of results)](https://github.com/theasiko/adv_final/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-06%20205448.png)
![(Pic 5. Result on the website)](https://github.com/theasiko/adv_final/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-06%20205602.png)

Throughout the training process, we observed a gradual improvement in accuracy and a decrease in loss. This indicates that our neural network was successful in learning from the data and making accurate predictions. The achieved accuracy levels demonstrate the effectiveness of our approach in accurately estimating clothing sizes from photo reviews. 

We successfully integrated the trained neural network with a website interface, allowing users to access the body size estimation system online. This integration enhances the usability and accessibility of our solution for individuals shopping for clothing online. 

To showcase the capabilities of our neural network, we implemented a camera feature during our work. This allowed us to demonstrate real-time predictions and validate the accuracy of our model. The implementation of the camera feature further illustrates the practical application of our research in real-world scenarios. 

Our primary objective was to assess the accuracy of the neural network in predicting clothing sizes from photo reviews. The main focus of our research was to determine whether our neural network could accurately predict clothing sizes from photo reviews, which was successfully achieved. 

Discussion 

Critical review of results 

One notable strength is the observed gradual improvement in accuracy and decrease in loss during the training process. This indicates that the neural network effectively learned from the data and made accurate predictions, showcasing the model's capability to accurately estimate clothing sizes from photo reviews. Additionally, the successful integration of the trained neural network with a website interface enhances the accessibility and usability of the solution for online shoppers, addressing a significant need in the fashion industry. 

The implementation of a camera feature to showcase real-time predictions further highlights the practical application of the research in real-world scenarios, adding credibility to the findings. Moreover, the primary objective of accurately predicting clothing sizes from photo reviews was met, affirming the efficacy of the neural network approach. 

However, there are also some weaknesses and limitations in the research that warrant consideration. Currently, our project is limited to recognizing women's body sizes. To broaden the scope and inclusivity of our solution, we aim to incorporate men's size estimation in future iterations. 

Users may encounter confusion when uploading photos to our site due to the requirement for a specific aspect ratio (3:4). To mitigate this issue, we plan to implement a cropping feature. Alternatively, we may explore training our model to accommodate images of varying sizes. 

One of the primary weaknesses of our project is the lack of a comprehensive dataset during the model training phase. This limitation can lead to inaccuracies in size recognition and undermine the overall effectiveness of our solution. Addressing this issue requires sourcing and curating a more extensive and diverse dataset to train our model effectively. Due to the limitations of the dataset and model training, the accuracy and clarity of size recognition may be compromised. Users may experience inconsistencies or inaccuracies in the estimated body sizes, impacting their confidence in the recommendations provided by our neural network. 

Next steps  

In addition to our current efforts, we plan to expand our dataset to include photos of men's clothing reviews, thereby broadening the applicability of our body size estimation system. 

Compare the developed model with traditional size charts and other AI-powered systems to identify strengths and weaknesses. 

Gather user feedback through surveys or usability tests to understand usability and acceptance. 

Address the scalability of the system and its integration into real-world settings, considering computational resources and deployment infrastructure. 

Discuss ethical implications related to data privacy, consent, and potential biases in model predictions. 

Identify future research directions such as improving model interpretability and exploring alternative data sources. 

Our efforts align with broader sustainability goals by promoting more efficient resource utilization and reducing environmental impact. Through rigorous evaluation, comparison with existing solutions, and consideration of user feedback and ethical implications, we strive to provide a robust and responsible solution that enhances the overall shopping experience while addressing industry challenges. 

 

 

 

 

Sources 

 

AI Clothing Detection: Use cases for fashion and e-commerce – PostIndustria. (n.d.). https://postindustria.com/ai-clothing-detection-use-cases-for-fashion-and-e-commerce/  

 

Balani, A. (2023, July 18). Artificial intelligence can assist fashion industry in cutting down fashion waste. Times of India Blog. https://timesofindia.indiatimes.com/blogs/voices/artificial-intelligence-can-assist-fashion-industry-in-cutting-down-fashion-waste/ 

 

Guo, Z., Zhu, Z., Li, Y., Cao, S., Chen, H., & Wang, G. (2023). AI Assisted Fashion Design: A Review. IEEE Access. 

 

Khanna, A. (2023, November 7). Council post: Why the fashion industry can’t ignore AI: Five key trends to watch. Forbes. https://www.forbes.com/sites/forbestechcouncil/2023/11/06/why-the-fashion-industry-cant-ignore-ai-five-key-trends-to-watch/?sh=6a334f2e6475 

 

LeewayHertz - AI Development Company. https://www.leewayhertz.com/ai-use-cases-in-fashion/#:~:text=Personalized%20fashion%20advice%3A%20AI%2Ddriven,24%2F7%20personal%20stylist%20experience.bloomreach.com. (n.d.). Artificial Intelligence in retail: fashion Bloomreach. https://www.bloomreach.com/en/blog/2021/impact-artificial-intelligence-online-fashion- retail  

Rincon, L. (2023, June 14). Virtually try on clothes with a new AI shopping feature. Google. https://blog.google/products/shopping/ai-virtual-try-on-google-shopping/  

 

Sachdeva, N. (2023a, November 22). The future of personalized shopping: Virtual clothes try-on using ai. Custom Software Engineering Services. https://insights.daffodilsw.com/blog/virtual-clothes-try-on-using-ai 

 

Takyar, A. (2023, December 8). Fashion forward: Use cases and benefits of AI in fashion.  

 
