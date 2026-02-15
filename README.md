# DERNet: Unified Framework for Spinal Lesion Analysis

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://pronad1.github.io/DERNet/)
[![Paper](https://img.shields.io/badge/Paper-PDF-red)](#)
[![License](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey)](http://creativecommons.org/licenses/by-sa/4.0/)

**A Unified DERNet and YOLO11 Framework for Spinal Lesion Triage, Localization, and Clinical Deployment**

## 🌐 Live Project
Visit the project website for visualizations, detailed methodology, and interactive elements:  
**[https://pronad1.github.io/DERNet/](https://pronad1.github.io/DERNet/)**

---

## 📄 Abstract
Automated analysis of spinal radiographs is critical for early diagnosis but is often limited by severe class imbalance and the visual subtlety of lesions. **DERNet** introduces a novel dual-stage framework:
1.  **Triage (Classification):** An ensemble of DenseNet121, EfficientNetV2-S, and ResNet50 for highly sensitive binary classification.
2.  **Localization (Detection):** A YOLO11-L model for precise lesion detection and localization.

Our approach addresses the sensitivity-specificity trade-off and effectively captures fine-grained features of spinal pathologies. Validated on the **VinDr-SpineXR** benchmark, DERNet achieves state-of-the-art performance, bridging the gap between automated analysis and clinical deployment.

---

## 🚀 Key Features

*   **Dual-Stage Architecture:** Combines a powerful classification ensemble with a real-time object detection model.
*   **Ensemble Strategy:** Weighted fusion of **DenseNet-121 (0.38)**, **EfficientNetV2-S (0.36)**, and **ResNet-50 (0.26)**.
*   **Advanced Detection:** Utilizes **YOLO11-L** with a CSP-Darknet backbone and PANet neck for small object detection.
*   **Class Imbalance Mitigation:** Implements **Copy-Paste augmentation** and **Focal Loss** to handle ratios as high as 46.9:1 (Osteophytes vs. Vertebral Collapse).
*   **Explainable AI:** Integrated with LIME and Grad-CAM for transparent clinical decision support.

---

## 📊 Performance

### Classification (5-Fold Cross-Validation)
| Model | AUROC (%) | Sensitivity (%) | Specificity (%) | F1-Score (%) |
| :--- | :---: | :---: | :---: | :---: |
| DenseNet-121 | 90.25 | 83.32 | 82.34 | 82.46 |
| EfficientNetV2-S | 89.44 | 70.80 | 91.12 | 79.34 |
| ResNet-50 | 88.88 | 82.72 | 78.13 | 80.15 |
| **DERNet Ensemble** | **90.67** | **84.58** | **84.12** | **83.21** |

### Detection (YOLO11-L)
*   **mAP@0.5:** 41.2% ± 0.3%
*   **Precision:** 49.8%
*   **Recall:** 40.5%
*   **Inference Speed:** ~92ms per image (11 FPS) on RTX 3050

---

## 🏥 Targeted Pathologies
The framework detects and localizes 7 distinct spinal lesions:
1.  Vertebral Collapse
2.  Osteophytes
3.  Spondylolisthesis
4.  Surgical Implant
5.  Disc Space Narrowing
6.  Foraminal Stenosis
7.  Other Lesions

---

## 🛠️ Methodology Overview

The pipeline follows four key stages:
1.  **Data Collection:** VinDr-SpineXR dataset.
2.  **Adaptive Preprocessing:** Image normalization and augmentation.
3.  **Probabilistic DERNet Classification:** Determines the presence of pathology (Triage).
4.  **YOLO11-L Detection:** Localizes specific lesions in positive cases.

![Architecture](./static/images/4th-workflow.png)

---

## 📚 Citation
If you use this code or dataset in your research, please cite our work:

```bibtex
@article{mondol2025dernet,
  author    = {Prosenjit Mondol, Samrat Kumar Dey and Arpita Howlader},
  title     = {A Unified DERNet and YOLO11 Framework for Spinal Lesion Triage, Segmentation and Clinical Deployment},
  journal   = {To be updated},
  year      = {2026},
}
```

## 👥 Authors
- **Prosenjit Mondol** - Patuakhali Science and Technology University
- **Samrat Kumar Dey** - Bangladesh Open University
- **Arpita Howlader** - Patuakhali Science and Technology University
