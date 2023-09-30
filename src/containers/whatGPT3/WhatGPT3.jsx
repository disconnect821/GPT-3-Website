import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Language Translation"
        text="Break down language barriers and communicate with a global audience effortlessly. GPT-3 can translate text between multiple languages accurately and fluently."
      />

      <Feature
        title="Code Generation"
        text="Accelerate software development with GPT-3's code generation capabilities. It can assist in writing code snippets, solving coding challenges, and providing programming advice."
      />

      <Feature
        title="Virtual Assistants"
        text="Get assistance with everyday tasks by integrating GPT-3 into your virtual assistant. It can schedule appointments, answer questions, and provide personalized recommendations."
      />

      <Feature
        title="Medical Diagnostics"
        text="Enhance healthcare with GPT-3's diagnostic abilities. It can analyze medical data, assist in disease detection, and offer insights for medical professionals."
      />

      <Feature
        title="Creativity and Art"
        text="Unleash your creativity with GPT-3. It can help artists generate ideas, compose music, and even assist in creating visual artwork by generating descriptions."
      />
    </div>
  </div>
);

export default WhatGPT3;
