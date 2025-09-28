---
layout: page
title: Lung Opacity Removal
description: Unpaired Translation of Chest X-ray Images for Enhanced Diagnosis
img: assets/img/cxr_lung_opacity.png
importance: 2
category: medical-imaging
related_publications: true
---

## Overview

Diagnosing cardiopulmonary diseases in chest X-rays (CXRs) becomes significantly challenging when lung opacities obscure critical anatomical details. This project introduces **ARMUT-LOR** (Adaptive Region-aware Masked Unpaired Translation for Lung Opacity Removal), a novel approach to enhance diagnostic accuracy by removing lung opacities while preserving essential anatomical structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cxr_lung_opacity.png" title="Lung Opacity Removal Process" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ARMUT-LOR framework showing the opacity removal process in chest X-rays
</div>

## Technical Approach

### Adaptive Activation Masks

Our method employs **adaptive activation masks** that intelligently identify and target opacity regions while preserving healthy anatomical structures. This ensures that the removal process doesn't inadvertently alter important diagnostic features.

### Unpaired Learning Framework

The model operates in an **unpaired setting**, meaning it doesn't require paired clear/opacity images for training. This is crucial given the scarcity of such paired datasets in medical imaging.

## Key Innovations

- **Region-aware Processing**: Adaptive identification of opacity regions using sophisticated masking techniques
- **Anatomical Preservation**: Maintains critical anatomical details during the opacity removal process
- **Unpaired Training**: Eliminates the need for expensive paired training data
- **Clinical Validation**: Demonstrated improved diagnostic accuracy in lung segmentation tasks

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/noise1.png" title="Before Processing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/noise3.png" title="Opacity Detection" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/noise4.png" title="After Processing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Step-by-step visualization of the lung opacity removal process
</div>

## Clinical Impact

This research addresses a real clinical need where lung opacities (such as those caused by pneumonia, pulmonary edema, or other conditions) can mask underlying pathologies. By removing these opacities, radiologists can better visualize:

1. **Cardiac silhouette** boundaries
2. **Pulmonary vasculature** patterns
3. **Pleural** abnormalities
4. **Mediastinal** structures

## Publications

This work has resulted in multiple high-impact publications:

- **Pattern Recognition Letters** (Accepted): {% cite ning2024cxr %}
- **Master's Thesis** (Imperial College London): {% cite ning2024armut %}

The research was conducted as part of my MRes degree at Imperial College London under the supervision of Dr. Guang Yang and Dr. Matthieu Komorowski.