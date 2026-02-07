import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";

const Project = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      cardTitle: "BTECH MAJOR PROJECT",
      title: " Building Integrated Photovoltaic",
      image: img1,
      description: "This study overviews BIPV, including its several varieties, benefits, challenges, and practical applications. By digging into the symbiotic link between architecture and renewable energy, the main topic addressed here is the challenge of matching the energy provided by BIPV systems to the building's energy consumption. To solve this, we intend to use available renewable energy resources within the facility to guarantee that total yearly energy consumption matches renewable energy generated, resulting in a Net Zero-Energy building status. We use BEopt (Building Energy Optimisation Tool) software to aid this endeavor. It equips students with the knowledge and abilities to assess residential building designs and provide financially advantageous efficiency plans to reach varying levels of whole-house energy savings along the route to zero net energy.",
      link: "https://ieeexplore.ieee.org/document/10719079" 
      
    },
    {
      cardTitle: "MTECH THESIS PROJECT",
      title: "Image Classification Using CNN on ARM Cortex-U FPGA Board",
      image: img2,
      description: "Image Classification using Quantized CNN on ARM Ethos-U (FPGA Platform)Designed and implemented a quantized Convolutional Neural Network (CNN) for efficient image classification on resource-constrained embedded systems. The model was optimized using quantization techniques to reduce memory footprint and computational complexity while maintaining acceptable accuracy. The software pipeline was developed and validated on a host system, followed by deployment on an ARM Ethos-U accelerator integrated with an FPGA platform. This project demonstrates practical experience in embedded AI, model optimization, and hardware–software co-design for edge applications."
    },
    {
      cardTitle: "COURSE PROJECT",
      title: "DAC - Schematic to GDSII Flow",
      image: img3,
      description: "Designed and implemented a full-custom Digital-to-Analog Converter (DAC) using Cadence Virtuoso, starting from schematic design to GDSII generation. The project involved schematic capture, functional verification, layout design with proper matching and routing techniques, and physical verification using DRC and LVS. Emphasis was placed on capacitor matching, reference voltage accuracy, and low-power analog design principles. Successfully generated GDSII after resolving layout and connectivity issues, demonstrating end-to-end VLSI design flow proficiency."
    }
  ];

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="My Projects" />

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              image={p.image}
              title={p.cardTitle || p.title}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        close={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  )
}

export default Project;
