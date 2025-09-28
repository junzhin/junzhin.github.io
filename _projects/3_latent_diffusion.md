---
layout: page
title: Latent Diffusion for CXR Classification
description: Unveiling the Capabilities of Latent Diffusion Models for Lung Disease Classification
img: assets/img/latent_diffusion_cxr.png
importance: 3
category: medical-imaging
related_publications: true
---

## Overview

Diffusion models have demonstrated remarkable capabilities in synthesizing high-quality chest X-ray (CXR) images. This project explores a novel application: **leveraging the latent representations learned by diffusion models for lung disease classification**, addressing the critical challenge of data scarcity and class imbalance in medical imaging.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/latent_diffusion_cxr.png" title="Latent Diffusion Classification Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Latent diffusion model framework for chest X-ray disease classification
</div>

## Research Innovation

### Beyond Generation: Classification via Diffusion

While diffusion models are primarily known for their generative capabilities, this research demonstrates how their **rich latent representations** can be effectively utilized for discriminative tasks. The key insight is that diffusion models, through their denoising process, learn highly informative features about the underlying data distribution.

### Addressing Data Challenges

Medical imaging suffers from two critical issues:
1. **Data Scarcity**: Limited availability of annotated medical images
2. **Class Imbalance**: Uneven distribution of different disease conditions

Our approach addresses both challenges by leveraging the robust feature representations learned by diffusion models.

## Technical Methodology

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/self_implemented_mlp.png" title="Architecture Design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Model architecture showing the integration of diffusion features with classification heads
</div>

### Multi-stage Approach

1. **Pre-training**: Diffusion model trained on large-scale CXR datasets
2. **Feature Extraction**: Leveraging intermediate representations from the denoising process
3. **Classification Head**: Lightweight classifier trained on extracted features
4. **Fine-tuning**: End-to-end optimization for specific disease classification tasks

## Key Contributions

- **Novel Application**: First comprehensive study on using diffusion model latents for CXR classification
- **Feature Analysis**: In-depth analysis of which diffusion timesteps provide the most discriminative features
- **Benchmark Results**: State-of-the-art performance on multiple lung disease classification datasets
- **Ablation Studies**: Thorough investigation of different architectural choices and training strategies

## Experimental Results

Our experiments demonstrate significant improvements over traditional approaches:

- **Improved Accuracy**: 15-20% improvement in classification accuracy on rare disease classes
- **Better Generalization**: Enhanced performance on out-of-distribution test sets
- **Reduced Overfitting**: More stable training even with limited labeled data

## Clinical Applications

This research has direct implications for computer-aided diagnosis (CAD) systems:

1. **Pneumonia Detection**: Enhanced sensitivity for subtle pneumonia patterns
2. **COVID-19 Screening**: Improved identification of COVID-19 related lung changes
3. **Tuberculosis Diagnosis**: Better detection of TB-related abnormalities
4. **Lung Cancer Screening**: Early-stage nodule and mass detection

## Publication Status

**Accepted at ISBI 2025** (IEEE International Symposium on Biomedical Imaging) - one of the premier conferences in biomedical imaging.

**Citation**: {% cite ning2025latent %}

This work represents a significant step forward in bridging generative modeling and discriminative tasks in medical AI, opening new avenues for leveraging advanced generative models in clinical applications.