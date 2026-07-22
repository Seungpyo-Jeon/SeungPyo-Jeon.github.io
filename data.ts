import { CVData } from './types';

export const cvData: CVData = {
  name: "SeungPyo Jeon",
  koreanName: "전승표",
  title: "Undergraduate Researcher in Computer Vision",
  profileImage: "https://github.com/SeungPyo-Jeon/SeungPyo-Jeon.github.io/blob/main/assets/profile3.png?raw=true", // 교체 방법: 이 부분을 실제 이미지 URL이나 public 폴더 내의 경로(예: "assets/profile.jpg")로 변경하세요.
  summary: [
    "안녕하세요, 전승표입니다!",
    "제 관심 분야는 **Computer Vision**, 특히 **3D Reconstruction, SLAM, 자율주행, Physical AI**입니다.",
    "한번 집중하기 시작하면 끝까지 포기치 않고 파고들어, 복잡하고 도전적인 연구/개발에 기여하고 싶습니다.",
    "현재 **서울과학기술대학교 인공지능응용학과 4학년 재학** 중입니다.",
    "Hello, I'm SeungPyo.",
    "I am a senior undergraduate student at SeoulTech, majoring in Artificial Intelligence Applications.",
    "My passion lies in Computer Vision, with a particular focus on bridging the gap between digital perception and the physical world through SLAM, 3D Reconstruction, VLA, and Physical AI.",
  ],
  contact: {
    email: "tmdvy1468+lab@gmail.com",
    github: "https://github.com/SeungPyo-Jeon",
    location: "Seoul, Republic of Korea"
  },
  education: [
    {
      school: "Seoul National University of Science and Technology",
      degree: "B.S. in Artificial Intelligence Applications",
      location: "Seoul, Korea",
      period: "2024.03 – Present",
      details: ["GPA: 3.98 / 4.5 (4학년 2학기)"]
    },
    {
      school: "University of Nevada, Las Vegas",
      degree: "Exchange Student / Workshop",
      location: "NV, USA",
      period: "2024.12 – 2025.01",
      details: ["Howard R. Hughes College of Engineering", "ML+AI workshop (33h)", "US College Educational Learning Program (14h)"]
    },
    /*{
      school: "Military Service - ROKA ",
      degree: "육군 병장 만기 전역",
      location: "Icheon, Korea",
      period: "2021.05 – 2022.11",
      details: ["제7기동군단장상"]
    },*/
    {
      school: "Hoseo University",
      degree: "B.S. in Computer and Information Engineering",
      location: "Cheonan, Korea",
      period: "2020.03 – 2024.02",
      details: ["GPA: 4.14 / 4.5"]
    }
  ],
  experience: [
    {
      company: "Mobile Intelligence Laboratory (MINT Lab)",
      position: "Undergraduate Researcher",
      location: "Seoul, Korea",
      period: "2025.12 – Present",
      description: [
        "3D Gaussian splatting과 SLAM에 관심갖고 연구 중",
        "\"UAV 운용간 위성영상을 이용한 VPR\" 주제로 IEEE RA-L 공동 1저자로 논문 게재",
        "Conducting research with a primary focus on 3D Gaussian Splatting (3DGS) and Simultaneous Localization and Mapping (SLAM).",
        "Published a paper in IEEE RA-L as a co-first author on the topic of \"Visual Place Recognition (VPR) using Satellite Imagery for UAV Operations\""
      ]
    },
    {
      company: "Korea Railroad Research Institute (KRRI)",
      position: "Intern",
      location: "Uiwang, Korea",
      period: "2024.06 – 2024.09",
      description: [
        "ICT대중교통연구실  (ICT Public Transportation Research Lab)",
        "열차 내 혼잡도 계산을 위한 승객인식모델 개발  (Developed vision-based passenger recognition models for public transit)"
      ]
    }
  ],
  projects: [
    {
      title: "UAV 운용 간 시각 기반 측위(VPR) 시스템 개발",
      description: "GPS-denied 환경 상황 속, 공공 위성 타일맵을 기반한 UAV의 위치 측정을 목표로 합니다.\nOffline/Online stage 분리한 VPR 모델 제작 및 On-board 운용을 검증했습니다. \n Aims to localize UAVs using public satellite tile maps in GPS-denied environments.\nDeveloped a VPR model with separated offline/online stages and validated its on-board performance.",
      techStack: ["VPR", "UAV", "Computer Vision"],
      links: [
        { title: "Paper", url: "https://doi.org/10.1109/LRA.2026.3715032" }
      ],
      period: "Research Project",
      imageUrl: "https://github.com/SeungPyo-Jeon/SeungPyo-Jeon.github.io/blob/main/assets/TileLoc-overview.png?raw=true",
    },
    {
      title: "ROS2 On-device SLAM 활용 Turtlebot",
      description: "ROS2 기반 Wheel odometry + 2D LiDAR 센서 사용해 Turtlebot 위치 추정 및 지도 생성하여 자율주행 운용했습니다. \n Implemented autonomous navigation for a Turtlebot by performing pose estimation and mapping using ROS2, wheel odometry, and a 2D LiDAR sensor.",
      techStack: ["ROS2", "SLAM", "C++", "Python"],
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/ROS2-Hello-Robotics" }
      ],
      period: "Project",
      imageUrl: "https://github.com/SeungPyo-Jeon/SeungPyo-Jeon.github.io/blob/main/assets/ROS2-TuttleBot-AutoNavigation.gif?raw=true"
    },
    {
      title: "Satellite Tree Species Classification",
      description: "탄소중립 전략의 핵심 자원인 수림의 탄소 포집량 계산을 위해 중요한 수종 예측을 목표로 합니다. 다중 다시점 위성 데이터를 입력으로 하는 수종 분류 딥러닝 모델을 제작하였습니다. \n Developed a deep learning model for tree species classification using multi-temporal and multi-view satellite imagery. Published in MDPI Remote Sensing (Q1 Journal)",
      techStack: ["Python", "PyTorch", "Remote Sensing"],
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/CapstoneDesign-ForestCarbonAi" },
        { title: "수종 Demo", url: "https://seungpyo-jeon.github.io/CapstoneDesign-ForestCarbonAi/DemoPage/compareSpecies.html" }, 
        {title: "탄소량 Demo", url: "https://seungpyo-jeon.github.io/CapstoneDesign-ForestCarbonAi/DemoPage/multiMap.html"},
        { title: "Paper", url: "https://doi.org/10.3390/rs17132222" }
      ],
      period: "Research Project",
      // 예시 이미지: 실제 이미지가 있다면 경로를 입력하세요.
      imageUrl: "https://github.com/SeungPyo-Jeon/CapstoneDesign-ForestCarbonAi/blob/main/DemoPage/workflow_revision.png?raw=true" 
    },
    {
      title: "DEVS Simulation For Efficient Operation",
      description: "실제 엘레베이터 운영 데이터를 구할 수 없는 상황 속 가장 효율적인 운영 알고리즘 탐색을 목표로 합니다. 확장 가능한 DEVS 시뮬레이션을 이용해 최적의 알고리즘을 찾습니다. \n Developed a DEVS-based simulation framework to explore optimal dispatching algorithms in environments with limited real-world operational data.",
      techStack: ["Python", "DEVS", "M&S"],
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/Elevator_System_Using_DEVS_formalism" },
      ],
      period: "Lecture - Simulation",
      imageUrl: "https://github.com/SeungPyo-Jeon/Elevator_System_Using_DEVS_formalism/blob/main/ddqn-optimize.gif?raw=true"
    },
    {
      title: "Passenger Recognition Model for Congestion Analysis",
      description: "탑승객 안전과 직결된 열차 내 혼잡도를 계산을 목표로 합니다. CCTV 이미지를 입력으로 하는 Faster-RCNN 기반 승객 인식 모델을 개발하였습니다. \n Developed a Faster R-CNN based object detection model to estimate train occupancy and ensure passenger safety.",
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/KRRI-ObjectDetection" },
      ],
      techStack: ["Python", "Faster-RCNN", "Computer Vision"],
      period: "한국철도기술연구원(KRRI) Internship"
    }
  ],
  skills: [
    { category: "Programming", items: ["Python", "C/C++", "Java", "C#"] },
    { category: "Frameworks & Libraries", items: ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "ROS2", "Android", "Unity"] }
  ],
  papers: [
    {
      title: "TileLoc: Sequential Visual Place Recognition of UAVs using Public Tile Maps",
      authors: "Dongwook Heo*, Seungpyo Jeon*, Jinwon Choi, Dayena Jeong, HyeonJoong Wi, Insung Jang, Sunglok Choi",
      journal: "IEEE Robotics and Automation Letters (IF 5.3, Q1), 2026.07",
      link: "https://doi.org/10.1109/LRA.2026.3715032"
    },
    {
      title: "From Coarse to Crisp: Enhancing Tree Species Maps with Deep Learning and Satellite Imagery",
      authors: "Taebin Choe†, Seungpyo Jeon†, Byeongcheol Kim, Seonyoung Park*",
      journal: "MDPI Remote Sensing (IF 4.3, Q1), 2025.06",
      link: "https://doi.org/10.3390/rs17132222"
    }
  ],
  
  qualifications: [
    { name: "SQLD", date: "2024.08" },
    { name: "TOEIC", score: "800" }
  ] 
};