---
layout: page
title: RetinaLogos
description: Fine-Grained Synthesis of High-Resolution Retinal Images Through Captions
img: assets/img/retina_logos.png
importance: 1
category: medical-imaging
related_publications: true
---

## Overview

The scarcity of high-quality, labelled retinal imaging data presents a significant challenge in the development of machine learning models for ophthalmology. **RetinaLogos** addresses this critical gap by introducing a novel text-driven approach for generating high-resolution retinal images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/retina_logos.png" title="RetinaLogos Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RetinaLogos framework for text-guided retinal image synthesis
</div>

## Key Contributions

- **Large-scale Dataset**: Created RetinaLogos-1400k, a comprehensive synthetic Caption-CFP dataset with 1.4 million entries
- **Text-driven Generation**: Developed a novel architecture that synthesizes retinal images based on textual descriptions
- **High-resolution Output**: Capable of generating detailed color fundus photography (CFP) images with precise anatomical features
- **Clinical Applications**: Enables disease detection and diagnostic assistance through synthetic data augmentation

## Technical Innovation

Our approach leverages advanced generative models to create clinically relevant retinal images that can be used for:

1. **Data Augmentation**: Expanding limited real-world datasets
2. **Disease Simulation**: Generating images with specific pathological conditions
3. **Training Enhancement**: Improving model robustness through diverse synthetic samples
4. **Privacy Protection**: Reducing dependency on sensitive patient data

## Applications

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/va_1.png" title="Retinal Disease Detection" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/va_2.png" title="Diagnostic Assistance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generated retinal images for various clinical conditions and diagnostic applications
</div>

## Impact

This work has been **accepted at MICCAI 2025**, one of the premier conferences in medical image computing. The synthetic dataset and generation model provide a valuable resource for the ophthalmology research community, enabling the development of more robust and generalizable AI systems for retinal disease diagnosis.

**Publication**: {% cite ning2025retinalogos %}