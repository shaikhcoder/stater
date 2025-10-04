import { useEffect, useRef } from "react";
import gsap from "gsap";

const DownloadSection = () => {
  const downloadData = [
    {
      platform: "Web App",
      version: "v1.0.0",
      size: "Instant Access",
      status: "Available",
      type: "Web",
      link: "#",
      isExternal: true
    },
    {
      platform: "Android",
      version: "v1.0.0",
      size: "91.1 MB",
      status: "Available",
      type: "APK",
      link: "",
      isExternal: false
    },
    {
      platform: "iOS",
      version: "v1.0.0",
      size: "",
      status: "Coming Soon",
      type: "IPA",
      link: null,
      isExternal: false
    },
    {
      platform: "Windows",
      version: "v1.0.0",
      size: "",
      status: "Coming Soon",
      type: "EXE",
      link: null,
      isExternal: false
    },
    {
      platform: "macOS",
      version: "v1.0.0",
      size: "",
      status: "Coming Soon",
      type: "DMG",
      link: null,
      isExternal: false
    },
    {
      platform: "Linux",
      version: "v1.0.0",
      size: "",
      status: "Coming Soon",
      type: "DEB",
      link: null,
      isExternal: false
    }
  ];

  const handleDownload = (platform, type, link, isExternal) => {
    if (link && link !== "#") {
      if (isExternal) {
        // Open web app in new tab
        window.open(link, '_blank');
      } else {
        // Trigger download for binary files
        const a = document.createElement('a');
        a.href = link;
        a.download = `${platform}-${type}-${type === 'Web' ? 'app' : 'app'}.${type.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } else if (platform === "Android" && link === "#") {
      alert(`Please add the Android APK download link to the downloadData array in DownloadSection.jsx`);
    } else {
      alert(`${platform} version coming soon!`);
    }
  };

  return (
    <section id="download" className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-card p-4 sm:p-8 rounded-md space-y-6 sm:space-y-8">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl font-bold text-text-secondary">
          Download 
        </h1>
        <p className="text-lg sm:text-xl text-text-info max-w-2xl px-4">
          Get the latest version of exampleText for your platform. Choose from our available binaries below.
        </p>
      </div>

      <div className="w-full max-w-6xl animate-slide-up">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Platform</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Version</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Size</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Status</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Type</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-card-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {downloadData.map((item, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-card-foreground font-medium">
                    {item.platform}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-muted-foreground">
                    {item.version}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-muted-foreground">
                    {item.size}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Available" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-muted-foreground">
                    {item.type}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm">
                    <button
                      onClick={() => handleDownload(item.platform, item.type, item.link, item.isExternal)}
                      disabled={item.status !== "Available"}
                      className={`download-btn px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                        item.status === "Available"
                          ? "bg-btn-primary text-white hover:bg-btn-highlight hover:scale-105 shadow-lg hover:shadow-xl"
                          : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                      }`}
                    >
                      {item.status === "Available" 
                        ? (item.isExternal ? "Open App" : "Download") 
                        : "Coming Soon"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {downloadData.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-card-foreground">{item.platform}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === "Available" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                <div>
                  <span className="font-medium">Version:</span> {item.version}
                </div>
                <div>
                  <span className="font-medium">Size:</span> {item.size}
                </div>
                <div>
                  <span className="font-medium">Type:</span> {item.type}
                </div>
              </div>
              <button
                onClick={() => handleDownload(item.platform, item.type, item.link, item.isExternal)}
                disabled={item.status !== "Available"}
                className={`download-btn w-full px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  item.status === "Available"
                    ? "bg-btn-primary text-white hover:bg-btn-highlight hover:scale-105 shadow-lg hover:shadow-xl"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                {item.status === "Available" 
                  ? (item.isExternal ? "Open App" : "Download") 
                  : "Coming Soon"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
