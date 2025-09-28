---
layout: page
title: Night-to-Day Image Translation
description: Enhancing Image Translation with Semantic Prior and Reference Guidance
img: assets/img/semantic.png
importance: 5
category: medical-imaging
related_publications: true
---

## Overview

This project introduces **RefN2D-Guide GAN**, a novel method for improving night-to-day image translation by addressing the fundamental challenge of mapping images between domains with **varying information richness**. This research was conducted during my Honours degree at The University of Sydney and represents my first major contribution to computer vision research.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/semantic.png" title="RefN2D-Guide GAN Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RefN2D-Guide GAN framework showing semantic prior integration and reference image guidance
</div>

## Research Challenge

### Information Asymmetry Problem

Night-to-day image translation faces a unique challenge:
- **Night images** contain limited visual information due to poor lighting conditions
- **Day images** are rich in detail, color, and texture information
- Traditional GANs struggle with this **information asymmetry**

### Domain Gap

The significant difference between night and day domains makes direct translation difficult, often resulting in:
- **Blurry outputs** lacking fine details
- **Color inconsistencies** and unrealistic lighting
- **Structural artifacts** that don't exist in real day images

## Technical Innovation

### Semantic Prior Integration

Our approach leverages **semantic segmentation** as a bridge between domains:
1. **Semantic Understanding**: Extract high-level semantic information from night images
2. **Structure Preservation**: Maintain geometric and structural consistency
3. **Detail Hallucination**: Generate plausible day-time details guided by semantic priors

### Reference Image Guidance

The **reference guidance mechanism** provides:
- **Style Transfer**: Learn day-time visual characteristics from reference images
- **Color Correction**: Achieve realistic day-time color palettes
- **Texture Enhancement**: Generate fine-grained textures consistent with daytime scenes

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.jpg" title="Night Input" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/7.jpg" title="Semantic Prior" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8.jpg" title="Day Output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example translation results showing input night image, semantic guidance, and generated day image
</div>

## Methodology

### Two-Stage Architecture

1. **Semantic Prior Stage**:
   - Extract semantic segmentation from night images
   - Generate coarse day-time structure and layout
   - Establish spatial correspondence between domains

2. **Reference Guidance Stage**:
   - Utilize reference day images for style and texture guidance
   - Refine details and enhance realism
   - Ensure photometric consistency

### Loss Function Design

Our comprehensive loss function includes:
- **Adversarial Loss**: Ensures realistic output generation
- **Semantic Consistency Loss**: Maintains structural integrity
- **Reference Alignment Loss**: Aligns style with reference images
- **Perceptual Loss**: Preserves high-level visual features

## Key Contributions

- **Novel Architecture**: First to combine semantic priors with reference guidance for night-to-day translation
- **Information Asymmetry Solution**: Addresses the fundamental challenge of cross-domain translation with varying information content
- **Benchmark Performance**: Superior results compared to existing state-of-the-art methods
- **Ablation Studies**: Comprehensive analysis of each component's contribution

## Applications

### Autonomous Driving
- **Night Vision Enhancement**: Improve perception capabilities in low-light conditions
- **Data Augmentation**: Generate day-time training data from night-time collections
- **Simulation**: Create realistic day-time scenarios for testing

### Surveillance and Security
- **Enhanced Monitoring**: Improve visibility in night-time surveillance footage
- **Forensic Analysis**: Convert night-time evidence to more interpretable day-time versions
- **Real-time Processing**: Enable better automated analysis of night-time scenes

### Photography and Media
- **Image Enhancement**: Professional photography applications
- **Creative Content**: Artistic and creative image manipulation
- **Social Media**: Enhanced photo sharing and editing capabilities

## Experimental Results

Quantitative evaluation demonstrates:
- **PSNR Improvement**: 15% higher peak signal-to-noise ratio
- **SSIM Enhancement**: 20% better structural similarity
- **FID Reduction**: 30% lower Fréchet Inception Distance
- **User Study**: 85% preference in human evaluation

## Academic Recognition

This work was **accepted at the Australasian Database Conference (ADC) 2023** and served as my **Honours thesis** at The University of Sydney under the supervision of Dr. Mingming Gong and Dr. Tongliang Liu.

**Publication**: {% cite ning2023night2day %}
**Conference**: [Australasian Database Conference 2023](https://link.springer.com/chapter/10.1007/978-3-031-47843-7_12)

This research laid the foundation for my subsequent work in medical image translation and demonstrated the power of multi-modal approaches in computer vision tasks.