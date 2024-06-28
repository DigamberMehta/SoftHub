const sampleListings = [
  {
    title: "Adobe Photoshop CC",
    description: {
      whatItIs:
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Photoshop is widely used by professional graphic designers, digital artists, and photographers for editing and manipulating images. It offers a wide range of features, including support for layers, filters, and effects, as well as advanced selection tools, including Content-Aware Fill and Select and Mask.",
      keyFeatures: [
        "Industry-standard image editing and manipulation",
        "Support for layers, filters, and effects",
        "Advanced selection tools, including Content-Aware Fill and Select and Mask",
        "Support for 3D modeling and editing",
        "Integration with other Adobe Creative Cloud apps",
      ],
      securityFeatures: [
        "Adobe places a high priority on security across its suite of software and services, implementing robust measures to protect user data and ensure secure transactions. Adobe employs advanced encryption technologies to safeguard sensitive information, both in transit and at rest. Regular security audits and penetration testing are conducted to identify and mitigate vulnerabilities. Adobe's commitment to security extends to compliance with industry standards and regulations, such as GDPR and CCPA, ensuring user privacy and data protection. Additionally, Adobe provides comprehensive security features, including multi-factor authentication, to prevent unauthorized access. By integrating security best practices into its development lifecycle, Adobe aims to deliver secure and reliable products to its global user base.",
      ],
    },
    image: "https://yt3.googleusercontent.com/ytc/AIdro_kVbQ58iw2xkkXIvb96zHcq9mhYJnBDkVuytSiIVDb2cpQ0=s176-c-k-c0x00ffffff-no-rj",
    size: 2.1,
    url: "https://get.adobe.com/reader/download?os=Windows+10&name=Reader+2024.002.20857+English+Windows%2864Bit%29&lang=en&nativeOs=Windows+10&accepted=mss%2Cgoc%2Ccr&declined=&preInstalled=&site=landing",
    category: "Graphic Design",
    platform: ["Windows", "MacOS"],
    rating: 4.5,
    downloadCount: 1000000,
    releaseDate: new Date("2019-11-01T00:00:00.000Z"),
    version: "22.0.1",
    developer: "Adobe Inc.",
    license: "Proprietary",
    tags: ["graphic design", "image editing", "adobe"],
    systemRequirements: {
      minimum:
        "Intel Core 2 Duo or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
      recommended:
        "Intel Core i5 or AMD equivalent, 8 GB RAM, 4 GB available hard-disk space",
    },
    languages: ["English", "Spanish", "French", "German"],
    screenshots: [
      "https://example.com/photoshop-cc-screenshot1.jpg",
      "https://example.com/photoshop-cc-screenshot2.jpg",
    ],
    changelog:
      "Added support for new file formats, improved performance and stability",
    contentRating: "T for Teen",
    price: {
      amount: 20.99,
      currency: "USD",
    },
    isFree: false,
    keywords: ["adobe", "photoshop", "graphic design", "image editing"],
  },

  {
    title: "Microsoft Office 365",
    description: {
      whatItIs:
        "Microsoft Office 365 is a cloud-based productivity suite developed by Microsoft. It includes a range of applications, including Word, Excel, PowerPoint, and Outlook. Office 365 is designed to help users create, edit, and share documents, spreadsheets, and presentations from anywhere, on any device. It offers advanced security and compliance features, real-time collaboration and co-authoring, and regular updates and new feature releases.",
      keyFeatures: [
        "Cloud-based productivity suite",
        "Access to Microsoft Office applications (Word, Excel, PowerPoint, Outlook, etc.)",
        "Email hosting with 50 GB mailbox and custom email domain address",
        "1 TB of OneDrive cloud storage per user",
        "Collaboration tools like Teams for chat, meetings, and file sharing",
        "Web versions of Office applications (Word, Excel, PowerPoint, OneNote)",
        "Business-class security and compliance features",
        "Continuous updates and new features",
        "Support for multiple devices (Windows, macOS, iOS, Android)",
      ],
      securityFeatures: [
        "Microsoft Office 365 prioritizes security by incorporating comprehensive measures to protect user data and ensure safe collaboration. Utilizing advanced encryption for data in transit and at rest, Office 365 safeguards sensitive information from unauthorized access. Microsoft's commitment to security includes regular audits, continuous monitoring, and adherence to global standards such as GDPR and ISO/IEC 27001. Multi-factor authentication and conditional access policies enhance account security, while built-in threat protection services detect and mitigate cyber threats. Office 365's compliance with various regulatory frameworks ensures data privacy and protection, making it a reliable choice for businesses and individuals seeking secure, cloud-based productivity solutions.",
      ],
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/768px-Microsoft_365_%282022%29.svg.png",
    size: 1.5,
    url: "https://go.microsoft.com/fwlink/?linkid=2264705&clcid=0x409&culture=en-us&country=us",
    category: "Productivity",
    platform: ["Windows", "MacOS", "iOS", "Android"],
    rating: 4.8,
    downloadCount: 5000000,
    releaseDate: new Date("2020-03-01T00:00:00.000Z"),
    version: "2103",
    developer: "Microsoft Corporation",
    license: "Proprietary",
    tags: ["productivity", "office suite", "microsoft"],
    systemRequirements: {
      minimum:
        "Intel Core 2 Duo or AMD equivalent, 2 GB RAM, 1 GB available hard-disk space",
      recommended:
        "Intel Core i3 or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
    },
    languages: ["English", "Spanish", "French", "German", "Chinese"],
    screenshots: [
      "https://example.com/office-365-screenshot1.jpg",
      "https://example.com/office-365-screenshot2.jpg",
    ],
    changelog:
      "Added new features for data analysis and visualization, improved performance and stability",
    contentRating: "E for Everyone",
    price: {
      amount: 9.99,
      currency: "USD",
    },
    isFree: false,
    keywords: ["microsoft", "office", "productivity", "cloud-based"],
  },
  {
    title: "Google Workspace",
    description: {
      whatItIs:
        "Google Workspace is a cloud-based productivity suite developed by Google. It includes a range of applications, including Gmail, Google Drive, Google Docs, Sheets, and Slides. Google Workspace is designed to help users create, edit, and share documents, spreadsheets, and presentations from anywhere, on any device. It offers advanced security and compliance features, real-time collaboration and co-authoring, and regular updates and new feature releases.",
      keyFeatures: [
        "Cloud-based productivity suite",
        "Access to Google applications (Gmail, Google Drive, Google Docs, Sheets, Slides)",
        "Email hosting with 30 GB mailbox and custom email domain address",
        "1 TB of Google Drive cloud storage per user",
        "Collaboration tools like Google Meet for video conferencing",
        "Web versions of Google applications",
        "Business-class security and compliance features",
        "Continuous updates and new features",
        "Support for multiple devices (Windows, macOS, iOS, Android)",
      ],
      securityFeatures: [
        "Google Workspace prioritizes security by incorporating comprehensive measures to protect user data and ensure safe collaboration. Utilizing advanced encryption for data in transit and at rest, Google Workspace safeguards sensitive information from unauthorized access. Google's commitment to security includes regular audits, continuous monitoring, and adherence to global standards such as GDPR and ISO/IEC 27001. Multi-factor authentication and conditional access policies enhance account security, while built-in threat protection services detect and mitigate cyber threats.",
      ],
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqxB37HobSQL9mtgDqpGeq5He6mTe917MTg&s",
    size: 1.2,
    url: "https://tools.google.com/dlpage/gssmo/thankyou.html",
    category: "Productivity",
    platform: ["Windows", "MacOS", "iOS", "Android"],
    rating: 4.9,
    downloadCount: 2000000,
    releaseDate: new Date("2019-09-01T00:00:00.000Z"),
    version: "2021",
    developer: "Google LLC",
    license: "Proprietary",
    tags: ["productivity", "office suite", "google"],
    systemRequirements: {
      minimum:
        "Intel Core 2 Duo or AMD equivalent, 2 GB RAM, 1 GB available hard-disk space",
      recommended:
        "Intel Core i3 or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
    },
    languages: ["English", "Spanish", "French", "German", "Chinese"],
    screenshots: [
      "https://example.com/google-workspace-screenshot1.jpg",
      "https://example.com/google-workspace-screenshot2.jpg",
    ],
    changelog:
      "Added new features for data analysis and visualization, improved performance and stability",
    contentRating: "E for Everyone",
    price: {
      amount: 8.99,
      currency: "USD",
    },
    isFree: false,
    keywords: ["google", "workspace", "productivity", "cloud-based"],
  },
  {
    title: "VS Code",
    description: {
      whatItIs:
        "VS Code, short for Visual Studio Code, is a popular source code editor developed by Microsoft. It is widely used by developers for writing, editing, and debugging code across various programming languages. With its lightweight and customizable nature, VS Code provides a seamless coding experience.One of the key features of VS Code is its extensive library of extensions, which allows developers to enhance their coding environment with additional functionalities and language support. It also offers built-in Git integration, making it easy to manage version control and collaborate with other developers.VS Code provides a rich set of features, including intelligent code completion, syntax highlighting, and debugging capabilities. It supports multiple platforms, including Windows, macOS, and Linux, making it accessible to a wide range of developers.Overall, VS Code is a powerful and versatile code editor that offers a user-friendly interface and a vast ecosystem of extensions, making it a top choice for developers seeking an efficient and customizable coding environment.",
      keyFeatures: [
        "Lightweight and extensible code editor",
        "Support for multiple programming languages (JavaScript, Python, Java, C++, etc.)",
        "Intelligent code completion and IntelliSense",
        "Code refactoring and debugging tools",
        "Version control system integration (Git, SVN, etc.)",
        "Customizable interface with themes and extensions",
        "Real-time collaboration and live share",
        "Integrated terminal and command palette",
        "Support for web development frameworks (React, Angular, Vue, etc.)",
        "Extensions for additional languages and tools (e.g., Docker, Kubernetes, etc.)",
        "Cross-platform compatibility (Windows, macOS, Linux)",
      ],

      securityFeatures: [
        "VS Code prioritizes security by incorporating comprehensive measures to protect user data and ensure safe coding practices. With built-in support for secure protocols such as HTTPS and SSH, VS Code ensures that data in transit is encrypted and protected from unauthorized access. Additionally, VS Code's extensions are thoroughly vetted and validated to prevent malicious code from being installed, and users can easily manage and update their extensions to ensure they have the latest security patches. Furthermore, VS Code's integrated terminal and command palette provide secure ways to execute commands and scripts, reducing the risk of command injection attacks. With regular security updates and a commitment to transparency, VS Code provides a secure environment for developers to write, debug, and deploy their code with confidence",
      ],
    },
    image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    size: 700,
    url: "https://code.visualstudio.com/docs/?dv=win64user",
    category: "Music & Audio",
    platform: ["Windows", "MacOS"],
    rating: 4.8,
    downloadCount: 150000,
    releaseDate: new Date("2022-09-10"),
    version: "4.3.2",
    developer: "Microsoft Corporation",
    license: "Proprietary",
    tags: ["Coding", "Web3", "studio"],
    systemRequirements: {
      minimum: "Windows 8, 8GB RAM",
      recommended: "Windows 10, 16GB RAM",
    },
    languages: ["English", "Spanish", "Italian"],
    screenshots: [
      "https://example.com/images/music-studio-screenshot1.png",
      "https://example.com/images/music-studio-screenshot2.png",
    ],
    changelog: "Enhanced audio effects and new instruments.",
    contentRating: "Everyone",
    price: {
      amount: 99.99,
      currency: "USD",
    },
    isFree: false,
    keywords: ["music production", "audio", "studio"],
    schemaVersion: 1,
  },
];

module.exports = { data: sampleListings };
