# DERNet: Spinal Lesion Triage and Localization

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://cimilab.github.io/DERNet/)
![Paper](https://img.shields.io/badge/Paper-PDF-red?style=for-the-badge)
[![License](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey?style=for-the-badge)](http://creativecommons.org/licenses/by-sa/4.0/)

A concise web-based presentation of the DERNet framework for explainable spinal lesion analysis.

## Overview

DERNet combines a lightweight screening ensemble with a customized YOLO11-L detector to deliver:

- **Image-level triage** using DenseNet121, EfficientNetV2-S, and ResNet50.
- **Lesion localization** using YOLO11-L with CSP-Darknet, PANet, and C2PSA attention.
- **Explainable AI support** via Saliency Maps, Grad-CAM, and LIME.
- **Low-resource deployment** focus with staged computation and efficient inference.

## Results

- **DERNet ensemble AUROC:** 91.03%
- **YOLO11-L mAP@0.5:** 40.10%
- **Class imbalance:** 46.9:1
- **Low-resource deployment:** 15.4 GFLOPs, 0.9 GB RAM, 120 ms for screening
- **Localization stage:** 74.6 GFLOPs, 1.8 GB RAM, 350 ms when invoked

## Notes

This repository contains the static site for the DERNet project, including the homepage, images, styles, and supporting scripts. The site is intended to summarize the paper's methodology, results, and explainability analyses in a clean, minimal format.

## License

Content is published under CC BY-SA 4.0.

