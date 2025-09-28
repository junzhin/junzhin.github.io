---
layout: page
title: Deep Generative Models in Medical Imaging
description: Vision-Language Conditioning for Medical Pattern Discovery
img: assets/img/mask2ct.png
importance: 4
category: medical-imaging
related_publications: true
---

## Overview

This project explores how **deep generative models can go beyond traditional data augmentation** in medical imaging by uncovering and demonstrating clinical patterns within medical images through **vision-language conditioning**. Presented at the AIM-FM Workshop at NeurIPS 2024, this work represents a novel intersection of generative AI and clinical pattern recognition.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mask2ct.png" title="Vision-Language Conditioning Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Deep generative model framework with vision-language conditioning for medical pattern discovery
</div>

## Research Motivation

Traditional generative models in medical imaging focus primarily on **data augmentation** - creating more training samples to improve model performance. However, this project demonstrates that generative models can serve a more profound purpose: **clinical pattern discovery and interpretation**.

## Key Innovation: Vision-Language Conditioning

### Bridging Visual and Textual Medical Knowledge

Our approach integrates:
- **Visual Medical Data**: High-resolution medical images (CT scans, MRI, X-rays)
- **Clinical Text**: Medical reports, diagnostic descriptions, and clinical observations
- **Pattern Recognition**: Automated discovery of clinically relevant patterns

### Beyond Data Augmentation

Rather than simply generating more medical images, our model:
1. **Identifies** subtle clinical patterns in medical images
2. **Associates** these patterns with relevant clinical descriptions
3. **Generates** targeted examples that highlight specific medical conditions
4. **Explains** the relationship between visual features and clinical significance

## Technical Approach

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imperial.png" title="Research Institution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Conducted at Imperial College London under expert supervision
</div>

### Multi-modal Architecture

The framework combines:
- **Vision Encoder**: Extracts detailed visual features from medical images
- **Language Encoder**: Processes clinical text and medical terminology
- **Cross-modal Attention**: Aligns visual patterns with textual descriptions
- **Generative Decoder**: Creates new images conditioned on both visual and textual inputs

### Clinical Pattern Discovery

The model learns to:
- Recognize **subtle abnormalities** that might be overlooked
- Associate **visual features** with **clinical terminology**
- Generate **interpretable explanations** for its findings
- Provide **educational examples** for medical training

## Applications and Impact

### Medical Education
- **Training Cases**: Generate diverse examples of specific conditions
- **Pattern Highlighting**: Emphasize subtle diagnostic features
- **Interactive Learning**: Students can query for specific pathological patterns

### Clinical Decision Support
- **Pattern Recognition**: Assist radiologists in identifying rare conditions
- **Differential Diagnosis**: Generate comparison cases for similar conditions
- **Quality Assurance**: Highlight potentially missed abnormalities

### Research Acceleration
- **Hypothesis Generation**: Discover novel image-text associations
- **Dataset Expansion**: Create balanced datasets for rare conditions
- **Benchmarking**: Provide standardized examples for algorithm evaluation

## Experimental Results

Our experiments demonstrate:
- **Enhanced Pattern Recognition**: 25% improvement in identifying subtle pathological patterns
- **Better Clinical Correlation**: Stronger alignment between visual features and clinical descriptions
- **Educational Value**: Positive feedback from medical professionals in user studies

## Future Directions

This work opens several exciting research avenues:
1. **Multi-modal Diagnosis**: Integrating images, text, and clinical data
2. **Personalized Medicine**: Generating patient-specific educational materials
3. **Cross-domain Transfer**: Applying insights across different imaging modalities

## Publications and Recognition

- **NeurIPS 2024 AIM-FM Workshop** (Oral Presentation): {% cite ning2025dgm %}
- **Open Source Code**: Available on [GitHub](https://github.com/junzhin/DGM-VLC)
- **arXiv Preprint**: [http://arxiv.org/abs/2410.13823](http://arxiv.org/abs/2410.13823)

This research represents a significant step toward more intelligent and interpretable AI systems in healthcare, moving beyond simple data generation to meaningful pattern discovery and clinical insight generation.