const sampleListings = [
  {
    "title": "Adobe",
    "description": {
      "whatItIs":
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Photoshop is widely used by professional graphic designers, digital artists, and photographers for editing and manipulating images. It offers a wide range of features, including support for layers, filters, and effects, as well as advanced selection tools, including Content-Aware Fill and Select and Mask.",
      "keyFeatures": [
        "Industry-standard image editing and manipulation",
        "Support for layers, filters, and effects",
        "Advanced selection tools, including Content-Aware Fill and Select and Mask",
        "Support for 3D modeling and editing",
        "Integration with other Adobe Creative Cloud apps",
      ],
      "securityFeatures": [
        "Adobe places a high priority on security across its suite of software and services, implementing robust measures to protect user data and ensure secure transactions. Adobe employs advanced encryption technologies to safeguard sensitive information, both in transit and at rest. Regular security audits and penetration testing are conducted to identify and mitigate vulnerabilities. Adobe's commitment to security extends to compliance with industry standards and regulations, such as GDPR and CCPA, ensuring user privacy and data protection. Additionally, Adobe provides comprehensive security features, including multi-factor authentication, to prevent unauthorized access. By integrating security best practices into its development lifecycle, Adobe aims to deliver secure and reliable products to its global user base.",
      ],
    },
    "shortdescription": "Adobe Photoshop is a raster graphics editor developed  by Adobe Inc",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_kVbQ58iw2xkkXIvb96zHcq9mhYJnBDkVuytSiIVDb2cpQ0=s176-c-k-c0x00ffffff-no-rj",
    "size": 2.1,
    "url": "https://get.adobe.com/reader/download?os=Windows+10&name=Reader+2024.002.20857+English+Windows%2864Bit%29&lang=en&nativeOs=Windows+10&accepted=mss%2Cgoc%2Ccr&declined=&preInstalled=&site=landing",
    "category": "Utilities".toLowerCase(),
    "platform": ["Windows", "MacOS"],
    "rating": 4.5,
    "downloadCount": 0,
    "releaseDate": new Date("2019-11-01T00:00:00.000Z"),
    "version": "22.0.1",
    "developer": "Adobe Inc.",
    "license": "Proprietary",
    "tags": ["graphic design", "image editing", "adobe"],
    "systemRequirements": {
      "minimum":
        "Intel Core 2 Duo or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
      "recommended":
        "Intel Core i5 or AMD equivalent, 8 GB RAM, 4 GB available hard-disk space",
    },
    "languages": ["English", "Spanish", "French", "German"],
    "screenshots": [
      "https://example.com/photoshop-cc-screenshot1.jpg",
      "https://example.com/photoshop-cc-screenshot2.jpg",
    ],
    "changelog":
      "Added support for new file formats, improved performance and stability",
    "contentRating": "T for Teen",
    "price": {
      "amount": 20.99,
      "currency": "USD",
    },
    "isFree": false,
    "keywords": ["adobe", "photoshop", "graphic design", "image editing"],
  },

  {
    "title": "Microsoft Office 365",
    "description": {
      "whatItIs":
        "Microsoft Office 365 is a cloud-based productivity suite developed by Microsoft. It includes a range of applications, including Word, Excel, PowerPoint, and Outlook. Office 365 is designed to help users create, edit, and share documents, spreadsheets, and presentations from anywhere, on any device. It offers advanced security and compliance features, real-time collaboration and co-authoring, and regular updates and new feature releases.",
      "keyFeatures": [
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
      "securityFeatures": [
        "Microsoft Office 365 prioritizes security by incorporating comprehensive measures to protect user data and ensure safe collaboration. Utilizing advanced encryption for data in transit and at rest, Office 365 safeguards sensitive information from unauthorized access. Microsoft's commitment to security includes regular audits, continuous monitoring, and adherence to global standards such as GDPR and ISO/IEC 27001. Multi-factor authentication and conditional access policies enhance account security, while built-in threat protection services detect and mitigate cyber threats. Office 365's compliance with various regulatory frameworks ensures data privacy and protection, making it a reliable choice for businesses and individuals seeking secure, cloud-based productivity solutions.",
      ],
    },
    "shortdescription": "Microsoft Office 365 is a cloud-based productivity suite developed by Microsoft",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/768px-Microsoft_365_%282022%29.svg.png",
    "size": 1.5,
    "url": "https://go.microsoft.com/fwlink/?linkid=2264705&clcid=0x409&culture=en-us&country=us",
    "category": "Utilities".toLowerCase(),
    "platform": ["Windows", "MacOS", "iOS", "Android"],
    "rating": 4.8,
    "downloadCount": 0,
    "releaseDate": new Date("2020-03-01T00:00:00.000Z"),
    "version": "23.0.1",
    "developer": "Microsoft Corporation",
    "license": "Proprietary",
    "tags": ["productivity", "office suite", "microsoft"],
    "systemRequirements": {
      "minimum":
        "Intel Core 2 Duo or AMD equivalent, 2 GB RAM, 1 GB available hard-disk space",
      "recommended":
        "Intel Core i3 or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
    },
    "languages": ["English", "Spanish", "French", "German", "Chinese"],
    "screenshots": [
      "https://example.com/office-365-screenshot1.jpg",
      "https://example.com/office-365-screenshot2.jpg",
    ],
    "changelog":
      "Added new features for data analysis and visualization, improved performance and stability",
    "contentRating": "E for Everyone",
    "price": {
      "amount": 9.99,
      "currency": "USD",
    },
    "isFree": false,
    "keywords": ["microsoft", "office", "productivity", "cloud-based"],
  },
  {
    "title": "Google Workspace",
    "description": {
      "whatItIs":
        "Google Workspace is a cloud-based productivity suite developed by Google. It includes a range of applications, including Gmail, Google Drive, Google Docs, Sheets, and Slides. Google Workspace is designed to help users create, edit, and share documents, spreadsheets, and presentations from anywhere, on any device. It offers advanced security and compliance features, real-time collaboration and co-authoring, and regular updates and new feature releases.",
      "keyFeatures": [
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
      "securityFeatures": [
        "Google Workspace prioritizes security by incorporating comprehensive measures to protect user data and ensure safe collaboration. Utilizing advanced encryption for data in transit and at rest, Google Workspace safeguards sensitive information from unauthorized access. Google's commitment to security includes regular audits, continuous monitoring, and adherence to global standards such as GDPR and ISO/IEC 27001. Multi-factor authentication and conditional access policies enhance account security, while built-in threat protection services detect and mitigate cyber threats.",
      ],
    },
    "shortdescription": "Google Workspace is a cloud-based productivity suite developed by Google",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqxB37HobSQL9mtgDqpGeq5He6mTe917MTg&s",
    "size": 1.2,
    "url": "https://tools.google.com/dlpage/gssmo/thankyou.html",
    "category": "Utilities".toLowerCase(),
    "platform": ["Windows", "MacOS", "iOS", "Android"],
    "rating": 4.9,
    "downloadCount": 0,
    "releaseDate": new Date("2019-09-01T00:00:00.000Z"),
    "version": "21.0.1",
    "developer": "Google LLC",
    "license": "Proprietary",
    "tags": ["productivity", "office suite", "google"],
    "systemRequirements": {
      "minimum":
        "Intel Core 2 Duo or AMD equivalent, 2 GB RAM, 1 GB available hard-disk space",
      "recommended":
        "Intel Core i3 or AMD equivalent, 4 GB RAM, 2 GB available hard-disk space",
    },
    "languages": ["English", "Spanish", "French", "German", "Chinese"],
    "screenshots": [
      "https://example.com/google-workspace-screenshot1.jpg",
      "https://example.com/google-workspace-screenshot2.jpg",
    ],
    "changelog":
      "Added new features for data analysis and visualization, improved performance and stability",
    "contentRating": "E for Everyone",
    "price": {
      "amount": 8.99,
      "currency": "USD",
    },
    "isFree": false,
    "keywords": ["google", "workspace", "productivity", "cloud-based"],
  },
  {
    "title": "VS Code",
    "description": {
      "whatItIs":
        "VS Code, short for Visual Studio Code, is a popular source code editor developed by Microsoft. It is widely used by developers for writing, editing, and debugging code across various programming languages. With its lightweight and customizable nature, VS Code provides a seamless coding experience.One of the key features of VS Code is its extensive library of extensions, which allows developers to enhance their coding environment with additional functionalities and language support. It also offers built-in Git integration, making it easy to manage version control and collaborate with other developers.VS Code provides a rich set of features, including intelligent code completion, syntax highlighting, and debugging capabilities. It supports multiple platforms, including Windows, macOS, and Linux, making it accessible to a wide range of developers.Overall, VS Code is a powerful and versatile code editor that offers a user-friendly interface and a vast ecosystem of extensions, making it a top choice for developers seeking an efficient and customizable coding environment.",
      "keyFeatures": [
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

      "securityFeatures": [
        "VS Code prioritizes security by incorporating comprehensive measures to protect user data and ensure safe coding practices. With built-in support for secure protocols such as HTTPS and SSH, VS Code ensures that data in transit is encrypted and protected from unauthorized access. Additionally, VS Code's extensions are thoroughly vetted and validated to prevent malicious code from being installed, and users can easily manage and update their extensions to ensure they have the latest security patches. Furthermore, VS Code's integrated terminal and command palette provide secure ways to execute commands and scripts, reducing the risk of command injection attacks. With regular security updates and a commitment to transparency, VS Code provides a secure environment for developers to write, debug, and deploy their code with confidence",
      ],
    },
    "shortdescription": "VS Code, short for Visual Studio Code, is a popular source code editor developed by Microsoft",
    "image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    "size": 700,
    "url": "https://code.visualstudio.com/docs/?dv=win64user",
    "category": "Utilities".toLowerCase(),
    "platform": ["Windows", "MacOS"],
    "rating": 4.8,
    "downloadCount": 0,
    "releaseDate": new Date("2022-09-10"),
    "version": "4.3.2",
    "developer": "Microsoft Corporation",
    "license": "Proprietary",
    "tags": ["Coding", "Web3", "studio"],
    "systemRequirements": {
      "minimum": "Windows 8, 8GB RAM",
      "recommended": "Windows 10, 16GB RAM",
    },
    "languages": ["English", "Spanish", "Italian"],
    "screenshots": [
      "https://example.com/images/music-studio-screenshot1.png",
      "https://example.com/images/music-studio-screenshot2.png",
    ],
    "changelog": "Enhanced audio effects and new instruments.",
    "contentRating": "Everyone",
    "price": {
      "amount": 99.99,
      "currency": "USD",
    },
    "isFree": false,
    "keywords": ["music production", "audio", "studio"],
    "schemaVersion": 1,
  },

  {
    
      "title": "Avast Secure Browser",
      "description": {
        "whatItIs": "Avast Secure Browser is a privacy-focused browser that provides a safe and secure browsing experience. It is designed to protect users from various online threats and vulnerabilities, including malware, phishing, and tracking. With its robust security features and user-friendly interface, Avast Secure Browser is an ideal choice for those who value their online privacy and security. It blocks malicious websites and downloads, and ensures that all online transactions are encrypted with HTTPS encryption, protecting sensitive information from interception. Additionally, it provides a range of features to enhance user privacy, including a built-in VPN and anti-tracking technology.",
        "keyFeatures": [
          "Blocks malicious websites and downloads with advanced threat detection",
          "Protects user privacy with anti-tracking technology and a built-in VPN",
          "Encrypts online transactions with HTTPS encryption for secure browsing",
          "Provides a user-friendly interface for easy browsing and security management"
        ],
        "securityFeatures": [
          "Avast Secure Browser prioritizes security by incorporating comprehensive measures to protect user data and ensure safe browsing practices. It features advanced threat detection, anti-phishing protection, and regular security updates to stay ahead of emerging threats. The browser also includes a range of security tools, such as a password manager, to help users manage their online security. Additionally, Avast Secure Browser's built-in VPN encrypts user data, ensuring that online transactions and communications remain private and secure. With its robust security features, Avast Secure Browser provides a secure environment for users to browse the internet with confidence."
        ],
      },
      
    
    "shortdescription": "A secure browser that protects your privacy.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/43/AVG_Secure_Browser_Icon_%28Similar%29.svg",
    "size": 80, 
    "url": "https://www.avast.com/secure-browser",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Android", "iOS"],
    "rating": 4.5,
    "downloadCount": 15000000,
    "releaseDate": "2018-04-30",
    "version": "105.1.4643.120",
    "developer": "Avast Software",
    "license": "Proprietary",
    "tags": ["security", "privacy", "browser"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.10 or later, Android 5.0 or later, iOS 12 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later, Android 8.0 or later, iOS 14 or later"
    },
    "languages": ["English", "French", "German", "Spanish", "Portuguese", "Russian", "Chinese"],
    "screenshots": ["https://example.com/avast_secure_browser_screenshot1.jpg", "https://example.com/avast_secure_browser_screenshot2.jpg"],
    "changelog": "v105.1.4643.120: Improved performance and fixed bugs.", 
    "contentRating": "Everyone", 
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["avast", "secure", "browser", "privacy", "security", "ad blocker", "anti-tracking", "bank mode", "vpn", "anti-phishing", "anti-malware", "https encryption"],
    "schemaVersion": 1 
  },{
    "title": "Mozilla Firefox",
    "description": {
      "whatItIs": "A fast, open-source web browser with a focus on privacy and customization.",
      "keyFeatures": ["Tab management", "Extensions", "Private browsing", "Tracking protection"],
      "securityFeatures": ["Enhanced Tracking Protection", "Sandboxing", "Content blocking"]
    },
    "shortdescription": "A customizable browser that puts you in control of your online experience.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    "size": 50, 
    "url": "https://www.mozilla.org/firefox/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.6,
    "downloadCount": 250000000,
    "releaseDate": "2004-11-09",
    "version": "115.0",
    "developer": "Mozilla Foundation",
    "license": "Open-Source",
    "tags": ["browser", "open-source", "privacy", "customization"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.12 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/mozilla_firefox_screenshot1.jpg", "https://example.com/mozilla_firefox_screenshot2.jpg"],
    "changelog": "v115.0: Performance improvements, new privacy features, and bug fixes.", 
    "contentRating": "Everyone", 
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["mozilla", "firefox", "browser", "open-source", "privacy", "customization", "tab management", "extensions", "private browsing", "tracking protection"],
    "schemaVersion": 1 
  },  
  {
    
      "title": "Google Chrome",
      "description": {
        "whatItIs": "Google Chrome is a fast, secure, and user-friendly web browser that provides a seamless browsing experience. It is designed to be highly customizable, with a wide range of extensions and themes available to enhance its functionality and appearance. Chrome's speed and performance are unmatched, thanks to its powerful rendering engine and efficient memory management. Additionally, Chrome's intuitive interface and simple design make it easy to use, even for those who are not tech-savvy. With its automatic updates and robust security features, Chrome ensures that users have a safe and enjoyable browsing experience. Whether you're browsing the web, checking email, or streaming videos, Chrome is the perfect browser for all your online needs.",
        "keyFeatures": ["Sync across devices", "Tab grouping", "Voice search", "Extensions"],
        "securityFeatures": [
          "Google Chrome prioritizes security with its robust Safe Browsing feature, which warns users about potential phishing and malware sites. This feature is powered by Google's vast database of known malicious websites, which is constantly updated to ensure users are protected from the latest threats. Additionally, Chrome's sandboxing technology isolates web pages from each other and from the system, preventing malicious code from causing damage. Furthermore, Chrome's auto-update feature ensures that users receive the latest security patches and features without requiring any action from them, providing an additional layer of protection against emerging threats."
        ]
      },
    
    "shortdescription": "The world's most popular web browser.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "size": 60,
    "url": "https://www.google.com/chrome/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.4,
    "downloadCount": 3000000000,
    "releaseDate": "2008-09-02",
    "version": "114.0.5735.199",
    "developer": "Google",
    "license": "Proprietary",
    "tags": ["browser", "google", "fast", "secure"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.12 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/google_chrome_screenshot1.jpg", "https://example.com/google_chrome_screenshot2.jpg"],
    "changelog": "v114.0.5735.199: Performance improvements, security updates, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["google", "chrome", "browser", "fast", "secure", "sync", "tab grouping", "voice search", "extensions", "safe browsing"],
    "schemaVersion": 1 
  },
  {
    "title": "AVG Secure Browser",
    "description": {
      "whatItIs": "AVG Secure Browser is a free web browser that allows you to safely and quickly surf the web. Developed by AVG, this program enables you to take full control of your browsing experience and keep it secure from any malicious attempts online—blocking any suspicious downloads and third-party cookies,Similar to Avast Secure Browser, AVG Secure Browser is available on PC (Windows 10 and Windows 11) and mobile. It also focuses not only on security and privacy but on performance, as well—offering various tools for improving your device’s speed and battery life. Your download will be completed from AVG's servers.",
      "keyFeatures": ["Ad blocker", "Anti-tracking", "Anti-fingerprinting", "Privacy cleaner"],
      "securityFeatures": ["Unlike most of the popular browsers around, AVG Secure Browser takes your user experience to the next level with a wide range of security measures. It has an anti-phishing feature that blocks malicious websites and downloads in real-time. Its Password Manager can safely store, create, and autofill login credentials on websites. Additionally, Extension Guard screens any unwarranted plugins that you may get from installations. There’s also a super-secure Bank Mode for financial transactions—although it’ll require AVG AntiVirus to be activated.There are also features dedicated to privacy concerns. It has anti-fingerprinting and anti-tracking capabilities, which help mask your browser’s fingerprints and protects you against tracking scripts. The Webcam Guard tool monitors any websites taking control of your camera. Private Mode doesn’t save any browsing history, cookies, or caches and Privacy Cleaner erases them. Plus, HTTP Encryption forces supported websites to enable encryption—allowing you to enjoy a completely private browsing mode. The best feature here, however, is the built-in integration with AVG Secure VPN.This browser isn’t just about online safety. Your ease of use is important, too, and this starts with your PC’s performance. Using this software, you have access to a built-in Adblock that automatically blocks ads to help web pages load faster. It helps that this browser is based on one of the most popular free and open-source projects, Chromium. The interface layout is quite easy to navigate. You just have to click on the green shield icon to access the Security & Privacy Center."]
    },
    "shortdescription": "Browse the web safely and privately with AVG's secure browser.",
    "image": "https://play-lh.googleusercontent.com/rO_SG4i8KwLtVH6H746iWBsm5WwnVDRccdZajeaInsCf_r7jVjw-NgPNmdYfXSnlr-o=w240-h480-rw",
    "size": 75,
    "url": "https://www.avg.com/secure-browser",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS"],
    "rating": 4.3,
    "downloadCount": 5000000,
    "releaseDate": "2019-06-10",
    "version": "103.1.3111.101",
    "developer": "AVG Technologies",
    "license": "Proprietary",
    "tags": ["security", "privacy", "browser", "avg"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.10 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["English", "French", "German", "Spanish", "Portuguese", "Russian", "Chinese", "Japanese"],
    "screenshots": ["https://example.com/avg_secure_browser_screenshot1.jpg", "https://example.com/avg_secure_browser_screenshot2.jpg"],
    "changelog": "v103.1.3111.101: Security updates, performance improvements, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["avg", "secure", "browser", "privacy", "security", "ad blocker", "anti-tracking", "anti-fingerprinting", "privacy cleaner"],
    "schemaVersion": 1 
  },
  
  {
    "title": "Opera Browser",
    "description": {
      "whatItIs": "Opera Browser is a potent combination of speed, security, and customizability, making it a strong contender in the continually evolving browser market. With a sleek interface and an array of innovative features, Opera continually strives to redefine the browsing experience.At first glance, Opera Browser impresses with its modern and clean aesthetic. The sidebar is a welcome feature, providing quick and easy access to bookmarks, history, extensions, and even a built-in VPN and ad-blocker. These inclusions are excellent productivity boosters, keeping what you need at your fingertips and eliminating unnecessary distractions.",
      "keyFeatures": ["Ad blocker", "Free VPN", "Battery saver", "Visual bookmarks", "Workspaces"],
      "securityFeatures": ["Though Opera isn’t the most secure web browser, a built-in VPN is an excellent addition. Unfortunately, its limited use means you can’t choose a specific region or country. Instead, it only allows you to choose from the Americas, Asia, and Europe. Moreover, since it lacks encryption beyond HTTPS and a tunneling protocol, you can’t circumvent the regional restrictions for certain services.Having said that, Opera still offers some good features and tweaks. For instance, when you select text that contains measurement units, time zones, or currency, the browser automatically converts them and displays the conversion right above your selection. Tab previews, integrated messaging apps, and the ability to detach videos from the main screen set Opera apart from the competition. Moreover, the clean and simple interface ensures a smooth browsing experience."]
    },
    "shortdescription": "A browser that enhances your browsing experience with convenience and security.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg",
    "size": 55,
    "url": "https://www.opera.com/download",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.2,
    "downloadCount": 100000000,
    "releaseDate": "1995-04-10",
    "version": "93.0.4585.56",
    "developer": "Opera Software",
    "license": "Proprietary",
    "tags": ["browser", "opera", "ad blocker", "vpn", "battery saver"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.11 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 12 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/opera_browser_screenshot1.jpg", "https://example.com/opera_browser_screenshot2.jpg"],
    "changelog": "v93.0.4585.56: Improved VPN performance, new workspaces feature, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["opera", "browser", "ad blocker", "vpn", "battery saver", "tracker blocker", "cryptojacking protection", "fraud and malware protection"],
    "schemaVersion": 1 
  },
 
  {
    "title": "Brave",
    "description": {
      "whatItIs": "Brave is a free open-source web browser that focuses on speed and security. It blocks all ads and tracking, consequently speeding up websites. It offers sensible security defaults and optional controls so users can protect their privacy without giving up functionality. Moreover, it is Windows 11 compatible.Brave uses a special cryptocurrency named BAT, or Basic Attention Token, to compensate content creators and also has a wallet so users can manage their funds. It’s an excellent choice for people who want to take control of their browsing experience, versus other browsers like Chrome and Edge, which can track your every move.",
      "keyFeatures": ["Brave is based on Chromium, the open-source web browser project from which Google Chrome draws its code", "Brave has a range of features and functionalities that can help you stay safe and secure online without having to compromise your privacy and security", "By default, the Brave browser blocks ads and trackers, speeding up load times for websites.", "Brave automatically connects to devices via a Secure Sockets Layer (SSL) connection. This prevents ISPs, hackers, and other third parties from intercepting data"],
      "securityFeatures": ["HTTPS Everywhere", "Script blocking", "Fingerprinting protection"]
    },
    "shortdescription": "A fast, private browser with a built-in ad blocker and crypto rewards.",
    "image": "https://www.svgrepo.com/show/378778/brave.svg",
    "size": 60,
    "url": "https://brave.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.7,
    "downloadCount": 50000000,
    "releaseDate": "2016-01-20",
    "version": "1.53.115",
    "developer": "Brave Software, Inc.",
    "license": "Open-Source", 
    "tags": ["browser", "brave", "privacy", "ad blocker", "crypto"],
    "systemRequirements": {
      "minimum": "Windows 8 or later, MacOS 10.12 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/brave_browser_screenshot1.jpg", "https://example.com/brave_browser_screenshot2.jpg"],
    "changelog": "v1.53.115: Improved ad blocking, enhanced Brave Rewards, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["brave", "browser", "privacy", "ad blocker", "crypto", "rewards", "tracker blocker", "tor"],
    "schemaVersion": 1 
  },
  {
    "title": "Microsoft Edge",
    "description": {
      "whatItIs": "Microsoft's web browser, built on Chromium and offering a faster, more secure, and modern browsing experience.",
      "keyFeatures": ["Collections", "Vertical tabs", "Immersive Reader", "Tracking prevention"],
      "securityFeatures": ["Microsoft Defender SmartScreen", "Password Monitor", "InPrivate browsing"]
    },
    "shortdescription": "A fast and secure browser from Microsoft.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg",
    "size": 60,
    "url": "https://www.microsoft.com/edge",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.3,
    "downloadCount": 300000000,
    "releaseDate": "2015-07-29",
    "version": "114.0.1823.82",
    "developer": "Microsoft",
    "license": "Proprietary",
    "tags": ["browser", "microsoft", "edge", "chromium"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.13 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 12 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/microsoft_edge_screenshot1.jpg", "https://example.com/microsoft_edge_screenshot2.jpg"],
    "changelog": "v114.0.1823.82: Performance enhancements, security updates, and new features like enhanced Collections.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["microsoft", "edge", "browser", "chromium", "collections", "vertical tabs", "immersive reader", "tracking prevention"],
    "schemaVersion": 1 
  },
  {
    "title": "Tor Browser",
    "description": {
      "whatItIs": "A browser that anonymizes your web traffic by routing it through a network of volunteer-operated servers.",
      "keyFeatures": ["Onion routing", "Multiple layers of encryption", "Protection against tracking and surveillance"],
      "securityFeatures": ["Tor circuit", "HTTPS Everywhere", "NoScript"]
    },
    "shortdescription": "Browse the web anonymously and securely with the Tor Browser.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Tor_Browser_icon.svg",
    "size": 70,
    "url": "https://www.torproject.org/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android"],
    "rating": 4.5,
    "downloadCount": 5000000,
    "releaseDate": "2002-09-23",
    "version": "12.5.7",
    "developer": "The Tor Project",
    "license": "Open-Source",
    "tags": ["browser", "tor", "anonymity", "privacy", "security"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.11 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 12 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/tor_browser_screenshot1.jpg", "https://example.com/tor_browser_screenshot2.jpg"],
    "changelog": "v12.5.7: Security updates, stability improvements, and bug fixes.",
    "contentRating": "Mature",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["tor", "browser", "anonymity", "privacy", "security", "onion routing", "encryption", "surveillance"],
    "schemaVersion": 1 
  },
  {
    "title": "Internet Explorer",
    "description": {
      "whatItIs": "Microsoft's legacy web browser, now replaced by Microsoft Edge.",
      "keyFeatures": ["Tab browsing", "Pop-up blocker", "Favorites", "Compatibility View"],
      "securityFeatures": ["SmartScreen Filter", "Protected Mode", "InPrivate Browsing"]
    },
    "shortdescription": "Microsoft's legacy web browser.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Internet_Explorer_10%2B11_logo.svg",
    "size": 45,
    "url": "https://support.microsoft.com/internet-explorer",
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 3.0,
    "downloadCount": 1000000000,
    "releaseDate": "1995-08-16",
    "version": "11.0",
    "developer": "Microsoft",
    "license": "Proprietary",
    "tags": ["browser", "microsoft", "internet explorer", "legacy"],
    "systemRequirements": {
      "minimum": "Windows 7",
      "recommended": "Windows 7"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/internet_explorer_screenshot1.jpg", "https://example.com/internet_explorer_screenshot2.jpg"],
    "changelog": "No longer updated. Replaced by Microsoft Edge.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["internet explorer", "browser", "microsoft", "legacy", "tab browsing", "pop-up blocker"],
    "schemaVersion": 1 
  },
  {
    "title": "UC Browser",
    "description": {
      "whatItIs": "A mobile browser known for its fast download speeds and data-saving features.",
      "keyFeatures": ["Fast downloads", "Data saver", "Ad blocker", "Night mode"],
      "securityFeatures": ["Incognito browsing", "Facebook protection", "Adblock"]
    },
    "shortdescription": "A fast and data-efficient mobile browser.",
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c9/UC_Browser_logo.svg",
    "size": 40,
    "url": "https://www.ucweb.com/ucbrowser/",
    "category": "browser".toLowerCase(),
    "platform": ["Android", "iOS"],
    "rating": 4.1,
    "downloadCount": 500000000,
    "releaseDate": "2004-06-01",
    "version": "13.4.2.1304",
    "developer": "UCWeb",
    "license": "Proprietary",
    "tags": ["browser", "mobile", "fast", "data saving"],
    "systemRequirements": {
      "minimum": "Android 4.0 or later, iOS 9.0 or later",
      "recommended": "Android 5.0 or later, iOS 12.0 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/uc_browser_screenshot1.jpg", "https://example.com/uc_browser_screenshot2.jpg"],
    "changelog": "v13.4.2.1304: Performance improvements, new themes, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["uc browser", "mobile", "fast", "data saving", "ad blocker", "night mode"],
    "schemaVersion": 1 
  },
  {
    "title": "Baidu Browser",
    "description": {
      "whatItIs": "A Chinese web browser with built-in features like ad-blocking, mouse gestures, and video downloading.",
      "keyFeatures": ["Ad blocker", "Mouse gestures", "Video downloader", "Face recognition login"],
      "securityFeatures": ["Baidu Security Center", "Phishing protection", "Anti-virus"]
    },
    "shortdescription": "A feature-rich web browser popular in China.",
    "image": "https://example.com/baidu_browser.jpg",
    "size": 50,
    "url": "https://browser.baidu.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 3.8,
    "downloadCount": 80000000,
    "releaseDate": "2010-01-01",
    "version": "9.7.1000.36",
    "developer": "Baidu, Inc.",
    "license": "Proprietary",
    "tags": ["browser", "baidu", "chinese", "ad blocker", "mouse gestures"],
    "systemRequirements": {
      "minimum": "Windows 7 or later",
      "recommended": "Windows 10 or later"
    },
    "languages": ["Chinese", "English"],
    "screenshots": ["https://example.com/baidu_browser_screenshot1.jpg", "https://example.com/baidu_browser_screenshot2.jpg"],
    "changelog": "v9.7.1000.36: Performance improvements, new features, and security updates.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["baidu", "browser", "chinese", "ad blocker", "mouse gestures", "video downloader", "face recognition"],
    "schemaVersion": 1 
  },{
    "title": "Opera One",
    "description": {
      "whatItIs": "The latest iteration of Opera Browser, featuring a redesigned interface, AI-powered features, and enhanced browsing capabilities.",
      "keyFeatures": ["Aria AI browser assistant", "Tab Islands", "Modular design", "Built-in VPN", "Ad blocker"],
      "securityFeatures": ["Tracker blocker", "Cryptojacking protection", "Fraud and malware protection"]
    },
    "shortdescription": "The next generation of Opera, with AI-powered features and a modular design.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Opera_O.svg",
    "size": 55,
    "url": "https://www.opera.com/download",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux"],
    "rating": 4.5,
    "downloadCount": 2000000,
    "releaseDate": "2023-05-01",
    "version": "100.0.4895.60",
    "developer": "Opera Software",
    "license": "Proprietary",
    "tags": ["browser", "opera", "ai", "modular", "vpn", "ad blocker"],
    "systemRequirements": {
      "minimum": "Windows 10 or later, MacOS 11 or later, most Linux distributions",
      "recommended": "Windows 11 or later, MacOS 13 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/opera_one_screenshot1.jpg", "https://example.com/opera_one_screenshot2.jpg"],
    "changelog": "v100.0.4895.60: Aria AI enhancements, improved tab islands, performance optimizations, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["opera", "browser", "ai", "aria", "modular", "vpn", "ad blocker", "tab islands"],
    "schemaVersion": 1 
  }
  ,{
    "title": "Chromium",
    "description": {
      "whatItIs": "The open-source web browser project that forms the basis for Google Chrome and several other browsers.",
      "keyFeatures": ["Open-source development", "Frequent updates", "Base for other browsers"],
      "securityFeatures": ["Sandboxing", "Safe Browsing"]
    },
    "shortdescription": "The open-source foundation of Google Chrome.",
    "image": "https://assets-global.website-files.com/5f15081919fdf673994ab5fd/63ed2ac00935cf15cf1d00b7_Chromium%20Logo.svg",
    "size": 50,
    "url": "https://www.chromium.org/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android"],
    "rating": 4.0,
    "downloadCount": 1000000,
    "releaseDate": "2008-09-02",
    "version": "114.0.5735.198",
    "developer": "The Chromium Project",
    "license": "Open-Source", 
    "tags": ["browser", "chromium", "open-source", "google chrome"],
    "systemRequirements": {
      "minimum": "Varies depending on platform",
      "recommended": "Latest stable version of operating system"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/chromium_screenshot1.jpg", "https://example.com/chromium_screenshot2.jpg"],
    "changelog": "v114.0.5735.198: Continuous updates and improvements to the browser engine.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["chromium", "browser", "open-source", "google chrome", "web engine"],
    "schemaVersion": 1 
  },
  {
    "title": "Maxthon Cloud Browser",
    "description": {
      "whatItIs": "A cloud-based browser that syncs your data across devices and offers features like ad-blocking and note-taking.",
      "keyFeatures": ["Cloud sync", "Ad blocker", "Note-taking", "Split-screen browsing", "Night mode"],
      "securityFeatures": ["Maxthon Safeguard", "Password manager", "Private browsing"]
    },
    "shortdescription": "A browser with cloud sync and productivity features.",
    "image": "https://example.com/maxthon_cloud_browser.jpg",
    "size": 60,
    "url": "https://www.maxthon.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Android", "iOS"],
    "rating": 4.0,
    "downloadCount": 60000000,
    "releaseDate": "2002-07-23",
    "version": "6.2.0.2000",
    "developer": "Maxthon International Limited",
    "license": "Proprietary",
    "tags": ["browser", "maxthon", "cloud", "sync", "productivity"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.10 or later, Android 4.1 or later, iOS 9.0 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later, Android 6.0 or later, iOS 12.0 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/maxthon_cloud_browser_screenshot1.jpg", "https://example.com/maxthon_cloud_browser_screenshot2.jpg"],
    "changelog": "v6.2.0.2000: Performance improvements, new cloud sync options, and UI refinements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["maxthon", "browser", "cloud", "sync", "productivity", "ad blocker", "note-taking", "split-screen"],
    "schemaVersion": 1 
  },
  {
    "title": "Comodo IceDragon 32-bit",
    "description": {
      "whatItIs": "A secure browser based on Mozilla Firefox, enhanced with Comodo's security features for 32-bit systems.",
      "keyFeatures": ["Site Inspector", "Secure DNS", "Privacy enhancements", "Comodo Secure Shopping"],
      "securityFeatures": ["Comodo Web Inspector", "Comodo Secure DNS", "Enhanced privacy settings", "Comodo Dragon Updates"]
    },
    "shortdescription": "A security-focused browser based on Firefox, designed for 32-bit systems.",
    "image": "https://example.com/comodo_icedragon_32bit.jpg",
    "size": 55,
    "url": "https://www.comodo.com/home/browsers-toolbars/icedragon-browser.php", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 4.2,
    "downloadCount": 2000000,
    "releaseDate": "2012-04-28",
    "version": "102.1.5.1",
    "developer": "Comodo Group",
    "license": "Proprietary",
    "tags": ["browser", "comodo", "icedragon", "security", "firefox", "32-bit"],
    "systemRequirements": {
      "minimum": "Windows XP SP3 or later (32-bit)",
      "recommended": "Windows 7 or later (32-bit)"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/comodo_icedragon_32bit_screenshot1.jpg", "https://example.com/comodo_icedragon_32bit_screenshot2.jpg"],
    "changelog": "v102.1.5.1: Security updates, performance improvements, and stability enhancements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["comodo", "icedragon", "browser", "security", "firefox", "32-bit", "site inspector", "secure dns"],
    "schemaVersion": 1 
  },
  {
    "title": "Safari Portable",
    "description": {
      "whatItIs": "A portable version of Apple's Safari browser that can be run from a USB drive or other removable media.",
      "keyFeatures": ["Portable", "No installation required", "Sync with iCloud Keychain", "Reader View"],
      "securityFeatures": ["Intelligent Tracking Prevention", "Sandboxing", "Pop-up blocker"]
    },
    "shortdescription": "Take Apple's Safari browser with you on a USB drive.",
    "image": "https://example.com/safari_portable.jpg",
    "size": 30, 
    "url": "https://portableapps.com/apps/internet/safari_portable", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows"], 
    "rating": 3.8,
    "downloadCount": 1500000,
    "releaseDate": "2015-06-30", 
    "version": "5.1.7", 
    "developer": "Apple Inc.",
    "license": "Proprietary",
    "tags": ["browser", "safari", "portable", "apple", "usb"],
    "systemRequirements": {
      "minimum": "Windows 7 or later",
      "recommended": "Windows 10 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/safari_portable_screenshot1.jpg", "https://example.com/safari_portable_screenshot2.jpg"],
    "changelog": "v5.1.7: Security updates and bug fixes.", 
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["safari", "portable", "browser", "apple", "usb", "no installation"],
    "schemaVersion": 1 
  },
  {
    "title": "Netscape",
    "description": {
      "whatItIs": "A discontinued web browser that was one of the earliest and most popular in the 1990s.",
      "keyFeatures": ["Tab browsing", "Bookmarks", "Email client", "Newsgroup reader"],
      "securityFeatures": ["Basic SSL support"]
    },
    "shortdescription": "A historic web browser that shaped the early internet.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netscape_icon.svg",
    "size": 20, 
    "url": "https://en.wikipedia.org/wiki/Netscape_Navigator", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux"], 
    "rating": 3.0,
    "downloadCount": 10000000, 
    "releaseDate": "1994-12-15",
    "version": "9.0.0.6", 
    "developer": "Netscape Communications Corporation (AOL)",
    "license": "Proprietary",
    "tags": ["browser", "netscape", "legacy", "discontinued", "historic"],
    "systemRequirements": {
      "minimum": "Windows 95 or later, MacOS 8 or later",
      "recommended": "N/A (discontinued)"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/netscape_screenshot1.jpg", "https://example.com/netscape_screenshot2.jpg"],
    "changelog": "No longer updated (discontinued).",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["netscape", "browser", "legacy", "discontinued", "historic", "90s"],
    "schemaVersion": 1 
  },
  {
    "title": "Yandex.Browser",
    "description": {
      "whatItIs": "A Russian web browser developed by Yandex, featuring ad blocking, translation, and integration with Yandex services.",
      "keyFeatures": ["Yandex.Protect", "Turbo Mode", "DNSCrypt", "SmartBox"],
      "securityFeatures": ["Protect active protection", "DNS spoofing protection", "Wi-Fi protection"]
    },
    "shortdescription": "A fast and secure browser with integrated Yandex services.",
    "image": "https://example.com/yandex_browser.jpg",
    "size": 65,
    "url": "https://browser.yandex.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android", "iOS"],
    "rating": 4.2,
    "downloadCount": 80000000,
    "releaseDate": "2012-10-01",
    "version": "23.5.3.890",
    "developer": "Yandex",
    "license": "Proprietary",
    "tags": ["browser", "yandex", "russian", "ad blocker", "turbo mode"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.12 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/yandex_browser_screenshot1.jpg", "https://example.com/yandex_browser_screenshot2.jpg"],
    "changelog": "v23.5.3.890: Improved performance, new features like SmartBox suggestions, and security updates.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["yandex", "browser", "russian", "protect", "turbo mode", "dnscrypt", "smartbox"],
    "schemaVersion": 1 
  },
  {
    "title": "Arc Browser",
    "description": {
      "whatItIs": "A modern browser designed for a visual, intuitive, and customizable browsing experience.",
      "keyFeatures": ["Spaces", "Easel", "Boosts", "Split View", "Easels"],
      "securityFeatures": ["Built-in ad blocker", "Tracker blocker", "Privacy-focused design"]
    },
    "shortdescription": "A browser reimagined for the way you work and play.",
    "image": "https://example.com/arc_browser.jpg",
    "size": 80,
    "url": "https://arc.net/",
    "category": "browser".toLowerCase(),
    "platform": ["MacOS"], 
    "rating": 4.6,
    "downloadCount": 1500000,
    "releaseDate": "2022-04-05", 
    "version": "1.14.2",
    "developer": "The Browser Company",
    "license": "Proprietary",
    "tags": ["browser", "arc", "modern", "visual", "customizable"],
    "systemRequirements": {
      "minimum": "MacOS 11.0 or later",
      "recommended": "MacOS 12.0 or later"
    },
    "languages": ["English"],
    "screenshots": ["https://example.com/arc_browser_screenshot1.jpg", "https://example.com/arc_browser_screenshot2.jpg"],
    "changelog": "v1.14.2: Performance improvements, new Boosts, and Easel enhancements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true, 
    "keywords": ["arc", "browser", "modern", "visual", "customizable", "spaces", "easel", "boosts"],
    "schemaVersion": 1 
  },
  {
    "title": "Vivaldi",
    "description": {
      "whatItIs": "A highly customizable browser for power users, with advanced features like tab stacking, keyboard shortcuts, and notes.",
      "keyFeatures": ["Tab stacking", "Customizable interface", "Keyboard shortcuts", "Notes", "Web panels"],
      "securityFeatures": ["Tracker blocker", "Ad blocker", "Privacy settings"]
    },
    "shortdescription": "A customizable browser for power users who demand more.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Vivaldi_web_browser_logo.svg",
    "size": 60,
    "url": "https://vivaldi.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux", "Android"],
    "rating": 4.5,
    "downloadCount": 3000000,
    "releaseDate": "2016-04-06",
    "version": "6.0.2979.24",
    "developer": "Vivaldi Technologies",
    "license": "Proprietary",
    "tags": ["browser", "vivaldi", "customizable", "power user", "tabs"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.10 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/vivaldi_screenshot1.jpg", "https://example.com/vivaldi_screenshot2.jpg"],
    "changelog": "v6.0.2979.24: New Workspaces feature, improved tab management, and performance optimizations.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["vivaldi", "browser", "customizable", "power user", "tab stacking", "keyboard shortcuts", "notes"],
    "schemaVersion": 1 
  },
  {
    "title": "Mullvad Browser",
    "description": {
      "whatItIs": "A privacy-focused browser developed in collaboration with the Tor Project, designed to protect your anonymity online.",
      "keyFeatures": ["Tor integration", "Privacy by default", "No tracking", "No telemetry"],
      "securityFeatures": ["Tor circuit", "HTTPS Everywhere", "Fingerprinting protection"]
    },
    "shortdescription": "A browser that prioritizes privacy and anonymity above all else.",
    "image": "https://example.com/mullvad_browser.jpg",
    "size": 55,
    "url": "https://mullvad.net/en/browser/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux"],
    "rating": 4.6,
    "downloadCount": 100000,
    "releaseDate": "2022-06-28",
    "version": "102.6.0",
    "developer": "Mullvad VPN",
    "license": "Open-Source",
    "tags": ["browser", "mullvad", "privacy", "anonymity", "tor"],
    "systemRequirements": {
      "minimum": "Windows 10 or later, MacOS 10.15 or later, most Linux distributions",
      "recommended": "Windows 11 or later, MacOS 12 or later"
    },
    "languages": ["English", "Swedish"],
    "screenshots": ["https://example.com/mullvad_browser_screenshot1.jpg", "https://example.com/mullvad_browser_screenshot2.jpg"],
    "changelog": "v102.6.0: Security updates, bug fixes, and improvements to Tor integration.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["mullvad", "browser", "privacy", "anonymity", "tor", "no tracking", "no telemetry"],
    "schemaVersion": 1 
  },
  {
    "title": "GreenBrowser",
    "description": {
      "whatItIs": "A lightweight and fast web browser based on Internet Explorer, with additional features and customization options.",
      "keyFeatures": ["Ad filter", "Mouse gestures", "Auto form filler", "Download manager"],
      "securityFeatures": ["Popup blocker", "Privacy protection settings"]
    },
    "shortdescription": "A customizable and lightweight browser based on Internet Explorer.",
    "image": "https://example.com/greenbrowser.jpg",
    "size": 10, 
    "url": "https://www.greenbrowser.org/", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 3.5,
    "downloadCount": 200000,
    "releaseDate": "2004-09-01",
    "version": "6.7.1205", 
    "developer": "MoreQuick",
    "license": "Free",
    "tags": ["browser", "greenbrowser", "lightweight", "customizable", "internet explorer"],
    "systemRequirements": {
      "minimum": "Windows XP",
      "recommended": "Windows 7 or later"
    },
    "languages": ["English", "Chinese"],
    "screenshots": ["https://example.com/greenbrowser_screenshot1.jpg", "https://example.com/greenbrowser_screenshot2.jpg"],
    "changelog": "v6.7.1205: Bug fixes and stability improvements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["greenbrowser", "browser", "lightweight", "customizable", "internet explorer", "ad filter", "mouse gestures"],
    "schemaVersion": 1 
  },
  {
    "title": "McAfee Personal Security",
    "description": {
      "whatItIs": "McAfee's security suite offering antivirus, firewall, and web protection features, with a secure browser included.",
      "keyFeatures": ["Antivirus protection", "Firewall", "WebAdvisor safe browsing", "Password manager"],
      "securityFeatures": ["Real-time scanning", "Ransomware protection", "Secure VPN", "Identity protection"]
    },
    "shortdescription": "Comprehensive security suite with a secure browser.",
    "image": "https://example.com/mcafee_personal_security.jpg",
    "size": 150,
    "url": "https://www.mcafee.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Android", "iOS"],
    "rating": 4.2,
    "downloadCount": 100000000,
    "releaseDate": "2006-03-06", 
    "version": "16.0 R26", 
    "developer": "McAfee, LLC",
    "license": "Proprietary",
    "tags": ["security", "mcafee", "antivirus", "firewall", "web protection"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.12 or later, Android 5.0 or later, iOS 11.0 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later, Android 8.0 or later, iOS 13.0 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/mcafee_personal_security_screenshot1.jpg", "https://example.com/mcafee_personal_security_screenshot2.jpg"],
    "changelog": "v16.0 R26: Improved threat detection, enhanced VPN performance, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 49.99,
      "currency": "USD"
    },
    "isFree": false, 
    "keywords": ["mcafee", "security", "antivirus", "firewall", "web protection", "webadvisor", "password manager"],
    "schemaVersion": 1 
  },
  {
    "title": "Chedot",
    "description": {
      "whatItIs": "A browser designed for online shoppers, offering features like price comparisons, coupon codes, and cashback rewards.",
      "keyFeatures": ["Price comparison", "Coupon codes", "Cashback", "Price history tracking"],
      "securityFeatures": ["Secure shopping protection"]
    },
    "shortdescription": "A browser that helps you save money while shopping online.",
    "image": "https://example.com/chedot.jpg",
    "size": 50, 
    "url": "https://www.chedot.com/", 
    "category": "browser".toLowerCase(), 
    "platform": ["Windows", "MacOS", "Android", "iOS"],
    "rating": 4.2,
    "downloadCount": 2000000,
    "releaseDate": "2020-03-15",
    "version": "2.5.1",
    "developer": "Chedot, Inc.",
    "license": "Proprietary",
    "tags": ["browser", "chedot", "shopping", "coupons", "cashback"],
    "systemRequirements": {
      "minimum": "Windows 10 or later, MacOS 10.14 or later, Android 6.0 or later, iOS 12.0 or later",
      "recommended": "Latest OS version"
    },
    "languages": ["English"],
    "screenshots": ["https://example.com/chedot_screenshot1.jpg", "https://example.com/chedot_screenshot2.jpg"],
    "changelog": "v2.5.1: Improved price comparison, new store integrations, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["chedot", "browser", "shopping", "coupons", "cashback", "price comparison"],
    "schemaVersion": 1 
  },
  {
    "title": "Opera Neon",
    "description": {
      "whatItIs": "A concept browser from Opera that experimented with a new interface and innovative features.",
      "keyFeatures": ["Split-screen mode", "Physics-based tabs", "Video pop-out", "Built-in snapshot tool"],
      "securityFeatures": ["Same security features as Opera Browser"]
    },
    "shortdescription": "A concept browser from Opera with innovative features.",
    "image": "https://example.com/opera_neon.jpg",
    "size": 60,
    "url": "https://www.opera.com/computer/neon",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS"],
    "rating": 3.9,
    "downloadCount": 1000000,
    "releaseDate": "2017-01-11",
    "version": "N/A (Discontinued)", 
    "developer": "Opera Software",
    "license": "Proprietary",
    "tags": ["browser", "opera", "neon", "concept", "experimental"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.10 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/opera_neon_screenshot1.jpg", "https://example.com/opera_neon_screenshot2.jpg"],
    "changelog": "Discontinued project.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["opera", "neon", "browser", "concept", "experimental", "split-screen", "tabs"],
    "schemaVersion": 1 
  },
  {
    "title": "SlimBrowser",
    "description": {
      "whatItIs": "A fast, secure, and efficient web browser with a built-in ad blocker, download accelerator, and form filler.",
      "keyFeatures": ["Ad blocker", "Download accelerator", "Form filler", "Popup killer", "Privacy protection"],
      "securityFeatures": ["Popup blocker", "Tracking protection", "Sandbox"]
    },
    "shortdescription": "A fast and efficient browser with productivity tools.",
    "image": "https://example.com/slimbrowser.jpg",
    "size": 15,
    "url": "https://www.slimbrowser.net/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 4.1,
    "downloadCount": 500000,
    "releaseDate": "2003-05-20", 
    "version": "11.0.0.0",
    "developer": "FlashPeak Inc.",
    "license": "Proprietary",
    "tags": ["browser", "slimbrowser", "fast", "efficient", "ad blocker"],
    "systemRequirements": {
      "minimum": "Windows XP or later",
      "recommended": "Windows 10 or later"
    },
    "languages": ["English"],
    "screenshots": ["https://example.com/slimbrowser_screenshot1.jpg", "https://example.com/slimbrowser_screenshot2.jpg"],
    "changelog": "v11.0.0.0: Performance improvements, updated ad blocker, and UI enhancements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["slimbrowser", "browser", "fast", "efficient", "ad blocker", "download accelerator", "form filler"],
    "schemaVersion": 1 
  },
  {
    "title": "iTop VPN Browser",
    "description": {
      "whatItIs": "A privacy-focused browser with built-in VPN functionality to secure your online activities and unblock restricted websites.",
      "keyFeatures": ["Built-in VPN", "Ad blocker", "Anti-tracking", "Browser fingerprint protection"],
      "securityFeatures": ["AES-256 encryption", "Kill switch", "No-log policy"]
    },
    "shortdescription": "Securely browse the web with a browser that includes a VPN.",
    "image": "https://example.com/itop_vpn_browser.jpg",
    "size": 60, 
    "url": "https://www.itopvpn.com/browser", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS"],
    "rating": 4.3,
    "downloadCount": 1500000,
    "releaseDate": "2021-08-15",
    "version": "3.1.0",
    "developer": "iTop VPN",
    "license": "Proprietary",
    "tags": ["browser", "vpn", "security", "privacy", "ad blocker", "anti-tracking"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.13 or later",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/itop_vpn_browser_screenshot1.jpg", "https://example.com/itop_vpn_browser_screenshot2.jpg"],
    "changelog": "v3.1.0: Improved VPN performance, added new server locations, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true, 
    "keywords": ["itop vpn", "browser", "vpn", "security", "privacy", "ad blocker", "anti-tracking"],
    "schemaVersion": 1 
  },
  {
    "title": "SSuite NetSurfer Browser",
    "description": {
      "whatItIs": "A lightweight, portable web browser designed for older or low-spec computers.",
      "keyFeatures": ["Small size", "Portable", "Low resource usage", "Tabbed browsing", "Built-in search"],
      "securityFeatures": ["Popup blocker"]
    },
    "shortdescription": "A simple and lightweight browser for older systems.",
    "image": "https://example.com/ssuite_netsurfer_browser.jpg",
    "size": 2, 
    "url": "https://www.ssuitesoft.com/netsurfer.htm", 
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 3.6,
    "downloadCount": 500000,
    "releaseDate": "2015-02-02",
    "version": "3.6",
    "developer": "SSuite Office Software",
    "license": "Free",
    "tags": ["browser", "ssuite", "lightweight", "portable", "low-spec"],
    "systemRequirements": {
      "minimum": "Windows 98 or later",
      "recommended": "Windows XP or later"
    },
    "languages": ["English"],
    "screenshots": ["https://example.com/ssuite_netsurfer_browser_screenshot1.jpg", "https://example.com/ssuite_netsurfer_browser_screenshot2.jpg"],
    "changelog": "v3.6: Bug fixes and stability improvements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["ssuite", "netsurfer", "browser", "lightweight", "portable", "low-spec"],
    "schemaVersion": 1 
  },
  {
    "title": "SeaMonkey",
    "description": {
      "whatItIs": "An all-in-one internet application suite including a web browser, email client, newsgroup client, IRC chat, and HTML editor.",
      "keyFeatures": ["Web browser", "Email client", "Newsgroup client", "IRC chat", "HTML editor"],
      "securityFeatures": ["Popup blocker", "Phishing protection", "Password manager"]
    },
    "shortdescription": "A versatile internet suite with a browser, email, chat, and more.",
    "image": "https://example.com/seamonkey.jpg",
    "size": 55, 
    "url": "https://www.seamonkey-project.org/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux"],
    "rating": 4.2,
    "downloadCount": 1500000,
    "releaseDate": "2006-01-30",
    "version": "2.60",
    "developer": "SeaMonkey Council",
    "license": "Open-Source", 
    "tags": ["browser", "seamonkey", "email", "newsgroup", "irc", "html editor"],
    "systemRequirements": {
      "minimum": "Windows 7 or later, MacOS 10.12 or later, most Linux distributions",
      "recommended": "Windows 10 or later, MacOS 11 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/seamonkey_screenshot1.jpg", "https://example.com/seamonkey_screenshot2.jpg"],
    "changelog": "v2.60: Security updates, bug fixes, and improvements to various components.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["seamonkey", "browser", "email", "newsgroup", "irc", "html editor"],
    "schemaVersion": 1 
  },
  {
    "title": "CCleaner Browser",
    "description": {
      "whatItIs": "A privacy-focused browser from the makers of CCleaner, designed to protect you from online tracking and unwanted ads.",
      "keyFeatures": ["Ad blocker", "Anti-tracking", "Fingerprint protection", "Privacy cleaner", "Security check"],
      "securityFeatures": ["HTTPS encryption", "Anti-phishing", "Anti-malware"]
    },
    "shortdescription": "A browser that prioritizes privacy and security while you browse.",
    "image": "https://example.com/ccleaner_browser.jpg",
    "size": 60,
    "url": "https://www.ccleaner.com/ccleaner/browser",
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 4.3,
    "downloadCount": 3000000,
    "releaseDate": "2019-08-20", 
    "version": "91.0.4472.164",
    "developer": "Piriform Ltd",
    "license": "Proprietary",
    "tags": ["browser", "ccleaner", "privacy", "security", "ad blocker", "anti-tracking"],
    "systemRequirements": {
      "minimum": "Windows 7 or later",
      "recommended": "Windows 10 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/ccleaner_browser_screenshot1.jpg", "https://example.com/ccleaner_browser_screenshot2.jpg"],
    "changelog": "v91.0.4472.164: Improved privacy protection, faster browsing, and bug fixes.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["ccleaner", "browser", "privacy", "security", "ad blocker", "anti-tracking"],
    "schemaVersion": 1 
  },
  {
    "title": "Firefox Nightly",
    "description": {
      "whatItIs": "The most experimental version of Mozilla Firefox, updated daily with the latest code changes and features.",
      "keyFeatures": ["Bleeding-edge features", "Unstable builds", "Developer tools", "Feedback to Mozilla"],
      "securityFeatures": ["Enhanced Tracking Protection", "Sandboxing", "Content blocking"]
    },
    "shortdescription": "Test the very latest Firefox features, even before beta.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    "size": 60,
    "url": "a",
    "category": "browser".toLowerCase(),
    "platform": ["Windows", "MacOS", "Linux"],
    "rating": 3.5,
    "downloadCount": 500000,
    "releaseDate": "2005-07-11",
    "version": "117.0a1 (2023-07-02)",
    "developer": "Mozilla Foundation",
    "license": "Open-Source", 
    "tags": ["browser", "mozilla", "firefox", "nightly", "experimental", "developer"],
    "systemRequirements": {
      "minimum": "Same as Firefox stable",
      "recommended": "Same as Firefox stable"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/firefox_nightly_screenshot1.jpg", "https://example.com/firefox_nightly_screenshot2.jpg"],
    "changelog": "Updated daily with the latest code changes and features.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["mozilla", "firefox", "nightly", "browser", "experimental", "developer", "bleeding-edge"],
    "schemaVersion": 1 
  },
  {
    "title": "Cent Browser",
    "description": {
      "whatItIs": "A Chromium-based browser that enhances the browsing experience with additional features and customization options.",
      "keyFeatures": ["Mouse gestures", "Super Drag & Drop", "Scrool tab switching", "Memory optimization", "Lazy session loading"],
      "securityFeatures": ["Safe Browsing", "Sandboxing", "Auto-updates"]
    },
    "shortdescription": "A Chromium-based browser with enhanced features.",
    "image": "https://example.com/cent_browser.jpg",
    "size": 70,
    "url": "https://www.centbrowser.com/",
    "category": "browser".toLowerCase(),
    "platform": ["Windows"],
    "rating": 4.3,
    "downloadCount": 1000000,
    "releaseDate": "2015-05-19", 
    "version": "5.3.1001.153",
    "developer": "Cent Studio",
    "license": "Proprietary",
    "tags": ["browser", "cent", "chromium", "customizable", "mouse gestures"],
    "systemRequirements": {
      "minimum": "Windows 7 or later",
      "recommended": "Windows 10 or later"
    },
    "languages": ["Multiple languages"],
    "screenshots": ["https://example.com/cent_browser_screenshot1.jpg", "https://example.com/cent_browser_screenshot2.jpg"],
    "changelog": "v5.3.1001.153: Performance optimizations, bug fixes, and UI improvements.",
    "contentRating": "Everyone",
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "isFree": true,
    "keywords": ["cent browser", "browser", "chromium", "customizable", "mouse gestures", "super drag & drop"],
    "schemaVersion": 1 
  }
  

  
];

module.exports = { data: sampleListings };
